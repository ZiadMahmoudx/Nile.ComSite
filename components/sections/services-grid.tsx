'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Settings, Lightbulb, Users, Headphones, Zap, ArrowRight, ArrowUpRight, CheckCircle, Clock, Target, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Zap,
    title: "Automation Services",
    description: "Streamline operations with intelligent automation solutions",
    features: ["Process automation", "RPA implementation", "Workflow optimization", "System integration"],
    image: '/media/real/automation.jpg',
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Strategic guidance for your digital transformation journey",
    features: ["IT strategy", "Technology assessment", "Architecture design", "Vendor management"],
    image: '/media/real/consulting.jpg',
  },
  {
    icon: Settings,
    title: "Implementation Services",
    description: "Expert deployment and configuration of IT solutions",
    features: ["Solution design", "System deployment", "Data migration", "Go-live support"],
    image: '/media/real/implementation.jpg',
  },
  {
    icon: Users,
    title: "Managed Services",
    description: "Comprehensive IT operations and infrastructure management",
    features: ["24/7 monitoring", "Proactive maintenance", "Security management", "Performance tuning"],
    image: '/media/real/managed_services.jpg',
  },
  {
    icon: Headphones,
    title: "Support Services",
    description: "Reliable technical support and helpdesk services",
    features: ["24/7 helpdesk", "Remote support", "On-site service", "SLA management"],
    image: '/media/real/support.jpg',
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Protect your business with enterprise-grade security",
    features: ["Threat detection", "Compliance audits", "Incident response", "Security training"],
    image: '/media/real/security_managed.jpg',
  }
]

const processSteps = [
  { number: "01", title: "Discovery", description: "Analyze your infrastructure and requirements" },
  { number: "02", title: "Strategy", description: "Develop a comprehensive tailored plan" },
  { number: "03", title: "Implement", description: "Execute with minimal disruption" },
  { number: "04", title: "Optimize", description: "Continuous improvement and support" }
]

const ServicesGrid = () => {
  return (
    <>
      {/* Services Grid Section */}
      <div className="mxd-section overflow-hidden padding-default">
        <div className="mxd-container grid-container">

          {/* Section Title */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">What We<br />Offer</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">Comprehensive services to meet all your IT needs, from automation to security.</p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                      <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                        <span className="btn-caption">Request Consultation</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Blog-Preview Grid */}
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
                      <Link className="mxd-blog-preview__media block relative overflow-hidden" href="/contact">
                        <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small relative h-[300px] overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        <div className="mxd-preview-hover">
                          <i className="mxd-preview-hover__icon flex items-center justify-center">
                            <ArrowRight className="w-6 h-6 text-white" />
                          </i>
                        </div>

                        <div className="mxd-blog-preview__tags top-4 left-4 absolute">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <span key={idx} className="tag tag-default tag-permanent bg-background/80 backdrop-blur text-xs mr-2 mb-2">{feature}</span>
                          ))}
                        </div>
                      </Link>
                      <div className="mxd-blog-preview__data p-6">
                        <Link className="anim-uni-in-up block" href="/contact">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                              <service.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                          <ul className="space-y-1.5">
                            {service.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Process Section */}
      <div className="mxd-section padding-default bg-secondary/5">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle mb-12">
                    <h2 className="reveal-type anim-uni-in-up">Our Process</h2>
                    <p className="t-large t-bright mt-4 anim-uni-in-up">A proven methodology to ensure successful project delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-awards-list hover-reveal">
              {processSteps.map((step, idx) => (
                <div key={idx} className="mxd-awards-list__item">
                  <div className="mxd-awards-list__border anim-uni-in-up"></div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0 align-items-center">
                        <div className="col-4 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="text-4xl font-black text-primary">{step.number}</p>
                          </div>
                        </div>
                        <div className="col-8 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <p>{step.title}</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up"><p className="t-small">{step.description}</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-awards-list__border anim-uni-in-up"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us / CTA Section */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type anim-uni-in-up">Why Choose<br />Our Services?</h2>
                  </div>
                </div>
                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr anim-uni-in-up">
                    <div className="container-fluid p-0">
                      <div className="row g-4">
                        {[
                          { icon: Clock, title: "Faster Results", desc: "Accelerate with proven methodologies" },
                          { icon: Target, title: "Guaranteed Quality", desc: "Clear SLAs and performance guarantees" },
                          { icon: Shield, title: "Risk Mitigation", desc: "Comprehensive planning and testing" }
                        ].map((benefit, index) => (
                          <div key={index} className="col-12 col-md-4">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="flex flex-col gap-3 group"
                            >
                              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary w-fit group-hover:scale-110 transition-transform">
                                <benefit.icon className="w-6 h-6" />
                              </div>
                              <h4 className="font-bold text-lg">{benefit.title}</h4>
                              <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                      <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/contact">
                        <span className="btn-caption">Request Consultation</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                      <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/solutions">
                        <span className="btn-caption">Explore Solutions</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
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

export default ServicesGrid
