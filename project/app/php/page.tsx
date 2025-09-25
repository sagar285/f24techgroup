"use client";

import React from "react";

const technologies = {
  PHP: [
    { name: "Laravel", level: 95, color: "bg-red-600" },
    { name: "Symfony", level: 90, color: "bg-blue-700" },
    { name: "CodeIgniter", level: 85, color: "bg-orange-500" },
    { name: "Yii2", level: 80, color: "bg-green-600" },
    { name: "CakePHP", level: 78, color: "bg-pink-600" },
  ],
};

export default function Page() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              PHP Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in PHP frameworks for scalable backend development.
            From Laravel and Symfony to CodeIgniter and CakePHP, our solutions
            are reliable, modern, and enterprise-ready.
          </p>
        </div>

        {/* PHP Technologies */}
        <div className="space-y-12">
          {Object.entries(technologies).map(([category, techs], idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category}
              </h3>

              {/* Grid of Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {techs.map((tech, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="text-center">
                      {/* Tech Name */}
                      <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                        {tech.name}
                      </h4>

                      {/* Progress Bar */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Expertise</span>
                          <span className="text-sm font-semibold text-gray-900">
                            {tech.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Explanations Section */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Technology Explanations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">PHP</h4>
              <p className="text-red-100 text-sm leading-relaxed">
                PHP is a popular backend scripting language designed for web
                development. It powers millions of websites and frameworks like
                Laravel, Symfony, and CodeIgniter for scalable applications.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Laravel</h4>
              <p className="text-red-100 text-sm leading-relaxed">
                Laravel is the most popular PHP framework known for elegant
                syntax, built-in authentication, and rapid application
                development. It simplifies backend coding and boosts developer
                productivity.
              </p>
            </div>
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">12+</div>
              <p className="text-gray-300">Years of PHP Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="text-gray-300">PHP Frameworks Covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">300+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Technical Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
