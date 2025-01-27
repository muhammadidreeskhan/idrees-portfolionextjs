"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechCorp",
    period: "2020 - Present",
    description: "Led a team of developers in creating large-scale React applications.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "InnovateTech",
    period: "2018 - 2020",
    description: "Developed and maintained full-stack web applications using React and Node.js.",
  },
  {
    id: 3,
    title: "Junior Web Developer",
    company: "StartupX",
    period: "2016 - 2018",
    description: "Assisted in the development of responsive web applications and websites.",
  },
]

export default function Resume() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-8 bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 text-white px-6 py-2 rounded-full"
          >
            Download Full Resume
          </motion.button>
        </div>
      </div>
    </section>
  )
}

