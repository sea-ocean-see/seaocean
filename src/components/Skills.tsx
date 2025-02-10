import React from 'react';
import { Wrench, TestTube, Microscope, Code, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Laboratory Techniques",
      icon: TestTube,
      skills: [
        "Primary Cell Culture: HUVEC",
        "Mammalian Cell Culture: PC-12",
        "Aseptic Conditions Maintenance",
        "Fluorescence/Brightfield Microscopy",
        "Spectroscopy: UV-vis, NMR, and IR",
        "Flow Cytometry",
        "SDS-Page",
        "DNA/RNA Extraction"
      ]
    },
    {
      category: "Analytical Methods",
      icon: Microscope,
      skills: [
        "Nanostructure Design: MNP, BNNT, Polymeric NP",
        "Optical/Magnetic Characterization of Nanostructures",
        "Chromatography",
        "UV-Vis Spectroscopy",
        "Live Cell Imaging",
        "Confocal Microscopy"
      ]
    },
    {
      category: "Programming",
      icon: Code,
      skills: [
        "Python",
        "Microsoft Components",
        "Data Analysis",
        "Statistical Analysis",
        "Data Visualization"
      ]
    },
    {
      category: "Research Tools",
      icon: Database,
      skills: [
        "GraphPad Prism",
        "Origin Pro",
        "EndNote",
        "ImageJ Analysis",
        "Experimental Design",
        "Data Management",
        "Scientific Writing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Wrench className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <category.icon className="h-6 w-6 text-[#00ffcc] mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-[#00ffcc]/10 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;