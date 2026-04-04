

## Dark Forest Theme

Transform the site from a white/light background to a deep, dark forest aesthetic while keeping all text readable and the lime accent punchy.

### Color Changes (all in `src/index.css`)

| Token | Current | New | Purpose |
|-------|---------|-----|---------|
| `--background` | `0 0% 100%` (white) | `129 30% 8%` (deep forest) | Page background |
| `--foreground` | `129 97% 5%` | `90 20% 90%` (light green-grey) | Body text |
| `--card` | `0 0% 100%` (white) | `129 25% 12%` (dark moss) | Card surfaces |
| `--card-foreground` | `129 97% 5%` | `90 20% 90%` | Card text |
| `--popover` | `0 0% 100%` | `129 25% 12%` | Popover surfaces |
| `--popover-foreground` | `129 97% 5%` | `90 20% 90%` | Popover text |
| `--muted` | `129 10% 95%` (near-white) | `129 20% 14%` (slightly lighter forest) | Process/FAQ section bg |
| `--muted-foreground` | `129 10% 40%` | `129 15% 55%` | Secondary text — lighter for readability |
| `--border` | `129 20% 85%` | `129 20% 20%` | Subtle dark borders |
| `--input` | `129 20% 85%` | `129 20% 20%` | Input borders |
| `--accent-foreground` | `129 97% 10%` | `129 97% 5%` | Keep dark on lime buttons |

Primary, secondary, accent (lime), ring, hero gradient, and CTA glow stay the same — they already work on dark backgrounds.

### Component adjustments

- **TrustBar** (`bg-background border-b border-border`): Automatically picks up the new dark background — no code change needed.
- **ServicesSection, TestimonialsSection** (`bg-background`): Same — automatic.
- **ProcessSection, FAQSection** (`bg-muted`): Will use the new slightly-lighter forest green — automatic.
- **Navbar, Hero, FinalCTA, Footer** (`.section-dark`): Already dark — no change.

### Summary

Only **one file changes**: `src/index.css`. All components already reference CSS variables via Tailwind, so the dark forest feel propagates everywhere automatically.

