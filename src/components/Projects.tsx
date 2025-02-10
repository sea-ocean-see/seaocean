import React from 'react';
import { Microscope, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Boron Nitride Nanotube - Multifunctional Nanocarriers for Biomedical Application",
      organization: "National Science Foundation",
      period: "August 2023-May 2024",
      description: "Explored the synthesis and unique properties of Boron Nitride Nanotubes, analyzing their impact on PC-12 cells to uncover potential biomedical applications.",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Nanoscale Photo-Magnetic Energy Transfer Modulation",
      period: "Fall 2024-Present",
      description: "Exposing HUVEC cells to 630nm LED light, along with nanoparticles, drugs, and growth factors, to create an optimized environment for regenerating and restoring homeostasis after oxidative stress.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=500&h=300",
      link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2301688&HistoricalAwards=false"
    },
    {
      title: "Iron and Gold NP Decorated MWBNNT Synthesis and Characterization",
      period: "Fall 2024",
      description: "Synthesized MW-BNNTs and observed them under a scanning electron microscope. Characterized them for UV-Vis, SEM, TEM, magnetometry, magnetic heating, optical heating, and photo-magnetic heating.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "BNNT, MNP Biocompatibility for HUVECs Cells",
      period: "May 2024-August 2024",
      description: "Evaluated HUVEC cell response to various nanoparticle concentrations through live cell and fluorescence imaging to optimize conditions for regenerative applications",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Modular Enhanced Therapeutic Delivery System",
      organization: "Department of Chemistry and Physics, Biochemistry",
      period: "January 2022-Present",
      description: "Focuses on designing a modular cell delivery system (MCDS) to enhance cancer treatment efficacy by selectively delivering high concentrations of therapeutics to cancer cells while minimizing off-target toxicity.",
      image: "https://images.unsplash.com/photo-1631556097152-c39479bbff93?auto=format&fit=crop&w=500&h=300"
    },
    {
      title: "Senior Honors Project",
      period: "November 2024-present",
      description: "Creating bioengineered scaffolds that enhance endothelial cell regeneration. These scaffolds would act like supportive frameworks for cell growth while acting as extracellular matrices, delivering key biomolecules for the repair of tissues and their vascularization.",
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=500&h=300"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Microscope className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Research Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">{project.period}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[#00ffcc] hover:text-[#00ffcc]/80 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                {project.organization && (
                  <p className="text-[#00ffcc] font-medium mb-2">{project.organization}</p>
                )}
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;