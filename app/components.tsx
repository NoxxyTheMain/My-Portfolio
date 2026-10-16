import Link from "next/link";
import Image from "next/image";
import { aboutFocus, education, experience, professionalSkills, skillCards, social, type PortfolioProject } from "../content/site";
import { ArrowUpRight, Briefcase, CodeBracket, Github, Linkedin, Mail, UserCircle } from "./ui";

export function SiteNav() {
  return <header className="site-header"><nav className="site-nav" aria-label="Main navigation"><Link className="brand" href="/#top">Allan Senteu<span>.</span></Link><div className="nav-links"><Link href="/#top">Home</Link><Link href="/about">About</Link><Link href="/education">Education</Link><Link href="/experience">Experience</Link><Link href="/skills">Skills</Link><Link href="/work">Projects</Link><Link href="/#services">Services</Link><Link href="/writing">Writing</Link><Link href="/contact">Contact</Link></div><div className="nav-actions"><a className="nav-cv" href="/allan-senteu-cv.pdf" download>Download CV <span aria-hidden="true">↓</span></a></div></nav></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><p>© {new Date().getFullYear()} Allan Senteu</p><p>Writer · Computing &amp; Technology</p><a href="#top">Back to top ↑</a></footer>;
}

export function SocialLinks() {
  return <div className="hero-socials"><a href={social.github} aria-label="GitHub"><Github /></a><a href={social.linkedin} aria-label="LinkedIn"><Linkedin /></a><a href={`mailto:${social.email}`} aria-label="Email"><Mail /></a></div>;
}

export function PageIntro({label,title,copy}:{label:string,title:React.ReactNode,copy:string}) {
  return <section className="page-intro"><p className="section-label">{label}</p><h1>{title}</h1><p>{copy}</p></section>;
}

export function EducationShowcase({ preview = false }: { preview?: boolean }) {
  const Heading = preview ? "h2" : "h1";
  return <section className={`education-showcase${preview ? " is-preview" : ""}`}>
    <header className="education-heading">
      <p className="section-label">Learning &amp; development</p>
      <Heading>Education &amp; <em>training.</em></Heading>
      <p>My learning path, from Narok County to current Computer Science studies in Nairobi.</p>
    </header>
    <div className="education-timeline" aria-label="Education timeline">
      {education.map((item, index) => <article className={`education-record${item.current ? " is-current" : ""}`} key={item.institution}>
        <div className="education-record-rail"><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="education-record-card">
          <header><p className="card-index">{item.current ? "Current studies" : "Education"}</p><time>{item.dates}</time></header>
          <h3>{item.institution}</h3><p className="education-qualification">{item.qualification}</p><p className="education-location">{item.location}</p>
        </div>
      </article>)}
    </div>
    {preview && <Link className="education-more" href="/education">Full education history <ArrowUpRight /></Link>}
  </section>;
}

export function ExperienceShowcase({ preview = false }: { preview?: boolean }) {
  const Heading = preview ? "h2" : "h1";
  return <section className={`experience-editorial${preview ? " is-preview" : ""}`}>
    <header className="experience-editorial-head">
      <div><p className="section-label">Experience / Selected chapters</p><Heading>Work shaped by<br /><em>people and practice.</em></Heading></div>
      <p className="experience-editorial-deck">A working record of the places, people and problems that have shaped how I work.</p>
      <span className="experience-edition">FIELD NOTES&nbsp;&nbsp; / &nbsp;&nbsp;01—02</span>
    </header>
    <div className="experience-entries">
      {experience.map((item, index) => <article className="experience-entry" key={item.organization + item.role}>
        <aside className="experience-entry-index"><span>{String(index + 1).padStart(2, "0")}</span><time>{item.dates}</time></aside>
        <div className="experience-entry-title"><p>{item.role}</p><h3>{item.organization}</h3></div>
        <div className="experience-entry-details">{item.details.map((detail, detailIndex) => <p key={detail}><span>{String(detailIndex + 1).padStart(2, "0")}</span>{detail}</p>)}</div>
      </article>)}
    </div>
    {preview ? <Link className="experience-more" href="/experience">Explore my experience <ArrowUpRight /></Link> : <Link className="experience-more" href="/contact">Let&apos;s talk about working together <ArrowUpRight /></Link>}
  </section>;
}

const focusIcons = { code: CodeBracket, engineering: UserCircle, writing: Briefcase } as const;

