import Link from "next/link";
import { social } from "../content/site";
import { ArrowUpRight, Github, Linkedin, Mail } from "./ui";

export function SiteNav() {
  return <nav className="site-nav"><Link className="brand" href="/">Allan Senteu<span>.</span></Link><div className="nav-links"><Link href="/work">Work</Link><Link href="/writing">Writing</Link><Link href="/about">About</Link><Link href="/skills">Skills</Link></div><Link className="nav-contact" href="/contact">Let’s talk <ArrowUpRight /></Link></nav>;
}

export function SocialLinks() {
  return <div className="hero-socials"><a href={social.github} aria-label="GitHub"><Github /></a><a href={social.linkedin} aria-label="LinkedIn"><Linkedin /></a><a href={`mailto:${social.email}`} aria-label="Email"><Mail /></a></div>;
}

export function PageIntro({label,title,copy}:{label:string,title:React.ReactNode,copy:string}) {
  return <section className="page-intro"><p className="section-label">{label}</p><h1>{title}</h1><p>{copy}</p></section>;
}
