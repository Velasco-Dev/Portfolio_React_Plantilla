// src/app/components/Projects.js
'use client'
import { useState } from 'react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('todos')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de e-commerce con React y Django, incluyendo sistema de pagos, gestión de inventario y panel administrativo.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Django', 'MySQL', 'CSS3'],
      category: 'fullstack',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación móvil para gestión de tareas con React Native, sincronización en tiempo real y notificaciones push.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'MongoDB', 'JavaScript'],
      category: 'mobile',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfolio Web',
      description: 'Sitio web responsivo desarrollado con HTML5, CSS3 y JavaScript vanilla, optimizado para SEO y rendimiento.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'frontend',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 4,
      title: 'API REST Sistema Inventario',
      description: 'API RESTful robusta para sistema de inventario desarrollada con Python Django y base de datos Oracle.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Django', 'OracleDB'],
      category: 'backend',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para análisis de datos con React, gráficos dinámicos y filtros avanzados.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Bootstrap', 'PHP', 'MySQL'],
      category: 'fullstack',
      github: '#',
      demo: '#',
      featured: true
    },
    {
      id: 6,
      title: 'Mobile Banking App',
      description: 'Aplicación bancaria móvil desarrollada en Kotlin para Android con funciones de transferencias y consultas.',
      image: '/api/placeholder/600/400',
      technologies: ['Kotlin', 'Java', 'Android Studio'],
      category: 'mobile',
      github: '#',
      demo: '#',
      featured: false
    }
  ]

  const filters = [
    { id: 'todos', label: 'Todos los Proyectos' },
    { id: 'featured', label: 'Destacados' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'todos') return true
    if (activeFilter === 'featured') return project.featured
    return project.category === activeFilter
  })

  const ProjectCard = ({ project }) => (
    <div className="group bg-gray-800/70 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10"></div>
        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
          <div className="text-6xl opacity-20">🚀</div>
        </div>
        
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <div className="flex space-x-4">
            <a
              href={project.github}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={project.demo}
              className="p-3 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-30">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              ⭐ Destacado
            </span>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-4">
          <a
            href={project.github}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Código
          </a>
          <a
            href={project.demo}
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="proyectos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web y móvil
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-gray-500">
              Selecciona otra categoría para ver más proyectos
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              ¿Te interesa trabajar conmigo?
            </h3>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevos desafíos y oportunidades de colaboración. 
              ¡Hablemos sobre tu próximo proyecto!
            </p>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}