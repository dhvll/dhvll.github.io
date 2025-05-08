import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Artify - Design and Editing Platform",
    description:
      "Developed Artify, a web-based design and editing platform with drag-and-drop functionality, enabling users to create graphics, and social media posts. Integrated features like layer management, text/image editing, and export tools within a fast and user-friendly interface.",
    tags: ["React", "TypeScript", "Next", "Prisma"],
    links: {
      github: "https://github.com/dhvll/artify",
      // live: "https://project1.com",
    },
  },
  {
    title: "SnippetShare - Code Snippet Manager",
    description:
      "This web application provides a secure and efficient platform for managing, storing, and sharing code snippets. Built with Golang, it features user authentication, session management, and role-based access control.",
    tags: ["Golang", "MySql", "Html"],
    links: {
      github: "https://github.com/dhvll/snippetshare",
      // live: "https://project2.com",
    },
  },
  {
    title: "Fehler - Agile Project Management Software",
    description:
      "Fehler is a project management software which let teams plan, track and manage software development projects.",
    tags: ["Python", "Django", "Javascript", "React.js", "Postgresql"],
    links: {
      github: "https://github.com/dhvll/fehler_core",
      // live: "https://project2.com",
    },
  },
  {
    title: "Customer Relationship Management System",
    description:
      "This is Customer relationship management system which helps users to manage relationships and interactions with the customer and assign them to agents efficiently.",
    tags: ["Python", "Django", "Javascript", "React.js", "Postgresql"],
    links: {
      github: "https://github.com/dhvll/CRM-System",
      // live: "https://project2.com",
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
              {/*  TODO */}
              {/* <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
