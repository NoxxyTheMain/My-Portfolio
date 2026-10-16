import { AboutContent, PageIntro } from "../components";

export default function AboutPage() {
  return <main className="inner-page profile-page">
    <PageIntro label="A little about me" title={<>About <em>Allan.</em></>} copy="Computing, practical digital work and clear writing—brought together by curiosity and a desire to make technology useful." />
    <AboutContent />
  </main>;
}
