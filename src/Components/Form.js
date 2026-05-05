import "./FormStyles.css";

import React, { useMemo, useState } from "react";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = useMemo(() => {
    return (
      formValues.name.trim().length > 1 &&
      /\S+@\S+\.\S+/.test(formValues.email) &&
      formValues.subject.trim().length > 2 &&
      formValues.message.trim().length > 10
    );
  }, [formValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <section className="form-section" id="contact-form">
      <div className="form-card">
        <div className="form-header">
          <h2>Let&apos;s Build Something Great</h2>
          <p>
            Share your idea and I&apos;ll get back to you shortly. Your message will
            be delivered directly to my inbox.
          </p>
        </div>

        <form
          className="contact-form"
          action="https://formsubmit.co/soumyajitbhadra20@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New portfolio contact request" />

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={formValues.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formValues.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project Collaboration"
            value={formValues.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Tell me about your project goals..."
            value={formValues.message}
            onChange={handleChange}
            required
          />

          <button className="btn submit-btn" type="submit" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
