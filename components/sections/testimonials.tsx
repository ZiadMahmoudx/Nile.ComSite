'use client'

import { Badge } from '@/components/ui/badge'
import { TestimonialCarousel } from '@/components/ui/testimonial-carousel'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { MessageSquare } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: 'Ahmed Hassan',
        role: 'CTO',
        company: 'Al-Futtaim Group',
        content: 'NILE.COM transformed our entire IT infrastructure. Their expertise in cloud migration saved us millions and improved our operational efficiency by 40%.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Sarah Mitchell',
        role: 'IT Director',
        company: 'Emirates NBD',
        content: 'The cybersecurity solutions implemented by NILE.COM have been exceptional. We haven\'t had a single security incident since partnering with them.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Omar Khalid',
        role: 'Managing Director',
        company: 'Etisalat Digital',
        content: 'Their 24/7 support team is phenomenal. Any issue we\'ve had was resolved within hours, not days. True enterprise-grade service.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Lisa Chen',
        role: 'VP of Operations',
        company: 'DAMAC Properties',
        content: 'We\'ve worked with many IT providers, but NILE.COM stands out for their strategic approach. They don\'t just solve problems—they anticipate them.',
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation animation="fade-up">
                    <div className="text-center mb-12 space-y-4">
                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Client Testimonials
                        </Badge>
                        <h2 className="text-4xl lg:text-6xl font-black">
                            <span className="text-foreground">What Our</span>
                            <br />
                            <span className="text-gradient">Clients Say</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Don't just take our word for it. Hear from industry leaders who trust NILE.COM
                            for their technology needs.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Testimonial Carousel */}
                <ScrollAnimation animation="scale-up" delay={0.2}>
                    <TestimonialCarousel testimonials={testimonials} autoPlay interval={6000} />
                </ScrollAnimation>
            </div>
        </section>
    )
}
