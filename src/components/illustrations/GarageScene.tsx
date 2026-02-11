export default function GarageScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Sky / background */}
      <rect width="600" height="400" rx="16" fill="#f0fdf4" />

      {/* Ground */}
      <rect y="320" width="600" height="80" fill="#065f46" rx="0" />
      <rect y="320" width="600" height="8" fill="#047857" />

      {/* Garage structure */}
      <rect x="80" y="120" width="440" height="200" fill="#e5e7eb" />
      <rect x="80" y="120" width="440" height="200" fill="#d1d5db" stroke="#9ca3af" strokeWidth="2" />

      {/* Garage roof */}
      <polygon points="60,120 300,30 540,120" fill="#374151" />
      <polygon points="70,120 300,40 530,120" fill="#4b5563" />

      {/* Garage door opening */}
      <rect x="120" y="160" width="360" height="160" fill="#1f2937" rx="4" />

      {/* Shelves on left */}
      <rect x="130" y="170" width="80" height="6" fill="#6b7280" />
      <rect x="130" y="200" width="80" height="6" fill="#6b7280" />
      <rect x="130" y="230" width="80" height="6" fill="#6b7280" />

      {/* Boxes on shelves */}
      <rect x="135" y="150" width="25" height="20" fill="#f59e0b" rx="2" />
      <rect x="165" y="155" width="20" height="15" fill="#d97706" rx="2" />
      <rect x="135" y="180" width="30" height="20" fill="#fbbf24" rx="2" />
      <rect x="170" y="185" width="18" height="15" fill="#f59e0b" rx="2" />
      <rect x="140" y="212" width="22" height="18" fill="#d97706" rx="2" />

      {/* Bicycle hanging on wall */}
      <circle cx="280" cy="185" r="18" stroke="#9ca3af" strokeWidth="3" fill="none" />
      <circle cx="320" cy="185" r="18" stroke="#9ca3af" strokeWidth="3" fill="none" />
      <line x1="280" y1="185" x2="300" y2="172" stroke="#9ca3af" strokeWidth="2" />
      <line x1="300" y1="172" x2="320" y2="185" stroke="#9ca3af" strokeWidth="2" />
      <line x1="300" y1="172" x2="305" y2="165" stroke="#9ca3af" strokeWidth="2" />

      {/* Large items in garage - wardrobe/cabinet */}
      <rect x="380" y="200" width="50" height="120" fill="#78716c" rx="3" />
      <rect x="383" y="203" width="21" height="55" fill="#57534e" rx="1" />
      <rect x="406" y="203" width="21" height="55" fill="#57534e" rx="1" />

      {/* Bin bags */}
      <ellipse cx="340" cy="300" rx="25" ry="20" fill="#1f2937" />
      <path d="M320 290 Q340 275 360 290" fill="#374151" />
      <ellipse cx="365" cy="295" rx="20" ry="18" fill="#111827" />
      <path d="M348 280 Q365 268 382 280" fill="#1f2937" />

      {/* Random clutter - paint tins */}
      <rect x="440" y="290" width="20" height="28" fill="#059669" rx="2" />
      <rect x="438" y="288" width="24" height="6" fill="#065f46" rx="1" />
      <rect x="460" y="295" width="18" height="24" fill="#f59e0b" rx="2" />
      <rect x="458" y="293" width="22" height="6" fill="#d97706" rx="1" />

      {/* Person carrying box (worker) */}
      {/* Body */}
      <circle cx="230" cy="260" r="14" fill="#fcd34d" /> {/* Head */}
      <rect x="218" y="274" width="24" height="35" fill="#065f46" rx="4" /> {/* Torso - green branded */}
      {/* Arms carrying box */}
      <rect x="200" y="278" width="60" height="8" fill="#065f46" rx="3" />
      {/* Box being carried */}
      <rect x="195" y="270" width="35" height="25" fill="#f59e0b" rx="3" />
      <line x1="200" y1="270" x2="200" y2="295" stroke="#d97706" strokeWidth="1" />
      <line x1="220" y1="270" x2="220" y2="295" stroke="#d97706" strokeWidth="1" />
      {/* Legs */}
      <rect x="220" y="309" width="10" height="20" fill="#374151" rx="2" />
      <rect x="232" y="309" width="10" height="22" fill="#374151" rx="2" />
      {/* Cap */}
      <rect x="218" y="248" width="28" height="6" fill="#065f46" rx="2" />

      {/* Person 2 - sweeping */}
      <circle cx="160" cy="268" r="12" fill="#fcd34d" /> {/* Head */}
      <rect x="150" y="280" width="20" height="30" fill="#065f46" rx="3" /> {/* Torso */}
      {/* Broom */}
      <line x1="175" y1="282" x2="185" y2="325" stroke="#a16207" strokeWidth="3" />
      <rect x="180" y="322" width="16" height="6" fill="#78716c" rx="1" />
      {/* Legs */}
      <rect x="152" y="310" width="8" height="18" fill="#374151" rx="2" />
      <rect x="162" y="310" width="8" height="16" fill="#374151" rx="2" />

      {/* Van on right side */}
      <rect x="460" y="260" width="120" height="60" fill="#065f46" rx="6" />
      <rect x="455" y="275" width="50" height="45" fill="#047857" rx="4" />
      {/* Van windshield */}
      <rect x="460" y="280" width="40" height="25" fill="#bfdbfe" rx="3" />
      {/* Van wheels */}
      <circle cx="480" cy="322" r="12" fill="#374151" />
      <circle cx="480" cy="322" r="6" fill="#6b7280" />
      <circle cx="555" cy="322" r="12" fill="#374151" />
      <circle cx="555" cy="322" r="6" fill="#6b7280" />
      {/* Van logo text area */}
      <rect x="500" y="275" width="70" height="20" fill="#f59e0b" rx="3" />
      <text x="535" y="290" textAnchor="middle" fill="#065f46" fontSize="9" fontWeight="bold">
        RESCUE
      </text>

      {/* Arrow showing items going into van */}
      <path d="M420 290 Q440 280 455 285" stroke="#f59e0b" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
        </marker>
      </defs>

      {/* Sparkle/clean effects */}
      <text x="140" y="340" fontSize="16" fill="#fbbf24">✦</text>
      <text x="200" y="335" fontSize="12" fill="#fbbf24">✦</text>
      <text x="170" y="350" fontSize="10" fill="#fbbf24">✦</text>
    </svg>
  );
}
