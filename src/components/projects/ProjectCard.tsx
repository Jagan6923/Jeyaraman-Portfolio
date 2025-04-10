import { Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <Globe className="w-4 h-4 mr-1" /> Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Github className="w-4 h-4 mr-1" /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
