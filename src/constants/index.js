import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitIcon7,
  benefitIcon8,
  benefitIcon9,

  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  twitter,
  linkedin,
  m2,
  m1,
  m3,
  robot,
  service3,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Events",
    url: "/event",
  },
  {
    id: "1",
    title: "About Us",
    url: "/features",
  },
  {
    id: "2",
    title: "Crew",
    url: "/crew",
  },
  {
    id: "3",
    title: "Contact Us",
    url: "/contact",
  },
  {
    id: "4",
    title: "New account",
    url: "/register",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [m1, m2, m3, robot];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Freshers Orientation",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

// export const collabText =
//   "";

// export const collabContent = [
//   {
//     id: "0",
//     title: "Mass Participation",
//     text: collabText,
//   },
//   {
//     id: "1",
//     title: "Promotion & Awareness",
//   },
//   {
//     id: "2",
//     title: "Exciting Sessions",
//   },
// ];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 50,
    height: 54,
    
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 50,
    height: 54,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 50,
    height: 54,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 50,
    height: 54,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 50,
    height: 54,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 50,
    height: 54,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 50,
    height: 54,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 50,
    height: 54,
  },
];

export const galleryImages = [
  {
    id: "g1",
    title: "Team Building Retreat",
    date: "February 5, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Our team enjoying activities at the annual retreat.",
    status: "past",
  },
  {
    id: "g2",
    title: "Product Design Workshop",
    date: "April 18, 2023",
    imageUrl: "/placeholder.svg?height=400&width=600",
    description: "Collaborative workshop for our new product design.",
    status: "past",
  },
  {
    id: "g3",
    title: "Customer Appreciation Day",
    date: "July 22, 2023",
    imageUrl: "service3",
    description: "Special event to thank our loyal customers.",
    status: "present",
  },
  {
    id: "g4",
    title: "Tech Meetup",
    date: "November 10, 2023",
    imageUrl: service3,
    description: "Networking event with industry professionals.",
    status: "upcoming",
  },
]



export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "AI/ML/DS",
    text: "AI, ML, and DS empower intelligent systems by analyzing data, identifying patterns, and making automated decisions.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "App Development",
    text: "App development involves designing, coding, and deploying software applications for mobile, web, or desktop platforms.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "CP/DSA",
    text: "Competitive Programming and DSA enhance problem-solving skills by focusing on efficient algorithms and optimized data structures.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Cyber Security & Ethical Hacking",
    text: "Cybersecurity safeguards systems and data by detecting threats, preventing breaches, and ensuring secure digital environments.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "DevOps/Cloud Development",
    text: "DevOps and Cloud Development optimize software delivery by automating workflows, managing infrastructure, and ensuring scalability.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Game Development",
    text: "Game development combines programming, graphics, and storytelling to create interactive digital entertainment experiences.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
  {
    id: "6",
    title: "GATE Exam",
    text: "The GATE exam evaluates engineering and science knowledge for higher education, research, and PSU job opportunities.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon7,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Hardware/Embedded Design",
    text: "Hardware and Embedded Design integrate electronics, sensors, and software to build smart, automated, and efficient devices.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon8,
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "Web Development",
    text: "Web development involves creating dynamic and responsive websites by using front-end, back-end, and database technologies.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon9,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/eAXefdPPxk",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/TheCodeBird",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/thecodebird.exe/",
  },
  {
    id: "3",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/thecodebird/",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/thecodebird/",
  },
];
