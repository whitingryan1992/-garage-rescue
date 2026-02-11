import { PhoneIcon, VanIcon, SparkleIcon } from "./illustrations/StepIcons";

const steps = [
  {
    number: "1",
    title: "Get in Touch",
    description:
      "Call us or fill in the form below for a free, no-obligation quote. We'll get back to you the same day.",
    icon: <PhoneIcon className="h-24 w-24" />,
  },
  {
    number: "2",
    title: "We Clear It",
    description:
      "We arrive at the agreed time, clear everything out, and ensure responsible disposal and recycling.",
    icon: <VanIcon className="h-24 w-24" />,
  },
  {
    number: "3",
    title: "Enjoy Your Space",
    description:
      "Your garage is left clean, clear, and ready to use again. It's that simple.",
    icon: <SparkleIcon className="h-24 w-24" />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Three simple steps to a clear garage
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-white p-8 text-center shadow-md transition hover:shadow-lg"
            >
              <div className="mx-auto">
                {step.icon}
              </div>
              <div className="mt-4 text-sm font-bold text-amber-500">
                Step {step.number}
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-3 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
