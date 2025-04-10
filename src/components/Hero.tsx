import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text pb-5">
            Building Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/Jagan6923"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/jeyaraman23/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}