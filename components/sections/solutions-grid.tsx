'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Cloud, Shield, Server, Smartphone, Database, Network, ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const solutions = [
  {
    id: 1,
    slug: 'cloud-migration',
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless transition to cloud infrastructure with minimal downtime and maximum efficiency.',
    features: ['AWS & Azure Certified', '99.9% Uptime SLA', '24/7 Monitoring', 'Cost Optimization'],
    image: '/media/real/cloud_migration.jpg',
    category: 'Cloud Services'
  },
  {
    id: 2,
    slug: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced threat protection and security solutions to safeguard your digital assets.',
    features: ['Zero Trust Architecture', 'SOC 2 Compliance', 'Threat Intelligence', 'Incident Response'],
    image: '/media/real/cybersecurity.jpg',
    category: 'Security'
  },
  {
    id: 3,
    slug: 'infrastructure',
    icon: Server,
    title: 'Infrastructure',
    description: 'Robust IT infrastructure solutions designed for scalability and performance.',
    features: ['Hybrid Cloud Setup', 'Load Balancing', 'Disaster Recovery', 'Performance Tuning'],
    image: '/media/real/implementation.jpg',
    category: 'Infrastructure'
  },
  {
    id: 4,
    slug: 'digital-transformation',
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Modernize your business processes with cutting-edge digital solutions.',
    features: ['Process Automation', 'API Integration', 'Mobile Solutions', 'Analytics Dashboard'],
    image: '/media/real/digital_transformation.jpg',
    category: 'Transformation'
  },
  {
    id: 5,
    slug: 'data-management',
    icon: Database,
    title: 'Data Management',
    description: 'Comprehensive data solutions for storage, analytics, and business intelligence.',
    features: ['Big Data Analytics', 'Data Warehousing', 'Real-time Processing', 'ML Integration'],
    image: '/media/real/data_management.jpg',
    category: 'Data & Analytics'
  },
  {
    id: 6,
    slug: 'network-solutions',
    icon: Network,
    title: 'Network Solutions',
    description: 'High-performance networking solutions for seamless connectivity and communication.',
    features: ['SD-WAN Implementation', 'Network Security', '5G Integration', 'IoT Connectivity'],
    image: '/media/real/managed_services.jpg',
    category: 'Networking'
  }
]

export default function SolutionsGrid() {
  return (
    <>
      {/* Solutions Grid Section */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">

          {/* Section Title */}
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up">Comprehensive<br />IT Solutions</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">From cloud migration to cybersecurity, we provide end-to-end technology solutions that drive innovation and accelerate your business growth.</p>
                    </div>
                  </div>
                  <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                      <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                        <span className="btn-caption">Get Consultation</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Blog Preview Grid */}
          <div className="mxd-block">
            <div className="mxd-blog-preview">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3 group"
                    >
                      <Link className="mxd-blog-preview__media block relative overflow-hidden" href={`/solutions/${solution.slug}`}>
                        <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small relative h-[300px] overflow-hidden">
                          <Image
                            src={solution.image}
                            alt={solution.title}
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
                          <span className="tag tag-default tag-permanent bg-background/80 backdrop-blur text-xs mr-2 mb-2">{solution.category}</span>
                        </div>
                      </Link>
                      <div className="mxd-blog-preview__data p-6">
                        <Link className="anim-uni-in-up block" href={`/solutions/${solution.slug}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                              <solution.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{solution.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-sm mb-4">{solution.description}</p>
                          <ul className="space-y-1.5">
                            {solution.features.slice(0, 3).map((feature, i) => (
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

      {/* CTA Section */}
      <div className="mxd-section padding-default bg-secondary/5">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content text-center">
                    <div className="mxd-block__inner-headline">
                      <h2 className="inner-headline__title anim-uni-in-up">
                        Ready to Transform<br />Your Business?
                      </h2>
                      <p className="inner-headline__text t-large t-bright mt-6 anim-uni-in-up">
                        Let our experts design a custom solution tailored to your specific needs and goals.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/contact">
                          <span className="btn-caption">Get Free Consultation</span>
                          <ArrowUpRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/services">
                          <span className="btn-caption">View All Services</span>
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
      </div>
    </>
  )
}