import { PageIntro, ProjectCard } from "../components";
import { projects } from "../../content/site";

export default function WorkPage() {
  return <main className="inner-page">
    <PageIntro label="Selected work" title={<>Things I’ve made<br />and kept <em>thinking about.</em></>} copy="Practical digital projects shaped by clear interfaces, real use cases and an ongoing interest in the systems behind them." />
    <section className="project-gallery page-project-gallery" aria-label="Selected projects">
      {projects.filter((project) => project.preview).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
    </section>
  </main>;
}
