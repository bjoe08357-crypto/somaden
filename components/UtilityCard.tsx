import Link from 'next/link';

interface UtilityCardProps {
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
}

export default function UtilityCard({ title, description, href = '#', eyebrow }: UtilityCardProps) {
  const content = (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-surface/40 p-8 transition-all duration-300 hover:border-gold-500/30 hover:bg-surface/60 hover:shadow-glow-gold">
      {/* Hover Glow Gradient */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
      
      {eyebrow && (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold-400">
          {eyebrow}
        </p>
      )}
      
      <h3 className="mb-3 font-display text-xl font-bold text-white group-hover:text-gold-400 transition-colors">
        {title}
      </h3>
      
      <p className="mb-6 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
        {description}
      </p>
      
      <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-gold-500 transition-transform duration-300 group-hover:translate-x-2">
        Learn more →
      </span>
    </div>
  );

  if (href === '#') {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
