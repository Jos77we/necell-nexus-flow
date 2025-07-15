import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Brain,
      title: 'Expertise',
      description: 'Our seasoned engineers craft solutions using advanced AI and financial APIs tailored for each client.',
    },
    {
      icon: Zap,
      title: 'Technology',
      description: 'We use state-of-the-art tools — including OpenAI, Node.js, Twilio, and Meta\'s APIs — to stay ahead.',
    },
    {
      icon: Target,
      title: 'Solutions',
      description: 'Each chatbot is built to match the client\'s workflow, integrating payments, verification, and CRM.',
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'Our clients experience faster service delivery, higher engagement, and improved ROI.',
    },
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Four Pillars of <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-subtle-text max-w-3xl mx-auto">
            Our foundation is built on these core values that drive innovation and deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="necell-card p-8 text-center glow-on-hover group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 necell-gradient rounded-full group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {value.title}
                </h3>
                
                <p className="text-subtle-text leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;