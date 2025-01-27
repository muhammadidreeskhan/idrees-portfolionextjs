"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-accent">
      <div className="container py-16 md:py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
            Ready to Start Your Next Project?
          </h2>
          <p className="mb-8 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Let's collaborate to bring your ideas to life with cutting-edge web technologies.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

