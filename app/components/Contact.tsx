"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", { name, email, message })
  }

  const handleChatbotToggle = () => {
    setChatbotOpen(!chatbotOpen)
  }

  const handleChatbotSubmit = (e) => {
    e.preventDefault()
    const userMessage = e.target.message.value
    setChatMessages([...chatMessages, { type: "user", content: userMessage }])
    e.target.reset()

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      setChatMessages([
        ...chatMessages,
        { type: "user", content: userMessage },
        { type: "ai", content: "Thank you for your message. How can I assist you today?" },
      ])
    }, 1000)
  }

  return (
    <section className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows={4}
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-full"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4"
      >
        <button onClick={handleChatbotToggle} className="bg-purple-600 text-white p-4 rounded-full shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </motion.div>
      {chatbotOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-lg"
        >
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">AI Assistant</h3>
          </div>
          <div className="h-64 overflow-y-auto p-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.type === "user" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleChatbotSubmit} className="p-4 border-t">
            <input
              type="text"
              name="message"
              placeholder="Type your message..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </form>
        </motion.div>
      )}
    </section>
  )
}

