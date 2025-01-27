"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, MapPin, Globe } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, subject, message })
  }

  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl"
      >
        <h1 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
          Let's Connect
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Contact Information</h2>
            <p className="mb-4 text-muted-foreground">
              Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:contactmuhammadidrees@gmail.com" className="hover:underline">
                  contactmuhammadidrees@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Karachi, Pakistan
              </li>
              <li className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                Available for remote work
              </li>
            </ul>

            <h3 className="mb-4 mt-8 text-xl font-semibold">Connect on Social Media</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                ></textarea>
              </div>
              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

