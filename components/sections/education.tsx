"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import EducationCard from "@/components/ui/education-card"
import { cn } from "@/lib/utils"

export default function Education() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const education = {
    degree: "Bachelor of Engineering (Electronics & Telecommunication)",
    institution: "Pimpri Chinchwad College of Engineering, Pune",
    duration: "2015 – 2019",
    achievements: [
      "Winner, BE Project Competition 2019 at Pimpri Chinchwad College of Engineering, Pune",
      "Elected to Secretary for IETE-PCCOE Student Forum in 2018",
    ],
  }

  const certifications = {
    degree: "Professional Certifications",
    institution: "Online Learning Platforms",
    duration: "2019 – Present",
    certifications: ["JDBC, Servlets, and JSP – Java Web Development Fundamentals (Udemy, 2023)"],
  }

  return (
    <section id="education" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Education & Certifications" subtitle="Academic background and professional development" />

      <div className="grid md:grid-cols-2 gap-6">
        <div
          className={cn(
            "opacity-0 transform translate-y-8 transition-all duration-700",
            mounted && "opacity-100 translate-y-0",
          )}
        >
          <EducationCard
            degree={education.degree}
            institution={education.institution}
            duration={education.duration}
            achievements={education.achievements}
          />
        </div>

        <div
          className={cn(
            "opacity-0 transform translate-y-8 transition-all duration-700 delay-200",
            mounted && "opacity-100 translate-y-0",
          )}
        >
          <EducationCard
            degree={certifications.degree}
            institution={certifications.institution}
            duration={certifications.duration}
            certifications={certifications.certifications}
          />
        </div>
      </div>
    </section>
  )
}
