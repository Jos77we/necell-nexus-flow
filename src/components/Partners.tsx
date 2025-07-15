import teamImage from '@/assets/team-collaboration.jpg';

const Partners = () => {
  const partners = [
    { name: 'Meta', logo: '📘', description: 'WhatsApp Business API' },
    { name: 'Google', logo: '🌐', description: 'Cloud AI Services' },
    { name: 'Visa', logo: '💳', description: 'Payment Processing' },
    { name: 'Safaricom', logo: '📱', description: 'M-Pesa Integration' },
    { name: 'Microsoft', logo: '🔷', description: 'Azure AI Platform' },
    { name: 'OpenAI', logo: '🤖', description: 'GPT Integration' },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Team Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden necell-glow">
              <img 
                src={teamImage} 
                alt="Necell Technologies Team Collaboration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-6 -right-6 necell-card p-4 rounded-xl animate-pulse-glow">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-semibold text-primary">Innovation</div>
            </div>
            <div className="absolute -bottom-6 -left-6 necell-card p-4 rounded-xl animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-semibold text-primary">Performance</div>
            </div>
          </div>

          {/* Partners Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Trusted <span className="text-gradient">Partnerships</span>
              </h2>
              <p className="text-xl text-subtle-text leading-relaxed">
                We collaborate with industry leaders to deliver cutting-edge solutions that drive your business forward.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={partner.name}
                  className="necell-card p-6 text-center glow-on-hover group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-subtle-text">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;