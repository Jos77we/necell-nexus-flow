import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-ai-chatbot.jpg';
import floatingShapes from '@/assets/floating-shapes.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden necell-hero-bg">
      {/* Background floating shapes */}
      <div 
        className="absolute inset-0 opacity-20 floating-animation"
        style={{
          backgroundImage: `url(${floatingShapes})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">About Us</span>
            </h1>
            
            <div className="space-y-6">
              <p className="text-xl lg:text-2xl font-semibold text-light-text">
                "We believe that technology can connect people, automate services, and transform how businesses operate."
              </p>
              
              <p className="text-lg text-subtle-text leading-relaxed">
                Necell Technologies is at the forefront of chatbot innovation. We build intelligent, AI-powered systems that run on WhatsApp, Telegram, and more — helping businesses automate conversations, customer support, and secure transactions. Our systems are deeply integrated with M-Pesa, PesaLink, and Visa APIs for real-time payments and digital card issuance.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="necell-gradient text-primary-foreground hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden necell-glow">
              <img 
                src={heroImage} 
                alt="AI-Powered Chatbot Technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;