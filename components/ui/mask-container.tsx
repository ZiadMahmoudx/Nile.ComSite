'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface MaskContainerProps {
    children: React.ReactNode
    revealText?: string
    className?: string
    revealClassName?: string
    size?: number
    revealSize?: number
}

export function MaskContainer({
    children,
    revealText,
    className,
    revealClassName,
    size = 10,
    revealSize = 600,
}: MaskContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const maskSize = useSpring(size, { damping: 30, stiffness: 300 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        }

        const handleMouseEnter = () => {
            maskSize.set(revealSize)
        }

        const handleMouseLeave = () => {
            maskSize.set(size)
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener('mousemove', handleMouseMove)
            container.addEventListener('mouseenter', handleMouseEnter)
            container.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove)
                container.removeEventListener('mouseenter', handleMouseEnter)
                container.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [mouseX, mouseY, maskSize, size, revealSize])

    return (
        <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
            {/* Default view */}
            <div className="pointer-events-none">{children}</div>

            {/* Masked reveal layer */}
            {revealText && (
                <motion.div
                    className={cn(
                        'absolute inset-0 flex items-center justify-center pointer-events-none',
                        revealClassName
                    )}
                    style={{
                        maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='white'/%3E%3C/svg%3E")`,
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='white'/%3E%3C/svg%3E")`,
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize: maskSize,
                        WebkitMaskSize: maskSize,
                        maskPosition: `${mouseX.get() - maskSize.get() / 2}px ${mouseY.get() - maskSize.get() / 2}px`,
                        WebkitMaskPosition: `${mouseX.get() - maskSize.get() / 2}px ${mouseY.get() - maskSize.get() / 2}px`,
                    }}
                >
                    <span className="text-5xl lg:text-7xl font-black text-gradient">{revealText}</span>
                </motion.div>
            )}
        </div>
    )
}
