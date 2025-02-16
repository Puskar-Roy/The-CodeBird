import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
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
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Events",
    url: "/features",
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
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

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
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

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
    text: "AI, ML, and DS work together to enable intelligent systems by leveraging data (DS), learning patterns (ML), and making decisions (AI) for automation and insights.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "App Development",
    text: "App development is the process of designing, building, and deploying software applications for mobile or web platforms.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "CP/DSA",
    text: "Competitive Programming (CP) and Data Structures & Algorithms (DSA) focus on solving complex problems efficiently using optimized algorithms and data structures, enhancing coding skills and problem-solving abilities.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Cyber Security",
    text: "Cybersecurity protects systems, networks, and data from cyber threats through encryption, threat detection, and secure practices to prevent unauthorized access and attacks.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "DevOps/Cloud Development",
    text: "DevOps and Cloud Development streamline software deployment by automating workflows, ensuring scalability, and leveraging cloud infrastructure for efficient development and operations.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Game Development",
    text: "Game development is the process of designing, coding, and creating interactive digital experiences using graphics, physics, and storytelling to build engaging games.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },

  {
    id: "6",
    title: "GATE Exam",
    text: "The GATE (Graduate Aptitude Test in Engineering) exam is a national-level test in India that assesses candidates’ understanding of engineering and science subjects for higher studies and PSU recruitment.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "7",
    title: "Hardware/Embedded Design",
    text: "Hardware, Robotics, and Embedded Design focus on building intelligent systems by integrating circuits, sensors, and software to create automated and interactive devices.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "8",
    title: "Website Development",
    text: "Website development involves designing, building, and maintaining websites using front-end and back-end technologies to create dynamic and user-friendly online experiences.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
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
