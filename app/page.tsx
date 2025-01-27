import Hero from "./components/Hero"
import FeaturedProjects from "./components/FeaturedProjects"
import Skills from "./components/Skills"
import LatestBlogPosts from "./components/LatestBlogPosts"
import CallToAction from "./components/CallToAction"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <FeaturedProjects />
      <Skills />
      <LatestBlogPosts />
      <CallToAction />
    </div>
  )
}

