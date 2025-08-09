import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useForm } from '@inertiajs/react';

export default function ContactForm() {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setPref = () => setReducedMotion(mq.matches);
    setPref();
    mq.addEventListener?.('change', setPref);
    return () => mq.removeEventListener?.('change', setPref);
  }, []);

  const xLeft = useMotionValue(0);
  const yLeft = useMotionValue(0);
  const rotateXLeft = useTransform(yLeft, [-50, 50], [7, -7]);
  const rotateYLeft = useTransform(xLeft, [-50, 50], [-7, 7]);

  const xRight = useMotionValue(0);
  const yRight = useMotionValue(0);
  const rotateXRight = useTransform(yRight, [-50, 50], [7, -7]);
  const rotateYRight = useTransform(xRight, [-50, 50], [-7, 7]);

  const handleMouse =
    (xMv: MotionValue<number>, yMv: MotionValue<number>) =>
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (reducedMotion) return;
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      xMv.set(e.clientX - rect.left - rect.width / 2);
      yMv.set(e.clientY - rect.top - rect.height / 2);
    };

  // ✅ Removed unused `_e` parameter
  const handleLeave =
    (xMv: MotionValue<number>, yMv: MotionValue<number>) => () => {
      xMv.set(0);
      yMv.set(0);
    };

  const { data, setData, post, processing, reset } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectLocation: '',
    message: '',
    company: '',
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.company) return;
    post('/contact', {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#f0f6ff] to-[#e4efff] py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact <span className="text-blue-600">Us</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Ready to join ProMart or have questions? We’re here to help you connect with the right opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left side */}
          <motion.div
            onMouseMove={handleMouse(xLeft, yLeft)}
            onMouseLeave={handleLeave(xLeft, yLeft)}
            style={
              reducedMotion
                ? { transformStyle: 'preserve-3d' }
                : { rotateX: rotateXLeft, rotateY: rotateYLeft, transformStyle: 'preserve-3d' }
            }
            className="space-y-6 bg-white p-6 rounded-2xl shadow-md will-change-transform"
          >
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600" size={22} />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600 text-sm">
                  No. 123, Business District<br />Colombo 01, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-blue-600" size={22} />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600 text-sm">info@promart.lk</p>
                <p className="text-gray-600 text-sm">support@promart.lk</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-blue-600" size={22} />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600 text-sm">+94 712 345 678</p>
                <p className="text-gray-600 text-sm">+94 112 345 567</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-blue-600" size={22} />
              <div>
                <h4 className="font-semibold text-gray-800">Business Hours</h4>
                <p className="text-gray-600 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600 text-sm">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div className="w-full rounded-xl overflow-hidden shadow-lg mt-6">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15831.095530507108!2d80.1594167!3d9.6779444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afef0a7a1c28f6d%3A0x5d4c617229c10f8e!2s9%C2%B040'40.6%22N%2080%C2%B009'33.9%22E!5e0!3m2!1sen!2slk!4v1691537400000!5m2!1sen!2slk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.google.com/maps/place/9%C2%B040'40.6%22N+80%C2%B009'33.9%22E/@9.6779444,80.1594167,858m"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium shadow hover:opacity-90 transition mt-4"
            >
              Find Us on Map
            </a>
          </motion.div>

          {/* Right side */}
          <motion.form
            onMouseMove={handleMouse(xRight, yRight)}
            onMouseLeave={handleLeave(xRight, yRight)}
            style={
              reducedMotion
                ? { transformStyle: 'preserve-3d' }
                : { rotateX: rotateXRight, rotateY: rotateYRight, transformStyle: 'preserve-3d' }
            }
            onSubmit={submit}
            className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-4 will-change-transform"
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Send us a Message</h4>

            <input
              type="text"
              name="company"
              autoComplete="off"
              tabIndex={-1}
              value={data.company}
              onChange={(e) => setData('company', e.target.value)}
              className="hidden"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                required
                value={data.firstName}
                onChange={(e) => setData('firstName', e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500"
                placeholder="First Name *"
                aria-label="First Name"
              />
              <input
                type="text"
                name="lastName"
                required
                value={data.lastName}
                onChange={(e) => setData('lastName', e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500"
                placeholder="Last Name *"
                aria-label="Last Name"
              />
            </div>

            <input
              type="email"
              name="email"
              required
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500"
              placeholder="Email Address *"
              aria-label="Email Address"
            />

            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />

            <input
              type="text"
              name="projectLocation"
              value={data.projectLocation}
              onChange={(e) => setData('projectLocation', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500"
              placeholder="Project Location"
              aria-label="Project Location"
            />

            <textarea
              name="message"
              required
              value={data.message}
              onChange={(e) => setData('message', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-blue-500 h-24"
              placeholder="Project Details / Message *"
              aria-label="Message"
            />

            <button
              type="submit"
              disabled={processing}
              className={`w-full text-white py-3 rounded-xl font-semibold shadow transition ${
                processing
                  ? 'bg-blue-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90'
              }`}
              aria-busy={processing}
            >
              {processing ? 'Sending…' : 'Send Message →'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
