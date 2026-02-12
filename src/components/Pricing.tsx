const tiers = [
  {
    name: "Small Garage",
    from: 99,
    description: "Light clutter, a few items to clear. Ideal for a quick tidy-up.",
    features: ["Light items removed", "Swept clean", "Responsible disposal"],
  },
  {
    name: "Medium Garage",
    from: 199,
    description: "Moderate clutter with mixed items. The most popular option.",
    features: ["All items removed", "Heavy items included", "Full recycling", "Swept & cleaned"],
    popular: true,
  },
  {
    name: "Large / Full Clearance",
    from: 349,
    description: "Packed to the rafters? No problem. We'll clear the lot.",
    features: ["Complete clearance", "Multiple trips if needed", "Full recycling", "Deep clean finish", "Same-week available"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Every garage is different &mdash; get a free quote for an exact
            price. Here's a guide to get you started.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 p-8 transition hover:shadow-lg ${
                tier.popular
                  ? "border-amber-500 bg-amber-50 shadow-lg"
                  : "border-gray-200 bg-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-500 px-4 py-1 text-xs font-bold text-green-900">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
              <div className="mt-4">
                <span className="text-sm text-gray-500">from</span>
                <span className="ml-1 text-4xl font-extrabold text-green-800">
                  &pound;{tier.from}
                </span>
              </div>
              <p className="mt-4 text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <svg className="h-5 w-5 shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 block rounded-xl py-3 text-center font-bold transition ${
                  tier.popular
                    ? "bg-amber-500 text-green-900 hover:bg-amber-400"
                    : "bg-green-800 text-white hover:bg-green-700"
                }`}
              >
                Get a Free Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
