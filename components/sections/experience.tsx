"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ExperienceCard from "@/components/ui/experience-card"
import { cn } from "@/lib/utils"

export default function Experience() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const experiences = [
    {
      company: "Cumulus Systems, Pune",
      position: "Senior Software Engineer",
      duration: "Jan 2021 – Present",
      responsibilities: [
        {
          description:
            "Developed backend components for a licensed enterprise web application that monitors storage devices, routers, and network switches.",
          technologies: "Java 8 & 17, Spring Boot, REST APIs, MySQL, Git, Docker, JSON, Linux",
        },
        {
          description: "Implemented PDF export functionality for health reports with stacked charts and tables.",
          technologies: "Java, Spring Boot, Apache PDFBox, Multithreading, Logging, JSON, JDBC",
        },
        {
          description: "Built a user preference engine for customizing report views.",
          technologies: "Spring Boot, Hibernate (JPA), MySQL, REST API, JSON, Docker, Git",
        },
        {
          description: "Created RESTful APIs to aggregate performance/configuration data.",
          technologies: "Java, Spring Boot, JDBC, SQL, Logging, Multithreading, REST API, System Design principles",
        },
        {
          description: "Integrated CI/CD pipelines for Dockerized services using GitHub Actions.",
          technologies: "GitHub Actions, Docker, Spring Boot, Linux Shell, JUnit, Mockito",
        },
        {
          description: "Contributed to AWS and Kubernetes PoCs for scalable deployment.",
          technologies: "AWS (EC2, S3), Kubernetes (basic), Docker, YAML, Git",
        },
        {
          description: "Participated in sprint planning, reviews, and backend architecture.",
          technologies: "Git, JIRA, Jenkins (exposure), Agile",
        },
      ],
    },
    {
      company: "KPIT Technologies Ltd, Pune",
      position: "Associate Software Engineer",
      duration: "Jul 2019 – Dec 2020",
      responsibilities: [
        {
          description: "Developed a scenario generation engine using Java and SQL.",
          technologies: "Java 8, MySQL, JDBC, Multithreading, Logging",
        },
        {
          description: "Analyzed logs and debugged configurations to resolve issues.",
          technologies: "Java, SQL, Linux, Log Analysis Tools",
        },
        {
          description: "Worked in agile teams and supported documentation and maintenance.",
          technologies: "Git, JIRA, Agile",
        },
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Professional Experience" subtitle="My work history and responsibilities" />

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ExperienceCard
              company={experience.company}
              position={experience.position}
              duration={experience.duration}
              responsibilities={experience.responsibilities}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
