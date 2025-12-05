import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="section-card space-y-4">
        <SectionHeader
          eyebrow="Contact"
          title="Contact & Partnerships"
          subtitle="For collaborations, investment, franchising, or integration opportunities, reach out to the Soma Den team."
        />
      </section>
      <div className="grid gap-10 lg:grid-cols-3">
        <div className="section-card lg:col-span-2">
          <ContactForm />
        </div>
        <div className="section-card space-y-4">
          <h3 className="text-xl font-semibold text-white">Direct Contact</h3>
          <p className="text-white/70">
            Business inquiries: <span className="text-gold">info@somaden.io</span>
          </p>
          <p className="text-white/70">Location: Pacific Mall, Jakarta</p>
        </div>
      </div>
    </div>
  );
}
