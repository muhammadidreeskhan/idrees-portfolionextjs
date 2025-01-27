"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    link: string
    tags: string[]
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg shadow-lg"
    >
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={600}
        height={400}
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 p-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-white px-2 py-1 text-xs font-medium text-gray-900">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={project.link}
          className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  )
}

