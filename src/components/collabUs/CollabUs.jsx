import { useState } from "react";
import { robot } from "../../assets";
import Button from "../Button";

const CollabUs = () => {
  const [formData, setFormData] = useState({
    organization: "",
    event: "",
    email: "",
    role: "Partner",
    message: "",
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
      organization: "",
      event: "",
      email: "",
      role: "Partner",
      message: "",
    });
  };

  return (
    <div className="backdrop-blur-2xl p-10 rounded-lg shadow-lg max-w-2xl mx-auto mt-20">
      <div className="flex flex-wrap gap-5 items-center w-full mb-10">
        <div className="flex flex-wrap flex-1 gap-5  items-center min-w-[240px]">
          <div className="flex justify-center items-center bg-gray-100 h-[70px] w-[70px] rounded-[16px] overflow-hidden">
            <img src={robot} alt="Logo" className="w-[70px] h-[70px]" />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-white text-xl font-bold">Collaborate With Us</h2>
            <p className="text-sm text-gray-400 mt-2">Let's build something amazing together!</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mb-10">
        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Organization</label>
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Enter your organization name"
            className="h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Event</label>
          <input
            type="text"
            name="event"
            value={formData.event}
            onChange={handleChange}
            placeholder="Enter event name"
            className="h-[50px] px-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
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
            <option value="Partner">Partner</option>
            <option value="Organizer">Organizer</option>
            <option value="Sponsor">Sponsor</option>
          </select>
        </div>

        <div className="col-span-2 w-full relative">
          <label className="text-sm text-white absolute top-0 left-0 mt-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message here"
            className="h-[100px] p-4 text-slate-900 bg-white rounded-lg border border-violet-200 w-full mt-8"
          />
        </div>

        <div className="flex gap-4 col-span-2 justify-end">
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

export default CollabUs;
