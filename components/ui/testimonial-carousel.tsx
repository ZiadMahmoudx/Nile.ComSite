'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Testimonial {
    id: number
    name: string
    role: string
    company: string
    content: string
    rating?: number
    avatar?: string
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[]
    autoPlay?: boolean
    interval?: number
    className?: string
}

export function TestimonialCarousel({
    testimonials,
    autoPlay = true,
    interval = 5000,
    className,
}: TestimonialCarouselProps) {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    const next = useCallback(() => {
        setDirection(1)
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }, [testimonials.length])

    const prev = useCallback(() => {
        setDirection(-1)
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }, [testimonials.length])

    useEffect(() => {
        if (!autoPlay) return
        const timer = setInterval(next, interval)
        return () => clearInterval(timer)
    }, [autoPlay, interval, next])

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    }

    const testimonial = testimonials[current]

    return (
        <div className={cn('relative', className)}>
            <Card className="border-2 border-border bg-card overflow-hidden">
                <CardContent className="p-8 md:p-12 min-h-[300px] flex flex-col justify-center">
                    <Quote className="w-12 h-12 text-primary/20 mb-6" />

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="space-y-6"
                        >
                            {/* Rating */}
                            {testimonial.rating && (
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={cn(
                                                'w-5 h-5',
                                                i < testimonial.rating! ? 'text-yellow-500 fill-yellow-500' : 'text-muted'
                                            )}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Quote */}
                            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
                                "{testimonial.content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-red-500 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                            onClick={prev}
                            className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={next}
                            className="p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > current ? 1 : -1)
                                    setCurrent(index)
                                }}
                                className={cn(
                                    'w-2 h-2 rounded-full transition-all duration-300',
                                    index === current ? 'bg-primary w-6' : 'bg-muted'
                                )}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
