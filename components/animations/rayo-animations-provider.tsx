'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import Ukiyo from 'ukiyojs'
import imagesLoaded from 'imagesloaded'

import { usePathname } from 'next/navigation'

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)
}

const docStyle = typeof window !== 'undefined' ? getComputedStyle(document.documentElement) : null

export const RayoAnimationsProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()

    useGSAP(() => {
        // --------------------------------------------- //
        // Text Reveal (.reveal-type)
        // --------------------------------------------- //
        const revealTypes = document.querySelectorAll('.reveal-type')
        revealTypes.forEach((element) => {
            // Preserve color classes on inner spans (e.g. text-primary)
            const colorSpans = element.querySelectorAll('[class*="text-"]')
            const colorMap = new Map<Node, string>()
            colorSpans.forEach((span) => {
                const colorClass = Array.from(span.classList).find(c => c.startsWith('text-'))
                if (colorClass) colorMap.set(span, span.getAttribute('style') || '')
            })

            const text = new SplitType(element as HTMLElement, { types: 'words,chars' })

            // Re-apply color to chars that were inside colored spans
            if (colorMap.size > 0) {
                const chars = element.querySelectorAll('.char')
                chars.forEach((char) => {
                    let parent = char.parentElement
                    while (parent && parent !== element) {
                        const colorClass = Array.from(parent.classList).find(c => c.startsWith('text-'))
                        if (colorClass) {
                            char.classList.add(colorClass)
                            break
                        }
                        parent = parent.parentElement
                    }
                })
            }

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    end: 'top 50%',
                    scrub: true,
                },
                opacity: 0.15,
                stagger: 0.05,
            })
        })

        // --------------------------------------------- //
        // Universal In-Up (.anim-uni-in-up)
        // --------------------------------------------- //
        const animInUp = document.querySelectorAll('.anim-uni-in-up')
        animInUp.forEach((element) => {
            gsap.fromTo(element, {
                opacity: 0,
                y: 50,
            }, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                }
            })
        })

        // --------------------------------------------- //
        // Zoom In/Out Containers (.anim-zoom-in-container, .anim-zoom-out-container)
        // --------------------------------------------- //
        const zoomInContainer = document.querySelectorAll('.anim-zoom-in-container')
        const zoomOutContainer = document.querySelectorAll('.anim-zoom-out-container')

        zoomInContainer.forEach((element) => {
            gsap.fromTo(element, {
                borderRadius: '200px',
                transform: 'scale3d(0.94, 1, 1)'
            }, {
                borderRadius: docStyle?.getPropertyValue('--_radius-l') || '3.8rem',
                transform: 'scale3d(1, 1, 1)',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 82%',
                    end: 'top 14%',
                    scrub: true,
                }
            })
        })

        zoomOutContainer.forEach((element) => {
            gsap.fromTo(element, {
                borderRadius: docStyle?.getPropertyValue('--_radius-l') || '3.8rem',
                transform: 'scale3d(1, 1, 1)'
            }, {
                borderRadius: '200px',
                transform: 'scale3d(0.94, 1, 1)',
                scrollTrigger: {
                    trigger: element,
                    start: 'bottom 100%',
                    end: 'bottom 20%',
                    scrub: true,
                }
            })
        })

        // --------------------------------------------- //
        // Button Hover Stagger (.btn-anim)
        // --------------------------------------------- //
        const btnElements = document.querySelectorAll('.btn-anim .btn-caption:not([data-static-anim="true"])')
        btnElements.forEach((element) => {
            const el = element as HTMLElement
            if (el.querySelector('.btn-anim__block')) return // Avoid double-init

            const innerText = el.innerText
            el.innerHTML = ''
            const textContainer = document.createElement('div')
            textContainer.classList.add('btn-anim__block')

            for (const letter of innerText) {
                const span = document.createElement('span')
                span.innerText = letter.trim() === '' ? '\xa0' : letter
                span.classList.add('btn-anim__letter')
                textContainer.appendChild(span)
            }

            el.appendChild(textContainer)
            el.appendChild(textContainer.cloneNode(true))
        })

        // --------------------------------------------- //
        // Parallax (.parallax-img)
        // --------------------------------------------- //
        const parallaxImages = document.querySelectorAll('.parallax-img')
        const parallaxImagesSmall = document.querySelectorAll('.parallax-img-small')

        if (parallaxImages.length > 0) {
            new Ukiyo(parallaxImages, {
                scale: 1.5,
                speed: 1.5,
            })
        }

        if (parallaxImagesSmall.length > 0) {
            new Ukiyo(parallaxImagesSmall, {
                scale: 1.2,
                speed: 1.5,
            })
        }

        // --------------------------------------------- //
        // Hover Reveal (.hover-reveal__item)
        // --------------------------------------------- //
        const hoverItems = document.querySelectorAll('.hover-reveal__item')
        hoverItems.forEach((item) => {
            const reveal = item.querySelector('.hover-reveal__content') as HTMLElement
            const image = item.querySelector('.hover-reveal__image') as HTMLElement

            if (!reveal) return

            item.addEventListener('mousemove', (e: any) => {
                gsap.to(reveal, {
                    opacity: 1,
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: true
                })
                if (image) {
                    gsap.to(image, {
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                        overwrite: true
                    })
                }
            })

            item.addEventListener('mouseleave', () => {
                gsap.to(reveal, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: true
                })
                if (image) {
                    gsap.to(image, {
                        scale: 1.2,
                        duration: 0.5,
                        ease: 'power2.out',
                        overwrite: true
                    })
                }
            })
        })

        // --------------------------------------------- //
        // Marquee Logic (.marquee-right--gsap, .marquee-left--gsap)
        // --------------------------------------------- //
        const initMarquees = () => {
            const marqueeItems = document.querySelectorAll('.marquee-right--gsap, .marquee-left--gsap')
            marqueeItems.forEach((itemBlock: any) => {
                const isRight = itemBlock.classList.contains('marquee-right--gsap')
                const marqueeInner = itemBlock.querySelector('.marquee__toright, .marquee__toleft')
                if (!marqueeInner) return

                // Duplicate content for seamless loop
                if (!itemBlock.dataset.duplicated) {
                    marqueeInner.innerHTML += marqueeInner.innerHTML
                    itemBlock.dataset.duplicated = 'true'
                }

                const direction = isRight ? '+=50%' : '-=50%'
                const mod = gsap.utils.wrap(0, 50)

                const tl = gsap.timeline()
                tl.to(marqueeInner, {
                    duration: 30,
                    ease: 'none',
                    x: direction,
                    modifiers: {
                        x: (x) => mod(parseFloat(x)) + '%'
                    },
                    repeat: -1
                })

                // Velocity-based speed
                ScrollTrigger.create({
                    start: 0,
                    end: 'max',
                    onUpdate: (self) => {
                        const velocity = Math.abs(self.getVelocity() / 200)
                        const timeScaleClamp = gsap.utils.clamp(1, 6)
                        gsap.to(tl, { timeScale: timeScaleClamp(velocity), duration: 0.5 })
                    }
                })
            })
        }
        initMarquees()

        // --------------------------------------------- //
        // Parallax Universal ([data-speed])
        // --------------------------------------------- //
        gsap.to('[data-speed]', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed') || '0')) * ScrollTrigger.maxScroll(window),
            ease: 'none',
            scrollTrigger: {
                start: 0,
                end: 'max',
                invalidateOnRefresh: true,
                scrub: 0
            }
        })

        // --------------------------------------------- //
        // Pinned Images (.mxd-pinned)
        // --------------------------------------------- //
        const pinnedSections = document.querySelectorAll('.mxd-pinned')
        pinnedSections.forEach((section) => {
            const childTriggers = section.querySelectorAll('.mxd-pinned__text-item')
            const childTargets = section.querySelectorAll('.mxd-pinned__img-item')

            function makeItemActive(idx: number) {
                childTriggers.forEach(t => t.classList.remove('is-active'))
                childTargets.forEach(t => t.classList.remove('is-active'))
                childTriggers[idx]?.classList.add('is-active')
                childTargets[idx]?.classList.add('is-active')
            }

            makeItemActive(0)

            childTriggers.forEach((trigger, idx) => {
                ScrollTrigger.create({
                    trigger: trigger,
                    start: 'top center',
                    end: 'bottom center',
                    onToggle: (isActive) => {
                        if (isActive) makeItemActive(idx)
                    }
                })
            })
        })

        // Refresh ScrollTrigger on image load
        const content = document.body
        imagesLoaded(content, () => {
            ScrollTrigger.refresh()
        })

        // --------------------------------------------- //
        // Stacking Cards (.stack-item)
        // --------------------------------------------- //
        const cards = document.querySelectorAll('.stack-item')
        const stickySpace = document.querySelector('.stack-offset') as HTMLElement || null

        if (cards.length > 0 && stickySpace) {
            const animation = gsap.timeline()
            let cardHeight = 0

            function initCards() {
                animation.clear()
                cardHeight = (cards[0] as HTMLElement).offsetHeight
                cards.forEach((card, index) => {
                    if (index > 0) {
                        gsap.set(card, { y: index * cardHeight })
                        animation.to(card, { y: 0, duration: index * 0.5, ease: 'none' }, 0)
                    }
                })
            }

            initCards()

            ScrollTrigger.create({
                trigger: '.stack-wrapper',
                start: 'top top',
                pin: true,
                end: () => `+=${(cards.length * cardHeight) + stickySpace.offsetHeight}`,
                scrub: true,
                animation: animation,
                invalidateOnRefresh: true,
            })

            ScrollTrigger.addEventListener('refreshInit', initCards)
        }

    }, [pathname])

    return <>{children}</>
}
