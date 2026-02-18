'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight, MapPin, Mail, Phone, Clock, Send, Loader2,
  AlertCircle, CheckCircle
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
    value: 'New Maadi, Cairo, Egypt',
    subtext: 'Schedule appointment first',
    href: 'https://maps.app.goo.gl/b5dSoqV4WKX57X9Z6',
  }
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
        break
      case 'email':
        if (!value.trim()) return 'Email is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email address'
        break
      case 'message':
        if (!value.trim()) return 'Message is required'
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
    // Validation logic...
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      toast({ title: 'Message Sent!' })
    }, 1000)
  }

  const getInputClasses = (field: string) =>
    `w-full bg-transparent border-b-2 py-4 focus:outline-none transition-colors duration-200 text-foreground placeholder:text-muted-foreground/50 ${errors[field] && touched.has(field) ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary'}`

  return (
    <>
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
                              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                                <CheckCircle className="w-12 h-12 text-primary" />
                              </div>
                              <h3 className="text-3xl font-bold">Done!</h3>
                              <p className="t-large t-bright">Thanks for your message. We'll get back as soon as possible.</p>
                              <button onClick={() => setIsSuccess(false)} className="btn btn-anim btn-default btn-outline slide-right-up mt-6">
                                <span className="btn-caption">Send Another Message</span>
                                <ArrowUpRight className="w-5 h-5" />
                              </button>
                            </motion.div>
                          ) : (
                            <form className="form contact-form" onSubmit={handleSubmit}>
                              <div className="container-fluid p-0">
                                <div className="row gx-0">
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} placeholder="Your name *" className={getInputClasses('name')} />
                                  </div>
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" className={getInputClasses('company')} />
                                  </div>
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email *" className={getInputClasses('email')} />
                                  </div>
                                  <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className={getInputClasses('phone')} />
                                  </div>
                                  <div className="col-12 mxd-grid-item anim-uni-in-up">
                                    <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} placeholder="A few words about your project *" className={`${getInputClasses('message')} resize-none`} rows={5} />
                                  </div>
                                  <div className="col-12 mxd-grid-item anim-uni-in-up">
                                    <button className="btn btn-anim btn-default btn-large btn-opposite slide-right-up mt-2" type="submit" disabled={isSubmitting}>
                                      <span className="btn-caption">Submit</span>
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
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="mxd-section overflow-hidden padding-default">
        {/* Same as before but verified structure */}
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="row">
              {contactMethods.map((method, index) => (
                <div key={index} className="col-12 col-md-4 mxd-grid-item">
                  <a href={method.href} className="block p-4 border border-border radius-m">
                    <h3 className="font-bold mb-1">{method.title}</h3>
                    <p className="text-primary">{method.value}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
