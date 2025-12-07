'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
    phoneNumber?: string
    message?: string
    className?: string
}

export function WhatsAppButton({
    phoneNumber = '201234567890',
    message = 'Hello! I would like to inquire about your IT solutions.',
    className
}: WhatsAppButtonProps) {
    const [isHovered, setIsHovered] = useState(false)

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            className={cn(
                'fixed bottom-24 right-8 z-50 flex items-center gap-3',
                className
            )}
        >
            {/* Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="hidden sm:block bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
                    >
                        Chat with us on WhatsApp
                    </motion.span>
                )}
            </AnimatePresence>

            {/* Button */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
            >
                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />

                {/* Button */}
                <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors">
                    <MessageCircle className="w-7 h-7 text-white" />
                </div>
            </motion.div>
        </motion.a>
    )
}
