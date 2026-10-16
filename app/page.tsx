import Link from "next/link";
import Image from "next/image";
import { articles, projects, services } from "../content/site";
import { ArrowUpRight } from "./ui";
import { AboutContent, EducationShowcase, ExperienceShowcase, PageIntro, ProjectCard, SkillsContent, SocialLinks } from "./components";
import { ContactSection } from "./contact/ContactSection";

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
            <p className="hero-description">I build digital experiences, write academic papers and research, craft feature stories, and explore the systems and security behind the technologies we use every day.</p>
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

      <section className="home-about section" id="about">
        <PageIntro label="A little about me" title={<>About <em>Allan.</em></>} copy="Computing, practical digital work and clear writing—brought together by curiosity and a desire to make technology useful." />
        <AboutContent />
      </section>

      <section className="education section" id="education">
        <EducationShowcase preview />
      </section>

      <section className="experience section" id="experience">
        <ExperienceShowcase preview />
      </section>

      <section className="skills-section section home-skills" id="skills">
        <PageIntro label="Skills & toolkit" title={<>My <em>toolkit.</em></>} copy="Technologies and professional strengths I bring to my work." />
        <SkillsContent />
      </section>

      <section className="work section" id="projects">
        <div className="section-heading centered"><p className="section-label">06 / Featured projects</p><h2>Real work.<br /><em>Real previews.</em></h2></div>
        <div className="project-gallery">{projects.filter((project) => project.preview).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
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

      <ContactSection />
    </main>
  );
}
