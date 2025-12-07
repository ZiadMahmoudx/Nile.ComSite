'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { useToast } from '@/components/ui/use-toast'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Mail, Phone, MapPin, Clock, User, Building, MessageSquare, Send, Loader2,
    CheckCircle, AlertCircle, Shield, Award, HeadphonesIcon, Zap, ArrowRight
} from 'lucide-react'

const contactMethods = [
    {
        icon: Phone,
        title: 'Call Us',
        value: '+20 2 2735 3333',
        subtext: 'Mon-Thu: 9AM-6PM',
        href: 'tel:+20227353333',
        color: 'from-green-500 to-emerald-500'
    },
    {
        icon: Mail,
        title: 'Email Us',
        value: 'info@nilecom.com.eg',
        subtext: 'Response within 24 hours',
        href: 'mailto:info@nilecom.com.eg',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: 'Maadi, Cairo',
        subtext: 'Schedule appointment first',
        href: 'https://maps.app.goo.gl/tTUNyWFzGazyTgHe6',
        color: 'from-primary to-red-500'
    },
    {
        icon: HeadphonesIcon,
        title: '24/7 Support',
        value: 'support@nilecom.com.eg',
        subtext: 'For existing clients',
        href: 'mailto:support@nilecom.com.eg',
        color: 'from-purple-500 to-violet-500'
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

        // Validate all fields
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

    const inputClasses = (field: string) => `
    w-full px-4 py-3 rounded-xl border-2 bg-background text-foreground placeholder:text-muted-foreground
    focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200
    ${errors[field] && touched.has(field) ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}
  `

    return (
        <>
            {/* Hero Section - Compact */}
            <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-background">
                <ParticleNetwork
                    particleCount={50}
                    particleColor="rgba(159, 34, 32, 0.5)"
                    lineColor="rgba(159, 34, 32, 0.08)"
                    maxDistance={120}
                    speed={0.2}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-center">
                    <ScrollAnimation animation="fade-up">
                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
                            <Mail className="w-4 h-4 mr-2" />
                            Contact Us
                        </Badge>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={0.1}>
                        <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-4">
                            <span className="text-foreground">Let's Build</span>{' '}
                            <span className="text-gradient">Something Great</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Ready to transform your business? Our experts are here to help.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-8 border-y border-border bg-muted/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8">
                        {trustBadges.map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 text-muted-foreground">
                                <badge.icon className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {contactMethods.map((method, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 0.05}>
                                <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined}>
                                    <Card className="group border-2 border-border hover:border-primary/50 transition-all duration-300 h-full">
                                        <CardContent className="p-6 text-center">
                                            <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${method.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                                                <method.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <h3 className="font-bold text-foreground mb-1">{method.title}</h3>
                                            <p className="text-primary font-semibold text-sm mb-1">{method.value}</p>
                                            <p className="text-xs text-muted-foreground">{method.subtext}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Map / Info Column */}
                        <div className="lg:col-span-2 space-y-6">
                            <ScrollAnimation animation="fade-up">
                                <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
                                <p className="text-muted-foreground mb-6">
                                    Located in the heart of Maadi, Cairo. Schedule an appointment for a face-to-face consultation.
                                </p>
                            </ScrollAnimation>

                            {/* Embedded Map */}
                            <ScrollAnimation animation="fade-up" delay={0.1}>
                                <div className="rounded-2xl overflow-hidden border-2 border-border h-[300px]">
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
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={0.2}>
                                <Card className="border-2 border-primary/20 bg-primary/5">
                                    <CardContent className="p-6">
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
                                    </CardContent>
                                </Card>
                            </ScrollAnimation>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-3">
                            <ScrollAnimation animation="fade-up">
                                <Card className="border-2 border-border">
                                    <CardHeader>
                                        <CardTitle className="text-2xl flex items-center gap-2">
                                            <MessageSquare className="w-6 h-6 text-primary" />
                                            Send Us a Message
                                        </CardTitle>
                                        <p className="text-muted-foreground">
                                            Fill out the form and we'll respond within 24 hours.
                                        </p>
                                    </CardHeader>
                                    <CardContent>
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
                                                        className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center"
                                                    >
                                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                                    </motion.div>
                                                    <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                                                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
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
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        {/* Name */}
                                                        <div className="space-y-2">
                                                            <label className="flex items-center gap-2 text-sm font-medium">
                                                                <User className="w-4 h-4" /> Full Name *
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
                                                            {errors.name && touched.has('name') && (
                                                                <p className="text-xs text-red-500 flex items-center gap-1">
                                                                    <AlertCircle className="w-3 h-3" /> {errors.name}
                                                                </p>
                                                            )}
                                                        </div>

                                                        {/* Email */}
                                                        <div className="space-y-2">
                                                            <label className="flex items-center gap-2 text-sm font-medium">
                                                                <Mail className="w-4 h-4" /> Email *
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
                                                            {errors.email && touched.has('email') && (
                                                                <p className="text-xs text-red-500 flex items-center gap-1">
                                                                    <AlertCircle className="w-3 h-3" /> {errors.email}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        {/* Phone */}
                                                        <div className="space-y-2">
                                                            <label className="flex items-center gap-2 text-sm font-medium">
                                                                <Phone className="w-4 h-4" /> Phone
                                                            </label>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                placeholder="+20 123 456 7890"
                                                                className={inputClasses('phone')}
                                                            />
                                                        </div>

                                                        {/* Company */}
                                                        <div className="space-y-2">
                                                            <label className="flex items-center gap-2 text-sm font-medium">
                                                                <Building className="w-4 h-4" /> Company
                                                            </label>
                                                            <input
                                                                type="text"
                                                                name="company"
                                                                value={formData.company}
                                                                onChange={handleChange}
                                                                placeholder="Your Company"
                                                                className={inputClasses('company')}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Subject */}
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Subject *</label>
                                                        <input
                                                            type="text"
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="How can we help you?"
                                                            className={inputClasses('subject')}
                                                        />
                                                        {errors.subject && touched.has('subject') && (
                                                            <p className="text-xs text-red-500 flex items-center gap-1">
                                                                <AlertCircle className="w-3 h-3" /> {errors.subject}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Message */}
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Message *</label>
                                                        <textarea
                                                            name="message"
                                                            value={formData.message}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            placeholder="Tell us about your project or inquiry..."
                                                            rows={5}
                                                            className={inputClasses('message')}
                                                        />
                                                        {errors.message && touched.has('message') && (
                                                            <p className="text-xs text-red-500 flex items-center gap-1">
                                                                <AlertCircle className="w-3 h-3" /> {errors.message}
                                                            </p>
                                                        )}
                                                    </div>

                                                    {/* Submit */}
                                                    <Button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full btn-primary py-4 font-bold rounded-xl"
                                                        size="lg"
                                                    >
                                                        {isSubmitting ? (
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
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional CTA */}
            <section className="py-16 bg-primary/5">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <ScrollAnimation animation="fade-up">
                        <h2 className="text-3xl font-bold mb-4">Prefer a Quick Call?</h2>
                        <p className="text-muted-foreground mb-8">
                            Our experts are standing by to discuss your IT needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary">
                                <Link href="tel:+20227353333">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call +20 2 2735 3333
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/faq">
                                    View FAQ
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
}
