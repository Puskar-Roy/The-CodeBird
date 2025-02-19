import { useRef, useState } from "react";
import { BackgroundCircles, BottomLine } from "../design/Hero";
import Section from "../Section";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact_us = () => {
  const parallaxRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    institute: "",
    role: "Teacher",
    question: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section
      className="pt-10 relative overflow-hidden text-white min-h-screen flex items-center justify-center"
      id="hero"
    >
      {}
      <div className="absolute inset-0 z-0">
        <BackgroundCircles />
      </div>

      <div className="relative z-10 container flex flex-col lg:flex-row items-start justify-between bg-black/90 p-8 rounded-lg max-w-4xl w-full border border-purple-500 shadow-[0_0_10px_rgba(128,0,128,0.7)] mt-[-225px]">
        {}
        <div className="lg:w-1/2 text-left flex flex-col items-start relative">
          {}
          <h2 className="text-4xl font-bold text-white relative mb-4">
            Contact Us
          </h2>

          <div className="mt-4">
            <p className="text-gray-400 mb-4">
              We are here to help you. If you have any doubts about our work,
              events, or anything else, reach out! For collaborations or
              inquiries, contact our team.
            </p>

            <ul className="text-gray-300 space-y-2 mb-4">
              <li>📍 Address: UIT, BURDWAN , WEST BENGAL</li>
              <li>📧 Email: thecodebird.uitbu@gmail.com</li>
              <li>📞 Phone: +123 456 7890</li>
            </ul>

            {}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/thecodebird"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-2xl transition-all drop-shadow-glow"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/thecodebird-coding-club-uit-bu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 text-2xl transition-all drop-shadow-glow"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/thecodebird.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-2xl transition-all drop-shadow-glow"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {}
        <div className="lg:w-1/2 bg-gray-900 p-4 rounded-lg w-full border border-white">
          <form className="space-y-4">
            <div>
              <label className="text-gray-300 text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-500 focus:border-white outline-none transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-white shadow-white"
              />
            </div>

            <div>
              <label className="text-gray-300 text-lg">Institute</label>
              <input
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                placeholder="Enter your institute"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-500 focus:border-white outline-none transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-white shadow-white"
              />
            </div>

            <div>
              <label className="text-gray-300 text-lg">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-500 focus:border-white outline-none transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-white shadow-white"
              >
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Member">Member</option>
              </select>
            </div>

            <div>
              <label className="text-gray-300 text-lg">
                Your doubts or questions
              </label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Enter your query here"
                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-500 focus:border-white outline-none h-24 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-white shadow-white"
              />
            </div>

            {}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white hover:bg-gray-300 text-black py-2 px-4 text-base rounded-md transition-all transform hover:scale-105 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {}
      <BottomLine />
    </Section>
  );
};

export default Contact_us;
