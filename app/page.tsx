'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [hoveredStep, setHoveredStep] = useState(null)
  const [formData, setFormData] = useState({ email: '' })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const steps = [
    { number: '01', title: 'Connect Your Fields', description: 'Add your fields and crop data to our platform', icon: '??', details: 'GPS mapping, soil sensors, and satellite imagery integration' },
    { number: '02', title: 'AI Analysis', description: 'Our AI analyzes patterns and predicts outcomes', icon: '??', details: 'Machine learning models process historical and real-time data' },
    { number: '03', title: 'Get Insights', description: 'Receive actionable recommendations and alerts', icon: '??', details: 'Real-time notifications and predictive analytics dashboard' },
    { number: '04', title: 'Optimize Yield', description: 'Implement AI suggestions for maximum results', icon: '??', details: 'Track improvements and ROI with detailed analytics' }
  ]

  const testimonials = [
    { name: 'Dr. Sarah Kimani', role: 'Farm Director, Kenya', quote: 'AgriNova increased our yield by 40% in just one season!', image: '/testimonial1.jpg', rating: 5 },
    { name: 'James Mwangi', role: 'AgriTech CEO', quote: 'The AI predictions are incredibly accurate. Game-changer!', image: '/testimonial2.jpg', rating: 5 },
    { name: 'Grace Omondi', role: 'Smallholder Farmer', quote: 'Finally, technology that works for small-scale farmers.', image: '/testimonial3.jpg', rating: 5 }
  ]

  const partners = [
    { name: 'AGRA', logo: '/agra.png', description: 'Alliance for Green Revolution' },
    { name: 'FAO', logo: '/fao.png', description: 'Food and Agriculture Organization' },
    { name: 'USAID', logo: '/usaid.png', description: 'US Agency for Development' },
    { name: 'World Bank', logo: '/worldbank.png', description: 'Global Development Partner' },
    { name: 'IFAD', logo: '/ifad.png', description: 'International Fund for Ag Development' },
    { name: 'UNDP', logo: '/undp.png', description: 'UN Development Programme' }
  ]

  const faqs = [
    { q: 'How does AI predict crop risks?', a: 'Our machine learning models analyze weather patterns, soil data, and historical crop performance to predict potential risks with 95% accuracy.' },
    { q: 'Is there a mobile app available?', a: 'Yes! AgriNova is available on iOS and Android with full functionality for field agents.' },
    { q: 'What kind of support do you offer?', a: '24/7 technical support, onboarding training, and dedicated account managers for enterprise clients.' },
    { q: 'Can I integrate with existing farm management systems?', a: 'Absolutely! We offer API integration with major farm management platforms.' }
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing! Check your email for updates.')
    setFormData({ email: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 backdrop-blur-lg bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-3xl animate-float">??</div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">AgriNova</h1>
              <span className="text-xs bg-gradient-to-r from-green-500 to-blue-500 px-2 py-1 rounded-full text-white">AI-Powered</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-white/80 hover:text-white transition">Features</Link>
              <Link href="#how-it-works" className="text-white/80 hover:text-white transition">How It Works</Link>
              <Link href="#testimonials" className="text-white/80 hover:text-white transition">Testimonials</Link>
              <Link href="#pricing" className="text-white/80 hover:text-white transition">Pricing</Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/login" className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition">
                Sign In
              </Link>
              <Link href="/login" className="px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium hover:shadow-lg transition-all transform hover:scale-105">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll" id="hero">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-white/80 text-sm">?? Cutting-Edge Agricultural Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Empowering Farmers with
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Smart Technology</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              AgriNova integrates cutting-edge technology with agricultural expertise to deliver comprehensive solutions for modern farming challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                Start Free Trial Today
              </Link>
              <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Tracker Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Growth Tracker</h2>
            <p className="text-white/70">Real-time Platform Growth Metrics</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">??</div>
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-white/60 text-sm">Active Farms</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">??</div>
              <div className="text-3xl font-bold text-white">500K+</div>
              <div className="text-white/60 text-sm">Acres Managed</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">??</div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-white/60 text-sm">Prediction Accuracy</div>
            </div>
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">??</div>
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-white/60 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-white/80 text-sm uppercase tracking-wider">Trusted by Leading Agricultural Organizations</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="text-3xl mb-2">??</div>
                  <div className="text-white font-semibold text-sm">{partner.name}</div>
                  <div className="text-white/50 text-xs">{partner.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How AgriNova Works */}
      <section id="how-it-works" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How AgriNova Works</h2>
            <p className="text-white/70 text-lg">Hover over steps to explore advanced features</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredStep(idx)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className={`glass-card rounded-2xl p-6 transition-all duration-300 ${hoveredStep === idx ? 'transform -translate-y-2 bg-white/20' : ''}`}>
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="text-3xl font-bold text-gradient mb-2">{step.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                  {hoveredStep === idx && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-white/90 text-xs">{step.details}</p>
                    </div>
                  )}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-white/30 text-2xl">?</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative z-10 py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-white/70">Trusted by farmers and agricultural organizations worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-4">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  {"?".repeat(testimonial.rating)}{"?".repeat(5 - testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section id="features" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Features</h2>
            <p className="text-white/70">Make an impact with cutting-edge technology</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-4">??</div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Monitoring</h3>
              <p className="text-white/70">Real-time crop health monitoring with AI-powered anomaly detection</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-4">??</div>
              <h3 className="text-xl font-semibold text-white mb-2">Precision Irrigation</h3>
              <p className="text-white/70">Smart water management system optimizing irrigation schedules</p>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="text-4xl mb-4">??</div>
              <h3 className="text-xl font-semibold text-white mb-2">Market Insights</h3>
              <p className="text-white/70">Real-time market prices and demand forecasting for better selling decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Start Your Journey Today</h2>
            <p className="text-white/70 mb-8">Join thousands of farmers already using AgriNova</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold hover:shadow-2xl transition-all">
                Schedule a Demo
              </Link>
              <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all">
                Download Brochure
              </button>
              <button className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-white/70">We're here to help you succeed</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-lg bg-black/30 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl animate-float">??</div>
                <span className="text-white font-bold text-xl">AgriNova</span>
              </div>
              <p className="text-white/60 text-sm">Empowering farmers with smart technology for sustainable agriculture and maximum yields.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white/60 hover:text-white">??</a>
                <a href="#" className="text-white/60 hover:text-white">??</a>
                <a href="#" className="text-white/60 hover:text-white">??</a>
                <a href="#" className="text-white/60 hover:text-white">??</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="#" className="hover:text-white transition">Home</Link></li>
                <li><Link href="#features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition">How It Works</Link></li>
                <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition">Testimonials</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Our Products</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><Link href="#" className="hover:text-white transition">Smart Monitoring</Link></li>
                <li><Link href="#" className="hover:text-white transition">Precision Irrigation</Link></li>
                <li><Link href="#" className="hover:text-white transition">Market Insights</Link></li>
                <li><Link href="#" className="hover:text-white transition">Financial Services</Link></li>
                <li><Link href="#" className="hover:text-white transition">Crop Advisory</Link></li>
                <li><Link href="#" className="hover:text-white transition">Mobile App</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li>?? Nairobi, Kenya</li>
                <li>?? +254 714 694 493</li>
                <li>?? karaninicholas700@gmail.com</li>
              </ul>
              <form onSubmit={handleSubscribe} className="mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 mb-2"
                  required
                />
                <button type="submit" className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
            <p>? 2026 AgriNova. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .text-gradient {
          background: linear-gradient(135deg, #4CAF50, #2196F3);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  )
}
