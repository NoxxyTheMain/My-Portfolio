export const social = {
  github: "https://github.com/NoxxyTheMain",
  linkedin: "https://www.linkedin.com/in/senteu-is-allan/",
  email: "senteualan@gmail.com",
  phone: "+254792226658",
  address: "P.O. Box 1031-20500, Narok, Kenya"
};

export const aboutFocus = [
  {
    title: "Web Development",
    summary: "Building responsive websites and web applications with modern frameworks, clear structure and attention to detail.",
    icon: "code" as const
  },
  {
    title: "Software & Database Work",
    summary: "Designing practical software and database solutions with an eye on structure, queries and real-world use cases.",
    icon: "engineering" as const
  },
  {
    title: "Writing & Research",
    summary: "Researching, drafting and refining academic, technical and feature writing across technology, education and culture.",
    icon: "writing" as const
  }
];

export const skillCards: { name: string; subtitle: string; icon: string }[] = [
  { name: "HTML5 & CSS3", subtitle: "Frontend core", icon: "html5" },
  { name: "JavaScript", subtitle: "Programming language", icon: "javascript" },
  { name: "TypeScript", subtitle: "Typed JavaScript", icon: "typescript" },
  { name: "React", subtitle: "Frontend library", icon: "react" },
  { name: "Next.js", subtitle: "Full-stack framework", icon: "nextjs" },
  { name: "MySQL", subtitle: "Relational database", icon: "mysql" },
  { name: "SQL", subtitle: "Database queries", icon: "sql" },
  { name: "Git & GitHub", subtitle: "Version control", icon: "git" },
  { name: "Vercel", subtitle: "Deployment platform", icon: "vercel" },
  { name: "Computer applications", subtitle: "Practical digital tools", icon: "apps" },
  { name: "Cybersecurity", subtitle: "Emerging learning focus", icon: "security" },
  { name: "Networking & Linux", subtitle: "Areas I’m exploring", icon: "linux" }
];

export type PortfolioProject = { title: string; kind: string; preview?: string; previewAlt?: string; previewLabel?: string; description: string; stack: string[]; github?: string; website?: string };

export const projects: PortfolioProject[] = [
  { title: "AeroCruz", kind: "Ride-hailing database", preview: "/aerocruz-erd.png", previewAlt: "AeroCruz relational database entity relationship diagram", previewLabel: "Project artifact", description: "AeroCruz Ride-Hailing Management Database: a MySQL group project covering schema design, sample data, business queries and database views.", stack: ["MySQL", "Relational design", "SQL"], github: "https://github.com/NoxxyTheMain/aerocruz-ride-hailing" },
  { title: "Narok North Bursary Platform", kind: "Web project", preview: "/projects/narok-bursary.jpg", previewAlt: "Narok North Bursary & Projects website homepage", previewLabel: "Live site preview", description: "A website for Narok North bursary information, projects, news and community updates.", stack: [], github: "https://github.com/NoxxyTheMain/Narok-North-Bursary-Plat", website: "https://narok-north-bursary-platform.vercel.app" },
  { title: "Barclays Sunset Camp", kind: "Tourism & hospitality", preview: "/projects/barclays-sunset.jpg", previewAlt: "Barclays Sunset Camp safari website homepage", previewLabel: "Live site preview", description: "A Maasai Mara safari camp website presenting the lodge, activities and booking experience.", stack: [], website: "https://barclays-sunset-camp.vercel.app" },
  { title: "Elite Wear & Ink", kind: "Web development", preview: "/projects/elite-wear.jpg", previewAlt: "Elite Wear & Ink fashion and tattoo brand website homepage", previewLabel: "Live site preview", description: "A fashion and tattoo brand website presenting clothing, custom tattoos, embroidery, branding and printing services.", stack: [], website: "https://elite-wear-and-ink.vercel.app" }
];

export const education = [
  { institution: "The Co-operative University of Kenya", qualification: "Diploma in Computer Science", dates: "2025–Present", location: "Nairobi, Kenya", current: true },
  { institution: "Silvergate Computer College", qualification: "Computer Applications", dates: "Jul–Nov 2017", location: "Kenya", current: false },
  { institution: "Ololulunga High School", qualification: "Kenya Certificate of Secondary Education", dates: "2013–2016", location: "Narok County, Kenya", current: false },
  { institution: "Morijo Primary School", qualification: "Kenya Certificate of Primary Education", dates: "2005–2012", location: "Narok County, Kenya", current: false }
];

