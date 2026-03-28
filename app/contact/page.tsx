import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { GradientText } from '@/components/ui/gradient-text';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-border/40">
        <div className="container px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch with <GradientText>Vitto</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground">
              Questions about our platform? Want to schedule a demo? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 border-b border-border/40">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="border border-border/40 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries and support
              </p>
              <a
                href="mailto:hello@vitto.ai"
                className="text-accent hover:text-accent/80 font-semibold"
              >
                hello@vitto.ai
              </a>
            </div>

            {/* Phone */}
            <div className="border border-border/40 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Phone
              </h3>
              <p className="text-muted-foreground mb-4">
                Talk to our sales team
              </p>
              <a
                href="tel:+919876543210"
                className="text-accent hover:text-accent/80 font-semibold"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Address */}
            <div className="border border-border/40 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Office
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit our Mumbai headquarters
              </p>
              <p className="text-accent font-semibold">
                Mumbai, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-32 border-b border-border/40 bg-secondary/30">
        <div className="container px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Send us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@company.com"
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                type="text"
                placeholder="Your Bank/NBFC"
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your needs..."
                className="w-full px-4 py-2 border border-border/40 rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 border-t border-border/40 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your banking AI?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Start with a free trial. No credit card required.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 border-t border-border/40">
        <div className="container px-4">
          <div className="flex justify-center gap-8">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@vitto.ai"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
