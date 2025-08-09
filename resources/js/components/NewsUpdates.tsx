import React from 'react';
import { Mail, Calendar, User, Building2, Leaf, Wrench } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function NewsUpdates() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            News & Industry <span className="text-blue-600">Updates</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Stay informed with the latest developments in Sri Lanka&apos;s construction and engineering sector
          </p>
        </div>

        {/* Featured News Card */}
        <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(30,144,255,0.15)] flex flex-col md:flex-row p-8 mb-12 
                        transform transition-transform hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(30,144,255,0.25)]">
          <div className="flex-1">
            <div className="flex gap-3 mb-4">
              <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-4 py-1.5 rounded-full">
                Featured
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-4 py-1.5 rounded-full">
                Technology
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
              Digital Transformation in Construction: The Future is Now
            </h3>
            <p className="text-gray-700 mb-6 max-w-lg">
              Explore how technology is revolutionizing the construction industry in Sri Lanka and what it means for professionals.
            </p>
            <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
              <span className="flex items-center gap-2"><User size={18} /> ProMart Editorial</span>
              <span className="flex items-center gap-2"><Calendar size={18} /> March 15, 2024</span>
            </div>
            <Link
              href="/news/digital-transformation"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition"
            >
              Read Full Article →
            </Link>
          </div>

          <div className="md:w-48 md:ml-10 mt-8 md:mt-0 flex items-center justify-center perspective-1000">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center 
                            shadow-lg transform transition-transform hover:rotate-y-12 hover:scale-105">
              <Wrench size={42} className="text-white" />
            </div>
          </div>
        </div>

        {/* 3 Smaller News Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              href: '/news/new-building-regulations-2024',
              tag: 'Regulations',
              title: 'New Building Regulations Announced for 2024',
              desc: 'Government introduces updated safety standards and environmental requirements.',
              author: 'A. Policy Team',
              date: 'March 12, 2024',
              icon: <Building2 size={36} className="text-blue-500" />
            },
            {
              href: '/news/sustainable-materials-trend',
              tag: 'Sustainability',
              title: 'Sustainable Materials: A Growing Trend',
              desc: 'How eco-friendly construction materials are becoming the industry standard.',
              author: 'A. Green Building',
              date: 'March 10, 2024',
              icon: <Leaf size={36} className="text-green-500" />
            },
            {
              href: '/news/infrastructure-projects-update',
              tag: 'Infrastructure',
              title: 'Infrastructure Development Projects Update',
              desc: 'Latest updates on major infrastructure projects across Sri Lanka.',
              author: 'A. Project Updates',
              date: 'March 8, 2024',
              icon: <Wrench size={36} className="text-orange-500" />
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-[0_15px_30px_rgba(0,0,0,0.08)] p-6 flex flex-col 
                         transform transition-transform hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-4">{item.icon}</div>
              <span className="text-xs font-semibold px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 inline-block">
                {item.tag}
              </span>
              <h4 className="text-lg font-bold text-gray-900 mt-4 mb-3 leading-snug">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-5 flex-grow">{item.desc}</p>
              <div className="flex items-center gap-5 text-gray-400 text-xs mb-5">
                <span className="flex items-center gap-1"><User size={14} /> {item.author}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
              </div>
              <Link
                href={item.href}
                className="inline-block px-5 py-2 bg-blue-50 text-blue-600 font-semibold rounded-2xl hover:bg-blue-100 text-sm transition"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl shadow-lg p-12 text-center">
          <Mail size={40} className="mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            Stay Updated with Industry News
          </h3>
          <p className="mb-8 text-blue-200 max-w-lg mx-auto">
            Get the latest construction and engineering updates delivered to your inbox weekly
          </p>
          <div className="flex justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-2xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="px-7 py-3 bg-white text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-4">No spam, unsubscribe at any time</p>
        </div>
      </div>
    </section>
  );
}
