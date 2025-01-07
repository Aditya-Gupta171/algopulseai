import React from 'react';
import { MessageCircle, Youtube, Twitter } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-background/95 backdrop-blur-sm border-t border-muted z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <a 
            href="https://web.telegram.org/a/#-1002123222988" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm md:text-base">Join Telegram</span>
          </a>
          <a 
            href="https://www.youtube.com/@niveshlabs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Youtube className="w-5 h-5" />
            <span className="text-sm md:text-base">YouTube</span>
          </a>
          <a 
            href="https://x.com/niveshlabs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
          >
            <Twitter className="w-5 h-5" />
            <span className="text-sm md:text-base">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialBar;