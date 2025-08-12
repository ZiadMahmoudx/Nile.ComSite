import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Server, 
  Cloud, 
  Shield, 
  Database,
  Wifi,
  HardDrive
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'System Status - NILE.COM',
  description: 'Real-time status of NILE.COM services and infrastructure.',
}

const services = [
  {
    name: 'Website & Portal',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '120ms',
    lastIncident: '2025-07-15',
    icon: Wifi
  },
  {
    name: 'Cloud Services',
    status: 'operational',
    uptime: '99.95%',
    responseTime: '85ms',
    lastIncident: '2025-07-01',
    icon: Cloud
  },
  {
    name: 'API Services',
    status: 'operational',
    uptime: '99.98%',
    responseTime: '95ms',
    lastIncident: '2025-06-28',
    icon: Server
  },
  {
    name: 'Database Systems',
    status: 'degraded',
    uptime: '99.85%',
    responseTime: '210ms',
    lastIncident: '2025-08-10',
    icon: Database
  },
  {
    name: 'Security Services',
    status: 'operational',
    uptime: '100%',
    responseTime: '45ms',
    lastIncident: 'None',
    icon: Shield
  },
  {
    name: 'Storage Systems',
    status: 'operational',
    uptime: '99.97%',
    responseTime: '75ms',
    lastIncident: '2025-07-22',
    icon: HardDrive
  }
]

const incidents = [
  {
    id: 1,
    title: 'Database Performance Degradation',
    status: 'resolved',
    severity: 'minor',
    started: '2025-08-10 09:30 AM',
    resolved: '2025-08-10 11:45 AM',
    description: 'Experienced slower than normal response times for database queries due to increased load.'
  },
  {
    id: 2,
    title: 'Planned Maintenance',
    status: 'completed',
    severity: 'maintenance',
    started: '2025-07-22 02:00 AM',
    resolved: '2025-07-22 06:00 AM',
    description: 'Completed scheduled maintenance for storage systems with zero downtime.'
  },
  {
    id: 3,
    title: 'Network Connectivity Issues',
    status: 'resolved',
    severity: 'major',
    started: '2025-07-01 03:15 AM',
    resolved: '2025-07-01 05:30 AM',
    description: 'Intermittent network connectivity issues affecting some regions resolved.'
  }
]

export default function StatusPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'degraded':
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case 'outage':
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-blue-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational':
        return <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">Operational</Badge>
      case 'degraded':
        return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Degraded</Badge>
      case 'outage':
        return <Badge variant="secondary" className="bg-red-500/10 text-red-500 border-red-500/20">Outage</Badge>
      case 'resolved':
        return <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">Resolved</Badge>
      case 'completed':
        return <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 border-blue-500/20">Completed</Badge>
      case 'maintenance':
        return <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 border-purple-500/20">Maintenance</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'minor':
        return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Minor</Badge>
      case 'major':
        return <Badge variant="secondary" className="bg-red-500/10 text-red-500 border-red-500/20">Major</Badge>
      case 'maintenance':
        return <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 border-purple-500/20">Maintenance</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

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
            <span className="text-foreground">System</span>
            <br />
            <span className="text-gradient">Status</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time status of all NILE.COM services and infrastructure.
          </p>
          
          <div className="mt-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              <span className="font-semibold text-green-500">All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Status</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Current operational status of all our services and systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-muted/50">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                      </div>
                      {getStatusIcon(service.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        {getStatusBadge(service.status)}
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Uptime</span>
                        <span className="font-medium">{service.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Response Time</span>
                        <span className="font-medium">{service.responseTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Incident</span>
                        <span className="font-medium">{service.lastIncident}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Recent Incidents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Historical record of system incidents and maintenance activities.
            </p>
          </div>

          <div className="space-y-6">
            {incidents.map((incident) => (
              <Card key={incident.id} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <CardTitle className="text-xl">{incident.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {getStatusBadge(incident.status)}
                      {getSeverityBadge(incident.severity)}
                    </div>
                  </div>
                  <CardDescription>
                    {incident.started} - {incident.resolved}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{incident.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Incident #{incident.id}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Status Subscription */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 via-red-500/10 to-primary/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-black text-gradient">Stay Informed</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Subscribe to status updates to receive notifications about service interruptions, 
                  maintenance windows, and system performance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 max-w-md rounded-lg border border-input bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <button className="btn-primary px-6 py-3 font-bold rounded-lg whitespace-nowrap">
                    Subscribe to Updates
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}