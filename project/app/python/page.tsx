"use client";

import React from "react";

const technologies = {
  Python: [
    { name: "Django", level: 95, color: "bg-green-600" },
    { name: "Flask", level: 90, color: "bg-gray-700" },
    { name: "FastAPI", level: 88, color: "bg-teal-600" },
    { name: "Pandas", level: 85, color: "bg-purple-600" },
    { name: "TensorFlow", level: 80, color: "bg-orange-600" },
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
            <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
              Python Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in Python frameworks for backend, AI, and data
            analysis. From Django and Flask to TensorFlow, we build scalable,
            intelligent, and modern solutions.
          </p>
        </div>

        {/* Python Technologies */}
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
                      <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
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
        <div className="mt-20 bg-gradient-to-r from-green-600 to-purple-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Technology Explanations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Python</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                Python is one of the most powerful and easy-to-learn languages.
                It is used for backend development, machine learning, data
                analysis, and automation.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">TensorFlow</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                TensorFlow is an open-source machine learning library built in
                Python. It helps in building AI models like image recognition,
                natural language processing, and deep learning systems.
              </p>
            </div>
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Years of Python Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-gray-300">Python Frameworks Covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
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
