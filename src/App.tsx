import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              John Doe
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Senior Software Engineer
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:john@example.com"
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
            Passionate software engineer with 8+ years of experience in
            full-stack development. Specialized in building scalable web
            applications using modern technologies.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Senior Software Engineer
                  </h3>
                  <p className="text-gray-600">Tech Corp Inc.</p>
                </div>
                <span className="text-sm text-gray-500">2020 - Present</span>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                <li>Led development of microservices architecture</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Improved system performance by 40%</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600">StartUp Solutions</p>
                </div>
                <span className="text-sm text-gray-500">2018 - 2020</span>
              </div>
              <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                <li>Developed full-stack web applications</li>
                <li>Implemented CI/CD pipelines</li>
                <li>Reduced deployment time by 60%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Node.js",
              "Python",
              "AWS",
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

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                E-commerce Platform
              </h3>
              <p className="mt-2 text-gray-600">
                Built a scalable e-commerce platform using React and Node.js
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Analytics Dashboard
              </h3>
              <p className="mt-2 text-gray-600">
                Developed a real-time analytics dashboard with React and
                WebSocket
              </p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-gray-600">University of Technology</p>
              </div>
              <span className="text-sm text-gray-500">2014 - 2018</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">
              © 2024 John Doe. All rights reserved.
            </p>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
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
