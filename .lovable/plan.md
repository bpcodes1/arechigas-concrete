

## Change Primary Color to #0C3C01

**What:** Update the primary dark green color from the current `hsl(120, 100%, 20%)` (~`#006600`) to `#0C3C01` (a deeper, darker green) across the site.

**Color conversion:** `#0C3C01` → RGB(12, 60, 1) → approximately `HSL(129, 97%, 12%)`

**Files to edit:**

1. **`src/index.css`** — Update the `--primary` CSS variable from `120 100% 20%` to `129 97% 12%`. Also update the hero gradient stops to use the new primary as the base (e.g., `hsl(129, 97%, 9%)` to `hsl(129, 97%, 15%)`).

2. **`src/index.css`** — Update `--secondary` to a slightly lighter shade of the new primary (e.g., `129 97% 16%`) so it stays harmonious.

3. **`src/index.css`** — Update `--foreground`, `--ring`, and border/muted variables that reference the green hue to use `129` instead of `120` for consistency.

This will automatically propagate to all components (navbar, hero, service cards, CTA sections, footer) since they reference the CSS variables via Tailwind's `primary`, `secondary`, and utility classes like `.section-dark`.

