import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Send
} from 'lucide-react';

const Footer = () => {
  const exploreLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Case Studies', href: '#cases' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-dark-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Explore Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Explore</h3>
            <nav className="flex flex-col space-y-3">
              {exploreLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-subtle-text hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-subtle-text">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@necell.tech</span>
              </div>
              <div className="flex items-center space-x-3 text-subtle-text">
                <Phone className="h-5 w-5 text-primary" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-3 text-subtle-text">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-3 necell-card hover:necell-glow transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-subtle-text group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
            <p className="text-subtle-text">
              Get the latest insights on AI chatbots and financial technology integration.
            </p>
            
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background border-border focus:border-primary"
                />
                <Button size="icon" className="necell-gradient">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-subtle-text">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              <div className="text-xl font-bold text-gradient">Necell</div>
              <div className="text-sm text-subtle-text">Technologies</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-subtle-text">
            <span>© 2025 Necell Technologies. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;