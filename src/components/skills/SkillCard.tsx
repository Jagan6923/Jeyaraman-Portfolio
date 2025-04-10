import React from 'react';
import { LucideIcon } from 'lucide-react';
import SkillBadge from './SkillBadge';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Array<{ name: string; level: number }>;
}

export default function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}