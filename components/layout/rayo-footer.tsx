'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'News & Events', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' },
    ],
    solutions: [
        { name: 'Cloud Solutions', href: '/solutions#cloud' },
        { name: 'Cybersecurity', href: '/solutions#security' },
        { name: 'Infrastructure', href: '/solutions#infrastructure' },
        { name: 'Digital Transformation', href: '/solutions#transformation' },
        { name: 'Data Management', href: '/solutions#data' },
    ],
    services: [
        { name: 'Managed IT Services', href: '/services#managed' },
        { name: 'IT Consulting', href: '/services#consulting' },
        { name: 'Technical Support', href: '/services#support' },
        { name: 'Implementation', href: '/services#implementation' },
        { name: 'Training', href: '/services#training' },
    ],
}

export function RayoFooter() {
    return (
        <footer className="mxd-demo-footer">
            <div className="mxd-demo-footer__bg">
                <div className="absolute inset-0 bg-background/90" />
            </div>

            <div className="mxd-container grid-container relative z-10">
                <div className="mxd-block">
                    <div className="container-fluid p-0">
                        <div className="row g-0">

                            {/* Logo Column */}
                            <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                                <div className="mxd-demo-footer__logo">
                                    <Link href="/" className="mxd-logo">
                                        <Image
                                            src="/nile-logo.png"
                                            alt="NILE.COM"
                                            width={56}
                                            height={56}
                                            className="mxd-logo__image object-contain"
                                            style={{ width: '5.6rem', height: 'auto' }}
                                        />
                                        <span className="mxd-logo__text">
                                            NILE<span style={{ display: 'block', fontSize: '0.5em', letterSpacing: '0.25em', opacity: 0.7 }}>.COM</span>
                                        </span>
                                    </Link>
                                </div>
                                <div className="mxd-demo-footer__slogan">
                                    <p className="t-small t-bright">
                                        Leading IT solutions provider with 25+ years of experience in delivering
                                        cutting-edge technology solutions.
                                    </p>
                                </div>
                                <div className="mxd-demo-footer__btn">
                                    <Link className="btn btn-anim btn-default btn-small btn-accent slide-right" href="/contact">
                                        <span className="btn-caption">Contact Us</span>
                                        <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Navigation Column */}
                            <div className="col-12 col-xl-6 mxd-demo-footer__item">
                                <nav className="mxd-demo-footer__nav">
                                    <div className="container-fluid p-0">
                                        <div className="row g-0">

                                            {/* Company Links */}
                                            <div className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item">
                                                <div className="mxd-footer-nav__block">
                                                    <div className="mxd-footer-nav__title">
                                                        <p className="t-140 t-bright t-caption">Company</p>
                                                    </div>
                                                    <div className="mxd-footer-nav__list">
                                                        <ul>
                                                            {footerLinks.company.map((link) => (
                                                                <li key={link.name}>
                                                                    <Link href={link.href}>{link.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Solutions Links */}
                                            <div className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item">
                                                <div className="mxd-footer-nav__block">
                                                    <div className="mxd-footer-nav__title">
                                                        <p className="t-140 t-bright t-caption">Solutions</p>
                                                    </div>
                                                    <div className="mxd-footer-nav__list">
                                                        <ul>
                                                            {footerLinks.solutions.map((link) => (
                                                                <li key={link.name}>
                                                                    <Link href={link.href}>{link.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Services Links */}
                                            <div className="col-12 col-md-4 mxd-grid-item mxd-footer-nav__item">
                                                <div className="mxd-footer-nav__block">
                                                    <div className="mxd-footer-nav__title">
                                                        <p className="t-140 t-bright t-caption">Services</p>
                                                    </div>
                                                    <div className="mxd-footer-nav__list">
                                                        <ul>
                                                            {footerLinks.services.map((link) => (
                                                                <li key={link.name}>
                                                                    <Link href={link.href}>{link.name}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </nav>
                            </div>

                            {/* Social / Contact Column */}
                            <div className="col-12 col-xl-3 mxd-demo-footer__item mxd-grid-item">
                                <div className="mxd-demo-footer__promo">
                                    <div className="mxd-footer-promo__title">
                                        <p className="t-140 t-bright t-caption">Connect with us:</p>
                                    </div>
                                    <div className="mxd-footer-promo__list">
                                        <Link className="mxd-footer-promo__item" href="https://www.linkedin.com/company/nile.com" target="_blank">
                                            <Linkedin className="mxd-footer-promo__icon w-6 h-6" />
                                            <span className="mxd-footer-promo__link">LinkedIn</span>
                                        </Link>
                                        <Link className="mxd-footer-promo__item" href="https://www.facebook.com/" target="_blank">
                                            <Facebook className="mxd-footer-promo__icon w-6 h-6" />
                                            <span className="mxd-footer-promo__link">Facebook</span>
                                        </Link>
                                        <Link className="mxd-footer-promo__item" href="https://www.instagram.com/" target="_blank">
                                            <Instagram className="mxd-footer-promo__icon w-6 h-6" />
                                            <span className="mxd-footer-promo__link">Instagram</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mxd-block">
                    <div className="mxd-demo-footer__mixdesign mxd-grid-item no-margin py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground w-full">
                            <p>&copy; 2025 NILE.COM. All rights reserved.</p>
                            <div className="flex gap-4 mt-4 md:mt-0">
                                <Link href="/privacy">Privacy</Link>
                                <Link href="/terms">Terms</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
