"use client"

import { motion } from "framer-motion"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "Redux",
  "Tailwind CSS",
  "Framer Motion",
  "Jest",
  "Cypress",
  "Git",
]

export default function Skills() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
        Skills & Expertise
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

