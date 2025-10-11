# wabi-sabi

## Wabi-Sabi Button Style

- **Shape**: Rounded rectangle with `18px` radius for softened corners that still feel structured.
- **Primary Gradient**: `linear-gradient(90deg, #FF8A29 0%, #FFB347 50%, #FF7A1C 100%)` (e.g. Tailwind `from-orange-400 via-amber-400 to-orange-500`).
- **Primary Text**: White (`#FFFFFF`), medium weight, set in Inter (or your project’s primary sans-serif) at `0.875rem`.
- **Primary Border**: Transparent to allow the gradient to reach the edge.
- **Primary Shadow**: `0 18px 45px -18px rgba(249, 115, 22, 0.55)` for a gentle lift; on hover increase to `0 22px 50px -20px rgba(249, 115, 22, 0.60)` and move up by `-2px`.
- **Secondary Variant**: Transparent fill, `1px` border in `rgba(255,255,255,0.2)`, same `18px` radius, white text, and hover state with subtle `rgba(255,255,255,0.05)` fill.
- **Spacing**: Comfortable padding (`px-6 py-3` in Tailwind) to keep the silhouette proportional.

## Wabi-Sabi Text Box Style

- **Shape**: Rounded square with a modest `14px` radius (`rounded-md`) so the silhouette feels deliberate, not pill-shaped.
- **Border**: `1px` in `rgba(22, 163, 74, 0.35)` for green-accented badges or `rgba(255,255,255,0.15)` for neutral variants.
- **Fill**: Gradient wash from deep tone to translucent light (`from-emerald-600/18 via-emerald-500/10 to-emerald-400/4`) to create the Wabi-Sabi glow.
- **Backdrop**: Apply `backdrop-blur-sm` when text boxes sit on imagery to mimic frosted glass.
- **Typography**: Uppercase label, tracking set to `0.28em–0.32em`, Inter SemiBold at `0.75rem` (Tailwind `text-xs font-semibold uppercase tracking-[0.3em]`).
- **Spacing**: `px-4 py-1.5` for section badges, `px-5 py-2` for hero badges; keep content centered vertically.
- **Shadow**: Subtle vertical lift `0 16px 28px -18px rgba(16,185,129,0.45)` to separate the label from the background.
- **Example**:
  ```tsx
  <span className="inline-flex items-center justify-center rounded-md border border-emerald-400/45 bg-gradient-to-r from-emerald-600/18 via-emerald-500/10 to-emerald-400/4 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-emerald-100 shadow-[0_16px_28px_-18px_rgba(16,185,129,0.45)] backdrop-blur-sm">
    Heading Label
  </span>
  ```

## 🌿 The Wabi-Sabi Feeling & Way of Doing Things

- **Essence**
  - Wabi-Sabi finds beauty in simplicity, imperfection, and what already exists.
  - We avoid piling on complexity; instead we reveal what works and elevate it with deliberate shifts.
  - Every design, word, and flow must feel calm, balanced, and purposeful.

- **Tone & Voice**
  - Gentle confidence — never loud or hyped.
  - Clear, human language — speak as if across the table from a business owner.
  - Honest framing — say what needs to be heard, not just what flatters.

- **Visual Style**
  - Clean layouts with generous breathing room.
  - Earthy foundations with muted contrasts and bold accents (orange for action, green for growth).
  - Rounded corners, soft shadows, modern yet warm.
  - Clarity first — headings guide rather than overwhelm.

- **Flow & Conversion**
  - Each section reads like a conversation, not a pitch.
  - One clear CTA per section.
  - Contrast through simplicity: quiet backgrounds with strong card or stack focus.
  - Scarcity and urgency expressed with calm authority, never pushiness.

- **Copy Principles**
  - Lead with real pain points voiced by owners.
  - Show small shifts delivering tangible gains.
  - Always return to hidden value, clarity, and lasting growth.
  - Skip jargon like “synergy” or “unlock potential.” Prefer “reclaim lost profit,” “free up hours,” “steady growth.”

**In short:** Wabi-Sabi is beauty in business simplicity — clear, calming, focused. It must feel like a trusted guide leading through chaos into clarity, not a hyped-up sales page.