export const experience = [
  { organization: "Jomu Technologies Computer College", role: "Computer Tutor and Cyber Attendant", dates: "2019–2020", details: ["Delivered computer training in foundational skills, applications and everyday digital tools.", "Guided learners through common software applications and practical computer tasks.", "Supported digital literacy, including safe and effective use of online services.", "Assisted clients with online services, forms, research and information access.", "Prepared, formatted and processed documents to meet client requirements.", "Managed printing, scanning and related document services.", "Diagnosed and troubleshot common hardware, software, printer and connectivity issues.", "Maintained computers and workstations through routine checks and basic upkeep."] },
  { organization: "WriterBay", role: "Academic and Research Writer", dates: "", details: ["Researched client assignments across a range of academic and professional subjects.", "Reviewed source material and identified relevant, credible information for each task.", "Produced academic papers, essays, reports, case studies and research based content.", "Organized ideas into clear structures aligned with each assignment brief.", "Applied the requested citation and referencing style to research work.", "Edited drafts for clarity, coherence, grammar and consistency.", "Proofread completed work and checked formatting against client instructions.", "Adapted tone, scope and presentation to the requirements of each writing task."] },
  { organization: "Freelance", role: "Writer", dates: "2022–2023", details: ["Researched and wrote academic and general content across different subjects.", "Produced essays, research papers, reports, case studies and literature reviews.", "Adapted structure and tone to match client requirements and assignment guidelines.", "Reviewed briefs to understand each client's topic, scope and expected format.", "Gathered and organized information to support clear, well-structured drafts.", "Edited written work for readability, flow, grammar and consistency.", "Proofread final documents and checked presentation details before delivery.", "Communicated revisions and incorporated client feedback into updated drafts."] }
];

export const services = [
  { title: "Web & software development", summary: "Web development, software development and programming/application development." },
  { title: "Research & writing", summary: "Academic, technical and general writing, backed by research and information analysis." },
  { title: "Cybercafe document services", summary: "Document support for business plans, proposals, research and project reports, assignments and social work documents." },
  { title: "Computer support & tutoring", summary: "Basic computer training, online application help, printing and practical troubleshooting." }
];

export const professionalSkills = [
  { name: "Computing & technology", items: ["Software development", "Programming & application development", "Computer systems & applications", "Database management", "Web development", "Digital technology"] },
  { name: "Writing & research", items: ["Academic & content writing", "Research & information analysis", "Editing & proofreading", "Technical writing"] },
  { name: "Work skills", items: ["Critical thinking & problem solving", "Professional communication", "Time management"] },
  { name: "Languages", items: ["English", "Kiswahili", "Spanish", "Masai"] }
];

export const articles = [
  { slug: "new-study-partner", type: "Feature", category: "Technology & education", title: "The New Study Partner: How AI Is Changing University Learning in Kenya", excerpt: "A feature on how students and lecturers are weighing AI’s useful explanations against the risk of letting the tool do the thinking.", fullWork: "/Writing/The%20New%20Study%20Partner.pdf" },
  { slug: "maasai-rites-of-passage", type: "Feature", category: "Culture & technology", title: "The Maasai Rites of Passage Are Changing. So Is How They Are Remembered", excerpt: "How a generation carrying smartphones, university schedules and traditional obligations experiences Enkipaata, Eunoto and Olng’esherr differently.", fullWork: "/Writing/Maasai_Rites%20of%20Passage.pdf" },
  { slug: "rethinking-education", type: "Essay", category: "Education", title: "Rethinking Education in the Digital Age", excerpt: "Why modern learning must go beyond memorisation to develop critical thinking, creativity, practical skills and digital literacy.", fullWork: "/Writing/Rethinking%20Education%20in%20the%20Digital%20Age.pdf" }
];

export const skills = [
  { name: "Development", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
  { name: "Backend & data", items: ["MySQL", "SQL", "APIs", "Database design"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { name: "Emerging focus", items: ["Cybersecurity", "Networking", "Linux", "Web security"] }
];
