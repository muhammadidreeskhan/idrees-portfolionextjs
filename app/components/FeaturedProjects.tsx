"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/e-commerce-platform",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/social-media-dashboard",
  },
  {
    title: "AI-powered Chatbot",
    description: "Intelligent customer service bot using natural language processing",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/ai-chatbot",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
        Featured Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
              <Link
                href={project.link}
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
              >
                View Project
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}

