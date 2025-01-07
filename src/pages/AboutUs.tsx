import React from 'react';
import { AlertTriangle } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Logo and Creator Section */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/images/favicon.jpg" 
            alt="Nivesh Labs Logo" 
            className="w-32 h-32 mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Created by</h2>
          <h1 className="text-3xl font-bold gradient-text">Nivesh Labs</h1>
        </div>

        {/* About Section */}
        <div className="bg-muted rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">About the offering</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-background px-3 py-1 rounded-full text-sm">Education</span>
            <span className="bg-background px-3 py-1 rounded-full text-sm">⚡️ 4 Plans</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Algopulse.ai Intraday Indicator - Nivesh Labs</h3>
          
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-2">You will get :-</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access of Intraday Indicator</li>
              <li>Access to Premium F&O Group for Calls</li>
              <li>Access of Support & Resistance Indicator</li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="bg-muted/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-primary" />
            <h2 className="text-xl font-bold">Disclaimer for Live Option Trading</h2>
          </div>
          
          <p className="mb-4">
            The information provided during live option trading sessions is for educational and informational purposes only. 
            It is not intended as financial advice, nor should it be considered a recommendation to buy, sell, or hold any 
            securities or financial instruments. Trading options involves significant risk, and may not be suitable for all investors.
          </p>

          <h3 className="font-semibold mb-2">By participating in live option trading, you acknowledge that:</h3>
          
          <ul className="space-y-4">
            <li>
              <strong>Market Risk:</strong> Options trading involves substantial risk and may result in the loss of all 
              invested capital. Past performance is not indicative of future results.
            </li>
            <li>
              <strong>No Financial Advice:</strong> The strategies, techniques, and indicators shared are solely for 
              educational purposes. They should not be construed as professional advice tailored to your specific 
              financial situation. Consult with a qualified financial advisor or broker before making any trading decisions.
            </li>
            <li>
              <strong>Accuracy of Information:</strong> While every effort is made to ensure the information shared is 
              accurate, complete, and up-to-date, no guarantees are made regarding its accuracy or reliability.
            </li>
            <li>
              <strong>Personal Responsibility:</strong> You assume full responsibility for any trades or actions made 
              during live option trading sessions. The hosts or providers of the live trading platform are not 
              responsible for any losses incurred.
            </li>
            <li>
              <strong>Tax Implications:</strong> Option trading may have tax consequences. It is advised to consult 
              with a tax professional to understand the tax implications specific to your trades.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;