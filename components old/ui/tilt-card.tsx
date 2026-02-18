'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  rotateXMax?: number
  rotateYMax?: number
  scale?: number
  [key: string]: any
}

export function TiltCard({
  children,
  className = '',
  rotateXMax = 10,
  rotateYMax = 10,
  scale = 1.05,
  ...props
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0, opacity: 1 })
  const animationFrameRef = useRef<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    // Use requestAnimationFrame to prevent blocking the main thread
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = ref.current!.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateY = ((x - centerX) / centerX) * rotateXMax
      const rotateX = ((centerY - y) / centerY) * rotateYMax

      setPosition({ x: rotateY, y: rotateX, opacity: 0.95 })
    })
  }

  const handleMouseEnter = () => {
    setPosition(prev => ({ ...prev, opacity: 0.95 }))
  }

  const handleMouseLeave = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    setPosition({ x: 0, y: 0, opacity: 1 })
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${position.y}deg) rotateY(${position.x}deg)`,
        opacity: position.opacity,
        transformStyle: 'preserve-3d', // Optimize for 3D transforms
      }}
      whileHover={{ y: -10, scale, z: 0 }} // Add z property to promote to its own layer
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 25, mass: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}