import Image from "next/image";
import { projects } from "../../content/site";
import { PageIntro } from "../components";
import { ArrowUpRight } from "../ui";

export default function WorkPage() {
  return (
    <main className="inner-page">
      <PageIntro
        label="Selected work"
        title={<>Things I’ve made<br />and kept <em>thinking about.</em></>}
        copy="Practical digital projects shaped by clear interfaces, real use cases and an ongoing interest in the systems behind them."
      />
      <section className="project-list page-projects">
        {projects.map((project, index) => (
          <article className={`project project-page${project.preview ? " has-preview" : ""}`} key={project.title}>
            {project.preview && (
              <div className="project-visual">
                <Image
                  src={project.preview}
                  alt={project.previewAlt ?? `${project.title} project preview`}
                  width={1600}
                  height={900}
                  sizes="(max-width: 760px) 100vw, 52vw"
                />
              </div>
            )}
            <div className="project-info">
              <p className="project-kind">0{index + 1} / {project.kind}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-foot">
                <div>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                {project.github && <a href={project.github}>View project <ArrowUpRight /></a>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
