'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Globe, Shield, Cloud, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-primary/10 via-red-500/5 to-primary/10 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">+20 2 2735 3333</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">info@nilecom.com.eg</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Cairo, Egypt</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-xs font-bold text-gradient">25+ Years of Excellence</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "bg-background/98 backdrop-blur-xl transition-all duration-500",
        scrolled ? "shadow-2xl bg-background/99" : ""
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-red-500/30 to-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-red-500/10 p-3 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <Image
                    src="/nile-logo.png"
                    alt="NILE.COM Logo"
                    width={48}
                    height={48}
                    className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gradient tracking-tight">NILE.COM</span>
                <span className="text-xs text-muted-foreground font-semibold tracking-wider uppercase">IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl group overflow-hidden",
                    pathname === item.href
                      ? "text-white bg-gradient-to-r from-primary via-red-500 to-primary shadow-lg shadow-primary/25"
                      : "text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary/80 hover:via-red-500/80 hover:to-primary/80"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname !== item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-red-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-red-500 to-primary group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="btn-primary px-8 py-3 font-bold text-sm tracking-wide rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Link href="/contact">
                  <Zap className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Get Started
                  <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-3 hover:bg-primary/10 rounded-xl transition-all duration-300"
              >
                <Menu className={cn("h-6 w-6 transition-all duration-300", mobileMenuOpen && "rotate-90 opacity-0")} />
                <X className={cn("h-6 w-6 absolute transition-all duration-300", !mobileMenuOpen && "-rotate-90 opacity-0")} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden transition-all duration-500 overflow-hidden bg-background/98 backdrop-blur-xl border-t border-border/50",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-6 py-6 space-y-3">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-6 py-4 text-base font-bold transition-all duration-300 rounded-xl border-l-4 group",
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-primary via-red-500 to-primary border-white shadow-lg"
                    : "text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary/80 hover:via-red-500/80 hover:to-primary/80 border-transparent hover:border-white/50"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
            <div className="pt-6 border-t border-border/50 space-y-3">
              <Button asChild className="w-full btn-primary font-bold py-3 text-base">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Zap className="w-4 h-4 mr-2" />
                  Get Started Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
