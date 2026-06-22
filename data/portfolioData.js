import {
  Blocks,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Globe,
  GraduationCap,
  LayoutDashboard,
  Palette,
  PenTool,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Waypoints,
} from "lucide-react";

export const portfolioData = {
  profile: {
    name: "Shaikh Akbar",
    role: "Software Developer",
    rotatingRoles: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Vibe Coder",
      "SEO Knowledge",
      "Google Search Console",
    ],
    tagline:
      "I build modern web products with frontend, backend, ONDC commerce, SEO support, and practical business delivery.",
    intro:
      "I have 2+ years of web development experience building frontend interfaces, backend APIs, ONDC commerce flows, dashboards, and scalable business platforms for companies and freelance clients.",
    email: "akbar000785@gmail.com",
    phone: "+91 9082670335",
    location: "India",
    availability: "Available for freelance development, remote roles, and product collaborations",
    cv: {
      viewHref: "/Akbar-cv.pdf",
      downloadHref: "/Akbar-cv.pdf",
    },
    socialLinks: [
      { label: "Gomodexa", href: "https://gomodexa.com/" },
      { label: "Zillybuy", href: "https://zillybuy.com/" },
      { label: "HQCoupons", href: "https://hqcoupons.com/" },
      { label: "GrabCliq", href: "https://grabcliq.com/" },
    ],
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "2+", label: "Years of Overall Web Development Experience" },
    { value: "15+", label: "Projects Delivered Across Company and Freelance Work" },
    { value: "7-9", label: "Months of Focused Freelance Delivery Experience" },
    { value: "100%", label: "Commitment to Shipping Practical Product Solutions" },
  ],
  skillGroups: [
    {
      name: "Frontend",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Backend",
      icon: ServerCog,
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Caching"],
    },
    {
      name: "Database",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Prisma", "Data Modeling"],
    },
    {
      name: "Tools",
      icon: TerminalSquare,
      skills: ["Git", "GitHub", "Postman", "Vercel", "Deployment"],
    },
    {
      name: "Commerce",
      icon: CloudCog,
      skills: ["ONDC", "BAP Flows", "Ecommerce UI", "Business Platforms"],
    },
  ],
  skillLogos: [
    { name: "React.js", key: "react" },
    { name: "Next.js", key: "nextjs" },
    { name: "JavaScript", key: "javascript" },
    { name: "Node.js", key: "nodejs" },
    { name: "MySQL", key: "mysql" },
    { name: "MongoDB", key: "mongodb" },
    { name: "Supabase", key: "supabase" },
    { name: "Postman", key: "postman" },
    { name: "Core PHP", key: "php" },
  ],
  projects: [
    {
      title: "Zillybuy",
      description:
        "Worked on Zillybuy, an ONDC government ecommerce platform, across frontend and backend. Built buyer-side journeys, handled ONDC flow integration, and contributed as a BAP partner for scalable commerce operations.",
      stack: ["Next.js", "React", "Node.js", "ONDC", "BAP", "Frontend", "Backend"],
      href: "https://zillybuy.com/",
      demo: "https://zillybuy.com/",
      accent: "from-cyan-500/30 via-sky-500/20 to-transparent",
    },
    {
      title: "Gomodexa",
      description:
        "Currently developing gomodexa.com, a dropshipping platform focused on product management, storefront flows, and smooth operational experiences for modern ecommerce selling.",
      stack: ["Next.js", "Tailwind", "Node.js", "MongoDB", "Dropshipping"],
      href: "https://gomodexa.com/",
      demo: "https://gomodexa.com/",
      accent: "from-fuchsia-500/30 via-violet-500/20 to-transparent",
    },
    {
      title: "Employee Management System",
      description:
        "Built an EMS platform to manage employee records, workflows, and operations with a clean interface and practical admin-first functionality.",
      stack: ["React", "Dashboard UI", "Node.js", "MongoDB"],
      href: "#",
      demo: "#",
      accent: "from-blue-500/30 via-indigo-500/20 to-transparent",
    },
    {
      title: "Real Estate Platform",
      description:
        "Developed the frontend for a real estate project with polished presentation, modern layouts, and responsive property browsing experiences.",
      stack: ["Next.js", "Frontend", "Responsive UI", "Vercel"],
      href: "https://vercel.com/akbars-projects-2636817a/real-estate",
      demo: "https://vercel.com/akbars-projects-2636817a/real-estate",
      accent: "from-emerald-500/30 via-teal-500/20 to-transparent",
    },
    {
      title: "HQCoupons",
      description:
        "Worked on coupon and deal discovery experiences with user-friendly layouts, responsive behavior, and production-ready frontend delivery.",
      stack: ["React", "Next.js", "Coupon Platform", "SEO"],
      href: "https://hqcoupons.com/",
      demo: "https://hqcoupons.com/",
      accent: "from-amber-500/30 via-orange-500/20 to-transparent",
    },
  ],
  timeline: [
    {
      role: "Full Stack Developer",
      company: "Mobilogi Technology Pvt. Ltd.",
      duration: "October 2025 - Present",
      achievements: [
        "Working on modern web platforms with frontend and backend responsibilities across product features and delivery.",
        "Contributing to scalable business applications, production improvements, and day-to-day engineering execution.",
      ],
      icon: Rocket,
    },
    {
      role: "Web Developer",
      company: "Centeos Technology Pvt. Ltd.",
      duration: "2024",
      achievements: [
        "Worked on company projects involving responsive interfaces, product implementation, and feature delivery.",
        "Strengthened practical experience across real-world client and internal development workflows.",
      ],
      icon: BriefcaseBusiness,
    },
    {
      role: "Freelance Developer",
      company: "Independent Client Projects",
      duration: "7-9 months | 15+ delivered overall projects",
      achievements: [
        "Delivered freelance work for HQCoupons, GrabCliq, Mobilogi portal, real estate interfaces, and other business websites.",
        "Handled design-to-development execution, responsive frontend delivery, and practical product improvements for startups and clients.",
      ],
      icon: GraduationCap,
    },
  ],
  services: [
    {
      title: "Web Development",
      description: "Custom websites, ecommerce experiences, and web apps with modern UX.",
      icon: Globe,
    },
    {
      title: "UI/UX Design",
      description: "Clean, modern, responsive interfaces that feel polished and conversion-aware.",
      icon: Palette,
    },
    {
      title: "Backend API Development",
      description: "Backend APIs, business logic, integrations, and dependable data workflows.",
      icon: Waypoints,
    },
    {
      title: "Dashboard Development",
      description: "Admin panels and operational dashboards built for clarity and daily usage.",
      icon: LayoutDashboard,
    },
    {
      title: "Performance Optimization",
      description: "Frontend tuning, responsive improvements, and practical performance enhancement.",
      icon: Sparkles,
    },
    {
      title: "Deployment & Hosting",
      description: "Deployment, hosting, production setup, and launch support for live projects.",
      icon: ShieldCheck,
    },
  ],
  highlights: [
    {
      title: "ONDC and BAP Experience",
      description:
        "Hands-on work on buyer-side ecommerce journeys and BAP-side platform functionality for ONDC commerce.",
      icon: PenTool,
    },
    {
      title: "Freelance Ready",
      description:
        "Available for freelance development across ecommerce, dashboards, portals, and business websites.",
      icon: Blocks,
    },
  ],
};
