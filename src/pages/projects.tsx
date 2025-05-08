import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project 1",
    description:
      "A brief description of your first project. What problems did it solve? What technologies did you use?",
    tags: ["React", "TypeScript", "TailwindCSS"],
    links: {
      github: "https://github.com/dhvll/artify",
      // live: "https://project1.com",
    },
  },
  {
    title: "Project 2",
    description:
      "Description of your second project. Highlight the key features and your role in development.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/dhvll/project2",
      live: "https://project2.com",
    },
  },
  {
    title: "Project 2",
    description:
      "Description of your second project. Highlight the key features and your role in development.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/dhvll/project2",
      live: "https://project2.com",
    },
  },
  // Add more projects as needed
]

export function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        My Projects
      </h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-lg border bg-card p-6 transition-colors hover:bg-accent/50"
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
