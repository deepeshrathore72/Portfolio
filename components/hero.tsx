"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, FolderCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-accent font-medium tracking-wide uppercase text-sm"
            >
              Software Engineer
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              Hi, I'm Deepesh Rathore
            </h1>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A full-stack developer passionate about building scalable web applications. Currently pursuing B.Tech at
            IIIT Una, with hands-on experience in React, Node.js, and modern web technologies. I love turning complex
            problems into elegant, user-friendly solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="https://github.com/deepeshrathore72" target="_blank" rel="noopener noreferrer">
                View GitHub
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <a
              href="https://github.com/deepeshrathore72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/deepesh-rathore-801b5b256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://codolio.com/profile/deepeshrathore72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FolderCode className="h-5 w-5" />
              <span className="sr-only">Codolio</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
                  <code>{`const developer = {
  name: "Deepesh Rathore",
  role: "Full-Stack Developer",
  skills: ["React", "Node.js", "TypeScript"],
  passion: "Building great products",
  status: "Open to opportunities"
};`}</code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
