import React from 'react';
import { Brain, ChartLine, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Precise buy/sell signals with clear entry and exit points",
    image: "/images/9c12c95e-e99d-4358-9d1c-8a4f0ab9e410.png"
  },
  {
    icon: ChartLine,
    title: "Real-Time Signals",
    description: "Get accurate signals for Bank Nifty and Nifty Sensex & BTC",
    image: "/images/9dd29bc5-62b8-4c6a-97f4-bcb9d75a449b.png"
  },
  {
    icon: Zap,
    title: "Smart Alerts",
    description: "Instant notifications for market movements",
    image: "/images/62cccfd3-4e22-4d88-ab74-d64ac0971d57.png"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in tools to protect your investments",
    image: "/images/5eaeb0e3-0527-4726-891f-b289b43e329c.png"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Why Choose algopulse.ai
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group relative overflow-hidden h-[300px] md:h-[400px]"
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-background/80 group-hover:bg-background/70 transition-colors duration-300"></div>
              
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 text-base md:text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;