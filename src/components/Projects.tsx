
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Layout, LayoutGrid } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const projectList = [
  { title: "Klub Stolovi", url: "https://klub-stolovi.rs/" },
  { title: "Artemida Group", url: "https://artemida-group.com/" },
  { title: "Hoja Group", url: "https://hojagroup.net/en/home/" },
  { title: "Agro Advokat", url: "https://agroadvokat.rs/" },
  { title: "Marko Pantić", url: "https://markopantic.com/" },
  { title: "11550", url: "https://11550.rs/" },
  { title: "Petar Miodrag", url: "https://petarmiodrag2.xyz/" },
  { title: "MK Buchung", url: "https://mkbuchung.de/" },
  { title: "AppHub", url: "https://apphub.ae/" },
  { title: "ServPro", url: "https://serv-pro.netlify.app/" },
  { title: "Marcus Academy", url: "https://admirable-bublanina-92a82d.netlify.app/" },
  { title: "Code Voyage", url: "https://vocal-gingersnap-6907d0.netlify.app/" },
  { title: "Serenity Peak", url: "https://resplendent-gnome-6a22d4.netlify.app/" },
  { title: "Digital Services", url: "https://chipper-bienenstitch-f4210e.netlify.app/" },
  { title: "Gilani Motors Logos", url: "https://gilani-motors.netlify.app/" },
  { title: "Gilani Motors Brandbook", url: "https://gilanimotors-brandbook.netlify.app/" },
  { title: "Multilingual Platform", url: "https://tourmaline-cupcake-f2237c.netlify.app/?script=latin" }
];

const Projects = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, index * 100); // Slightly faster animation compared to skills
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, [viewType]); // Re-run when view type changes

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Portfolio <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 mx-auto max-w-2xl">
            A collection of websites and applications I've developed for clients across various industries.
          </p>
        </div>
        
        <div className="flex justify-end mb-6">
          <ToggleGroup type="single" value={viewType} onValueChange={(value) => value && setViewType(value as "grid" | "list")}>
            <ToggleGroupItem value="grid" aria-label="Grid view" className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700">
              <LayoutGrid className="h-4 w-4 mr-1" /> Grid
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view" className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700">
              <Layout className="h-4 w-4 mr-1" /> List
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        
        {viewType === "grid" ? (
          <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {projectList.map((project, index) => (
              <Card 
                key={index} 
                className="project-card overflow-hidden transition-all duration-500 hover:shadow-xl border border-blue-100/50 hover:border-blue-300 opacity-0 transform translate-y-8 group hover:-translate-y-1 bg-white/50 hover:bg-white"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-5">
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-700 mb-1 truncate group-hover:text-blue-800 transition-colors">{project.title}</h4>
                      <div className="w-16 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.url, '_blank')}
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow group-hover:translate-y-0"
                    >
                      <span>View Site</span>
                      <ExternalLink size={14} className="group-hover:animate-bounce" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div ref={projectsRef} className="space-y-3">
            {projectList.map((project, index) => (
              <Card 
                key={index} 
                className="project-card overflow-hidden transition-all duration-500 hover:shadow-xl border border-blue-100/50 hover:border-blue-300 opacity-0 transform translate-y-8 group hover:-translate-y-1 bg-white/50 hover:bg-white"
                style={{ transitionDelay: `${index * 0.03}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-blue-700 group-hover:text-blue-800 transition-colors truncate">{project.title}</h4>
                      <div className="w-16 h-0.5 bg-blue-600 group-hover:w-32 transition-all duration-300 rounded-full mt-2"></div>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.url, '_blank')}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow"
                    >
                      <span>View Site</span>
                      <ExternalLink size={14} className="group-hover:animate-bounce" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600 italic mb-4">
            These are just a selection of my completed projects. Contact me to discuss your specific requirements.
          </p>
          <Button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
