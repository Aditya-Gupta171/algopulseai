import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const tiers = [
  {
    name: "Monthly",
    originalPrice: "₹10000",
    price: "₹4900",
    discount: "51% OFF",
    features: [
      "Access of Intraday Indicator",
      "Access to Premium F&O Group for Calls",
      "Access of Support & Resistance Indicator",
      "Basic Trading Signals"
    ]
  },
  {
    name: "3 Month",
    originalPrice: "₹29999",
    price: "₹12999",
    discount: "56.7% OFF",
    popular: true,
    features: [
      "All Monthly Features",
      "Priority Support",
      "Advanced Trading Signals",
      "Custom Alerts",
      "Extended Market Analysis"
    ]
  },
  {
    name: "6 Month",
    originalPrice: "₹59900",
    price: "₹20999",
    discount: "64.9% OFF",
    features: [
      "All 3 Month Features",
      "Premium Support",
      "Advanced Market Analysis",
      "Custom Indicator Settings",
      "Dedicated Support"
    ]
  },
  {
    name: "Yearly",
    originalPrice: "₹120000",
    price: "₹29999",
    discount: "75% OFF",
    features: [
      "All 6 Month Features",
      "24/7 Premium Support",
      "Unlimited Trading Pairs",
      "Custom Integration",
      "Team Collaboration Tools"
    ]
  }
];

const Pricing = () => {
  const handleGetStarted = () => {
    window.open('https://web.telegram.org/a/#-1002123222988', '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Choose Your Plan</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select the perfect plan for your trading needs. Upgrade or downgrade at any time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 bg-muted border border-accent/20 
                hover:border-primary hover:scale-105 hover:shadow-xl hover:shadow-primary/20 
                transition-all duration-300 ${
                tier.popular ? 'border-primary/40' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="flex flex-col items-center gap-2 mb-4">
                  <span className="text-muted-foreground line-through text-lg">
                    {tier.originalPrice}
                  </span>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                    {tier.discount}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;