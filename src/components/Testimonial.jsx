import React from 'react'
import { testimonialsData } from '../constants'

const Testimonial = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {testimonialsData.title}
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {testimonialsData.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-5xl text-violet-500/30 mb-4 font-serif">"</div>

              {/* Testimonial Text */}
              <p className="text-slate-300 leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
