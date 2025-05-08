import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/dhvll",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/dhavalchaudhari",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/backendwiz",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:dhaval@dhavalchaudhari.com",
    icon: Mail,
  },
]

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl"
    >
      <h1 className="text-3xl font-bold  tracking-tight sm:text-4xl">
        Get in Touch
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <div className="mt-8 flex items-center justify-center gap-6">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-2"
          >
            <span className="rounded-full bg-secondary p-3 transition-colors group-hover:bg-secondary/80">
              <Icon className="h-6 w-6" />
            </span>
            <span className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
              {name}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-12">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md border bg-background px-3 py-2 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  )
}
