import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-green-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Dr. Rashmi H</h3>
            <p className="text-sm text-green-100 mt-1">
              Ayurvedic Consultant – Women’s Health & Pregnancy Care
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-4 items-center">
            {/* Email */}
            <a
              href="mailto:drrashmihadimani@gmail.com"
              className="w-10 h-10 rounded-full bg-green-700 hover:bg-green-600 transition flex items-center justify-center"
              aria-label="Email"
            >
              <Icon icon="mage:email" width={20} />
            </a>

            <a
              href="https://www.instagram.com/drrashmihadimani"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-700 hover:bg-green-600 transition flex items-center justify-center"
              aria-label="Instagram"
            >
              <Icon icon="mdi:instagram" width={20} />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100012192072494"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-700 hover:bg-green-600 transition flex items-center justify-center"
              aria-label="Facebook"
            >
              <Icon icon="ic:baseline-facebook" width={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-rashmi-hadimani-b4bb00360/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-700 hover:bg-green-600 transition flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" width={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-green-700 my-8"></div>
        <div className="flex justify-center">
          <div className="text-center text-sm text-green-100">
            <p>
              © {new Date().getFullYear()} Dr. Rashmi H. All rights reserved.
            </p>

            <div className="mt-2 flex items-center justify-center gap-3">
              <span>Developed by</span>

              <a
                href="https://portfolio-wij8.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition"
              >
                Vineet R J
              </a>

              <a
                href="https://github.com/vineetrj4196"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-green-700 hover:bg-green-600 transition flex items-center justify-center"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" width={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
