// Project type definition
export interface IProject {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
};

export const projects : IProject[] = [
  {
    id: 1,
    title: "VibeMesh Chat Platform",
    description:
      "A comprehensive real-time chat platform designed for seamless communication with intuitive UI, user authentication, and message persistence. Features include user profiles, real-time notifications, and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Tailwind CSS", "Firebase", "Yup", "AOS"],
    category: "Advanced",
    demoUrl: "https://vibemesh08.netlify.app/",
    githubUrl: "https://github.com/yuvraj08-netweb/VibeMesh",
    featured: true,
  },
  {
    id: 2,
    title: "Bookstore Application - MERN",
    description:
      "A full-stack bookstore application with complete CRUD functionality. Users can browse, search, filter, add, edit, and delete books with an intuitive admin dashboard and user authentication system.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "MongoDB", "Express", "Node"],
    category: "Advanced",
    demoUrl: "#",
    githubUrl: "https://github.com/yuvraj-08/bookstore-MERN",
    featured: true,
  },
  {
    id: 3,
    title: "Password Manager",
    description:
      "A secure browser extension that allows users to store, retrieve, and manage passwords with encryption. Features include password generation, auto-fill capabilities, and secure cloud storage via Firebase.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Tailwind CSS", "Firebase", "Extension"],
    category: "Advanced",
    demoUrl: "#",
    githubUrl: "https://github.com/yuvraj08-netweb/Password-Manager",
    featured: true,
  },
  {
    id: 4,
    title: "FlowSyncs - ShadCN Page Template",
    description:
      "A professionally designed landing page template with fluid animations and modern UI components. Implements advanced GSAP animations and shadcn component library for a polished user experience.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Tailwind CSS", "Shadcn", "GSAP"],
    category: "Intermediate",
    demoUrl: "https://flowsyncs.netlify.app/",
    githubUrl: "https://github.com/yuvraj08-netweb/flowsync",
    featured: true,
  },
  {
    id: 5,
    title: "Random Password Generator",
    description:
      "A robust password generator utilizing React hooks for state management and complex password creation. Features customizable password length, character types, and copy-to-clipboard functionality.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Tailwind CSS"],
    category: "Intermediate",
    demoUrl: "https://yuvraj-password-generator.netlify.app/",
    githubUrl: "https://github.com/yuvraj08-netweb/passwordGenerator",
    featured: false,
  },
  {
    id: 6,
    title: "Quiz App",
    description:
      "An interactive quiz application with dynamic scoring, timer functionality, and multiple question types. Features include progress tracking, instant feedback, and result summary.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript", "JSON"],
    category: "Intermediate",
    demoUrl: "https://yuvraj08-netweb.github.io/quizApp/",
    githubUrl: "https://github.com/yuvraj08-netweb/quizApp",
    featured: false,
  },
  {
    id: 7,
    title: "Meals App",
    description:
      "A comprehensive recipe application allowing users to search, filter, and save favorite meals. Features detailed recipe instructions, ingredient lists, and meal categories with a responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Intermediate",
    demoUrl: "https://yuvraj-08.github.io/meals-app/",
    githubUrl: "https://github.com/yuvraj-08/meals-app",
    featured: false,
  },
  {
    id: 8,
    title: "React Calculator App",
    description:
      "A fully functional calculator application built with React, featuring standard and scientific calculation capabilities. Implements complex state management for operation history and memory functions.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Stackblitz"],
    category: "Intermediate",
    demoUrl: "https://stackblitz-starters-ac81vn.stackblitz.io/",
    githubUrl: "https://github.com/yuvraj-08/react-calculator-app",
    featured: false,
  },
  {
    id: 9,
    title: "Stopwatch",
    description:
      "A precise stopwatch application with lap timing functionality, pause/resume features, and millisecond accuracy. Includes a clean, minimalist UI for distraction-free time tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Intermediate",
    demoUrl: "https://yuvraj-08.github.io/stopwatch/",
    githubUrl: "https://github.com/yuvraj-08/stopwatch",
    featured: false,
  },
  {
    id: 10,
    title: "Tenis Game",
    description:
      "An interactive tennis game with realistic physics, scoring system, and adjustable difficulty levels. Features smooth animations and responsive controls for an engaging gaming experience.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://project-tennisgame.netlify.app/",
    githubUrl: "https://github.com/yuvraj-08/tennis-game",
    featured: false,
  },
  {
    id: 11,
    title: "To-Do List",
    description:
      "A feature-rich to-do application with task categorization, due dates, and priority settings. Utilizes local storage for data persistence and includes search and filter capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj08-netweb.github.io/toDo-List/",
    githubUrl: "https://github.com/yuvraj08-netweb/toDo-List",
    featured: false,
  },
  {
    id: 12,
    title: "toDo List Vanilla JS",
    description:
      "A lightweight to-do list with drag-and-drop reordering, task editing, and completion tracking. Features a clean UI and efficient local storage implementation.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/ToDo-List-Vanilla-JS/",
    githubUrl: "https://github.com/yuvraj-08/ToDo-List-Vanilla-JS",
    featured: true,
  },
  {
    id: 13,
    title: "Guess The Number Game",
    description:
      "An entertaining number guessing game with score tracking, difficulty levels, and hint systems. Features visual feedback and an engaging user interface.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj08-netweb.github.io/guessTheNumberGame/",
    githubUrl: "https://github.com/yuvraj08-netweb/guessTheNumberGame",
    featured: false,
  },
  {
    id: 14,
    title: "Random Quotes Generator",
    description:
      "A quote generator with categorization, author filtering, and social sharing options. Features a visually appealing design with smooth transitions between quotes.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/random-quotes-generator/",
    githubUrl: "https://github.com/yuvraj-08/random-quotes-generator",
    featured: false,
  },
  {
    id: 15,
    title: "Passengers Counter App",
    description:
      "A practical passenger tracking application designed for public transportation monitoring. Features incremental counting, session saving, total calculations, and data reset functionality.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/passengersCounterApp/",
    githubUrl: "https://github.com/yuvraj-08/passengersCounterApp",
    featured: false,
  },
  {
    id: 16,
    title: "PhotoShack - Image Gallery",
    description:
      "A responsive image gallery with search functionality, filtering options, and image previews. Features lazy loading for performance and download capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/PhotoShack/",
    githubUrl: "https://github.com/yuvraj-08/PhotoShack",
    featured: false,
  },
  {
    id: 17,
    title: "Travel Website Landing Page",
    description:
      "A visually stunning travel website landing page with animated sections, booking forms, and destination showcases. Features responsive design and interactive elements.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj08-netweb.github.io/travel-website-landing-page/",
    githubUrl: "https://github.com/yuvraj08-netweb/travel-website-landing-page",
    featured: false,
  },
  {
    id: 18,
    title: "Dobble - Social Network",
    description:
      "A social network interface with user profiles, post creation, and interaction features. Demonstrates understanding of social platform UI/UX concepts.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/dobbleSocialNetwork/",
    githubUrl: "https://github.com/yuvraj-08/dobbleSocialNetwork",
    featured: false,
  },
  {
    id: 19,
    title: "Hydra Landing Page",
    description:
      "A modern VR technology landing page with parallax effects, service showcases, and contact forms. Features smooth scrolling and responsive design elements.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj08-netweb.github.io/Hydra-Landing-Page/",
    githubUrl: "https://github.com/yuvraj08-netweb/Hydra-Landing-Page",
    featured: false,
  },
  {
    id: 20,
    title: "Envor Landing Page",
    description:
      "An environmental company landing page with service descriptions, team sections, and project portfolios. Features eco-friendly design elements and call-to-action components.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj08-netweb.github.io/Envor-Landing-Page/",
    githubUrl: "https://github.com/yuvraj08-netweb/Envor-Landing-Page",
    featured: false,
  },
  {
    id: 21,
    title: "Digital Agency Landing Page",
    description:
      "A professional digital agency page showcasing services, client testimonials, and case studies. Features modern design elements and Bootstrap components.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "LESS", "Bootstrap"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/digitalAgency/",
    githubUrl: "https://github.com/yuvraj-08/digitalAgency",
    featured: false,
  },
  {
    id: 22,
    title: "Cloud Idea Landing Page",
    description:
      "A cloud service landing page with feature highlights, pricing tables, and client logos. Features a clean design focused on conversion optimization.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/landing-page-template/",
    githubUrl: "https://github.com/yuvraj-08/landing-page-template",
    featured: false,
  },
  {
    id: 23,
    title: "Amazon Clone",
    description:
      "A detailed recreation of Amazon's homepage with product listings, navigation, and cart functionality. Demonstrates understanding of complex UI implementations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/amazon-clone/",
    githubUrl: "https://github.com/yuvraj-08/amazon-clone",
    featured: false,
  },
  {
    id: 24,
    title: "Sign-In Page Template",
    description:
      "A secure authentication page with form validation, error handling, and user data persistence. Features responsive design and accessibility considerations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    category: "Basic",
    demoUrl: "https://yuvraj08-netweb.github.io/signInTemplate/",
    githubUrl: "https://github.com/yuvraj08-netweb/signInTemplate",
    featured: false,
  },
  {
    id: 25,
    title: "Resume Page Template",
    description:
      "A professional resume webpage with sections for skills, experience, education, and projects. Features clean layout and print-optimized styling.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "Bootstrap"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/resumePageTemplate/",
    githubUrl: "https://github.com/yuvraj-08/resumePageTemplate",
    featured: false,
  },
  {
    id: 26,
    title: "Simple Portfolio",
    description:
      "A portfolio website with project showcases, skills section, and contact information. Features minimalist design focusing on content presentation.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/simplePortfolio/",
    githubUrl: "https://github.com/yuvraj-08/simplePortfolio",
    featured: false,
  },
  {
    id: 27,
    title: "Survey Form Page",
    description:
      "An interactive survey form with various input types, validation, and submission handling. Features accessible design and responsive layout.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS", "Bootstrap"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/surveyPage/",
    githubUrl: "https://github.com/yuvraj-08/surveyPage",
    featured: false,
  },
  {
    id: 28,
    title: "Product Landing Page",
    description:
      "A product showcase page for TROMBONE with features, pricing, and ordering options. Includes navigation, product images, and call-to-action elements.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/productLandingPage/",
    githubUrl: "https://github.com/yuvraj-08/productLandingPage",
    featured: false,
  },
  {
    id: 29,
    title: "Dr. Norman Borlaug Tribute Page",
    description:
      "A biographical tribute to Dr. Norman Borlaug highlighting his contributions to agriculture and world hunger. Features timeline, achievements, and historical context.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/tributePage/",
    githubUrl: "https://github.com/yuvraj-08/tributePage",
    featured: false,
  },
  {
    id: 30,
    title: "Manraj Writing",
    description:
      "A specialized writing application featuring a custom font text editor and integrated to-do list. Created as a personalized tool with unique typography implementation.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["HTML", "CSS"],
    category: "Basic",
    demoUrl: "https://yuvraj-08.github.io/manrajWriting/",
    githubUrl: "https://github.com/yuvraj-08/manrajWriting",
    featured: false,
  },
];
