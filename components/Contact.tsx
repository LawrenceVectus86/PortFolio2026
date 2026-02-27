
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black mb-8"
          >
            Let's <span className="text-gradient">Talk.</span>
          </motion.h2>
          <p className="text-gray-400 mb-12">
            Have a project in mind or just want to say hi? 
            My inbox is always open for interesting collaborations.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email</p>
                <p className="font-medium">hello@nexus-studio.io</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Based In</p>
                <p className="font-medium">Tokyo, JP (Remote Worldwide)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-10 rounded-3xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-3 tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-3 tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold text-gray-500 mb-3 tracking-widest">Your Message</label>
                <textarea
                  required
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                disabled={isSubmitting || isSent}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                  isSent 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20'
                }`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  <>Sent Successfully</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
