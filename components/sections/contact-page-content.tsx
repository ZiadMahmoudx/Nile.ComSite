'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Mail, Phone, MapPin, Clock, User, Building, MessageSquare, Send, Loader2,
    CheckCircle, AlertCircle, Shield, Award, HeadphonesIcon, Zap, ArrowRight, ArrowUpRight
} from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const contactMethods = [
    {
        icon: Phone,
        title: 'Call Us',
        value: '+20 2 2735 3333',
        subtext: 'Mon-Thu: 9AM-6PM',
        href: 'tel:+20227353333',
    },
    {
        icon: Mail,
        title: 'Email Us',
        value: 'info@nilecom.com.eg',
        subtext: 'Response within 24 hours',
        href: 'mailto:info@nilecom.com.eg',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: 'Maadi, Cairo',
        subtext: 'Schedule appointment first',
        href: 'https://maps.app.goo.gl/tTUNyWFzGazyTgHe6',
    },
    {
        icon: HeadphonesIcon,
        title: '24/7 Support',
        value: 'support@nilecom.com.eg',
        subtext: 'For existing clients',
        href: 'mailto:support@nilecom.com.eg',
    }
]

const trustBadges = [
    { icon: Shield, label: 'ISO 27001 Certified' },
    { icon: Award, label: 'Microsoft Gold Partner' },
    { icon: Zap, label: '< 4hr Response Time' },
    { icon: CheckCircle, label: '1750+ Happy Clients' }
]

