import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleGetStarted = () => {
    window.open('https://web.telegram.org/a/#-1002123222988', '_blank');
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-muted">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">algopulse.ai</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/about" className="nav-link">About Us</Link>
            <div className="relative group">
              <a href="#contact" className="nav-link">Contact Us</a>
              <div className="absolute hidden group-hover:block w-48 right-0 mt-2 py-2 bg-background border border-muted rounded-lg shadow-lg">
                <a 
                  href="https://t.me/AlgoPulse_ai_Trade" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Join Telegram Group
                </a>
                <a 
                  href="https://t.me/niveshlabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-muted"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
            <Button className="btn-primary" onClick={handleGetStarted}>
              Get Started
            </Button>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-muted animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="nav-link">Features</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <Link to="/about" className="nav-link">About Us</Link>
              <a 
                href="https://web.telegram.org/a/#-1002123222988" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                Join Telegram Group
              </a>
              <a 
                href="https://t.me/niveshlabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="nav-link"
              >
                Contact Our Team
              </a>
              <Button className="btn-primary w-full" onClick={handleGetStarted}>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;