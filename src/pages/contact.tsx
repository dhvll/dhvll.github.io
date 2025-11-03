import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, CheckCircle2 } from "lucide-react"
import { useState, FormEvent } from "react"

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const form = e.currentTarget // Store form reference before async operation
    const formData = new FormData(form)
    
    // Add Web3Forms access key - Get your free key from https://web3forms.com
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"
    formData.append("access_key", accessKey)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      
      console.log("Web3Forms response:", data) // Debug log

      if (response.ok && data.success) {
        setSubmitSuccess(true)
        form.reset() // Use stored form reference
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        setSubmitError(data.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error) // Debug log
      setSubmitError("Failed to send message. Please try emailing directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl"
    >
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Let's Work Together
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Available for freelance projects, consulting, and full-time opportunities. 
        Let's discuss how I can help bring your ideas to life.
      </p>
      
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
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
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-lg bg-green-50 dark:bg-green-900/20 p-4 flex items-center gap-2 text-green-800 dark:text-green-200"
          >
            <CheckCircle2 className="h-5 w-5" />
            <p>Message sent successfully! I'll get back to you soon.</p>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-lg bg-red-50 dark:bg-red-900/20 p-4 text-red-800 dark:text-red-200"
          >
            {submitError}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full rounded-md border bg-background px-4 py-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full rounded-md border bg-background px-4 py-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full rounded-md border bg-background px-4 py-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="block w-full rounded-md border bg-background px-4 py-3 text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-primary px-4 py-3 font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Or email me directly at{" "}
          <a 
            href="mailto:dhaval@dhavalchaudhari.com" 
            className="text-primary hover:underline"
          >
            dhaval@dhavalchaudhari.com
          </a>
        </p>
      </div>
    </motion.div>
  )
}
