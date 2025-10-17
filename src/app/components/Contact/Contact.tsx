"use client";

import { useState, useEffect } from "react";
import { Section, FormContainer } from "./styles";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovkypol"); // ✅ Your Formspree ID
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // ✅ Toast on success
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!", {
        position: "bottom-left",
        autoClose: 3000,
      });
      setFormData({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
      >
        Get in Touch
      </motion.h2>

      <FormContainer
        as={motion.form}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* ✅ Name Field */}
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#ff4d42" }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* ✅ Email Field */}
        <motion.input
          whileFocus={{ scale: 1.02, borderColor: "#ff4d42" }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* ✅ Message Field */}
        <motion.textarea
          whileFocus={{ scale: 1.02, borderColor: "#ff4d42" }}
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        ></motion.textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        {/* ✅ Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#ff4d42" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </FormContainer>

      <ToastContainer />
    </Section>
  );
}
