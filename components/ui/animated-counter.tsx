'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
    value: number | string
    suffix?: string
    prefix?: string
    duration?: number
    className?: string
    decimals?: number
}

export function AnimatedCounter({
    value,
    suffix = '',
    prefix = '',
    duration = 2000,
    className,
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [displayValue, setDisplayValue] = useState(0)

    // Parse numeric value from string like "500+" or "99.9%"
    const numericValue = typeof value === 'string'
        ? parseFloat(value.replace(/[^0-9.]/g, ''))
        : value

    useEffect(() => {
        if (!isInView) return

        let startTime: number | null = null
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentValue = numericValue * easeOut

            setDisplayValue(currentValue)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationFrame)
    }, [isInView, numericValue, duration])

    const formattedValue = decimals > 0
        ? displayValue.toFixed(decimals)
        : Math.floor(displayValue).toString()

    return (
        <span ref={ref} className={cn('tabular-nums', className)}>
            {prefix}{formattedValue}{suffix}
        </span>
    )
}
