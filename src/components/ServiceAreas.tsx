const areas = [
  "Durham City",
  "Bishop Auckland",
  "Chester-le-Street",
  "Consett",
  "Stanley",
  "Newton Aycliffe",
  "Spennymoor",
  "Crook",
  "Seaham",
  "Peterlee",
  "Ferryhill",
  "Shildon",
  "Barnard Castle",
  "Willington",
  "Sacriston",
  "Brandon",
  "Tow Law",
  "Sedgefield",
  "Trimdon",
  "Stanhope",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Areas We Cover
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Proudly serving the whole of County Durham and surrounding areas
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-800 transition hover:bg-green-100"
            >
              {area}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-500">
          Don't see your area?{" "}
          <a href="#contact" className="font-semibold text-green-700 underline hover:text-green-600">
            Get in touch
          </a>{" "}
          &mdash; we likely cover it.
        </p>
      </div>
    </section>
  );
}
