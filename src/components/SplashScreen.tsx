"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Easing curves ──────────────────────────────────────── */
const EP: [number, number, number, number] = [0.22, 1, 0.36, 1];   // precise snap
const ES: [number, number, number, number] = [0.4, 0, 0.2, 1];     // structural settle

/* ─── SVG geometry constants ─────────────────────────────── */
// Outer frame: 340×340 centred in 400×400 viewBox
const OX = 30, OY = 30, OW = 340, OH = 340, OR = 8;
// Inner frame: 104×104 centred
const IX = 148, IY = 148, IW = 104, IH = 104, IR = 4;
// Centre + diamond radius
const CX = 200, CY = 200, DR = 26;

type Pt = readonly [number, number];
const OC: Pt[] = [[OX, OY], [OX + OW, OY], [OX, OY + OH], [OX + OW, OY + OH]];
const IC: Pt[] = [[IX, IY], [IX + IW, IY], [IX, IY + IH], [IX + IW, IY + IH]];
const DIAMOND = `M ${CX} ${CY - DR} L ${CX + DR} ${CY} L ${CX} ${CY + DR} L ${CX - DR} ${CY} Z`;
const LETTERS = ["J", "N", "A", "N", "I", "K"] as const;

/* ─── Phase schedule (ms from mount) ────────────────────── */
// 0: component visible
// 1: outer frame draws            (200ms)
// 2: struts + inner frame         (1100ms)
// 3: 3D flattens + diamond        (1900ms)
// 4: wordmark                     (2500ms)
// 5: exit dissolve                (4100ms)
const SCHEDULE = [200, 1100, 1900, 2500, 4100] as const;

export default function SplashScreen() {
  const [phase, setPhase] = useState(-1);

  useEffect(() => {
    // Skip if reduced-motion is preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Show once per session
    if (sessionStorage.getItem("jnanik-intro")) return;
    sessionStorage.setItem("jnanik-intro", "1");

    setPhase(0);
    const handles = SCHEDULE.map((ms, i) =>
      window.setTimeout(() => setPhase(i + 1), ms)
    );
    // Unmount after exit animation (0.75s)
    const cleanup = window.setTimeout(() => setPhase(6), SCHEDULE[4] + 800);
    return () => [...handles, cleanup].forEach(window.clearTimeout);
  }, []);

  // Not yet shown (SSR or already seen) or fully gone
  if (phase < 0 || phase >= 6) return null;

  const p1 = phase >= 1; // outer frame + corners
  const p2 = phase >= 2; // struts + inner frame + inner corners
  const p3 = phase >= 3; // 3D flatten + diamond
  const p4 = phase >= 4; // wordmark
  const exiting = phase >= 5;

  return (
    <AnimatePresence initial={false} onExitComplete={() => setPhase(6)}>
      {!exiting && (
        <motion.div
          key="jnanik-splash"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: EP }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#FAFAFA",
          }}
        >
          {/* ─── Lattice ─────────────────────────────────── */}
          <div style={{ perspective: "1000px" }}>
            <motion.div
              animate={{
                rotateX: p3 ? 0 : 18,
                rotateY: p3 ? 0 : -12,
              }}
              transition={{ duration: 1.0, ease: EP }}
              style={{ display: "flex" }}
            >
              <svg viewBox="0 0 400 400" width={280} height={280} fill="none">

                {/* Outer frame — always in DOM, animates in */}
                <motion.rect
                  x={OX} y={OY} width={OW} height={OH} rx={OR}
                  stroke="#1A56DB" strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={p1 ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.85, ease: ES }}
                />

                {/* Outer corner nodes */}
                {p1 && OC.map(([cx, cy], i) => (
                  <motion.circle
                    key={`oc${i}`}
                    cx={cx} cy={cy}
                    fill="#1A56DB"
                    initial={{ r: 0 }}
                    animate={{ r: 4 }}
                    transition={{ duration: 0.25, ease: EP, delay: 0.82 + i * 0.06 }}
                  />
                ))}

                {/* Diagonal struts — outer corner → inner corner */}
                {p2 && OC.map(([ox, oy], i) => (
                  <motion.line
                    key={`st${i}`}
                    x1={ox} y1={oy}
                    x2={IC[i][0]} y2={IC[i][1]}
                    stroke="#1A56DB" strokeWidth="0.7" strokeOpacity={0.5}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.38, ease: EP, delay: i * 0.07 }}
                  />
                ))}

                {/* Inner frame */}
                {p2 && (
                  <motion.rect
                    x={IX} y={IY} width={IW} height={IH} rx={IR}
                    stroke="#1A56DB" strokeWidth="1.0"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.55, ease: ES, delay: 0.22 }}
                  />
                )}

                {/* Inner corner nodes */}
                {p2 && IC.map(([cx, cy], i) => (
                  <motion.circle
                    key={`ic${i}`}
                    cx={cx} cy={cy}
                    fill="#1A56DB" fillOpacity={0.6}
                    initial={{ r: 0 }}
                    animate={{ r: 3 }}
                    transition={{ duration: 0.2, ease: EP, delay: 0.78 + i * 0.05 }}
                  />
                ))}

                {/* Diamond core */}
                {p3 && (
                  <>
                    <motion.path
                      d={DIAMOND}
                      stroke="#1A56DB" strokeWidth="1.5"
                      fill="rgba(26,86,219,0.08)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.45, ease: EP }}
                    />
                    <motion.circle
                      cx={CX} cy={CY}
                      fill="#1A56DB"
                      initial={{ r: 0 }}
                      animate={{ r: 4.5 }}
                      transition={{ duration: 0.3, ease: EP, delay: 0.38 }}
                    />
                  </>
                )}
              </svg>
            </motion.div>
          </div>

          {/* ─── Wordmark ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={p4 ? { opacity: 1 } : {}}
            transition={{ duration: 0.1 }}
            style={{
              marginTop: 28,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
            }}
          >
            {/* JNANIK AI */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  color: "#0C1A2E",
                  letterSpacing: "-0.02em",
                }}
              >
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                    animate={p4 ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                    transition={{ duration: 0.38, ease: EP, delay: i * 0.055 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <motion.span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: "2.25rem",
                  color: "#1A56DB",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={p4 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.38, ease: EP, delay: 0.36 }}
              >
                AI
              </motion.span>
            </div>

            {/* Separator line — sweeps left → right */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={p4 ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.45, ease: ES, delay: 0.5 }}
              style={{
                height: 1,
                width: 128,
                background: "rgba(26,86,219,0.22)",
                transformOrigin: "left",
              }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={p4 ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.68 }}
              style={{
                margin: 0,
                fontSize: "0.625rem",
                letterSpacing: "0.26em",
                color: "#8DAABF",
                fontWeight: 500,
                textTransform: "uppercase",
                fontFamily: "var(--font-inter)",
              }}
            >
              Intelligence · Production
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
