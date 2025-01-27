"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface BlogPostCardProps {
  post: {
    title: string
    excerpt: string
    date: string
    link: string
    tags: string[]
  }
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-card text-card-foreground shadow-sm"
    >
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold">
          <Link href={post.link} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="rounded-full bg-accent px-2 py-1 text-xs font-medium text-accent-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <Link href={post.link} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
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
  )
}