export default function ContactPageContent() {
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
            const form = new FormData()
            Object.entries(formData).forEach(([key, value]) => {
                form.append(key, value)
            })

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: form
            })

            if (response.ok) {
                setIsSuccess(true)
                setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
                setTouched(new Set())
                toast({
                    title: 'Message Sent!',
                    description: 'We\'ll get back to you within 24 hours.',
                })
                setTimeout(() => setIsSuccess(false), 5000)
            } else {
                throw new Error('Failed to send')
            }
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

    const inputBaseClasses = "w-full bg-transparent border-b-2 py-4 focus:outline-none transition-colors duration-200"
    const getInputClasses = (field: string) =>
        `${inputBaseClasses} ${errors[field] && touched.has(field) ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`

    return (
        <>
            {/* Hero Section - Uses Rayo Inner Headline */}
            <div className="mxd-section mxd-section-inner-headline padding-headline-pre-block">
                <div className="mxd-container grid-container">
                    <div className="mxd-block loading-wrap">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                    <div className="mxd-block__name name-inner-headline">
                                        <p className="mxd-point-subtitle">
                                            <span className="relative flex h-3 w-3 mr-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                            </span>
                                            <span>Contact</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__inner-headline">
                                            <h1 className="inner-headline__title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                                Let's Build <span className="text-primary">Something Great</span>
                                            </h1>
                                            <p className="inner-headline__text t-large t-bright mt-6">
                                                Ready to transform your business? Our experts are here to help.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Badges Marquee */}
            <div className="mxd-section padding-mtext">
                <div className="mxd-container fullwidth-container">
                    <div className="mxd-block">
                        <div className="marquee marquee-right--gsap muted-extra">
                            <div className="marquee__toright">
                                {[...trustBadges, ...trustBadges].map((badge, idx) => (
                                    <div key={idx} className="marquee__item one-line item-regular text">
                                        <p className="marquee__text flex items-center gap-2">
                                            <badge.icon className="w-5 h-5 text-primary" />
                                            {badge.label}
                                        </p>
                                        <div className="marquee__image">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
                                                <circle cx="40" cy="40" r="40" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Contact Methods */}
            <div className="mxd-section overflow-hidden padding-default">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="col-12 col-md-6 col-xl-3 mxd-grid-item"
                                    >
                                        <a
                                            href={method.href}
                                            target={method.href.startsWith('http') ? '_blank' : undefined}
                                            className="block p-8 bg-secondary/5 border border-border/30 radius-m text-center h-full group hover:border-primary/30 transition-all duration-300"
                                        >
                                            <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                                <method.icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-bold mb-1">{method.title}</h3>
                                            <p className="text-primary font-semibold text-sm mb-1">{method.value}</p>
                                            <p className="text-xs text-muted-foreground">{method.subtext}</p>
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Contact Section - Map + Form */}
            <div className="mxd-section mxd-section-inner-form padding-default">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                {/* Map / Info Column */}
                                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                    <div className="mxd-block__name">
                                        <h2 className="reveal-type anim-uni-in-up mb-4">Visit Our Office</h2>
                                        <p className="t-bright anim-uni-in-up mb-8">
                                            Located in the heart of Maadi, Cairo. Schedule an appointment for a face-to-face consultation.
                                        </p>
                                    </div>

                                    {/* Map */}
                                    <div className="overflow-hidden radius-m border border-border/30 mb-8" style={{ height: '280px' }}>
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

                                    {/* Business Hours */}
                                    <div className="p-6 bg-primary/5 border border-primary/20 radius-m">
                                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                            <Clock className="w-5 h-5 text-primary" />
                                            Business Hours
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Sunday - Thursday</span>
                                                <span className="font-medium">9:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-muted-foreground">Friday - Saturday</span>
                                                <span className="font-medium text-red-500">Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer */}
                                <div className="col-12 col-xl-1 mxd-grid-item no-margin"></div>

                                {/* Form Column */}
                                <div className="col-12 col-xl-7">
                                    <div className="mxd-block__content contact">
                                        <div className="mxd-block__inner-form">
                                            <div className="mb-6">
                                                <h3 className="text-2xl font-bold flex items-center gap-2 mb-2">
                                                    <MessageSquare className="w-6 h-6 text-primary" />
                                                    Send Us a Message
                                                </h3>
                                                <p className="text-muted-foreground">Fill out the form and we'll respond within 24 hours.</p>
                                            </div>

                                            <div className="form-container">
                                                <AnimatePresence mode="wait">
                                                    {isSuccess ? (
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
                                                                className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
                                                            >
                                                                <CheckCircle className="w-10 h-10 text-primary" />
                                                            </motion.div>
                                                            <h3 className="text-2xl font-bold">Message Sent!</h3>
                                                            <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                                                        </motion.div>
                                                    ) : (
                                                        <motion.form
                                                            key="form"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            onSubmit={handleSubmit}
                                                            className="form contact-form"
                                                        >
                                                            <div className="container-fluid p-0">
                                                                <div className="row gx-0">
                                                                    {/* Name */}
                                                                    <div className="col-12 col-md-6 mxd-grid-item">
                                                                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                                                                            <User className="w-4 h-4" /> Full Name *
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="name"
                                                                            value={formData.name}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            placeholder="John Doe"
                                                                            className={getInputClasses('name')}
                                                                        />
                                                                        {errors.name && touched.has('name') && (
                                                                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                                <AlertCircle className="w-3 h-3" /> {errors.name}
                                                                            </p>
                                                                        )}
                                                                    </div>

                                                                    {/* Email */}
                                                                    <div className="col-12 col-md-6 mxd-grid-item">
                                                                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                                                                            <Mail className="w-4 h-4" /> Email *
                                                                        </label>
                                                                        <input
                                                                            type="email"
                                                                            name="email"
                                                                            value={formData.email}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            placeholder="john@company.com"
                                                                            className={getInputClasses('email')}
                                                                        />
                                                                        {errors.email && touched.has('email') && (
                                                                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                                <AlertCircle className="w-3 h-3" /> {errors.email}
                                                                            </p>
                                                                        )}
                                                                    </div>

                                                                    {/* Phone */}
                                                                    <div className="col-12 col-md-6 mxd-grid-item">
                                                                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                                                                            <Phone className="w-4 h-4" /> Phone
                                                                        </label>
                                                                        <input
                                                                            type="tel"
                                                                            name="phone"
                                                                            value={formData.phone}
                                                                            onChange={handleChange}
                                                                            placeholder="+20 123 456 7890"
                                                                            className={getInputClasses('phone')}
                                                                        />
                                                                    </div>

                                                                    {/* Company */}
                                                                    <div className="col-12 col-md-6 mxd-grid-item">
                                                                        <label className="flex items-center gap-2 text-sm font-medium mb-2">
                                                                            <Building className="w-4 h-4" /> Company
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            name="company"
                                                                            value={formData.company}
                                                                            onChange={handleChange}
                                                                            placeholder="Your Company"
                                                                            className={getInputClasses('company')}
                                                                        />
                                                                    </div>

                                                                    {/* Subject */}
                                                                    <div className="col-12 mxd-grid-item">
                                                                        <label className="text-sm font-medium mb-2 block">Subject *</label>
                                                                        <input
                                                                            type="text"
                                                                            name="subject"
                                                                            value={formData.subject}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            placeholder="How can we help you?"
                                                                            className={getInputClasses('subject')}
                                                                        />
                                                                        {errors.subject && touched.has('subject') && (
                                                                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                                <AlertCircle className="w-3 h-3" /> {errors.subject}
                                                                            </p>
                                                                        )}
                                                                    </div>

                                                                    {/* Message */}
                                                                    <div className="col-12 mxd-grid-item">
                                                                        <label className="text-sm font-medium mb-2 block">Message *</label>
                                                                        <textarea
                                                                            name="message"
                                                                            value={formData.message}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            placeholder="Tell us about your project or inquiry..."
                                                                            rows={5}
                                                                            className={`${getInputClasses('message')} min-h-[120px] resize-none`}
                                                                        />
                                                                        {errors.message && touched.has('message') && (
                                                                            <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                                                                <AlertCircle className="w-3 h-3" /> {errors.message}
                                                                            </p>
                                                                        )}
                                                                    </div>

                                                                    {/* Submit */}
                                                                    <div className="col-12 mxd-grid-item">
                                                                        <button
                                                                            className="btn btn-anim btn-default btn-large btn-opposite slide-right-up mt-4 w-full"
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
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mxd-section padding-default bg-primary/5">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                    <div className="text-center">
                                        <h2 className="inner-headline__title anim-uni-in-up mb-4">Prefer a Quick Call?</h2>
                                        <p className="t-large t-bright anim-uni-in-up mb-8">
                                            Our experts are standing by to discuss your IT needs.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-4 justify-center anim-uni-in-up">
                                            <a className="btn btn-anim btn-default btn-opposite slide-right-up" href="tel:+20227353333">
                                                <span className="btn-caption flex items-center">
                                                    <Phone className="w-5 h-5 mr-2" />
                                                    Call +20 2 2735 3333
                                                </span>
                                            </a>
                                            <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/faq">
                                                <span className="btn-caption">View FAQ</span>
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
