'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

export const ScrollToTopGuide = () => {
    const pathname = usePathname()
    const lenis = useLenis()

    useEffect(() => {
        // Immediate scroll to top
        window.scrollTo(0, 0)

        // If Lenis is active, force it to top as well
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        }
    }, [pathname, lenis])

    return null
}
