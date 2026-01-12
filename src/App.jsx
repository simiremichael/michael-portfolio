import React from "react";
import { motion } from "motion/react";
import { Github, Globe, Phone, Mail, ExternalLink, Code, Briefcase } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      name: "Residence Spotter",
      description:
        "A large-scale real estate marketing platform with web (Next.js) and mobile (React Native) apps, plus a custom Express backend.",
      tech: ["Next.js", "React Native", "Express", "MongoDB", "AWS"],
      link: "https://www.residencespotter.com",
      featured: true,
    },
    {
      name: "ServixHub",
      description:
        "A service marketplace platform built with React Router v7 (Remix-style architecture).",
      tech: ["React", "React Router v7", "Node.js"],
      link: "https://www.servixhub.com",
      featured: true,
    },
    {
      name: "BetaDriver",
      description:
        "A driver safety and education platform focused on road safety awareness in Nigeria.",
      tech: ["NuxtJS", "Vue"],
      link: "https://www.betadriver.com.ng",
    },
    {
      name: "Araxel",
      description:
        "An AI-enabled eCommerce platform built with Next.js.",
      tech: ["Next.js", "AI", "Node.js"],
      link: "https://www.araxel.ng",
    },
    {
      name: "Amour Zanzibar",
      description:
        "A tourism and hospitality website built with Svelte for performance and elegance.",
      tech: ["Svelte"],
      link: "https://www.amourzanzibar.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <Code size={48} className="text-white" />
            </motion.div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Michael Simire
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              Full Stack Developer · React & React Native Specialist
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              Crafting scalable web and mobile applications with modern technologies.
              Passionate about clean code, user experience, and innovative solutions.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 text-gray-300"
            >
              <ContactLink href="mailto:simiremichael@gmail.com" icon={Mail} text="simiremichael@gmail.com" />
              <ContactLink href="tel:+2348067253462" icon={Phone} text="+234 806 725 3462" />
              <ContactLink href="https://github.com/simiremichael" icon={Github} text="GitHub" external />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard 
              title="Frontend" 
              items={["React", "Next.js", "React Native", "Vue", "NuxtJS", "Svelte", "Tailwind"]} 
              icon={"🎨"}
            />
            <SkillCard 
              title="Backend" 
              items={["Node.js", "Express", "NestJS", "MongoDB", "MySQL"]} 
              icon={"⚙️"}
            />
            <SkillCard 
              title="DevOps & Tools" 
              items={["AWS", "Docker", "Kubernetes", "Jest", "Webpack"]} 
              icon={"🚀"}
            />
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} featured />
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-300 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <Timeline
            items={[
              {
                role: "Full Stack Developer",
                company: "Residence Spotter",
                period: "2022 – Present",
                desc: "Leading development of web and mobile apps, backend architecture, and deployments.",
              },
              {
                role: "React Native Developer",
                company: "Kritek (Remote)",
                period: "2022",
                desc: "Built and maintained a taxi-hailing mobile application.",
              },
              {
                role: "Frontend / Full Stack Developer",
                company: "Xelton Technologies",
                period: "2017 – 2022",
                desc: "Progressed from junior to full stack developer delivering multiple client projects.",
              },
            ]}
          />
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-gray-700/50 py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Michael Simire. Crafted with React & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}

function ContactLink({ href, icon: Icon, text, external }) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
    >
      <Icon size={18} />
      <span className="text-sm">{text}</span>
    </motion.a>
  );
}

function SkillCard({ title, items, icon }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index, featured }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: featured ? 1.02 : 1.05 }}
      className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
        featured ? 'lg:p-8' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className={`font-bold text-white group-hover:text-blue-300 transition-colors ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {project.name}
        </h3>
        <motion.div
          whileHover={{ rotate: 45, scale: 1.1 }}
          className="text-gray-400 group-hover:text-blue-400 transition-colors"
        >
          <ExternalLink size={featured ? 24 : 20} />
        </motion.div>
      </div>
      
      <p className={`text-gray-300 mb-4 leading-relaxed ${
        featured ? 'text-base' : 'text-sm'
      }`}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-2 py-1 rounded-full text-purple-200"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
      >
        <Globe size={16} />
        <span>View Project</span>
      </a>
    </motion.div>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Briefcase size={24} className="text-white" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex-1 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
              <p className="text-blue-300 font-medium mb-2">{item.company} · {item.period}</p>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
