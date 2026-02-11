'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Settings, Users, Headphones, Wrench, BookOpen, Rocket, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Settings,
    title: 'Managed IT Services',
    description: 'Complete IT infrastructure management and support with 24/7 monitoring.',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Security Management', 'Performance Tuning'],
    image: '/media/real/managed_services.jpg',
    color: 'from-blue-600/10 to-blue-400/5',
    iconColor: 'bg-blue-500/10 text-blue-400',
  },
  {
    icon: Users,
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align your IT with business goals.',
    features: ['IT Strategy', 'Architecture Design', 'Vendor Management', 'Risk Assessment'],
    image: '/media/real/consulting.jpg',
    color: 'from-purple-600/10 to-purple-400/5',
    iconColor: 'bg-purple-500/10 text-purple-400',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert technical support and help desk services available whenever you need them.',
    features: ['24/7 Helpdesk', 'Remote Support', 'On-site Service', 'SLA Management'],
    image: '/media/real/support.jpg',
    color: 'from-emerald-600/10 to-emerald-400/5',
    iconColor: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: Wrench,
    title: 'Implementation',
    description: 'Professional implementation services for seamless hardware and software deployment.',
    features: ['Solution Design', 'System Deployment', 'Data Migration', 'Go-live Support'],
    image: '/media/real/implementation.jpg',
    color: 'from-amber-600/10 to-amber-400/5',
    iconColor: 'bg-amber-500/10 text-amber-400',
  },
  {
    icon: BookOpen,
    title: 'Training & Education',
    description: 'Comprehensive training programs to empower your team with the latest tech skills.',
    features: ['User Training', 'Tech Workshops', 'Certification Prep', 'Documentation'],
    image: '/media/real/team_collaboration.jpg',
    color: 'from-red-600/10 to-red-400/5',
    iconColor: 'bg-red-500/10 text-red-400',
  },
  {
    icon: Rocket,
    title: 'Project Management',
    description: 'End-to-end project management ensuring on-time and on-budget delivery.',
    features: ['Project Planning', 'Resource Management', 'Quality Assurance', 'Risk Mitigation'],
    image: '/media/real/tech_workspace.jpg',
    color: 'from-teal-600/10 to-teal-400/5',
    iconColor: 'bg-teal-500/10 text-teal-400',
  }
]

export default function Services() {
  return (
    <section id="services" className="mxd-section padding-blog bg-background/50">
      <div className="mxd-container grid-container">

        {/* Section Title */}
        <div className="mxd-block">
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type anim-uni-in-up">Professional<br />IT Services</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">Empowering your business with expert IT consultation, management, and top-tier technical support services.</p>
                  </div>
                </div>
                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                    <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                      <span className="btn-caption">Get a Quote</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mxd-block">
          <div className="mxd-blog-preview">
            <div className="container-fluid p-0">
              <div className="row g-0">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3 group"
                  >
                    <div className="mxd-blog-preview__media block relative overflow-hidden">
                      <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small relative h-[300px] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={cn("absolute inset-0 bg-gradient-to-t opacity-70", service.color)} />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                      </div>

                      <div className="mxd-blog-preview__tags top-4 left-4 absolute">
                        <span className="tag tag-default tag-permanent bg-background/80 backdrop-blur text-xs">Service</span>
                      </div>
                    </div>
                    <div className="mxd-blog-preview__data p-8">
                      <div className="anim-uni-in-up block">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={cn("p-2.5 rounded-xl border border-black/10 dark:border-white/10", service.iconColor)}>
                            <service.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>

                        <ul className="space-y-2.5 mb-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs text-muted-foreground group/item hover:text-foreground transition-colors">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
