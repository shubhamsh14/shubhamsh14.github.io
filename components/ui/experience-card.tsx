"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface ExperienceCardProps {
  company: string
  position: string
  duration: string
  responsibilities: {
    description: string
    technologies: string
  }[]
}

export default function ExperienceCard({ company, position, duration, responsibilities }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 bg-teal-500/10 blur-xl rounded-full scale-0 transition-transform duration-700",
          isHovered && "scale-100",
        )}
      ></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-200 group-hover:text-teal-400 transition-colors">{company}</h3>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <h4 className="text-lg font-medium text-teal-400 mb-4">{position}</h4>

        <ul className="space-y-4">
          {responsibilities.map((item, index) => (
            <li key={index} className="border-l-2 border-gray-800 pl-4 py-1 hover:border-teal-500 transition-colors">
              <p className="text-gray-300">{item.description}</p>
              <p className="text-sm text-gray-500 mt-1">
                <span className="text-teal-400">Tech Used:</span> {item.technologies}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
