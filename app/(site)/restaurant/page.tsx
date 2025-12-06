/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import RestaurantGallery from '@/components/RestaurantGallery';

const steps = [
  {
    title: 'Step 1 – Scan & Connect',
    detail:
      'At checkout, scan a QR code to connect your wallet or show your SOMA-linked profile.',
  },
  {
    title: 'Step 2 – Select Payment Mix',
    detail:
      'Choose how much of your bill to pay with SOMA and how much with fiat or other methods.',
  },
  {
    title: 'Step 3 – Instant Discount Applied',
    detail:
      'The system applies a SOMA-based discount automatically based on your holdings and tier.',
  },
];

const loyaltyItems = [
  'Special promotions',
  'Loyalty programs',
  'Restaurant campaigns',
];

const membershipTiers = [
  'Bronze – small recurring perks',
  'Silver – better discounts and booking priority',
  'Gold – access to exclusive events and tasting menus',
];

const futureLocations = ['Jakarta – Now', 'Dubai – Planned', 'Singapore – Planned', 'Melbourne – Planned', 'More cities to be announced'];

export default function RestaurantPage() {
  return (
    <div className="space-y-24">
      <section className="container-custom text-center space-y-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <span className="badge-pill">Restaurant Experience</span>
          <h1 className="font-display text-5xl font-bold text-white leading-tight">
            Soma Den – A Restaurant Powered by <span className="text-gradient-gold">$SOMA</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            The first Soma Den location at Pacific Mall, Jakarta is where the SOMA token comes to life. Dine, pay, earn, and enjoy more with every visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="#how-it-works" className="button-primary">
              How SOMA Works
            </Link>
            <Link href="/" className="button-secondary">
              Back to Token Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="space-y-8">
         <SectionHeader 
           eyebrow="Visual Tour" 
           title="Inside the Den" 
           align="center" 
           subtitle="Modern fusion dining with a digital twist, designed for social dinners, casual meetups, and VIP experiences."
         />
         <RestaurantGallery />
      </div>

      <section className="container-custom grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
             <h3 className="font-display text-3xl font-bold text-white">Location Details</h3>
             <div className="h-1 w-20 bg-gold-500" />
          </div>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Venue</p>
              <p className="text-xl text-white">Pacific Mall, Jakarta</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Concept</p>
              <p className="text-lg">Modern fusion dining with a digital twist</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-1">Opening Phase</p>
              <p className="text-lg">Phase 1 – Token + Restaurant live together</p>
            </div>
          </div>
        </div>
        
        <div className="relative h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
           <img 
             src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=2074&auto=format&fit=crop" 
             alt="Bar Detail" 
             className="absolute inset-0 h-full w-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
           <div className="absolute bottom-8 left-8">
              <p className="font-display text-2xl font-bold text-white">The Mixology Bar</p>
              <p className="text-gold-400">Signature SOMA Cocktails</p>
           </div>
        </div>
      </section>

      <section id="how-it-works" className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Dining flow"
          title="How $SOMA Works When You Dine"
          subtitle="Scan, mix your payment, and unlock instant savings tied to your holdings."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="section-card group relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-xl font-bold text-night shadow-glow-gold">
                {i + 1}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-gray-400 leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-gold-500/30 bg-gold-500/5 p-8 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-gold-400">Real World Scenario</p>
          <p className="mt-4 font-display text-2xl text-white">
            &quot;Bill = 500,000 IDR. Pay 150k in SOMA + 350k via Card → <span className="text-gold-400 underline decoration-gold-500/50 underline-offset-4">Get 15% Instant Discount</span>&quot;
          </p>
        </div>
      </section>

      <section className="container-custom grid gap-12 lg:grid-cols-2">
        <div className="section-card">
          <SectionHeader
            eyebrow="Earn & collect"
            title="Loyalty Experience"
          />
          <p className="mt-6 text-gray-300">
            Earn SOMA through:
          </p>
          <ul className="mt-4 space-y-3">
            {loyaltyItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-400">
                 <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                 {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-card border-gold-500/20 bg-gradient-to-br from-surface/40 to-gold-500/5">
          <SectionHeader
            eyebrow="Future Access"
            title="NFT Memberships"
          />
          <p className="mt-6 text-gray-300">Coming soon tiers:</p>
          <ul className="mt-4 space-y-3">
            {membershipTiers.map((tier) => (
              <li key={tier} className="flex items-center gap-3 text-gray-400">
                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px]">NFT</div>
                 {tier}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-custom space-y-8 text-center">
        <SectionHeader
          eyebrow="Expansion"
          title="Future Locations"
          align="center"
          subtitle="SOMA is designed to travel with you – the same token, more restaurants, more value."
        />
        <div className="flex flex-wrap justify-center gap-4">
          {futureLocations.map((city) => (
            <div key={city} className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 backdrop-blur-sm transition hover:bg-white/10 hover:text-white hover:border-gold-500/50">
              {city}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
