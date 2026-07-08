import React from 'react'
import { heroData } from '../constants'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-slate-950 flex items-center pt-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {heroData.headline}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl">
              {heroData.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {heroData.ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    button.primary
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-violet-500/25'
                      : 'border border-slate-600 text-slate-300 hover:border-violet-500 hover:text-violet-400 hover:bg-slate-800/50'
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Abstract Glow Effect */}
          <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
            {/* Main glow box */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-2xl blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Inner box with gradient */}
              <div className="absolute inset-4 bg-gradient-to-br from-violet-500/30 to-cyan-500/30 rounded-2xl backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
                {/* Inner glow */}
                <div className="w-32 h-32 bg-gradient-to-br from-violet-400/50 to-cyan-400/50 rounded-xl blur-xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg blur-md opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-400 rounded-lg blur-md opacity-60"></div>
              
              {/* Decorative lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-slate-600/30 rounded-2xl rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-slate-600/20 rounded-2xl -rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
