import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const handleGetStarted = () => {
    window.open('https://web.telegram.org/a/#-1002123222988', '_blank');
  };

  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90 z-10"></div>
      
      {/* Background trading chart image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/lovable-uploads/9c12c95e-e99d-4358-9d1c-8a4f0ab9e410.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <Badge variant="secondary" className="mb-6">
            Beta Access - Limited Spots Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">algopulse.ai</span>
            <br />
            <span className="text-2xl md:text-4xl mt-2 block text-foreground/90">Data Powered Trades & Investments</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-8">
            Unlock AI-powered trading signals and alerts used by professional traders.
            Works seamlessly with your free TradingView account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary text-lg"
              size="lg"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
          <p className="mt-8 text-sm text-foreground/50">
            Hedge fund quality at Retail Price
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;