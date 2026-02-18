'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, MapPin, Mail, Phone, Clock,
  CheckCircle, AlertCircle, Shield, Award, Zap, HeadphonesIcon,
} from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+20 2 2735 3333',
    subtext: 'Sun–Thu: 9AM – 6PM',
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
    value: 'New Maadi, Cairo, Egypt',
    subtext: 'Schedule appointment first',
    href: 'https://maps.app.goo.gl/b5dSoqV4WKX57X9Z6',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    value: 'support@nilecom.com.eg',
    subtext: 'For existing clients',
    href: 'mailto:support@nilecom.com.eg',
  },
]

const trustBadges = [
  { icon: Shield, label: 'ISO 27001 Certified' },
  { icon: Award, label: 'Microsoft Gold Partner' },
  { icon: Zap, label: '< 4hr Response Time' },
  { icon: CheckCircle, label: '1,750+ Happy Clients' },
]

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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
    if (Object.values(newErrors).some(err => err)) return

    setIsSubmitting(true)
    try {
      await new Promise(r => setTimeout(r, 1200))
      setIsSuccess(true)
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      setTouched(new Set())
      toast({ title: 'Message Sent!', description: "We'll get back to you within 24 hours." })
      setTimeout(() => setIsSuccess(false), 6000)
    } catch {
      toast({ title: 'Error', description: 'Failed to send message. Please try again.', variant: 'destructive' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClasses = (field: string) =>
    `w-full bg-transparent border-b-2 py-4 focus:outline-none transition-colors duration-200 text-foreground placeholder:text-muted-foreground/50 ${
      errors[field] && touched.has(field)
        ? 'border-red-500 focus:border-red-500'
        : 'border-border focus:border-primary'
    }`

  return (
    <>
      {/* ── Inner Headline ── */}
      <div className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
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
                      <h1 className="inner-headline__title headline-img-before headline-img-05">
                        Let&apos;s build <span className="text-primary">something great</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust Badges Strip ── */}
      <div className="border-y border-border/40 bg-secondary/5">
        <div className="mxd-container">
          <div className="py-6 flex flex-wrap justify-center gap-x-12 gap-y-4">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-3 text-muted-foreground">
                <badge.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-semibold">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Quick Contact Cards ── */}
      <div className="mxd-section padding-default overflow-hidden">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row gx-0">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="col-12 col-sm-6 col-xl-3 mxd-grid-item"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="block h-full border border-border/50 radius-m p-6 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold t-bright mb-1">{method.title}</h3>
                      <p className="text-primary font-semibold text-sm mb-1">{method.value}</p>
                      <p className="text-xs t-muted">{method.subtext}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main: Form + Sidebar ── */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row gx-0">

                {/* Form — 8 cols */}
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <div className="mxd-block__content contact">

                    {/* Section label */}
                    <p className="mxd-point-subtitle anim-uni-in-up mb-8">
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span>Send a Message</span>
                    </p>

                    <AnimatePresence mode="wait">
                      {isSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-24 space-y-6"
                        >
                          <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="w-12 h-12 text-primary" />
                          </div>
                          <h3 className="text-3xl font-bold">Message Sent!</h3>
                          <p className="t-large t-bright max-w-md mx-auto">
                            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                          </p>
                          <button
                            onClick={() => setIsSuccess(false)}
                            className="btn btn-anim btn-default btn-outline slide-right-up"
                          >
                            <span className="btn-caption">Send Another Message</span>
                            <ArrowUpRight className="w-5 h-5" />
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="form contact-form"
                          onSubmit={handleSubmit}
                        >
                          <div className="container-fluid p-0">
                            <div className="row gx-0">

                              {/* Full Name */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <div>
                                  <input
                                    type="text" name="name" value={formData.name}
                                    onChange={handleChange} onBlur={handleBlur}
                                    placeholder="Full name *"
                                    className={fieldClasses('name')}
                                  />
                                  {errors.name && touched.has('name') && (
                                    <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                                      <AlertCircle className="w-3 h-3" /> {errors.name}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Company */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="text" name="company" value={formData.company}
                                  onChange={handleChange}
                                  placeholder="Company name"
                                  className={fieldClasses('company')}
                                />
                              </div>

                              {/* Email */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <div>
                                  <input
                                    type="email" name="email" value={formData.email}
                                    onChange={handleChange} onBlur={handleBlur}
                                    placeholder="Email address *"
                                    className={fieldClasses('email')}
                                  />
                                  {errors.email && touched.has('email') && (
                                    <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                                      <AlertCircle className="w-3 h-3" /> {errors.email}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Phone */}
                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  type="tel" name="phone" value={formData.phone}
                                  onChange={handleChange}
                                  placeholder="Phone number"
                                  className={fieldClasses('phone')}
                                />
                              </div>

                              {/* Subject */}
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <div>
                                  <input
                                    type="text" name="subject" value={formData.subject}
                                    onChange={handleChange} onBlur={handleBlur}
                                    placeholder="Subject *"
                                    className={fieldClasses('subject')}
                                  />
                                  {errors.subject && touched.has('subject') && (
                                    <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Message */}
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <div>
                                  <textarea
                                    name="message" value={formData.message}
                                    onChange={handleChange} onBlur={handleBlur}
                                    placeholder="Tell us about your project *"
                                    rows={5}
                                    className={`${fieldClasses('message')} resize-none`}
                                  />
                                  {errors.message && touched.has('message') && (
                                    <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
                                      <AlertCircle className="w-3 h-3" /> {errors.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Submit */}
                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <button
                                  className="btn btn-anim btn-default btn-large btn-opposite slide-right-up mt-4"
                                  type="submit"
                                  disabled={isSubmitting}
                                >
                                  <span className="btn-caption">
                                    {isSubmitting ? 'Sending…' : 'Send Message'}
                                  </span>
                                  <ArrowUpRight className="w-5 h-5 ml-2" />
                                </button>
                              </div>

                            </div>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Sidebar — 4 cols */}
                <div className="col-12 col-xl-4 mxd-grid-item">
                  <div className="flex flex-col gap-6 h-full">

                    {/* Map */}
                    <div className="radius-m overflow-hidden border border-border/50 flex-1" style={{ minHeight: '260px' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2!2d31.2!3d29.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNew%20Maadi%2C%20Cairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0, display: 'block', minHeight: '260px' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="NILE.COM Office – New Maadi, Cairo"
                      />
                    </div>

                    {/* Business Hours */}
                    <div className="border border-border/50 radius-m p-6">
                      <h3 className="font-bold t-bright mb-5 flex items-center gap-2 text-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        Business Hours
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="t-muted">Sunday – Thursday</span>
                          <span className="font-semibold t-bright">9:00 AM – 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="t-muted">Friday – Saturday</span>
                          <span className="font-semibold text-red-500">Closed</span>
                        </div>
                        <div className="border-t border-border/40 pt-4 mt-4 space-y-2">
                          <a
                            href="tel:+20227353333"
                            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-2"
                          >
                            <Phone className="w-4 h-4 shrink-0" />
                            +20 2 2735 3333
                          </a>
                          <a
                            href="mailto:info@nilecom.com.eg"
                            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-2"
                          >
                            <Mail className="w-4 h-4 shrink-0" />
                            info@nilecom.com.eg
                          </a>
                          <a
                            href="https://maps.app.goo.gl/b5dSoqV4WKX57X9Z6"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline underline-offset-2"
                          >
                            <MapPin className="w-4 h-4 shrink-0" />
                            New Maadi, Cairo, Egypt
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="mxd-section padding-default border-t border-border/40 bg-secondary/5">
        <div className="mxd-container">
          <div className="container-fluid p-0">
            <div className="row gx-0 align-items-center">
              <div className="col-12 col-xl-8 mxd-grid-item">
                <h2 className="reveal-type anim-uni-in-up text-4xl font-bold mb-3">
                  Prefer a quick call?
                </h2>
                <p className="t-large t-muted anim-uni-in-up">
                  Our experts are ready to discuss your IT needs — no commitment required.
                </p>
              </div>
              <div className="col-12 col-xl-4 mxd-grid-item">
                <div className="flex flex-col sm:flex-row xl:flex-col gap-4 xl:items-end">
                  <a
                    href="tel:+20227353333"
                    className="btn btn-anim btn-default btn-large btn-opposite slide-right-up"
                  >
                    <span className="btn-caption">Call +20 2 2735 3333</span>
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </a>
                  <Link
                    href="/faq"
                    className="btn btn-anim btn-default btn-large btn-outline slide-right-up"
                  >
                    <span className="btn-caption">View FAQ</span>
                    <ArrowUpRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
