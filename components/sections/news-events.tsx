'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, CalendarDays } from 'lucide-react'

const upcomingEvents = [
    {
        id: 'cloud-summit-2025',
        title: 'Cloud Innovation Summit 2025',
        date: '2025-09-15',
        location: 'Cairo Conference Center',
        time: '9:00 AM - 5:00 PM',
    },
    {
        id: 'security-workshop',
        title: 'Enterprise Security Workshop',
        date: '2025-08-20',
        location: 'NILE.COM Training Center',
        time: '10:00 AM - 3:00 PM',
    },
]

export default function NewsEvents() {
    return (
        <section className="mxd-section padding-default bg-muted/20">
            <div className="mxd-container grid-container">

                {/* Section Title */}
                <div className="mxd-block mb-12">
                    <div className="mxd-section-title">
                        <div className="container-fluid px-0">
                            <div className="row g-0 align-items-center">
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrtitle">
                                        <h2 className="reveal-type anim-uni-in-up">Upcoming Events</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin text-right">
                                    {/* Add 'View All' link if needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="mxd-block">
                    <div className="container-fluid px-0">
                        <div className="row g-4">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="col-12 col-xl-6 mxd-grid-item">
                                    <div className="event-card bg-secondary/10 radius-m p-8 flex flex-col md:flex-row gap-6 hover:bg-secondary/20 transition-colors duration-300">
                                        <div className="event-date flex-shrink-0 text-center bg-primary text-primary-foreground rounded-lg w-20 h-20 flex flex-col items-center justify-center p-2">
                                            <span className="text-3xl font-black">{new Date(event.date).getDate()}</span>
                                            <span className="text-xs uppercase font-bold">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                                        </div>
                                        <div className="event-details flex-grow">
                                            <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                                                <Link href={`/news/${event.id}`}>{event.title}</Link>
                                            </h3>
                                            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{event.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{event.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="event-action flex items-center justify-end md:justify-center">
                                            <Link href={`/news/${event.id}`} className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm border border-border">
                                                <ArrowRight className="w-5 h-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
