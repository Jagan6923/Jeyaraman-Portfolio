import { Award, Calendar } from "lucide-react";

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  credentialUrl: string;
  logo: string;
}

export default function CertificationCard({
  title,
  organization,
  date,
  credentialUrl,
  logo,
}: CertificationCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={logo}
          alt={organization}
          className="w-12 h-12 object-contain"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{organization}</p>
          <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
        <a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
        >
          <Award className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
