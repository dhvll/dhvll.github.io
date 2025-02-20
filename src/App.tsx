import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Dhaval Chaudhari
            </h1>
            <p className="mt-4 text-xl text-gray-600">Software Engineer</p>
            <div className="mt-6 flex justify-center space-x-6">
              <a
                href="https://github.com/dhvll"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhavalchaudhari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dhavalchaudhari13@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-600">
            As a passionate computer engineer with over a year of hands-on
            experience, I have developed a strong interest in full-stack web
            development and am skilled in a wide array of programming languages
            and technologies. I have practical experience in Python, JavaScript,
            SQL, Golang, and various frameworks such as Django, ReactJS, Gorilla
            and Express. My goal is to leverage my diverse skill set to help
            companies build innovative and impactful products. I am always eager
            to explore new opportunities and take on new challenges,
            continuously expanding my knowledge across technologies and
            development practices.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                SnippetShare - Code Snippet Manager
              </h3>
              <p className="mt-2 text-gray-600">
                This web application provides a secure and efficient platform
                for managing, storing, and sharing code snippets. Built with
                Golang, it features user authentication, session management, and
                role-based access control.
              </p>
              <a
                href="https://github.com/dhvll/snippetshare"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Agile Project Management Software
              </h3>
              <p className="mt-2 text-gray-600">
                Fehler is a project management software which let teams plan,
                track and manage software developement projects.
              </p>
              <a
                href="https://github.com/dhvll/fehler_core"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Customer Relationship Management System
              </h3>
              <p className="mt-2 text-gray-600">
                This is Customer relationship management system which helps
                users to manage relationships and interactions with the customer
                and assign them to agents efficiently
              </p>
              <a
                href="https://github.com/dhvll/CRM-System"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600">Company A</p>
                </div>
                <span className="text-sm text-gray-500">2022 - Present</span>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                <li>Led development of microservices architecture</li>
                <li>Implemented CI/CD pipelines</li>
                <li>Improved system performance by 40%</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Junior Developer
                  </h3>
                  <p className="text-gray-600">Company B</p>
                </div>
                <span className="text-sm text-gray-500">2020 - 2022</span>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                <li>Developed full-stack web applications</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Optimized database performance</li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Python",
              "TypeScript",
              "Golang",
              "SQL,",
              "Django,",
              "React",
              "Docker,",
              "AWS",
              "Kubernetes",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white px-4 py-2 rounded-lg shadow-sm text-center"
              >
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Bachelor of Engineering, Computer Engineering{" "}
                </h3>
                <p className="text-gray-600">
                  Mahatma Gandhi Mission’s College of Engineering and
                  Technology.
                </p>
              </div>
              <span className="text-sm text-gray-500">2018 - 2022</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">
              © 2024 Dhaval Chaudhari. All rights reserved.
            </p>
            <button
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/resume.pdf" // Ensure the file is inside the public folder
                link.download = "Dhaval_Resume.pdf" // Set the download filename
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
