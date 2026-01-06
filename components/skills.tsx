"use client"

import { AnimatedSection } from "@/components/animated-section"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "TailwindCSS", "Bootstrap", "Redux"],
  },
  {
    title: "Databases & Tools",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Docker", "Postman", "VS Code"],
  },
  {
    title: "Core CS",
    skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks", "OOP"],
  },
]

const allSkills = skillCategories.flatMap((cat) => cat.skills)

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="space-y-2 mb-16">
            <p className="text-accent font-medium tracking-wide uppercase text-sm">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">Technical Skills</h2>
          </div>
        </AnimatedSection>

        {/* Marquee */}
        <AnimatedSection delay={0.1}>
          <div className="relative overflow-hidden py-8 mb-16">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex animate-marquee">
              {[...allSkills, ...allSkills].map((skill, index) => (
                <span
                  key={index}
                  className="mx-4 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Categorized Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 0.1}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Achievements */}
        <AnimatedSection delay={0.4}>
          <div className="mt-16 bg-card border border-border rounded-xl p-8">
            <h3 className="text-lg font-semibold text-card-foreground mb-6">Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "800+", label: "DSA Problems Solved" },
                { value: "1695", label: "CodeChef Rating (3★)" },
                { value: "100%", label: "MMVY Scholarship" },
                { value: "2", label: "Medals (Bronze + Silver)" },
              ].map((achievement) => (
                <div key={achievement.label} className="text-center">
                  <p className="text-3xl font-bold text-accent">{achievement.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
