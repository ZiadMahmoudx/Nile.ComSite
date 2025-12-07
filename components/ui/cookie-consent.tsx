'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X, Cookie, Shield, Settings } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const COOKIE_CONSENT_KEY = 'nilecom-cookie-consent'

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false)
    const [showPreferences, setShowPreferences] = useState(false)

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
        if (!consent) {
            // Show banner after a short delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500)
            return () => clearTimeout(timer)
        }
    }, [])

    const acceptAll = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
            essential: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString(),
        }))
        setIsVisible(false)
    }

    const acceptEssential = () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({
            essential: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString(),
        }))
        setIsVisible(false)
    }

    const dismiss = () => {
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-background border-2 border-border rounded-2xl shadow-2xl p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <Cookie className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">Cookie Preferences</h3>
                                </div>
                                <button
                                    onClick={dismiss}
                                    className="p-1 hover:bg-muted rounded-lg transition-colors"
                                    aria-label="Dismiss"
                                >
                                    <X className="w-5 h-5 text-muted-foreground" />
                                </button>
                            </div>

                            <p className="text-muted-foreground mb-6 text-sm md:text-base">
                                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                                By clicking "Accept All", you consent to our use of cookies.{' '}
                                <Link href="/privacy" className="text-primary hover:underline">
                                    Read our Privacy Policy
                                </Link>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button
                                    onClick={acceptAll}
                                    className="btn-primary font-bold"
                                >
                                    <Shield className="w-4 h-4 mr-2" />
                                    Accept All
                                </Button>
                                <Button
                                    onClick={acceptEssential}
                                    variant="outline"
                                    className="font-bold"
                                >
                                    Essential Only
                                </Button>
                                <Button
                                    onClick={() => setShowPreferences(!showPreferences)}
                                    variant="ghost"
                                    className="font-medium text-muted-foreground"
                                >
                                    <Settings className="w-4 h-4 mr-2" />
                                    Customize
                                </Button>
                            </div>

                            {/* Preferences Panel */}
                            <AnimatePresence>
                                {showPreferences && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="mt-6 pt-6 border-t border-border space-y-4">
                                            {[
                                                { name: 'Essential', description: 'Required for the website to function', required: true },
                                                { name: 'Analytics', description: 'Help us understand how visitors use our site' },
                                                { name: 'Marketing', description: 'Used for targeted advertising' },
                                            ].map((cookie) => (
                                                <div key={cookie.name} className="flex items-center justify-between">
                                                    <div>
                                                        <div className="font-medium text-foreground">{cookie.name}</div>
                                                        <div className="text-sm text-muted-foreground">{cookie.description}</div>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={cookie.required}
                                                        disabled={cookie.required}
                                                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
