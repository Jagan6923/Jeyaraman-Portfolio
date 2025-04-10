import React from 'react';

interface SkillBadgeProps {
  name: string;
  level: number;
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800">
      <span className="text-gray-900 dark:text-gray-100">{name}</span>
      <div className="ml-2 w-2 h-2 rounded-full" style={{
        backgroundColor: level >= 4 ? '#2563eb' : level >= 3 ? '#60a5fa' : '#93c5fd'
      }} />
    </div>
  );
}