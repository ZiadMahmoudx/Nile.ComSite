'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
    value?: number | string
    end?: number | string  // alias for value
    suffix?: string
    prefix?: string
    duration?: number
    className?: string
    decimals?: number
}

export function AnimatedCounter({
    value,
    end,
    suffix = '',
    prefix = '',
    duration = 2000,
    className,
    decimals = 0,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: false, margin: '-50px' })

    // Use 'end' prop if 'value' is not provided
    const rawValue = value ?? end ?? 0

    const [displayValue, setDisplayValue] = useState(0)

    // Parse numeric value from string like "500+" or "99.9%"
    const numericValue = typeof rawValue === 'string'
        ? parseFloat(rawValue.replace(/[^0-9.]/g, '')) || 0
        : (rawValue || 0)

    const animate = useCallback(() => {
        let startTime: number | null = null
        let animationFrame: number

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)

            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            const currentValue = numericValue * easeOut

            setDisplayValue(currentValue)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(step)
            }
        }

        animationFrame = requestAnimationFrame(step)
        return () => cancelAnimationFrame(animationFrame)
    }, [numericValue, duration])

    useEffect(() => {
        if (isInView) {
            // Reset to 0 and re-animate every time it comes into view
            setDisplayValue(0)
            const cleanup = animate()
            return cleanup
        } else {
            // Reset when out of view so it re-counts next time
            setDisplayValue(0)
        }
    }, [isInView, animate])

    const formattedValue = decimals > 0
        ? displayValue.toFixed(decimals)
        : Math.floor(displayValue).toString()

    return (
        <span ref={ref} className={cn('tabular-nums', className)}>
            {prefix}{formattedValue}{suffix}
        </span>
    )
}
