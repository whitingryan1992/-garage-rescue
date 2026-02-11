export default function BeforeAfter({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${className}`}>
      {/* BEFORE */}
      <div className="overflow-hidden rounded-2xl border-2 border-red-200 bg-white shadow-md">
        <div className="bg-red-500 px-4 py-2 text-center text-sm font-bold text-white">
          BEFORE
        </div>
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <rect width="400" height="250" fill="#f3f4f6" />

          {/* Garage interior - messy */}
          <rect x="20" y="20" width="360" height="210" fill="#1f2937" rx="4" />

          {/* Floor */}
          <rect x="20" y="190" width="360" height="40" fill="#374151" />

          {/* Piled boxes everywhere */}
          <rect x="30" y="100" width="50" height="40" fill="#dc2626" rx="2" opacity="0.8" />
          <rect x="35" y="65" width="40" height="38" fill="#b91c1c" rx="2" opacity="0.8" />
          <rect x="55" y="80" width="45" height="35" fill="#ef4444" rx="2" opacity="0.7" />
          <rect x="90" y="110" width="55" height="45" fill="#dc2626" rx="2" opacity="0.8" />
          <rect x="85" y="75" width="35" height="38" fill="#991b1b" rx="2" opacity="0.7" />

          {/* Bin bags */}
          <ellipse cx="180" cy="150" rx="35" ry="28" fill="#111827" opacity="0.9" />
          <path d="M150 135 Q180 115 210 135" fill="#1f2937" />
          <ellipse cx="210" cy="140" rx="28" ry="25" fill="#0f172a" opacity="0.85" />
          <ellipse cx="160" cy="165" rx="22" ry="18" fill="#111827" opacity="0.8" />

          {/* Old furniture */}
          <rect x="250" y="80" width="45" height="90" fill="#78716c" rx="2" />
          <rect x="300" y="100" width="60" height="70" fill="#57534e" rx="2" />
          <rect x="305" y="105" width="50" height="30" fill="#44403c" rx="1" />

          {/* Random items on floor */}
          <circle cx="150" cy="185" r="15" stroke="#6b7280" strokeWidth="3" fill="none" /> {/* tire */}
          <rect x="220" y="170" width="30" height="20" fill="#a16207" rx="1" /> {/* wood */}
          <rect x="340" y="175" width="25" height="18" fill="#6b7280" rx="1" />

          {/* Cobwebs */}
          <path d="M20 20 Q60 25 45 60" stroke="#9ca3af" strokeWidth="0.5" opacity="0.5" />
          <path d="M20 20 Q30 50 50 45" stroke="#9ca3af" strokeWidth="0.5" opacity="0.5" />

          {/* Stress marks */}
          <text x="350" y="50" fontSize="20" fill="#ef4444" opacity="0.6">✗</text>
          <text x="330" y="70" fontSize="14" fill="#ef4444" opacity="0.5">✗</text>
        </svg>
      </div>

      {/* AFTER */}
      <div className="overflow-hidden rounded-2xl border-2 border-green-200 bg-white shadow-md">
        <div className="bg-green-600 px-4 py-2 text-center text-sm font-bold text-white">
          AFTER
        </div>
        <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <rect width="400" height="250" fill="#f0fdf4" />

          {/* Garage interior - clean */}
          <rect x="20" y="20" width="360" height="210" fill="#f8fafc" rx="4" />

          {/* Clean floor */}
          <rect x="20" y="190" width="360" height="40" fill="#e2e8f0" />
          {/* Floor shine lines */}
          <line x1="50" y1="210" x2="120" y2="210" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="180" y1="215" x2="280" y2="215" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="300" y1="208" x2="350" y2="208" stroke="#cbd5e1" strokeWidth="1" />

          {/* Clean wall shelves - neatly organized */}
          <rect x="40" y="50" width="140" height="5" fill="#94a3b8" />
          <rect x="40" y="100" width="140" height="5" fill="#94a3b8" />
          {/* Shelf brackets */}
          <rect x="50" y="50" width="4" height="15" fill="#94a3b8" />
          <rect x="166" y="50" width="4" height="15" fill="#94a3b8" />
          <rect x="50" y="100" width="4" height="15" fill="#94a3b8" />
          <rect x="166" y="100" width="4" height="15" fill="#94a3b8" />

          {/* Neat boxes on shelf */}
          <rect x="55" y="30" width="35" height="20" fill="#059669" rx="2" />
          <rect x="95" y="35" width="30" height="15" fill="#10b981" rx="2" />
          <rect x="55" y="80" width="30" height="20" fill="#059669" rx="2" />

          {/* Clean open space in the middle - car could fit! */}
          {/* Car outline to show space */}
          <rect x="120" y="140" width="180" height="50" fill="#065f46" rx="8" opacity="0.15" />
          <rect x="150" y="130" width="100" height="35" fill="#065f46" rx="6" opacity="0.1" />
          <text x="210" y="172" textAnchor="middle" fill="#065f46" fontSize="11" fontWeight="bold" opacity="0.4">
            Room for your car!
          </text>

          {/* Tool rack on right wall - organized */}
          <rect x="320" y="50" width="40" height="130" fill="#f1f5f9" rx="2" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="325" y1="70" x2="355" y2="70" stroke="#94a3b8" strokeWidth="2" />
          <line x1="325" y1="90" x2="355" y2="90" stroke="#94a3b8" strokeWidth="2" />
          <line x1="325" y1="110" x2="355" y2="110" stroke="#94a3b8" strokeWidth="2" />
          <line x1="325" y1="130" x2="355" y2="130" stroke="#94a3b8" strokeWidth="2" />
          <line x1="325" y1="150" x2="355" y2="150" stroke="#94a3b8" strokeWidth="2" />

          {/* Sparkle effects */}
          <text x="100" y="165" fontSize="18" fill="#f59e0b">✦</text>
          <text x="280" y="130" fontSize="14" fill="#f59e0b">✦</text>
          <text x="200" y="60" fontSize="12" fill="#f59e0b">✦</text>
          <text x="300" y="200" fontSize="16" fill="#f59e0b">✦</text>

          {/* Checkmark */}
          <circle cx="360" cy="35" r="14" fill="#059669" />
          <path d="M352 35 L358 41 L370 29" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
