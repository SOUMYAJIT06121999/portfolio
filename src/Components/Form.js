import "./FormStyles.css";

import React, { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/soumyajitbhadra20@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject || "New Message"}`,
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error("Unable to send message right now.");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. You'll receive it at soumyajitbhadra20@gmail.com.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Sorry, something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="form-shell">
        <div className="form-intro">
          <h2>Let's build something together</h2>
          <p>Tell me about your idea and I'll get back to you quickly.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project inquiry"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button className="btn submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
        </form>
      </div>
    </section>
  );
};

export default Form;
