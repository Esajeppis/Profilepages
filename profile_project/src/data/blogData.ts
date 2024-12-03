// src/data/blogData.ts
export interface BlogPost {
    id: number;
    title: string;
    date: string;
    summary: string;
    content: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding React Basics",
      date: "November 20, 2024",
      summary: "An introductory guide to React fundamentals.",
      content: "React is a JavaScript library for building user interfaces. It makes creating interactive UIs simple..."
    },
    {
      id: 2,
      title: "Getting Started with TypeScript",
      date: "November 25, 2024",
      summary: "A beginner-friendly overview of TypeScript.",
      content: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale..."
    },
  ];
  