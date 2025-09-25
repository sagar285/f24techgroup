"use client";

import React from "react";

const technologies = {
  "JavaScript & Frontend": [
    { name: "React.js", level: 95, color: "bg-blue-400" },
    { name: "Next.js", level: 92, color: "bg-black" },
    { name: "TypeScript", level: 93, color: "bg-blue-700" },
    { name: "Vue.js", level: 88, color: "bg-green-500" },
    { name: "Angular", level: 90, color: "bg-red-600" },
    { name: "TensorFlow.js", level: 80, color: "bg-orange-600" }, // Added TensorFlow.js here
  ],
  Backend: [
    { name: "Node.js", level: 95, color: "bg-green-600" },
    { name: "Express.js", level: 93, color: "bg-gray-700" },
    { name: "MongoDB", level: 90, color: "bg-green-500" },
    { name: "PostgreSQL", level: 85, color: "bg-indigo-600" },
    { name: "Redis", level: 80, color: "bg-red-500" },
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JavaScript Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in JavaScript frameworks for both frontend and backend.
            From React and Next.js to Node.js and TensorFlow.js, our solutions
            are fast, scalable, and modern.
          </p>
        </div>

        {/* Categories */}
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
                      <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
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
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">Technology Explanations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">JavaScript</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                JavaScript is the most popular programming language for the web.
                It powers interactive user interfaces, dynamic websites, and is
                used on both the frontend (React, Vue, Angular) and backend
                (Node.js, Express).
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">TensorFlow.js</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                TensorFlow.js is a JavaScript library for building and running
                machine learning models directly in the browser or on Node.js.
                It brings AI capabilities like image recognition and natural
                language processing to JavaScript applications.
              </p>
            </div>
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Years of JavaScript Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <p className="text-gray-300">JS Frameworks Covered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
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
