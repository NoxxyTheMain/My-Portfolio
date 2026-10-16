import Link from "next/link";
import Image from "next/image";
import { articles, education, experience, professionalSkills, projects, services, skills, social } from "../content/site";
import { ArrowUpRight } from "./ui";
import { SocialLinks } from "./components";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow reveal">Writer · Builder · Explorer of technology</p>
            <h1 className="reveal delay-1">Allan<br /><em>Senteu</em></h1>
            <p className="hero-role">Computing &amp; Technology</p>
            <p className="hero-description">I build digital experiences, write about technology, and explore the systems and security behind the things we use every day.</p>
            <div className="actions"><a className="button" href="#projects">Explore my work <ArrowUpRight /></a><a className="text-link" href="#writing">Read my writing <span>↓</span></a></div>
            <SocialLinks />
          </div>
          <figure className="hero-portrait reveal delay-1">
            <Image src="/allan-senteu-hero.jpg" alt="Allan Senteu standing beside a car" width={3338} height={5000} priority sizes="(max-width: 760px) 88vw, 42vw" />
            <figcaption><span>Allan Senteu</span><span>Computing &amp; Technology</span></figcaption>
          </figure>
        </div>
        <a className="scroll-hint" href="#about">Scroll to explore <span>↓</span></a>
      </section>

      <section className="statement section" id="about">
        <p className="section-label">01 / About</p>
        <div><h2>Technology × writing × <em>curiosity.</em></h2><div className="prose"><p>I come from a Computer Science background and have always been drawn to both sides of technology: making things with it and making sense of it.</p><p>For me, a good product has more than a clean interface. It has a reason to exist, an underlying system worth understanding, and a story that people can follow.</p></div></div>
      </section>

      <section className="education section" id="education">
        <div className="section-heading centered"><p className="section-label">02 / Education</p><h2>Learning, <em>in progress.</em></h2></div>
        <div className="education-list">{education.map((item, index) => <article className="education-item" key={item.institution}><span className="timeline-marker">0{index + 1}</span><div><h3>{item.institution}</h3><p>{item.qualification}</p></div><time>{item.dates}</time></article>)}</div>
      </section>

      <section className="experience section" id="experience">
        <div className="section-heading centered"><p className="section-label">03 / Experience</p><h2>Work built around<br /><em>people and ideas.</em></h2></div>
        <div className="experience-list">{experience.map((item) => <article className="experience-card" key={item.organization + item.role}><div className="experience-meta"><span>{item.dates}</span><i aria-hidden="true" /></div><div className="experience-body"><p className="experience-org">{item.organization}</p><h3>{item.role}</h3><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="section-heading centered"><p className="section-label">04 / Skills</p><h2>What I bring <em>to the work.</em></h2></div>
        <div className="skills-grid">{professionalSkills.map((group, index) => <article className="skills-card" key={group.name}><span className="card-index">0{index + 1}</span><h3>{group.name}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="toolkit section" id="toolkit">
        <div className="section-heading"><p className="section-label">05 / Toolkit</p><h2>The tools and topics<br />I’m <em>working with.</em></h2></div>
        <div className="toolkit-grid">{skills.map((group, index) => <article className="toolkit-card" key={group.name}><span className="card-index">0{index + 1}</span><h3>{group.name}</h3><div className="tool-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="work section" id="projects">
        <div className="section-heading centered"><p className="section-label">06 / Featured projects</p><h2>Real work.<br /><em>Real previews.</em></h2></div>
        <div className="project-gallery">{projects.filter((project) => project.preview).map((project, index) => <Project key={project.title} project={project} index={index} />)}</div>
        <div className="project-text-list" aria-label="Other projects">{projects.filter((project) => !project.preview).map((project, index) => <article className="project-text-card" key={project.title}><span>0{index + 1} / {project.kind}</span><h3>{project.title}</h3><p>{project.description}</p>{project.stack.length > 0 && <div className="tool-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>}</article>)}</div>
        <Link className="all-projects" href="/work">View the project list <ArrowUpRight /></Link>
      </section>

      <section className="services section" id="services">
        <div className="section-heading centered"><p className="section-label">07 / Services</p><h2>Ways I can <em>help.</em></h2></div>
        <div className="services-grid">{services.map((service, index) => <article className="service-card" key={service.title}><span className="card-index">0{index + 1}</span><h3>{service.title}</h3><p>{service.summary}</p><a href="#contact" aria-label={`Ask about ${service.title}`}>Discuss a project <ArrowUpRight /></a></article>)}</div>
      </section>

      <section className="writing section" id="writing">
        <div className="section-heading"><p className="section-label">08 / Writing</p><h2>Notes from<br />the <em>edge of change.</em></h2><p className="section-copy">Ideas about technology, development, cybersecurity and the world being reshaped by digital systems.</p></div>
        <div className="article-list">{articles.slice(0, 3).map((article, index) => <article className="article" key={article.title}><span>0{index + 1} / {article.type}</span><h3>{article.title}</h3><p>{article.excerpt}</p><Link href={`/writing/${article.slug}`} aria-label={`Read ${article.title}`}>Read full piece <ArrowUpRight /></Link></article>)}</div>
        <Link className="all-writing" href="/writing">View all writing <ArrowUpRight /></Link>
      </section>

      <section className="contact section" id="contact">
        <p className="section-label">09 / Contact</p>
        <h2>Have something worth<br /><em>building? Let’s talk.</em></h2>
        <p>For a project, an idea, or a conversation about where technology is headed.</p>
        <a className="contact-email" href={`mailto:${social.email}`}>{social.email}<ArrowUpRight /></a>
        <div className="contact-links"><a href={social.github}>GitHub <ArrowUpRight /></a><a href={social.linkedin}>LinkedIn <ArrowUpRight /></a></div>
      </section>
      <footer><p>© {new Date().getFullYear()} Allan Senteu</p><p>The next interesting problem is probably worth exploring.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

function Project({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <article className="project-card"><div className="project-image"><Image src={project.preview!} alt={project.previewAlt ?? `${project.title} project preview`} width={1600} height={900} sizes="(max-width: 760px) 100vw, 46vw" /></div><div className="project-card-body"><p className="project-kind">0{index + 1} / {project.kind}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-foot"><div className="tool-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a href={project.github}>View on GitHub <ArrowUpRight /></a></div></div></article>;
}
