"use client";

import { useState } from "react";
import { social } from "../../content/site";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with your message ready. If it doesn’t, email me directly at ");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Your name</span>
        <input name="name" type="text" placeholder="Name..." autoComplete="name" required />
      </label>
      <label>
        <span>Your Email</span>
        <input name="email" type="email" placeholder="Email..." autoComplete="email" required />
      </label>
      <label>
        <span>Your message</span>
        <textarea name="message" rows={6} placeholder="Hello, I'd like to talk about..." required />
      </label>
      <button type="submit">Prepare email <span aria-hidden="true">↗</span></button>
      {status && <p className="contact-form-status" role="status">{status}{status.startsWith("Your email app") && <a href={`mailto:${social.email}`}>{social.email}</a>}</p>}
    </form>
  );
}
