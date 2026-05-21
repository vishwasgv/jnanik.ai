/**
 * Central motion design system for Jnanik AI website.
 * Philosophy: purposeful, restrained, cinematic — every animation guides
 * attention or confirms interaction, never decorative for its own sake.
 */

// ── Easing curves ─────────────────────────────────────────────────────────────
// Named after their feel, not their math.
export const ease = {
  smooth:    [0.25, 0.1, 0.25, 1] as const,    // standard — crisp, clean
  cinematic: [0.76, 0, 0.24, 1]   as const,    // fast-in slow-out — premium reveals
  out:       [0.0, 0.0, 0.2, 1]   as const,    // material decelerate — elements arriving
  in:        [0.4, 0.0, 1, 1]     as const,    // elements departing
} as const;

// ── Spring config ─────────────────────────────────────────────────────────────
export const spring = {
  snappy:  { type: "spring", stiffness: 380, damping: 32 } as const,
  gentle:  { type: "spring", stiffness: 220, damping: 28 } as const,
  layout:  { type: "spring", stiffness: 340, damping: 30 } as const,
} as const;

// ── Duration scale (seconds) ──────────────────────────────────────────────────
export const dur = {
  fast:     0.20,
  standard: 0.40,
  smooth:   0.56,
  cinematic:0.75,
} as const;

// ── Viewport trigger config ───────────────────────────────────────────────────
export const vp     = { once: true, amount: 0.12 } as const;
export const vpEager = { once: true, amount: 0.05 } as const; // tall sections

// ── Shared animation variants ─────────────────────────────────────────────────

/** Standard content reveal: fade up. No blur — perf friendly for cards/lists. */
export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: dur.smooth, ease: ease.smooth } },
};

/** Hero headings only: blur + fade up. Expensive — use sparingly. */
export const fadeUpBlur = {
  hidden: { opacity: 0, y: 22, filter: "blur(5px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: dur.smooth, ease: ease.smooth } },
};

/** Elements that enter from the left (problem columns, left panels). */
export const fromLeft = {
  hidden: { opacity: 0, x: -18 },
  show:   { opacity: 1, x: 0, transition: { duration: dur.smooth, ease: ease.out } },
};

/** Elements that enter from the right (solution columns, right panels). */
export const fromRight = {
  hidden: { opacity: 0, x: 18 },
  show:   { opacity: 1, x: 0, transition: { duration: dur.smooth, ease: ease.out } },
};

/** Ambient/decorative: pure opacity fade, no movement. */
export const fadeOnly = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: dur.standard, ease: ease.smooth } },
};

/** Small elements: scale + opacity (badges, icons, pills). */
export const popIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show:   { opacity: 1, scale: 1, transition: { duration: dur.standard, ease: ease.smooth } },
};

// ── Stagger containers ────────────────────────────────────────────────────────
// Use on the wrapper; children inherit the variant name and stagger automatically.

/** Grid cards: 80ms between items (comfortable, not rushed). */
export const staggerGrid = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

/** Feature lists / spec items: 60ms (tighter, flows quickly). */
export const staggerList = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: delay } },
});

/** Large blocks with fewer elements: 120ms (gives each room to breathe). */
export const staggerSlow = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: delay } },
});
