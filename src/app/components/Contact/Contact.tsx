"use client";

import { useState } from "react";
import { Section, FormContainer } from "./styles";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section>
      {/* Animate heading when it enters the viewport */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }} // triggers every time it's visible
      >
        Get in Touch
      </motion.h2>

      {/* Animate form on scroll */}
      <FormContainer
        as={motion.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#ff4d42" }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#ff4d42" }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#ff4d42" }}
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#e63933" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="submit"
        >
          Send Message
        </motion.button>
      </FormContainer>
    </Section>
  );
}
