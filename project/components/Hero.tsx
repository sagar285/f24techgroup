'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, Database, Smartphone, CheckCircle, Star } from 'lucide-react';

const HeroWithAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-10"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/80"></div>

      {/* Animated Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl floating"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12 md:space-y-16">
          
          {/* Logo Section with fade-in */}
          {/* <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <Image 
              src="https://pb.f24tech.com/assets/photos/LOGO.svg"
              alt="F24Tech Logo" 
              width={200} 
              height={60}
              className="h-16 md:h-20 w-auto brightness-0 invert opacity-90"
              priority
            />
          </div> */}

          {/* Main Heading with staggered animation */}
          <div className={`text-center space-y-8 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
    <span className="block mb-6">Transform Your Business with</span>
    <span className="block gradient-text-animated pb-4">
      Cutting-Edge Technology
    </span>
  </h1>

  {/* Subtitle */}
  <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 mt-8">
    Leading provider of <span className="text-blue-400 font-semibold">Java frameworks</span>, 
    <span className="text-purple-400 font-semibold">JavaScript</span>, 
    <span className="text-pink-400 font-semibold">Python</span>, 
    <span className="text-blue-300 font-semibold">PHP development</span>, 
    and comprehensive <span className="text-purple-300 font-semibold">CRM solutions</span>
  </p>
</div>

          {/* Trust Indicators with animation */}
          <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-8 py-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="flex items-center space-x-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm md:text-base">15+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm md:text-base">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-sm md:text-base">200+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="text-sm md:text-base">4.9/5 Rating</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className={`grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-12 px-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group glass rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 card-glow">
              <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
              <p className="text-gray-300 leading-relaxed">Expert development in Java, Python, PHP, and JavaScript frameworks tailored to your needs</p>
            </div>
            
            <div className="group glass rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 card-glow">
              <div className="bg-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Database className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">CRM Solutions</h3>
              <p className="text-gray-300 leading-relaxed">Zoho, NetSuite, Salesforce implementation and custom CRM development solutions</p>
            </div>
            
            <div className="group glass rounded-2xl p-8 hover:border-pink-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-2 card-glow">
              <div className="bg-pink-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile Apps</h3>
              <p className="text-gray-300 leading-relaxed">Cross-platform mobile applications for iOS and Android with native performance</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-16 px-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link 
              href="/get-quote" 
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link 
              href="/portfolio" 
              className="group border-2 border-white/40 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mt-20 px-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-center p-6 glass-dark rounded-2xl">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">500+</p>
              <p className="text-gray-300 text-sm md:text-base">Projects Completed</p>
            </div>
            <div className="text-center p-6 glass-dark rounded-2xl">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">200+</p>
              <p className="text-gray-300 text-sm md:text-base">Happy Clients</p>
            </div>
            <div className="text-center p-6 glass-dark rounded-2xl">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">50+</p>
              <p className="text-gray-300 text-sm md:text-base">Expert Team</p>
            </div>
            <div className="text-center p-6 glass-dark rounded-2xl">
              <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">15+</p>
              <p className="text-gray-300 text-sm md:text-base">Years Experience</p>
            </div>
          </div>

          {/* Keywords */}
          <div className={`mt-20 text-center px-4 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="inline-block glass-dark rounded-full px-8 py-4">
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                <span className="text-blue-400 font-semibold">F24Tech India</span> • 
                <span className="text-purple-400 font-semibold"> F24Tech Softwares</span> • 
                <span className="text-pink-400 font-semibold"> F24Tech Group</span> • 
                Java • Spring Boot • React.js • Angular • Vue.js • Django • Laravel
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithAnimations;