import React from 'react'
import { servicesData } from '../constants'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {servicesData.title}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {servicesData.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
