import React from "react";
import Image from "../../assets/crew.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const crewMembers = [
  {
    name: "Puskar Roy",
    roles: ["President(cum Treasurer)"],
    teams: ["Core Team"],
    image: Image,
    linkedin: "https://www.linkedin.com/in/puskar-roy/",
    github: "https://github.com/Puskar-Roy",
  },
  {
    name: "Saswata Som",
    roles: ["Secretary"],
    teams: ["Core Team"],
    image: Image,
    linkedin: "https://www.linkedin.com/in/saswata-som/",
    github: "https://github.com/Saswata-exe",
  },
  {
    name: "Shuvadeep Mondal",
    roles: ["Design Lead"],
    teams: ["Core Team"],
    image: Image,
    linkedin: "https://www.linkedin.com/in/shuvadeep-mondal-b6212b260/",
    github: "https://github.com/shuvadeepmondal",
  },
  {
    name: "Pujan Sarkar",
    roles: ["Media Lead"],
    teams: ["Core Team"],
    image: Image,
    linkedin: "https://www.linkedin.com/in/pujan-sarkar/",
    github: "https://github.com/Pujan-sarkar",
  },
  {
    name: "Nayanika Mukherjee",
    roles: ["Event Lead"],
    teams: ["Core Team"],
    image: Image,
    linkedin: "https://www.linkedin.com/in/nayanika-mukherjee-76a24027b/",
    github: "https://github.com/Nayanika1402",
  },
  {
    name: "Sayan Dutta",
    roles: ["Content Lead"],
    teams: ["Core Team"],
    image: Image,
    linkedin: "https://www.linkedin.com/in/sayan-dutta-exceptional98/",
    github: "https://github.com/puskarroy",
  },
];

const CrewContainer = ({ selectedCategory }) => {
  const filteredCrew =
    selectedCategory === "All Crew"
      ? crewMembers
      : crewMembers.filter((member) => member.teams.includes(selectedCategory));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCrew.map((member, index) => (
        <div
          key={index}
          className="relative bg-black text-white p-6 rounded-xl shadow-lg border border-purple-500 transition-transform duration-300 transform hover:scale-105"
        >
          {/* Thin Neon Border Effect */}
          <div className="absolute inset-0 rounded-xl border border-purple-500 shadow-[0_0_10px_rgba(128,0,128,0.7)]"></div>

          {/* Top Label */}
          <div className="absolute top-2 left-4 text-xs text-gray-400 bg-gray-900 px-2 py-1 rounded-lg">
            CORE
          </div>

          {/* Profile Image - Larger Size */}
          <div className="w-full flex items-center justify-center mt-4 relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-56 h-56 object-cover rounded-lg border border-gray-700 shadow-md"
            />
          </div>

          {/* Name and Role */}
          <h3 className="mt-4 text-xl font-semibold text-center">{member.name}</h3>
          <p className="text-gray-400 text-sm text-center">{member.roles.join(", ")}</p>

          {/* Social Icons */}
          <div className="flex justify-center mt-3 space-x-4">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <FaLinkedin size={22} />
              </a>
            )}
          </div>

          {/* Side Label */}
          <div className="absolute left-2 bottom-10 rotate-90 text-xs text-gray-500">
            CODEBIRD
          </div>
        </div>
      ))}
    </div>
  );
};

export default CrewContainer;
