interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gold-500/50" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
            {eyebrow}
          </p>
          {align === 'center' && <span className="h-px w-8 bg-gold-500/50" />}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
