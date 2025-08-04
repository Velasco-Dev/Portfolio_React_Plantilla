// src/app/components/About.js
'use client'
import { useState, useEffect, useRef } from 'react'

export default function About() {
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

  const stats = [
    { number: '20+', label: 'Proyectos Completados', icon: '🚀' },
    { number: '10+', label: 'Tecnologías Dominadas', icon: '💻' },
    { number: '2+', label: 'Años de Experiencia', icon: '⏱️' },
    { number: '100%', label: 'Compromiso', icon: '💪' },
  ]

  const journey = [
    {
      year: '2021',
      title: 'Inicio en Programación',
      description: 'Comencé mi journey en el desarrollo con HTML, CSS y JavaScript.',
      icon: '🌱'
    },
    {
      year: '2022',
      title: 'Desarrollo Full Stack',
      description: 'Me adentré en React y Python, construyendo mis primeras aplicaciones completas.',
      icon: '🔧'
    },
    {
      year: '2023',
      title: 'Desarrollo Mobile',
      description: 'Expandí mis habilidades hacia el desarrollo móvil con React Native y Android.',
      icon: '📱'
    },
    {
      year: '2024',
      title: 'Especialización',
      description: 'Me especialicé en arquitecturas modernas y mejores prácticas de desarrollo.',
      icon: '🎯'
    }
  ]

  return (
    <section id="sobre-mi" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Conoce más sobre mi journey como desarrollador y mi pasión por la tecnología
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white mb-4">
                ¡Hola! Soy Rubén Velasco 👋
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy un <span className="text-blue-400 font-semibold">Desarrollador Full Stack Jr</span> apasionado por crear soluciones tecnológicas innovadoras. Mi journey comenzó con la curiosidad de entender cómo funcionan las cosas, y esa curiosidad me llevó al mundo del desarrollo de software.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Me especializo en el desarrollo de aplicaciones web y móviles, utilizando tecnologías modernas como <span className="text-blue-400">React</span>, <span className="text-green-400">Python</span>, y <span className="text-purple-400">bases de datos</span> robustas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Lo que más me motiva es la capacidad de transformar ideas en realidad a través del código, creando experiencias digitales que realmente impacten en la vida de las personas.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h4 className="text-xl font-bold text-white mb-4">💡 Mis Valores</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <p className="text-gray-300 font-medium">Calidad</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="text-gray-300 font-medium">Innovación</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <p className="text-gray-300 font-medium">Colaboración</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="text-gray-300 font-medium">Aprendizaje</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image & Stats */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            {/* Profile Image Placeholder */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center border border-gray-700">
                <div className="text-8xl">👨‍💻</div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-gray-800/70 rounded-xl p-4 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mi Journey 🛤️
            </span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            {journey.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-gray-800/70 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <span className="text-blue-400 font-bold text-lg">{item.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            🎉 Datos Curiosos
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">☕</div>
              <p className="text-gray-300">Café es mi combustible para programar</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌙</div>
              <p className="text-gray-300">Trabajo mejor en las noches</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🎮</div>
              <p className="text-gray-300">Gaming me inspira para el UI/UX</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
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
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}