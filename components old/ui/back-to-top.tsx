'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BackToTopProps {
    showAfter?: number
    className?: string
}

export function BackToTop({ showAfter = 400, className }: BackToTopProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > showAfter)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [showAfter])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    onClick={scrollToTop}
                    className={cn(
                        'fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-2.5 sm:p-3 rounded-full',
                        'bg-primary text-white shadow-lg shadow-primary/30',
                        'hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40',
                        'transition-all duration-300 hover:-translate-y-1',
                        'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
                        className
                    )}
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
