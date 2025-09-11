export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-blue-600">Juan Pablo</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About me</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}