'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import SplitType from 'split-type'
import Ukiyo from 'ukiyojs'
import imagesLoaded from 'imagesloaded'

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)
}

export const RayoAnimationsProvider = ({ children }: { children: React.ReactNode }) => {
    useGSAP(() => {
        // --------------------------------------------- //
        // Text Reveal (.reveal-type)
        // --------------------------------------------- //
        const revealTypes = document.querySelectorAll('.reveal-type')
        revealTypes.forEach((element) => {
            const text = new SplitType(element as HTMLElement, { types: 'words,chars' })
            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                },
                opacity: 0.2,
                stagger: 0.1,
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
        // Button Hover Stagger (.btn-anim)
        // --------------------------------------------- //
        const btnElements = document.querySelectorAll('.btn-anim .btn-caption')
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

            if (!reveal || !image) return

            item.addEventListener('mousemove', (e: any) => {
                gsap.to(reveal, {
                    opacity: 1,
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: true
                })
                gsap.to(image, {
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: true
                })
            })

            item.addEventListener('mouseleave', () => {
                gsap.to(reveal, {
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: true
                })
                gsap.to(image, {
                    scale: 1.2,
                    duration: 0.5,
                    ease: 'power2.out',
                    overwrite: true
                })
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

        // Refresh ScrollTrigger on image load
        const content = document.body
        imagesLoaded(content, () => {
            ScrollTrigger.refresh()
        })

    }, [])

    return <>{children}</>
}
