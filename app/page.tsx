import Link from "next/link";
import Image from "next/image";
import { articles, projects, skills, social } from "../content/site";
import { ArrowUpRight } from "./ui";
import { SocialLinks } from "./components";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <p className="eyebrow reveal">Writer. Builder. Explorer of technology.</p>
        <h1 className="reveal delay-1">Allan<br /><em>Senteu</em></h1>
        <div className="hero-bottom reveal delay-2">
          <p>I build digital experiences, write about technology, and explore the systems and security behind the things we use every day.</p>
          <div className="actions"><a className="button" href="#work">Explore my work <ArrowUpRight /></a><a className="text-link" href="#writing">Read my writing <span>↓</span></a></div>
        </div>
        <SocialLinks />
        <Link className="scroll-hint" href="/about">Discover more <span>→</span></Link>
      </section>

      <section className="statement section" id="statement">
        <p className="section-label">01 / A little context</p>
        <div><h2>Technology × writing × <em>curiosity.</em></h2><div className="prose"><p>I come from a Computer Science background and have always been drawn to both sides of technology: making things with it and making sense of it.</p><p>For me, a good product has more than a clean interface. It has a reason to exist, an underlying system worth understanding, and a story that people can follow.</p></div></div>
      </section>

      <section className="practice section" id="what-i-do">
        <p className="section-label">02 / What I do</p>
        <div className="practice-list">
          <Practice n="01" title="Build" text="Websites, applications and digital experiences that keep real people and real problems in view." tags={["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "MySQL"]} />
          <Practice n="02" title="Write" text="Clear, considered writing on technology, digital culture, development, cybersecurity and the ideas worth sitting with." tags={["Technology", "Development", "Digital culture", "Cybersecurity"]} />
          <Practice n="03" title="Explore" text="A growing technical practice shaped by questions about how systems connect, authenticate and stay secure." tags={["Networking", "Linux", "Web security", "Databases", "Authentication"]} />
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading"><p className="section-label">03 / Selected work</p><h2>Things I’ve made<br />and kept <em>thinking about.</em></h2></div>
        <div className="project-list">{projects.map((project, i) => <Project key={project.title} project={project} index={i} />)}</div>
      </section>

      <section className="writing section" id="writing">
        <div className="section-heading"><p className="section-label">04 / Writing</p><h2>Notes from<br />the <em>edge of change.</em></h2><p className="section-copy">Ideas about technology, development, cybersecurity and the world being reshaped by digital systems.</p></div>
        <div className="article-list">{articles.slice(0,3).map((article, i) => <article className="article" key={article.title}><span>0{i + 1} / {article.type}</span><h3>{article.title}</h3><p>{article.excerpt}</p><Link href={`/writing/${article.slug}`} aria-label={`Read ${article.title}`}>Read piece <ArrowUpRight /></Link></article>)}</div>
        <Link className="all-writing" href="/writing">View all writing <ArrowUpRight /></Link>
      </section>

      <section className="intersection section">
        <p className="section-label">05 / The intersection</p>
        <div className="intersection-word">SYSTEMS<span>+</span>STORIES</div>
        <div className="intersection-copy"><p>Technology can be powerful and still be poorly understood. I enjoy working at the point where technical systems meet human understanding.</p><p>Writing pushes me to explain the why. Building keeps me close to the how. Both make the other more useful.</p></div>
      </section>

      <section className="about-skills section" id="about">
        <div className="about"><p className="section-label">06 / About</p><h2>Still early.<br /><em>Never idle.</em></h2><p>I’m Allan Senteu—a Computer Science learner interested in software development, cybersecurity and emerging technology. I’m building a body of work one curious project, considered article and deeper question at a time.</p><div className="direction"><span>Computer Science</span><b>→</b><span>Software Development</span><b>→</b><span>Cybersecurity</span></div></div>
        <div className="skills" id="skills"><p className="section-label">07 / Toolkit</p>{skills.map(group => <div className="skill-group" key={group.name}><h3>{group.name}</h3><div>{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="contact section" id="contact">
        <p className="section-label">08 / Contact</p>
        <h2>Have something worth<br /><em>building? Let’s talk.</em></h2>
        <figure className="contact-portrait" aria-label="Allan Senteu"><Image src="/allan-senteu.jpg" alt="Allan Senteu" width={900} height={1200} sizes="(max-width: 760px) 112px, 170px" /></figure>
        <p>For a project, an idea, or a conversation about where technology is headed.</p>
        <a className="contact-email" href={`mailto:${social.email}`}>{social.email}<ArrowUpRight /></a>
        <div className="contact-links"><a href={social.github}>GitHub <ArrowUpRight /></a><a href={social.linkedin}>LinkedIn <ArrowUpRight /></a></div>
      </section>
      <footer><p>© {new Date().getFullYear()} Allan Senteu</p><p>The next interesting problem is probably worth exploring.</p><Link href="#top">Back to top ↑</Link></footer>
    </main>
  );
}

function Practice({n,title,text,tags}:{n:string,title:string,text:string,tags:string[]}) { return <article className="practice-item"><span>{n}</span><h3>{title}</h3><p>{text}</p><div>{tags.map(t=><i key={t}>{t}</i>)}</div></article>; }
function Project({project,index}:{project:(typeof projects)[number],index:number}) { return <article className={`project project-${index}`}><div className="project-visual"><span>{project.mark}</span><div className="screen"><b>{project.visual}</b><i /><i /><i /></div></div><div className="project-info"><p className="project-kind">0{index+1} / {project.kind}</p><h3>{project.title}</h3><p>{project.description}</p><dl><div><dt>Problem</dt><dd>{project.problem}</dd></div><div><dt>Contribution</dt><dd>{project.contribution}</dd></div></dl><div className="project-foot"><div>{project.stack.map(t=><span key={t}>{t}</span>)}</div><a href={project.github} aria-label={`${project.title} on GitHub`}>View project <ArrowUpRight /></a></div></div></article>; }
