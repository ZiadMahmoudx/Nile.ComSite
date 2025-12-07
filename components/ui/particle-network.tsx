'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ParticleNetworkProps {
    className?: string
    particleCount?: number
    particleColor?: string
    lineColor?: string
    maxDistance?: number
    speed?: number
}

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
}

export function ParticleNetwork({
    className,
    particleCount = 80,
    particleColor = 'rgba(220, 38, 38, 0.8)',
    lineColor = 'rgba(220, 38, 38, 0.15)',
    maxDistance = 150,
    speed = 0.5,
}: ParticleNetworkProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const animationRef = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const resizeCanvas = () => {
            const rect = container.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }

        const initParticles = () => {
            particlesRef.current = []
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * speed,
                    vy: (Math.random() - 0.5) * speed,
                    radius: Math.random() * 2 + 1,
                })
            }
        }

        const drawParticle = (p: Particle) => {
            ctx.beginPath()
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
            ctx.fillStyle = particleColor
            ctx.fill()
        }

        const drawLine = (p1: Particle, p2: Particle, distance: number) => {
            const opacity = 1 - distance / maxDistance
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = lineColor.replace('0.15', String(opacity * 0.15))
            ctx.lineWidth = 1
            ctx.stroke()
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particlesRef.current.forEach((p, i) => {
                // Update position
                p.x += p.vx
                p.y += p.vy

                // Bounce off walls
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Gentle pull towards mouse
                const dx = mouseRef.current.x - p.x
                const dy = mouseRef.current.y - p.y
                const mouseDist = Math.sqrt(dx * dx + dy * dy)
                if (mouseDist < 200) {
                    p.vx += dx * 0.0002
                    p.vy += dy * 0.0002
                }

                drawParticle(p)

                // Connect particles
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const p2 = particlesRef.current[j]
                    const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
                    if (dist < maxDistance) {
                        drawLine(p, p2, dist)
                    }
                }
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        resizeCanvas()
        initParticles()
        animate()

        window.addEventListener('resize', () => {
            resizeCanvas()
            initParticles()
        })
        container.addEventListener('mousemove', handleMouseMove)

        return () => {
            cancelAnimationFrame(animationRef.current)
            window.removeEventListener('resize', resizeCanvas)
            container.removeEventListener('mousemove', handleMouseMove)
        }
    }, [particleCount, particleColor, lineColor, maxDistance, speed])

    return (
        <div ref={containerRef} className={cn('absolute inset-0 overflow-hidden', className)}>
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
    )
}
