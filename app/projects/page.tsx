import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store built with Next.js and Stripe",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/e-commerce-platform",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/social-media-dashboard",
    tags: ["React", "Redux", "D3.js", "Socket.io"],
  },
  {
    title: "AI-powered Chatbot",
    description: "Intelligent customer service bot using natural language processing",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/ai-chatbot",
    tags: ["React", "Node.js", "NLP", "Machine Learning"],
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/task-management-app",
    tags: ["React", "Firebase", "Material-UI", "Redux"],
  },
  {
    title: "Weather Forecast App",
    description: "A sleek weather application with location-based forecasts",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/weather-forecast-app",
    tags: ["React Native", "Expo", "OpenWeatherMap API"],
  },
  {
    title: "Personal Finance Tracker",
    description: "A comprehensive tool for managing personal finances and investments",
    image: "/placeholder.svg?height=400&width=600",
    link: "/projects/personal-finance-tracker",
    tags: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">My Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

