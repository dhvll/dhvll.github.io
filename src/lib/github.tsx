const GITHUB_API_URL = "https://api.github.com"
const CACHE_KEY = "github_contributions"
const CACHE_DURATION = 1000 * 60 * 5 // 5 minutes

interface CachedData {
  timestamp: number
  data: GitHubContribution[]
}

export interface GitHubContribution {
  repo: string
  description: string
  type: "Pull Request" | "Issue" | "Discussion" | "Bug Fix" | "Feature"
  date: string
  url: string
}

export async function fetchGitHubContributions(
  username: string,
  skipCache = false
): Promise<{ data: GitHubContribution[]; error?: string }> {
  try {
    // Check cache first
    if (!skipCache) {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const { timestamp, data } = JSON.parse(cached) as CachedData
        if (Date.now() - timestamp < CACHE_DURATION) {
          return { data }
        }
      }
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    // Fetch user's events
    const response = await fetch(
      `${GITHUB_API_URL}/users/${username}/events/public`,
      {
        signal: controller.signal,
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    )

    clearTimeout(timeoutId)

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }

    const events = await response.json()

    // Filter and transform relevant events
    const contributions = events
      .filter((event: any) =>
        ["PullRequestEvent", "IssuesEvent", "CreateEvent"].includes(event.type)
      )
      .map((event: any) => {
        let type: GitHubContribution["type"] = "Pull Request"
        let description = ""
        let url = ""

        switch (event.type) {
          case "PullRequestEvent":
            type = event.payload.pull_request.labels?.some((l: any) =>
              l.name.toLowerCase().includes("bug")
            )
              ? "Bug Fix"
              : "Feature"
            description = event.payload.pull_request.title
            url = event.payload.pull_request.html_url
            break
          case "IssuesEvent":
            type = "Issue"
            description = event.payload.issue.title
            url = event.payload.issue.html_url
            break
          case "CreateEvent":
            type = "Feature"
            description = `Created ${event.payload.ref_type} ${event.payload.ref}`
            url = `https://github.com/${event.repo.name}`
            break
        }

        return {
          repo: event.repo.name,
          description,
          type,
          date: event.created_at,
          url,
        }
      })

    // Cache the results
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data: contributions,
      })
    )

    return { data: contributions }
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    return {
      data: [],
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch contributions",
    }
  }
}
