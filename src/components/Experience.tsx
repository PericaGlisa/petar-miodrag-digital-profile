
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Managing Partner",
      company: "esamurai.net",
      duration: "June 2018 - Present",
      description: [
        "Developed professional, high-end custom eCommerce stores utilizing platforms such as WordPress, WooCommerce, Magento, and Shopify.",
        "Specialize in front-end and back-end development, custom themes, SEO, and API integration.",
        "Communicate effectively with clients to ensure clarity and satisfaction throughout project lifecycles."
      ]
    },
    {
      title: "Frontend Web Developer - Shopify Ecommerce Expert",
      company: "Shopify",
      duration: "May 2018 - August 2018",
      description: [
        "Created new stores based on design templates and performed custom theme adjustments.",
        "Developed front-end improvements and optimized websites for Google PageSpeed.",
        "Addressed and resolved bugs to ensure smooth site functionality."
      ]
    },
    {
      title: "Ecommerce Manager",
      company: "Upwork",
      duration: "December 2016 - July 2018",
      description: [
        "Managed eCommerce maintenance and automation tasks.",
        "Executed data cleaning and manipulation projects, including bulk image resizing."
      ]
    },
    {
      title: "Animated Videos",
      company: "Freelancer.com",
      duration: "February 2015 - September 2016",
      description: [
        "Produced animated videos and custom creative illustrations for various clients.",
        "Executed video production tasks including editing and motion graphics."
      ]
    },
    {
      title: "District Sales Manager",
      company: "WinWin Shop",
      duration: "April 2013 - November 2014",
      description: [
        "Oversaw operational practices of retail stores, ensuring compliance with marketing campaigns and achieving sales goals."
      ]
    },
    {
      title: "Junior Credit Analyst",
      company: "Raiffeisen Bank Serbia",
      duration: "March 2011 - October 2012",
      description: [
        "Analyzed credit applications and provided insights on financial data and risk assessments."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <Card className="shadow-md bg-white/50 backdrop-blur-sm">
          <CardContent className="pt-6 px-4 sm:px-6 md:px-8">
            <div className="space-y-6 sm:space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 gap-2 sm:gap-3">
                      <div className="flex items-center">
                        <Briefcase size={18} className="mr-2 flex-shrink-0 text-blue-600" />
                        <span className="font-medium text-blue-600">{exp.company}</span>
                      </div>
                      <span className="hidden sm:inline mx-2 text-gray-400">•</span>
                      <span className="text-sm sm:text-base text-gray-500">{exp.duration}</span>
                    </div>
                  </div>
                  <ul className="list-disc ml-4 sm:ml-6 text-gray-700 space-y-2 text-sm sm:text-base leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="pl-2">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
