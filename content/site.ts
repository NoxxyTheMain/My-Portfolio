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
  { title: "Computer support & tutoring", summary: "Basic computer training, application help and practical troubleshooting." }
];

export const professionalSkills = [
  { name: "Computing & technology", items: ["Software development", "Programming & application development", "Computer systems & applications", "Database management", "Web development", "Digital technology"] },
  { name: "Writing & research", items: ["Academic & content writing", "Research & information analysis", "Editing & proofreading", "Technical writing"] },
  { name: "Work skills", items: ["Critical thinking & problem solving", "Professional communication", "Time management"] },
  { name: "Languages", items: ["English", "Kiswahili", "Spanish", "Masai"] }
];

export const articles = [
  { slug: "new-study-partner", type: "Feature", category: "Technology & education", title: "The New Study Partner: How AI Is Changing University Learning in Kenya", excerpt: "A feature on how students and lecturers are weighing AI’s useful explanations against the risk of letting the tool do the thinking.", body: ["Generative AI is now a familiar presence in university learning. It can explain difficult concepts, summarise papers, help organise ideas and assist with debugging—but its arrival has made the question of learning more complicated.", "In this feature, I look at the tension through the experiences of university students: when AI helps someone move past a difficult technical problem, and when it turns into a shortcut that weakens understanding. The useful distinction is not whether a student uses AI, but whether they can explain and own the work that results.", "Technology has not replaced the classroom. It has added another voice to it. The challenge for universities is to make that voice support curiosity, critical thinking and academic integrity rather than substitute for them."] },
  { slug: "maasai-rites-of-passage", type: "Feature", category: "Culture & technology", title: "The Maasai Rites of Passage Are Changing. So Is How They Are Remembered", excerpt: "How a generation carrying smartphones, university schedules and traditional obligations experiences Enkipaata, Eunoto and Olng’esherr differently.", body: ["Maasai rites of passage are not simply ceremonies that mark age. They are a process through which generations take on responsibility, cultural knowledge and a shared identity.", "This feature considers what happens when that process meets a generation living across university campuses, workplaces, homesteads and group chats. Smartphones and mobile money now help age-mates organise before they meet, while cameras change how ceremonies are remembered after they happen.", "The story is not about tradition being replaced by technology. It is about people making room for both: preserving the meaning of the rites while navigating a life that is more connected, mobile and digitally documented than before."] },
  { slug: "rethinking-education", type: "Essay", category: "Education", title: "Rethinking Education in the Digital Age", excerpt: "Why modern learning must go beyond memorisation to develop critical thinking, creativity, practical skills and digital literacy.", body: ["Education should do more than prepare students to reproduce information in an examination. It should develop the ability to analyse, evaluate, create and apply knowledge beyond the classroom.", "This essay argues for learning that connects concepts with real situations, gives students more responsibility for their progress and values reflection alongside assessment. A grade is not the whole picture of learning.", "In a digital environment, literacy also includes the ability to find information, judge its reliability, use it responsibly and communicate ideas clearly. Those skills matter as much as access to information itself."] },
  { slug: "special-needs-assessment", type: "Academic paper", category: "Education", title: "Approaches and Modifications for Students with Special Needs", excerpt: "An academic discussion of more inclusive assessment practices, including technology-supported alternatives to traditional testing.", body: ["Assessment should reveal what a learner understands, not merely what they can reproduce under one fixed set of conditions. For students with special needs, traditional tests do not always provide a complete or fair picture.", "This paper explores practical accommodations and alternative assessment approaches, including portfolios, observation, project work and technology-supported methods. The aim is to make room for different ways of demonstrating learning.", "Effective assessment depends on intentional collaboration among educators, students and families—and on designing conditions that allow learners to show their potential accurately."] },
  { slug: "monsters-university-reflection", type: "Academic reflection", category: "Culture", title: "Reflection on Monsters University", excerpt: "A reflection on stereotypes, social expectations, competition and the different ways people define success.", body: ["Monsters University uses a familiar story of ambition and competition to raise questions about social expectations. Its characters are judged by appearance, talent and their fit within institutional hierarchies.", "This reflection considers how the film contrasts inherited advantages with persistence, teamwork and the search for a meaningful definition of success. The story suggests that potential is not always visible at first glance.", "It also asks whether achievement has to follow one conventional path, or whether people can find value by recognising and developing their own strengths."] },
  { slug: "crime-prevention-strategy", type: "Academic paper", category: "Public policy", title: "Comprehensive Crime Prevention Strategy for Richardson", excerpt: "A proposal that combines immediate safety measures with long-term community investment and evidence-based prevention.", body: ["Crime prevention needs both immediate responses and a serious commitment to the conditions that shape safety over time. This paper proposes a socio-ecological approach that addresses people, communities and the built environment.", "Short-term priorities include community policing, attention to high-risk areas, lighting and care for neglected spaces. Long-term work focuses on education, mentorship, skills development and economic opportunity for young people.", "The central argument is that safety cannot be delivered by a single institution. It depends on meaningful coordination among residents, schools, businesses, public services and community organisations."] },
  { slug: "logistics-management", type: "Academic paper", category: "Business", title: "The Role of Logistics Management in Supply Chain Management", excerpt: "An overview of how movement, storage, inventory and information flow shape an efficient supply chain.", body: ["Logistics management sits at the centre of how goods, services and information move through a supply chain. It brings together transportation, warehousing, inventory, order processing and distribution.", "This paper discusses how thoughtful logistics planning can reduce operating costs, improve delivery reliability and help organisations respond to changing demand or disruption.", "The broader point is that logistics is not only operational detail. It is a strategic capability that supports customer experience, resilience and competitiveness."] }
];

export const skills = [
  { name: "Development", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"] },
  { name: "Backend & data", items: ["MySQL", "SQL", "APIs", "Database design"] },
  { name: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel"] },
  { name: "Emerging focus", items: ["Cybersecurity", "Networking", "Linux", "Web security"] }
];
