import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[55] border-t border-gray-200 bg-white p-4 shadow-2xl md:flex md:items-center md:justify-between md:px-8">
      <p className="text-sm text-gray-600">
        This website uses only essential cookies to make the site work. We don't use
        tracking or advertising cookies.{" "}
        <button
          className="font-semibold text-green-700 underline hover:text-green-600"
          onClick={() => {
            const event = new CustomEvent("open-privacy-policy");
            window.dispatchEvent(event);
          }}
        >
          Privacy Policy
        </button>
      </p>
      <button
        onClick={accept}
        className="mt-3 w-full rounded-lg bg-green-800 px-6 py-2 text-sm font-bold text-white transition hover:bg-green-700 md:mt-0 md:w-auto"
      >
        Got it
      </button>
    </div>
  );
}
