import React from 'react';
import { Code2, Database, Globe, Palette, Server, Terminal } from 'lucide-react';
import SkillCard from './skills/SkillCard';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category) => (
            <SkillCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}