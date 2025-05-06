
import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Petar Glišović
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-blue-600 font-medium">Managing Partner at esamurai.net</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed">Ecommerce specialist with expertise in WordPress, WooCommerce, Magento, and Shopify. Dedicated to creating high-end custom solutions for businesses.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={() => window.open('https://www.linkedin.com/in/petarglisovic', '_blank')} className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 w-full sm:w-auto">
              <Linkedin size={18} />
              Connect on LinkedIn
            </Button>
            <Button onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({
                behavior: 'smooth'
              });
            }} variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-30"></div>
            <img src="/images/profile.png" alt="Petar Glišović" className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover rounded-full border-4 border-white shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
