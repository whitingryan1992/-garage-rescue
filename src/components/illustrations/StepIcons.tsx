export function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="60" r="56" fill="#065f46" />
      <circle cx="60" cy="60" r="48" fill="#047857" />
      {/* Phone */}
      <rect x="42" y="30" width="36" height="60" rx="6" fill="#f0fdf4" />
      <rect x="46" y="38" width="28" height="38" rx="2" fill="#d1fae5" />
      <circle cx="60" cy="82" r="4" fill="#065f46" />
      {/* Signal waves */}
      <path d="M82 40 Q90 50 82 60" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M88 35 Q100 50 88 65" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M94 30 Q110 50 94 70" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  );
}

export function VanIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="60" r="56" fill="#065f46" />
      <circle cx="60" cy="60" r="48" fill="#047857" />
      {/* Van body */}
      <rect x="25" y="48" width="70" height="32" fill="#f0fdf4" rx="4" />
      {/* Van cab */}
      <rect x="20" y="55" width="28" height="25" fill="#d1fae5" rx="3" />
      {/* Windshield */}
      <rect x="23" y="58" width="20" height="14" fill="#bfdbfe" rx="2" />
      {/* Wheels */}
      <circle cx="38" cy="82" r="8" fill="#1f2937" />
      <circle cx="38" cy="82" r="4" fill="#4b5563" />
      <circle cx="80" cy="82" r="8" fill="#1f2937" />
      <circle cx="80" cy="82" r="4" fill="#4b5563" />
      {/* Logo on van */}
      <rect x="55" y="55" width="35" height="12" fill="#f59e0b" rx="2" />
      {/* Boxes in back */}
      <rect x="58" y="42" width="15" height="12" fill="#f59e0b" rx="2" />
      <rect x="75" y="44" width="12" height="10" fill="#fbbf24" rx="2" />
      {/* Motion lines */}
      <line x1="10" y1="62" x2="18" y2="62" stroke="#d1fae5" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="70" x2="16" y2="70" stroke="#d1fae5" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="78" x2="18" y2="78" stroke="#d1fae5" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="60" r="56" fill="#065f46" />
      <circle cx="60" cy="60" r="48" fill="#047857" />
      {/* Garage door - clean */}
      <rect x="30" y="38" width="60" height="48" fill="#f0fdf4" rx="3" />
      <line x1="30" y1="50" x2="90" y2="50" stroke="#d1fae5" strokeWidth="1" />
      <line x1="30" y1="62" x2="90" y2="62" stroke="#d1fae5" strokeWidth="1" />
      <line x1="30" y1="74" x2="90" y2="74" stroke="#d1fae5" strokeWidth="1" />
      {/* Roof */}
      <polygon points="22,38 60,20 98,38" fill="#f0fdf4" />
      {/* Sparkles */}
      <text x="16" y="35" fontSize="16" fill="#f59e0b">✦</text>
      <text x="92" y="30" fontSize="20" fill="#f59e0b">✦</text>
      <text x="48" y="105" fontSize="14" fill="#f59e0b">✦</text>
      <text x="85" y="100" fontSize="12" fill="#fbbf24">✦</text>
      <text x="22" y="90" fontSize="10" fill="#fbbf24">✦</text>
      {/* Checkmark */}
      <circle cx="60" cy="58" r="14" fill="#f59e0b" />
      <path d="M52 58 L57 63 L68 52" stroke="#065f46" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
