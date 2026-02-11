import { useState } from "react";

const PHONE = "07939 655 692";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-900 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="#" className="text-xl font-extrabold tracking-tight text-white">
          Garage<span className="text-amber-400"> Rescue</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <a href="#how-it-works" className="text-sm font-medium text-green-100 hover:text-white">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-green-100 hover:text-white">
            Pricing
          </a>
          <a href="#areas" className="text-sm font-medium text-green-100 hover:text-white">
            Areas
          </a>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-amber-400 hover:text-amber-300"
          >
            {PHONE}
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-amber-500 px-5 py-2 text-sm font-bold text-green-900 shadow-md transition hover:bg-amber-400"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-green-800 bg-green-900 px-4 pb-4 md:hidden">
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block py-2 text-green-100 hover:text-white">
            How It Works
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="block py-2 text-green-100 hover:text-white">
            Pricing
          </a>
          <a href="#areas" onClick={() => setMenuOpen(false)} className="block py-2 text-green-100 hover:text-white">
            Areas
          </a>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="block py-2 font-semibold text-amber-400">
            {PHONE}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-lg bg-amber-500 px-5 py-2 text-center font-bold text-green-900"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </nav>
  );
}
