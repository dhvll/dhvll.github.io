import { motion } from "framer-motion"
import { Github, RefreshCw } from "lucide-react"
import { useEffect, useState } from "react"
import { GitHubContribution, fetchGitHubContributions } from "../lib/github"
import { Spinner } from "../components/Spinner"

export function AboutPage() {
  const [contributions, setContributions] = useState<GitHubContribution[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  async function loadContributions(skipCache = false) {
    setLoading(true)
    setError(undefined)
    const { data, error } = await fetchGitHubContributions("dhvll", skipCache)
    setContributions(data)
    setError(error)
    setLoading(false)
  }

  useEffect(() => {
    loadContributions()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-3xl space-y-12"
    >
      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h1>
        <div className="mt-6 space-y-6 text-lg text-muted-foreground">
          <p>
            Hello! I'm a passionate developer with a keen interest in building
            beautiful and functional web applications. I specialize in modern
            web technologies and love creating intuitive user experiences.
          </p>
          <p>
            With experience in both frontend and backend development, I enjoy
            working on projects that challenge me to learn new technologies and
            solve complex problems.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            Python
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            TypeScript
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            Golang
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            SQL
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            Nodejs
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            React.js
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            Django
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            AWS
          </li>
          <li className="rounded-md bg-secondary px-3 py-1 text-center text-sm">
            Devops Tools
          </li>
        </ul>
      </motion.section>

      {/* GitHub Contributions Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Github className="h-6 w-6" />
            <h2 className="text-2xl font-semibold text-foreground">
              Open Source Contributions
            </h2>
          </div>
          {!loading && (
            <button
              onClick={() => loadContributions(true)}
              className="inline-flex items-center gap-2 rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              title="Refresh contributions"
            >
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Refresh</span>
            </button>
          )}
        </div>
        <div className="mt-6 space-y-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Spinner size="lg" className="text-muted-foreground" />
            </div>
          ) : error ? (
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-center text-sm text-destructive">
              {error}
              <button
                onClick={() => loadContributions(true)}
                className="ml-2 underline hover:no-underline"
              >
                Try again
              </button>
            </div>
          ) : contributions.length > 0 ? (
            contributions.map((contribution) => (
              <motion.div
                key={contribution.url}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border bg-card p-4 transition-colors hover:bg-accent/50"
              >
                <a
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:underline"
                >
                  <p className="text-lg font-medium">{contribution.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {contribution.repo}
                    </span>
                    <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                      {contribution.type}
                    </span>
                  </div>
                </a>
              </motion.div>
            ))
          ) : (
            <div className="text-center text-muted-foreground">
              No contributions found
            </div>
          )}
        </div>
        <div className="mt-6">
          <a
            href="https://github.com/dhvll"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            View more on GitHub
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </motion.section>
    </motion.div>
  )
}
