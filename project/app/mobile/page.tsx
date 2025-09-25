"use client";

import React from "react";

const mobileTechnologies = [
  { name: "React Native", level: 95, color: "bg-blue-500" },
  { name: "Flutter", level: 92, color: "bg-cyan-500" },
  { name: "Swift (iOS)", level: 90, color: "bg-orange-500" },
  { name: "Kotlin (Android)", level: 88, color: "bg-green-600" },
  { name: "Ionic", level: 80, color: "bg-purple-600" },
];

export default function MobileTechPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mobile App Development Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build high-performance cross-platform and native mobile apps. 
            From React Native and Flutter to Swift and Kotlin, our team ensures 
            your app is fast, scalable, and user-friendly.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Mobile Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {mobileTechnologies.map((tech, i) => (
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

        {/* Explanations Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Technology Explanations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">React Native</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                React Native is a popular framework for building cross-platform 
                mobile apps using JavaScript and React. It allows writing code 
                once and running it on both iOS and Android.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Flutter</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Flutter by Google uses Dart language to create beautiful, fast, 
                and native-like apps. It is known for its expressive UI and high 
                performance across platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Mobile Apps Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Years of Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100k+</div>
              <p className="text-gray-300">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
