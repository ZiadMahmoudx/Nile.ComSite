'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, MapPin, Mail, Phone, Clock, Send, Loader2,
  AlertCircle, CheckCircle, Shield, Award, Zap, HeadphonesIcon
} from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+20 2 2735 3333',
    subtext: 'Sun-Thu: 9AM - 6PM',
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
    value: 'Maadi, Cairo, Egypt',
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

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
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

    if (Object.values(newErrors).some(e => e)) return

    setIsSubmitting(true)
    try {
      const form = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: form,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSuccess(true)
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      })
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      setTouched(new Set())
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getInputClasses = (field: string) =>
    `w-full bg-transparent border-b-2 py-4 focus:outline-none transition-colors duration-200 text-foreground placeholder:text-muted-foreground/50 ${errors[field] && touched.has(field) ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`

  return (
    <>
      {/* Hero Section */}
      <div className="mxd-section mxd-section-inner-headline padding-s-text-pre-form overflow-hidden">
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
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title">
                        Let's talk<br />about your project!
                      </h1>
                      <a className="btn btn-line-headline slide-right-up anim-no-delay" href="mailto:info@nilecom.com.eg?subject=Message%20from%20your%20site">
                        <span className="btn-caption">info@nilecom.com.eg</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                      <p className="inner-headline__text t-large t-bright mt-6">
                        Ready to transform your business? Our experts are here to help you
                        achieve your technology goals. Get in touch and let's start building
                        something great together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* Left Spacer + Info */}
                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                  <div className="mxd-block__name">
                    <p className="mxd-point-subtitle anim-uni-in-up">
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span>Get in Touch</span>
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="col-12 col-xl-8">
                  <div className="mxd-block__content contact">
                    <div className="mxd-block__inner-form">
                      <div className="form-container">
                        <AnimatePresence mode="wait">
                          {isSuccess ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="text-center py-16 space-y-6"
                            >
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', delay: 0.2 }}
                                className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center"
                              >
                                <CheckCircle className="w-12 h-12 text-primary" />
                              </motion.div>
                              <h3 className="text-3xl font-bold">Done!</h3>
                              <p className="t-large t-bright">Thanks for your message. We'll get back as soon as possible.</p>
                              <button
                                onClick={() => setIsSuccess(false)}
                                className="btn btn-anim btn-default btn-outline slide-right-up mt-6"
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
                              onSubmit={handleSubmit}
                              className="form contact-form"
                            >
                              <div className="container-fluid p-0">
                                <div className="row gx-0">
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input
                                      type="text"
                                      name="name"
                                      value={formData.name}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="Your name *"
                                      className={getInputClasses('name')}
                                    />
                                    {errors.name && touched.has('name') && (
                                      <p className="text-xs text-red-500 flex items-center gap-1 mt-2">
                                        <AlertCircle className="w-3 h-3" /> {errors.name}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input
                                      type="text"
                                      name="company"
                                      value={formData.company}
                                      onChange={handleChange}
                                      placeholder="Company name"
                                      className={getInputClasses('company')}
                                    />
                                  </div>
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input
                                      type="email"
                                      name="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="Email *"
                                      className={getInputClasses('email')}
                                    />
                                    {errors.email && touched.has('email') && (
                                      <p className="text-xs text-red-500 flex items-center gap-1 mt-2">
                                        <AlertCircle className="w-3 h-3" /> {errors.email}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input
                                      type="tel"
                                      name="phone"
                                      value={formData.phone}
                                      onChange={handleChange}
                                      placeholder="Phone"
                                      className={getInputClasses('phone')}
                                    />
                                  </div>
                                  <div className="col-12 mxd-grid-item anim-uni-in-up">
                                    <input
                                      type="text"
                                      name="subject"
                                      value={formData.subject}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="Subject *"
                                      className={getInputClasses('subject')}
                                    />
                                    {errors.subject && touched.has('subject') && (
                                      <p className="text-xs text-red-500 flex items-center gap-1 mt-2">
                                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-12 mxd-grid-item anim-uni-in-up">
                                    <textarea
                                      name="message"
                                      value={formData.message}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      placeholder="A few words about your project *"
                                      className={`${getInputClasses('message')} resize-none`}
                                      rows={5}
                                    />
                                    {errors.message && touched.has('message') && (
                                      <p className="text-xs text-red-500 flex items-center gap-1 mt-2">
                                        <AlertCircle className="w-3 h-3" /> {errors.message}
                                      </p>
                                    )}
                                  </div>
                                  <div className="col-12 mxd-grid-item anim-uni-in-up">
                                    <button
                                      className="btn btn-anim btn-default btn-large btn-opposite slide-right-up mt-2"
                                      type="submit"
                                      disabled={isSubmitting}
                                    >
                                      {isSubmitting ? (
                                        <span className="btn-caption flex items-center">
                                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                          Sending...
                                        </span>
                                      ) : (
                                        <>
                                          <span className="btn-caption">Submit</span>
                                          <ArrowUpRight className="w-5 h-5" />
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

      {/* Contact Methods Section */}
      <div className="mxd-section overflow-hidden padding-default">
        <div className="mxd-container grid-container">

          {/* Section Title */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">Other Ways<br />To Reach Us</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">Choose the method that works best for you. We're always ready to help.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
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
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block p-8 bg-secondary/5 border border-border/30 radius-m h-full group hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{method.title}</h3>
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

      {/* Map + Business Hours Section */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">

                {/* Map */}
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="overflow-hidden radius-m border border-border/30" style={{ height: '400px' }}>
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

                {/* Business Hours + Quick Info */}
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="p-8 bg-secondary/5 border border-border/30 radius-m h-full flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        Business Hours
                      </h3>
                      <div className="space-y-4 text-sm">
                        <div className="flex justify-between items-center pb-3 border-b border-border/30">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/30">
                          <span className="text-muted-foreground">Monday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/30">
                          <span className="text-muted-foreground">Tuesday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/30">
                          <span className="text-muted-foreground">Wednesday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/30">
                          <span className="text-muted-foreground">Thursday</span>
                          <span className="font-medium">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center pb-3 border-b border-border/30">
                          <span className="text-muted-foreground">Friday</span>
                          <span className="font-medium text-red-500">Closed</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-medium text-red-500">Closed</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <a
                        className="btn btn-anim btn-default btn-outline slide-right-up w-full"
                        href="https://maps.app.goo.gl/tTUNyWFzGazyTgHe6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="btn-caption">Get Directions</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
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
                {[...trustBadges, ...trustBadges, ...trustBadges, ...trustBadges].map((badge, idx) => (
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

      {/* Social Links Section */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-links-lines">
              {[
                { title: 'LinkedIn', href: 'https://www.linkedin.com/company/nilecom/' },
                { title: 'Facebook', href: 'https://www.facebook.com/NileCom.eg/' },
                { title: 'WhatsApp', href: 'https://wa.me/20227353333' },
              ].map((social, idx) => (
                <div key={idx} className="mxd-links-lines__item">
                  <div className="mxd-links-lines__divider anim-uni-in-up"></div>
                  <a className="mxd-links-lines__link anim-uni-in-up" href={social.href} target="_blank" rel="noopener noreferrer">
                    <h6 className="mxd-links-lines__title">{social.title}</h6>
                    <div className="mxd-links-lines__icon">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </a>
                  <div className="mxd-links-lines__divider anim-uni-in-up"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
