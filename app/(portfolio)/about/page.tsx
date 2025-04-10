"use client";

import { useState } from "react";
import Image from "next/image";
import { skills } from "@/lib/skills";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"story" | "skills" | "experience">(
    "story"
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 lg:sticky lg:top-20">
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-4 sm:mb-6">
            <div className="aspect-square relative">
              <Image
                src="/me2.jpg"
                alt="Profile picture"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                priority
              />
            </div>
          </div>
          <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-lg mb-3 sm:mb-4">Get in touch</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <a
              href="/chat"
              className="block text-center bg-zinc-800 hover:bg-zinc-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors text-sm sm:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-6">
            Hello, I&apos;m{" "}
            <span className="text-zinc-600">Lloyd Semblante</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">
            Developer & Designer passionate about creating meaningful digital
            experiences
          </h2>
          <div className="flex border-b mb-6 sm:mb-8 overflow-x-auto pb-1 hide-scrollbar">
            <button
              onClick={() => setActiveTab("story")}
              className={`py-2 sm:py-3 px-4 sm:px-6 font-medium transition-colors whitespace-nowrap ${
                activeTab === "story"
                  ? "border-b-2 border-zinc-600 text-zinc-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              My Story
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`py-2 sm:py-3 px-4 sm:px-6 font-medium transition-colors whitespace-nowrap ${
                activeTab === "skills"
                  ? "border-b-2 border-zinc-600 text-zinc-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`py-2 sm:py-3 px-4 sm:px-6 font-medium transition-colors whitespace-nowrap ${
                activeTab === "experience"
                  ? "border-b-2 border-zinc-600 text-zinc-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              Experience
            </button>
          </div>
          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
            {activeTab === "story" && (
              <div className="space-y-4">
                <p>
                  My journey into technology began with an insatiable curiosity
                  about how apps and digital tools are made. I&apos;ve always
                  been fascinated by the magic behind the screen—how code turns
                  into experiences that people interact with every day.
                </p>
                <p>
                  Outside the tech world, I&apos;m a passionate gamer and a
                  dedicated musician. Whether I&apos;m performing at gigs or
                  jamming with friends, music fuels my creativity and keeps me
                  grounded. I&apos;m also a huge pet lover—animals bring a
                  unique joy and comfort that inspire me both personally and
                  professionally.
                </p>
                <p>
                  For me, technology is not just about functionality; it&apos;s
                  about creating experiences that spark curiosity, bring joy,
                  and make life a little easier.
                </p>
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                  &quot;Technology should enhance human creativity, not replace
                  it.&quot;
                </blockquote>
              </div>
            )}
            {activeTab === "skills" && (
              <div>
                <h3 className="text-xl font-semibold mb-4 sm:mb-6">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-2 sm:p-3 rounded-lg flex flex-col items-center hover:shadow-md transition-shadow"
                    >
                      <div className="w-8 h-8 sm:w-12 sm:h-12 relative mb-1 sm:mb-2 flex items-center justify-center">
                        <img
                          src={skill.img}
                          alt={`${skill.title} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-center font-medium">
                        {skill.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-sm text-gray-600">
                    These skills represent my technical toolkit that I&apos;ve
                    developed throughout my career as a full-stack developer.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "experience" && (
              <div className="space-y-6 sm:space-y-8">
                <h3 className="text-xl font-semibold">Work Experience</h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="border-l-2 sm:border-l-4 border-zinc-500 pl-4 sm:pl-6 py-1 sm:py-2">
                    <h4 className="font-bold text-base sm:text-lg">
                      Fullstack Developer
                    </h4>
                    <p className="text-zinc-600 font-medium text-sm sm:text-base">
                      St. Peter&apos;s College • 2024 - Present
                    </p>
                    <p className="mt-2 text-sm sm:text-base">
                      Led the development of the school&apos;s Databank System
                      using NextJs, NodeJs, and Mysql. Collaborated with a team
                      of 5 to design and implement a user-friendly web app.
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-8 sm:mt-12">
                  Education
                </h3>
                <div className="border-l-2 sm:border-l-4 border-zinc-500 pl-4 sm:pl-6 py-1 sm:py-2">
                  <h4 className="font-bold text-base sm:text-lg">
                    Bachelor of Science in Information Technology
                  </h4>
                  <p className="text-zinc-600 font-medium text-sm sm:text-base">
                    St.Peter&apos;s College Iligan • 2022 - 2025
                  </p>
                  <p className="mt-2 text-sm sm:text-base">
                    Focused on web development, databases, and software.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
