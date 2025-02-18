import { useRef, useState } from "react";
import { heroBackground } from "../../assets";
import Section from "../Section";
import { BackgroundCircles, BottomLine } from "../design/Hero";

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
      className="pt-[10rem] -mt-[4.5rem] relative overflow-hidden text-white"
      crosses
      crossesOffset="lg:translate-y-[4.5rem]"
      customPaddings
      id="hero"
    >
      <div
        className="container relative flex flex-col items-center justify-center"
        ref={parallaxRef}
      >
        <div className="relative max-w-3xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full">
            {}
            <div className="flex flex-col">
              <label className="text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-600"
              />
            </div>

            {}
            <div className="flex flex-col">
              <label className="text-lg">Institute</label>
              <input
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                placeholder="Enter your institute"
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-600"
              />
            </div>

            {}
            <div className="flex flex-col">
              <label className="text-lg">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-600"
              >
                <option value="Teacher">Teacher</option>
                <option value="Student">Student</option>
                <option value="Member">Member</option>
              </select>
            </div>

            {}
            <div className="flex flex-col">
              <label className="text-lg">Your doubts or questions</label>
              <textarea
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="Enter your query here"
                className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 h-24"
              />
            </div>

            {}
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
        <BackgroundCircles />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Contact_us;
