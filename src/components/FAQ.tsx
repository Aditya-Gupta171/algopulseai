import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does it work?",
      answer: "Once you sign up to a plan above, you'll be brought to a page which gives you instant access. A link will also be emailed to you in case you miss it. You'll be prompted to connect your TradingView & Discord accounts which are both free platforms that our tools function on. We do not store payment credentials, they are encrypted and passed to Stripe & PayPal for a safe & secure way to purchase subscriptions on our site."
    },
    {
      question: "Which plan should I choose?",
      answer: "The Essential Plan is great for simple trading like support/resistance, trend lines, patterns and more. The Premium Plan gives you the full set of our world-renowned Signals & Overlays™, Oscillator Matrix™, and Price Action Concepts™ toolkits. The Ultimate Plan was designed for using our AI platform and Backtesters, allowing you to automate backtesting of our toolkits & get the fastest insights possible."
    },
    {
      question: "What markets are supported?",
      answer: "All of our indicators function on any market available on TradingView such as stocks, crypto, forex, and commodities on all timeframes including 1m, 5m, 15m, 1h, 4H, 1D, etc."
    },
    {
      question: "Does it work on MetaTrader 4/5?",
      answer: "Our paid plans with our exclusive tools available above work only on TradingView (free web-based charting platform) and you can trade on any platform in real-time based on those charts."
    },
    {
      question: "Can I win every trade using this?",
      answer: "Absolutely not. There is no indicator, algorithm, system, or strategy to give you the power to predict markets with a guaranteed % accuracy. Trading itself is risky and past performance does not guarantee future results."
    },
    {
      question: "Is this friendly for beginners?",
      answer: "Yes, all of our plans are great for beginners. Every plan comes with many tutorials as well as access to our highly active community where users can get 24/7 support, discuss strategies, & go through daily analysis amongst each other."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-muted/50 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;