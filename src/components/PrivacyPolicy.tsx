interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-gray-900">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Close"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <p><strong>Last updated:</strong> February 2026</p>

          <h3 className="text-base font-bold text-gray-900">Who we are</h3>
          <p>
            Garage Rescue is a garage clearance service operating in County Durham, UK.
            For any privacy-related queries, contact us at hello@garagerescue.co.uk or call 07939 655 692.
          </p>

          <h3 className="text-base font-bold text-gray-900">What data we collect</h3>
          <p>When you use our contact form, we collect:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address (if provided)</li>
            <li>Postcode</li>
            <li>Any details you include in your message</li>
          </ul>

          <h3 className="text-base font-bold text-gray-900">Why we collect it</h3>
          <p>
            We collect this information solely to respond to your enquiry and provide you with a quote
            for our garage clearance service. The legal basis for processing is <strong>legitimate
            interest</strong> (responding to your enquiry) and <strong>consent</strong> (you choosing
            to submit the form).
          </p>

          <h3 className="text-base font-bold text-gray-900">How we store it</h3>
          <p>
            Your form submissions are processed through Formspree, a third-party form service based in
            the United States. Formspree's privacy policy can be found at formspree.io/legal/privacy-policy.
            We receive your submissions via email and do not store them in any separate database.
          </p>

          <h3 className="text-base font-bold text-gray-900">How long we keep it</h3>
          <p>
            We retain your enquiry data for up to 12 months after your last contact with us,
            after which it is deleted. If you become a customer, we retain records as needed
            for legal and accounting purposes (up to 6 years).
          </p>

          <h3 className="text-base font-bold text-gray-900">Who we share it with</h3>
          <p>
            We do not sell or share your personal data with any third parties for marketing purposes.
            Your data may be processed by Formspree (form handling) as described above.
          </p>

          <h3 className="text-base font-bold text-gray-900">Your rights</h3>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at hello@garagerescue.co.uk.
          </p>

          <h3 className="text-base font-bold text-gray-900">Cookies</h3>
          <p>
            This website uses only essential cookies required for the site to function.
            We do not use analytics, advertising, or tracking cookies.
          </p>

          <h3 className="text-base font-bold text-gray-900">Complaints</h3>
          <p>
            If you are unhappy with how we handle your data, you have the right to lodge a complaint
            with the Information Commissioner's Office (ICO) at ico.org.uk.
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-green-800 py-3 font-bold text-white transition hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
