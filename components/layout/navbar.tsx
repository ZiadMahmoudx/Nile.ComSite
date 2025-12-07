'use client'

import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const Navbar = () => {
    const { scrollY } = useScroll()
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    useMotionValueEvent(scrollY, "change", (current) => {
        // Show if at top or scrolling up
        if (typeof current === "number") {
            if (current < 50) {
                setVisible(true);
            } else {
                const direction = current - lastScrollY;
                if (direction < 0) {
                    setVisible(true); // Scrolling up
                } else {
                    setVisible(false); // Scrolling down
                }
            }
            setLastScrollY(current);
        }
    })

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            className={cn(
                "fixed top-4 inset-x-0 max-w-2xl mx-auto z-50 border border-transparent dark:border-white/[0.2] rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 items-center flex justify-between space-x-4",
            )}
        >
            <Link href="/" className="font-bold text-foreground text-sm flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary" />
                NILE.COM
            </Link>

            <nav className="flex items-center space-x-4 text-sm font-medium text-muted-foreground/80">
                <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                <Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link>
                <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            </nav>

            <Button size="sm" className="rounded-full px-6" asChild>
                <Link href="/contact">Contact</Link>
            </Button>
        </motion.header>
    )
}
