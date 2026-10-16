export const social = {
  github: "https://github.com/NoxxyTheMain",
  linkedin: "https://www.linkedin.com/in/senteu-is-allan/",
  email: "senteualan@gmail.com",
  phone: "+254792226658"
};

export const projects: { title: string; kind: string; preview?: string; previewAlt?: string; description: string; stack: string[]; github: string }[] = [
  { title: "AeroCruz", kind: "Ride-hailing database", preview: "/aerocruz-erd.png", previewAlt: "AeroCruz relational database entity relationship diagram", description: "AeroCruz Ride-Hailing Management Database: a MySQL group project covering schema design, sample data, business queries and database views.", stack: ["MySQL", "Relational design", "SQL"], github: "https://github.com/NoxxyTheMain/aerocruz-ride-hailing" },
  { title: "Narok North Bursary Platform", kind: "Web project", description: "Narok North Bursary Platform project.", stack: [], github: "https://github.com/NoxxyTheMain/Narok-North-Bursary-Plat" },
  { title: "Barclays Sunset Camp", kind: "Tourism & hospitality", description: "A considered web presence for a hospitality business—designed to present a destination with clarity, warmth and a path toward booking.", stack: ["Responsive design", "UX", "Booking flow"], github: "" },
  { title: "Elite Wear & Ink", kind: "Web development", description: "A frontend project focused on strong hierarchy, responsive behavior and a clear presentation of a brand’s offering.", stack: ["HTML", "CSS", "JavaScript"], github: "" }
];

export const education = [
  { institution: "Cooperative University of Kenya", qualification: "Diploma in Computer Science", dates: "2025–Present" },
  { institution: "Silvergate Computer College", qualification: "Computer Applications", dates: "Jul–Nov 2017" },
  { institution: "Ololulunga High School", qualification: "Kenya Certificate of Secondary Education", dates: "2013–2016" },
  { institution: "Morijo Primary School", qualification: "Kenya Certificate of Primary Education", dates: "2005–2012" }
];

export const experience = [
  { organization: "Jomu Technologies Computer College", role: "Computer Tutor and Cyber Attendant", dates: "2019–2020", details: ["Tutored learners in basic computer skills, applications and digital tools.", "Helped clients with internet access, online applications, document preparation and printing services.", "Troubleshot common computer, software, printing and connectivity issues."] },
  { organization: "Freelance", role: "Writer", dates: "2022–2023", details: ["Researched and wrote academic and general content across different subjects.", "Produced essays, research papers, reports, case studies and literature reviews.", "Adapted structure and tone to match client requirements and assignment guidelines."] }
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
