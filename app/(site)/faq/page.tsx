import SectionHeader from '@/components/SectionHeader';
import FaqAccordion from '@/components/FaqAccordion';

const faqs = [
  {
    question: 'What is SOMA?',
    answer:
      'SOMA ($SOMA) is an Ethereum-based utility token used to unlock discounts, perks, and experiences at Soma Den and partner venues.',
  },
  {
    question: 'How do I use SOMA at the restaurant?',
    answer:
      'Scan the SOMA QR code at checkout, choose how much of your bill you want to pay with SOMA, and the discount is applied instantly.',
  },
  {
    question: 'Is SOMA a security?',
    answer:
      'No. SOMA is designed as a utility token. It powers experiences and perks, not investment products. This is not financial advice.',
  },
  {
    question: 'Do I need to understand crypto to benefit?',
    answer:
      'Not at all. Staff and the POS flow guide you through the process, even if you are new to Web3.',
  },
  {
    question: 'Which wallets are supported?',
    answer:
      'Popular EVM wallets like MetaMask, Rainbow, and WalletConnect-compatible options work at launch.',
  },
  {
    question: 'Will SOMA be listed on exchanges?',
    answer:
      'Liquidity and exchange listings are part of the roadmap. Follow official channels for announcements.',
  },
  {
    question: 'Does the price of SOMA affect my discount?',
    answer:
      'Discounts are tiered based on your SOMA holdings balance, not price speculation, keeping perks predictable.',
  },
];

export default function FaqPage() {
  return (
    <div className="space-y-10">
      <section className="section-card space-y-4">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions about SOMA?"
          subtitle="Friendly answers focusing on utility, access, and risk-awareness."
        />
      </section>
      <FaqAccordion items={faqs} />
    </div>
  );
}
