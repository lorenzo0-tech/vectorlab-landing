"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  AmbientBackdrop,
  CaseStudies,
  EntryGate,
  FAQ,
  FinalCTA,
  Footer,
  Hero,
  Navbar,
  Packages,
  Problem,
  Process,
  Solution,
  TrustBar,
  VetrinaRistorante,
} from "@/components";

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <div className="min-h-screen">
        <main className="main-ambient overflow-hidden">
          <AmbientBackdrop />
          <EntryGate onEnterAction={() => setEntered(true)} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="main-ambient overflow-hidden">
        <AmbientBackdrop />
        <AnimatePresence>
          <motion.div
            key="site"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Navbar />
            <Hero />
            <div className="section-tone pb-10">
              <TrustBar />
            </div>
            <div className="divider-tech section-tone">
              <CaseStudies />
            </div>
            <div className="divider-tech section-tone">
              <Problem />
            </div>
            <div className="divider-tech section-tone">
              <Solution />
            </div>
            <div className="divider-tech section-tone">
              <VetrinaRistorante />
            </div>
            <div className="divider-tech section-tone">
              <Packages />
            </div>
            <div className="divider-tech section-tone">
              <Process />
            </div>
            <div className="divider-tech section-tone">
              <FAQ />
            </div>
            <div className="divider-tech section-tone">
              <FinalCTA />
            </div>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
