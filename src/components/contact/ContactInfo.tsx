import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        I'm always interested in hearing about new projects and opportunities.
        Feel free to reach out through any of these channels:
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
          <a
            href="mailto:jeyaraman.saravanan23@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            jeyaraman.saravanan23@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
          <a
            href="tel:+1234567890"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            +91 80721 01905
          </a>
        </div>
        <div className="flex items-center">
          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
          <span className="text-gray-700 dark:text-gray-300">
            Dindigul, Tamilnadu, India
          </span>
        </div>
      </div>
    </div>
  );
}
