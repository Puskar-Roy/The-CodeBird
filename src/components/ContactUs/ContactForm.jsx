import { useRef, useState } from "react";
import { robot } from "../../assets";
import Button from "../Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    institute: "",
    contactNumber: "",
    role: "Teacher",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      institute: "",
      contactNumber: "",
      role: "Teacher",
      question: "",
    });
  };

  return (
    <div className="backdrop-blur-2xl p-10 rounded-lg shadow-lg">
      <div className="flex flex-wrap gap-5 items-center w-full mb-10">
        <div className="flex flex-wrap flex-1 gap-5 items-center min-w-[240px]">
          <div className="flex justify-center items-center bg-gray-100 h-[70px] w-[70px] rounded-[16px] overflow-hidden">
            <img src={robot} alt="Logo" className="w-[70px] h-[70px]" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white text-xl font-bold ">Contact Us</h2>
            <p className="text-sm text-gray-400 mt-2 ">
              Reach out with your questions or collaboration inquiries.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mb-10">
        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Institute</label>
          <input
            type="text"
            name="institute"
            value={formData.institute}
            onChange={handleChange}
            placeholder="Enter your institute"
            className="h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          >
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Member">Member</option>
          </select>
        </div>

        <div className="col-span-2 w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Your Question</label>
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            placeholder="Enter your query here"
            className="h-[100px] p-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="flex gap-4 col-span-2 justify-end">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;