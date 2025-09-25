"use client";

import React from "react";

const cloudSolutions = [
  { name: "AWS (Amazon Web Services)", level: 95, color: "bg-yellow-500" },
  { name: "Microsoft Azure", level: 92, color: "bg-blue-600" },
  { name: "Google Cloud Platform (GCP)", level: 90, color: "bg-red-500" },
  { name: "Firebase", level: 88, color: "bg-orange-500" },
  { name: "DigitalOcean", level: 85, color: "bg-indigo-500" },
  { name: "Heroku", level: 80, color: "bg-purple-600" },
];

export default function CloudSolutionsPage() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cloud Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide scalable, secure, and reliable cloud solutions leveraging 
            top platforms like AWS, Azure, and Google Cloud. Our expertise ensures 
            your applications run efficiently across any cloud environment.
          </p>
        </div>

        {/* Cloud Technology Cards */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Core Cloud Platforms
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudSolutions.map((cloud, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center">
                  {/* Cloud Name */}
                  <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {cloud.name}
                  </h4>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Expertise</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {cloud.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${cloud.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${cloud.level}%` }}
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
          <h3 className="text-3xl font-bold mb-6 text-center">Cloud Explanations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">AWS</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Amazon Web Services (AWS) is the world’s most widely adopted cloud 
                platform, offering infrastructure, storage, databases, and AI/ML 
                services to power modern applications.
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-2">Google Cloud</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                Google Cloud Platform (GCP) delivers cloud computing, storage, and 
                advanced AI/ML solutions, enabling businesses to innovate and scale 
                seamlessly across the globe.
              </p>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <p className="text-gray-300">Cloud Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-gray-300">Cloud Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="text-gray-300">Certified Experts</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <p className="text-gray-300">Cloud Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
