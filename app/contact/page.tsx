"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#eff3f8] to-[#ffffff] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute w-[600px] h-[600px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 top-[-80px] right-[-100px]" />
      <div className="absolute w-[600px] h-[600px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 bottom-[-100px] left-[30%]" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
        {/* Left Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 space-y-6 mb-10 md:mb-0"
        >
          <h2 className="text-4xl font-bold text-gray-800">Contactez-nous</h2>
          <p className="text-gray-500">Nous sommes ravis de vous entendre.</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>hello@votresite.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-5 h-5" />
              <span>+212 6 00 00 00 00</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>Casablanca, Maroc</span>
            </div>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-2/3 bg-white/80 backdrop-blur-md rounded-xl shadow-xl p-8 space-y-6"
        >
          <div>
            <label className="text-gray-700 block mb-2">Nom</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="email@exemple.com"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 block mb-2">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Votre message"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Envoyer <Send className="w-4 h-4" />
          </button>
        </motion.form>
      </div>
    </main>
  );
};

export default ContactPage;
