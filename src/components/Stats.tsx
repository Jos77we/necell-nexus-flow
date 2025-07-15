import { useEffect, useRef, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 500, suffix: '+', label: 'Custom Deployments' },
    { number: 98, suffix: '%', label: 'Satisfaction Rating' },
    { number: 20, suffix: '+', label: 'API Integrations' },
    { number: 35, suffix: '+', label: 'Countries Served' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ 
    targetNumber, 
    suffix, 
    duration = 2000 
  }: { 
    targetNumber: number; 
    suffix: string; 
    duration?: number; 
  }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCurrentNumber(Math.floor(targetNumber * easeOutQuart));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, targetNumber, duration]);

    return (
      <span className="text-5xl lg:text-6xl font-bold text-gradient">
        {currentNumber}{suffix}
      </span>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-dark-card to-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Proven <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-subtle-text">
            Numbers that speak to our commitment and success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <AnimatedNumber 
                  targetNumber={stat.number} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-lg font-medium text-subtle-text">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;