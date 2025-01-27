"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-8 md:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg mb-4">
              With over 5 years of experience in React and Next.js development, I specialize in creating performant and
              scalable web applications. My passion for clean code and user-centric design drives me to deliver
              exceptional digital experiences.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Expert in React and Next.js</li>
              <li>Proficient in TypeScript and modern JavaScript</li>
              <li>Experienced with state management (Redux, Recoil)</li>
              <li>Skilled in responsive and accessible web design</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <Image
              src="/placeholder.svg"
              alt="Developer Avatar"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

