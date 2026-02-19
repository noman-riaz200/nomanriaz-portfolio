'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Code, 
  Briefcase, 
  MessageSquare, 
  Plus, 
  Edit, 
  Trash2,
  Settings,
  LogOut
} from 'lucide-react'
import { projects, skills, testimonials } from '@/lib/data'

type Tab = 'projects' | 'skills' | 'testimonials' | 'settings'

const tabs = [
  { id: 'projects' as Tab, label: 'Projects', icon: Briefcase, count: projects.length },
  { id: 'skills' as Tab, label: 'Skills', icon: Code, count: skills.length },
  { id: 'testimonials' as Tab, label: 'Testimonials', icon: MessageSquare, count: testimonials.length },
  { id: 'settings' as Tab, label: 'Settings', icon: Settings },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('projects')

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="font-heading font-bold text-xl">Admin</span>
        </div>

        <nav className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
              {tab.count && (
                <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-muted">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        <button className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-muted transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold capitalize">{activeTab}</h1>
              <p className="text-muted-foreground mt-1">
                Manage your {activeTab} content
              </p>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all">
              <Plus className="w-5 h-5" />
              Add New
            </button>
          </div>

          {/* Content based on active tab */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {activeTab === 'projects' && (
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Project</th>
                    <th className="text-left p-4 font-medium">Technologies</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-right p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-t border-border">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{project.title}</p>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-muted"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs rounded-full bg-muted">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          project.featured
                            ? 'bg-green-500/10 text-green-500'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {project.featured ? 'Featured' : 'Draft'}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'skills' && (
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Skill</th>
                    <th className="text-left p-4 font-medium">Category</th>
                    <th className="text-left p-4 font-medium">Level</th>
                    <th className="text-right p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => (
                    <tr key={skill.id} className="border-t border-border">
                      <td className="p-4 font-medium">{skill.name}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-muted capitalize">
                          {skill.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-24 h-2 rounded-full bg-muted overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-purple-600"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'testimonials' && (
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Client</th>
                    <th className="text-left p-4 font-medium">Company</th>
                    <th className="text-left p-4 font-medium">Rating</th>
                    <th className="text-right p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((testimonial) => (
                    <tr key={testimonial.id} className="border-t border-border">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{testimonial.company}</td>
                      <td className="p-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={i < testimonial.rating ? 'text-yellow-400' : 'text-muted'}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {activeTab === 'settings' && (
              <div className="p-8">
                <div className="max-w-2xl space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">General Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Site Name</label>
                        <input
                          type="text"
                          defaultValue="Muhammad Noman Riaz"
                          className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="nomanriaz.dev@gmail.com"
                          className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Theme Settings</h3>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 rounded-xl bg-muted hover:bg-primary/10 border-2 border-primary">
                        Light
                      </button>
                      <button className="px-6 py-3 rounded-xl bg-primary/10 border-2 border-primary text-primary">
                        Dark
                      </button>
                      <button className="px-6 py-3 rounded-xl bg-muted hover:bg-primary/10">
                        System
                      </button>
                    </div>
                  </div>

                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
