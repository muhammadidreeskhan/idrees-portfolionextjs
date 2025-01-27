import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, MapPin, Globe, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/40">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-500 to-emerald-500 bg-clip-text text-transparent">
                Idrees
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A passionate React & Next.js developer crafting exceptional web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Me
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                Services
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:contactmuhammadidrees@gmail.com" className="hover:text-foreground">
                  contactmuhammadidrees@gmail.com
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Karachi, Pakistan</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Globe className="mr-2 h-4 w-4" />
                <span>Available for remote work</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to my newsletter for the latest updates on web development and tech insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col items-center justify-between space-y-4 border-t border-border/40 pt-8 sm:flex-row sm:space-y-0">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Idrees. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

