"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  { id: 1, title: "E-commerce Platform", tags: ["React", "Next.js", "GraphQL"] },
  { id: 2, title: "Social Media Dashboard", tags: ["React", "Redux", "Node.js"] },
  { id: 3, title: "AI-powered Chatbot", tags: ["React", "TypeScript", "Machine Learning"] },
  { id: 4, title: "Real-time Collaboration Tool", tags: ["React", "WebSockets", "Firebase"] },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.tags.includes(filter))

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="flex justify-center mb-8">
          {["All", "React", "Next.js", "TypeScript"].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`mx-2 px-4 py-2 rounded-full ${filter === tag ? "bg-purple-600 text-white" : "bg-gray-200"}`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-200 text-sm rounded-full px-3 py-1 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-8 max-w-2xl w-full"
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
              <p className="mb-4">Detailed description of the {selectedProject.title} project goes here.</p>
              <div className="flex flex-wrap mb-4">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-sm rounded-full px-3 py-1 mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-purple-600 text-white px-4 py-2 rounded-full"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

