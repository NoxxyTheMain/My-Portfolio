import { social } from "../../content/site";
import { ContactForm } from "./ContactForm";
import { Github, Linkedin, Mail, MapPin, Phone } from "../ui";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={`section contact-panel${standalone ? " contact-panel-standalone" : ""}`} id="contact">
      <header className="contact-panel-heading">
        <p className="section-label">Let&apos;s connect</p>
        <h1>Get in <em>touch.</em></h1>
        <p>Have a project in mind or want to collaborate? Send me a message and I&apos;ll be glad to hear from you.</p>
      </header>
      <div className="contact-panel-grid">
        <section className="contact-details" aria-labelledby="contact-details-title">
          <p className="contact-kicker">Contact information</p>
          <h2 id="contact-details-title">Reach me directly</h2>
          <ul>
            <li><span className="contact-icon" aria-hidden="true"><Mail /></span><div><span>Email</span><a href={`mailto:${social.email}`}>{social.email}</a></div></li>
            <li><span className="contact-icon" aria-hidden="true"><Phone /></span><div><span>Phone</span><a href={`tel:${social.phone.replace(/\s/g, "")}`}>{social.phone}</a></div></li>
            <li><span className="contact-icon" aria-hidden="true"><MapPin /></span><div><span>Address</span><p>{social.address}</p></div></li>
          </ul>
          <div className="contact-socials" aria-label="Social profiles">
            <a href={social.linkedin} aria-label="LinkedIn"><Linkedin /></a>
            <a href={social.github} aria-label="GitHub"><Github /></a>
          </div>
        </section>
        <section className="contact-form-card" aria-labelledby="contact-form-title">
          <p className="contact-kicker">A note is a good start</p>
          <h2 id="contact-form-title">Send a message</h2>
          <ContactForm />
        </section>
      </div>
    </section>
  );
}
