import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Premium easing curve for silky smooth animations
const premiumEase = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: premiumEase }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: premiumEase } 
  },
};

const Vision = () => (
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="show"
    exit="exit"
    className="space-y-12 max-w-5xl"
  >
    <motion.h2 variants={itemVariants} className="text-[#d4af37] text-xs md:text-sm tracking-[0.4em] uppercase">
      Strategic Architecture
    </motion.h2>
    <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
      Entering the Indian <br className="hidden md:block" />
      <span className="italic text-white/90">Luxury Bridal</span> Market.
    </motion.h1>
    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-3xl">
      An exclusive roadmap to transition @makeoversbyniki from a highly sought-after international artist to a dominant, culturally resonant luxury authority in India. The Indian market demands <span className="text-white">"Editorial Realism"</span>—we are moving away from traditional makeup application and toward high-end beauty engineering.
    </motion.p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-20 pt-12 border-t border-white/10">
      <motion.div variants={itemVariants} className="group">
        <h3 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> The Market Gap
        </h3>
        <p className="text-gray-400 font-light leading-relaxed text-lg">
          The Indian luxury bridal market is saturated with heavy, transformative makeup. High-Net-Worth (HNW) brides are actively seeking international polish—clean, skin-focused, "Editorial Realism"—but struggle to find artists who understand both global aesthetics and South Asian skin nuances.
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="group">
        <h3 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> The Positioning
        </h3>
        <p className="text-gray-400 font-light leading-relaxed text-lg">
          We will position you not just as a makeup artist, but as a <span className="text-white">"Beauty Architect."</span> By leveraging your international experience and applying it to the cultural expectations of Indian weddings, we create an uncontested premium category that commands higher rates.
        </p>
      </motion.div>
    </div>
  </motion.div>
);

