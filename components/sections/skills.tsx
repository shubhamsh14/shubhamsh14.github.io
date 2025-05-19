"use client"

import { useState, useEffect } from "react"
import { Code, Server, Database, PenToolIcon as Tool, Cloud, Lightbulb } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

export default function Skills() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      skills: ["Java 8", "Java 17", "SQL", "HTML", "JSON", "XML"],
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Frameworks",
      skills: ["RESTful APIs", "Spring Boot", "Servlets & JSP", "Hibernate (JPA)"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend",
      skills: ["Microservices", "Multithreading", "Logging", "JDBC"],
    },
    {
      icon: <Tool className="h-6 w-6" />,
      title: "Tools",
      skills: ["Git", "CVS", "Docker", "GitHub Actions", "Jenkins"],
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["MySQL"],
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud & Infra",
      skills: ["AWS (EC2, S3)", "Kubernetes", "Linux"],
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Other",
      skills: ["Agile", "System Design"],
    },
  ]

  return (
    <section id="skills" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Skills" subtitle="Technologies and abilities I've acquired" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={cn(
              "bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-500 opacity-0 transform translate-y-8",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 100}ms` : "0ms",
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-200">{category.title}</h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="bg-gray-800/30 px-4 py-2 rounded-lg border border-gray-700/50 hover:border-teal-500/30 hover:shadow-[0_0_10px_rgba(45,212,191,0.15)] transition-all duration-300"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
