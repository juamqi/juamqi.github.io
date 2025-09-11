export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center py-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About me</h2>
          <p className="text-gray-700 mb-4">
            I'm a creative software developer.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Contact me
          </a>
    </section>
  )
}