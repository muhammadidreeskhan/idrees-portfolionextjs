import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <h1 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tighter md:text-4xl">About Me</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Idrees"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4 text-lg">
            Hi, I'm Idrees, a passionate React and Next.js developer with over 5 years of experience in crafting
            exceptional web experiences. My journey in web development began with a fascination for creating interactive
            and user-friendly interfaces, which led me to specialize in React and its ecosystem.
          </p>
          <p className="mb-4 text-lg">
            Throughout my career, I've had the opportunity to work on a diverse range of projects, from small business
            websites to large-scale enterprise applications. My expertise lies in building performant, scalable, and
            maintainable web applications using modern technologies and best practices.
          </p>
          <p className="mb-4 text-lg">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
            sharing my knowledge through blog posts and community events. I'm always excited to take on new challenges
            and collaborate on innovative projects.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

