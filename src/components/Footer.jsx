import React from 'react'
import { footerData } from '../constants'

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              {footerData.logo}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {footerData.description}
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <ul className="space-y-2">
              {footerData.socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-slate-500 text-sm">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
