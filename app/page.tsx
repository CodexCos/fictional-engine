"use client";
import Image from "next/image";
import React, { useState } from "react";
import CarouselImage from "@/components/ExperienceCarousel";
import { Logos, ProjectImages } from "@/data/Raw";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleMouseEnter = (id: number) => {
    setHoveredItem(id);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div>
      {/* Home */}
      <section
        id="home"
        className="visible text-center sm:text-left grid grid-row-2 sm:grid-cols-2 place-items-center p-4 min-h-screen"
      >
        <div className="space-y-4">
          <div className="p-4 sm:p-0">
            <h1 className="text-2xl sm:text-4xl font-bold">
              Hi, I'm <span className="highlighted-text">Saurav KC</span>
            </h1>
            <h2 className="text-lg p-3 sm:p-0 md:p-0 font-semibold text-gray-600">
              Web Developer
            </h2>
          </div>
          <div className="sm:hidden grid place-items-center">
            <div className="div-radius bg-purple-500 h-60 w-60"></div>
          </div>
          <p className="font-mono p-4 sm:p-0 max-w-160">
            I enjoy taking ideas and turning them into smooth, functional web
            experiences that make people’s lives easier. I’m all about making
            sure every detail works just right, and I love collaborating to
            bring projects to life. Let’s work together to create something
            great.
          </p>
        </div>
        <div className="hidden sm:block md:w-10">
          <div className="div-radius bg-purple-500 h-60 w-60 "></div>
        </div>
      </section>

      {/* Skills */}
      <section id="skill" className="pb-12 lg:p-0 grid grid-rows-[auto_auto] gap-12">
        <div className="text-center p-4 sm:p-0">
          <h1 className="text-2xl sm:text-4xl font-bold">
            I'm open to join a{" "}
            <span className="highlighted-text">cross-functional</span> team
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mt-4">
            Let’s create solutions that matter — together.
          </h2>
        </div>
        {/* Skills/Bubbles */}
        <div className="flex flex-col items-center justify-center  sm:space-y-6">
          {[Logos.slice(0, 4), Logos.slice(4, 8), Logos.slice(8, 13)].map(
            (group, groupIndex) => (
              <div key={groupIndex} className="flex space-x-2 sm:space-x-6">
                {group.map((item) => (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={handleMouseLeave}
                    className={`ball sm:bg-[rgba(255,255,255,0.1)]
delay-${item.delay} floating-element ball-${item.id}`}
                  >
                    <div
                      className={`absolute ease-in-out duration-300 transition-all ${
                        hoveredItem === item.id
                          ? "opacity-100 -translate-y-8"
                          : "opacity-0"
                      }`}
                    >
                      {item.alt}
                    </div>

                    <Image
                      className={`rounded-full transition-all duration-300 transform ${
                        hoveredItem === item.id ? "translate-y-4" : ""
                      }`}
                      src={item.src}
                      alt={item.alt}
                      height={40}
                      width={40}
                      style={{ height: "auto", width: "auto" }}
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>

      {/* Experience */}
      <section
        id="project"
        className="min-h-screen space-y-6 p-4 flex flex-col justify-center items-center"
      >
        <div className="space-x-6 px-4 flex flex-col xl:flex-row items-center">
          <div className="space-y-6 text-center xl:text-left mr-0 lg:mr-6">
            <span className="highlighted-text font-semibold font-mono px-4">
              Featured Project
            </span>
            <h1 className="text-2xl sm:text-4xl font-semibold px-4">
              NEPAL SUPER LEAGUE
            </h1>
            <div className="xl:hidden">
              <CarouselImage images={ProjectImages.nslImages} />
            </div>
            <div className="max-w-200 background-div backdrop-blur-sm p-6 font-mono rounded-4xl">
              <p>
                The official website of the Nepal Super League (NSL) serves as
                the primary hub for Nepal's premier football competition. It
                offers match schedules, team rosters, player stats, live scores,
                and franchise highlights — all in a clean, modern interface.
              </p>
            </div>
          </div>
          <div className="hidden xl:block">
            <CarouselImage images={ProjectImages.nslImages} />
          </div>
        </div>
        <div>
          <div className="space-x-6 px-4 flex flex-col xl:flex-row items-center">
            <div className="hidden xl:block">
              <CarouselImage images={ProjectImages.shamanismImages} />
            </div>
            <div className="space-y-6 text-center xl:text-left">
              <span className="highlighted-text font-semibold font-mono px-4">
                Featured Project
              </span>
              <h1 className="text-2xl sm:text-4xl font-semibold px-4">
                PATH TO SHAMANISM
              </h1>
              <div className="xl:hidden">
                <CarouselImage images={ProjectImages.shamanismImages} />
              </div>
              <div className="max-w-200 background-div backdrop-blur-sm p-6 font-mono rounded-4xl">
                <p>
                  Path to Shamanism is a digital platform connecting seekers
                  with the wisdom of ancient healing traditions. Through
                  immersive storytelling, insightful blogs, and curated
                  magazines, it offers a peaceful space to explore the art of
                  shamanic practice and spiritual connection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen p-4 md:space-y-12 flex flex-col justify-center items-center">
        <div className="text-center p-4 sm:p-0">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Get in <span className="highlighted-text">Touch</span>.
          </h1>
          <h2 className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 mt-4">
            Send me a message below and I’ll get back to you shortly.
          </h2>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
