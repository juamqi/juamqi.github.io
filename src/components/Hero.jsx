export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
        Hi, I'm <span className="text-blue-600">Juan Pablo</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
        Front-End Development and UX/UI Design
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition"
        >
          Contact me
        </a>
      </div>
    </section>
  );
}