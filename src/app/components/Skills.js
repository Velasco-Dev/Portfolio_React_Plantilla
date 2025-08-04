// src/app/components/Skills.js
'use client'
import { useState, useEffect, useRef } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'React Native', level: 75, color: 'from-cyan-500 to-cyan-600' },
        { name: 'HTML5', level: 90, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-500' },
        { name: 'Bootstrap', level: 80, color: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 80, color: 'from-green-500 to-green-600' },
        { name: 'Django', level: 75, color: 'from-green-600 to-green-700' },
        { name: 'JavaScript', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'PHP', level: 70, color: 'from-indigo-500 to-indigo-600' },
      ]
    },
    {
      title: 'Bases de Datos',
      icon: '🗄️',
      skills: [
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'MySQL', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'OracleDB', level: 70, color: 'from-red-500 to-red-600' },
      ]
    },
    {
      title: 'Mobile & Otros',
      icon: '📱',
      skills: [
        { name: 'Kotlin', level: 70, color: 'from-purple-500 to-purple-600' },
        { name: 'Java', level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'Git', level: 85, color: 'from-gray-500 to-gray-600' },
        { name: 'Android Studio', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-600' },
      ]
    }
  ]

  const SkillBar = ({ skill, index, categoryIndex }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms`
          }}
        ></div>
      </div>
    </div>
  )

  return (
    <section id="habilidades" ref={sectionRef} className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Habilidades
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones completas
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-gray-800/70 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${categoryIndex * 200}ms`
              }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              🚀 Siempre Aprendiendo
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              La tecnología evoluciona constantemente, y yo también. Me mantengo actualizado con las últimas tendencias y mejores prácticas para ofrecer soluciones modernas y eficientes.
            </p>
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
      `}</style>
    </section>
  )
}