'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

/* ── Rayo-style Star/Sparkle SVG (the "+" icon used in the template) ── */
const SparkleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" version="1.1" viewBox="0 0 20 20">
        <path fill="currentColor" d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
    </svg>
)

/* ── Menu Structure ── */
import { AnimatedCaption } from "@/components/ui/animated-caption"

interface MenuItem {
    label: string
    href: string
    submenu?: { label: string; href: string }[]
}

const menuItems: MenuItem[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Services',
        href: '/services',
        submenu: [
            { label: 'All Services', href: '/services' },
            { label: 'Cloud Solutions', href: '/solutions/cloud-migration' },
            { label: 'Cybersecurity', href: '/solutions/cybersecurity' },
            { label: 'Infrastructure', href: '/solutions/infrastructure' },
        ],
    },
    {
        label: 'Solutions',
        href: '/solutions',
        submenu: [
            { label: 'All Solutions', href: '/solutions' },
            { label: 'Digital Transformation', href: '/solutions/digital-transformation' },
            { label: 'Data Management', href: '/solutions/data-management' },
            { label: 'Network Solutions', href: '/solutions/network-solutions' },
        ],
    },
    {
        label: 'Company',
        href: '#',
        submenu: [
            { label: 'About Us', href: '/about' },
            { label: 'Our Team', href: '/team' },
            { label: 'Careers', href: '/careers' },
            { label: 'Partners', href: '/partners' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'FAQ', href: '/faq' },
        ],
    },
    {
        label: 'Insights',
        href: '/news',
        submenu: [
            { label: 'News & Blog', href: '/news' },
            { label: 'Case Studies', href: '/case-studies' },
        ],
    },
    {
        label: 'Contact',
        href: '/contact',
    },
]

