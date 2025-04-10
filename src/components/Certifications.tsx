import CertificationCard from './certifications/CertificationCard';
import { certificationsData } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Certifications & Achievements
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {certificationsData.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}