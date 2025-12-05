/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface/30 shadow-2xl backdrop-blur-sm">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Fine Dining Ambience" 
            className="h-full w-full object-cover opacity-40 transition-transform duration-[30s] hover:scale-110 motion-safe:animate-slow-pan"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night/90 via-night/80 to-night/40" />
        </div>

        <div className="relative z-10 grid gap-12 px-6 py-20 lg:grid-cols-2 lg:px-16 lg:py-32">
          <div className="space-y-8">
            <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="badge-pill bg-gold-500/20 text-gold-400 border-gold-500/30 backdrop-blur-md">
                The Future of Dining
              </span>
            </div>
            
            <h1 className="animate-fade-in-up font-display text-5xl font-bold leading-[1.1] text-white opacity-0 sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.2s' }}>
              Taste the <br />
              <span className="text-gradient-gold">Digital Revolution</span>
            </h1>
            
            <p className="animate-fade-in-up max-w-lg text-lg text-gray-300 opacity-0" style={{ animationDelay: '0.3s' }}>
              Soma Den is where culinary artistry meets Web3 utility. Hold <span className="font-semibold text-gold-400">$SOMA</span> to unlock exclusive menus, priority seating, and frictionless payments.
            </p>
            
            <div className="animate-fade-in-up flex flex-wrap items-center gap-5 opacity-0" style={{ animationDelay: '0.4s' }}>
              <Link href="/restaurant" className="button-primary group">
                <span>View Restaurant</span>
              </Link>
              <Link href="/tokenomics" className="button-secondary group">
                <span>Tokenomics</span>
              </Link>
            </div>
            
            <div className="animate-fade-in-up pt-4 opacity-0" style={{ animationDelay: '0.5s' }}>
               <Link href="/#utilities-preview" className="group inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300">
                 <span>Discover Utility</span>
                 <span className="block transition-transform group-hover:translate-x-1">→</span>
               </Link>
            </div>
          </div>

          {/* Floating Card Interaction */}
          <div className="relative hidden lg:block animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="absolute -right-12 top-10 h-80 w-80 rounded-full bg-gold-500/20 blur-[80px]" />
            
            <div className="relative max-w-md rotate-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glass transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 p-2">
                    <div className="h-full w-full rounded-full bg-gold-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Soma Den</p>
                    <p className="text-xs text-gray-400">Pacific Mall, Jakarta</p>
                  </div>
                </div>
                <div className="badge-pill text-[10px]">Paid with $SOMA</div>
              </div>
              
              <div className="my-6 space-y-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Omakase Experience (x2)</span>
                  <span>3,500,000 IDR</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Sake Pairing</span>
                  <span>1,200,000 IDR</span>
                </div>
                <div className="my-4 h-px w-full bg-white/10" />
                <div className="flex justify-between text-lg font-semibold text-gold-400">
                  <span>SOMA Holder Discount</span>
                  <span>-15%</span>
                </div>
              </div>
              
              <div className="rounded-xl bg-black/20 p-4 text-center">
                <p className="text-xs uppercase tracking-widest text-gray-500">Total Savings</p>
                <p className="font-display text-2xl text-white">705,000 IDR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
