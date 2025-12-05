import Hero from '@/components/Hero';
import RestaurantGallery from '@/components/RestaurantGallery';
import RestaurantPreview from '@/components/RestaurantPreview';
import SectionHeader from '@/components/SectionHeader';
import UtilityCard from '@/components/UtilityCard';
import Link from 'next/link';

const quickStats = [
  { label: '100M', value: 'Fixed Supply' },
  { label: 'Web3', value: 'Powered Dining' },
  { label: 'Global', value: 'Expansion Ready' },
];

const utilityCards = [
  {
    title: 'Discounted Dining',
    description: 'Pay with SOMA and receive dynamic discounts at Soma Den.',
  },
  {
    title: 'Priority Reservations',
    description: 'Get early booking access and better seating options.',
  },
  {
    title: 'VIP Events & Tastings',
    description:
      'Exclusive chef tables, menu pre-launch events, and member-only nights.',
  },
  {
    title: 'Global Expansion',
    description: 'Use your SOMA benefits across future Soma Den locations worldwide.',
  },
];

const roadmapPhases = [
  {
    phase: 'Phase 1 – Launch & Integration',
    detail:
      'Token deployment, Soma Den Jakarta launch, POS & discount integration.',
  },
  {
    phase: 'Phase 2 – Loyalty & NFTs',
    detail:
      'Loyalty rewards, NFT memberships, referrals, and deeper community perks.',
  },
  {
    phase: 'Phase 3 – Global Expansion',
    detail:
      'New locations, franchising, governance, and multi-city benefits.',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />

      {/* Stats Strip */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel grid gap-8 rounded-2xl p-8 text-center sm:grid-cols-3">
          {quickStats.map((stat) => (
            <div key={stat.label} className="group space-y-1">
              <p className="font-display text-4xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">{stat.label}</p>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="container-custom grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <SectionHeader
            eyebrow="The Vision"
            title="Where Culinary Art Meets Digital Value"
            subtitle="SOMA isn’t just a token – it’s a bridge. Use SOMA to unlock discounts, priority access, special events, and loyalty rewards at Soma Den and future partner locations."
          />
          
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              'Instant Payment Discounts',
              'Priority Booking Access',
              'VIP Tasting Menus',
              'Governance Rights',
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-3 rounded-xl border border-white/5 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gold-500/20 text-xs text-gold-400">
                  ✓
                </div>
                <p className="text-sm font-medium text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
           <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gold-500/20 to-purple-500/20 blur-[80px]" />
           <div className="aspect-square rounded-3xl border border-white/10 bg-surface/50 p-2 shadow-2xl backdrop-blur-sm">
              <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
           </div>
        </div>
      </section>

      {/* Restaurant Gallery */}
      <div className="space-y-8">
        <div className="container-custom text-center">
          <SectionHeader
            eyebrow="Ambience"
            title="Immersive Dining"
            subtitle="A glimpse into the atmosphere of Soma Den."
            align="center"
          />
        </div>
        <RestaurantGallery />
      </div>

      {/* Utilities Preview */}
      <section id="utilities-preview" className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Utility"
          title="Unlock Real World Value"
          subtitle="Four flagship utilities launch with Soma Den Jakarta, with more rolling out alongside global expansion."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {utilityCards.map((card) => (
            <UtilityCard
              key={card.title}
              title={card.title}
              description={card.description}
              href="/utilities"
            />
          ))}
        </div>
      </section>

      <div className="container-custom">
        <RestaurantPreview />
      </div>

      {/* Roadmap Preview */}
      <section className="container-custom space-y-12">
        <SectionHeader
          eyebrow="Timeline"
          title="The Path Forward"
          subtitle="Explore the major phases as we expand SOMA and Soma Den worldwide."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {roadmapPhases.map((phase) => (
            <div
              key={phase.phase}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-surface/50 p-8 transition-all hover:-translate-y-1 hover:shadow-glow-gold"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-gold-400 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="font-display text-xl font-bold text-white">{phase.phase}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{phase.detail}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/roadmap" className="button-secondary w-full sm:w-auto">
            View Full Roadmap
          </Link>
        </div>
      </section>
    </div>
  );
}
