'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  ArrowUpRight, MapPin, Mail, Phone, Clock,
  CheckCircle, AlertCircle, Shield, Award, Zap,
} from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

// Validation Schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

type FormValues = z.infer<typeof formSchema>

// Data & Config
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
    href: 'https://maps.app.goo.gl/KGZRMabWrd1W7jyeA',
  },
]

const trustBadges = [
  { icon: Shield, label: 'ISO 27001 Certified' },
  { icon: Award, label: 'Microsoft Gold Partner' },
  { icon: Zap, label: '< 4hr Response Time' },
  { icon: CheckCircle, label: '1,750+ Happy Clients' },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', phone: '', company: '', subject: '', message: '' },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => formData.append(key, value || ''))

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Failed to send')

      setIsSuccess(true)
      toast.success('Message sent successfully!', {
        description: "We'll get back to you within 24 hours.",
      })
      form.reset()
    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Styles imitating Rayo form fields
  const inputClasses = (error?: any) => cn(
    "w-full bg-transparent border-b-2 py-6 text-lg md:text-xl font-medium focus:outline-none transition-colors duration-200 text-foreground placeholder:text-muted-foreground/40",
    error ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-primary"
  )

  return (
    <>
      {/* ── Inner Headline (Rayo Component) ── */}
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
                      <h1 className="inner-headline__title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
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

      {/* ── Contact Methods Grid ── */}
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
                    className="col-12 col-sm-6 col-xl-4 mxd-grid-item"
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
                      <h3 className="text-2xl font-bold t-bright mb-2">{method.title}</h3>
                      <p className="text-primary font-bold text-lg md:text-xl mb-1">{method.value}</p>
                      <p className="text-sm t-muted">{method.subtext}</p>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Layout: Form + Sidebar (Rayo Grid) ── */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row gx-0">

                {/* Form Column */}
                <div className="col-12 col-xl-8 mxd-grid-item">
                  <div className="mxd-block__content contact">

                    <p className="mxd-point-subtitle anim-uni-in-up mb-8">
                      <span className="relative flex h-3 w-3 mr-2">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                      </span>
                      <span>Send a Message</span>
                    </p>

                    <AnimatePresence mode="wait">
                      {isSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-24 space-y-6 bg-secondary/5 rounded-3xl"
                        >
                          <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="w-12 h-12 text-primary" />
                          </div>
                          <h3 className="text-3xl font-bold">Message Sent!</h3>
                          <p className="t-large t-bright max-w-md mx-auto">
                            Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                          </p>
                          <button
                            onClick={() => { setIsSuccess(false); form.reset(); }}
                            className="btn btn-anim btn-default btn-outline slide-right-up mt-4"
                          >
                            <span className="btn-caption">Send Another Message</span>
                            <ArrowUpRight className="w-5 h-5 ml-2" />
                          </button>
                        </motion.div>
                      ) : (
                        <form onSubmit={form.handleSubmit(onSubmit)} className="form contact-form">
                          <div className="container-fluid p-0">
                            <div className="row gx-0">

                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <div className="space-y-1">
                                  <input
                                    {...form.register('name')}
                                    placeholder="Full name *"
                                    className={inputClasses(form.formState.errors.name)}
                                  />
                                  {form.formState.errors.name && (
                                    <p className="text-xs text-red-500 flex items-center gap-1">
                                      <AlertCircle className="w-3 h-3" /> {form.formState.errors.name.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  {...form.register('company')}
                                  placeholder="Company name"
                                  className={inputClasses()}
                                />
                              </div>

                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <div className="space-y-1">
                                  <input
                                    {...form.register('email')}
                                    placeholder="Email address *"
                                    className={inputClasses(form.formState.errors.email)}
                                  />
                                  {form.formState.errors.email && (
                                    <p className="text-xs text-red-500 flex items-center gap-1">
                                      <AlertCircle className="w-3 h-3" /> {form.formState.errors.email.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                <input
                                  {...form.register('phone')}
                                  placeholder="Phone number"
                                  className={inputClasses()}
                                />
                              </div>

                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <div className="space-y-1">
                                  <input
                                    {...form.register('subject')}
                                    placeholder="Subject *"
                                    className={inputClasses(form.formState.errors.subject)}
                                  />
                                  {form.formState.errors.subject && (
                                    <p className="text-xs text-red-500 flex items-center gap-1">
                                      <AlertCircle className="w-3 h-3" /> {form.formState.errors.subject.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <div className="space-y-1">
                                  <textarea
                                    {...form.register('message')}
                                    placeholder="Tell us about your project *"
                                    rows={5}
                                    className={cn(inputClasses(form.formState.errors.message), "resize-none")}
                                  />
                                  {form.formState.errors.message && (
                                    <p className="text-xs text-red-500 flex items-center gap-1">
                                      <AlertCircle className="w-3 h-3" /> {form.formState.errors.message.message}
                                    </p>
                                  )}
                                </div>
                              </div>

                              <div className="col-12 mxd-grid-item anim-uni-in-up">
                                <button
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="btn btn-anim btn-default btn-large btn-opposite slide-right-up mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                  <span className="btn-caption">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                  </span>
                                  <ArrowUpRight className="w-5 h-5 ml-2" />
                                </button>
                              </div>

                            </div>
                          </div>
                        </form>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Sidebar Column */}
                <div className="col-12 col-xl-4 mxd-grid-item text-white">
                  <div className="flex flex-col gap-6 h-full">
                    {/* Map Embed */}
                    <div className="radius-m overflow-hidden border border-border/50 flex-1 min-h-[300px] relative group">
                      {/* Using a specific embed for NILE.COM Maadi via Query */}
                      <iframe
                        src="https://maps.google.com/maps?q=NILE.COM%2C+438A+Road+293%2C+New+Maadi%2C+Cairo&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, position: 'absolute', inset: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nile.Com Office"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur-md p-4 rounded-xl border border-border/20 z-10 pointer-events-none shadow-lg">
                        <p className="text-sm font-bold t-bright mb-1">Nile.Com HQ</p>
                        <p className="text-xs t-muted">Click &apos;View larger map&apos; for directions</p>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="border border-border/50 radius-m p-8 bg-neutral-900/50">
                      <h3 className="font-bold t-bright mb-6 flex items-center gap-3 text-xl">
                        <Clock className="w-6 h-6 text-primary" />
                        Business Hours
                      </h3>
                      <div className="space-y-4 text-base">
                        <div className="flex justify-between items-center">
                          <span className="t-muted">Sunday – Thursday</span>
                          <span className="font-semibold t-bright">9:00 AM – 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="t-muted">Friday – Saturday</span>
                          <span className="font-semibold text-red-500">Closed</span>
                        </div>
                        <div className="border-t border-border/40 pt-6 mt-6 text-center">
                          <a
                            href="https://maps.app.goo.gl/KGZRMabWrd1W7jyeA"
                            target="_blank"
                            className="text-primary hover:text-primary/80 hover:underline text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                          >
                            <MapPin className="w-4 h-4" /> Get Directions
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
    </>
  )
}
