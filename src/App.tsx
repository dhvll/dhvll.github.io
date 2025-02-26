import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {" "}
      {/* Changed background, font */}
      {/* Hero Section */}
      <header className="bg-white shadow-md py-10">
        {" "}
        {/* Added shadow and padding */}
        <div className="max-w-4xl mx-auto px-6">
          {" "}
          {/* Increased padding */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl mb-2">
              {" "}
              {/* Increased font size, added margin */}
              Dhaval Chaudhari
            </h1>
            <p className="mt-2 text-xl text-gray-700 font-light">
              Software Engineer
            </p>{" "}
            {/* Slightly darker text, lighter font */}
            <div className="mt-8 flex justify-center space-x-8">
              {" "}
              {/* Increased spacing */}
              <a
                href="https://github.com/dhvll"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <Github className="w-7 h-7" /> {/* Slightly larger icons */}
              </a>
              <a
                href="https://www.linkedin.com/in/dhavalchaudhari"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dhaval@dhavalchaudhari.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition duration-200"
              >
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        {" "}
        {/* Increased padding and py */}
        {/* About Section */}
        <section className="mb-16">
          {" "}
          {/* Increased margin */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
            About Me
          </h2>{" "}
          {/* Styled heading */}
          <p className="text-gray-700 leading-relaxed">
            {" "}
            {/* Improved readability */}A computer engineer with more than a
            year of practical full-stack web development experience. Competent
            with Django, ReactJS, Gorilla, and Express frameworks and proficient
            in Python, JavaScript, Golang, and SQL. I specialize in designing
            and building scalable, secure, and high-performance applications,
            with a focus on clean, maintainable code and efficient optimization.
            Working together with cross-functional teams to provide creative
            software solutions that satisfy user. I’m excited about taking on
            challenging tasks, and to stay ahead of the always-changing IT
            business, I like to keep learning new things and adjusting to new
            technology. Together, let’s create something amazing!
          </p>
        </section>
        {/* Projects Section */}
        <section className="mb-16">
          {" "}
          {/* Increased margin */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
            Projects
          </h2>{" "}
          {/* Styled heading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Increased gap */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              {" "}
              {/* Enhanced card styling */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {" "}
                {/* Increased font size, margin */}
                SnippetShare - Code Snippet Manager
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {" "}
                {/* Improved readability, margin */}
                This web application provides a secure and efficient platform
                for managing, storing, and sharing code snippets. Built with
                Golang, it features user authentication, session management, and
                role-based access control.
              </p>
              <a
                href="https://github.com/dhvll/snippetshare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
              >
                View Project <ExternalLink className="ml-2 w-5 h-5" />{" "}
                {/* Slightly larger icon */}
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              {" "}
              {/* Enhanced card styling */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {" "}
                {/* Increased font size, margin */}
                Agile Project Management Software
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {" "}
                {/* Improved readability, margin */}
                Fehler is a project management software which let teams plan,
                track and manage software development projects.
              </p>
              <a
                href="https://github.com/dhvll/fehler_core"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
              >
                View Project <ExternalLink className="ml-2 w-5 h-5" />{" "}
                {/* Slightly larger icon */}
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              {" "}
              {/* Enhanced card styling */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {" "}
                {/* Increased font size, margin */}
                Customer Relationship Management System
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                {" "}
                {/* Improved readability, margin */}
                This is Customer relationship management system which helps
                users to manage relationships and interactions with the customer
                and assign them to agents efficiently
              </p>
              <a
                href="https://github.com/dhvll/CRM-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition duration-200"
              >
                View Project <ExternalLink className="ml-2 w-5 h-5" />{" "}
                {/* Slightly larger icon */}
              </a>
            </div>
          </div>
        </section>
        <section className="mb-16">
          {" "}
          {/* Increased margin */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
            Skills
          </h2>{" "}
          {/* Styled heading */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {" "}
            {/* Increased gap */}
            {[
              "Python",
              "TypeScript",
              "Golang",
              "SQL",
              "Django",
              "React",
              "Docker",
              "AWS",
              "Kubernetes",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-blue-50 px-5 py-3 rounded-full shadow-sm text-center hover:bg-blue-100 transition duration-200"
              >
                <span className="text-gray-800 font-medium">{skill}</span>{" "}
                {/* Bold skill text */}
              </div>
            ))}
          </div>
        </section>
        {/* Education Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 border-b-2 pb-2 border-gray-200">
            Education
          </h2>{" "}
          {/* Styled heading */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {" "}
            {/* Enhanced card styling */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {" "}
                  {/* Increased font size */}
                  Bachelor of Engineering, Computer Engineering
                </h3>
                <p className="text-gray-700 mt-1">
                  {" "}
                  {/* Added margin */}
                  Mahatma Gandhi Mission’s College of Engineering and
                  Technology.
                </p>
              </div>
              <span className="text-sm text-gray-500 font-light">
                2018 - 2022
              </span>{" "}
              {/* Lighter font */}
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-white mt-12 py-8 border-t border-gray-200">
        {" "}
        {/* Changed mt-20 to mt-12 */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600 font-light">© 2025 Dhaval Chaudhari.</p>
            <button
              className="inline-flex items-center px-5 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
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
