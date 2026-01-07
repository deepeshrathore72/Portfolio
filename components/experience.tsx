"use client"

import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"

const experienceData = {
  title: "Software Engineer Intern",
  company: "Druma Technologies",
  location: "Remote",
  period: "January 2025 – March 2025",
  description:
    "Developed and deployed production-ready APIs for image and object recognition workflows, focusing on reliability, security, and performance.",
  stats: [
    {
      value: "5+",
      label: "RESTful APIs",
      description: "Built using Node.js and Express for image/object recognition...",
    },
    {
      value: "1K+",
      label: "Daily Requests",
      description: "Authenticated requests handled with structured JSON responses",
    },
    {
      value: "10+",
      label: "Concurrent Clients",
      description: "Supported via Redis-based rate-limiting system",
    },
    {
      value: "30%",
      label: "Error Reduction",
      description: "Achieved by resolving 20+ edge cases in API handling",
    },
  ],
  contributions: [
    "Designed token-based API usage tracking and rate-limiting system using Redis",
    "Improved backend stability by identifying and resolving edge cases including invalid payloads and race conditions",
    "Coordinated with a team of 6+ developers and submitted detailed post-internship reports",
  ],
}

const educationData = [
  {
    degree: "B.Tech - Information Technology",
    institution: "Indian Institute of Information Technology, Una",
    score: "7.77 CGPA",
    period: "2022 - Present",
  },
  {
    degree: "Senior Secondary",
    institution: "CBSE Board",
    score: "90.2%",
    period: "2020 - 2021",
  },
  {
    degree: "Secondary",
    institution: "CBSE Board",
    score: "93.8%",
    period: "2018 - 2019",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">Resume</h2>
              <p className="text-muted-foreground">My professional journey and qualifications</p>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              <a href="https://drive.google.com/file/d/1P5e7T-GU6VX57F0F1Q0EF-CPkTnXkmq_/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                See Resume
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Experience Card */}
        <AnimatedSection delay={0.1}>
          <div className="relative rounded-2xl bg-card border border-border overflow-hidden mb-8">
            {/* Green gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-accent via-accent/50 to-transparent" />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Experience</h3>
              </div>

              {/* Job Title Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-foreground">{experienceData.title}</h4>
                  <p className="text-accent font-medium">{experienceData.company}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {experienceData.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {experienceData.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8">{experienceData.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {experienceData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-border bg-secondary/30 hover:border-accent/30 transition-colors"
                  >
                    <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-foreground mb-1">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>

              {/* Key Contributions */}
              <div>
                <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Key Contributions
                </h5>
                <ul className="space-y-3">
                  {experienceData.contributions.map((contribution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span className="text-muted-foreground">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Card */}
        <AnimatedSection delay={0.2}>
          <div className="relative rounded-2xl bg-card border border-border overflow-hidden">
            {/* Green gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-accent via-accent/50 to-transparent" />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Education</h3>
              </div>

              {/* Education List */}
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-6 border-b border-border last:border-0 last:pb-0"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-accent">{edu.score}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
