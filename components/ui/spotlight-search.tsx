'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import {
    Search, X, ArrowRight, Clock, Trash2, Sparkles,
    Home, Info, Briefcase, Users, Phone, FileText, HelpCircle,
    Shield, Cloud, Server, Smartphone, Database, Network,
    Building, Award, Newspaper, BookOpen, MapPin, Mail
} from 'lucide-react'

interface SearchItem {
    id: string
    title: string
    description: string
    href: string
    category: 'pages' | 'solutions' | 'services' | 'team' | 'actions'
    icon: React.ComponentType<{ className?: string }>
    keywords?: string[]
}

// Comprehensive search index
const searchIndex: SearchItem[] = [
    // Pages
    { id: 'home', title: 'Home', description: 'Return to homepage', href: '/', category: 'pages', icon: Home, keywords: ['main', 'start', 'landing'] },
    { id: 'about', title: 'About Us', description: 'Learn about NILE.COM and our mission', href: '/about', category: 'pages', icon: Info, keywords: ['company', 'history', 'who we are'] },
    { id: 'solutions', title: 'Solutions', description: 'Explore our IT solutions', href: '/solutions', category: 'pages', icon: Briefcase, keywords: ['products', 'offerings'] },
    { id: 'services', title: 'Services', description: 'View our professional services', href: '/services', category: 'pages', icon: Briefcase, keywords: ['help', 'support'] },
    { id: 'partners', title: 'Partners', description: 'Our technology partners', href: '/partners', category: 'pages', icon: Building, keywords: ['vendors', 'alliances'] },
    { id: 'team', title: 'Our Team', description: 'Meet our leadership team', href: '/team', category: 'pages', icon: Users, keywords: ['people', 'staff', 'employees'] },
    { id: 'careers', title: 'Careers', description: 'Join our team', href: '/careers', category: 'pages', icon: Award, keywords: ['jobs', 'hiring', 'work'] },
    { id: 'news', title: 'News & Events', description: 'Latest updates and events', href: '/news', category: 'pages', icon: Newspaper, keywords: ['blog', 'updates', 'announcements'] },
    { id: 'case-studies', title: 'Case Studies', description: 'Success stories and projects', href: '/case-studies', category: 'pages', icon: BookOpen, keywords: ['projects', 'portfolio', 'clients'] },
    { id: 'contact', title: 'Contact Us', description: 'Get in touch with our team', href: '/contact', category: 'pages', icon: Phone, keywords: ['email', 'phone', 'reach'] },
    { id: 'faq', title: 'FAQ', description: 'Frequently asked questions', href: '/faq', category: 'pages', icon: HelpCircle, keywords: ['help', 'questions', 'answers'] },

    // Solutions
    { id: 'cloud', title: 'Cloud Migration', description: 'Seamless transition to cloud infrastructure', href: '/solutions/cloud-migration', category: 'solutions', icon: Cloud, keywords: ['aws', 'azure', 'google cloud', 'migration'] },
    { id: 'security', title: 'Cybersecurity', description: 'Advanced threat protection solutions', href: '/solutions/cybersecurity', category: 'solutions', icon: Shield, keywords: ['security', 'protection', 'firewall', 'soc'] },
    { id: 'infra', title: 'Infrastructure', description: 'Robust IT infrastructure solutions', href: '/solutions/infrastructure', category: 'solutions', icon: Server, keywords: ['hardware', 'datacenter', 'servers'] },
    { id: 'digital', title: 'Digital Transformation', description: 'Modernize your business processes', href: '/solutions/digital-transformation', category: 'solutions', icon: Smartphone, keywords: ['automation', 'digital', 'modernization'] },
    { id: 'data', title: 'Data Management', description: 'Analytics and business intelligence', href: '/solutions/data-management', category: 'solutions', icon: Database, keywords: ['analytics', 'bi', 'data warehouse'] },
    { id: 'network', title: 'Network Solutions', description: 'High-performance networking', href: '/solutions/network-solutions', category: 'solutions', icon: Network, keywords: ['sd-wan', 'wifi', '5g', 'connectivity'] },

    // Actions
    { id: 'call', title: 'Call Us', description: '+20 2 2735 3333', href: 'tel:+20227353333', category: 'actions', icon: Phone, keywords: ['phone', 'call', 'talk'] },
    { id: 'email', title: 'Send Email', description: 'info@nilecom.com.eg', href: 'mailto:info@nilecom.com.eg', category: 'actions', icon: Mail, keywords: ['email', 'write', 'message'] },
    { id: 'location', title: 'Get Directions', description: 'Visit our office in Maadi, Cairo', href: 'https://maps.app.goo.gl/tTUNyWFzGazyTgHe6', category: 'actions', icon: MapPin, keywords: ['directions', 'map', 'location', 'office'] },
]

