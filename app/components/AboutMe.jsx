"use client";

import { useState } from "react";
import Image from "next/image";
import { Exo_2 } from "next/font/google";

export default function AboutAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center  mb-10">
          About Me
        </h2>

        <div className="max-w-7xl space-y-5 flex flex-col justify-center ">
          {/* Accordion 1 */}
          <div className="border border-gray-300 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggle(0)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800"
            >
              Who I Am
              <span className="text-xl">{openIndex === 0 ? "−" : "+"}</span>
            </button>

            {openIndex === 0 && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <Image
                  src="/panchakarma.jpg"
                  alt="Ayurvedic consultation"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover"
                />

                <p className="text-gray-700 leading-relaxed">
                  I am an experienced Ayurvedic consultant with a strong focus
                  on women’s health, reproductive wellness, and pregnancy care.
                  With specialized training in{" "}
                  <span className="font-medium">
                    Prasooti Tantra & Stree Roga
                  </span>
                  , I follow a holistic and evidence-based approach that is
                  personalized for each patient.
                </p>
              </div>
            )}
          </div>

          {/* Accordion 2 */}
          <div className="border border-gray-300 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggle(1)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 "
            >
              Conditions I Treat
              <span className="text-xl">{openIndex === 1 ? "−" : "+"}</span>
            </button>

            {openIndex === 1 && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <Image
                  src="/treat.jpg"
                  alt="Women health Ayurveda"
                  width={350}
                  height={450}
                  className="rounded-xl object-cover"
                />

                <p className="text-gray-700 leading-relaxed">
                  My key areas of clinical expertise include infertility, PCOS,
                  menstrual disorders, hormonal imbalance, preconception
                  planning, and Garbhasanskar.
                </p>
              </div>
            )}
          </div>

          {/* Accordion 3 */}
          <div className="border border-gray-300 rounded-2xl overflow-hidden">
            <button
              onClick={() => toggle(2)}
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800"
            >
              My Treatment Approach
              <span className="text-xl">{openIndex === 2 ? "−" : "+"}</span>
            </button>

            {openIndex === 2 && (
              <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <Image
                  src="/AYUR.jpg"
                  alt="Panchakarma therapy"
                  width={300}
                  height={200}
                  className="rounded-xl object-cover"
                />

                <p className="text-gray-700 leading-relaxed">
                  My treatment philosophy integrates Ayurvedic medicines,
                  Panchakarma therapies, diet and lifestyle modification, and
                  yoga-based guidance. By combining traditional wisdom with a
                  patient-centered approach, I aim to support natural healing,
                  overall well-being, and sustained health.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
