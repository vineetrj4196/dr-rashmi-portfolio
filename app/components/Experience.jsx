"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ExperienceSection() {
  const images = ["/image1.jpg", "/image2.jpg", "/image3.jpg", "/image6.jpg"];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="experience" className=" ">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
          Experience
        </h2>

        <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: IMAGE SLIDER */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-md h-[320px] rounded-2xl overflow-hidden">
              {images.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt="Ayurvedic clinical experience"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* DOT INDICATORS */}
            <div className="flex gap-3 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    current === index
                      ? "bg-green-700 scale-110"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: CONTENT (UNCHANGED) */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Ayurvedic Consultant
            </h3>

            <p className="text-green-700 font-medium mb-1">
              Taranath Government Ayurvedic Medical College
            </p>

            <p className="text-gray-600 text-sm mb-6">
              Bellary, Karnataka · Currently Working
            </p>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                Actively involved in clinical practice, academic activities, and
                comprehensive patient care with a focus on women’s health and
                reproductive disorders.
              </li>

              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                Highly experienced in infertility management and
                Garbhasamskara-based pregnancy care, supporting both physical
                and emotional well-being throughout pregnancy.
              </li>

              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                Authored and published multiple scientific research articles on
                women’s health in reputed national and international journals,
                reflecting a strong commitment to evidence-based Ayurveda.
              </li>

              <li className="flex gap-3">
                <span className="text-green-700 font-bold">✓</span>
                Actively engaged in organizing and conducting awareness programs
                for girls and women, focusing on menstrual health, reproductive
                wellness, preventive care, and lifestyle education.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
