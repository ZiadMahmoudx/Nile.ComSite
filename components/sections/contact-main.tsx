'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactMain() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [touched, setTouched] = useState<Set<string>>(new Set())
    const { toast } = useToast()

    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required'
                if (value.length < 2) return 'Name must be at least 2 characters'
                break
            case 'email':
                if (!value.trim()) return 'Email is required'
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address'
                break
            case 'subject':
                if (!value.trim()) return 'Subject is required'
                break
            case 'message':
                if (!value.trim()) return 'Message is required'
                if (value.length < 10) return 'Message must be at least 10 characters'
                break
        }
        return undefined
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (touched.has(name)) {
            const error = validateField(name, value)
            setErrors(prev => ({ ...prev, [name]: error || '' }))
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setTouched(prev => new Set(prev).add(name))
        const error = validateField(name, value)
        setErrors(prev => ({ ...prev, [name]: error || '' }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const newErrors: Record<string, string> = {}
        Object.entries(formData).forEach(([key, value]) => {
            const error = validateField(key, value)
            if (error) newErrors[key] = error
        })
        setErrors(newErrors)
        setTouched(new Set(Object.keys(formData)))

        if (Object.values(newErrors).some(e => e)) return

        setIsSubmitting(true)

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setIsSuccess(true)
            setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
            setTouched(new Set())
            toast({
                title: 'Message Sent!',
                description: 'We\'ll get back to you within 24 hours.',
            })
            setTimeout(() => setIsSuccess(false), 5000)
        } catch {
            toast({
                title: 'Error',
                description: 'Failed to send your message. Please try again.',
                variant: 'destructive'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputBaseClasses = "w-full bg-transparent border-b-2 py-4 focus:outline-none transition-colors duration-200 text-foreground placeholder:text-muted-foreground"
    const getInputClasses = (field: string) =>
        `${inputBaseClasses} ${errors[field] && touched.has(field) ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`

    return (
        <section className="mxd-section padding-default">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="container-fluid px-0">
                        <div className="row gx-0 gap-y-12">

                            {/* Contact Info Column */}
                            <div className="col-12 col-xl-4 mxd-grid-item">
                                <div className="contact-info pr-xl-5">
                                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Have a project in mind or need assistance? Reach out to us. We are always ready to discuss your needs.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Visit Us</h4>
                                                <p className="text-muted-foreground text-sm">Maadi, Cairo, Egypt</p>
                                                <Link href="https://maps.app.goo.gl/tTUNyWFzGazyTgHe6" target="_blank" className="text-primary text-sm font-semibold hover:underline mt-1 block">Get Directions</Link>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Call Us</h4>
                                                <p className="text-muted-foreground text-sm">Mon-Thu: 9AM - 6PM</p>
                                                <Link href="tel:+20227353333" className="text-primary text-sm font-semibold hover:underline mt-1 block">+20 2 2735 3333</Link>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                                <Mail className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg">Email Us</h4>
                                                <p className="text-muted-foreground text-sm">Response within 24 hours</p>
                                                <Link href="mailto:info@nilecom.com.eg" className="text-primary text-sm font-semibold hover:underline mt-1 block">info@nilecom.com.eg</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map Preview */}
                                    <div className="mt-10 overflow-hidden radius-m border border-border h-[200px] w-full bg-muted">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2!2d31.2!3d29.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaadi%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="NILE.COM Office Location"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Contact Form Column */}
                            <div className="col-12 col-xl-8 mxd-grid-item">
                                <div className="contact-form-wrapper bg-card border border-border radius-m p-8">
                                    <AnimatePresence mode="wait">
                                        {isSuccess ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="text-center py-12 space-y-4"
                                            >
                                                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                                    <CheckCircle className="w-10 h-10 text-primary" />
                                                </div>
                                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                                <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                                                <button
                                                    onClick={() => setIsSuccess(false)}
                                                    className="btn btn-anim btn-default btn-outline slide-right-up mt-4"
                                                >
                                                    <span className="btn-caption">Send Another Message</span>
                                                </button>
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
                                                <div className="container-fluid p-0">
                                                    <div className="row g-4">
                                                        <div className="col-12 col-md-6">
                                                            <label className="text-sm font-medium block mb-2">Full Name *</label>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={getInputClasses('name')}
                                                                placeholder="John Doe"
                                                            />
                                                            {errors.name && touched.has('name') && (
                                                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                    <AlertCircle className="w-3 h-3" /> {errors.name}
                                                                </p>
                                                            )}
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <label className="text-sm font-medium block mb-2">Email *</label>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={getInputClasses('email')}
                                                                placeholder="john@company.com"
                                                            />
                                                            {errors.email && touched.has('email') && (
                                                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                    <AlertCircle className="w-3 h-3" /> {errors.email}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="row g-4 mt-2">
                                                        <div className="col-12 col-md-6">
                                                            <label className="text-sm font-medium block mb-2">Phone</label>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                className={getInputClasses('phone')}
                                                                placeholder="+20 123 456 7890"
                                                            />
                                                        </div>
                                                        <div className="col-12 col-md-6">
                                                            <label className="text-sm font-medium block mb-2">Company</label>
                                                            <input
                                                                type="text"
                                                                name="company"
                                                                value={formData.company}
                                                                onChange={handleChange}
                                                                className={getInputClasses('company')}
                                                                placeholder="Your Company"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="row g-4 mt-2">
                                                        <div className="col-12">
                                                            <label className="text-sm font-medium block mb-2">Subject *</label>
                                                            <input
                                                                type="text"
                                                                name="subject"
                                                                value={formData.subject}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={getInputClasses('subject')}
                                                                placeholder="How can we help you?"
                                                            />
                                                            {errors.subject && touched.has('subject') && (
                                                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                    <AlertCircle className="w-3 h-3" /> {errors.subject}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="row g-4 mt-2">
                                                        <div className="col-12">
                                                            <label className="text-sm font-medium block mb-2">Message *</label>
                                                            <textarea
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={`${getInputClasses('message')} min-h-[140px] resize-none`}
                                                                placeholder="Tell us about your project or inquiry..."
                                                                rows={6}
                                                            />
                                                            {errors.message && touched.has('message') && (
                                                                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                    <AlertCircle className="w-3 h-3" /> {errors.message}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="row mt-4">
                                                        <div className="col-12">
                                                            <button
                                                                className="btn btn-anim btn-default btn-large btn-opposite slide-right-up w-full"
                                                                type="submit"
                                                                disabled={isSubmitting}
                                                            >
                                                                {isSubmitting ? (
                                                                    <span className="btn-caption flex items-center justify-center">
                                                                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                                                        Sending...
                                                                    </span>
                                                                ) : (
                                                                    <>
                                                                        <span className="btn-caption">Send Message</span>
                                                                        <Send className="w-5 h-5 ml-2" />
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.form>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
