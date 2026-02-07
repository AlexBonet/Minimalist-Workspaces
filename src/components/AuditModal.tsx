import React, { useState, useEffect, useRef } from "react";
import { ui } from "../i18n/ui";
import {
  type Role,
  type Problem,
  type Budget,
  type FormData,
  ANALYSIS_MESSAGES,
  PRESCRIPTIONS,
} from "./AuditModal.data";

interface AuditModalProps {
  lang?: "es" | "en";
}

type Step = "idle" | "form" | "analyzing" | "result";

export default function AuditModal({ lang = "en" }: AuditModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [formData, setFormData] = useState<FormData>({
    role: "developer",
    problem: "clutter",
    budget: "minimalist",
  });
  const [analysisIndex, setAnalysisIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const resultRef = useRef<string>("");

  const t = ui[lang];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStep("form");
    } else {
      document.body.style.overflow = "unset";
      setStep("idle");
      setDisplayedText("");
      setAnalysisIndex(0);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Analysis phase: cycle through messages
  useEffect(() => {
    if (step !== "analyzing") return;

    const interval = setInterval(() => {
      setAnalysisIndex((prev) => (prev + 1) % ANALYSIS_MESSAGES.length);
    }, 800);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      generateResult();
      setStep("result");
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [step, lang]);

  // Typewriter effect for result
  useEffect(() => {
    if (step !== "result" || !resultRef.current) return;

    let charIndex = 0;
    const text = resultRef.current;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (charIndex < text.length) {
        const char = text[charIndex];
        setDisplayedText((prev) => prev + char);
        charIndex++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [step]);

  const generateResult = () => {
    const prescription = PRESCRIPTIONS[lang][formData.role][formData.problem];
    const diagLabel = lang === "en" ? "DIAGNOSIS" : "DIAGNÓSTICO";
    const presLabel = lang === "en" ? "PRESCRIPTION" : "PRESCRIPCIÓN";
    const recLabel = lang === "en" ? "RECOMMEND" : "RECOMENDACIÓN";

    resultRef.current = `${diagLabel}: ${prescription.diagnosis}\n\n${presLabel}: ${prescription.prescription}\n\n${recLabel}: ${prescription.recommend}`;
  };

  const handleRunAudit = () => {
    setStep("analyzing");
    setAnalysisIndex(0);
  };

  const handleRestart = () => {
    setStep("form");
    setDisplayedText("");
    setAnalysisIndex(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const PillButton = ({
    selected,
    onClick,
    children,
  }: {
    selected: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-xs font-bold uppercase tracking-widest border-2 border-black transition-colors ${
        selected
          ? "bg-black text-white"
          : "bg-white text-black hover:bg-gray-100"
      }`}
    >
      {children}
    </button>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs font-bold uppercase tracking-widest bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors px-6 py-2"
      >
        {t["audit.trigger"]}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/90 backdrop-blur-sm"
            onClick={step !== "analyzing" ? handleClose : undefined}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-[600px] bg-white border-2 border-black p-8 md:p-12 shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.9] whitespace-pre-line uppercase">
                {t["audit.title"]}
              </h2>
              {step !== "analyzing" && (
                <button
                  onClick={handleClose}
                  className="text-xl font-bold hover:opacity-50 transition-opacity"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Form Step */}
            {step === "form" && (
              <div className="space-y-8">
                {/* Role */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 opacity-50">
                    {t["audit.role"]}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(
                      ["developer", "designer", "writer", "trader"] as Role[]
                    ).map((role) => (
                      <PillButton
                        key={role}
                        selected={formData.role === role}
                        onClick={() => setFormData({ ...formData, role })}
                      >
                        {t[`audit.roles.${role}`]}
                      </PillButton>
                    ))}
                  </div>
                </div>

                {/* Problem */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 opacity-50">
                    {t["audit.problem"]}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        "clutter",
                        "lighting",
                        "ergonomics",
                        "distraction",
                      ] as Problem[]
                    ).map((problem) => (
                      <PillButton
                        key={problem}
                        selected={formData.problem === problem}
                        onClick={() => setFormData({ ...formData, problem })}
                      >
                        {t[`audit.problems.${problem}`]}
                      </PillButton>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-3 opacity-50">
                    {t["audit.budget"]}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(["minimalist", "midrange", "premium"] as Budget[]).map(
                      (budget) => (
                        <PillButton
                          key={budget}
                          selected={formData.budget === budget}
                          onClick={() => setFormData({ ...formData, budget })}
                        >
                          {t[`audit.budgets.${budget}`]}
                        </PillButton>
                      ),
                    )}
                  </div>
                </div>

                {/* Run Audit Button */}
                <button
                  onClick={handleRunAudit}
                  className="w-full bg-black text-white font-bold py-4 text-sm uppercase tracking-widest border-2 border-black hover:bg-gray-800 transition-colors"
                >
                  {t["audit.runAudit"]}
                </button>
              </div>
            )}

            {/* Analyzing Step */}
            {step === "analyzing" && (
              <div className="py-12">
                <div className="font-mono text-lg border-l-4 border-black pl-4">
                  <span className="opacity-50">$</span>{" "}
                  {t[ANALYSIS_MESSAGES[analysisIndex]]}
                  <span className="animate-pulse">▌</span>
                </div>
              </div>
            )}

            {/* Result Step */}
            {step === "result" && (
              <div className="space-y-8">
                <div className="border-l-4 border-black pl-4">
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">
                    {t["audit.resultTitle"]}
                  </h3>
                  <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
                    {displayedText}
                    <span className="animate-pulse">▌</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleRestart}
                    className="flex-1 bg-white text-black font-bold py-3 text-xs uppercase tracking-widest border-2 border-black hover:bg-gray-100 transition-colors"
                  >
                    {t["audit.restart"]}
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 bg-black text-white font-bold py-3 text-xs uppercase tracking-widest border-2 border-black hover:bg-gray-800 transition-colors"
                  >
                    {t["audit.close"]}
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-between items-end border-t border-black pt-4 mt-8">
              <span className="text-xs font-mono font-bold tracking-widest">
                {t["audit.footer.brand"]}
              </span>
              <span className="text-xs font-mono font-bold tracking-widest">
                {t["audit.footer.version"]}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
