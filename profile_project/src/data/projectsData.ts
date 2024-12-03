
export interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Website (You are in it!)",
    date: "2024",
    description: "A personal portfolio to showcase my projects and skills.",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "https://github.com/Esajeppis/Profilepages",
  },
  {
    title: "Online shop",
    date: "2024",
    description: "An online shopping application designed to demonstrate and train skills in full-stack development. It features user authentication, shopping cart functionality, an admin management panel, and database integration for seamless data handling.",
    technologies: ["React", "TypeScript", "Bootstrap", "Express.js", "Node.js", "PostgreSQL", "Context API"],
    link: "https://github.com/Esajeppis/Online_store",
  },
  {
    title: "Webpage for Porin asbesti",
    date: "2024",
    description: "Webpages for Porin asbesti. My intern project. Still updating, so publishing links later",
    technologies: ["React","Node.js", "Express"],
    link: "https://chatapp.com",
  },
  {
    title: "Console for adding data (School project)",
    date: "2024",
    description: "Advanced Data Management Submission: OLTP Database with FastAPI",
    technologies: [
    "Python",
    "FastAPI",
    "MySQL (via XAMPP)",
    "SQLWorkbench",
    "Faker"
  ],
    link: "https://github.com/Esajeppis/Edistynyt-tiedonhallinta-palautus",
  },
  {
    title: "Shopping list (School project)",
    date: "2024",
    description: "Shoppinglist for ReactNative mobileapp",
    technologies: ["React Native","Node.js","Redux"],
    link: "https://github.com/Esajeppis/Shoppinglist_React_Native",
  },
  {
    title: "Data visualization with Javascript and D3 library (School project)",
    date: "2023",
    description: "Data visualization and getting data from API",
    technologies: ["Javascript", "D3"],
    link: "https://github.com/Esajeppis/loppu_tyo",
  },
];
