// src/components/Contact.jsx
import React, { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch("https://formspree.io/f/xeokookj", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('⚠️ Error sending message. Please try later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <div className="space-y-6">
          <p className="inline-block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Let’s Connect</p>
          <h2 className="text-4xl font-bold leading-tight">Ready to create something amazing?</h2>
          <p className="text-gray-300 max-w-md">
            Whether you have a groundbreaking idea or just want to chat about technology, I’m always excited to connect with fellow innovators.
          </p>

          <div className="space-y-4">
            <a href="mailto:abhinav19@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10">
              <FiMail className="text-xl text-purple-400" />
              <div>
                <p className="text-sm">Email me directly</p>
                <p className="text-white font-medium">abhinav19@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              <a href="https://github.com/AbhinavJajoo" target="_blank" rel="noopener noreferrer" className="bg-white/5 px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-white/10">
                <FiGithub className="text-xl" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-500">
                <FiLinkedin className="text-xl" /> LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg">
              <FiMapPin className="text-xl text-green-400" />
              <p className="text-sm text-green-300">
                Currently in Jaipur — open to remote collaboration and local meetups.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md">
          <h3 className="text-2xl font-semibold mb-2">Send me a message</h3>
          <p className="text-sm text-gray-300 mb-6">I typically respond within 24 hours</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm block mb-1">Your name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full bg-white/10 p-3 rounded-md text-white" />
              </div>
              <div className="w-1/2">
                <label className="text-sm block mb-1">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-white/10 p-3 rounded-md text-white" />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1">Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Let's discuss your project" className="w-full bg-white/10 p-3 rounded-md text-white" />
            </div>

            <div>
              <label className="text-sm block mb-1">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required placeholder="Tell me about your project, ideas, or just say hello..." className="w-full bg-white/10 p-3 rounded-md text-white"></textarea>
            </div>

            <button type="submit" className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-md hover:scale-[1.01] transition">
              ✈️ Send Message
            </button>
            {status && <p className="text-sm text-center text-purple-400 mt-3">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
