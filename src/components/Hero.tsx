import { Book, Github, Linkedin, Youtube } from "lucide-react";
import img from "../assets/Blog.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Jeyaraman"
          className="w-full h-full object-cover opacity-50 dark:opacity-70" 
        />
        {/* Stronger dark overlay even in light mode */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-purple-600 text-transparent bg-clip-text pb-5">
            Building Digital Experiences
          </h1>

          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-400 mb-8 font-semibold">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/Jagan6923"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative shadow"
            >
              <Github className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Github
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/jeyaraman23/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative shadow"
            >
              <Linkedin className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Linkedin
              </span>
            </a>

            <a
              href="https://www.youtube.com/@jeyaraman_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative shadow"
            >
              <Youtube className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Youtube
              </span>
            </a>

            <a
              href="https://medium.com/@jaganjeyaraman"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative shadow"
            >
              <Book className="w-6 h-6 text-gray-800 dark:text-gray-300" />
              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Medium
              </span>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors shadow"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
