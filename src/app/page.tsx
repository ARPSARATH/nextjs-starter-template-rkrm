import React, { useState, useEffect } from 'react';
import { ShoppingCart, Zap, Package, Coffee, Monitor, Printer, Droplets, Headphones, ChevronRight, Check } from 'lucide-react';

export default function OfficeBuddyLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: Package, title: "Premium Stationery", desc: "High-quality office supplies delivered" },
    { icon: Monitor, title: "Tech Rentals", desc: "Computers & equipment on demand" },
    { icon: Coffee, title: "Office Essentials", desc: "Copiers, dispensers & more" }
  ];

  const products = [
    { icon: Printer, name: "Copiers & Printers", price: "From ₹2,500/mo" },
    { icon: Droplets, name: "Water Dispensers", price: "From ₹800/mo" },
    { icon: Monitor, name: "Computers & Laptops", price: "From ₹3,500/mo" },
    { icon: Package, name: "Office Furniture", price: "From ₹1,200/mo" },
  ];

  const features = [
    "24/7 Support",
    "Free Maintenance",
    "Flexible Plans",
    "Quick Delivery"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">Office</span>
              <span className="text-blue-600">Buddy</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-8 animate-fade-in">
              <Zap className="w-4 h-4" />
              Smart Office Solutions
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="inline-block animate-slide-up">Put your office</span>
              <br />
              <span className="inline-block animate-slide-up bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" style={{animationDelay: '0.1s'}}>
                on Autopilot
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              Everything your office needs—stationery, tech rentals, and essential equipment—delivered seamlessly
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{animationDelay: '0.5s'}}>
              <button className="group px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-105">
                View Products
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 justify-center mt-16 animate-fade-in" style={{animationDelay: '0.7s'}}>
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What we offer</h2>
            <p className="text-xl text-gray-600">Complete office solutions under one roof</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                  activeService === idx
                    ? 'bg-white shadow-xl scale-105'
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                }`}
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                  activeService === idx ? 'bg-blue-600' : 'bg-gray-100'
                }`}>
                  <service.icon className={`w-8 h-8 ${activeService === idx ? 'text-white' : 'text-gray-600'}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Popular Rentals</h2>
            <p className="text-xl text-gray-600">Flexible plans for every business size</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <product.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your office?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join hundreds of businesses that trust Office Buddy
          </p>
          <button className="group px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl hover:scale-105">
            Start Free Trial
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">
            <span className="text-white">Office</span>
            <span className="text-blue-500">Buddy</span>
          </div>
          <p className="text-sm">© 2025 Office Buddy. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
