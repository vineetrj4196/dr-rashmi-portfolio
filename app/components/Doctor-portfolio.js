import Image from "next/image";

export default function DoctorPortfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dr. Rashmi H
          </h1>

          <h2 className="text-lg font-semibold text-green-700 mb-6">
            Ayurvedic Consultant – Prasooti Tantra & Stree Roga
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            I am an experienced Ayurvedic consultant specializing in women’s
            health, reproductive wellness, and pregnancy care. With expertise in{" "}
            <span className="font-medium">Prasooti Tantra & Stree Roga</span>, I
            provide holistic and evidence-based Ayurvedic treatment tailored to
            each individual.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I treat conditions such as PCOS, infertility, ovarian cysts,
            menstrual irregularities, recurrent infections, hormonal imbalances,
            and pregnancy-related concerns, with a focus on long-term healing.
          </p>

          <p className="text-gray-700 leading-relaxed">
            My approach focuses on identifying and correcting the root cause
            through Ayurvedic medicines, Panchakarma therapies, diet and
            lifestyle correction, and yoga-based guidance — ensuring sustainable
            improvement and patient well-being.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/rashmi.jpg" // place image in /public
              alt="Dr. Rashmi H"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
