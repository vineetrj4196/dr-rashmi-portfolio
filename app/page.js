import Image from "next/image";
import DoctorPortfolio from "./components/Doctor-portfolio";
import Navbar from "./components/Navbar";
import AboutAccordion from "./components/AboutMe";
import ExperienceSection from "./components/Experience";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16 md:pt-14">
        <section
          id="home"
          className="min-h-screen flex items-center bg-gradient-to-b from-green-50 to-white pt-10"
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Dr. Rashmi H
              </h1>

              <h2 className="text-lg md:text-xl font-semibold text-green-700 mb-6">
                Ayurvedic Consultant – Women’s Health & Pregnancy Care
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                I provide holistic and evidence-based Ayurvedic care with a
                special focus on women’s health, reproductive wellness, and
                pregnancy-related concerns. My treatments are designed to
                address the root cause and support long-term well-being.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="px-6 py-3 bg-green-700 text-white rounded-lg font-medium hover:bg-green-800 transition"
                >
                  About Me
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 border border-green-700 text-green-700 rounded-lg font-medium hover:bg-green-50 transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                {/* Replace with your image */}
                <Image
                  src="/rashmi.jpg"
                  alt="Dr. Rashmi H"
                  width={200}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className=" bg-white">
          <AboutAccordion />
        </section>

        <section id="specialization" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Specialization
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                  ♀
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Women’s Health
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Comprehensive Ayurvedic care for hormonal balance, menstrual
                  health, and overall well-being of women.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                  ♡
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Reproductive Wellness
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ayurvedic treatment for PCOS, infertility, ovarian cysts, and
                  reproductive health concerns.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                  🤰
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pregnancy Care
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Holistic pregnancy care including antenatal guidance,
                  nutrition, lifestyle support, and postnatal recovery.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                  🌿
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Panchakarma Therapy
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Detoxification and rejuvenation therapies designed to restore
                  balance and improve long-term health.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                  🧘
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Lifestyle & Diet Guidance
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Personalized diet, daily routine, and yoga-based guidance to
                  support sustainable healing.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
                <div className="w-14 h-14 mb-4 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xl font-bold">
                  ⚖
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hormonal Balance
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ayurvedic solutions aimed at correcting hormonal imbalances by
                  addressing the root cause.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-white">
          <ExperienceSection />
        </section>

        <section id="contact" className=" bg-gray-50">
          <ContactSection />
        </section>
      </main>
    </>
  );
}
