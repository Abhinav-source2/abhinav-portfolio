import React, { useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import toast from 'react-hot-toast'; // ✅ Toast import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending your message...');

    try {
      const response = await fetch("https://formspree.io/f/xeokookj", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      toast.dismiss(loadingToast);

      if (response.ok) {
        toast.success('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('❌ Something went wrong. Please try again.');
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('⚠️ Error sending message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 md:px-8 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-6">
          <p className="inline-block px-4 py-1 text-sm rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            Let’s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-cyan-300">
            Ready to create something amazing?
          </h2>
          <p className="text-gray-300 max-w-md">
            Whether you have a groundbreaking idea or just want to chat about tech, I’m always excited to connect with fellow innovators.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:abhinav19@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition"
            >
              <FiMail className="text-xl text-cyan-400" />
              <div>
                <p className="text-sm">Email me directly</p>
                <p className="text-white font-medium">abhinav19@gmail.com</p>
              </div>
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/AbhinavJajoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 border border-white/10 transition"
              >
                <FiGithub className="text-xl text-white" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-jajoo-b81b2b203/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
              >
                <FiLinkedin className="text-xl text-white" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg">
              <FiMapPin className="text-xl text-green-400" />
              <p className="text-sm text-green-300">
                Currently in Jaipur — open to remote collaboration and local meetups.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-md border border-cyan-500/20 shadow-md shadow-cyan-500/10">
          <h3 className="text-2xl font-semibold mb-2 text-cyan-300">Send me a message</h3>
          <p className="text-sm text-gray-300 mb-6">I typically respond within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <label className="text-sm block mb-1" htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/10 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="text-sm block mb-1" htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/10 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="text-sm block mb-1" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Let's discuss your project"
                className="w-full bg-white/10 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div>
              <label className="text-sm block mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Tell me about your project, ideas, or just say hello..."
                className="w-full bg-white/10 p-3 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-md hover:scale-[1.02] transition"
            >
              ✈️ Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
