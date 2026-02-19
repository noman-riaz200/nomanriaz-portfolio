'use client'

import { motion } from 'framer-motion'
import { Award, Users, Coffee, Zap } from 'lucide-react'
import { personalInfo, stats } from '@/lib/data'

const statsData = [
  { icon: Award, label: 'Years Experience', value: stats.yearsExperience, suffix: '+' },
  { icon: Users, label: 'Happy Clients', value: stats.happyClients, suffix: '+' },
  { icon: Zap, label: 'Projects Completed', value: stats.projectsCompleted, suffix: '+' },
  { icon: Coffee, label: 'Cups of Coffee', value: stats.cupsOfCoffee, suffix: '+' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Passionate About Building <span className="text-gradient">Digital Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <div className="relative glass-card p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl block">🔶</span>
                        <span className="text-xs font-medium mt-1">Laravel</span>
                      </div>
                    </div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-accent-500/20 to-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl block">⚛️</span>
                        <span className="text-xs font-medium mt-1">ReactJS</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl block">▲</span>
                        <span className="text-xs font-medium mt-1">Next.js</span>
                      </div>
                    </div>
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-pink-500/20 to-primary/20 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl block">🗄️</span>
                        <span className="text-xs font-medium mt-1">Database</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Turning Ideas Into <span className="text-gradient">Reality</span>
            </h3>
            
            <div className="text-muted-foreground space-y-4">
              {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 pt-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-muted-foreground">Based in {personalInfo.location}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
