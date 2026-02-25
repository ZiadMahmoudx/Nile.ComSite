'use client'

import React, { useState } from 'react' // Import useState
import { toast } from 'sonner' // Import toast
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, ArrowUp } from 'lucide-react'

export function RayoFooter() {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitting(true)
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            })

            const data = await res.json()

            if (!res.ok) throw new Error(data.error || 'Failed to subscribe')

            toast.success('Subscribed successfully!', {
                description: 'Thank you for subscribing to our insights.'
            })
            setEmail('')
        } catch (error) {
            console.error(error)
            toast.error('Subscription failed', {
                description: 'Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <footer id="mxd-footer" className="mxd-footer">



            {/* Footer Block - Info Columns Start */}
            <div className="mxd-footer__footer-blocks">

                {/* single column (Navigation) */}
                <div className="footer-blocks__column animate-card-3">
                    <div className="footer-blocks__card fullheight-card">
                        <div className="footer-blocks__nav">
                            <ul className="footer-nav">
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">Home</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/about" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">About us</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/services" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">Services</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/solutions" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">Solutions</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/careers" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">Careers</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/partners" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">Partners</span>
                                    </Link>
                                </li>
                                <li className="footer-nav__item anim-uni-in-up">
                                    <Link href="/contact" className="footer-nav__link btn-anim">
                                        <span className="btn-caption">Contact</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-blocks__links anim-uni-in-up">
                            <Link className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="/privacy">
                                <span className="btn-caption">Privacy Policy</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                            <Link className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="/terms">
                                <span className="btn-caption">Terms & conditions</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* single column (Contact & Newsletter) */}
                <div className="footer-blocks__column animate-card-3">
                    {/* inner card - Email */}
                    <div className="footer-blocks__card">
                        <p className="mxd-point-subtitle anim-uni-in-up">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                                <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
                            </svg>
                            <a href="mailto:info@nilecom.com.eg">info@nilecom.com.eg</a>
                        </p>
                    </div>
                    {/* inner card - Phone */}
                    <div className="footer-blocks__card">
                        <p className="mxd-point-subtitle anim-uni-in-up">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                                <path fill="currentColor" d="M19.6,9.6c0,0-3,0-4,0c-0.4,0-1.8-0.2-1.8-0.2c-0.6-0.1-1.1-0.2-1.6-0.6c-0.5-0.3-0.9-0.8-1.2-1.2 c-0.3-0.4-0.4-0.9-0.5-1.4c0,0-0.1-1.1-0.2-1.5c-0.1-1.1,0-4.4,0-4.4C10.4,0.2,10.2,0,10,0S9.6,0.2,9.6,0.4c0,0,0.1,3.3,0,4.4 c0,0.4-0.2,1.5-0.2,1.5C9.4,6.7,9.2,7.2,9,7.6C8.7,8.1,8.2,8.5,7.8,8.9c-0.5,0.3-1,0.5-1.6,0.6c0,0-1.2,0.1-1.7,0.2 c-1,0.1-4.2,0-4.2,0C0.2,9.6,0,9.8,0,10c0,0.2,0.2,0.4,0.4,0.4c0,0,3.1-0.1,4.2,0c0.4,0,1.7,0.2,1.7,0.2c0.6,0.1,1.1,0.2,1.6,0.6 c0.4,0.3,0.8,0.7,1.1,1.1c0.3,0.5,0.5,1,0.6,1.6c0,0,0.1,1.3,0.2,1.7c0,1,0,4.1,0,4.1c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4 c0,0,0-3.1,0-4.1c0-0.4,0.2-1.7,0.2-1.7c0.1-0.6,0.2-1.1,0.6-1.6c0.3-0.4,0.7-0.8,1.1-1.1c0.5-0.3,1-0.5,1.6-0.6 c0,0,1.3-0.1,1.8-0.2c1,0,4,0,4,0c0.2,0,0.4-0.2,0.4-0.4C20,9.8,19.8,9.6,19.6,9.6L19.6,9.6z"></path>
                            </svg>
                            <a href="tel:+20227353333">+20 2 2735 3333</a>
                        </p>
                    </div>
                    {/* inner card - Newsletter */}
                    <div className="footer-blocks__card fill-card notify">
                        <div className="footer-blocks__title anim-uni-in-up">
                            <p className="footer-blocks__title-m">Subscribe to our insights:</p>
                        </div>
                        <div className="form-container anim-uni-in-up">
                            <form className="form notify-form form-light" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    className="outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <button
                                    className="btn btn-form btn-absolute-right btn-muted slide-right-up anim-no-delay"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <ArrowUpRight className="w-5 h-5" />
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* single column (Ecosystem) */}
                <div className="footer-blocks__column animate-card-3">
                    <div className="footer-blocks__card fullheight-card">
                        <div className="footer-blocks__block">
                            <div className="footer-blocks__title anim-uni-in-up">
                                <p className="footer-blocks__title-l">Find Us</p>
                            </div>
                            <div className="footer-blocks__socials">
                                <ul className="footer-socials">
                                    <li className="footer-socials__item anim-uni-in-up"><a href="https://www.linkedin.com/company/nile-com" className="footer-socials__link" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                    <li className="footer-socials__item anim-uni-in-up"><a href="https://www.facebook.com/nilecom" className="footer-socials__link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                                    <li className="footer-socials__item anim-uni-in-up"><a href="https://www.twitter.com/nilecom" className="footer-socials__link" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                    <li className="footer-socials__item anim-uni-in-up"><a href="https://www.youtube.com/@nilecom" className="footer-socials__link" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-blocks__links anim-uni-in-up">
                            <p className="t-xsmall t-muted flex items-center gap-2">
                                <Link className="no-effect" href="/" target="_blank">Nile.com</Link>
                                <span>&copy; 2025</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            {/* Footer Block - Info Columns End */}



        </footer>
    )
}
