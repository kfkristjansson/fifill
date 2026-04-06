# Fífill Design System

## Aesthetic Direction

**Concept: "Quiet breath."** The site should feel like the first moment of a meditation — the room goes still, attention gathers. Warm but not sweet. Grounded, not airy. Professional clinical credibility meets the softness of contemplative practice. Think: a well-kept therapy office with natural light, linen textures, dried flowers.

**Anti-patterns to avoid:**
- No gradient buttons or hero gradients
- No 3-column icon grids with generic descriptions (currently present — will restructure)
- No stock-wellness purple/lavender
- No decorative SVG illustrations
- No card borders everywhere

## Typography

**Font:** Poppins (already loaded, keep it)
- **Display / h1:** 48px, weight 600, tracking -0.02em, line-height 1.15
- **Section heading / h2:** 32px, weight 600, tracking -0.01em, line-height 1.3
- **Subsection / h3:** 22px, weight 600, line-height 1.4
- **Body:** 16px, weight 300 (light), line-height 1.7
- **Small / metadata:** 13px, weight 500, line-height 1.5
- **Micro label:** 11px, weight 600, uppercase, tracking 0.06em

## Color Palette

One warm accent. Everything else neutral.

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-page` | `#faf9f6` | Page background — warm off-white |
| `--bg-surface` | `#ffffff` | Cards, elevated surfaces |
| `--bg-muted` | `#f3f0eb` | Subtle section backgrounds |
| `--bg-deep` | `#2c2620` | Footer, dark sections |
| `--text-primary` | `#2c2620` | Headlines, primary text |
| `--text-body` | `#5c5650` | Body paragraphs |
| `--text-muted` | `#9a938b` | Metadata, labels |
| `--text-inverse` | `#faf9f6` | Text on dark backgrounds |
| `--border` | `#e8e3dc` | Subtle dividers (use sparingly) |
| `--accent` | `#c2703e` | Warm terracotta — buttons, active states, links |
| `--accent-hover` | `#a85c30` | Darker accent for hover |
| `--accent-light` | `#faf0e8` | Accent tint for backgrounds |

**Rationale:** Terracotta (#c2703e) replaces the generic amber. It passes the physical artifact test — it could be on a clay pot, a book spine, a meditation cushion. Earthy and warm without being loud.

## Spacing

4px base grid, matching parent system.

| Purpose | Value |
|---------|-------|
| Tight (icon gaps) | 4-8px |
| Component internal | 12-16px |
| Section padding | 64-96px vertical, 24px horizontal |
| Max content width | 720px (reading), 1080px (grid layouts) |
| Page horizontal padding | 24px mobile, 32px tablet, 48px desktop |

## Border Radius

- Buttons: 6px
- Cards/surfaces: 12px
- Audio player: 10px
- Pills/badges: 999px
- Images (author portraits): 12px (not fully round — more editorial)

## Motion

- Hover on buttons/links: 200ms ease-out, opacity shift
- Audio player progress: no transition (real-time)
- Page section entrance: none (static site, no scroll animations)
- Focus-visible: 2px offset ring in accent color

## Components

### Audio Player
The signature component. Should feel tactile and purposeful.
- Background: `--bg-muted` (#f3f0eb)
- Play button: solid `--accent`, 40px circle
- Progress bar: 3px height, `--border` track, `--accent` fill
- Title: 15px weight 500
- Duration: 13px weight 400 tabular-nums
- Hover: background shifts to slightly warmer tint
- No border on the container — background separation only

### Navigation
- Sticky top, white with subtle bottom shadow on scroll
- Logo left, text links right
- Active link: accent color underline (2px, animated width)
- Mobile: sheet overlay, not dropdown

### Footer
- Deep warm dark (`--bg-deep`)
- Logo + description left
- Link columns center/right
- Contact email bottom
- No heavy dividers — spacing creates structure

### Buttons
- Primary: solid `--accent`, white text, 6px radius, 14px 32px padding
- Secondary: transparent, `--accent` text, 1px accent border
- Never more than 2 buttons in a row

### Cards (book product, event, etc.)
- Background `--bg-surface` with subtle shadow (not border)
- 24px internal padding
- Image fills top or left side

## Quality Gate Compliance

- [x] Squint test: accent terracotta + dark text creates clear hierarchy
- [x] Color count: 1 accent + warm neutrals only
- [x] 60-30-10: warm white (60%), warm greys (30%), terracotta (10%)
- [x] Typography hierarchy: 4 distinct levels (display, section, body, meta)
- [x] Border audit: minimal borders, spacing-first separation
- [x] One accent rule: terracotta for interactive elements only
