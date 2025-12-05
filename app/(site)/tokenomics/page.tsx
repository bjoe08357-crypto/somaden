import SectionHeader from '@/components/SectionHeader';
import TokenomicsTable from '@/components/TokenomicsTable';

const allocations = [
  { name: 'Ecosystem Rewards (Dining & Loyalty)', percent: 30, amount: '30,000,000' },
  { name: 'Treasury / Global Expansion', percent: 20, amount: '20,000,000' },
  { name: 'Liquidity & Exchange Listings', percent: 15, amount: '15,000,000' },
  { name: 'Marketing & Collaborations', percent: 10, amount: '10,000,000' },
  { name: 'Soma Den Founders', percent: 10, amount: '10,000,000' },
  { name: 'Team & Advisors', percent: 5, amount: '5,000,000' },
  { name: 'Airdrop (Grand Opening)', percent: 5, amount: '5,000,000' },
  { name: 'Franchise Development Pool', percent: 5, amount: '5,000,000' },
];

const vesting = [
  'Founders: 12-month cliff, then vesting over 24 months',
  'Team & Advisors: 6-month cliff, then vesting over 18 months',
  'Marketing: Released gradually per campaign',
  'Ecosystem Rewards: Distributed over time based on user activity',
  'Franchise Pool: Locked until new location expansions',
];

export default function TokenomicsPage() {
  return (
    <div className="space-y-16">
      <section className="section-card space-y-4">
        <SectionHeader
          eyebrow="$SOMA"
          title="$SOMA Tokenomics – 100,000,000 Total Supply"
          subtitle="A balanced allocation designed to support real-world utility, growth, and long-term sustainability."
        />
      </section>

      <section className="section-card">
        <TokenomicsTable allocations={allocations} totalSupply="100,000,000 $SOMA" />
      </section>

      <section className="section-card space-y-4">
        <SectionHeader eyebrow="Vesting" title="Aligned for durability" />
        <ul className="space-y-3 text-white/80">
          {vesting.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
