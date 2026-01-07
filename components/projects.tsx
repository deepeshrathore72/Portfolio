"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, GitFork, Star, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"

const featuredProjects = [
  {
    title: "XpressLine",
    category: "Parcel Delivery Platform",
    description:
      "Full-stack parcel delivery platform with real-time tracking, secure authentication, and integrated online payments. Built to handle complex delivery workflows with a focus on user experience.",
    techStack: ["React.js", "Node.js", "Redux", "MongoDB", "Mapbox", "Stripe", "Twilio"],
    github: "https://github.com/deepeshrathore72/xpressline",
    demo: "#",
    period: "Oct 2024 – Dec 2024",
    image: "/parcel-delivery-app-with-map-tracking-interface.png",
    highlights: [
      "Real-time parcel tracking with Mapbox integration",
      "Secure payment processing via Stripe",
      "15+ RESTful APIs with comprehensive documentation",
      "SMS notifications through Twilio",
    ],
  },
  {
    title: "Wanderlust",
    category: "Travel Assistance Platform",
    description:
      "A comprehensive travel platform enabling users to discover, compare, and book hotels and rental properties through an intuitive interface with secure property management.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Bootstrap", "JavaScript"],
    github: "https://github.com/deepeshrathore72/AirBnb-Clone",
    demo: "https://airbnb-clone-vql5.onrender.com/listings",
    period: "Jul 2024 – Sep 2024",
    image: "/travel-hotel-booking-platform-with-property-listin.png",
    highlights: [
      "Secure property management with owner-only access",
      "30% improvement in data security",
      "25% increase in user engagement",
      "Intuitive search and filtering system",
    ],
  },
]

const smallPerks = [
  {
    title: "FitCoach AI",
    description: "AI-powered fitness assistant generating personalized workout and diet plans with voice guidance and image visualization using Groq AI and ElevenLabs.",
    techStack: ["Next.js", "MongoDB"],
    stars: 12,
    forks: 3,
    github: "https://github.com/deepeshrathore72/Ai-Fitness-App",
    demo: "https://ai-fitness-app-theta.vercel.app/",
  },
  {
    title: "Sales Management",
    description: "Retail sales management dashboard with real-time analytics, advanced search, multi-select filters, and server-side pagination backed by MongoDB Atlas.",
    techStack: ["Next.js", "MongoDB"],
    stars: 8,
    forks: 2,
    github: "https://github.com/deepeshrathore72/sales-management-system",
    demo: "https://sales-management-system-pi.vercel.app/",
  },
  {
    title: "AI Chat App",
    description: "Full-stack AI chat application with real-time streaming responses, GitHub OAuth authentication, and persistent storage using PostgreSQL and Groq API.",
    techStack: ["Next.js", "PostgreSQL"],
    stars: 5,
    forks: 1,
    github: "https://github.com/deepeshrathore72/ai-chat-app",
    demo: "https://ai-chat-app-vj25.vercel.app/",
  },
  {
    title: "Polling App",
    description: "Real-time polling application with live vote updates using WebSocket. Create polls, vote, and see results update instantly with Socket.io integration.",
    techStack: ["React", "Node.js"],
    stars: 15,
    forks: 4,
    github: "https://github.com/deepeshrathore72/Assessment-polling-app",
    demo: "https://assessment-polling-app.vercel.app/",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="space-y-2 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Projects</h2>
            <p className="text-muted-foreground text-lg italic max-w-xl">
              A collection of projects I've built, from full-stack applications to experimental side projects.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-12 bg-linear-to-r from-accent to-transparent" />
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">Featured Projects</h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative rounded-2xl border border-accent/20 bg-linear-to-b from-accent/5 via-background to-background overflow-hidden h-full flex flex-col shadow-lg shadow-accent/5 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/40 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Project Image - Enhanced with overlay */}
                <div className="relative overflow-hidden">
                  <div className="p-4 pb-0">
                    <div className="relative rounded-xl overflow-hidden border border-border/50">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-1 relative z-10">
                  {/* Category and Links */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-accent text-sm font-semibold tracking-wide uppercase">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl border border-border bg-background/80 backdrop-blur-sm hover:bg-muted hover:border-muted-foreground/30 transition-all duration-300"
                      >
                        <Github className="h-4 w-4 text-foreground" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl bg-accent hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/30"
                      >
                        <ExternalLink className="h-4 w-4 text-accent-foreground" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title and Period - Enhanced */}
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-5 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {project.period}
                  </p>

                  {/* Description - Enhanced */}
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                  {/* Key Highlights - Enhanced */}
                  <div className="mb-6">
                    <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Key Highlights</p>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="h-2 w-2 rounded-full bg-accent mt-1.5 shrink-0 shadow-sm shadow-accent/50" />
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack - Enhanced with better badges */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border/30">
                    {project.techStack.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs bg-muted/30 border-border/50 text-foreground hover:bg-accent/10 hover:border-accent/30 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-linear-to-r from-muted-foreground/50 to-transparent" />
            <h3 className="text-xl font-semibold text-foreground">Small Perks</h3>
            <span className="text-muted-foreground text-sm italic">Minor repos & experiments</span>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {smallPerks.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.35 + index * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-xl border border-border/50 bg-linear-to-b from-card to-card/50 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-400 h-full flex flex-col"
              >
                {/* Header with Icons */}
                <div className="flex items-start justify-between mb-4">
                  {/* <div className="p-2.5 w-fit rounded-lg bg-muted/50 border border-border/50 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
                  </div> */}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg border border-border bg-background/80 backdrop-blur-sm hover:bg-muted hover:border-muted-foreground/30 transition-all duration-300"
                    >
                      <Github className="h-3.5 w-3.5 text-foreground" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-accent hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/30"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-accent-foreground" />
                    </motion.a>
                  </div>
                </div>

                {/* Title - Enhanced */}
                <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">{project.description}</p>

                {/* Footer: Tech tags and stats - Enhanced */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                  <div className="flex gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-0.5 bg-muted/50 hover:bg-accent/10 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 group-hover:text-accent transition-colors">
                      <Star className="h-3.5 w-3.5" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-accent transition-colors">
                      <GitFork className="h-3.5 w-3.5" />
                      {project.forks}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}