
import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const languageSkills = [
    {
      language: "English",
      proficiency: "Professional Working Proficiency",
      skills: {
        reading: 90,
        writing: 85,
        speaking: 85,
        listening: 90
      }
    }
  ];
  
  const skills = [
    "WordPress WooCommerce",
    "Shopify",
    "Magento",
    "Front-end Development",
    "Back-end Development",
    "SEO",
    "API Integration",
    "Marketing Communications",
    "Social Media Marketing",
    "Advertising",
    "Marketing Strategy",
    "Online Advertising",
    "Digital Marketing",
    "Public Relations",
    "Video Production and Editing",
    "Animation",
    "Business-to-Business (B2B) Marketing"
  ];

  const education = [
    {
      degree: "Master's in Business/Managerial Economics",
      institution: "University of Belgrade",
      year: "2010"
    }
  ];

  const certifications = [
    {
      name: "Inbound Certified",
      issuer: "HubSpot Academy",
      duration: "April 2019 - April 2021"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Skills & Qualifications</h2>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="skill-card bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 transition-all duration-500 opacity-0 transform translate-y-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Language Skills</h3>
            {languageSkills.map((lang, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-base sm:text-lg">{lang.language}</h4>
                  <span className="text-sm text-gray-600">{lang.proficiency}</span>
                </div>
                <div className="space-y-2">
                  {Object.entries(lang.skills).map(([skill, level]) => (
                    <div key={skill} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm capitalize">{skill}</span>
                        <span className="text-sm text-gray-600">{level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-full bg-blue-600 rounded-full" 
                          style={{ width: `${level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skill-card bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 transition-all duration-500 opacity-0 transform translate-y-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Technical & Marketing Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge text-xs sm:text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="skill-card bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 transition-all duration-500 opacity-0 transform translate-y-8" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-3 sm:mb-4">
                <h4 className="font-semibold text-base sm:text-lg">{edu.degree}</h4>
                <p className="text-gray-600 text-sm sm:text-base">{edu.institution}</p>
                <p className="text-gray-500 text-sm">Graduated: {edu.year}</p>
              </div>
            ))}
          </div>

          <div className="skill-card bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 transition-all duration-500 opacity-0 transform translate-y-8" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-3 sm:mb-4">
                <h4 className="font-semibold text-base sm:text-lg">{cert.name}</h4>
                <p className="text-gray-600 text-sm sm:text-base">Issued by {cert.issuer}</p>
                <p className="text-gray-500 text-sm">Duration: {cert.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
