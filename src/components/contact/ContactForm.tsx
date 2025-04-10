import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using emailjs
    if (form.current) {
      emailjs
        .sendForm("service_l8l9koa", "template_ulij52p", form.current, {
          publicKey: "tkNtyofgr_HvKl9UC",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            // Optionally reset form data after successful submission
            setFormData({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="from_name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="from_email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center"
      >
        <Send className="w-4 h-4 mr-2" />
        Send Message
      </button>
    </form>
  );
}
