
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
                Interested in working together? Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <a 
                href="https://www.linkedin.com/in/petarglisovic" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 sm:p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
              >
                <Linkedin size={28} className="text-blue-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1">LinkedIn</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Connect professionally</p>
              </a>
              
              <a 
                href="mailto:petarglisovic@esamurai.net" 
                className="flex flex-col items-center p-4 sm:p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
              >
                <Mail size={28} className="text-blue-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Send a message</p>
              </a>
              
              <a 
                href="tel:381607400727"
                className="flex flex-col items-center p-4 sm:p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center"
              >
                <Phone size={28} className="text-blue-600 mb-2 sm:mb-3" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Give me a call</p>
              </a>
            </div>
            
            <div className="mt-8 sm:mt-10 text-center">
              <Button 
                onClick={() => window.open('https://www.linkedin.com/in/petarglisovic', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-6"
              >
                Connect on LinkedIn
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
