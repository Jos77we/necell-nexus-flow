import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Zap } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 necell-hero-bg">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 necell-gradient rounded-full animate-pulse-glow">
                <MessageCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="p-4 necell-gradient rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </div>

          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Need Smart Chatbot or <br />
            <span className="text-gradient">API Integration?</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-light-text mb-4 font-medium">
            Let's start now.
          </p>
          
          <p className="text-lg text-subtle-text mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your business with AI-powered automation. Get a free consultation and discover how our chatbots can revolutionize your customer engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="necell-gradient text-primary-foreground hover:scale-105 transition-all duration-300 animate-pulse-glow text-lg px-12 py-6"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-12 py-6"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-subtle-text">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span>24/7 support included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;