import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  FileText
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@nilecom.com.eg",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+20 (2) 27024681",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Maadi, Cairo, Egypt",
      description: "Visit our office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Sun - Thu: 9AM - 6PM",
      description: "We're here to help"
    }
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "Contact",
      description: "Get in touch with our team"
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your thoughts with us"
    },
    {
      icon: FileText,
      title: "Request Quote",
      description: "Get a custom quote for your project"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Get In </span>
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{info.title}</h4>
                        <p className="text-primary font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Quick Actions
              </h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Card key={index} className="card-hover bg-card border-border hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <div>
                            <h4 className="font-medium text-foreground">{action.title}</h4>
                            <p className="text-sm text-muted-foreground">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email"
                      className="bg-background border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Phone
                    </label>
                    <Input 
                      placeholder="Enter your phone number"
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <Input 
                    placeholder="Enter your company name"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us more about your project or requirements..."
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    I agree to the privacy policy and terms of service
                  </label>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground tech-glow"
                  onClick={() => alert("Message sent successfully!")}
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join over 1,750 satisfied customers who trust NILE.COM for their technology needs. 
              Let's discuss how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => alert("Schedule Consultation button clicked!")}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => alert("Download Brochure button clicked!")}
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
