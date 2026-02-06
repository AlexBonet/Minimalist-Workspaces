import React, { useState, useEffect } from "react";

import { ui } from "../i18n/ui";

interface NewsletterModalProps {
  lang?: "es" | "en";
}

export default function NewsletterModal({ lang = "en" }: NewsletterModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [email, setEmail] = useState("");

  const t = ui[lang];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulation
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        setEmail("");
      }, 2000);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs font-bold uppercase tracking-widest bg-white border-2 border-black hover:bg-black hover:text-white transition-colors px-6 py-2"
      >
        {t["newsletter.trigger"]}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => !status.includes("loading") && setIsOpen(false)}
          />

          {/* Modal Container: Strictly square, white bg, thick black border */}
          <div
            data-testid="newsletter-modal"
            className="relative z-10 w-full max-w-[500px] aspect-square bg-white border-2 border-black p-8 md:p-12 flex flex-col justify-between shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Header */}
            <div className="flex justify-between items-start">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[0.85] whitespace-pre-line">
                {t["newsletter.header"]}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold hover:opacity-50 transition-opacity"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="grow flex flex-col justify-center py-8">
              {status === "success" ? (
                <div className="text-3xl md:text-4xl font-bold tracking-tight animate-pulse text-center">
                  {t["newsletter.success"]}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-8">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder={t["newsletter.placeholder"]}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="w-full bg-transparent border-b-2 border-black py-2 text-xl md:text-2xl font-mono focus:outline-none placeholder:text-gray-500 rounded-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-black text-white font-bold py-4 hover:bg-zinc-800 transition-all uppercase tracking-widest text-lg md:text-xl border-2 border-black disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading"
                      ? t["newsletter.processing"]
                      : t["newsletter.subscribe"]}
                  </button>
                </form>
              )}
            </div>

            {/* Footer / Decorative */}
            <div className="flex justify-between items-end border-t border-black pt-4">
              <span className="text-xs font-mono font-bold tracking-widest">
                {t["newsletter.footer.title"]}
              </span>
              <span className="text-xs font-mono font-bold tracking-widest">
                {t["newsletter.footer.year"]}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
