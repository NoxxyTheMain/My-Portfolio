import { skills } from "../../content/site";
import { PageIntro } from "../components";
export default function SkillsPage(){return <main className="inner-page"><PageIntro label="Toolkit" title={<>A working<br /><em>set of tools.</em></>} copy="No percentage bars—just the technologies I use, and the areas I am intentionally growing into."/><section className="skills page-skills">{skills.map(group=><div className="skill-group" key={group.name}><h2>{group.name}</h2><div>{group.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</section></main>}
