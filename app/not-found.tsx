import Link from 'next/link'
import { Home, Search, Frown, ArrowRight } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="mxd-section padding-default">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="container-fluid px-0">
                        <div className="row gx-0 justify-content-center">
                            <div className="col-12 col-xl-8 text-center">

                                {/* Animated 404 */}
                                <div className="relative mb-8">
                                    <h1 className="text-gradient leading-none select-none" style={{ fontSize: 'clamp(8rem, 20vw, 14rem)', fontWeight: 900 }}>
                                        404
                                    </h1>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
                                            <Frown className="w-12 h-12 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <h2 className="inner-headline__title mb-4">Page Not Found</h2>
                                <p className="t-large t-bright mb-10 max-w-md mx-auto">
                                    Oops! The page you're looking for doesn't exist or has been moved.
                                    Let's get you back on track.
                                </p>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                                    <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/">
                                        <span className="btn-caption flex items-center">
                                            <Home className="w-5 h-5 mr-2" />
                                            Go Home
                                        </span>
                                    </Link>
                                    <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/contact">
                                        <span className="btn-caption flex items-center">
                                            <Search className="w-5 h-5 mr-2" />
                                            Contact Support
                                        </span>
                                    </Link>
                                </div>

                                {/* Quick Links */}
                                <div className="border-t border-border pt-8">
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Or try one of these popular pages:
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {[
                                            { name: 'Services', href: '/services' },
                                            { name: 'Solutions', href: '/solutions' },
                                            { name: 'About Us', href: '/about' },
                                            { name: 'Partners', href: '/partners' },
                                        ].map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="tag tag-default tag-permanent hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
