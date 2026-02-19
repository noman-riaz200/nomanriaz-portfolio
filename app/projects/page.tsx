import { Metadata } from 'next'
import { projects } from '../../lib/data'
import ProjectsGrid from '../../components/sections/ProjectsGrid'

export const metadata: Metadata = {
  title: 'All Projects | Muhammad Noman Riaz',
  description: 'Browse through all the projects I have worked on, including Laravel, React, Next.js, and other modern web technologies.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom px-4 md:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold mt-2">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are all the projects I've worked on, showcasing my expertise in building modern web applications with Laravel, React, Next.js, and more.
            </p>
            <div className="mt-4 text-primary font-semibold">
              Total Projects: {projects.length}
            </div>
          </div>

          {/* Projects Grid */}
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </div>
  )
}
