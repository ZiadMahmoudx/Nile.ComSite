'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, Building, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormData {
    name: string
    email: string
    company: string
    message: string
}

interface FormErrors {
    name?: string
    email?: string
    company?: string
    message?: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactFormValidated() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        message: ''
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<FormStatus>('idle')
    const [touched, setTouched] = useState<Set<string>>(new Set())

    const validateField = (name: keyof FormData, value: string): string | undefined => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required'
                if (value.length < 2) return 'Name must be at least 2 characters'
                break
            case 'email':
                if (!value.trim()) return 'Email is required'
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email'
                break
            case 'company':
                // Optional field
                break
            case 'message':
                if (!value.trim()) return 'Message is required'
                if (value.length < 10) return 'Message must be at least 10 characters'
                break
        }
        return undefined
    }

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
            ; (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
                const error = validateField(key, formData[key])
                if (error) newErrors[key] = error
            })
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Real-time validation for touched fields
        if (touched.has(name)) {
            const error = validateField(name as keyof FormData, value)
            setErrors(prev => ({ ...prev, [name]: error }))
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTouched(prev => new Set(prev).add(name))
        const error = validateField(name as keyof FormData, value)
        setErrors(prev => ({ ...prev, [name]: error }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Mark all fields as touched
        setTouched(new Set(['name', 'email', 'company', 'message']))

        if (!validateForm()) return

        setStatus('loading')

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        // Success (in production, this would be an actual API call)
        setStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setTouched(new Set())

        // Reset after 5 seconds
        setTimeout(() => setStatus('idle'), 5000)
    }

    const inputClasses = (field: keyof FormData) => cn(
        'w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground placeholder:text-muted-foreground',
        'focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200',
        errors[field] && touched.has(field)
            ? 'border-red-500 focus:border-red-500'
            : 'border-border focus:border-primary'
    )

    return (
        <Card className="border-2 border-border">
            <CardContent className="p-8">
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center py-12 space-y-4"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', delay: 0.2 }}
                                className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center"
                            >
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                            <p className="text-muted-foreground">
                                We'll get back to you within 24 hours.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.form
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            {/* Name */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <User className="w-4 h-4" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="John Doe"
                                    className={inputClasses('name')}
                                />
                                <AnimatePresence>
                                    {errors.name && touched.has('name') && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-sm text-red-500 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.name}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <Mail className="w-4 h-4" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="john@company.com"
                                    className={inputClasses('email')}
                                />
                                <AnimatePresence>
                                    {errors.email && touched.has('email') && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-sm text-red-500 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Company */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <Building className="w-4 h-4" />
                                    Company (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Your Company"
                                    className={inputClasses('company')}
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <MessageSquare className="w-4 h-4" />
                                    Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Tell us about your project or inquiry..."
                                    rows={5}
                                    className={inputClasses('message')}
                                />
                                <AnimatePresence>
                                    {errors.message && touched.has('message') && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-sm text-red-500 flex items-center gap-1"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full btn-primary py-4 font-bold rounded-xl"
                                size="lg"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </motion.form>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    )
}
