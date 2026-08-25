import { useState, useEffect, useRef } from 'react';
import { Mail, ExternalLink, Github, Linkedin } from 'lucide-react';
import portrait from "../images/portrait.png";

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
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = sectionsRef.current[section];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'projects' ? 'contact' : section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "ChefAI - AI-Powered Recipe Recommendation Chatbot",
      date: "March 2025",
      description: "Built a full-stack AI-driven web application that generates personalized recipes based on user-selected ingredients and preferences.",
      tech: ["React", "Node.js", "Express", "OpenAI API", "JavaScript", "CSS"],
      impact: [
        <>Delivered an <strong>end-to-end AI-powered application</strong> in a hackathon environment.</>,
        <>Improved usability through <strong>interactive recipe cards</strong> and dynamic filtering.</>,
        <>Demonstrated practical integration of <strong>LLMs</strong> into a consumer-facing web app.</>
      ],
      link: "https://github.com/snehamrzn/chef-ai"
      },
    {
      title: "Astron - B2B Construction Project Management Platform",
      date: "March 2024",
      description: "Led development of a web-based platform to centralize planning, tracking, and collaboration for construction and renovation projects.",
      tech: ["React", "Node.js", "Express", "REST API", "Figma"],
      impact: [
        <><strong>Finalist</strong> at the Housing Crisis Hackathon for an innovative B2B solution.</>,
        <>Improved visibility into project <strong> progress, materials and workforce planning</strong></>,
        <>Demonstrated <strong>team leadership</strong> and end-to-end product delivery</>
      ],
      link: "https://github.com/ssaha001/astron-ui"
    }
  ];

  const skills = {
    "Languages": ["JavaScript", "Python", "C / C++", "SQL", "HTML / CSS"],
    "Frameworks": ["React", "Next.js", "Node.js", "Express", "REST APIs"],
    "Databases and cloud": ["MySQL", "MongoDB/Supabase", "AWS EC2", "ECS", "DynamoDB", "S3"],
    "DevOps and tools": ["Git", "Docker", "Jest", "Linux", "CI/CD", "GitHub Actions", "QA"]
  };

  return (
    <div
      className="relative min-h-screen bg-[#F8F5F0] text-[#2C2416]"
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#F8F5F0]/95 backdrop-blur-sm border-b border-[#D4CFC8]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 py-4 flex flex-wrap justify-between items-center gap-x-4 gap-y-2">
          <button
            onClick={() => scrollToSection('home')}
            className="text-base tracking-widest uppercase font-bold text-[#2C2416]"
          >
            Eleana Mita
          </button>
          <div className="flex flex-wrap gap-x-4 gap-y-1 sm:gap-x-7">
            {['home', 'about', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-xs uppercase tracking-widest transition-colors ${
                  activeSection === section
                    ? 'text-[#D4AF37]'
                    : 'text-[#2C2416] hover:text-[#D4AF37]'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={(el) => { sectionsRef.current['home'] = el; }}
        className="pt-28 sm:pt-32 pb-16 px-5 sm:px-10"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_240px] gap-10 items-start">
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <p className="text-xs uppercase tracking-widest text-[#9C9080]">Software developer student</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#2C2416] leading-tight">
              Eleana<br />
              <span className="text-[#B8966E]">Mita</span>
            </h1>
            <p className="text-sm text-[#6B5C4A] leading-relaxed max-w-md">
              Passionate about turning ideas into working software and tackling tricky problems.
              Currently on co-op at SSP POS. In my downtime I am usually looking for another puzzle to start,
              trying out a new baking recipe, or exploring local patisseries.
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2 bg-[#B8966E] text-[#F8F5F0] text-xs tracking-wide rounded-sm hover:bg-[#A07D58] transition-colors"
              >
                View my work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 border border-[#B8966E] text-[#2C2416] text-xs tracking-wide rounded-sm hover:bg-[#F0E8DC] transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="mt-2 order-1 md:order-2">
            <div className="w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] rounded overflow-hidden border border-[#B8966E] mx-auto md:mx-0">
              <img src={portrait} alt="Eleana Mita" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        ref={(el) => { sectionsRef.current['about'] = el; }}
        className="py-14 px-5 sm:px-10"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-6">About me</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-normal text-[#2C2416] leading-snug mb-4">
                Full-stack developer with a focus on{' '}
                <span className="text-[#B8966E]">building things right.</span>
              </h2>
              <p className="text-sm text-[#5C4E3E] leading-relaxed">
                <br/>
                 During my co-op at SSP POS
                I contribute to <strong className="text-[#2C2416] font-semibold">Next.js front-end development</strong> and standardize{' '}
                <strong className="text-[#2C2416] font-semibold">CI/CD pipelines with GitHub Actions</strong> across the company's full
                product suite.
                <br/>
                <br/>
                I've also <strong className="text-[#2C2416] font-semibold">led a team of 7 developers</strong> as IT
                Coordinator for the Seneca Hackathon and shipped a{' '}
                <strong className="text-[#2C2416] font-semibold">registration management portal & a marketing website end-to-end</strong> under tight time constraints.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-1">Education</p>
                <p className="text-sm text-[#2C2416]">Honours Bachelor of Technology - Software Development</p>
                <p className="text-xs text-[#B8966E] mt-1">Expected graduation: Aug 2027</p>
                <p className="text-xs text-[#9C9080] leading-relaxed">
                  Seneca Polytechnic, Toronto, ON<br />
                </p>
              </div>
              <div className="border-t border-[#D4CFC8]" />
              <div>
                <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-1">Experience</p>
                <p className="text-sm text-[#2C2416]">Full-Stack and DevOps Co-op @ SSP POS</p>
                <p className="text-xs text-[#B8966E] mt-1 mb-2">May 2026 - Aug 2026</p>
                <div className="flex flex-col gap-1">
                  {[
                    "Contributed to Next.js features and bug fixes across 5+ active web applications.",
                    "Built an automated release pipeline using GitHub Actions that publishes versioned MSI installers to AWS S3 on every new release.",
                    "Published a new app to the Google Play Store, handling store setup, asset configuration, and content policy compliance."
                  ].map((b, i) => (
                    <p key={i} className="text-xs text-[#5C4E3E] leading-relaxed pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-[#B8966E]">
                      {b}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* VOLUNTEERING */}
          <div className="mt-10 border-t border-[#D4CFC8] pt-8">
            <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-6">Volunteering</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                {
                  role: "Director of IT",
                  org: "Seneca Hackathon 2026 - Volunteer",
                  date: "March - April 2026",
                  bullets: [
                    "Leading cross-functional collaboration between IT, organizers, and faculty to align technical delivery with event goals.",
                    "Communicating progress daily and ensuring platform decisions reflect all departments."
                  ]
                },
                {
                  role: "IT Coordinator",
                  org: "Seneca Hackathon 2026 - Volunteer",
                  date: "February - March 2026",
                  bullets: [
                    "Coordinated 7 developers across database, backend, and frontend streams.",
                    "Reviewed implementation work and resolved blockers across all technical workstreams."
                  ]
                }
              ].map((v, i) => (
                <div key={i}>
                  <p className="text-sm text-[#2C2416]">{v.role}</p>
                  <p className="text-xs text-[#B8966E] mt-0.5">{v.org}</p>
                  <p className="text-xs text-[#9C9080] mb-2">{v.date}</p>
                  {v.bullets.map((b, j) => (
                    <p key={j} className="text-xs text-[#5C4E3E] leading-relaxed pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-[#B8966E] mb-1">
                      {b}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        ref={(el) => { sectionsRef.current['skills'] = el; }}
        className="py-14 px-5 sm:px-10"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-6">Skills and technologies</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat}>
                <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-3">{cat}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-[#2C2416] border border-[#B8966E] px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        ref={(el) => { sectionsRef.current['projects'] = el; }}
        className="py-14 px-5 sm:px-10"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#B8966E] mb-6">Selected projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white border border-[#D4CFC8] rounded p-6 flex flex-col gap-3">
                <p className="text-xs text-[#B8966E] tracking-wide">{project.date}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#2C2416] border-b border-[#D4CFC8] pb-1 hover:text-[#B8966E] hover:border-[#B8966E] transition-colors flex items-center gap-1"
                >
                  {project.title}
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
                <p className="text-xs text-[#7A6C5E] leading-relaxed">{project.description}</p>
                <div className="flex flex-col gap-1">
                  {project.impact.map((item, i) => (
                    <p key={i} className="text-xs text-[#5C4E3E] leading-relaxed pl-3 relative before:content-['-'] before:absolute before:left-0 before:text-[#B8966E]">
                      {item}
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-[#2C2416] border border-[#B8966E] px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        ref={(el) => { sectionsRef.current['contact'] = el; }}
        className="bg-[#2C2416] py-14 px-5 sm:px-10"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-normal text-[#F8F5F0] mb-3">Let's connect</h2>
            <p className="text-xs text-[#8C7A5E] leading-relaxed">
              Currently looking for software developer co-ops for Winter 2027. Always happy to connect over projects, ideas, or tech.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:mita.eleana@gmail.com" className="flex items-center gap-3 p-3 border border-[#4A3C2A] rounded-sm text-xs text-[#C4A882] hover:border-[#B8966E] transition-colors">
              <Mail className="w-4 h-4 text-[#B8966E]" />
              mita.eleana@gmail.com
            </a>
            <a href="https://github.com/3leana" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 border border-[#4A3C2A] rounded-sm text-xs text-[#C4A882] hover:border-[#B8966E] transition-colors">
              <Github className="w-4 h-4 text-[#B8966E]" />
              github.com/3leana
            </a>
            <a href="https://linkedin.com/in/eleana-mita" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 border border-[#4A3C2A] rounded-sm text-xs text-[#C4A882] hover:border-[#B8966E] transition-colors">
              <Linkedin className="w-4 h-4 text-[#B8966E]" />
              linkedin.com/in/eleana-mita
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#3A2E1E] bg-[#2C2416] py-6 px-10">
        <div className="max-w-5xl mx-auto flex justify-between items-center text-xs text-[#6B5C4A]">
          <p>2026 Eleana Mita. Built with React and TypeScript.</p>
          <a href="https://github.com/3leana/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8966E] transition-colors">
            View source code
          </a>
        </div>
      </footer>
    </div>
  );
}
