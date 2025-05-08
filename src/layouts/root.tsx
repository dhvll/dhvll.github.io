import { Link, Outlet } from "@tanstack/react-router"

export function RootLayout() {
  return (
    <div>
      <header>
        <div>
          <nav>
            <div>
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
          </nav>
        </div>
      </header>
    </div>
  )
}
