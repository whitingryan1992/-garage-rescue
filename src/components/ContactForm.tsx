import { useState } from "react";
import type { FormEvent } from "react";

const FORMSPREE_ID = "mbdadpan";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="bg-green-900 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Get Your Free Quote
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-200">
            Fill in the form below and we'll get back to you the same day with a
            no-obligation quote.
          </p>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-lg">
            <svg className="mx-auto h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Thanks! We'll be in touch.
            </h3>
            <p className="mt-2 text-gray-600">
              We've received your enquiry and will get back to you within 24
              hours.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl bg-white p-8 shadow-lg"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-gray-700">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                  placeholder="07XXX XXX XXX"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="postcode" className="mb-1 block text-sm font-semibold text-gray-700">
                  Postcode *
                </label>
                <input
                  type="text"
                  id="postcode"
                  name="postcode"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                  placeholder="DH1 1AA"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-1 block text-sm font-semibold text-gray-700">
                Tell us about your garage
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                placeholder="Roughly how full is it? Any heavy or bulky items? Anything else we should know?"
              />
            </div>

            {error && (
              <p className="mt-4 text-sm text-red-600">
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-amber-500 py-4 text-lg font-bold text-green-900 shadow-md transition hover:bg-amber-400 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send My Free Quote Request"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
