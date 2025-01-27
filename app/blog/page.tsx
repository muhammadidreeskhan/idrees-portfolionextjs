import BlogPostCard from "../components/BlogPostCard"

const blogPosts = [
  {
    title: "Mastering React Hooks",
    excerpt: "Learn how to effectively use React Hooks to manage state and side effects in your applications.",
    date: "2023-05-15",
    link: "/blog/mastering-react-hooks",
    tags: ["React", "Hooks", "State Management"],
  },
  {
    title: "Next.js 13: What's New",
    excerpt:
      "Explore the latest features and improvements in Next.js 13 and how they can enhance your development workflow.",
    date: "2023-05-01",
    link: "/blog/nextjs-13-whats-new",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    title: "Integrating AI in React Applications",
    excerpt: "Discover how to leverage AI technologies to create more intelligent and dynamic React applications.",
    date: "2023-04-20",
    link: "/blog/integrating-ai-in-react-applications",
    tags: ["React", "AI", "Machine Learning"],
  },
  {
    title: "Building Scalable APIs with GraphQL",
    excerpt: "Learn how to design and implement scalable APIs using GraphQL for your web applications.",
    date: "2023-04-10",
    link: "/blog/building-scalable-apis-with-graphql",
    tags: ["GraphQL", "API", "Backend"],
  },
  {
    title: "Optimizing React Performance",
    excerpt:
      "Explore advanced techniques to optimize the performance of your React applications for better user experience.",
    date: "2023-03-25",
    link: "/blog/optimizing-react-performance",
    tags: ["React", "Performance", "Optimization"],
  },
  {
    title: "Serverless Architecture with Next.js",
    excerpt:
      "Discover how to leverage serverless architecture to build scalable and cost-effective web applications with Next.js.",
    date: "2023-03-15",
    link: "/blog/serverless-architecture-with-nextjs",
    tags: ["Next.js", "Serverless", "Cloud Computing"],
  },
]

export default function BlogPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Blog</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

