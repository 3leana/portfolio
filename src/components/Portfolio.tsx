import { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, ArrowRight, Code2, Github, Linkedin, } from 'lucide-react';
import portrait from "../images/portrait.png";

interface Project {
  title: string;
  date: string;
  description: string;
  tech: string[];
  impact: string[];
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      title: "Fragments — Distributed Microservices Platform",
      date: "Sept – Dec 2025",
      description:
        "Designed and deployed a distributed backend service for storing, retrieving, and transforming text and image fragments at scale.",
      tech: ["Node.js", "AWS ECS/EC2", "Express", "Docker", "DynamoDB", "S3", "JWT"],
      impact: [
        "Supported CRUD operations across 10+ MIME types for structured and unstructured data",
        "Enabled scalable storage using DynamoDB and S3 with clear separation of concerns",
        "Automated Jest tests (90%+ coverage) executed via GitHub Actions, with Dockerized deployment to a Linux server."
      ]
    },
    {
      title: "ChefAI — AI-Powered Recipe Recommendation Chatbot",
      date: "March 2025",
      description:
        "Built a full-stack AI-driven web application that generates personalized recipes based on user-selected ingredients and preferences.",
      tech: ["React", "Node.js", "Express", "OpenAI API", "JavaScript", "CSS"],
      impact: [
        "Delivered an end-to-end AI-powered application during a hackathon environment",
        "Improved usability through interactive recipe cards and dynamic filtering",
        "Demonstrated practical integration of LLMs into a consumer-facing web app"
      ]
    },
    {
      title: "Astron — B2B Construction Project Management Platform",
      date: "March 2024",
      description:
        "Led development of a web-based platform to centralize planning, tracking, and collaboration for construction and renovation projects.",
      tech: ["React", "Node.js", "Express", "REST API", "Figma"],
      impact: [
        "Finalist at the Housing Crisis Hackathon for an innovative B2B solution",
        "Improved visibility into project progress, materials, and workforce planning",
        "Demonstrated team leadership and end-to-end product delivery"
      ]
    }
  ];

  const skills = {
    languages: ["JavaScript/TypeScript", "Python", "C/C++", "SQL", "HTML/CSS"],
    frameworks: ["React", "Next.js", "Node.js", "Express", "REST APIs"],
    "databases & cloud": ["MySQL", "Oracle (SQL)" , "AWS", "EC2", "ECS", "Cognito" , "S3", "DynamoDB"],
    "devOps & tools": ["Git", "Docker", "Jest", "Linux", "CI/CD"]
  };

  return (
    <div className="relative min-h-screen bg-zinc-900 text-stone-100">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-zinc-900/80 backdrop-blur-md border-b border-emerald-700/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Eleana Mita
          </button>
          <div className="flex gap-8">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-base transition-colors relative ${
                  activeSection === section 
                    ? 'text-emerald-400' 
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section 
        ref={(el) => {sectionsRef.current['home'] = el}}
        className="relative min-h-screen flex items-center px-6 sm:px-8 pt-20"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight text-stone-50">
              Eleana Mita
              <br />
              <span className="text-stone-400 sm:text-5xl">Software Developer Student</span>
            </h1>
            <p className="text-2xl text-stone-300 mb-8 leading-relaxed max-w-2xl">
              I enjoy solving complex problems and building software that matters. My current interests include distributed systems, web development, and machine learning.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-zinc-900 font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                View my work
                <ArrowRight className="w-4 h-4 rotate-90" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border border-emerald-600/50 hover:border-emerald-500 hover:bg-emerald-950/30 rounded-lg transition-all text-stone-100"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.4)]" />

      <section 
        ref={(el) => {sectionsRef.current['about'] = el}}
        className="py-32 px-6 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-stone-50">About Me</h2>
          
          <div className="grid lg:grid-cols-[1fr,300px] gap-12 items-start">
            <div className="space-y-5 text-stone-300 leading-relaxed text-lg">
              <p>
                Based in Toronto, ON, I’m a Computer Science student with a strong foundation in algorithms, data structures, and software engineering.
              </p>
              <p>
                I enjoy breaking down complex problems into manageable systems 
                and building solutions that scale. I’m particularly interested in
                 backend development, real-time applications, and combining machine
                learning with traditional software systems.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="text-stone-200 font-medium">Honours Bachelor of Technology - Software Development</p>
                  <p className="text-stone-400 text-base">Seneca Polytechnic | Toronto ON </p>
                  <p className="text-stone-400 text-base">Expected Graduation: August 2027</p>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-[300px] lg:max-w-none">
              <div className="aspect-square rounded-2xl bg-zinc-800 border border-emerald-700/30 overflow-hidden shadow-[0_0_20px_rgba(52,211,153,0.15)]">
                <img 
                  src={portrait}
                  alt="Eleana Mita" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Skills & Technologies</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-stone-400 uppercase tracking-wider mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-zinc-800 border border-emerald-700/30 rounded-md text-sm text-stone-300 hover:border-emerald-600 hover:shadow-[0_0_10px_rgba(52,211,153,0.2)] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.4)]" />

      <section 
        ref={(el) => {sectionsRef.current['projects'] = el}}
        className="py-32 px-6 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-stone-50">Technical Projects</h2>
            <p className="text-stone-300 max-w-2xl">
              Here are some projects I've worked on. Some projects are course-based and cannot be publicly shared, but I’m happy to discuss the architecture and implementation details.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group border border-emerald-700/30 rounded-xl p-8 hover:border-emerald-600 hover:shadow-[0_0_25px_rgba(52,211,153,0.15)] transition-all duration-300 bg-zinc-800/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Code2 className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-2xl font-semibold text-stone-50">{project.title}</h3>
                  </div>
                  <span className="text-sm text-stone-400">{project.date}</span>
                </div>

                <p className="text-stone-300 mb-6 text-base leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-base font-semibold text-emerald-400 mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-base text-stone-300 leading-relaxed">
                        <span className="text-emerald-400 mt-1">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1.5 bg-zinc-900 border border-emerald-700/30 rounded text-sm text-stone-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent shadow-[0_0_8px_rgba(52,211,153,0.4)]" />

      <section 
        ref={(el) => {sectionsRef.current['contact'] = el}}
        className="py-32 px-6 sm:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6 text-stone-50">Let's Connect</h2>
            <p className="text-xl text-stone-300 mb-12 leading-relaxed">
              Currently looking for <strong>software engineering/developer internships</strong>. I’d love to discuss projects, opportunities, or tech in general!
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:mita.eleana@gmail.com"
                className="flex items-center gap-4 p-4 border border-emerald-700/30 rounded-lg hover:border-emerald-600 hover:bg-zinc-800/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.1)] transition-all group"
              >
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-stone-300 group-hover:text-stone-100">mita.eleana@gmail.com</span>
              </a>

              <a 
                href="https://github.com/3leana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-emerald-700/30 rounded-lg hover:border-emerald-600 hover:bg-zinc-800/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.1)] transition-all group"
              >
                <Github className="w-5 h-5 text-emerald-400" />
                <span className="text-stone-300 group-hover:text-stone-100">github.com/3leana</span>
                <ExternalLink className="w-4 h-4 ml-auto text-stone-500 group-hover:text-emerald-400" />
              </a>

              <a 
                href="https://linkedin.com/in/eleana-mita"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="flex items-center gap-4 p-4 border border-emerald-700/30 rounded-lg hover:border-emerald-600 hover:bg-zinc-800/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.1)] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-emerald-400" />
                <span className="text-stone-300 group-hover:text-stone-100">linkedin.com/in/eleana-mita</span>
                <ExternalLink className="w-4 h-4 ml-auto text-stone-500 group-hover:text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-700/30 py-8 px-6 sm:px-8 shadow-[0_-1px_0_0_rgba(52,211,153,0.1)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-400">
          <p>© 2025 Eleana Mita | Built with React & TypeScript.</p>
          <p>Designed & developed by me</p>
          <a
            href="https://github.com/3leana/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="hover:text-emerald-400 transition-colors">
            View source code
          </a>
        </div>
      </footer>
    </div>
  );
}