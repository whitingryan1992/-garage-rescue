const testimonials = [
  {
    name: "Sarah T.",
    location: "Durham City",
    text: "Brilliant service! They cleared years of junk from our garage in just a few hours. Couldn't believe how much space we had. Would definitely recommend to anyone in Durham.",
    stars: 5,
  },
  {
    name: "Mark D.",
    location: "Bishop Auckland",
    text: "Really impressed. Turned up on time, worked fast, and took everything away. The garage looks brand new. Fair price too, no hidden extras.",
    stars: 5,
  },
  {
    name: "Janet P.",
    location: "Chester-le-Street",
    text: "We'd been putting off clearing the garage for years. Garage Rescue made it so easy. One phone call, quick quote, done within the week. Fantastic.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:shadow-lg"
            >
              <Stars count={t.stars} />
              <p className="mt-4 text-gray-700 italic">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-800 text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
