import { Link, Outlet } from "@tanstack/react-router"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function RootLayout() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(isDark ? "dark" : "light")
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-between">
            <div className="flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/"
                className="transition-colors hover:text-foreground/80"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="transition-colors hover:text-foreground/80"
              >
                Projects
              </Link>
              <Link
                to="/blog"
                className="transition-colors hover:text-foreground/80"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="transition-colors hover:text-foreground/80"
              >
                Contact
              </Link>
            </div>
            <button
              onClick={toggleTheme}
              className="rounded-md p-2 hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
          </nav>
        </div>
      </header>
      <main className="container flex-1 py-12">
        <Outlet />
      </main>
      <footer className="mt-auto border-t bg-background/95 py-6">
        <div className="container flex items-center  justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dhaval Chaudhari. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/dhvll"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/dhavalchaudhari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
