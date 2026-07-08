import React from 'react'
import { aboutData } from '../constants'

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {aboutData.title}
              </span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              {aboutData.description}
            </p>
          </div>

          {/* Right Column - Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {aboutData.statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
