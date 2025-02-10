import React from 'react';
import { Users, Presentation, BookOpen, Award, UserPlus, Sparkles, School } from 'lucide-react';
import SectionBackground from './SectionBackground';
import { backgrounds } from '../utils/backgroundData';

const Leadership = () => {
  const activities = [
    {
      role: "Vice-President",
      organization: "Academic Advancement and Research Association (AARA)",
      period: "Fall 2023–Present",
      description: "Collaborated with fellow executive members to organize workshops and seminars aimed at enhancing academic skills and promoting research opportunities among students. Spearheaded initiatives to connect students with faculty for research mentorship, increasing participation by 30%.",
      icon: Users,
      media: {
        type: 'video',
        url: 'https://cdn.coverr.co/videos/coverr-medical-research-team-meeting-5783/1080p.mp4'
      }
    },
    {
      role: "Oral Presentations Exhibits Chair",
      organization: "Student Research Conference, SEMO",
      period: "Spring 2024",
      description: "Oversaw the organization and coordination of oral presentation sessions at the conference, ensuring smooth scheduling and providing technical support. Mentored student presenters by offering guidance on effective presentation techniques.",
      icon: Presentation,
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&h=400'
      }
    },
    {
      role: "Recorder, Reporter, and Master of Ceremonies",
      organization: "Alpha Chi Sigma Professional Chemistry Fraternity",
      period: "2023–2024",
      description: "Managed multiple roles including documenting meeting minutes, publicizing events, and acting as Master of Ceremonies. Increased chapter visibility and maintained organized records of fraternity activities.",
      icon: BookOpen,
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&h=400'
      }
    },
    {
      role: "Judge",
      organization: "Southeast Missouri Regional Science Fair",
      period: "Spring 2023, Spring 2024",
      description: "Evaluated and provided constructive feedback to participants' projects, ranging from elementary to high school levels, in diverse STEM fields. Encouraged young scientists by recognizing their achievements.",
      icon: Award,
      media: {
        type: 'video',
        url: 'https://cdn.coverr.co/videos/coverr-students-doing-experiment-in-chemistry-class-5546/1080p.mp4'
      }
    },
    {
      role: "First Year Leadership Program (FLYP) Participant",
      organization: "SEMO Leadership Development",
      period: "Fall 2022",
      description: "Selected for competitive leadership development program focused on teamwork, communication, and project management. Participated in hands-on workshops and group activities.",
      icon: UserPlus,
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&h=400'
      }
    },
    {
      role: "Emerging Leaders Program Graduate",
      organization: "SEMO Leadership Development",
      period: "Spring 2023",
      description: "Completed semester-long program preparing students for leadership roles. Engaged in team-building exercises, leadership theory discussions, and community service projects.",
      icon: Sparkles,
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&h=400'
      }
    }
  ];

  return (
    <SectionBackground {...backgrounds.leadership}>
      <section id="leadership" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <School className="h-8 w-8 text-[#00ffcc] mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Leadership & Involvement</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  {activity.media.type === 'video' ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={activity.media.url} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={activity.media.url}
                      alt={activity.role}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <activity.icon className="h-6 w-6 mb-2" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.role}</h3>
                  <p className="text-[#00ffcc] font-medium mb-2">{activity.organization}</p>
                  <p className="text-gray-500 text-sm mb-3">{activity.period}</p>
                  <p className="text-gray-700 text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};

export default Leadership;