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

const Vision = () => {
  const [hoveredConcept, setHoveredConcept] = useState<number | null>(null);

  const concepts = [
    {
      title: "The 'Skin First' Look",
      layman: "We move away from thick, heavy makeup that looks like a mask. Instead, we show skin that looks flawless but real—exactly what wealthy brides are paying lakhs for.",
      icon: "✨"
    },
    {
      title: "Smart Targeting",
      layman: "You don't need millions of followers. You need the RIGHT followers. We put your work in front of the families who book ₹50k+ per session without blinking.",
      icon: "🎯"
    },
    {
      title: "The Expert Status",
      layman: "We stop you from being just another 'makeup girl.' We turn you into an International Beauty Consultant that luxury wedding planners respect and recommend.",
      icon: "👑"
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="space-y-16 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h2 variants={itemVariants} className="text-[#d4af37] text-xs md:text-sm tracking-[0.4em] uppercase">
            Our Shared Goal
          </motion.h2>
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl leading-tight">
            Making you the <br />
            <span className="italic text-white/90 underline decoration-[#d4af37]/30 underline-offset-8">Category of One.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            In India, most makeup artists copy each other. They use the same filters and the same heavy styles. Working with us means you stop competing. We aren't just an agency; we are your <span className="text-white">Growth Partner.</span> 
          </motion.p>
          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4">
            <div className="inline-block border border-[#d4af37] px-6 py-3 text-[#d4af37] text-xs tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-500 cursor-default">
              The Luxury Pivot
            </div>
            <div className="inline-block bg-[#d4af37]/10 border border-[#d4af37]/30 px-6 py-3 text-white text-[10px] tracking-widest uppercase">
              Start by April 20 for Season Readiness
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredConcept(index)}
              onMouseLeave={() => setHoveredConcept(null)}
              className={`p-8 border transition-all duration-700 cursor-default ${
                hoveredConcept === index ? 'border-[#d4af37] bg-white/[0.03] translate-x-2' : 'border-white/10'
              }`}
            >
              <div className="flex items-start gap-6">
                <span className="text-3xl">{concept.icon}</span>
                <div>
                  <h3 className={`font-serif text-xl mb-3 transition-colors duration-500 ${hoveredConcept === index ? 'text-[#d4af37]' : 'text-white'}`}>
                    {concept.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">
                    {concept.layman}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div variants={itemVariants} className="pt-20 border-t border-white/10">
        <h3 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-12 text-center">How We Make the Difference</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#d4af37] transition-colors duration-500">
              <span className="text-white font-serif italic">01</span>
            </div>
            <h4 className="text-white font-serif text-xl mb-4">Focus on your craft.</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We provide the technical foundation, SEO strategy, and high-end digital assets, allowing you more time to focus on your clients and artistry.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#d4af37] transition-colors duration-500">
              <span className="text-white font-serif italic">02</span>
            </div>
            <h4 className="text-white font-serif text-xl mb-4">Prioritizing Quality.</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We focus on attracting serious inquiries over vanity metrics. Our goal is to build an ecosystem that resonates with luxury-focused leads.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#d4af37] transition-colors duration-500">
              <span className="text-white font-serif italic">03</span>
            </div>
            <h4 className="text-white font-serif text-xl mb-4">Strategic Partner.</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed italic">
              "We view ourselves as a growth partner, working collaboratively to refine and protect your brand's premium position in the market."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const PhaseCard = ({ number, title, description, details }: { number: string, title: string, description: string, details: string[] }) => (
  <motion.div variants={itemVariants} className="flex flex-col border-t border-white/10 pt-8 hover:border-[#d4af37]/50 transition-colors duration-700 group">
    <div className="font-serif text-4xl md:text-5xl text-white/10 mb-6 group-hover:text-[#d4af37]/20 transition-colors duration-700">{number}</div>
    <h3 className="font-serif text-2xl md:text-3xl mb-6 group-hover:text-[#d4af37] transition-colors duration-700">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light mb-12 text-base md:text-lg flex-grow">
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
      Phase 1: Visual Identity <br className="hidden md:block"/>& Content Engine
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
      <PhaseCard 
        number="01"
        title="Pre-Production & Strategy"
        description="Meticulous planning to ensure every shoot aligns with the 'Editorial Realism' mandate and maximizes ROI."
        details={[
          "Moodboarding: Granular visual direction for lighting, skin finish, and wardrobe.",
          "Technical Data: Sourcing HNW-aligned model suggestions (Casting finalized by Client).",
          "Logistics: Client-coordinated locations and model onboarding.",
          "Shoot Structure: 2 Dedicated Shoot Days per month to ensure a consistent, high-impact Meta-ready content flow."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Cinematic Production"
        description="We bring professional cinema cameras and lights to your space to capture assets designed for both social presence and high-converting Meta Ads."
        details={[
          "Professional Rig: Industry-standard 4K cinema cameras and lighting architecture included.",
          "Ad Perspective: Shooting with Meta Ad formats in mind (Safe zones, hook-driven pacing).",
          "BTS Capture: Dedicated documentary-style behind-the-scenes for high-trust story content.",
          "Equipment: All necessary audio, stabilization, and lighting gear provided by us."
        ]}
      />
      <PhaseCard 
        number="03"
        title="Post-Production & Distribution"
        description="Refining the raw assets and deploying them strategically to dominate the algorithm."
        details={[
          "Color Grading: Custom LUTs applied for an expensive, high-contrast luxury finish.",
          "Retouching: Skin pores and texture preservation (Frequency Separation).",
          "Asset Delivery: 8 Highly Edited & Color-Graded Reels (Optimized for Social & Meta Ads).",
          "Meta Performance: Creative assets built specifically to lower Ad CPC and increase lead quality."
        ]}
      />
    </div>
  </motion.div>
);

const Phase2 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 2: Digital Ecosystem <br className="hidden md:block"/>& Search Dominance
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
      <PhaseCard 
        number="01"
        title="Technical Infrastructure"
        description="Setting up the bones of your digital brand. We take your pre-selected design and build it to be lightning-fast and secure."
        details={[
          "UI Implementation: We build your chosen website design to work perfectly on phones and laptops.",
          "Speed Optimization: Ensuring your site loads in under 2 seconds—wealthy clients don't wait for slow pages.",
          "Security & Backups: Peace of mind with daily automated saves so you never lose your data.",
          "Lead Filter: A smart form that asks exactly the right questions so only serious clients can reach you."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Search Dominance (SEO)"
        description="Making sure you show up first when a bride searches for 'Luxury Makeup' on Google."
        details={[
          "Competitor Spying: We look at exactly how your competition gets their clients and we do it better.",
          "Keyword Mapping: Finding the exact words wealthy brides use to search so we can be their #1 result.",
          "Backlink Building: Getting other luxury websites to link to you, which tells Google you are an authority.",
          "Local Visibility: Setting up your business on Google Maps so local premium clients see you first."
        ]}
      />
      <PhaseCard 
        number="03"
        title="Analytics: The Data Layer"
        description="We track every click and inquiry so you know exactly which phase is bringing you the most money."
        details={[
          "Simple Dashboards: Easy-to-read reports that show how many new brides are visiting your site.",
          "ROI Tracking: Seeing exactly where your inquiries come from (Google, Instagram, or Referrals).",
          "Behavior Tracking: Seeing where people click so we can keep making the site easier to use.",
          "Monthly Review: A plain-English summary of our progress and what we are doing next."
        ]}
      />
    </div>
  </motion.div>
);

const Phase3 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 3: B2B Network <br className="hidden md:block"/>& Authority Scaling
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <PhaseCard 
        number="01"
        title="The Planner Pitch System"
        description="A highly targeted outbound strategy to secure referrals from India's top 1% of wedding planners."
        details={[
          "Target Identification: Scraping and qualifying the top 50 luxury planners and venue coordinators.",
          "Bespoke Decks: Customizing the 10-page pitch deck for each specific planner's aesthetic.",
          "Outreach Cadence: Multi-touchpoint strategy (LinkedIn, Email, Physical luxury mailer).",
          "Objection Handling: Pre-scripted responses for common B2B pushbacks and commission negotiations."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Strategic Brand Collaborations"
        description="Borrowing equity from established luxury brands to rapidly accelerate market trust."
        details={[
          "Partner Profiling: Identifying non-competing heritage jewelry and sustainable couture brands.",
          "Value Proposition: Pitching cost-shared editorial shoots to double the marketing budget.",
          "PR Distribution: Submitting the collaborative shoots to digital publications (WedMeGood Luxury, Vogue).",
          "Pivot Strategy: If Tier 1 brands decline, immediately pivot to high-growth Tier 2 boutique labels."
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
    <h3 className="font-serif text-2xl md:text-3xl mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-light mb-8 text-base md:text-lg">
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
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-6xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
      <h2 className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Visual Benchmarks</h2>
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        The <span className="italic">Standard.</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        We don't look at local competition. We benchmark against international luxury editorial standards to ensure your brand feels expensive across every platform.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
      <motion.a 
        href="https://in.pinterest.com/pin/184155072257217524/"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants} 
        className="group relative aspect-[4/5] overflow-hidden border border-white/10 block bg-[#0a0a0a]"
      >
        <img 
          src="https://i.pinimg.com/736x/2b/54/a3/2b54a3e5e967cfefb1df3274e85cafad.jpg" 
          alt="Macro Textures Reference"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <div className="text-[#d4af37] text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 md:mb-3">Direction 01</div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">Macro Textures</h3>
          <p className="text-gray-400 text-xs md:text-sm font-light">Focusing on raw skin finish and high-resolution product details.</p>
        </div>
      </motion.a>
      <motion.a 
        href="https://in.pinterest.com/pin/295337688087417053/"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants} 
        className="group relative aspect-[4/5] overflow-hidden border border-white/10 block bg-[#0a0a0a]"
      >
        <img 
          src="https://i.pinimg.com/736x/a8/dd/e0/a8dde0b1a5bd8ad581e3aa172e3fe3da.jpg" 
          alt="Cinematic BTS Reference"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <div className="text-[#d4af37] text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 md:mb-3">Direction 02</div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">Cinematic BTS</h3>
          <p className="text-gray-400 text-xs md:text-sm font-light">Documentary-style shots capturing the luxury experience of your process.</p>
        </div>
      </motion.a>
      <motion.a 
        href="https://in.pinterest.com/pin/410460953604828158/"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants} 
        className="group relative aspect-[4/5] overflow-hidden border border-white/10 block bg-[#0a0a0a]"
      >
        <img 
          src="https://i.pinimg.com/736x/9a/61/87/9a6187a060aa2917812519ec482c2187.jpg" 
          alt="Editorial Portraits Reference"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <div className="text-[#d4af37] text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2 md:mb-3">Direction 03</div>
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">Editorial Portraits</h3>
          <p className="text-gray-400 text-xs md:text-sm font-light">Vogue-inspired studio lighting for the final bridal look.</p>
        </div>
      </motion.a>
    </div>

    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 mb-12">
      <div>
        <h4 className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#d4af37]"></span> The Luxury Planner's Lens
        </h4>
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 italic leading-relaxed">
          "They don't want a vendor. They want a Consultant."
        </h3>
        <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
          High-end wedding planners in Delhi and Mumbai look for artists who can speak 'Luxury.' By benchmarking your site against these references, we ensure that when a planner visits your profile, they immediately see you as the only compatible choice for their Billion-Rupee weddings.
        </p>
        <div className="flex gap-4">
          <div className="text-[#d4af37] font-mono text-xs uppercase tracking-widest border border-[#d4af37]/20 px-3 py-1">Zero Clutter</div>
          <div className="text-[#d4af37] font-mono text-xs uppercase tracking-widest border border-[#d4af37]/20 px-3 py-1">High Intent</div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 bg-white/5 border border-white/5 rounded-sm">
        <blockquote className="text-gray-400 font-light text-center italic leading-relaxed">
          "The 'Bridge Groom' families in the Ultra-HNW segment don't scroll. They scan for excellence. If your visuals don't hit this benchmark in 2 seconds, you lose the inquiry. Our references are designed to win that 2-second scan."
        </blockquote>
      </div>
    </motion.div>
  </motion.div>
);

const Timeline = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-4xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-20">
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        Granular Execution Plan
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        A highly detailed, week-by-week roadmap ensuring absolute accountability, zero delays, and built-in contingency buffers.
      </p>
    </motion.div>
    
    <div className="ml-4 md:ml-8">
      <TimelineItem 
        month="Weeks 1-4"
        title="Digital Setup & Google Prep"
        desc="Establishing your online home and preparing it for search engines."
        details={[
          "Week 1: Researching your competition and mapping out how we will beat them on Google.",
          "Week 2: Building the technical side of your website and ensuring it is fast and secure.",
          "Week 3: Setting up the 'Smart Inquiry Form' to automatically filter out budget-shoppers.",
          "Week 4: Final checks, launch, and submitting your site to Google for indexing."
        ]}
      />
      <TimelineItem 
        month="Weeks 5-8"
        title="The First Production Cycle"
        desc="Capturing your first set of premium photos and videos to launch the new look."
        details={[
          "Week 5: Creative direction and client-side selection of models and location.",
          "Week 6: Production Days (2 Full Days). Professional cam/lights rig deployed.",
          "Week 7: Editing phase. 8 Meta-Optimized Reels color graded and retouched.",
          "Week 8: Delivery of your Ad-Ready content pack and monthly posting schedule."
        ]}
      />
      <TimelineItem 
        month="Weeks 9-12"
        title="Growth & Referrals"
        desc="Using your new premium look to get referrals from top wedding planners."
        details={[
          "Week 9: Building your personal 'Portfolio Catalog' (Pitch Deck) to show to luxury planners.",
          "Week 10: Reaching out to the Top 20 wedding planners in India to introduce your new brand.",
          "Week 11: Meetings and follow-ups to secure you a spot on their 'Recommended Artist' lists.",
          "Week 12: Reviewing the first 90 days of data and planning your next big growth move."
        ]}
      />
    </div>
  </motion.div>
);

const Investment = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-5xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
      <h2 className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Financial Architecture</h2>
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        Project <span className="italic">Investment.</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        A clear, low-risk structure designed to scale with your brand. No hidden fees, just pure execution.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <motion.div variants={itemVariants} className="border border-white/10 p-8 hover:border-[#d4af37]/50 transition-colors duration-700 flex flex-col group">
        <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Content Assets</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors duration-700">Monthly Retainer</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow">2 Shoot Days. 8 Color-Graded Reels. Pro Camera & Lights included. (Meta Ad Strategy Integrated). Models/Location by Client.</p>
        <div className="text-3xl font-serif text-white">₹30,000 <span className="text-sm text-gray-500 font-sans font-light">/ month</span></div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="border border-white/10 p-8 hover:border-[#d4af37]/50 transition-colors duration-700 flex flex-col group">
        <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Web & Systems</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors duration-700">Tech Flat Fee</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow">Full tech build of your pre-selected UI, plus deep SEO and conversion tracking setup.</p>
        <div className="text-3xl font-serif text-white">₹35,000 <span className="text-sm text-gray-500 font-sans font-light">one-time</span></div>
      </motion.div>

      <motion.div variants={itemVariants} className="border border-white/10 p-8 hover:border-[#d4af37]/50 transition-colors duration-700 flex flex-col group">
        <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">B2B Assets</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors duration-700">Pitch Deck</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow">Custom editorial catalogs to send to high-end wedding planners to get you referred.</p>
        <div className="text-3xl font-serif text-white">₹2,000 <span className="text-sm text-gray-500 font-sans font-light">/ deck</span></div>
      </motion.div>
    </div>

    <motion.div variants={itemVariants} className="mb-20 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <span className="font-mono text-[10vw] leading-none text-[#d4af37]">LEDGER</span>
      </div>
      
      <h3 className="relative z-10 text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-12 text-center flex items-center justify-center gap-4">
        <span className="w-12 h-[1px] bg-[#d4af37]/30"></span> 
        Tangible Deliverables Ledger
        <span className="w-12 h-[1px] bg-[#d4af37]/30"></span>
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 relative z-10">
        <div className="space-y-8">
          <h4 className="font-serif text-2xl border-b border-white/10 pb-4 flex items-center gap-3 italic">
            01. Digital Infrastructure
          </h4>
          <ul className="space-y-6">
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Premium Portfolio Hub</span>
                <span className="font-mono text-[10px] text-[#d4af37]">PRODUCTION READY</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">High-performance deployment of your chosen UI. Fully responsive for iOS/Android devices.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">SEO Dominance Suite</span>
                <span className="font-mono text-[10px] text-[#d4af37]">LOCAL & NICHED</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Custom Schema markup for the Indian Luxury market. Optimized for high-intent bridal keywords.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Smart Vetting Ecosystem</span>
                <span className="font-mono text-[10px] text-[#d4af37]">LEAD FILTERING</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Integrated inquiry forms designed to filter high-net-worth clients from budget inquiries automatically.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Ad Tracking Architecture</span>
                <span className="font-mono text-[10px] text-[#d4af37]">PIXEL & CAPI</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Meta Pixel, CAPI, and Google Analytics setup to track every rupee spent on ads accurately.</p>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-serif text-2xl border-b border-white/10 pb-4 flex items-center gap-3 italic">
            02. Monthly Content Engine
          </h4>
          <ul className="space-y-6">
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">8 Ad-Optimized Reels</span>
                <span className="font-mono text-[10px] text-[#d4af37]">4K CINEMA RIG</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Shot with safe-zones for Meta Ads. Includes hook-driven editing and professional sound design.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Editorial Grading & Stills</span>
                <span className="font-mono text-[10px] text-[#d4af37]">RETUCHE PRECISION</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">10 Portraits with skin-pore preservation. Custom color LUTs for an expensive "Vogue" finish.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Ad-Perspective Directing</span>
                <span className="font-mono text-[10px] text-[#d4af37]">ROI FOCUSED</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">2 Days of shooting focused on high-conversion visual hooks to lower your Meta Ad costs.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Account Setup & Meta Ad Strategy</span>
                <span className="font-mono text-[10px] text-[#d4af37]">MONTH 1 FOCUS</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Full Meta Business Suite configuration, Ad account warm-up, lead-funnel mapping, and high-conversion target audience architecture for the first 30 days.</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>

    <motion.div variants={itemVariants} className="border-t border-white/10 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Start Terms</h4>
          <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight italic">Low Friction. <br/>High Impact.</h3>
          <p className="text-gray-400 font-light text-sm max-w-md mb-8">
            We don't believe in long-term lock-ins. We win only when you win. Our engagement is month-to-month, allowing you to scale up or pause as your booking calendar evolves.
          </p>
        </div>
        
        <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-10">
          <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#d4af37]"></span> Secure Your Slot
          </h4>
          <div className="space-y-6">
            <div className="border-b border-white/5 pb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-300 font-light text-lg">Retainer Booking (60% Advance)</span>
                <span className="text-white font-serif text-2xl">₹18,000</span>
              </div>
              <p className="text-gray-500 text-sm font-light italic">Required to lock-in shoot dates and begin pre-production (Total: ₹30k).</p>
            </div>
            <div className="border-b border-white/5 pb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-300 font-light text-lg">Digital Setup (60% Advance)</span>
                <span className="text-white font-serif text-2xl">₹21,000</span>
              </div>
              <p className="text-gray-500 text-sm font-light italic">Required to start website implementation and SEO audit (Total: ₹35k).</p>
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-xs tracking-widest uppercase text-[#d4af37]">
                <span>Optional Studio Access</span>
                <span>₹6,000 / day</span>
              </div>
              <div className="flex justify-between text-xs tracking-widest uppercase text-gray-400">
                <span>Meta Ad Spends</span>
                <span>At Actuals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Contact = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-4xl mx-auto text-center">
    <motion.h2 variants={itemVariants} className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Onboarding Lifecycle</motion.h2>
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-7xl leading-tight mb-8">
      Start the <span className="italic">Journey.</span>
    </motion.h1>
    <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-left space-y-12 mb-20 bg-[#0a0a0a] border border-white/10 p-8 md:p-12">
      
      <div>
        <h4 className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> The First 48 Hours (Timeline)
        </h4>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">01.</div>
            <div>
              <p className="text-white mb-2">Sign Master Agreement & Process Advance</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed">As soon as the advance reaches us, your dedicated spot in our production calendar is locked. We immediately assign your project team.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">02.</div>
            <div>
              <p className="text-white mb-2">Onboarding Discovery Call</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed">Happens within 24 hours of signing. We spend 60 minutes deep-diving into your target "Bride Persona" and local competition.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">03.</div>
            <div>
              <p className="text-white mb-2">Technical Data Request (Handover)</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed">You provide us access to your domain, previous work gallery, and design files for the chosen UI. Our engineers take over from here.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
          <span className="font-serif text-[15vw] leading-none text-white italic">2026</span>
        </div>

        <h4 className="text-[#d4af37] text-xs tracking-[0.5em] uppercase mb-16 text-center italic">
          The Countdown to Season Dominance
        </h4>

        <div className="relative">
          {/* Horizontal Line Path */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-4 group"
            >
              <div className="font-serif text-5xl md:text-6xl text-white/10 group-hover:text-[#d4af37]/40 transition-colors duration-700 leading-none">
                APR <span className="text-2xl md:text-3xl italic">20</span>
              </div>
              <div className="space-y-1">
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">The Ignition</p>
                <p className="text-white text-lg font-serif italic">The Contract is Inked.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">We lock your dates, setup your Meta suit, and begin the technical SEO audit. The machine starts turning.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-4 group"
            >
              <div className="font-serif text-5xl md:text-6xl text-white/10 group-hover:text-[#d4af37]/40 transition-colors duration-700 leading-none">
                MAY <span className="text-2xl md:text-3xl italic">10</span>
              </div>
              <div className="space-y-1">
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">The Transformation</p>
                <p className="text-white text-lg font-serif italic">Digital Presence Live.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">Your new UI is deployed. Google starts indexing your authority. You now look like the safest bet for premium brides.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-4 group"
            >
              <div className="font-serif text-5xl md:text-6xl text-white/10 group-hover:text-[#d4af37]/40 transition-colors duration-700 leading-none">
                MAY <span className="text-2xl md:text-3xl italic">25</span>
              </div>
              <div className="space-y-1">
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">The Launch</p>
                <p className="text-white text-lg font-serif italic">Campaign Activation.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">Your 8 cinema-grade reels begin reaching high-net-worth circles on Meta platforms, building essential brand awareness and visibility.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="space-y-4 group"
            >
              <div className="font-serif text-5xl md:text-6xl text-[#d4af37]/20 group-hover:text-[#d4af37] transition-colors duration-700 leading-none">
                JUNE <span className="text-2xl md:text-3xl italic">+</span>
              </div>
              <div className="space-y-1">
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">The Market Position</p>
                <p className="text-white text-lg font-serif italic">Nurturing Authority.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">Strategic digital presence and professional interactions begin to synchronize, solidifying your reputation as a premium choice in the wedding ecosystem.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5">
        <h4 className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase mb-6">Long-Term Growth Assurance</h4>
        <p className="text-gray-400 text-sm leading-relaxed font-light italic">
          "We offer 100% handover documentation, meaning you own everything we build. Even if we stop working together, your website, SEO engine, and content assets belong to you forever."
        </p>
      </div>
    </motion.div>

    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left pt-8">
      <div className="group">
        <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Direct Email</h4>
        <a href="mailto:abhishek.gujar1202@gmail.com" className="text-lg md:text-xl font-light text-white hover:text-[#d4af37] transition-colors duration-500 break-words">
          abhishek.gujar1202<br/>@gmail.com
        </a>
      </div>
      <div className="group">
        <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">India Support</h4>
        <a href="tel:+917400310443" className="text-lg md:text-xl font-light text-white hover:text-[#d4af37] transition-colors duration-500">
          +91 7400 310 443
        </a>
      </div>
      <div className="group">
        <h4 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Portfolio</h4>
        <a href="https://www.icreatepixels.in" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-light text-white hover:text-[#d4af37] transition-colors duration-500">
          icreatepixels.in
        </a>
      </div>
    </motion.div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tabs = [
    { name: 'The Vision', component: Vision },
    { name: 'Phase 1', component: Phase1 },
    { name: 'Phase 2', component: Phase2 },
    { name: 'Phase 3', component: Phase3 },
    { name: 'References', component: References },
    { name: 'Timeline', component: Timeline },
    { name: 'Investment', component: Investment },
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
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2 -mr-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#050505]/80 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: premiumEase }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[#0a0a0a] border-l border-white/10 z-[70] lg:hidden flex flex-col pt-24 px-8 shadow-2xl"
            >
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-6 text-white/50 hover:text-white p-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="flex flex-col space-y-8 mt-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-xs tracking-[0.3em] uppercase transition-colors duration-500 ${
                      activeTab === index ? 'text-[#d4af37]' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              
              <div className="mt-auto mb-12">
                <div className="w-8 h-[1px] bg-[#d4af37]/30 mb-6"></div>
                <div className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase mb-2">MBN x INDIA</div>
                <div className="text-gray-500 text-[10px] tracking-[0.2em] uppercase">Strategic Architecture</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
