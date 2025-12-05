import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/restaurant', label: 'Restaurant' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/utilities', label: 'Utilities' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center space-x-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all group-hover:border-gold-500/50 group-hover:shadow-glow-gold">
            <span className="font-display text-xl font-bold text-gold-400">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-wide text-white group-hover:text-gold-100 transition-colors">Soma Den</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-500">$SOMA Token</span>
          </div>
        </Link>
        
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-gray-400 transition-colors hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button Placeholder */}
        <button className="rounded-full p-2 text-white/70 transition hover:bg-white/10 md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
