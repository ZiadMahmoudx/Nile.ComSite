'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Globe, Shield, Cloud, Zap, Users, Award, BookOpen, FolderOpen, SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { Search } from '@/components/ui/search'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'Partners', href: '/partners' },
  { 
    name: 'Company', 
    href: '#',
    children: [
      { name: 'Our Team', href: '/team', icon: Users },
      { name: 'Careers', href: '/careers', icon: Award },
      { name: 'News & Events', href: '/news', icon: Globe },
      { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
    ]
  },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false)
  const [mobileCompanyMenuOpen, setMobileCompanyMenuOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const companyMenuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (companyMenuRef.current && !companyMenuRef.current.contains(event.target as Node)) {
        setCompanyMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when resizing to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
        setMobileCompanyMenuOpen(false)
        setShowMobileSearch(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-primary/10 via-red-500/5 to-primary/10 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 text-sm">
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+20227353333" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-xs md:text-sm">+20 2 2735 3333</span>
              </a>
              <a href="mailto:info@nilecom.com.eg" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-xs md:text-sm">info@nilecom.com.eg</span>
              </a>
              <a href="https://maps.app.goo.gl/tTUNyWFzGazyTgHe6" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
                <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-xs md:text-sm">Cairo, Egypt</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gradient hidden sm:block">25+ Years of Excellence</span>
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
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-red-500/30 to-primary/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-primary/10 to-red-500/10 p-2 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <Image
                    src="/nile-logo.png"
                    alt="NILE.COM Logo"
                    width={40}
                    height={40}
                    className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-gradient tracking-tight">NILE.COM</span>
                <span className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase hidden sm:block">IT Solutions</span>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on tablet */}
            <div className="hidden xl:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative" ref={item.name === 'Company' ? companyMenuRef : null}>
                  {item.children ? (
                    <div 
                      className={cn(
                        "relative px-3 py-2.5 text-sm font-bold transition-all duration-300 rounded-lg group overflow-hidden flex items-center cursor-pointer",
                        pathname === item.href
                          ? "text-white bg-gradient-to-r from-primary via-red-500 to-primary shadow-lg shadow-primary/25"
                          : "text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary/80 hover:via-red-500/80 hover:to-primary/80"
                      )}
                      onClick={() => setCompanyMenuOpen(!companyMenuOpen)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <ChevronDown className={cn("w-3 h-3 ml-1 transition-transform duration-300", companyMenuOpen && "rotate-180")} />
                      {pathname !== item.href && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-red-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-red-500 to-primary group-hover:w-full transition-all duration-300"></div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-3 py-2.5 text-sm font-bold transition-all duration-300 rounded-lg group overflow-hidden",
                        pathname === item.href
                          ? "text-white bg-gradient-to-r from-primary via-red-500 to-primary shadow-lg shadow-primary/25"
                          : "text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary/80 hover:via-red-500/80 hover:to-primary/80"
                      )}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {pathname !== item.href && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-red-500/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary via-red-500 to-primary group-hover:w-full transition-all duration-300"></div>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && companyMenuOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-background/98 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl z-50">
                      <div className="py-2">
                        {item.children.map((child) => {
                          const IconComponent = child.icon
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              className={cn(
                                "flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200",
                                pathname === child.href
                                  ? "text-primary bg-primary/10"
                                  : "text-foreground hover:text-primary hover:bg-primary/5"
                              )}
                              onClick={() => setCompanyMenuOpen(false)}
                            >
                              <IconComponent className="w-5 h-5 mr-3 text-muted-foreground" />
                              {child.name}
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons with Search - Responsive sizes */}
            <div className="hidden xl:flex items-center space-x-3">
              <div className="w-64">
                <Search />
              </div>
              <Button asChild className="btn-primary px-4 py-2 font-bold text-xs md:text-sm tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Link href="/contact">
                  <Zap className="w-3 h-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
                  Get Started
                </Link>
              </Button>
            </div>

            {/* Tablet/Mobile Navigation */}
            <div className="xl:hidden flex items-center space-x-2">
              {/* Search Icon for Mobile/Tablet */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileSearch(!showMobileSearch)}
                className="relative p-2 hover:bg-primary/10 rounded-xl transition-all duration-300"
              >
                <SearchIcon className="h-5 w-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative p-2 hover:bg-primary/10 rounded-xl transition-all duration-300"
              >
                <Menu className={cn("h-6 w-6 transition-all duration-300", mobileMenuOpen && "rotate-90 opacity-0")} />
                <X className={cn("h-6 w-6 absolute transition-all duration-300", !mobileMenuOpen && "-rotate-90 opacity-0")} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="xl:hidden px-4 pb-4">
            <Search />
          </div>
        )}

        {/* Mobile Navigation - Show on tablet and mobile */}
        <div className={cn(
          "xl:hidden transition-all duration-500 overflow-hidden bg-background/98 backdrop-blur-xl border-t border-border/50",
          mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-6 py-6 space-y-3 max-h-[70vh] overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <div
                      className={cn(
                        "flex items-center justify-between px-6 py-4 text-base font-bold transition-all duration-300 rounded-xl border-l-4 group cursor-pointer",
                        pathname === item.href
                          ? "text-white bg-gradient-to-r from-primary via-red-500 to-primary border-white shadow-lg"
                          : "text-foreground hover:text-white hover:bg-gradient-to-r hover:from-primary/80 hover:via-red-500/80 hover:to-primary/80 border-transparent hover:border-white/50"
                      )}
                      onClick={() => setMobileCompanyMenuOpen(!mobileCompanyMenuOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", mobileCompanyMenuOpen && "rotate-180")} />
                    </div>
                    {mobileCompanyMenuOpen && (
                      <div className="pl-8 space-y-2 mt-2">
                        {item.children.map((child) => {
                          const IconComponent = child.icon
                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileCompanyMenuOpen(false)
                              }}
                              className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
                                pathname === child.href
                                  ? "text-primary bg-primary/10"
                                  : "text-foreground hover:text-primary hover:bg-primary/5"
                              )}
                            >
                              <IconComponent className="w-4 h-4 mr-2 text-muted-foreground" />
                              {child.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </>
                ) : (
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
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                )}
              </div>
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