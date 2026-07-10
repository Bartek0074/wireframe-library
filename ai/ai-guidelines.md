# Wireframe UI – AI Guidelines

This project is a reusable UI library built with Next.js, Tailwind CSS, and shadcn/ui principles.

The goal is to build consistent pages by composing existing Blocks instead of creating completely new layouts.

---

# General Rules

- Prefer existing Blocks whenever possible.
- Reuse existing Components inside new Blocks.
- Do not duplicate layouts if a similar Block already exists.
- Follow all spacing, typography and layout rules from `design-rules.md`.
- Use `blocks.md` to choose the most appropriate Block for each section.

---

# Project Structure

The project uses the **Next.js App Router**.

There is one global layout defined in app/layout.tsx


The global layout is responsible for rendering:

- one Navigation component
- page content (`children`)
- one Footer component

Every page should be rendered inside this shared layout.

Do not add additional Navigation or Footer components inside individual pages unless explicitly requested.

---

# Using Blocks

Blocks are the primary building units of page content.

The project uses one global Navigation and one global Footer defined in `app/layout.tsx`.

When creating a new page:

1. Keep the existing project Navigation and Footer.
2. Select an appropriate Hero section.
3. Compose the page content using existing Blocks.
4. Add additional Blocks to build the page structure.

Prefer small modifications of existing Blocks instead of creating new layouts.

Examples:

- changing text content
- changing CTA labels
- changing links
- replacing images
- adjusting small spacing or alignment differences

Navigation and Footer should only be changed when creating a new project style or a different global layout.

---

# Block Flexibility

Blocks are reusable foundations, not strict limitations.

If the prompt contains specific design requirements, do not force the page into existing Blocks.

You may:

- combine parts of multiple Blocks
- mix different Block patterns together
- create a new page-specific section
- adjust layouts to match the requested design

Example:

If a page requires a footer with social links and newsletter signup, combining elements from `Footer04` and `Footer07` is preferred over forcing one existing footer.

---

# Creating New Blocks

Only create new reusable Blocks when the layout is likely to be reused across multiple pages.

New reusable Blocks should be added to the Blocks library.

For one-off page requirements:

- create the component inside the relevant `app` router page structure
- do not add it to the Blocks folder

The Blocks folder should contain only reusable, generic layouts.

---

# Philosophy

The library focuses on:

- consistency
- simplicity
- accessibility
- reusable layouts
- clean visual hierarchy

Every page should feel like it belongs to the same design system.

---

# Page Generation Rules

When generating pages:

1. Understand the purpose of the page.
2. Select the closest existing Blocks.
3. Keep the same visual language.
4. Modify existing Blocks when possible.
5. Create custom sections only when required by the specification.

Avoid unnecessary originality.

A consistent design system is more important than creating a completely unique layout.