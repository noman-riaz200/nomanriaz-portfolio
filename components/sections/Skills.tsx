'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Wrench, Server, CheckCircle2 } from 'lucide-react'
import { skills } from '@/lib/data'

const categories = [
  { id: 'all', label: 'All Skills', icon: Code },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'tools', label: 'Tools', icon: Wrench },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I have extensive experience working with a wide range of technologies, from frontend frameworks to backend systems and databases.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-6 hover:glow-effect-hover transition-all duration-300 group"
            >
              {/* Skill Name */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <CheckCircle2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Progress Bar */}
              <div className="skill-bar mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="skill-bar-fill"
                />
              </div>

              {/* Level */}
              <p className="text-sm text-muted-foreground">
                {skill.level}% proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
