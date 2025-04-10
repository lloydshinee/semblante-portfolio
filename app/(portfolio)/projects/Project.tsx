"use client";

import { useState, useEffect } from "react";

export function Project({
  project,
}: {
  project: {
    title: string;
    description: string;
    tags: string[];
    images: string[];
    link: string;
  };
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50 p-8 w-full flex flex-col md:flex-row gap-6 rounded-xl shadow-md">
      {/* Image Carousel */}
      <div className="flex-1 relative rounded-lg overflow-hidden shadow-lg">
        <div className="relative h-96 w-full">
          {project.images.map((img, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-blue-500 w-4"
                    : "bg-white bg-opacity-70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-white w-full md:w-96 p-6 rounded-lg flex flex-col justify-between shadow-md border border-gray-100">
        <div>
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-center"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
