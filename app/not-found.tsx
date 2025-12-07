import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search, Frown } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Animated 404 */}
                <div className="relative mb-8">
                    <h1 className="text-[12rem] font-black text-gradient leading-none select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
                            <Frown className="w-12 h-12 text-primary" />
                        </div>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist or has been moved.
                    Let's get you back on track.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                        <Link href="/">
                            <Home className="w-5 h-5 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="btn-outline px-8 py-4 font-bold rounded-xl">
                        <Link href="/contact">
                            <Search className="w-5 h-5 mr-2" />
                            Contact Support
                        </Link>
                    </Button>
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
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
