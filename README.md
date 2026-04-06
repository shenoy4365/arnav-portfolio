# Arnav Shenoy's Portfolio Website

## 🛠️ Tech Stack

- **Next.js 15** + **TypeScript** — App Router, server components, SSR-safe theme init
- **Tailwind CSS** — Utility-first styling with class-based dark mode
- **react-icons** + **lucide-react** — Icon sets for social links and UI controls
- **Inter** (Google Fonts) — Clean, readable sans-serif throughout

## 🎨 Design Philosophy

This portfolio is built around a **clean, academic minimalism** aesthetic that prioritizes content over decoration:

- **Warm Neutrals** — Cream white (`#f2f0eb`) and grayish black (`#1e1e1e`), never pure white or pure black
- **Consistent Typography** — Inter at varying weights; headings match body font for a cohesive, unfussy feel
- **Purposeful Motion** — A single fade-in-up entrance animation; nothing animated for its own sake
- **Subtle Interactions** — Accordion rows, hover underlines, and a theme toggle that stays out of the way
- **Dark Mode Done Right** — Persisted via `localStorage`, applied before paint via an inline script, no flash

## 🏗️ File Structure

```
app/
├── page.tsx          # All tabs, accordion rows, data, and theme logic
├── layout.tsx        # Root layout — theme init script lives here
└── globals.css       # Keyframes, ::selection color, html/body backgrounds
public/
├── images/
│   └── profile.jpg   # Profile photo (add your own)
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## ✏️ Customization

| What | Where |
|---|---|
| Bio text | `app/page.tsx` → About tab JSX |
| Work entries | `workEntries` array in `app/page.tsx` |
| Project entries | `projects` array in `app/page.tsx` |
| Profile photo | `public/images/profile.jpg` |
| Resume | `public/AS_Resume.pdf` |

## 📧 Contact

arnav [dot] shenoy [at] gmail [dot] com
