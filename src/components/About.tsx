
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <Card className="shadow-md">
          <CardContent className="pt-6">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">Welcome to my professional space! I am Petar Glišović, a dedicated eCommerce expert based in Serbia. With a passion for problem-solving and a commitment to delivering results, I manage esamurai.net, where I specialize in custom high-end eCommerce solutions.</p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">As the Managing Partner of esamurai.net, I harness my extensive skills in full-cycle development, focusing on eCommerce platforms including WordPress, WooCommerce, Magento, and Shopify. My approach centers around effective communication and a commitment to timely project completion.</p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              My expertise extends beyond development to encompass video production, animated videos, 
              and creative illustrations. I pride myself on staying current with the latest industry 
              trends to provide comprehensive solutions for both B2B and corporate clients.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
