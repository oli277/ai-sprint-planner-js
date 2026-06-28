import React, { useState } from 'react';

const SprintifyLandingPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "What exactly is Sprintify?",
      answer: "It's a smarter way to manage your team's work. You drop in a message or a rough idea, and Sprintify turns it into an organized set of tasks — ready to assign and track. Less setup, more shipping."
    },
    { question: "Do I need to install anything to get started?", answer: "No, Sprintify is completely cloud-based. You can access it securely from any modern web browser without downloading or installing any software." },
    { question: "How does the AI part actually work?", answer: "Our AI processes your natural language inputs—like a quick project summary or meeting notes—and automatically structures them into actionable tasks, assigns priorities, and drafts descriptions." },
    { question: "If someone moves a task, does everyone see it immediately?", answer: "Yes! Sprintify features a real-time sync engine. The moment a task is dragged to a new column or updated, the change reflects instantly across everyone's screens." },
    { question: "We're a small startup, is this built for us or for big companies?", answer: "Sprintify scales with you. It's lightweight enough for a team of two to get started instantly, but robust enough to handle the complex workflows of large enterprise teams." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFF] font-sans text-slate-800 selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-slate-900">
          <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
          Sprintify
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact us</a>
        </div>
        <a 
          href="/register" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm flex items-center gap-2"
        >
          Get Started <span>&rarr;</span>
        </a>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center pt-24 pb-16 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Manage projects at <br className="hidden md:block"/> 
          the <span className="font-serif italic font-light text-slate-800">Speed of Thought</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          The AI-powered workspace where teams plan, collaborate, <br className="hidden md:block"/> 
          and ship. Without the chaos.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="bg-blue-600 text-white px-7 py-3.5 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2">
            Start Shipping <span>&rarr;</span>
          </button>
          <button className="bg-white text-slate-700 border border-slate-200 px-7 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            Explore Features <span>&gt;</span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-500"></div>
            <div className="w-8 h-8 rounded-full border-2 border-white bg-rose-500"></div>
          </div>
          Joined by 2,000+ teams
        </div>
      </header>

      {/* App Mockup / Kanban Graphic */}
      <section className="max-w-6xl mx-auto px-4 pb-32">
        {/* Gradient backdrop representing the blurred background in the image */}
        <div className="relative rounded-3xl p-4 md:p-6 bg-gradient-to-br from-red-900 via-orange-800 to-slate-900 shadow-2xl overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent mix-blend-overlay"></div>
           
           {/* Mock App Window */}
           <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20 h-[500px] flex flex-col">
              {/* App Header */}
              <div className="h-14 border-b border-slate-100 flex items-center px-6 gap-4 bg-slate-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                </div>
              </div>
              
              {/* Kanban Board Columns */}
              <div className="flex-1 p-6 flex gap-6 overflow-hidden bg-slate-50/30">
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-3 min-w-[250px]">
                  <div className="text-sm font-semibold text-slate-700 flex justify-between">To do <span className="text-slate-400 font-normal">4</span></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="w-10 h-1 bg-red-100 rounded mb-3"></div>
                    <div className="h-4 bg-slate-100 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-slate-100 rounded w-1/2 mb-4"></div>
                    <div className="flex justify-between items-center"><div className="w-6 h-6 rounded-full bg-slate-200"></div><div className="text-xs text-slate-400">Oct 12</div></div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="w-10 h-1 bg-blue-100 rounded mb-3"></div>
                    <div className="h-4 bg-slate-100 rounded w-5/6 mb-4"></div>
                    <div className="flex justify-between items-center"><div className="w-6 h-6 rounded-full bg-slate-200"></div></div>
                  </div>
                </div>
                
                {/* Column 2 */}
                <div className="flex-1 flex flex-col gap-3 min-w-[250px]">
                  <div className="text-sm font-semibold text-slate-700 flex justify-between">In progress <span className="text-slate-400 font-normal">2</span></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="w-10 h-1 bg-purple-100 rounded mb-3"></div>
                    <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-100 rounded w-2/3 mb-4"></div>
                    <div className="flex justify-between items-center"><div className="w-6 h-6 rounded-full bg-slate-200"></div><div className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">High</div></div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex-1 flex flex-col gap-3 min-w-[250px]">
                  <div className="text-sm font-semibold text-slate-700 flex justify-between">Review <span className="text-slate-400 font-normal">1</span></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 opacity-80">
                     <div className="h-4 bg-slate-100 rounded w-4/5 mb-4"></div>
                     <div className="flex justify-between items-center"><div className="w-6 h-6 rounded-full bg-slate-200"></div></div>
                  </div>
                </div>

                {/* Column 4 */}
                <div className="flex-1 flex flex-col gap-3 min-w-[250px]">
                  <div className="text-sm font-semibold text-slate-700 flex justify-between">Done <span className="text-slate-400 font-normal">5</span></div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 opacity-60">
                     <div className="h-4 bg-slate-100 rounded w-full mb-4"></div>
                     <div className="flex justify-between items-center"><div className="w-6 h-6 rounded-full bg-slate-200"></div></div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 border border-blue-200 bg-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What makes us <span className="font-serif italic font-light">Special</span>?
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Powerful features designed to help modern teams plan, collaborate, and ship faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="h-32 flex items-center justify-center mb-6">
               {/* Abstract 3D blocks icon representation */}
               <div className="relative">
                  <div className="w-16 h-16 bg-blue-100 transform rotate-45 rounded shadow-sm flex items-center justify-center text-blue-600 font-bold text-xl absolute -top-8 -left-8">AI</div>
                  <div className="w-16 h-16 bg-blue-50 transform rotate-45 rounded absolute -top-4 -left-4 -z-10"></div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">AI works where you work</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">
              Convert ideas and messages into tasks instantly. AI-generated subtasks and check-ins to keep work moving.
            </p>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2"><span className="w-4 border-b-2 border-slate-300"></span> Instant task generation</li>
              <li className="flex items-center gap-2"><span className="w-4 border-b-2 border-slate-300"></span> AI generated subtasks & milestones</li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="h-32 flex items-center justify-center mb-6">
              {/* Abstract Bar Chart representation */}
              <div className="flex items-end gap-2 h-16">
                 <div className="w-4 h-8 bg-purple-200 rounded-t-sm"></div>
                 <div className="w-4 h-12 bg-purple-300 rounded-t-sm"></div>
                 <div className="w-4 h-16 bg-purple-400 rounded-t-sm"></div>
                 <div className="w-4 h-10 bg-purple-500 rounded-t-sm"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Built for every team</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">
              Ship faster with less overhead. From startups to enterprises, Sprintify adapts to the way your team works.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">Marketing & Growth</span>
              <span className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">Engineering</span>
              <span className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">Sales & Success</span>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="h-32 flex items-center justify-center mb-6">
               {/* Abstract nodes representation */}
               <div className="grid grid-cols-3 gap-2 opacity-50">
                  <div className="w-6 h-6 rounded bg-purple-200"></div>
                  <div className="w-6 h-6 rounded bg-blue-200"></div>
                  <div className="w-6 h-6 rounded bg-purple-200"></div>
                  <div className="w-6 h-6 rounded bg-indigo-200"></div>
                  <div className="w-6 h-6 rounded bg-purple-300"></div>
                  <div className="w-6 h-6 rounded bg-blue-200"></div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Focus on what matters</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">
              Less noise, more clarity. View only the tasks assigned to you, so your team stays aligned on what matters and ships faster.
            </p>
            <div className="flex bg-slate-50 p-1 rounded-lg border border-slate-100">
              <div className="flex-1 text-center text-sm font-medium py-2 text-slate-500">All tasks</div>
              <div className="flex-1 text-center text-sm font-medium py-2 bg-white rounded shadow-sm text-blue-600">My tasks</div>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="h-32 flex items-center justify-center mb-6">
               {/* Abstract UI representation */}
               <div className="w-32 bg-slate-50 rounded-lg p-2 border border-slate-100 shadow-sm">
                 <div className="flex gap-2 mb-2">
                   <div className="w-4 h-4 rounded-full bg-blue-200"></div>
                   <div className="flex-1 bg-slate-200 rounded h-4"></div>
                 </div>
                 <div className="h-2 bg-slate-200 rounded w-3/4 mb-1"></div>
                 <div className="h-2 bg-slate-200 rounded w-1/2"></div>
               </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Real-time collaboration</h3>
            <p className="text-slate-500 text-sm mb-6 flex-1">
              Work together seamlessly with real-time task updates, live changes across boards, and shared notes in exactly one place.
            </p>
            <div className="flex gap-2">
              <div className="flex-1 border border-slate-100 rounded-lg p-2 bg-slate-50">
                 <div className="flex items-center gap-1 mb-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div><div className="h-2 w-12 bg-slate-200 rounded"></div></div>
                 <div className="h-6 bg-white rounded border border-slate-100"></div>
              </div>
              <div className="flex-1 border border-slate-100 rounded-lg p-2 bg-slate-50">
                 <div className="flex items-center gap-1 mb-2"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><div className="h-2 w-10 bg-slate-200 rounded"></div></div>
                 <div className="h-6 bg-white rounded border border-slate-100"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 border border-blue-200 bg-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Answers to your <span className="font-serif italic font-light text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-500">
            The things people ask before they fall in love with Sprintify.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-slate-200 pb-4 ${openFaq === index ? '' : ''}`}
            >
              <button 
                onClick={() => setOpenFaq(index === openFaq ? -1 : index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className={`text-lg font-medium transition-colors ${openFaq === index ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}>
                  {faq.question}
                </span>
                <span className="text-slate-400 ml-4 flex-shrink-0">
                  {openFaq === index ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-500 pb-4 pr-12 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center py-24 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-10 leading-tight">
          Start <span className="font-serif italic font-light text-blue-600">building</span> with <br/>
          your team <span className="font-serif italic font-light text-blue-600">today</span>
        </h2>
        <a 
          href="/register" 
          className="inline-flex bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all shadow-xl items-center gap-2"
        >
          Get Started <span>&rarr;</span>
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 mt-12 py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Sections */}
          <div>
            <h4 className="font-serif italic text-xl text-slate-900 mb-6">Sections</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-serif italic text-xl text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          {/* Socials */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-serif italic text-xl text-slate-900 mb-6">Socials</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-xs text-slate-400">
          © 2026 - Sprintify
        </div>
      </footer>
    </div>
  );
};

export default SprintifyLandingPage;