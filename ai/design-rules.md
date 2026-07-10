# Design Rules

These rules define the visual language of the project.

Always follow them when creating new Blocks or pages.

---

# Layout

## Container

Use:

- `max-w-7xl`
- `mx-auto`

Horizontal spacing:

- `px-4`

Vertical spacing:

- `py-16` on mobile
- `py-20` or `py-24` on desktop

Avoid custom container widths unless necessary.

---

# Section Heights

Hero sections may use:

- `min-h-screen`
- `min-h-[calc(100svh-navbar)]`

Regular sections should size naturally based on their content.

Avoid unnecessary fixed heights.

---

# Spacing

Prefer consistent spacing throughout the project.

Typical spacing scale:

- gap-2
- gap-4
- gap-6
- gap-8
- gap-12
- gap-16

Avoid arbitrary spacing values.

---

# Typography

Use a clear visual hierarchy.

Only one `h1` per page.

Typical order:

- h1
- h2
- h3
- paragraph
- caption

Paragraphs should remain readable.

Recommended maximum widths:

- `max-w-2xl`
- `max-w-3xl`
- `max-w-[60ch]`

Avoid excessively long text lines.

---

# Buttons

Use no more than two primary actions in a section.

Preferred order:

1. Brand button
2. Ghost / Outline button

Avoid multiple competing primary buttons.

---

# Links

Navigation links should remain concise.

Examples:

- Features
- Pricing
- About
- Contact
- Documentation
- Blog

Avoid overly long labels.

---

# Images

Use `PlaceholderImage` during wireframing.

Preferred aspect ratios:

- 16:9
- 4:3
- 1:1

Dashboard previews may use wider ratios.

Do not use decorative images unless they support the layout.

---

# Cards

Cards should use:

- consistent padding
- consistent border radius
- subtle borders
- optional shadows

Avoid mixing multiple card styles in the same section.

---

# Backgrounds

Use background variations to create visual hierarchy.

Recommended pattern:

Background

Secondary

Background

Secondary

Hero sections may use:

- solid background
- gradient
- background image
- background image with overlay
- video background with overlay

Avoid too many visually heavy sections in sequence.

---

# Navigation

Navigation should remain compact.

Contains:

- logo
- navigation links
- optional CTA
- mobile drawer

Desktop navigation should fit on a single row.

---

# Footer

Footer should visually conclude the page.

Typical content:

- logo
- navigation
- legal links
- newsletter
- social links

Spacing between footer links should generally be smaller than in the main navigation.

---

# Responsive Design

Design mobile-first.

Layouts should gracefully expand on larger screens.

Avoid creating desktop-only solutions.

---

# Consistency

Consistency is more important than originality.

Prefer reusing an existing layout over introducing a new variation.

Every page should look like it belongs to the same design system.