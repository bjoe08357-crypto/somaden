/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface RestaurantPreviewProps {
  compact?: boolean;
}

export default function RestaurantPreview({ compact = false }: RestaurantPreviewProps) {
  return (
    <section className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/30 ${compact ? '' : 'lg:grid lg:grid-cols-2'}`}>
      <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        <div className="space-y-6">
          <div>
            <span className="badge-pill mb-4">Now Open</span>
            <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Pacific Mall, Jakarta
            </h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-300">
            Experience the first physical manifestation of Soma Den. A modern fusion sanctuary where your digital wallet unlocks real-world luxury.
          </p>
          
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Modern Fusion Cuisine with Local Origins
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Immersive Digital Art & Soundscapes
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Exclusive &apos;Hidden&apos; Menu for Token Holders
            </li>
          </ul>
          
          <div className="pt-4">
            <Link href="/restaurant" className="button-primary w-full sm:w-auto">
              Explore the Venue
            </Link>
          </div>
        </div>
      </div>
      
      <div className="relative min-h-[300px] bg-surface/50 lg:min-h-full">
        <img 
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" 
          alt="Soma Den Interior" 
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-transparent lg:bg-gradient-to-l" />
        
        <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-2">
          {['Cozy Lighting', 'Social Tables', 'Chef&rsquo;s Bar'].map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
