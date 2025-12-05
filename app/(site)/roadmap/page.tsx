import SectionHeader from '@/components/SectionHeader';
import RoadmapTimeline from '@/components/RoadmapTimeline';

const roadmapItems = [
  {
    phase: 'Phase 1 – Launch & Integration',
    period: '2025',
    bullets: [
      'Deploy SOMA token on Ethereum',
      'Launch Soma Den at Pacific Mall, Jakarta',
      'Integrate SOMA into restaurant POS for discounts',
      'Initial airdrop and opening promotions',
      'Website & dashboard live',
    ],
  },
  {
    phase: 'Phase 2 – Loyalty & NFTs',
    period: '2025–2026',
    bullets: [
      'Wallet-based loyalty tracking',
      'SOMA rewards for repeat diners and referrals',
      'NFT membership program (Bronze / Silver / Gold)',
      'Beta governance features for community input',
    ],
  },
  {
    phase: 'Phase 3 – Global Expansion',
    period: '2026+',
    bullets: [
      'New Soma Den locations in other cities',
      'Franchise framework using SOMA',
      'CEX/DEX expansion for SOMA',
      'Refined governance for expansion and collaborations',
    ],
  },
  {
    phase: 'Phase 4 – Extended Experiences',
    period: 'Future',
    bullets: [
      'Digital/virtual restaurant experiences',
      'Online events, cooking classes, collaborations',
      'Deeper integration into other Web3 ecosystems',
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-12">
      <section className="section-card space-y-4">
        <SectionHeader
          eyebrow="Roadmap"
          title="Phased delivery, real milestones"
          subtitle="Each phase introduces tangible experiences for diners and token holders alike."
        />
      </section>
      <section className="section-card">
        <RoadmapTimeline items={roadmapItems} />
      </section>
    </div>
  );
}
