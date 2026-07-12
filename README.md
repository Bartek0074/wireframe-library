# Wireframe UI Library

A reusable wireframe system for quickly creating website prototypes before development.

The goal of this project is to create a visual skeleton of a website for clients before building the final product.

The generated pages should show:

- what sections will exist
- what content hierarchy will be used
- where navigation, CTAs, images and information blocks will appear
- how the overall page structure will look

This project is **not** meant to create a finished website.

It is a wireframe/prototype stage used for validating layouts and ideas before development.

The wireframe should be:

- simple
- consistent
- easy to understand
- focused on layout, not final styling

The only fully working functionality should be navigation between pages.

---

# Workflow

```text
User Prompt
      │
      ▼
GitHub Copilot
      │
      ▼
Wireframe UI Library
      │
      ▼
Client Review & Approval
      │
      ▼
Generate lovable-prompt.md
      │
      ▼
Lovable
      │
      ▼
High-fidelity Design
      │
      ▼
Final Development
```

---

# Purpose

The main workflow is:

1. Create a website concept.
2. Present the structure to the client.
3. Collect feedback.
4. Approve the layout.
5. Generate the final visual direction.
6. Build the final website.

The goal is to answer questions like:

- What sections should the page contain?
- What information should appear first?
- Where should CTAs be placed?
- How should the content hierarchy look?

This stage is about structure, not final implementation.

---

# AI Documentation

Before generating pages, always use the documentation inside the `/ai` folder.

- `ai-guidelines.md`
- `blocks.md`
- `design-rules.md`

These files define:

- available Blocks
- page generation rules
- layout consistency
- spacing
- typography
- responsive behavior

---

# Project Structure

```text
src/
├── app/
├── blocks/
└── components/

ai/
├── ai-guidelines.md
├── blocks.md
└── design-rules.md

examples/
├── wireframe-prompts.md
└── lovable-prompts.md

lovable_output/
└── lovable-prompt.md
```

---

# Examples

Example prompts are available inside:

- `examples/wireframe-prompts.md`
- `examples/lovable-prompts.md`

The generated Lovable prompt should always be written to:

```
lovable_output/lovable-prompt.md
```

---

# Philosophy

The most important principles are:

1. Consistency
2. Reusable Blocks
3. Clear content hierarchy
4. Simple client presentation
5. Easy iteration before development