import { motion } from "framer-motion"
import { Code2, Database, Cloud, GitPullRequest, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

const skills = {
  "Languages": ["Python", "Golang", "TypeScript", "JavaScript", "Rust", "SQL"],
  "Backend & Frameworks": ["Django", "FastAPI", "Axum", "Node.js", "Express", "React.js", "Next.js"],
  "Distributed Systems": ["Docker", "Kubernetes","Redis", "Message Queues", "Microservices", "Kafka", "RabbitMQ"],
  "Cloud & DevOps": ["AWS", "CI/CD", "Linux", "Git", "PostgreSQL", "MySQL", "MongoDB"],
  "Testing": ["Unit Tests", "Integration Tests", "E2E Tests", "Mocking", "Testing Frameworks"],
}

interface PullRequest {
  title: string
  repo: string
  url: string
  merged_at: string
  number: number
}

async function fetchMergedPRs(username: string): Promise<PullRequest[]> {
  try {
    const response = await fetch(
      `https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged&sort=updated&per_page=5`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    )
    
    if (!response.ok) return []
    
    const data = await response.json()
    return data.items.map((pr: any) => ({
      title: pr.title,
      repo: pr.repository_url.split('/').slice(-2).join('/'),
      url: pr.html_url,
      merged_at: pr.closed_at,
      number: pr.number,
    }))
  } catch (error) {
    console.error("Error fetching PRs:", error)
    return []
  }
}

export function AboutPage() {
  const [mergedPRs, setMergedPRs] = useState<PullRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMergedPRs("dhvll").then((prs) => {
      setMergedPRs(prs)
      setLoading(false)
    })
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-auto max-w-4xl space-y-16"
    >
      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          About Me
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a <span className="font-semibold text-foreground">Computer Engineering graduate</span> passionate about 
            building scalable backend systems and distributed architectures. I specialize in designing and implementing 
            high-performance APIs, microservices, and cloud-native applications.
          </p>
          <p>
            My expertise lies in <span className="font-semibold text-foreground">Python, TypeScript, Golang,</span> and 
            <span className="font-semibold text-foreground"> distributed systems</span> design. I enjoy working on 
            backend infrastructure, optimizing database queries, and building resilient systems that can handle scale.
          </p>
          <p>
            Interested in backend engineering, distributed systems, and infrastructure roles where I can build 
            robust, scalable solutions and contribute to challenging technical problems.
          </p>
        </div>
      </motion.section>

      {/* Open Source Contributions */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <GitPullRequest className="h-7 w-7 text-foreground" />
          <h2 className="text-3xl font-bold text-foreground">Open Source Contributions</h2>
        </div>
        
        {loading ? (
          <div className="text-center py-8 text-muted-foreground">
            Loading contributions...
          </div>
        ) : mergedPRs.length > 0 ? (
          <div className="space-y-4">
            {mergedPRs.map((pr) => (
              <motion.a
                key={pr.url}
                href={pr.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="block rounded-lg border bg-card p-5 hover:border-foreground/50 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                      {pr.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {pr.repo} #{pr.number}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Merged {new Date(pr.merged_at).toLocaleDateString()}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No merged pull requests found yet. Check back soon!
          </div>
        )}
        
        <div className="mt-6 text-center">
          <a
            href="https://github.com/dhvll"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all contributions on GitHub
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="h-7 w-7 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">Technical Skills</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                {category === "Languages" && <Code2 className="h-5 w-5" />}
                {category === "Backend & Frameworks" && <Database className="h-5 w-5" />}
                {category === "Distributed Systems" && <Cloud className="h-5 w-5" />}
                {category === "Cloud & DevOps" && <Cloud className="h-5 w-5" />}
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="rounded-lg border bg-card p-6"
      >
        <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Bachelor of Engineering, Computer Engineering
          </h3>
          <p className="text-muted-foreground">
            Mahatma Gandhi Mission's College of Engineering and Technology
          </p>
        </div>
      </motion.section>
    </motion.div>
  )
}
