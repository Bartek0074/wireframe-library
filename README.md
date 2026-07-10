# Wireframe UI Library

A reusable wireframe system for quickly creating website prototypes before development.

The goal of this project is to create a visual skeleton of a website for clients before building the final product.

The generated pages should show:

- what sections will exist
- what content hierarchy will be used
- where navigation, CTAs, images and information blocks will appear
- how the overall page structure will look

This project is not meant to create a finished website.

It is a wireframe/prototype stage used for validating layouts and ideas before development.

The wireframe should be:

- simple
- consistent
- easy to understand
- focused on layout, not final styling

The only fully working functionality should be navigation between pages.

---

# Purpose

The main use case:

1. Create a website concept.
2. Present the structure to the client.
3. Collect feedback about layout and content.
4. Use the approved structure as a base for final development.

The goal is to answer questions like:

- What sections should the page contain?
- What information should appear first?
- Where should CTAs be placed?
- How should the content hierarchy look?

This stage is about structure, not final implementation.

---

# Using AI

This project is designed to work together with AI tools.

Before generating pages, AI should always use the documentation inside the `/ai` folder:

- `ai-guidelines.md`  
  General rules for creating pages and using the design system.

- `blocks.md`  
  Available reusable Blocks and information about when to use them.

- `design-rules.md`  
  Visual rules for spacing, typography, layout and consistency.

AI should always prefer existing Blocks instead of creating new layouts.

The priority is:

1. Reuse existing Blocks.
2. Make small modifications when needed.
3. Combine existing Blocks when required.
4. Create new sections only when the specification cannot be achieved otherwise.

---

# Blocks System

Pages are built by composing reusable Blocks.

Blocks represent larger page sections such as:

- Hero sections
- Feature sections
- Pricing sections
- Testimonials
- Content sections
- Footers

A page should be created by combining existing Blocks instead of designing every section from scratch.

Small modifications are allowed:

- changing text content
- changing CTA labels
- changing links
- replacing placeholders
- adjusting small spacing or alignment differences

If a specific design requirement requires mixing existing Blocks, this is allowed.

Example:

Combining the structure of one Footer with elements from another Footer is acceptable if it creates the required result.

The goal is not to strictly follow Blocks without changes, but to keep consistency and avoid unnecessary duplication.

---

# Project Structure

The project contains:

- `src/app/`  
  Next.js App Router pages and layouts.

- `src/blocks/`  
  Reusable blocks.

- `src/components/`  
  Reusable UI components, atoms, molecules.

- `ai/`  
  AI instructions and design documentation.

The `/ai` folder contains the rules used when generating new pages:

- `ai-guidelines.md`
- `blocks.md`
- `design-rules.md`

---

# Layout Structure

The project uses the Next.js App Router.

There is one global layout defined in:

`app/layout.tsx`

The global layout is responsible for rendering:

- one Navigation component
- page content (`children`)
- one Footer component

Navigation and Footer are project-level elements.

Do not create additional Navigation or Footer components inside individual pages unless explicitly requested.

Individual pages should focus only on their content sections.

---

# Creating Pages

When creating a new page:

1. Understand the purpose of the page.
2. Keep the existing global Navigation and Footer.
3. Select the closest existing Hero section.
4. Compose the remaining content using available Blocks.
5. Follow all rules from `design-rules.md`.
6. Modify existing Blocks when possible.

Avoid creating completely custom layouts if an existing Block can be adapted.

---

# Wireframe Guidelines

The output should look like a client presentation wireframe.

Focus on:

- page structure
- section order
- content hierarchy
- layout relationships

Avoid:

- complex interactions
- real backend functionality
- unnecessary animations
- production-ready features

Use placeholders where real content is not available.

The wireframe should communicate:

"This is what will be on the page and where it will be located."

---

# Example AI Prompts

## SaaS Landing Page

Create a wireframe landing page for a SaaS analytics platform.

Use the existing Blocks from `/ai/blocks.md`.

Follow:

- `/ai/ai-guidelines.md`
- `/ai/design-rules.md`

Requirements:

- hero section with announcement badge
- feature presentation
- product preview section
- testimonials
- pricing section
- final CTA section

Use existing Blocks whenever possible.

The result should be a grayscale wireframe showing page structure and content hierarchy.

Do not focus on final branding or functionality.

---

## Agency Website

Create a wireframe website for a digital agency.

Use the available Blocks from `/ai/blocks.md`.

Follow:

- `/ai/ai-guidelines.md`
- `/ai/design-rules.md`

Requirements:

- premium modern layout
- hero section
- services presentation
- portfolio section
- client testimonials
- contact section

Keep the existing Navigation and Footer.

Reuse existing Blocks and combine them when needed.

Create custom sections only if the required layout cannot be achieved with available Blocks.

The final result should be a client-ready wireframe prototype.

---

# Important

This project is not a final UI kit.

It is a tool for creating fast website concepts before development.

The most important principles are:

1. Consistency
2. Reusable Blocks
3. Clear content hierarchy
4. Simple client presentation
5. Easy iteration before development