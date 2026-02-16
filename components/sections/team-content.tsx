'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedCaption } from '@/components/ui/animated-caption'

const teamMembers = [
  {
    name: 'Karim Soliman',
    role: 'CEO & Technology Strategist',
    bio: 'Expert in Banking Payments and Cloud IT Infrastructure.',
    expertise: ['Digital Strategy', 'Banking Payments', 'Cloud Infrastructure'],
    image: '/CEO.png',
    initials: 'KS',
  },
  {
    name: 'Dr. Marwan Shalaby',
    role: 'Chief Financial Officer',
    bio: 'CFO and Board Member with extensive corporate finance experience.',
    expertise: ['Corporate Finance', 'Strategic Planning', 'Governance'],
    image: '/Dr. Marwan Shalaby Chief Financial  Board Member.png',
    initials: 'MS',
  },
  {
    name: 'Khaled Helmy',
    role: 'SDM Messaging & Collaboration',
    bio: 'Senior Director specializing in communication systems.',
    expertise: ['Messaging Systems', 'Collaboration Tech', 'Communication'],
    image: '/Khaled Helmy  SDM messaging and collaboration at Nile.Com.png',
    initials: 'KH',
  },
  {
    name: 'Marwan Helmy',
    role: 'Technology Solutions Lead',
    bio: 'Expert in IT infrastructure and technology solutions.',
    expertise: ['IT Infrastructure', 'Solutions', 'Architecture'],
    image: null,
    initials: 'MH',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Senior Solutions Architect',
    bio: 'Deep expertise in enterprise integration and digital transformation.',
    expertise: ['Solution Architecture', 'Enterprise Integration', 'Cloud'],
    image: null,
    initials: 'AH',
  },
  {
    name: 'Yasmin Khalil',
    role: 'Cybersecurity Specialist',
    bio: 'Extensive experience in threat intelligence and incident response.',
    expertise: ['Cybersecurity', 'Threat Intel', 'Incident Response'],
    image: null,
    initials: 'YK',
  }
]

const values = [
  { title: 'Innovation', desc: 'Cutting-edge technologies for complex challenges' },
  { title: 'Collaboration', desc: 'Teamwork for extraordinary results' },
  { title: 'Excellence', desc: 'Highest standards in everything we do' },
  { title: 'Integrity', desc: 'Honesty, transparency, ethical practices' },
  { title: 'Learning', desc: 'Continuous growth and development' },
  { title: 'Customer Focus', desc: 'Your success is our success' },
]

const initialsColors = [
  'bg-blue-600',
  'bg-emerald-600',
  'bg-violet-600',
  'bg-amber-600',
  'bg-rose-600',
  'bg-teal-600',
]

export default function TeamContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
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
                      <span>Our Team</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline">
                      <h1 className="inner-headline__title">
                        Meet Our <span className="text-primary">Leadership Team</span>
                      </h1>
                      <p className="inner-headline__text t-large t-bright mt-6">
                        Decades of experience in IT solutions, digital transformation, and customer success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-blog-preview">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="col-12 col-md-6 col-xl-4 mxd-grid-item group d-flex"
                    >
                      <div className="p-6 d-flex flex-column w-100" style={{ minHeight: '340px' }}>
                        {/* Photo */}
                        <div className="relative mx-auto mb-6 overflow-hidden rounded-full group-hover:border-primary/50 transition-colors duration-300"
                          style={{ width: '160px', height: '160px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'var(--st-bright)' }}>
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={160}
                              height={160}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center ${initialsColors[index % initialsColors.length]}`}>
                              <span className="text-white font-bold" style={{ fontSize: '2.5rem' }}>{member.initials}</span>
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="text-center flex-grow-1 d-flex flex-column">
                          <p className="font-bold group-hover:text-primary transition-colors" style={{ fontSize: '1.25rem', color: 'var(--t-bright)' }}>
                            {member.name}
                          </p>
                          <p className="font-medium mt-1" style={{ fontSize: '0.875rem', color: 'var(--accent)' }}>{member.role}</p>
                          <p className="mt-3" style={{ fontSize: '0.875rem', color: 'var(--t-medium)' }}>{member.bio}</p>
                        </div>

                        {/* Expertise Tags */}
                        <div className="flex flex-wrap justify-center gap-2 mt-4">
                          {member.expertise.map((skill, i) => (
                            <span key={i} className="tag tag-default tag-outline" style={{ fontSize: '0.75rem' }}>
                              {skill}
                            </span>
                          ))}
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

      {/* Values Section */}
      <section className="mxd-section padding-default" style={{ borderTop: '1px solid var(--st-bright)' }}>
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="mxd-section-title pre-grid">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2 className="reveal-type anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>Culture &<br />Values</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p className="anim-uni-in-up">
                        Our values define who we are and guide every decision we make.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mxd-block">
            <div className="mxd-awards-list hover-reveal">
              {values.map((value, idx) => (
                <div key={idx} className="mxd-awards-list__item">
                  <div className="mxd-awards-list__border anim-uni-in-up"></div>
                  <div className="mxd-awards-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0 align-items-center">
                        <div className="col-4 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__date anim-uni-in-up">
                            <p className="font-black" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>{String(idx + 1).padStart(2, '0')}</p>
                          </div>
                        </div>
                        <div className="col-8 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__title anim-uni-in-up">
                            <div className="mxd-awards-list__icon !transform-none">
                              <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <p className="!transform-none" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)' }}>{value.title}</p>
                          </div>
                        </div>
                        <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                          <div className="mxd-awards-list__tagslist">
                            <ul>
                              <li className="anim-uni-in-up"><p className="t-small">{value.desc}</p></li>
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

          {/* CTA */}
          <div className="mxd-block">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content text-center">
                    <div className="mxd-block__inner-headline">
                      <p className="anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)', fontWeight: 'var(--fw-medium)', fontFamily: 'var(--_font-accent)', color: 'var(--t-bright)', lineHeight: '1.1' }}>
                        Join Our Team
                      </p>
                      <p className="t-large t-bright mt-6 anim-uni-in-up">
                        We&apos;re always looking for talented individuals to join our growing team.
                      </p>
                      <div className="flex justify-center mt-10 anim-uni-in-up">
                        <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/careers">
                          <AnimatedCaption text="View Open Positions" />
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
      </section>
    </>
  )
}
