"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { GraduationCap, Award, Calendar } from "lucide-react"

interface EducationCardProps {
  degree: string
  institution: string
  duration: string
  achievements?: string[]
  certifications?: string[]
}

export default function EducationCard({
  degree,
  institution,
  duration,
  achievements,
  certifications,
}: EducationCardProps) {
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
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gray-800/50 rounded-lg text-teal-400">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-200 group-hover:text-teal-400 transition-colors">
              {degree}
            </h3>
            <p className="text-gray-400">{institution}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4 text-gray-500">
          <Calendar className="h-4 w-4" />
          <span>{duration}</span>
        </div>

        {achievements && achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-medium text-teal-400 mb-2 flex items-center gap-2">
              <Award className="h-4 w-4" /> Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 pl-4 border-l border-gray-800">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {certifications && certifications.length > 0 && (
          <div className="mt-4">
            <h4 className="text-lg font-medium text-teal-400 mb-2">Certifications</h4>
            <ul className="space-y-2">
              {certifications.map((certification, index) => (
                <li key={index} className="text-gray-300 pl-4 border-l border-gray-800">
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
