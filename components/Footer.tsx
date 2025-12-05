import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/restaurant', label: 'Restaurant' },
  { href: '/tokenomics', label: 'Tokenomics' },
  { href: '/utilities', label: 'Utilities' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-night pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-white">Soma Den</span>
            </Link>
            <p className="max-w-md text-gray-400 leading-relaxed">
              Soma Den brings a modern dining experience powered by SOMA ($SOMA),
              blending culinary creativity with Web3-driven value. The first token that truly feeds you.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              {['Twitter', 'Discord', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-xs font-bold uppercase tracking-wider text-gold-500 hover:text-white transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-bold text-white mb-4">Explore</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/restaurant" className="hover:text-gold-400 transition-colors">The Restaurant</Link></li>
                <li><Link href="/utilities" className="hover:text-gold-400 transition-colors">Token Utilities</Link></li>
                <li><Link href="/roadmap" className="hover:text-gold-400 transition-colors">Roadmap</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Project</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link href="/tokenomics" className="hover:text-gold-400 transition-colors">Tokenomics</Link></li>
                <li><Link href="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {currentYear} Soma Den. All rights reserved.</p>
          <p className="text-xs text-gray-500">
            SOMA ($SOMA) is a utility token, not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
