const PHONE = "07939 655 692";
const EMAIL = "hello@garagerescue.co.uk";

interface Props {
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenPrivacy }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-xl font-extrabold text-white">
              Garage<span className="text-amber-400"> Rescue</span>
            </span>
            <p className="mt-3 text-sm text-gray-400">
              Family-run garage clearance across County Durham. Father
              and son team. Fast, affordable, hassle-free.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-white">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li>County Durham, UK</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <a href="#how-it-works" className="hover:text-white">How It Works</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white">Areas We Cover</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-white">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {year} Garage Rescue. All rights reserved. Serving County Durham.</p>
          <p className="mt-1">
            Garage Rescue is a trading name. Waste disposed of via licensed facilities.
          </p>
        </div>
      </div>
    </footer>
  );
}
