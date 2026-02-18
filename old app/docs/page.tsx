import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronRight,
  Cloud,
  Shield,
  Server,
  Smartphone,
  Database,
  Network
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - NILE.COM',
  description: 'Access technical documentation, guides, and resources for NILE.COM services.',
}

const documentationCategories = [
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Documentation for our cloud solutions including Azure and AWS',
    docs: 24,
    color: 'text-blue-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Security guides, best practices, and compliance documentation',
    docs: 18,
    color: 'text-red-500'
  },
  {
    icon: Server,
    title: 'Infrastructure',
    description: 'Server, networking, and infrastructure solution documentation',
    docs: 22,
    color: 'text-green-500'
  },
  {
    icon: Smartphone,
    title: 'Digital Transformation',
    description: 'Guides for modernizing your business with digital solutions',
    docs: 15,
    color: 'text-purple-500'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Database solutions, analytics, and data governance documentation',
    docs: 19,
    color: 'text-yellow-500'
  },
  {
    icon: Network,
    title: 'Networking',
    description: 'Network architecture, SD-WAN, and connectivity solutions',
    docs: 16,
    color: 'text-indigo-500'
  }
]

const popularDocs = [
  {
    title: 'Getting Started with Azure Migration',
    category: 'Cloud Services',
    type: 'Guide',
    link: '#'
  },
  {
    title: 'Zero Trust Security Implementation',
    category: 'Cybersecurity',
    type: 'Whitepaper',
    link: '#'
  },
  {
    title: 'Hybrid Cloud Architecture Best Practices',
    category: 'Infrastructure',
    type: 'Guide',
    link: '#'
  },
  {
    title: 'Incident Response Procedures',
    category: 'Cybersecurity',
    type: 'Procedure',
    link: '#'
  }
]

export default function DocumentationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/30 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">Technical</span>
            <br />
            <span className="text-gradient">Documentation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive guides, API documentation, and resources for all NILE.COM services.
          </p>
        </div>
      </section>

      {/* Search and Quick Links */}
      <section className="py-12 bg-muted/30 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full rounded-lg border border-input bg-background px-4 py-3 pl-12 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <BookOpen className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button variant="outline" asChild>
                <Link href="#api">
                  API Reference
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#tutorials">
                  Tutorials
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#releases">
                  Release Notes
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#faq">
                  FAQ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Documentation Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our comprehensive documentation organized by service categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-muted/50 ${category.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                        <CardDescription>
                          {category.docs} documents
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Button asChild variant="ghost" className="p-0 text-primary hover:text-primary/80 group">
                      <Link href="#">
                        Browse docs
                        <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Documentation */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Popular Documentation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Most frequently accessed guides and resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {popularDocs.map((doc, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {doc.title}
                    </CardTitle>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {doc.type}
                    </span>
                  </div>
                  <CardDescription>{doc.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" size="sm" className="group">
                    <Link href={doc.link}>
                      View Document
                      <ExternalLink className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Additional Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Downloadable resources and external documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Video Tutorials</h3>
                <p className="text-muted-foreground">
                  Step-by-step video guides for our services and solutions.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link href="#">
                    Watch Videos
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Downloads</h3>
                <p className="text-muted-foreground">
                  Downloadable resources, whitepapers, and technical specifications.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link href="#">
                    Download Resources
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-primary to-red-500 p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">API Reference</h3>
                <p className="text-muted-foreground">
                  Complete API documentation for developers and integrators.
                </p>
                <Button asChild variant="outline" className="group">
                  <Link href="#">
                    View API Docs
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}