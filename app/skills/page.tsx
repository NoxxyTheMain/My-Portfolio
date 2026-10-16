import { PageIntro, SkillsContent } from "../components";

export default function SkillsPage() {
  return <main className="inner-page skills-page">
    <PageIntro label="Skills & toolkit" title={<>My <em>toolkit.</em></>} copy="Technologies and professional strengths I bring to my work." />
    <SkillsContent />
  </main>;
}
