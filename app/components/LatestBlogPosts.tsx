"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const blogPosts = [
  {
    title: "Mastering React Hooks",
    excerpt: "Learn how to effectively use React Hooks to manage state and side effects in your applications.",
    date: "2023-05-15",
    link: "/blog/mastering-react-hooks",
  },
  {
    title: "Next.js 13: What's New",
    excerpt:
      "Explore the latest features and improvements in Next.js 13 and how they can enhance your development workflow.",
    date: "2023-05-01",
    link: "/blog/nextjs-13-whats-new",
  },
  {
    title: "Integrating AI in React Applications",
    excerpt: "Discover how to leverage AI technologies to create more intelligent and dynamic React applications.",
    date: "2023-04-20",
    link: "/blog/integrating-ai-in-react-applications",
  },
]

export default function LatestBlogPosts() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
        Latest Blog Posts
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold">{post.title}</h3>
              <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href={post.link} className="inline-flex items-center text-sm font-medium text-primary">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/blog"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          View All Posts
        </Link>
      </div>
    </section>
  )
}

