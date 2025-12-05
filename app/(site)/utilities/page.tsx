import SectionHeader from '@/components/SectionHeader';

const utilities = [
  {
    title: 'Discounted Dining',
    description: 'Pay part of your bill with SOMA to receive tiered discounts.',
    detail: 'Example: Hold 1,000 SOMA for 10% discount, 5,000+ SOMA for higher tiers.',
  },
  {
    title: 'Priority Reservations',
    description: 'SOMA holders can access priority booking windows during peak hours.',
    detail: 'Reserve chef tables or social booths before the public rush.',
  },
  {
    title: 'VIP Events & Tasting Menus',
    description:
      'Use SOMA to unlock reserved chef’s table nights, pairing events, and menu previews.',
    detail: 'Tokens double as RSVP credentials for intimate experiences.',
  },
  {
    title: 'Global Restaurant Rewards',
    description: 'Use SOMA at any Soma Den location, retaining your benefits across cities.',
    detail: 'Your tier follows you wherever Soma Den expands.',
  },
  {
    title: 'NFT Memberships (Future)',
    description: 'Exclusive NFTs that act as your digital membership card with recurring perks.',
    detail: 'Bronze, Silver, and Gold series with evolving access rights.',
  },
  {
    title: 'Staff & Community Rewards',
    description: 'SOMA can be used to reward staff performance and incentivize community participation.',
    detail: 'Seasonal pools encourage contributions both on-site and online.',
  },
  {
    title: 'Franchise & Partner Integrations (Future)',
    description: 'Future partner restaurants may integrate SOMA-based benefits into their locations.',
    detail: 'API-friendly infrastructure accelerates onboarding.',
  },
];

export default function UtilitiesPage() {
  return (
    <div className="space-y-12">
      <section className="section-card space-y-4">
        <SectionHeader
          eyebrow="Utilities"
          title="Real Utility, Real Restaurant"
          subtitle="SOMA is not just a speculative token. It powers discounts, perks, and access at Soma Den and future locations, turning everyday dining into a Web3-powered experience."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {utilities.map((utility) => (
          <div key={utility.title} className="section-card">
            <h3 className="text-2xl font-semibold text-white">{utility.title}</h3>
            <p className="mt-3 text-white/80">{utility.description}</p>
            <p className="mt-2 text-sm text-white/60">{utility.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
