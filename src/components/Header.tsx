import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [iswhiteMode, setIsWhiteMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsWhiteMode(false);
  }, []);

  const toggleWhiteMode = () => {
    setIsWhiteMode(!iswhiteMode);
    if (iswhiteMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Jeyaraman
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggleWhiteMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
               {iswhiteMode ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleWhiteMode}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {iswhiteMode ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
