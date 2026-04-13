import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Vision = () => (
  <div className="space-y-8 max-w-4xl">
    <h2 className="text-[#d4af37] text-sm tracking-[0.3em] uppercase">Strategic Architecture</h2>
    <h1 className="font-serif text-4xl md:text-6xl leading-tight">
      Entering the Indian Luxury Bridal Market.
    </h1>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
      An exclusive roadmap to transition @makeoversbyniki from a highly sought-after international artist to a dominant, culturally resonant luxury authority in India. The Indian market demands "Editorial Realism"—we are moving away from traditional makeup application and toward high-end beauty engineering.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
      <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500">
        <h3 className="text-[#d4af37] text-sm tracking-widest uppercase mb-4">The Market Gap</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          The Indian luxury bridal market is saturated with heavy, transformative makeup. High-Net-Worth (HNW) brides are actively seeking international polish—clean, skin-focused, "Editorial Realism"—but struggle to find artists who understand both global aesthetics and South Asian skin nuances.
        </p>
      </div>
      <div className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500">
        <h3 className="text-[#d4af37] text-sm tracking-widest uppercase mb-4">The Positioning</h3>
        <p className="text-gray-400 font-light leading-relaxed">
          We will position you not just as a makeup artist, but as a "Beauty Architect." By leveraging your international experience and applying it to the cultural expectations of Indian weddings, we create an uncontested premium category that commands higher rates.
        </p>
      </div>
    </div>
  </div>
);

