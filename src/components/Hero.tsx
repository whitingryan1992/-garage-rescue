import GarageScene from "./illustrations/GarageScene";

const PHONE = "07939 655 692";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-green-600/20" />
      <div className="absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-amber-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Text side */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Garage Full of Junk?
              <br />
              <span className="text-amber-400">We'll Rescue It.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-green-100 md:text-xl">
              Family-run garage clearance across County Durham. Fast, affordable,
              hassle-free. We clear it, dispose responsibly, and leave your garage
              spotless.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#contact"
                className="w-full rounded-xl bg-amber-500 px-8 py-4 text-center text-lg font-bold text-green-900 shadow-lg transition hover:bg-amber-400 hover:shadow-xl sm:w-auto"
              >
                Get a Free Quote
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="w-full rounded-xl border-2 border-white/30 px-8 py-4 text-center text-lg font-bold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                Call Now: {PHONE}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-green-200 md:justify-start">
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Fully Insured
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Quotes
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Same-Week Service
              </span>
            </div>
          </div>

          {/* Illustration side */}
          <div className="hidden md:block">
            <GarageScene className="w-full drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