export function AboutContent() {
  return <section className="profile-overview">
    <div className="profile-copy">
      <p className="profile-kicker">My path so far</p>
      <h2>Computing professional, writer and builder of practical digital work.</h2>
      <p>I&apos;m Allan Senteu—a Diploma in Computer Science student and developer who combines software work, database projects and clear writing. I care about useful interfaces, solid structure underneath, and explaining technology in language people can follow.</p>
      <p>My path runs from cybercafé tutoring and document services through freelance research writing to web development and a growing focus on cybersecurity. I build one project, one article and one skill at a time.</p>
      <div className="profile-actions"><Link className="button" href="/contact">Get in touch <ArrowUpRight /></Link><a className="profile-cv-link" href="/allan-senteu-cv.pdf" download>Download my CV ↓</a></div>
    </div>
    <div className="profile-focus" aria-label="Areas of focus">
      {aboutFocus.map((item, index) => { const Icon = focusIcons[item.icon]; return <article className="profile-focus-card" key={item.title}><span className="focus-icon" aria-hidden="true"><Icon /></span><div><p className="card-index">0{index + 1} / Focus</p><h3>{item.title}</h3><p>{item.summary}</p></div><ArrowUpRight /></article>; })}
    </div>
  </section>;
}

const skillLogos: Record<string, { name: string; color: string }[]> = {
  html5: [{ name: "html5", color: "E34F26" }, { name: "css3", color: "1572B6" }],
  javascript: [{ name: "javascript", color: "F7DF1E" }],
  typescript: [{ name: "typescript", color: "3178C6" }],
  react: [{ name: "react", color: "61DAFB" }],
  nextjs: [{ name: "nextdotjs", color: "111111" }],
  mysql: [{ name: "mysql", color: "4479A1" }],
  git: [{ name: "git", color: "F05032" }],
  vercel: [{ name: "vercel", color: "111111" }],
  linux: [{ name: "linux", color: "FCC624" }]
};

function SkillLogo({ icon }: { icon: string }) {
  const logos = skillLogos[icon];
  if (logos) return <span className={`tech-logos${logos.length > 1 ? " has-pair" : ""}`} aria-hidden="true">{logos.map((logo) => <img key={logo.name} src={`https://cdn.simpleicons.org/${logo.name}/${logo.color}`} alt="" width="28" height="28" loading="lazy" />)}</span>;
  const fallback: Record<string, string> = { sql: "SQL", apps: "APP", security: "SEC" };
  return <span className={`tech-mark mark-${icon}`} aria-hidden="true">{fallback[icon] ?? ""}</span>;
}

export function SkillsContent() {
  return <>
    <section className="skills-showcase" aria-labelledby="technology-title">
      <header className="subsection-heading"><p className="section-label">01 / Tools in my projects</p><h2 id="technology-title">Skills &amp; <em>technologies</em></h2></header>
      <div className="tech-card-grid">{skillCards.map((skill, index) => <article className="tech-card" key={skill.name}><SkillLogo icon={skill.icon} /><div><h3>{skill.name}</h3><p>{skill.subtitle}</p></div><span className="tech-index">{String(index + 1).padStart(2, "0")}</span></article>)}</div>
    </section>
    <section className="cv-skills" aria-labelledby="cv-skills-title">
      <header className="subsection-heading"><p className="section-label">02 / From my CV</p><h2 id="cv-skills-title">Professional <em>strengths</em></h2></header>
      <div className="cv-skill-grid">{professionalSkills.map((group, index) => <article className="cv-skill-card" key={group.name}><span className="card-index">0{index + 1}</span><h3>{group.name}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
    </section>
  </>;
}

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return <article className="project-card">
    <a className="project-image" href={project.website ?? project.github ?? undefined} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}${project.website ? " live site" : " project"}`}>
      {project.preview && <Image src={project.preview} alt={project.previewAlt ?? `${project.title} project preview`} width={1600} height={900} sizes="(max-width: 760px) 100vw, 46vw" />}
      <span className={`preview-label${project.previewLabel === "Concept preview" ? " is-concept" : ""}`}>{project.previewLabel ?? "Project preview"}</span>
    </a>
    <div className="project-card-body"><p className="project-kind">0{index + 1} / {project.kind}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-foot"><div className="tool-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links">{project.website && <a href={project.website} target="_blank" rel="noreferrer">Visit live site <ArrowUpRight /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight /></a>}</div></div></div>
  </article>;
}
