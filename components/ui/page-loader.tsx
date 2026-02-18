'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import imagesLoaded from 'imagesloaded'

export const PageLoader = () => {
    const [count, setCount] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Counter logic
        let currentValue = 0
        const updateCounter = () => {
            if (currentValue < 100) {
                const increment = Math.floor(Math.random() * 10) + 1
                currentValue = Math.min(currentValue + increment, 100)
                setCount(currentValue)
                const delay = Math.floor(Math.random() * 120) + 25
                setTimeout(updateCounter, delay)
            }
        }
        updateCounter()

        // Hide loader when images are ready
        const imgLoad = imagesLoaded(document.body)
        imgLoad.on('done', () => {
            const tl = gsap.timeline({
                onComplete: () => setIsLoaded(true)
            })

            tl.to('.loader__count', {
                duration: 0.8,
                ease: 'power2.in',
                y: '100%',
                delay: 1.2
            })
            tl.to('.loader__wrapper', {
                duration: 0.8,
                ease: 'power4.in',
                y: '-100%'
            }, '-=0.2')

            document.getElementById('loader')?.classList.add('loaded')
        })
    }, [])

    if (isLoaded) return null

    return (
        <div id="loader" className="loader">
            <div className="loader__wrapper">
                <div className="loader__content">
                    <div className="loader__count">
                        <span className="count__text">{count}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
