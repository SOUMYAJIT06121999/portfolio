import "./FormStyles.css";

import React, { useMemo, useState } from "react";

const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [botField, setBotField] = useState("");

  const isSubmitted = useMemo(() => {
    if (typeof window === "undefined") return false;
    const query = new URLSearchParams(window.location.search);
    return query.get("submitted") === "true";
  }, []);

  const currentUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  const handleSubmit = (e) => {
    if (botField.trim()) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <section className="contact-section">
      <div className="form-shell">
        <div className="form-intro">
          <h2>Let&apos;s build something together</h2>
          <p>Tell me about your idea and I&apos;ll get back to you quickly.</p>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/soumyajitbhadra20@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="Portfolio Contact: New Message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={currentUrl ? `${currentUrl.split("?")[0]}?submitted=true` : ""} />

          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" placeholder="John Doe" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="john@example.com" required />

          <label htmlFor="subject">Subject</label>
          <input id="subject" name="subject" type="text" placeholder="Project inquiry" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Type your message here" required />

          <label className="hidden-bot-field" htmlFor="website">
            Website
          </label>
          <input
            id="website"
            className="hidden-bot-field"
            name="website"
            type="text"
            autoComplete="off"
            tabIndex="-1"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
          />

          <button className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {isSubmitted && <p className="form-note">Message has been sent. I will contact you soon.</p>}
        </form>
      </div>
    </section>
  );
};

export default Form;