export function RayoHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
    const menuInnerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
            setOpenSubmenu(null)
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    const toggleMenu = () => setIsOpen(!isOpen)

    const handleToggleSubmenu = (label: string) => {
        setOpenSubmenu(prev => (prev === label ? null : label))
    }

    return (
        <>
            {/* ═══════════════ NAV WRAP ═══════════════ */}
            <nav className="mxd-nav__wrap" data-lenis-prevent="">

                {/* ── Hamburger Button ── */}
                <div className="mxd-nav__contain scale-75 origin-right md:scale-100">
                    <button
                        type="button"
                        className={cn('mxd-nav__hamburger', isOpen && 'is-active')}
                        onClick={toggleMenu}
                        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                        aria-expanded={isOpen}
                        style={{ cursor: 'pointer', zIndex: isOpen ? 210 : 2 }}
                    >
                        <div className="hamburger__base"></div>
                        <span
                            className="hamburger__line"
                            style={{
                                transition: 'transform 0.4s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.3s ease',
                                transform: isOpen ? 'rotate(45deg) translateY(0.5rem)' : 'none',
                                transformOrigin: 'center',
                            }}
                        />
                        <span
                            className="hamburger__line"
                            style={{
                                transition: 'transform 0.4s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.3s ease',
                                transform: isOpen ? 'rotate(-45deg) translateY(-0.5rem)' : 'none',
                                transformOrigin: 'center',
                            }}
                        />
                    </button>
                </div>

                {/* ── Fullscreen Menu Overlay ── */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: '0%' }}
                            exit={{ y: '-100%' }}
                            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                            className="mxd-menu__wrapper"
                            style={{ display: 'flex' }}
                        >
                            {/* Background */}
                            <div className="mxd-menu__base" style={{ backgroundColor: 'var(--base-opp)' }} />

                            {/* Menu Container */}
                            <div className="mxd-menu__contain">
                                <div className="mxd-menu__inner" ref={menuInnerRef}>

                                    {/* ── LEFT: Menu Items ── */}
                                    <div className="mxd-menu__left">
                                        <p className="mxd-menu__caption menu-fade-in" style={{ color: 'var(--t-opp-medium)' }}>
                                            Innovative IT solutions<br />and cutting-edge technology
                                        </p>
                                        <div className="main-menu scale-90 origin-top-left md:scale-100">
                                            <nav className="main-menu__content">
                                                <ul className="main-menu__accordion">
                                                    {menuItems.map((item, i) => (
                                                        <motion.li
                                                            key={item.label}
                                                            className={cn(
                                                                'main-menu__item',
                                                                openSubmenu === item.label ? 'open' : ''
                                                            )}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                                                        >
                                                            {item.submenu ? (
                                                                <>
                                                                    {/* Toggle with sparkle icon */}
                                                                    <div
                                                                        className="main-menu__toggle"
                                                                        role="button"
                                                                        tabIndex={0}
                                                                        onClick={() => handleToggleSubmenu(item.label)}
                                                                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggleSubmenu(item.label) } }}
                                                                    >
                                                                        <span className="main-menu__link btn btn-anim" style={{ color: 'var(--t-opp-bright)' }}>
                                                                            <AnimatedCaption text={item.label} />
                                                                        </span>
                                                                        <SparkleIcon />
                                                                    </div>
                                                                    {/* Submenu (accordion) */}
                                                                    <AnimatePresence>
                                                                        {openSubmenu === item.label && (
                                                                            <motion.ul
                                                                                className="submenu"
                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                                                                                style={{ display: 'block', overflow: 'hidden' }}
                                                                            >
                                                                                {item.submenu.map((sub) => (
                                                                                    <li key={sub.label} className="submenu__item">
                                                                                        <Link href={sub.href} onClick={toggleMenu}>
                                                                                            {sub.label}
                                                                                        </Link>
                                                                                    </li>
                                                                                ))}
                                                                            </motion.ul>
                                                                        )}
                                                                    </AnimatePresence>
                                                                </>
                                                            ) : (
                                                                /* Direct link (no submenu) */
                                                                <Link
                                                                    className="main-menu__link btn btn-anim"
                                                                    href={item.href}
                                                                    onClick={toggleMenu}
                                                                    style={{ color: 'var(--t-opp-bright)' }}
                                                                >
                                                                    <AnimatedCaption text={item.label} />
                                                                </Link>
                                                            )}
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>

                                    {/* ── RIGHT: Promo Area ── */}
                                    <div className="mxd-menu__right">
                                        <div className="menu-promo">
                                            <div className="menu-promo__content">
                                                <motion.p
                                                    className="menu-promo__caption menu-fade-in"
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5, duration: 0.4 }}
                                                    style={{ color: 'var(--t-opp-medium)' }}
                                                >
                                                    Welcome to NILE.COM<br />
                                                    Your trusted IT partner in the Middle East since 2005.
                                                </motion.p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── BOTTOM DATA ── */}
                                    <motion.div
                                        className="mxd-menu__data menu-fade-in"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.7, duration: 0.4 }}
                                    >
                                        <p className="t-xsmall" style={{ color: 'var(--t-opp-medium)' }}>
                                            Made with{' '}
                                            <span style={{ color: 'var(--additional, #DDF160)' }}>&#10084;</span>
                                            {' '}by{' '}
                                            <a className="no-effect" href="https://nilecom.com.eg" target="_blank" style={{ color: 'var(--t-opp-medium)' }}>
                                                NILE.COM
                                            </a>
                                        </p>
                                        <p className="t-xsmall" style={{ color: 'var(--t-opp-medium)' }}>
                                            &copy; 2026
                                        </p>
                                    </motion.div>

                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </nav>

            {/* ═══════════════ HEADER BAR ═══════════════ */}
            <header
                id="header"
                className={cn(
                    'mxd-header',
                    isScrolled ? 'is-hidden' : '',
                    isOpen ? 'menu-is-visible' : ''
                )}
            >
                {/* Logo */}
                <div className="mxd-header__logo">
                    <Link href="/" className="mxd-logo group">
                        <Image
                            src="/nile-logo.png"
                            alt="NILE.COM"
                            width={120}
                            height={40}
                            className="mxd-logo__image object-contain transition-transform duration-300 group-hover:scale-105 w-[6rem] md:w-[9rem]"
                            style={{ height: 'auto' }}
                            priority
                        />
                    </Link>
                </div>

                {/* Controls */}
                <div className="mxd-header__controls flex items-center gap-1 md:gap-4 scale-75 origin-right md:scale-100">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up"
                    >
                        <AnimatedCaption text="Say Hello" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </Link>
                </div>
            </header>
        </>
    )
}
