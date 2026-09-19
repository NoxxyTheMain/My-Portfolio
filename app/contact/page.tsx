import { social } from "../../content/site";
import { ArrowUpRight } from "../ui";
import { PageIntro } from "../components";
export default function ContactPage(){return <main className="inner-page contact-page"><PageIntro label="Contact" title={<>Have something worth<br /><em>building? Let’s talk.</em></>} copy="For a project, an idea, or a conversation about where technology is headed."/><section className="contact-options"><a href={`mailto:${social.email}`}>{social.email}<ArrowUpRight /></a><a href={`tel:${social.phone.replace(/\s/g, "")}`}>{social.phone}<ArrowUpRight /></a><a href={social.github}>GitHub <ArrowUpRight /></a><a href={social.linkedin}>LinkedIn <ArrowUpRight /></a></section></main>}
