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
      layman: "We move away from thick, heavy makeup that looks like a mask. Instead, we show skin that looks flawless but real—exactly what high-end brides want.",
      icon: "✨"
    },
    {
      title: "Smart Targeting",
      layman: "You don't need millions of followers. You need the RIGHT followers. We put your work in front of the families who value quality over cost.",
      icon: "🎯"
    },
    {
      title: "The Expert Status",
      layman: "We stop you from being just another makeup artist. We turn you into a professional beauty expert that luxury wedding planners trust and recommend.",
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
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl leading-tight text-white">
            Making you stay <br />
            <span className="italic text-[#d4af37] underline underline-offset-8">Ahead of the rest.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
            Working with us means your brand will feel premium, matching the high standard of your work. We help you attract the right clients who value your talent.
          </motion.p>
          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-4">
            <div className="inline-block border border-[#d4af37] px-6 py-3 text-[#d4af37] text-xs tracking-widest uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-500 cursor-default">
              The Luxury Shift
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
              We handle the website, Google search plans, and professional photos, allowing you more time to focus on your clients and artistry.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#d4af37] transition-colors duration-500">
              <span className="text-white font-serif italic">02</span>
            </div>
            <h4 className="text-white font-serif text-xl mb-4">Brand Management.</h4>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              We focus on attracting serious client inquiries and building a reputation that precedes you. Our goal is to craft a premium brand that high-value clients naturally trust.
            </p>
          </div>
          <div className="text-center group">
            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-[#d4af37] transition-colors duration-500">
              <span className="text-white font-serif italic">03</span>
            </div>
            <h4 className="text-white font-serif text-xl mb-4">Guiding You.</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed italic">
              "We act as your growth partner, working with you to protect your premium reputation and grow your business steadily."
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
      Phase 1: Brand Strategy <br className="hidden md:block"/>& Content Production
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
      <PhaseCard 
        number="01"
        title="Brand Architecture"
        description="Defining your luxury identity. We align your portfolio with the style of your dream bridal clients."
        details={[
          "Style Definition: Locking in the visual mood and voice that attracts high-net-worth clients.",
          "Client Profiling: Understanding exactly what premium brides in your area are looking for.",
          "Visual Standards: Setting the bar for lighting, poses, and editing that screams luxury.",
          "Goal Alignment: Ensuring every piece of content we create builds toward your brand legacy."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Premium Production"
        description="Capturing raw, expensive-looking content in your own space during two production days."
        details={[
          "Production Days: Two full days per month with professional lighting and direction.",
          "Luxury Lighting: Using studio-grade gear to ensure flawless skin texture and depth.",
          "Video Direction: Guided movement and storytelling for reels that stop the scroll.",
          "On-Site Support: Full professional crew to handle all technical aspects of the shoot."
        ]}
      />
      <PhaseCard 
        number="03"
        title="Editing & Sharing"
        description="Refining the photos and videos and sharing them strategically to get you noticed."
        details={[
          "Color Editing: Applying high-end styles to your photos for a luxury magazine finish.",
          "Precision: Ensuring skin looks perfect while keeping its natural texture.",
          "Social Media Videos: Delivering 8 edited videos (Reels) ready for ads and posting.",
          "Growing Visibility: Creating content that brings in high-quality inquiries."
        ]}
      />
    </div>
  </motion.div>
);

const Phase2 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 2: Your Website <br className="hidden md:block"/>& Google Presence
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
      <PhaseCard 
        number="01"
        title="Building the Website"
        description="Setting up your digital brand. We build your chosen design to be fast, beautiful, and secure."
        details={[
          "Design Setup: We build your chosen website design to work perfectly on phones and laptops.",
          "Fast Performance: Ensuring your site loads instantly—brides don't stay on slow websites.",
          "Safe & Professional: Daily backups and professional security for your online home.",
          "Smart Inquiry Form: A form that helps you find the most serious clients instantly."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Google Search Visibility"
        description="Making sure you show up first when brides search for makeup artists on Google."
        details={[
          "Market Research: We look at exactly how local top artists get their clients and we do it better.",
          "The Right Terms: Finding the exact words brides use so we can put your name first.",
          "Professional Authority: Building links and trust so Google sees you as a top expert.",
          "Local Visibility: Setting up your business on Google Maps so local brides see you first."
        ]}
      />
      <PhaseCard 
        number="03"
        title="Results Tracking"
        description="We track every visit and inquiry so you know exactly which ads are bringing you the most value."
        details={[
          "Simple Reports: Easy-to-read dashboards that show how many new brides visit your site.",
          "Inquiry Sources: Seeing exactly where your clients come from (Google, Instagram, or Referrals).",
          "Easy to Use: Seeing how visitors use your site so we can keep making it better.",
          "Plain-English Updates: A monthly review of our progress in simple language."
        ]}
      />
    </div>
  </motion.div>
);

const Phase3 = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16">
    <motion.h1 variants={itemVariants} className="font-serif text-4xl md:text-6xl leading-tight">
      Phase 3: Brand Authority <br className="hidden md:block"/>& Elite Networking
    </motion.h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      <PhaseCard 
        number="01"
        title="Planner Relationships"
        description="A strategic bridge to India's top luxury wedding planners and event designers."
        details={[
          "Identify Planners: Identifying the top 50 wedding planners who handle premium weddings.",
          "Custom Catalogs: Creating beautiful 10-page portfolio catalogs specifically for each planner.",
          "Elite Outreach: Professionally reaching out via email and LinkedIn to introduce your brand.",
          "Partnership Strategy: Helping you start professional conversations and handle initial meetings."
        ]}
      />
      <PhaseCard 
        number="02"
        title="Strategic Collaborations"
        description="Aligning with other high-end brands to solidify your reputation in the luxury circle."
        details={[
          "Brand Match: Identifying jewelry and outfit brands that your premium clients love.",
          "Shared Productions: Planning brand shoots with partners to share costs and double your reach.",
          "Editorial PR: Submitting these shared productions to top wedding blogs and luxury lifestyle sites.",
          "Brand Scale: Adjusting our plan based on the growth of your premium client base."
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
      <h2 className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Style Guide</h2>
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        The High <span className="italic">Standard.</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        We match your work to the same high-quality style seen in international fashion magazines. This makes your brand feel expensive and unique.
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
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">Focus on Detail</h3>
          <p className="text-gray-400 text-xs md:text-sm font-light">Showing off the perfect skin finish and fine details of your work.</p>
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
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">Action Shots</h3>
          <p className="text-gray-400 text-xs md:text-sm font-light">Behind-the-scenes videos that show the care you put into every client.</p>
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
          <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">Final Look</h3>
          <p className="text-gray-400 text-xs md:text-sm font-light">High-end portraits that feel like they belong on a magazine cover.</p>
        </div>
      </motion.a>
    </div>

    <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 mb-12">
      <div>
        <h4 className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
          <span className="w-6 h-[1px] bg-[#d4af37]"></span> Professional Growth
        </h4>
        <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 italic leading-relaxed">
          "Build a business, not just a job."
        </h3>
        <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
          High-end wedding planners in India want to work with people who are organized and professional. By using these styles, we make sure they see you as a top-tier partner for their biggest luxury weddings.
        </p>
        <div className="flex gap-4">
          <div className="text-[#d4af37] font-mono text-xs uppercase tracking-widest border border-[#d4af37]/20 px-3 py-1">Clean & Modern</div>
          <div className="text-[#d4af37] font-mono text-xs uppercase tracking-widest border border-[#d4af37]/20 px-3 py-1">Premium Feel</div>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 bg-white/5 border border-white/5 rounded-sm">
        <blockquote className="text-gray-400 font-light text-center italic leading-relaxed">
          "Billionaire families don't waste time. They want the best. If your photos don't look amazing in 2 seconds, they move on. Our styles are designed to grab their attention instantly."
        </blockquote>
      </div>
    </motion.div>
  </motion.div>
);

const BrandPillars = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-6xl mx-auto py-24 border-t border-white/5">
    <motion.div variants={itemVariants} className="text-center mb-20">
      <h2 className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">The Methodology</h2>
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        The Four Pillars of <br/><span className="italic underline underline-offset-8 decoration-[#d4af37]/30">Brand Authority.</span>
      </h1>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Visual Dominance", 
          desc: "Establishing a visual language that looks expensive and exclusive, moving away from generic social media styles.",
          icon: "✦"
        },
        { 
          title: "Digital Ecosystem", 
          desc: "Building a high-performance website and Google presence that serves as your 24/7 luxury storefront.",
          icon: "✧"
        },
        { 
          title: "Elite Network", 
          desc: "Active outreach to high-end planners and brands to place you in the path of 'budget-is-no-issue' clients.",
          icon: "❃"
        },
        { 
          title: "Brand Management", 
          desc: "Total alignment of your voice, portfolio, and positioning to build a lasting legacy in the bridal industry.",
          icon: "❂"
        }
      ].map((pillar, idx) => (
        <motion.div 
          key={idx}
          variants={itemVariants}
          className="p-8 border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-700 group"
        >
          <div className="text-[#d4af37] text-2xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
            {pillar.icon}
          </div>
          <h4 className="text-white font-serif text-xl mb-4 group-hover:text-[#d4af37] transition-colors duration-500 font-normal italic">
            {pillar.title}
          </h4>
          <p className="text-gray-500 text-sm font-light leading-relaxed">
            {pillar.desc}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Timeline = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-4xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-20">
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        How We Get It Done
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        A clear, step-by-step plan starting April 20th to make sure your brand is ready for the peak wedding season in India.
      </p>
    </motion.div>
    
    <div className="ml-4 md:ml-8">
      <TimelineItem 
        month="APR 20 - MAY 10"
        title="Infrastructure & Authority"
        desc="Establishing your premium digital storefront and preparing for high-value search visibility."
        details={[
          "Competitor Dissection: Mapping exactly how the top 1% of artists in Mumbai are winning.",
          "Digital Foundation: Building a high-performance website optimized for phone conversions.",
          "Lead Qualification: Engineering booking forms that automatically filter for luxury clients.",
          "SEO Calibration: Targeting high-intent search terms used by luxury wedding planners."
        ]}
      />
      <TimelineItem 
        month="MAY 10 - MAY 31"
        title="Asset Production & Ads"
        desc="Executing your first major brand shoots and launching high-precision advertising."
        details={[
          "Creative Direction: Fully planned mood boards and lighting setups for 2 production days.",
          "Cinematic Content: Delivering high-end Reels and portraits designed for high CTR ads.",
          "Ad Deployment: Launching your social media ad sets targeting exclusive interest groups.",
          "Feedback Loop: Monitoring initial data to double down on the creative that works best."
        ]}
      />
      <TimelineItem 
        month="JUNE & BEYOND"
        title="Authority & Scaling"
        desc="Leveraging your new digital presence to solidify elite relationships and high-value referrals."
        details={[
          "B2B Catalog Deployment: Delivering physical and digital portfolio catalogs to targeted planners.",
          "Elite Networking: Active 1-on-1 introductions and relationship building with luxury coordinators.",
          "Strategic Partnerships: Initiating brand collaboration shoots with high-end bridal couture houses.",
          "Performance Analytics: Deep-dive monthly reviews to optimize your search rank and lead quality."
        ]}
      />
    </div>
  </motion.div>
);

const Investment = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="max-w-5xl mx-auto">
    <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
      <h2 className="text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-6">Investment Plans</h2>
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        Project <span className="italic">Pricing.</span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
        A clear and simple plan designed to grow your brand. No hidden fees, just real results.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <motion.div variants={itemVariants} className="border border-white/10 p-8 hover:border-[#d4af37]/50 transition-colors duration-700 flex flex-col group">
        <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">The Luxury Brand Plan</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors duration-700">Brand Building</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow">A complete plan to build you into a recognized luxury brand. Includes 2 shoot days, high-end content creation, social media ads, and personal brand management.</p>
        <div className="text-3xl font-serif text-white">₹44,000 <span className="text-sm text-gray-500 font-sans font-light">/ month</span></div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="border border-white/10 p-8 hover:border-[#d4af37]/50 transition-colors duration-700 flex flex-col group">
        <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Website Setup</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors duration-700">One-Time Setup</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow">A complete professional website with search engine setup so clients can find you easily.</p>
        <div className="text-3xl font-serif text-white">₹38,500 <span className="text-sm text-gray-500 font-sans font-light">one-time</span></div>
      </motion.div>

      <motion.div variants={itemVariants} className="border border-white/10 p-8 hover:border-[#d4af37]/50 transition-colors duration-700 flex flex-col group">
        <div className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-4">Planner Connections</div>
        <h3 className="font-serif text-2xl mb-4 group-hover:text-[#d4af37] transition-colors duration-700">Portfolio Catalog</h3>
        <p className="text-gray-400 font-light text-sm mb-8 flex-grow">A professional digital catalog to share with top wedding planners to get more referrals.</p>
        <div className="text-3xl font-serif text-white">₹2,200 <span className="text-sm text-gray-500 font-sans font-light">/ catalog</span></div>
      </motion.div>
    </div>

    <motion.div variants={itemVariants} className="mb-20 bg-[#0a0a0a] border border-white/10 p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <span className="font-mono text-[10vw] leading-none text-[#d4af37]">LIST</span>
      </div>
      
      <h3 className="relative z-10 text-[#d4af37] text-xs tracking-[0.4em] uppercase mb-12 text-center flex items-center justify-center gap-4">
        <span className="w-12 h-[1px] bg-[#d4af37]/30"></span> 
        Service Details
        <span className="w-12 h-[1px] bg-[#d4af37]/30"></span>
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10">
        <div className="space-y-8">
          <h4 className="font-serif text-2xl border-b border-white/10 pb-4 flex items-center gap-3 italic">
            01. Professional Website
          </h4>
          <ul className="space-y-6">
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Your Premium Portfolio</span>
                <span className="font-mono text-[10px] text-[#d4af37]">READY FOR CLIENTS</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">A modern website that works perfectly on phones and computers to show your work.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Google Visibility</span>
                <span className="font-mono text-[10px] text-[#d4af37]">BE FOUND</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Setup so that local brides can easily find you when they search for makeup artists.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Smart Booking Form</span>
                <span className="font-mono text-[10px] text-[#d4af37]">SAVING YOU TIME</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Forms that help you identify serious, high-value clients and skip budget-shoppers.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Ad Tracking Setup</span>
                <span className="font-mono text-[10px] text-[#d4af37]">SEE WHAT WORKS</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Tools to see exactly where your customers are coming from and which ads are working.</p>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-serif text-2xl border-b border-white/10 pb-4 flex items-center gap-3 italic">
            02. Full Brand Management
          </h4>
          <ul className="space-y-6">
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Brand Strategy & Positioning</span>
                <span className="font-mono text-[10px] text-[#d4af37]">LUXURY STANDARD</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Dedicated sessions to refine your brand voice and visual style to attract premium brides.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">8 Professional Reels</span>
                <span className="font-mono text-[10px] text-[#d4af37]">HIGH QUALITY</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Short videos designed to grab attention on social media with clear sound and editing.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Premium Portraits & Photos</span>
                <span className="font-mono text-[10px] text-[#d4af37]">PREMIUM FINISH</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">High-quality photos that show perfect skin and detail, looking like magazine shots.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">2 Production Days</span>
                <span className="font-mono text-[10px] text-[#d4af37]">LOCAL</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Two dedicated days per month in your space to capture fresh, authentic content.</p>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="font-serif text-2xl border-b border-white/10 pb-4 flex items-center gap-3 italic">
            03. Main Brand Shoot (Add-on)
          </h4>
          <ul className="space-y-6">
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Website Hero Video</span>
                <span className="font-mono text-[10px] text-[#d4af37]">CORE VISUAL</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">1 Main video for your home page header. Plus all raw and edited photos from the shoot.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Creative Planning</span>
                <span className="font-mono text-[10px] text-[#d4af37]">IDEAS & STYLE</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">I will plan the theme, styles, and inspiration boards. Location sourcing is included.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">Photography Team</span>
                <span className="font-mono text-[10px] text-[#d4af37]">SAVOIR STUDIO</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Includes Photographer, On-site Support, and my personal management of the shoot.</p>
            </li>
            <li className="group">
              <div className="flex justify-between items-center mb-1 text-sm tracking-wide">
                <span className="text-white">One Day Session</span>
                <span className="font-mono text-[10px] text-[#d4af37]">MUMBAI</span>
              </div>
              <p className="text-gray-500 text-xs font-light leading-relaxed">Hosted at Savoir Studio. Professional lighting setup designed specifically for bridal looks.</p>
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
                <span className="text-gray-300 font-light text-lg">Monthly Brand Booking (60% Advance)</span>
                <span className="text-white font-serif text-2xl">₹26,400</span>
              </div>
              <p className="text-gray-500 text-sm font-light italic">Required to lock-in shoot dates and begin brand planning (Total: ₹44k).</p>
            </div>
            <div className="border-b border-white/5 pb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-300 font-light text-lg">Digital Setup (60% Advance)</span>
                <span className="text-white font-serif text-2xl">₹23,100</span>
              </div>
              <p className="text-gray-500 text-sm font-light italic">Required to start website launch and search setup (Total: ₹38.5k).</p>
            </div>
            <div className="border-b border-white/5 pb-6">
              <div className="flex justify-between items-end mb-2">
                <span className="text-gray-300 font-light text-lg">Website Commercial Shoot (50% Advance)</span>
                <span className="text-white font-serif text-2xl">₹19,250</span>
              </div>
              <p className="text-gray-500 text-sm font-light italic">Optional. Required to book Savoir Studio & sync teams (Total: ~₹38.5k). Book 15 days prior.</p>
            </div>
            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-xs tracking-widest uppercase text-[#d4af37]">
                <span>Optional Studio Access</span>
                <span>₹6,600 / day</span>
              </div>
              <div className="flex justify-between text-xs tracking-widest uppercase text-gray-400">
                <span>Social Media Ad Spends</span>
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
        <h4 className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase mb-10 flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#d4af37]"></span> Starting Your Project (Process)
        </h4>
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">01.</div>
            <div>
              <p className="text-white mb-2 font-medium">Securing Your Strategy Slot</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">Your spot in our calendar is confirmed upon the initial 60% booking. This allows us to immediately allocate our production team and begin the preliminary market research for your specific region.</p>
              <ul className="text-gray-600 text-[11px] uppercase tracking-wider space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Contract Formalization</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Production Dates Locked</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">02.</div>
            <div>
              <p className="text-white mb-2 font-medium">The Brand Immersion Call</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">A 60-minute intensive session within 24 hours. We move beyond "makeup" and talk about the lifestyle, values, and psychology of your highest-paying bridal clients.</p>
              <ul className="text-gray-600 text-[11px] uppercase tracking-wider space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Target Audience Mapping</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Tone of Voice Definition</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">03.</div>
            <div>
              <p className="text-white mb-2 font-medium">Asset Handover & Audit</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">We collect your high-resolution portfolio and audit your current digital touchpoints. This ensures we are not just starting from zero, but elevating what already makes your work unique.</p>
              <ul className="text-gray-600 text-[11px] uppercase tracking-wider space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Portfolio Content Collection</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Digital Presence Review</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">04.</div>
            <div>
              <p className="text-white mb-2 font-medium">Strategic Roadmap Delivery</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">We present your 3-month Brand Roadmap, including the first set of mood boards for our production days and the blueprint for your new Google-optimized website.</p>
              <ul className="text-gray-600 text-[11px] uppercase tracking-wider space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Initial Mood Boards</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Website Visual Concept</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="text-white font-serif italic text-2xl w-12 shrink-0">05.</div>
            <div>
              <p className="text-white mb-2 font-medium">Production & Execution</p>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">Action begins. We host the first production day in your space and initiate the website development. Within 20 days, your brand shift is visible to the market.</p>
              <ul className="text-gray-600 text-[11px] uppercase tracking-wider space-y-2">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> First Production Day</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#d4af37] rounded-full"></span> Website Development Start</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 border-t border-white/5 relative">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
          <span className="font-serif text-[15vw] leading-none text-white italic">2026</span>
        </div>

        <h4 className="text-[#d4af37] text-xs tracking-[0.5em] uppercase mb-16 text-center italic">
          Targeting the Wedding Season
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
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">Step 01</p>
                <p className="text-white text-lg font-serif italic">Project Start.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">We lock your dates, setup your social media tools, and start the website setup. The journey begins.</p>
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
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">Step 02</p>
                <p className="text-white text-lg font-serif italic">Website Ready.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">Your new website is live. Brides can now find you on Google. You look like the best choice in the city.</p>
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
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">Step 03</p>
                <p className="text-white text-lg font-serif italic">Campaign Start.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">Your high-quality videos start reaching high-value clients on Instagram and Facebook, making you visible.</p>
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
                <p className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase">Step 04</p>
                <p className="text-white text-lg font-serif italic">Consistent Growth.</p>
                <p className="text-gray-500 text-xs font-light leading-relaxed">Your brand is now steady. Strategic connections and daily inquiries solidify your position as a top bridal artist.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-white/5">
        <h4 className="text-[#d4af37] text-[10px] tracking-[0.3em] uppercase mb-6">Your Ownership</h4>
        <p className="text-gray-400 text-sm leading-relaxed font-light italic">
          "You own everything we build. Even if we stop working together, your website and everything else belongs to you forever."
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

const CommercialShoot = () => (
  <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="space-y-16 max-w-6xl mx-auto">
    <div className="space-y-8">
      <motion.h2 variants={itemVariants} className="text-[#d4af37] text-xs md:text-sm tracking-[0.4em] uppercase">
        Optional Add-on
      </motion.h2>
      <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl leading-tight text-white font-normal uppercase">
        Website <br />
        <span className="italic text-[#d4af37] underline underline-offset-8">Commercial Shoot.</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl">
        For those who want to launch with a high-impact cinematic presence. This professional shoot is designed specifically for your new website’s main visuals.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <motion.div variants={itemVariants} className="space-y-8">
        <div className="border border-white/10 p-8 space-y-6 bg-white/[0.02] hover:border-[#d4af37]/30 transition-colors duration-700">
          <h3 className="font-serif text-2xl text-white italic capitalize">The deliverables</h3>
          <ul className="space-y-4 text-gray-300 font-light">
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-4 mt-1 text-xs">✦</span>
              <span>1 Horizontal Video for Website Hero Section</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-4 mt-1 text-xs">✦</span>
              <span>Professional Photographer & Creative Direction</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-4 mt-1 text-xs">✦</span>
              <span>Technical Lighting & Cinema Gear Support</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#d4af37] mr-4 mt-1 text-xs">✦</span>
              <span>Raw Assets + 15 High-End Edited Images</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-white/10 pb-4">
            <span className="text-gray-400 uppercase tracking-widest text-xs">Estimated Cost</span>
            <span className="text-white font-serif text-2xl">~₹38,500</span>
          </div>
          <p className="text-gray-500 text-xs italic">Final cost may vary based on specific creative requirements.</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-8">
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <span className="text-[#d4af37] text-xs font-serif uppercase tracking-widest">LOC</span>
            </div>
            <div>
              <h4 className="text-white text-lg font-serif">Savoir Studio, Mumbai</h4>
              <p className="text-gray-500 text-sm font-light mt-1 leading-relaxed">
                Preferred luxury studio setting in Mumbai. Note: <span className="text-gray-300">I will handle the location sourcing, studio locking, and the creative theme design to ensure it matches your brand perfectly.</span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <span className="text-[#d4af37] text-xs font-serif uppercase tracking-widest">BKG</span>
            </div>
            <div>
              <h4 className="text-white text-lg font-serif">Booking Requirements</h4>
              <div className="space-y-2 mt-2">
                <p className="text-gray-400 text-sm font-light flex justify-between border-b border-white/5 pb-1 max-w-xs">
                  <span>Advance Payment</span>
                  <span className="text-white">50%</span>
                </p>
                <p className="text-gray-400 text-sm font-light flex justify-between max-w-xs">
                  <span>Notice Required</span>
                  <span className="text-white">15 Days Prior</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-[#d4af37]/5 border border-[#d4af37]/20">
          <p className="text-white text-xs font-light leading-relaxed">
            <span className="text-[#d4af37] font-medium uppercase tracking-tighter">Note for artists:</span> This shoot is optional but highly recommended to ensure your website visuals match the high-end quality of the design we are building.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tabs = [
    { name: 'The Vision', component: Vision },
    { name: 'Methodology', component: BrandPillars },
    { name: 'Phase 1', component: Phase1 },
    { name: 'Phase 2', component: Phase2 },
    { name: 'Phase 3', component: Phase3 },
    { name: 'References', component: References },
    { name: 'Commercial Shoot', component: CommercialShoot },
    { name: 'Timeline', component: Timeline },
    { name: 'Investment', component: Investment },
    { name: 'Contact', component: Contact },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-[#f4f4f4] font-sans selection:bg-[#d4af37] selection:text-[#050505] relative overflow-hidden">
      
      {/* Cinematic Makeup Background */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 mix-blend-luminosity grayscale"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512496015851-a1dc8a47159c?q=80&w=2000&auto=format&fit=crop")' }}
      ></div>
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/95 to-[#050505] pointer-events-none"></div>

      {/* Subtle Noise Overlay for premium texture */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>
      
      {/* Subtle background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#d4af37] opacity-[0.04] blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-[0.3em] text-white flex items-center gap-4 shrink-0">
            MBN <span className="text-[#d4af37] text-xs font-sans font-extralight italic opacity-70">x</span> INDIA
          </div>
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-7">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-[10px] xl:text-xs tracking-[0.2em] uppercase transition-all duration-500 relative py-2 px-1 ${
                  activeTab === index ? 'text-white font-medium' : 'text-gray-500 hover:text-white'
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
