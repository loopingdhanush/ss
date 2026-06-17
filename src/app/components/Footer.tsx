import { FadeIn } from "./FadeIn"

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden py-20 md:py-28 mx-3 my-3 sm:mx-4 sm:my-2 sm:mb-4">
      <FadeIn>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-red-500 mb-4">Solaris</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Leading renewable energy solutions for a sustainable future. Transform your energy today.
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-base mb-4 text-white">Products</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">For Homes</a></li>
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Commercial Solar</a></li>
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Solar Parks</a></li>
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Products</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-base mb-4 text-white">Services</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Installation</a></li>
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Maintenance</a></li>
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Support</a></li>
                <li><a href="#" className="text-slate-400 hover:text-red-500 transition-colors">Warranty</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-base mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="tel:" className="text-slate-400 hover:text-red-500 transition-colors">+1 (800) SOLAR</a></li>
                <li><a href="mailto:" className="text-slate-400 hover:text-red-500 transition-colors">info@Solaris.com</a></li>
                <li className="text-slate-400">Available 24/7</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
              <p>&copy; 2025 Solaris. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-red-500 transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
