# Example Prompt – Generate a Lovable Prompt

After the wireframe has been completed and approved by the client, analyze the entire project and create a file:

```
lovable_output/lovable-prompt.md
```

The goal is **not** to generate code.

Instead, generate a detailed prompt for Lovable (lovable.dev) that will create a polished, production-quality visual design based on the existing wireframe.

The prompt should preserve:

- page hierarchy
- section order
- navigation
- CTAs
- content hierarchy
- overall UX

Improve only the visual design.

The generated prompt should describe:

- overall design style
- visual direction
- typography
- spacing
- color palette
- buttons
- cards
- borders
- shadows
- icons
- illustrations
- imagery
- backgrounds
- hover states
- subtle animations
- responsive behavior

---

## Colors

Assume the project uses Tailwind CSS.

Instead of hardcoding colors, instruct Lovable to generate a semantic color system inside `globals.css`.

Example:

```css
--color-neutral-50
--color-neutral-100
...
--color-neutral-950
```

These colors are only a starting point.

Lovable should generate a complete semantic palette, including:

- primary
- secondary
- accent
- muted
- success
- warning
- destructive
- border
- background
- foreground

The generated palette should match the chosen visual style.

---

## Responsive Design

Assume the project uses responsive root font sizing.

The design should work naturally on:

- mobile
- tablet
- laptop
- desktop
- large 4K displays

---

## Animations

Subtle animations are encouraged.

Examples:

- fade-ins
- slide-up transitions
- hover effects
- button interactions
- card hover animations

Avoid excessive animations.

---

## Important

Do not redesign the page structure.

Do not reorder sections.

Do not remove sections.

Do not change the information architecture.

Treat the wireframe as the approved UX.

The only goal is transforming the grayscale wireframe into a visually polished, production-quality website.

The final output should be written into:

```
lovable_output/lovable-prompt.md
```