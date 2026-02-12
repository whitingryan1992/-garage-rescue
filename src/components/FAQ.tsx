import { useState } from "react";

const faqs = [
  {
    question: "How much does a garage clearance cost?",
    answer:
      "Our prices start from just £99 for a small garage clearance. Every garage is different, so we offer free no-obligation quotes. Get in touch and we'll give you an exact price based on the size of the job.",
  },
  {
    question: "What do you do with the waste?",
    answer:
      "We're committed to responsible disposal. We recycle as much as possible, donate usable items to local charities, and only send what's left to licensed waste facilities. We're registered waste carriers.",
  },
  {
    question: "How long does a garage clearance take?",
    answer:
      "Most single garage clearances take between 1-3 hours depending on the amount of stuff. Larger or heavily packed garages may take a bit longer. We'll give you a time estimate with your quote.",
  },
  {
    question: "Do I need to be there during the clearance?",
    answer:
      "Ideally yes, at least at the start so you can let us know if there's anything you want to keep. But if you can't be there, we can arrange access and work from your instructions.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We cover the whole of County Durham including Durham City, Bishop Auckland, Chester-le-Street, Consett, Stanley, Newton Aycliffe, Spennymoor, and surrounding areas. If you're not sure, just ask!",
  },
  {
    question: "Can you take large or heavy items?",
    answer:
      "We can handle most items including furniture, appliances, gym equipment, and general clutter. For very large or bulky items (e.g. full-size wardrobes, heavy machinery), let us know when you request a quote and we'll advise on the best approach. Some oversized items may need to be arranged separately.",
  },
  {
    question: "When are you available?",
    answer:
      "We currently operate on weekends (Saturday and Sunday). Get in touch and we'll book you in for the next available weekend slot.",
  },
  {
    question: "Do you take chemicals, paint, or hazardous waste?",
    answer:
      "No - for safety and legal reasons, we cannot remove hazardous materials such as paint, varnish, petrol, oil, weed killer, pesticides, asbestos, or gas bottles. These require specialist disposal. Contact Durham County Council on 03000 26 0000 for advice on how to dispose of hazardous waste safely.",
  },
  {
    question: "Are there any extra charges?",
    answer:
      "Our quotes are all-inclusive with no hidden fees. However, large or heavy items such as fridges, washing machines, or sofas may carry a small surcharge from £20 depending on size and weight. We'll always let you know upfront before any work starts.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-lg font-semibold text-gray-900">
          {question}
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-green-700 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to know about our garage clearance service
          </p>
        </div>

        <div className="mt-12">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="#contact"
              className="font-semibold text-green-700 underline hover:text-green-600"
            >
              Get in touch
            </a>{" "}
            and we'll be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
