import { Link } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Rocket, Zap } from "lucide-react"

const highlights = [
  { icon: Code2, text: "Backend Development" },
  { icon: Rocket, text: "Distributed Systems" },
  { icon: Zap, text: "Scalable Architecture" },
]

export function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            Hi, I'm <span className="text-foreground">Dhaval Chaudhari</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10">
            Computer Engineering graduate focused on backend systems and distributed architectures 
            using <span className="text-foreground">Python</span>, <span className="text-foreground">Golang</span>, 
            and <span className="text-foreground">cloud technologies</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-base font-medium text-background transition-all hover:bg-foreground/90"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border px-6 py-3 text-base font-medium transition-colors hover:bg-accent"
            >
              Get in Touch
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto max-w-3xl"
      >
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6">
            Computer Engineering graduate from MGM's College of Engineering and Technology. 
            I specialize in backend development and distributed systems with a focus on building scalable, 
            high-performance applications. Experienced with Python, Golang, and cloud infrastructure.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            Learn more about me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Interested in collaborating on a project? Feel free to reach out.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 font-medium text-background transition-all hover:bg-foreground/90"
        >
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.section>
    </div>
  )
}
