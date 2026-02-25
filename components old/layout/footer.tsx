'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Send } from 'lucide-react'

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
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Support Portal', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'System Status', href: '/status' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/p/NileCom-100064014699452/', color: 'hover:text-blue-500' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/nile.com', color: 'hover:text-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/nilecom.eg.ae/', color: 'hover:text-pink-500' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/20 to-background border-t border-border/50">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-black text-gradient">Stay Updated</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Subscribe to our newsletter for the latest technology insights, industry trends, and company updates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Enter your email address"
                  className="flex-1 bg-background/50 border-border/50"
                />
                <Button className="btn-primary px-8 font-bold group">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/nile-logo.png"
                  alt="NILE.COM Logo"
                  width={48}
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gradient">NILE.COM</span>
                <span className="text-xs text-muted-foreground font-semibold">IT Solutions</span>
              </div>
            </Link>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Leading IT solutions provider with 25+ years of experience in delivering
              cutting-edge technology solutions to enterprises across the Middle East.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+20 2 2735 3333</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span className="font-medium">info@nilecom.com.eg</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Maadi, Cairo, Egypt</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`p-3 rounded-xl bg-muted/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-primary/10 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Solutions</h4>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-foreground">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="opacity-50" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 NILE.COM. All rights reserved. | Established 1999
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
