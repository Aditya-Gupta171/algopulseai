import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import SocialBar from '@/components/SocialBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <SocialBar />
    </div>
  );
};

export default Index;