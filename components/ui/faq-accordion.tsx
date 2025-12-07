'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
    question: string
    answer: string
}

interface FAQAccordionProps {
    items: FAQItem[]
    className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className={cn('space-y-4', className)}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="rounded-xl border-2 border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
                >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
                    >
                        <span className="font-semibold text-foreground pr-4">
                            {item.question}
                        </span>
                        <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                        >
                            {openIndex === index ? (
                                <Minus className="w-5 h-5 text-primary" />
                            ) : (
                                <Plus className="w-5 h-5 text-muted-foreground" />
                            )}
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
