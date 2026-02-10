'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

const newsItems = [
    {
        id: 'azure-specialization-2025',
        title: 'NILE.COM Achieves Microsoft Azure Advanced Specialization',
        date: '2025-07-15',
        excerpt: 'We are proud to announce our achievement of the Microsoft Azure Advanced Specialization, demonstrating our deep expertise in cloud solutions.',
        category: 'Company News',
        image: '/media/real/cloud_migration.jpg',
    },
    {
        id: 'cybersecurity-summit-2025',
        title: 'Cybersecurity Summit 2025 Partnership',
        date: '2025-06-22',
        excerpt: 'NILE.COM partners with the annual Cybersecurity Summit to present cutting-edge security solutions and threat intelligence.',
        category: 'Events',
        image: '/media/real/digital_transformation.jpg',
    },
    {
        id: 'new-cairo-office',
        title: 'New Office Opening in New Cairo',
        date: '2025-05-30',
        excerpt: 'We are expanding our operations with a new state-of-the-art office in New Cairo to better serve our growing client base.',
        category: 'Company News',
        image: '/media/real/office_interior.jpg',
    },
    {
        id: 'top-it-provider-award',
        title: 'Recognition as Top IT Solutions Provider',
        date: '2025-04-18',
        excerpt: 'NILE.COM named among the top IT solutions providers in Egypt for excellence in service delivery and innovation.',
        category: 'Awards',
        image: '/media/real/cybersecurity.jpg',
    },
    {
        id: 'aws-partnership-expansion',
        title: 'AWS Partnership Expansion',
        date: '2025-03-10',
        excerpt: 'Our expanded partnership with Amazon Web Services enables us to offer more comprehensive cloud solutions.',
        category: 'Company News',
        image: '/media/real/infrastructure.jpg',
    },
    {
        id: 'tech-training-workshop',
        title: 'IT Leadership Workshop Series',
        date: '2025-02-25',
        excerpt: 'Join our exclusive workshop series designed for IT leaders and executives looking to stay ahead of the curve.',
        category: 'Events',
        image: '/media/real/data_management.jpg',
    },
]

const categoryColors: Record<string, string> = {
    'Company News': 'bg-blue-500/20 text-blue-400',
    'Events': 'bg-emerald-500/20 text-emerald-400',
    'Awards': 'bg-amber-500/20 text-amber-400',
}

export default function NewsList() {
    return (
        <section className="mxd-section padding-blog bg-background/50">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="mxd-blog-preview">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                {newsItems.map((news, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3 group"
                                    >
                                        <Link className="mxd-blog-preview__media block relative overflow-hidden" href={`/news/${news.id}`}>
                                            <div className="mxd-blog-preview__image blog-preview-image-1 parallax-img-small relative h-[300px] overflow-hidden">
                                                <Image
                                                    src={news.image}
                                                    alt={news.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                            </div>

                                            <div className="mxd-preview-hover">
                                                <i className="mxd-preview-hover__icon flex items-center justify-center">
                                                    <ArrowRight className="w-6 h-6 text-white" />
                                                </i>
                                            </div>

                                            <div className="mxd-blog-preview__tags top-4 left-4 absolute">
                                                <span className={`tag tag-default tag-permanent backdrop-blur text-xs ${categoryColors[news.category] || 'bg-primary/20 text-primary'}`}>
                                                    {news.category}
                                                </span>
                                            </div>

                                            <div className="absolute bottom-4 left-4 text-[10px] text-white/70 font-bold uppercase tracking-widest">
                                                {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                        </Link>

                                        <div className="mxd-blog-preview__data p-6">
                                            <Link className="anim-uni-in-up block" href={`/news/${news.id}`}>
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-3 leading-tight">
                                                    {news.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                                                    {news.excerpt}
                                                </p>
                                                <div className="btn btn-anim btn-default btn-outline btn-s slide-right-up mt-auto">
                                                    <span className="btn-caption">Read More</span>
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </div>
                                            </Link>
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
