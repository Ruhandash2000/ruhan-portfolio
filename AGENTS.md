# Instructions for future agents

Read `PROJECT_MEMORY.md` and `PORTFOLIO_PLAN.md` before changing this project. Treat them as the handoff record for the user's goals, confirmed preferences, current implementation, and remaining work.

## User and communication

- The user communicates in Bangla, often written in Latin transliteration. Reply in Bangla unless they ask for another language. Keep code identifiers and technical terms in English.
- The user is a CSE student and wants a creative, personal portfolio based on the supplied monochrome editorial reference.
- The user says they can do the subjects listed in the four supplied CSE syllabus PDFs. Treat this as the user's self-report, not as a verified assessment.
- Include React 19, Java, JavaScript, Python, HTML, CSS, Docker Desktop, and Supabase in the working skill inventory.
- Do not include Google Cloud or Cloudflare in public portfolio content. The user explicitly said these do not need to be listed.
- Do not invent projects, employment, awards, metrics, dates, contact information, or proficiency levels. Keep draft placeholders until the user supplies details. The user supplied `Ruhandashdibya.ed@gmail.com` for the portfolio contact section; public profile URLs are still pending.
- `Ruhan` is currently a provisional display name taken from the workspace context; confirm before treating it as final.

## Design and implementation

- Preserve the reference's large typography, thin editorial grid, monochrome palette, portrait-led hero, and carefully spaced sections, adapted for a CSE student.
- The original visual reference is saved at `reference/portfolio-style-reference.webp`. It is for design reference only; do not display it as the user's portrait or as a portfolio project image.
- The user subsequently supplied `public/images/hero-portrait.png` for the hero. Use it as the intended portrait asset and keep its alt text descriptive and neutral.
- Keep the site responsive and accessible. Respect reduced-motion settings and avoid external font/image dependencies unless the user asks for them.
- The current implementation is a React 19 + Vite app. Keep the existing section map and refine it rather than replacing it without reason.
- Keep Google Cloud and Cloudflare out of the public skill list, even though the user mentioned them as tools they have touched.
- Do not publish or deploy the site unless the user explicitly asks.

## Before completing the portfolio

Get or confirm the user's real display name, preferred site language, profile photo (if wanted), project descriptions and links, public profile links, and university/study dates. The supplied Gmail is already linked in the contact section. Continue useful implementation work while other details are pending, but leave those fields clearly marked as placeholders.

Dependencies are now available in the workspace, and `npm run build` succeeded on 2026-10-16. The Vite dev server was started at `http://127.0.0.1:5173/`. Browser policy blocked the agent from inspecting the latest responsive preview, so do not claim this iteration was visually verified until it has actually been inspected.
