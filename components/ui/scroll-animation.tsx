'use client'

import { motion, useInView, Variant } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollAnimationProps {
    children: React.ReactNode
    className?: string
    animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-right' | 'slide-left'
    delay?: number
    duration?: number
    viewport?: { once?: boolean; margin?: any }
}

const variants: Record<string, { hidden: Variant; visible: Variant }> = {
    'fade-up': {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    'fade-in': {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    'scale-up': {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    'slide-right': {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    'slide-left': {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
}

export function ScrollAnimation({
    children,
    className,
    animation = 'fade-up',
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: '-50px' as any },
}: ScrollAnimationProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants[animation]}
            transition={{ duration, delay, ease: 'easeOut' }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    )
}
