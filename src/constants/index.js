// Navigation menu data
export const navMenu = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

// Hero section data
export const heroData = {
  headline: 'Transform Your Digital Presence',
  subheadline: 'We craft stunning digital experiences that drive growth and innovation for forward-thinking brands.',
  ctaButtons: [
    { text: 'Get Started', href: '#contact', primary: true },
    { text: 'View Portfolio', href: '#portfolio', primary: false },
  ],
};

// Services section data
export const servicesData = {
  title: 'Our Services',
  subtitle: 'Comprehensive digital solutions tailored to your business needs',
  services: [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive interfaces that enhance user engagement and drive conversions through thoughtful design.',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns that increase visibility, attract customers, and grow your online presence.',
      icon: '📈',
    },
  ],
};

// Testimonials section data
export const testimonialsData = {
  title: 'What Our Clients Say',
  subtitle: 'Trusted by businesses worldwide to deliver exceptional results',
  testimonials: [
    {
      text: 'Working with this agency was a game-changer for our business. They delivered a stunning website that exceeded our expectations and helped us increase our online conversions by 150%.',
      name: 'Sarah Johnson',
      position: 'CEO of TechCorp',
    },
    {
      text: 'The team\'s attention to detail and creative approach to our UI/UX design was impressive. They truly understood our vision and brought it to life in ways we never imagined.',
      name: 'Michael Chen',
      position: 'Founder of StartupXYZ',
    },
    {
      text: 'Their digital marketing strategies transformed our online presence. We saw a significant increase in brand awareness and customer engagement within just three months.',
      name: 'Emily Rodriguez',
      position: 'Marketing Director at GrowthCo',
    },
  ],
};

// Footer section data
export const footerData = {
  logo: 'DigitalAgency',
  description: 'Crafting digital experiences that drive growth and innovation for forward-thinking brands.',
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
  ],
  socialLinks: [
    { name: 'Instagram', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
  copyright: '© 2026 DigitalAgency. All rights reserved.',
};

// About section data
export const aboutData = {
  title: 'About Our Agency',
  description: 'We are a passionate team of designers, developers, and strategists dedicated to transforming your digital presence. With years of experience and a commitment to excellence, we deliver innovative solutions that help businesses thrive in the digital landscape.',
  statistics: [
    { value: '99+', label: 'Projects Done' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
  ],
};

// Contact section data
export const contactData = {
  title: 'Get In Touch',
  subtitle: 'Have a project in mind? Let\'s discuss how we can help you achieve your goals.',
  formFields: [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us about your project' },
  ],
};
