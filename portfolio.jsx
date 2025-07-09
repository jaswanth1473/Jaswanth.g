import React, { useState, useEffect } from 'react';

// Main Portfolio Component
export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// Header Component with updated "Portfolio" title and Resume link
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/assets/resume.pdf" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Portfolio
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{item.name}</a>
          ))}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <a href="#contact">Get in Touch</a>
          </button>
        </nav>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div className="fixed right-0 top-0 w-64 h-full bg-white p-4" onClick={e => e.stopPropagation()}>
              <div className="flex justify-end">
                <button onClick={() => setMobileMenuOpen(false)}>✕</button>
              </div>
              <nav className="mt-8 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600">{item.name}</a>
                ))}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
                  <a href="#contact">Get in Touch</a>
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Other sections (simplified for brevity)
function HeroSection() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm Jaswanth</span>
              <span className="text-blue-600">Data Analyst</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I transform complex data into actionable insights that drive business decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-blue-600 text-white px-4 py-2 rounded-md">View My Work</a>
              <a href="#contact" className="bg-gray-100 text-gray-900 px-4 py-2 rounded-md">Contact Me</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/assets/profile.jpg" alt="Jaswanth G" className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  // About section implementation...
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
        </div>
        {/* About content */}
      </div>
    </section>
  );
}

// Experience section with updated bullet points
function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 pb-2 rounded-t-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <h3 className="text-xl font-semibold text-blue-800">Junior Data Analyst</h3>
                <div className="flex items-center space-x-2 mt-2 md:mt-0">
                  <span className="text-sm font-medium text-gray-600">True Infineworx Pvt Ltd</span>
                  <span className="text-xs bg-blue-100 text-blue-800 py-1 px-2 rounded-full">Mar 2024 - May 2025</span>
                </div>
              </div>
            </div>
            <div className="p-6 pt-6">
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Performed data cleaning, transformation, and analysis using Python and SQL</li>
                <li>Created interactive dashboards and reports using MS Power BI and Excel</li>
                <li>Collaborated with cross-functional teams to identify data-driven solutions</li>
                <li>Automated reporting processes to improve efficiency and accuracy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills section with Java added
function SkillsSection() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "Java"] // Java added
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "BI & Visualization",
      items: ["MS Power BI", "MS Excel"]
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Frameworks",
      items: ["Bootstrap", "Django", "Node.JS", "Angular.JS"]
    }
  ];
  
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-6 pb-2">
                <h3 className="text-lg font-semibold text-blue-700">{skillGroup.category}</h3>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Additional skills */}
      </div>
    </section>
  );
}

// Projects section with updated projects
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Customer Segmentation Dashboard",
      description: "Built an interactive dashboard that identifies distinct customer segments based on purchasing behavior, helping the marketing team target campaigns more effectively.",
      skills: ["Python", "Tableau", "SQL", "Data Cleaning", "Excel"],
    },
    {
      id: 2,
      title: "Healthcare Data Analytics",
      description: "Statistical analysis of patient data to improve treatment outcomes and identify key health indicators using advanced analytics.",
      skills: ["Python", "Statistical Analysis", "Excel", "Data Visualization"],
    },
    {
      id: 3,
      title: "Sales Performance Analytics",
      description: "Developed automated reports tracking key sales metrics across regions, enabling management to identify underperforming areas and implement targeted improvements.",
      skills: ["Power BI", "SQL", "Excel", "Data Modeling"],
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  // Contact section implementation...
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-2"></div>
        </div>
        {/* Contact content */}
      </div>
    </section>
  );
}

// Footer with updated GitHub link
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">Jaswanth G</h2>
            <p className="text-gray-400">Data Analyst</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/jaswanth-data" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/jaswanth03/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:jaswanthgondhi7@gmail.com" 
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} Jaswanth G. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}