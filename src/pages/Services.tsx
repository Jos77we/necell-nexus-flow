import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  MessageCircle, 
  Smartphone, 
  Send, 
  CreditCard, 
  Bot, 
  BarChart3, 
  Wallet, 
  Database,
  CheckCircle,
  Zap
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: Bot,
      title: 'AI Chatbot Development',
      description: 'Tailored AI-powered bots built using OpenAI, NLP, and rules-based flows — optimized for WhatsApp, Telegram, and web chat widgets.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'WhatsApp Business Integration',
      description: 'Verified WhatsApp bot setup, message templates, customer support flows, and automation using WhatsApp Cloud API.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Send,
      title: 'Telegram Bot Systems',
      description: 'Smart, lightweight bots built on Telegram Bot API — capable of form handling, file sharing, and API-triggered notifications.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Payments & API Integration',
      description: 'Secure integration with M-Pesa, PesaLink, Visa, and other APIs for chatbot-driven payments, verifications, and service access.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'Smart Virtual Assistants',
      description: 'Deploy AI assistants that handle queries, book appointments, offer product support, and escalate to human agents.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights Dashboard',
      description: 'Real-time user interaction data, payment logs, and conversation funnels presented in an intuitive dashboard.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Wallet,
      title: 'Digital Business Cards',
      description: 'One-click virtual Visa cards linked to bots — ideal for promotions, expense management, and ecommerce use.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Database,
      title: 'CRM & Backend Integration',
      description: 'Seamless connection to CRMs (e.g., HubSpot, Zoho, Salesforce) and internal business tools through secure APIs.',
      color: 'from-violet-500 to-indigo-500'
    }
  ];

  const processSteps = [
    { title: 'Consultation', description: 'Understanding your business needs' },
    { title: 'Requirement Mapping', description: 'Detailed technical specifications' },
    { title: 'Bot Design + Payment Setup', description: 'Custom development and integration' },
    { title: 'Deployment', description: 'Launch and configuration' },
    { title: 'Monitoring + Optimization', description: 'Ongoing support and improvements' }
  ];

  const industries = [
    'Retail & Ecommerce',
    'Healthcare',
    'FinTech',
    'Education',
    'Logistics',
    'Government & NGOs'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex(ref => ref === entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden necell-hero-bg">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-animation" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-light-text leading-relaxed">
              We build intelligent systems that automate conversations and connect transactions to real people in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="text-xl text-subtle-text max-w-3xl mx-auto">
              Comprehensive AI and payment solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isVisible = visibleCards.includes(index);
              
              return (
                <div
                  key={service.title}
                  ref={(el) => cardsRef.current[index] = el}
                  className={`necell-card p-8 glow-on-hover group relative overflow-hidden transition-all duration-700 ${
                    isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-6 necell-gradient rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-subtle-text leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-subtle-text">
              From concept to deployment in 5 strategic steps
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 md:gap-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto necell-gradient rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground animate-pulse-glow">
                      {index + 1}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-subtle-text">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-xl text-subtle-text">
              Versatile solutions across multiple sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="necell-card px-6 py-4 glow-on-hover group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-foreground group-hover:text-primary transition-colors duration-300 font-medium">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 necell-hero-bg">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating-animation" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-slide-up">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className="p-4 necell-gradient rounded-full animate-pulse-glow">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="p-4 necell-gradient rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to automate <br />
              <span className="text-gradient">your business?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-light-text mb-4 font-medium">
              Let us help you design your custom AI and payment solution.
            </p>
            
            <p className="text-lg text-subtle-text mb-12 max-w-2xl mx-auto leading-relaxed">
              Get started with a free consultation and discover how our intelligent chatbots can transform your customer engagement and streamline your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="necell-gradient text-primary-foreground hover:scale-105 transition-all duration-300 animate-pulse-glow text-lg px-12 py-6"
              >
                Book a Free Consultation
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 text-lg px-12 py-6"
              >
                Test Our Demo Bot
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-subtle-text">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Free technical consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Custom solution design</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span>30-day support included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;