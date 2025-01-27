"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Mastering React Hooks",
    excerpt: "Learn how to effectively use React Hooks to manage state and side effects in your applications.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Next.js 13: What's New",
    excerpt:
      "Explore the latest features and improvements in Next.js 13 and how they can enhance your development workflow.",
    date: "2023-05-01",
  },
  {
    id: 3,
    title: "Integrating AI in React Applications",
    excerpt: "Discover how to leverage AI technologies to create more intelligent and dynamic React applications.",
    date: "2023-04-20",
  },
]

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(3)

  const loadMore = () => {
    setVisiblePosts((prevVisible) => prevVisible + 3)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </motion.div>
          ))}
        </div>
        {visiblePosts < blogPosts.length && (
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={loadMore}
              className="bg-purple-600 text-white px-6 py-2 rounded-full"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