const categoryLabels: Record<string, string> = {
    pages: 'Pages',
    solutions: 'Solutions',
    services: 'Services',
    actions: 'Quick Actions',
}

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    pages: FileText,
    solutions: Briefcase,
    services: Briefcase,
    actions: Sparkles,
}

export function SpotlightSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [recentSearches, setRecentSearches] = useState<string[]>([])
    const router = useRouter()

    // Load recent searches from localStorage
    useEffect(() => {
        const saved = localStorage.getItem('recentSearches')
        if (saved) {
            setRecentSearches(JSON.parse(saved))
        }
    }, [])

    // Keyboard shortcut to open
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault()
                setIsOpen(true)
            }
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0)
    }, [query])

    // Fuzzy search with scoring
    const filteredResults = useMemo(() => {
        if (!query.trim()) return []

        const lowerQuery = query.toLowerCase()
        const scored = searchIndex
            .map(item => {
                let score = 0
                const titleLower = item.title.toLowerCase()
                const descLower = item.description.toLowerCase()

                // Exact title match
                if (titleLower === lowerQuery) score += 100
                // Title starts with query
                else if (titleLower.startsWith(lowerQuery)) score += 50
                // Title contains query
                else if (titleLower.includes(lowerQuery)) score += 30
                // Description contains query
                if (descLower.includes(lowerQuery)) score += 15
                // Keywords match
                if (item.keywords?.some(k => k.includes(lowerQuery))) score += 20

                return { item, score }
            })
            .filter(({ score }) => score > 0)
            .sort((a, b) => b.score - a.score)
            .map(({ item }) => item)

        return scored.slice(0, 8)
    }, [query])

    // Group results by category
    const groupedResults = useMemo(() => {
        const groups: Record<string, SearchItem[]> = {}
        filteredResults.forEach(item => {
            if (!groups[item.category]) groups[item.category] = []
            groups[item.category].push(item)
        })
        return groups
    }, [filteredResults])

    // Flat list for keyboard navigation
    const flatResults = useMemo(() => {
        const flat: SearchItem[] = []
        Object.values(groupedResults).forEach(items => {
            flat.push(...items)
        })
        return flat
    }, [groupedResults])

    const handleSelect = useCallback((item: SearchItem) => {
        // Save to recent searches
        const newRecent = [item.title, ...recentSearches.filter(r => r !== item.title)].slice(0, 5)
        setRecentSearches(newRecent)
        localStorage.setItem('recentSearches', JSON.stringify(newRecent))

        setIsOpen(false)
        setQuery('')

        if (item.href.startsWith('tel:') || item.href.startsWith('mailto:') || item.href.startsWith('http')) {
            window.open(item.href, '_blank')
        } else {
            router.push(item.href)
        }
    }, [recentSearches, router])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex(prev => Math.min(prev + 1, flatResults.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex(prev => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter' && flatResults[selectedIndex]) {
            e.preventDefault()
            handleSelect(flatResults[selectedIndex])
        }
    }

    const clearRecentSearches = () => {
        setRecentSearches([])
        localStorage.removeItem('recentSearches')
    }

    const handleRecentClick = (term: string) => {
        setQuery(term)
    }

    let currentFlatIndex = 0

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-muted/50 hover:bg-muted rounded-lg border border-border transition-colors"
            >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono bg-background border rounded">
                    <span>⌘</span>K
                </kbd>
            </button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
                        />

                        {/* Search Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.15 }}
                            className="fixed top-[10%] sm:top-[15%] left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 z-[60] w-auto sm:w-full sm:max-w-2xl"
                        >
                            <div className="bg-background border-2 border-border rounded-2xl shadow-2xl overflow-hidden">
                                {/* Search Input */}
                                <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                                    <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                    <input
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Search pages, solutions..."
                                        autoFocus
                                        className="flex-1 bg-transparent text-base sm:text-lg outline-none placeholder:text-muted-foreground min-w-0"
                                    />
                                    {query && (
                                        <button onClick={() => setQuery('')} className="p-1 hover:bg-muted rounded flex-shrink-0">
                                            <X className="w-4 h-4 text-muted-foreground" />
                                        </button>
                                    )}
                                    {/* Close button - always visible */}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground bg-muted hover:bg-muted/80 rounded transition-colors flex-shrink-0"
                                    >
                                        <X className="w-3 h-3 sm:hidden" />
                                        <span className="hidden sm:inline">ESC</span>
                                    </button>
                                </div>

                                {/* Results */}
                                <div className="max-h-[60vh] overflow-y-auto">
                                    {/* No query - show recent searches */}
                                    {!query.trim() && recentSearches.length > 0 && (
                                        <div className="p-2">
                                            <div className="flex items-center justify-between px-3 py-2">
                                                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-2">
                                                    <Clock className="w-3 h-3" /> Recent Searches
                                                </span>
                                                <button
                                                    onClick={clearRecentSearches}
                                                    className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                                                >
                                                    <Trash2 className="w-3 h-3" /> Clear
                                                </button>
                                            </div>
                                            {recentSearches.map((term, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleRecentClick(term)}
                                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-muted transition-colors"
                                                >
                                                    <Clock className="w-4 h-4 text-muted-foreground" />
                                                    <span>{term}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {/* No query and no recent - show hint */}
                                    {!query.trim() && recentSearches.length === 0 && (
                                        <div className="p-8 text-center text-muted-foreground">
                                            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                                            <p className="text-sm">Start typing to search pages, solutions, and more</p>
                                            <div className="flex justify-center gap-4 mt-4 text-xs">
                                                <span className="flex items-center gap-1">
                                                    <kbd className="px-1.5 py-0.5 bg-muted rounded">↑↓</kbd> Navigate
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <kbd className="px-1.5 py-0.5 bg-muted rounded">↵</kbd> Select
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <kbd className="px-1.5 py-0.5 bg-muted rounded">ESC</kbd> Close
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Search results grouped by category */}
                                    {query.trim() && Object.keys(groupedResults).length > 0 && (
                                        <div className="p-2">
                                            {Object.entries(groupedResults).map(([category, items]) => {
                                                const CategoryIcon = categoryIcons[category] || FileText
                                                return (
                                                    <div key={category} className="mb-2">
                                                        <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground">
                                                            <CategoryIcon className="w-3 h-3" />
                                                            {categoryLabels[category] || category}
                                                        </div>
                                                        {items.map((item) => {
                                                            const Icon = item.icon
                                                            const isSelected = currentFlatIndex === selectedIndex
                                                            const itemIndex = currentFlatIndex
                                                            currentFlatIndex++
                                                            return (
                                                                <button
                                                                    key={item.id}
                                                                    onClick={() => handleSelect(item)}
                                                                    onMouseEnter={() => setSelectedIndex(itemIndex)}
                                                                    className={cn(
                                                                        "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors",
                                                                        isSelected ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                                                    )}
                                                                >
                                                                    <div className={cn(
                                                                        "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
                                                                        isSelected ? "bg-primary text-white" : "bg-muted"
                                                                    )}>
                                                                        <Icon className="w-5 h-5" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="font-medium truncate">{item.title}</div>
                                                                        <div className="text-sm text-muted-foreground truncate">{item.description}</div>
                                                                    </div>
                                                                    <ArrowRight className={cn(
                                                                        "w-4 h-4 flex-shrink-0 transition-transform",
                                                                        isSelected ? "text-primary translate-x-1" : "text-muted-foreground"
                                                                    )} />
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}

                                    {/* No results */}
                                    {query.trim() && Object.keys(groupedResults).length === 0 && (
                                        <div className="p-8 text-center text-muted-foreground">
                                            <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
                                            <p className="font-medium">No results found for "{query}"</p>
                                            <p className="text-sm mt-1">Try searching for pages, solutions, or contact options</p>
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                {query.trim() && flatResults.length > 0 && (
                                    <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between text-xs text-muted-foreground">
                                        <span>{flatResults.length} result{flatResults.length !== 1 ? 's' : ''}</span>
                                        <span className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <kbd className="px-1.5 py-0.5 bg-background border rounded">↑↓</kbd> Navigate
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <kbd className="px-1.5 py-0.5 bg-background border rounded">↵</kbd> Open
                                            </span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
