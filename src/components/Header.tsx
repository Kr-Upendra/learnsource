import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center mb-2">
      <h1 className="flex-1">LearnSource</h1>
      <nav className="space-x-4">
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Topics
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Tech
        </Link>
        <Link
          href="#"
          className="text-gray-600 hover:text-black transition-colors duration-300 ease-in-out"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
