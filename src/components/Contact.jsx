import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";
import contactme from "../assets/contact-me.png";
import { BiComment } from "react-icons/bi";
import { FiUser, FiMail } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Set "Sending email" message
  setSuccessMessage("Sending email...");
  setErrorMessage(""); // Clear any previous error

  // Send the user's message
  emailjs
    .send(
      "service_8vkwpdx", // Your service ID
      "template_fwralaq", // Your "Message Received" template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "hR0oGdKBUyxSWWiGd" // Your public user ID
    )
    .then(() => {
      // Update success message after email is sent
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage(""); // Clear any previous error

      // Auto-reply email
      return emailjs.send(
        "service_8vkwpdx", // Your service ID (same for auto-reply)
        "template_oddpq1l", // Your "Auto-Reply" template ID
        {
          name: formData.name,
          email: formData.email,
        },
        "hR0oGdKBUyxSWWiGd" // Your public user ID
      );
    })
    .then(() => {
      // Reset the form
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      // Handle error case
      setErrorMessage("Failed to send the message. Please try again.");
      setSuccessMessage(""); // Clear any previous success message
    });
};

  return (
    <div className="w-full p-2">
      <h1 className="font-bebas text-3xl text-white text-center">Contact Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6">
        {/* Illustration */}
        <div className="w-full h-1/2 md:w-1/2 flex justify-center">
          <img src={contactme} alt="Contact Illustration" />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2">
          <form
            className="rounded-lg p-6 text-white"
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="font-bold mb-2 flex items-center gap-2 text-xl"
              >
                <FiUser />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="font-bold mb-2 flex items-center gap-2 text-xl"
              >
                <FiMail />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="font-bold mb-2 flex items-center gap-2 text-xl"
              >
                <BiComment />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full p-3 bg-[#1788ae] text-white rounded-lg transition duration-300"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <p className="mt-4 text-center text-green-600">{successMessage}</p>
          )}

          {/* Error Message */}
          {errorMessage && (
            <p className="mt-4 text-center text-red-600">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
