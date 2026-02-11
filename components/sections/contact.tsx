'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin, Mail, Phone, Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useToast } from '@/components/ui/use-toast'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateField = (name: string, value: string) => {
    if (name === 'name' && !value.trim()) return 'Name is required'
    if (name === 'email' && (!value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) return 'Valid email is required'
    if (name === 'subject' && !value.trim()) return 'Subject is required'
    if (name === 'message' && !value.trim()) return 'Message is required'
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    try {
      const formPayload = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value)
      })

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formPayload,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSuccess(true)
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      })
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    } catch (error) {
      console.error('Submission error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? (error as Error).message : "Something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="mxd-container container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Headline */}
            <div>
              <p className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">Contact Us</span>
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 reveal-type">
                Let's talk about <br /> <span className="text-primary">your project.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed anim-uni-in-up">
                Have a project in mind or need assistance? Reach out to us. We are always ready to discuss your needs and how we can help your business grow.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Visit Us */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group anim-uni-in-up">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                  <p className="text-muted-foreground mb-3 text-lg">Maadi, Cairo, Egypt</p>
                  <a href="https://maps.google.com" target="_blank" className="text-primary font-semibold hover:underline inline-flex items-center text-lg">
                    Get Directions <ArrowUpRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group anim-uni-in-up">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call Us</h3>
                  <p className="text-muted-foreground mb-3 text-lg">Sun-Thu: 9AM - 6PM</p>
                  <a href="tel:+20227353333" className="text-2xl font-bold hover:text-primary transition-colors">
                    +20 2 2735 3333
                  </a>
                </div>
              </div>

              {/* Email Us */}
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-secondary/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-300 group anim-uni-in-up">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-3 text-lg">Response within 24 hours</p>
                  <a href="mailto:info@nilecom.com.eg" className="text-xl font-medium hover:text-primary transition-colors break-all">
                    info@nilecom.com.eg
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 anim-uni-in-up">
            <div className="bg-card p-8 md:p-12 rounded-[2.5rem] border border-border/50 shadow-2xl relative overflow-hidden h-full">
              {/* Background Noise/Effect */}
              <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-6 min-h-[500px]"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold">Message Sent!</h3>
                    <p className="text-xl text-muted-foreground max-w-md">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 px-8 py-4 bg-secondary text-foreground rounded-xl font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4 group">
                        <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-focus-within:text-primary transition-colors">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={cn(
                            "w-full bg-transparent border-b-2 py-4 text-2xl font-medium focus:outline-none transition-colors placeholder:text-muted-foreground/20",
                            errors.name ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-primary"
                          )}
                        />
                        {errors.name && <p className="text-red-500 text-sm flex items-center mt-1"><AlertCircle className="w-4 h-4 mr-1" /> {errors.name}</p>}
                      </div>
                      <div className="space-y-4 group">
                        <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-focus-within:text-primary transition-colors">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={cn(
                            "w-full bg-transparent border-b-2 py-4 text-2xl font-medium focus:outline-none transition-colors placeholder:text-muted-foreground/20",
                            errors.email ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-primary"
                          )}
                        />
                        {errors.email && <p className="text-red-500 text-sm flex items-center mt-1"><AlertCircle className="w-4 h-4 mr-1" /> {errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4 group">
                        <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-focus-within:text-primary transition-colors">Phone (Optional)</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+20 123 456 7890"
                          className="w-full bg-transparent border-b-2 border-border/50 py-4 text-2xl font-medium focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/20"
                        />
                      </div>
                      <div className="space-y-4 group">
                        <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-focus-within:text-primary transition-colors">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full bg-transparent border-b-2 border-border/50 py-4 text-2xl font-medium focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-4 group">
                      <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-focus-within:text-primary transition-colors">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        className={cn(
                          "w-full bg-transparent border-b-2 py-4 text-2xl font-medium focus:outline-none transition-colors placeholder:text-muted-foreground/20",
                          errors.subject ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-primary"
                        )}
                      />
                      {errors.subject && <p className="text-red-500 text-sm flex items-center mt-1"><AlertCircle className="w-4 h-4 mr-1" /> {errors.subject}</p>}
                    </div>

                    <div className="space-y-4 group">
                      <label className="text-sm font-bold tracking-widest uppercase text-muted-foreground group-focus-within:text-primary transition-colors">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={4}
                        className={cn(
                          "w-full bg-transparent border-b-2 py-4 text-2xl font-medium focus:outline-none transition-colors placeholder:text-muted-foreground/20 resize-none",
                          errors.message ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-primary"
                        )}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-sm flex items-center mt-1"><AlertCircle className="w-4 h-4 mr-1" /> {errors.message}</p>}
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-foreground text-background py-6 rounded-2xl text-xl font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
