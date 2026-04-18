import{
    Code2, 
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    Book,
    Twitter,
} from "lucide-react";
import { FiGithub, FiLinkedin, FiTweeter} from "react-icon/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";
import PROJECT_IMG_7 from "../assets/images/project-7.png";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautigul, User Interface",
        skills: [
            {name:"React", level:95, color:"bg-blue-500"},
            {name:"TypeScript", level:90, color:"bg-blue-600"},
            {name:"Next.js", level:88, color:"bg-gray-800"},
            {name:"Tailwind Css", level:92, color:"bg-cyan-500"},
            {name:"Framer Motion", level:95, color:"bg-pink-500"},
        ],
    },
    {
        title: "Backend",
        icon: Server,
        description: "Building Robots server-side solution",
        skills: [
            {name:"Node.js", level:90, color:"bg-green-500"},
            {name:"Express.js", level:88, color:"bg-gray-700"},
            {name:"Python", level:85, color:"bg-yellow-500"},
            {name:"GraphQL", level:80, color:"bg-pink-600"},
            {name:"Rest APIs", level:82, color:"bg-orange-500"},
        ],
    },
    {
        title: "Database",
        icon: Database,
        description:    "Managing and optimizing data storage",
        skills: [
            {name:"MongoDB", level:88, color:"bg-green-600"},
            {name:"MongoDB", level:85, color:"bg-blue-700"},
            {name:"Redis", level:80, color:"bg-red-500"},
            {name:"Prisma", level:82, color:"bg-indigo-600"},
            {name:"Firebase", level:78, color:"bg-yellow-600"},
        ],
    },
    {
        title: "DevOps",
        icon: Cloud,
        description: "Deploying and scaling Applications",
        skills: [
            {name:"Docker", level:82, color:"bg-blue-600"},
            {name:"AWS", level:78, color:"bg-orange-700"},
            {name:"Versel", level:80, color:"bg-gray-500"},
            {name:"GIT", level:82, color:"bg-orange-600"},
            {name:"Ci/CD", level:78, color:"bg-purple-600"},
        ],
    },
];

export const TECH_STACK = [
    "JavaScript",
    "Html5",  
    "Css", 
    "Tailwind Css", 
    "Php", 
    "JavaScript", 
    "Laravel", 
    "Figma", 
    "Vite", 
    "Notion", 
    "Slack", 
    "WebPack", 
];

export const STATS = [
    { number:"50+", label:"Project Completed" },
    { number:"30+", label:"Year Experience" },
    { number:"5+", label:"Technologies" },
    { number:"100%", label:"Client satisfaction" },
];

export const PROJECTS = [
    {
        id: 1,
        title: "Ecommerce",
        description: "A full Stack blog app using the Laravel",
        image: PROJECT_IMG_1,
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Blog App AI Boost AI",
        description: "A full Stack blog app using the Laravel",
        image: PROJECT_IMG_2,
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Blog App AI Boost AI",
        description: "A full Stack blog app using the Laravel",
        image: PROJECT_IMG_3,
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 4,
        title: "Blog App AI Boost AI",
        description: "A full Stack blog app using the Laravel",
        image: PROJECT_IMG_4,
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 5,
        title: "Blog App AI Boost AI",
        description: "A full Stack blog app using the Laravel",
        image: PROJECT_IMG_5,
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
    {
        id: 6,
        title: "Blog App AI Boost AI",
        description: "A full Stack blog app using the Laravel",
        image: PROJECT_IMG_6,
        tags: ["React", "NodeJS", "MongoDB", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
        category: "Full Stack",
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Joined as a fornt-end Intern",
        icon: Code2,
        color: "bg-blue-500",
    },
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Joined as a fornt-end Intern",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Joined as a fornt-end Intern",
        icon: GraduationCap,
        color: "bg-gray-500",
    },
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Joined as a fornt-end Intern",
        icon: Rocket,
        color: "bg-blue-500",
    },
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Joined as a fornt-end Intern",
        icon: Award,
        color: "bg-blue-500",
    },
    {
        year: "2021",
        title: "Started Coding Journey",
        company: "Self-taught",
        description: "Joined as a fornt-end Intern",
        icon: Zap,
        color: "bg-blue-500",
    },
];

export const PASSION = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive userinterface",

    },
    {
        icon: Coffee,
        title: "User Experience",
        description: "Crafting intuitive userinterface",

    },
    {
        icon: BookOpen,
        title: "User Experience",
        description: "Crafting intuitive userinterface",

    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "linkedIn",
        icon: FiLinkedin,
        url: "",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "Twitter",
        icon: FiTweeter,
        url: "",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "GitHub",
        icon: FiGithub,
        url: "",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    }
];

export const CONTACT_INFO =[
    {
        icon: MapPin,
        label: "Location",
        value: "Multan",
    },
    {
        icon: Mail,
        label: "Email",
        value: "sobanamjad097@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+92 336 0015233",
    },
];