const Phase1 = () => (
  <div className="space-y-12">
    <h1 className="font-serif text-3xl md:text-5xl leading-tight text-center md:text-left">
      Phase 1: Visual Identity & Cinematic Production
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group flex flex-col">
        <div className="text-[#d4af37] mb-6">01</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">Studio-Grade Portfolio Development</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
          Direction and execution of localized conceptual shoots utilizing advanced dimensional lighting setups to showcase accurate skin texture and color grading.
        </p>
        <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">Execution Details</h4>
          <ul className="space-y-3 text-gray-300 font-light text-sm">
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Develop moodboards focusing on South Asian features with international editorial lighting.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Cast specific models that reflect the target HNW demographic and aesthetic.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Direct on-set lighting to highlight raw skin texture, strictly avoiding the "filtered" look.</span></li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group flex flex-col">
        <div className="text-[#d4af37] mb-6">02</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">The "Cinematic Portraiture" IP</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
          Development of a signature, professionally lit "First Look" video package, utilizing cinema-line equipment, to upsell to brides as an exclusive add-on.
        </p>
        <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">Execution Details</h4>
          <ul className="space-y-3 text-gray-300 font-light text-sm">
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Script and storyboard a signature 60-second bridal reveal format unique to your brand.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Hire cinema-grade videographers (RED/Sony FX) for premium color grading and slow-motion capture.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Package this as a high-ticket add-on for exclusive bookings to increase average order value.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Phase2 = () => (
  <div className="space-y-12">
    <h1 className="font-serif text-3xl md:text-5xl leading-tight text-center md:text-left">
      Phase 2: Digital Ecosystem Architecture
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group flex flex-col">
        <div className="text-[#d4af37] mb-6">01</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">AI-Driven Framework Design</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
          Architecting the structural logic for a dynamic, interactive website to segment inquiries (Destination vs. Local vs. Editorial) and automate lead-vetting.
        </p>
        <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">Execution Details</h4>
          <ul className="space-y-3 text-gray-300 font-light text-sm">
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Build a high-friction inquiry form to automatically filter out low-budget leads.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Implement automated email sequences tailored specifically to Destination vs. Local weddings.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Design a hidden "Client Portal" for booked brides to elevate the onboarding and prep experience.</span></li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group flex flex-col">
        <div className="text-[#d4af37] mb-6">02</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">Brand Identity Localization</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
          Refining typography and brand guidelines to bridge international polish with regional Indian authenticity.
        </p>
        <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">Execution Details</h4>
          <ul className="space-y-3 text-gray-300 font-light text-sm">
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Audit and refine current Instagram aesthetics to match the new luxury positioning.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Develop a standardized tone-of-voice guide for all captions, emails, and communications.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Create bespoke typography pairings and color palettes for all digital and physical touchpoints.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Phase3 = () => (
  <div className="space-y-12">
    <h1 className="font-serif text-3xl md:text-5xl leading-tight text-center md:text-left">
      Phase 3: B2B Network Integration
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group flex flex-col">
        <div className="text-[#d4af37] mb-6">01</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">The Planner Pitch Deck</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
          Design of a visually striking, data-backed presentation aimed directly at top-tier wedding planners and boutique hotel coordinators.
        </p>
        <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">Execution Details</h4>
          <ul className="space-y-3 text-gray-300 font-light text-sm">
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Design a 10-page editorial PDF highlighting your unique value proposition to planners.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Outline clear, mutually beneficial commission and partnership structures for B2B referrals.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Draft personalized outreach scripts targeting the top 20 luxury wedding planners in India.</span></li>
          </ul>
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] p-10 border border-white/5 hover:border-[#d4af37]/30 transition-colors duration-500 group flex flex-col">
        <div className="text-[#d4af37] mb-6">02</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors">Strategic Collaborations</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow">
          Facilitating conceptual shoots alongside established sustainable Indian fashion labels and heritage jewelry brands to tap into their HNW audiences.
        </p>
        <div className="pt-8 border-t border-white/10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">Execution Details</h4>
          <ul className="space-y-3 text-gray-300 font-light text-sm">
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Identify 5-7 non-competing luxury brands (jewelry, couture) for cross-promotion.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Pitch and execute joint editorial shoots to share production costs and audience reach.</span></li>
            <li className="flex items-start"><span className="text-[#d4af37] mr-3 mt-0.5">✦</span><span>Secure features in premium digital publications (e.g., Vogue India, Harper's Bazaar).</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => (
  <div className="space-y-12 max-w-4xl mx-auto">
    <h1 className="font-serif text-3xl md:text-5xl leading-tight text-center">
      Execution & Timeline
    </h1>
    <p className="text-center text-gray-400 max-w-2xl mx-auto font-light">
      A structured 3-month rollout. Below is the exact execution plan and how I will personally drive each phase to ensure a flawless market entry.
    </p>
    <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-12 pb-8 mt-12">
      
      <div className="relative pl-8 md:pl-12">
        <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        <div className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Month 1</div>
        <h3 className="font-serif text-2xl mb-3">Preparation & Strategy</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-6">
          Laying the foundation for the Indian market.
        </p>
        <div className="bg-[#1a1a1a] p-8 border border-white/5">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">My Role & Execution</h4>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Conduct a comprehensive visual audit of your current portfolio to identify gaps for the Indian HNW audience.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Architect the new website framework, user journey, and lead-vetting logic.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Develop localized brand guidelines and high-converting copywriting.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        <div className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Month 2</div>
        <h3 className="font-serif text-2xl mb-3">Production & Direction</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-6">
          Creating the "Editorial Realism" visual assets.
        </p>
        <div className="bg-[#1a1a1a] p-8 border border-white/5">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">My Role & Execution</h4>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Creative-direct the localized conceptual shoots from moodboard to final edit.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Source and coordinate with Indian models, high-end photographers, and videographers.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Oversee the "Cinematic Portraiture" lighting setups on set to ensure the output matches the required luxury standard.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute w-3 h-3 bg-[#d4af37] rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        <div className="text-[#d4af37] text-sm tracking-widest uppercase mb-2">Month 3</div>
        <h3 className="font-serif text-2xl mb-3">Launch & Network Integration</h3>
        <p className="text-gray-400 leading-relaxed font-light mb-6">
          Going live and initiating B2B outreach ahead of the winter wedding season.
        </p>
        <div className="bg-[#1a1a1a] p-8 border border-white/5">
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-4">My Role & Execution</h4>
          <ul className="space-y-3 text-gray-300 font-light">
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Deploy the new digital ecosystem (website and AI lead-vetting system).</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Design and finalize the B2B Planner Pitch Deck with the newly shot assets.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-3 mt-1">✦</span>
              <span>Facilitate introductions and pitch collaborations directly to top-tier Indian wedding planners and heritage brands.</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

const Contact = () => (
  <div className="space-y-12 max-w-3xl mx-auto text-center">
    <h2 className="text-[#d4af37] text-sm tracking-[0.3em] uppercase">Next Steps</h2>
    <h1 className="font-serif text-4xl md:text-6xl leading-tight">
      Initiate the Strategy.
    </h1>
    <p className="text-lg text-gray-400 font-light mb-12">
      Ready to architect the future of your brand in the Indian luxury market? Let's discuss the execution.
    </p>
    
    <div className="bg-[#1a1a1a] p-12 border border-white/5 inline-block w-full md:w-auto min-w-[320px] text-left">
      <div className="space-y-8">
        <div>
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-2">Email</h4>
          <a href="mailto:abhishek.gujar1202@gmail.com" className="text-xl font-light hover:text-[#d4af37] transition-colors block">
            abhishek.gujar1202@gmail.com
          </a>
        </div>
        <div>
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-2">Direct Line</h4>
          <a href="tel:+917400310440" className="text-xl font-light hover:text-[#d4af37] transition-colors block">
            7400310440
          </a>
        </div>
        <div>
          <h4 className="text-[#d4af37] text-xs tracking-[0.2em] uppercase mb-2">Portfolio</h4>
          <a href="https://www.icreatepixels.in" target="_blank" rel="noopener noreferrer" className="text-xl font-light hover:text-[#d4af37] transition-colors block">
            www.icreatepixels.in
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'The Vision', component: Vision },
    { name: 'Phase 1', component: Phase1 },
    { name: 'Phase 2', component: Phase2 },
    { name: 'Phase 3', component: Phase3 },
    { name: 'Timeline', component: Timeline },
    { name: 'Contact', component: Contact },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f4f4f4] font-sans selection:bg-[#d4af37] selection:text-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-xl tracking-widest text-[#d4af37]">
            MBN <span className="text-[#f4f4f4] text-sm mx-2 font-sans">x</span> INDIA
          </div>
          <div className="hidden md:flex space-x-8">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  activeTab === index ? 'text-[#d4af37]' : 'text-gray-400 hover:text-[#f4f4f4]'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        {/* Mobile Tabs */}
        <div className="md:hidden flex overflow-x-auto px-6 pb-4 space-x-6 no-scrollbar">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-xs whitespace-nowrap tracking-widest uppercase transition-colors duration-300 ${
                  activeTab === index ? 'text-[#d4af37]' : 'text-gray-400 hover:text-[#f4f4f4]'
                }`}
              >
                {tab.name}
              </button>
            ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-32 md:pt-40 pb-20 px-6 max-w-5xl mx-auto w-full flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {React.createElement(tabs[activeTab].component)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/10">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          Concept, Strategy & Execution by Abhishek Gujar
        </p>
      </footer>
    </div>
  );
}
