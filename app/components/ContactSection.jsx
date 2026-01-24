"use client";

import { useState } from "react";
import Image from "next/image";

const InputField = ({ label, icon, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  </div>
);

const TextAreaField = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      {...props}
      className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>
);

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setIsSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-green-700 px-8 py-6 text-center">
            <h3 className="text-xl font-semibold text-white">
              {isSuccess ? "Message Sent" : "Get in Touch"}
            </h3>
            <p className="text-green-100 text-sm mt-1">
              {isSuccess
                ? "Thank you for reaching out"
                : "I’ll get back to you as soon as possible"}
            </p>
          </div>

          {/* BODY */}
          <div className="p-8 md:p-12">
            {!isSuccess ? (
              /* FORM */
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  label="Your Name"
                  name="name"
                  type="text"
                  icon="👤"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label="Your Email"
                  name="email"
                  type="email"
                  icon="✉️"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <TextAreaField
                  label="Message"
                  name="message"
                  rows="4"
                  placeholder="Write your message here"
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-medium transition text-white ${
                    loading
                      ? "bg-green-400 cursor-not-allowed"
                      : "bg-green-700 hover:bg-green-800"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center text-center py-10 ">
                <Image
                  src="/email.jpeg" // add image in /public
                  alt="Message sent successfully"
                  width={200}
                  height={200}
                  className="mb-6"
                />

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Message Sent Successfully
                </h4>

                <p className="text-gray-600 max-w-md">
                  Thank you for contacting me. I have received your message and
                  will respond to you as soon as possible.
                </p>
              </div>
            )}

            <div className="my-10 border-t"></div>

            <p className="text-gray-600 text-sm text-center">
              Please reach out during working hours. Emergency medical services
              are not provided through this website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