const PhaseCard = ({ number, title, description, details }: { number: string, title: string, description: string, details: string[] }) => (
  <motion.div variants={itemVariants} className="flex flex-col border-t border-white/10 pt-8 hover:border-[#d4af37]/50 transition-colors duration-700 group">
    <div className="font-serif text-5xl text-white/10 mb-6 group-hover:text-[#d4af37]/20 transition-colors duration-700">{number}</div>
    <h3 className="font-serif text-3xl mb-6 group-hover:text-[#d4af37] transition-colors duration-700">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light mb-12 text-lg flex-grow">
      {description}
    </p>
    <div className="pl-6 border-l border-[#d4af37]/30">
      <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-6">Execution Details</h4>
      <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-[#d4af37] mr-4 mt-1 text-xs">✦</span>
            <span className="leading-relaxed">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Phase1 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 1: Visual Identity <br className="hidden md:block"/>& Cinematic Production
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
      <PhaseCard 
        number="01"
        title="Studio-Grade Portfolio Development"
        description="Direction and execution of localized conceptual shoots utilizing advanced dimensional lighting setups to showcase accurate skin texture and color grading."
        details={[
          "Develop moodboards focusing on South Asian features with international editorial lighting.",
          "Cast specific models that reflect the target HNW demographic and aesthetic.",
          "Direct on-set lighting to highlight raw skin texture, strictly avoiding the 'filtered' look."
        ]}
      />
      <PhaseCard 
        number="02"
        title="The 'Cinematic Portraiture' IP"
        description="Development of a signature, professionally lit 'First Look' video package, utilizing cinema-line equipment, to upsell to brides as an exclusive add-on."
        details={[
          "Script and storyboard a signature 60-second bridal reveal format unique to your brand.",
          "Hire cinema-grade videographers (RED/Sony FX) for premium color grading and slow-motion capture.",
          "Package this as a high-ticket add-on for exclusive bookings to increase average order value."
        ]}
      />
      <PhaseCard 
        number="03"
        title="Premium Social Assets"
        description="Extraction of high-quality, shareable micro-content (Reels, Stories) derived from the studio shoots and cinematic video packages, optimized for Instagram to drive engagement and high-ticket inquiries."
        details={[
          "Edit short-form, high-retention Reels focusing on macro textures and cinematic BTS moments.",
          "Design premium Instagram Story templates for inquiry generation and availability announcements.",
          "Implement a strategic posting schedule leveraging the new visual assets to maximize algorithmic reach."
        ]}
      />
    </div>
  </motion.div>
);

const Phase2 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 2: Digital Ecosystem <br className="hidden md:block"/>Architecture
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <PhaseCard 
        number="01"
        title="The Brand Portfolio Website"
        description="Design and development of a bespoke, high-end digital flagship. This website will act as your premium portfolio, elevating your brand perception far above standard Instagram-only artists."
        details={[
          "Custom UI/UX design reflecting the 'Editorial Realism' aesthetic to showcase your portfolio.",
          "Build a high-friction inquiry form to automatically filter out low-budget leads.",
          "Design a hidden 'Client Portal' for booked brides to elevate the onboarding and prep experience."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Brand Identity Localization"
        description="Refining typography and brand guidelines to bridge international polish with regional Indian authenticity."
        details={[
          "Audit and refine current Instagram aesthetics to match the new luxury positioning.",
          "Develop a standardized tone-of-voice guide for all captions, emails, and communications.",
          "Create bespoke typography pairings and color palettes for all digital and physical touchpoints."
        ]}
      />
    </div>
  </motion.div>
);

const Phase3 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 3: B2B Network <br className="hidden md:block"/>Integration
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <PhaseCard 
        number="01"
        title="The Planner Pitch Deck"
        description="Design of a visually striking, data-backed presentation aimed directly at top-tier wedding planners and boutique hotel coordinators."
        details={[
          "Design a 10-page editorial PDF highlighting your unique value proposition to planners.",
          "Outline clear, mutually beneficial commission and partnership structures for B2B referrals.",
          "Draft personalized outreach scripts targeting the top 20 luxury wedding planners in India."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Strategic Collaborations"
        description="Facilitating conceptual shoots alongside established sustainable Indian fashion labels and heritage jewelry brands to tap into their HNW audiences."
        details={[
          "Identify 5-7 non-competing luxury brands (jewelry, couture) for cross-promotion.",
          "Pitch and execute joint editorial shoots to share production costs and audience reach.",
          "Secure features in premium digital publications (e.g., Vogue India, Harper's Bazaar)."
        ]}
      />
    </div>
  </motion.div>
);

const TimelineItem = ({ month, title, desc, details }: { month: string, title: string, desc: string, details: string[] }) => (
  <motion.div variants={itemVariants} className="relative pl-10 md:pl-16 pb-16 border-l border-white/10 last:border-l-transparent last:pb-0">
    <div className="absolute w-4 h-4 rounded-full border border-[#d4af37] bg-[#0a0a0a] -left-[8.5px] top-1">
      <div className="absolute inset-[3px] bg-[#d4af37] rounded-full opacity-50"></div>
    </div>
    <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">{month}</div>
    <h3 className="font-serif text-3xl mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light mb-8 text-lg">
      {desc}
    </p>
    <div className="pl-6 border-l border-[#d4af37]/30">
      <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-6">My Role & Execution</h4>
      <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-[#d4af37] mr-4 mt-1 text-xs">✦</span>
            <span className="leading-relaxed">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const References = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Visual References <br className="hidden md:block"/>& Content Direction
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <motion.div variants={itemVariants} className="group relative aspect-[4/5] overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/2b/54/a3/2b54a3e5e967cfefb1df3274e85cafad.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Direction 01</div>
          <h3 className="font-serif text-2xl mb-2 text-white">Macro Textures</h3>
          <p className="text-gray-400 text-sm font-light">Focusing on raw skin finish, flawless blending, and extreme high-resolution product details.</p>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="group relative aspect-[4/5] overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/a8/dd/e0/a8dde0b1a5bd8ad581e3aa172e3fe3da.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Direction 02</div>
          <h3 className="font-serif text-2xl mb-2 text-white">Cinematic BTS</h3>
          <p className="text-gray-400 text-sm font-light">Documentary-style preparation shots capturing the luxury experience of being in your chair.</p>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className="group relative aspect-[4/5] overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/9a/61/87/9a6187a060aa2917812519ec482c2187.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 w-full">
          <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-3">Direction 03</div>
          <h3 className="font-serif text-2xl mb-2 text-white">Editorial Portraits</h3>
          <p className="text-gray-400 text-sm font-light">Vogue-inspired studio lighting for the final bridal look, moving away from standard ring-light selfies.</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const Timeline = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-4xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-20">
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        Execution & Timeline
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        A structured 3-month rollout. Below is the exact execution plan and how I will personally drive each phase to ensure a flawless market entry.
      </p>
    </motion.div>
    
    <div className="ml-4 md:ml-8">
      <TimelineItem 
        month="Month 1"
        title="Preparation & Strategy"
        desc="Laying the foundation for the Indian market."
        details={[
          "Conduct a comprehensive visual audit of your current portfolio to identify gaps for the Indian HNW audience.",
          "Architect the new website framework, user journey, and lead-vetting logic.",
          "Develop localized brand guidelines and high-converting copywriting."
        ]}
      />
      <TimelineItem 
        month="Month 2"
        title="Production & Direction"
        desc="Creating the 'Editorial Realism' visual assets."
        details={[
          "Creative-direct the localized conceptual shoots from moodboard to final edit.",
          "Source and coordinate with Indian models, high-end photographers, and videographers.",
          "Oversee the 'Cinematic Portraiture' lighting setups on set to ensure the output matches the required luxury standard."
        ]}
      />
      <TimelineItem 
        month="Month 3"
        title="Launch & Network Integration"
        desc="Going live and initiating B2B outreach ahead of the winter wedding season."
        details={[
          "Deploy the new digital ecosystem (website and AI lead-vetting system).",
          "Design and finalize the B2B Planner Pitch Deck with the newly shot assets.",
          "Facilitate introductions and pitch collaborations directly to top-tier Indian wedding planners and heritage brands."
        ]}
      />
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-4xl mx-auto text-center">
    <motion.h2 variants={itemVariants} className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Next Steps</motion.h2>
    <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl leading-tight mb-8">
      Initiate the <span className="italic">Strategy.</span>
    </motion.h1>
    <motion.p variants={itemVariants} className="text-xl text-gray-400 font-light mb-20 max-w-2xl mx-auto">
      Ready to architect the future of your brand in the Indian luxury market? Let's discuss the execution.
    </motion.p>
    
    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-y border-white/10 py-16">
      <div className="group">
        <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#d4af37]"></span> Email
        </h4>
        <a href="mailto:abhishek.gujar1202@gmail.com" className="text-lg md:text-xl font-light text-white hover:text-[#d4af37] transition-colors duration-500 break-words">
          abhishek.gujar1202<br/>@gmail.com
        </a>
      </div>
      <div className="group">
        <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#d4af37]"></span> Direct Line
        </h4>
        <a href="tel:+917400310443" className="text-lg md:text-xl font-light text-white hover:text-[#d4af37] transition-colors duration-500">
          +91 7400 310 443
        </a>
      </div>
      <div className="group">
        <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
          <span className="w-4 h-[1px] bg-[#d4af37]"></span> Portfolio
        </h4>
        <a href="https://www.icreatepixels.in" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-light text-white hover:text-[#d4af37] transition-colors duration-500">
          icreatepixels.in
        </a>
      </div>
    </motion.div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { name: 'The Vision', component: Vision },
    { name: 'Phase 1', component: Phase1 },
    { name: 'Phase 2', component: Phase2 },
    { name: 'Phase 3', component: Phase3 },
    { name: 'References', component: References },
    { name: 'Timeline', component: Timeline },
    { name: 'Contact', component: Contact },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#f4f4f4] font-sans selection:bg-[#d4af37] selection:text-[#050505] relative overflow-hidden">
      
      {/* Cinematic Makeup Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512496015851-a1dc8a47159c?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/90 to-[#050505] pointer-events-none"></div>

      {/* Subtle Noise Overlay for premium texture */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
      
      {/* Subtle background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-widest text-white flex items-center gap-3">
            MBN <span className="text-[#d4af37] text-sm font-sans font-light italic">x</span> INDIA
          </div>
          <div className="hidden lg:flex space-x-6 xl:space-x-10">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 relative py-2 ${
                  activeTab === index ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab.name}
                {activeTab === index && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d4af37]"
                    transition={{ duration: 0.6, ease: premiumEase }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Mobile Tabs */}
        <div className="lg:hidden flex overflow-x-auto px-6 pb-4 space-x-8 no-scrollbar border-t border-white/5 pt-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-[10px] whitespace-nowrap tracking-[0.2em] uppercase transition-colors duration-500 ${
                  activeTab === index ? 'text-[#d4af37]' : 'text-gray-500'
                }`}
              >
                {tab.name}
              </button>
            ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-40 md:pt-48 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto w-full flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} className="w-full">
            {React.createElement(tabs[activeTab].component)}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 relative z-10">
        <p className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">
          Concept, Strategy & Execution by <span className="text-gray-400">Abhishek Gujar</span>
        </p>
      </footer>
    </div>
  );
}
