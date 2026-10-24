# Instructions for future agents

Read `PROJECT_MEMORY.md` and `PORTFOLIO_PLAN.md` before changing this project. Treat them as the handoff record for the user's goals, confirmed preferences, current implementation, and remaining work.

## User and communication

- The user communicates in Bangla, often written in Latin transliteration. Reply in Bangla unless they ask for another language. Keep code identifiers and technical terms in English.
- The user is a CSE student and wants a creative, personal portfolio based on the supplied monochrome editorial reference.
- The user says they can do the subjects listed in the four supplied CSE syllabus PDFs. Treat this as the user's self-report, not as a verified assessment.
- Include React 19, Java, JavaScript, Python, HTML, CSS, Docker Desktop, and Supabase in the working skill inventory.
- Do not include Google Cloud or Cloudflare in public portfolio content. The user explicitly said these do not need to be listed.
- Do not invent projects, employment, awards, metrics, dates, contact information, or proficiency levels. Use the user's supplied CV/resume for the two listed projects and academic details. The user supplied `Ruhandashdibya.ed@gmail.com` for the portfolio contact section; additional profile URLs are still pending.
- The user specified `Ruhan` as the portfolio display name; the CV gives the full name Ruhan Dash Dibya.

## Design and implementation

- Preserve the reference's large typography, thin editorial grid, monochrome palette, portrait-led hero, and carefully spaced sections, adapted for a CSE student.
- The original visual reference is saved at `reference/portfolio-style-reference.webp`. It is for design reference only; do not display it as the user's portrait or as a portfolio project image.
- The user subsequently supplied `public/images/hero-portrait.png` for the hero. Use it as the intended portrait asset and keep its alt text descriptive and neutral.
- Keep the site responsive and accessible. Respect reduced-motion settings and avoid external font/image dependencies unless the user asks for them.
- The current implementation is a React 19 + Vite app. Keep the existing section map and refine it rather than replacing it without reason.
- Keep Google Cloud and Cloudflare out of the public skill list, even though the user mentioned them as tools they have touched.
- Do not publish or deploy the site unless the user explicitly asks.

## Before completing the portfolio

The supplied CV/resume, portrait, project links, email, university, and study details are already in the project. Only add extra social links or other project details if the user supplies them. Continue implementation without blocking on optional information.

The project has been pushed to the user's public GitHub repository with their approval, including the CV and resume. Run `npm run build` after code changes. A local browser preview is only for checking the same project files; do not describe it as the hosted site. Do not claim a visual change is verified until its updated render has been inspected.
