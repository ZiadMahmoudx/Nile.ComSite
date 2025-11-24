'use client'

import React, { useRef, useState } from 'react'
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateY = ((x - centerX) / centerX) * rotateXMax
    const rotateX = ((centerY - y) / centerY) * rotateYMax
    const opacity = 0.9
    
    setPosition({ x: rotateY, y: rotateX, opacity })
  }

  const handleMouseEnter = () => {
    setPosition(prev => ({ ...prev, opacity: 0.9 }))
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0, opacity: 1 })
  }

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
      }}
      whileHover={{ y: -10, scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}