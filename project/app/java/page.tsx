"use client";

import React from "react";

const technologies = {
  "Java Frameworks": [
    { name: "Spring Boot", level: 95, color: "bg-green-500" },
    { name: "Hibernate", level: 90, color: "bg-orange-500" },
    { name: "Spring MVC", level: 92, color: "bg-green-600" },
    { name: "JSF", level: 85, color: "bg-blue-500" },
    { name: "Struts", level: 80, color: "bg-red-500" },
  ],
  "Other Java Technologies": [
    { name: "Java SE (Core)", level: 97, color: "bg-yellow-500" },
    { name: "Java EE", level: 92, color: "bg-indigo-600" },
    { name: "Maven", level: 88, color: "bg-purple-600" },
    { name: "Gradle", level: 86, color: "bg-pink-500" },
    { name: "TensorFlow (Java API)", level: 80, color: "bg-orange-600" },
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
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Java Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in Java frameworks and tools for building enterprise,
            scalable, and modern applications. From Spring Boot to TensorFlow
            (Java API), our stack ensures performance and reliability.
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
        <div className="mt-20 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Technology Explanations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Java</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                Java is one of the most powerful and versatile programming
                languages. It is widely used for enterprise applications, mobile
                development (Android), and large-scale systems thanks to its
                performance and scalability.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">TensorFlow (Java API)</h4>
              <p className="text-green-100 text-sm leading-relaxed">
                TensorFlow provides a Java API that allows developers to run and
                deploy machine learning models in Java-based applications. This
                enables AI-powered solutions directly in enterprise software.
              </p>
            </div>
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">12+</div>
              <p className="text-gray-300">Years of Java Expertise</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-gray-300">Java Frameworks & Tools</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Enterprise Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
