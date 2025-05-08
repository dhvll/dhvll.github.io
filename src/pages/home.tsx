import { Link } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="text-primary">Dhaval Chaudhari</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground">
          A passionate developer crafting beautiful and functional web
          experiences
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-foreground transition-colors hover:text-foreground/80"
          >
            Contact Me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
