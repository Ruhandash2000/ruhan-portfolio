# Portfolio project memory and handoff

**Last updated:** 2026-10-25
**Workspace:** `C:\Users\ruhan\OneDrive\Documents\Vs code\My portfolio`

## Goal

Create a creative, student-focused CSE portfolio with the visual character of the reference image shared in chat. The reference uses a monochrome editorial style, oversized type, a fine grid, a centered portrait, compact navigation, work samples, and a strong closing/contact area. Adapt those ideas to a CSE student rather than copying the agency/designer experience and campaign content shown in the reference.

## User-provided facts and preferences

- The user is studying CSE and shared four National University CSE syllabus PDFs covering the four years. The user says they can do all the subjects in the syllabi.
- The user initially described React as something they had explored, then said they can work with React 19.
- The user has also said they have studied/used Java, JavaScript, Python, HTML, and CSS. Exact proficiency levels and project evidence have not yet been collected.
- The user says they can work with Docker Desktop and Supabase.
- The user mentioned Google Cloud and Cloudflare but explicitly said these do not need to appear in the portfolio. Omit them from public skill lists.
- The user's selected fourth-year optional subject is Digital Image Processing (DIP).
- The user provided `Ruhandashdibya.ed@gmail.com` as their Gmail; it is linked from the contact section with `mailto:`. The supplied CV gives the full name Ruhan Dash Dibya, and the user specified Ruhan as the public display name. The CV provides Neo Cash AI and portfolio project details, university, academic status, and GitHub repository links. LinkedIn and other public profile URLs are still pending.
- The user supplied a monochrome/glitch portrait for the hero; it has been copied to `public/images/hero-portrait.png` and is used by the page.
- Use `Ruhan` as the public display name and Ruhan Dash Dibya where a full name is needed.
- User-facing conversation should be in Bangla unless the user requests otherwise.

## Syllabus-based study map

The syllabus documents describe the following broad curriculum. The user confirms these subjects are within their abilities; portfolio copy should still be backed by real project examples where possible.

### Year 1

- C structured programming: algorithms, flowcharts, data types, branching, loops, arrays, strings, functions, recursion, structures/unions, pointers, files, and a programming lab.
- Electrical/electronic circuits and lab; digital systems and lab.
- Discrete mathematics, calculus, linear algebra, statistics and probability, and physics.
- English and History of the Emergence of Independent Bangladesh.

### Year 2

- Data structures and lab: arrays, linked lists, stacks, queues, trees, heaps, graphs, sorting, and searching.
- Object-oriented programming in C++/Java and lab: classes/objects, inheritance, polymorphism, exceptions, templates, and multithreading.
- Computer architecture; database management and lab (ER modeling, relational design, SQL, normalization, indexes, procedures/triggers/views, transactions, recovery/backup); microprocessors and assembly language and lab.
- Design and analysis of algorithms and lab: divide-and-conquer, greedy, dynamic programming, backtracking, branch-and-bound, and complexity/NP-hard topics.
- Numerical analysis, ordinary differential equations, and business studies.

### Year 3

- Peripheral/microprocessor interfacing and lab; data and telecommunications and lab.
- Operating systems and lab: processes/threads, scheduling, synchronization, deadlocks, file systems, memory/virtual memory, and disk I/O.
- Software engineering and lab: requirements, design, testing, debugging, quality, estimation, maintenance, and configuration management.
- Computer networking and lab; embedded/system programming and lab; theory of computation.
- Economics.

### Year 4

- Artificial intelligence and lab; compiler design and lab; computer graphics and lab.
- E-commerce and web engineering and lab: HTML/HTML5, CSS/CSS3, JavaScript, PHP, MySQL, responsive/dynamic websites, forms, validation, sessions, hosting, DNS, and SSL.
- Network and information security and lab; information systems management; project/industry attachment.
- **Selected elective:** Digital Image Processing, with a lab. Topics include image representation/acquisition, sampling and quantization, pixel relationships, enhancement and histogram operations, spatial/frequency filtering, restoration/noise, color models, compression, and segmentation.
- The other listed fourth-year elective subjects are options, not subjects the user selected; do not present them as completed courses.

## Current implementation

The workspace was empty at the start of the coding turn. A React 19 + Vite portfolio draft has been created from scratch:

- `package.json` — React 19, React DOM 19, Vite scripts/dependencies.
- `vite.config.js` — Vite React plugin configuration.
- `index.html` — page metadata and the tab title `Ruhan`; `public/favicon.png` is the user's portrait favicon.
- `src/main.jsx` — React entry point.
- `src/App.jsx` — header, hero, about, toolkit, two CV-based project summaries, study map, DIP feature, contact, and footer.
- `src/styles.css` — responsive editorial-grid styling, monochrome palette, accent color, and device-specific layouts. Tablet uses the desktop multi-column page and the same desktop hero type/image sizing formulas; phone keeps the distinct headline-first hero with a separate full portrait and topic strip.
- `public/images/hero-portrait.png` — monochrome/glitch portrait image supplied by the user for the hero.
- `public/documents/Ruhan_Dash_Dibya_CV.docx` and `public/documents/Ruhan_Dash_Dibya_Resume.docx` — download copies based on the documents supplied on 2026-10-24. Cloudflare/Workers references and links were removed from these copies at the user's request; source files outside the workspace remain unchanged.
- `README.md` — local run and personalization notes.
- `.gitignore` — ignores dependencies/build output and environment files.
- `reference/portfolio-style-reference.webp` — a project-local copy of the image the user supplied, retained so future chats/agents can inspect the visual reference. Do not use it as a public site asset or claim it is the user's photo.

The current page sections are: navigation, hero, about, technologies/toolkit, Neo Cash AI and portfolio project summaries, four-year study overview, DIP elective feature, contact section with the supplied email plus CV/Resume download links, and footer. The hero now uses the supplied image at `public/images/hero-portrait.png`.

The original design-reference attachment may not carry over to another chat. Use `reference/portfolio-style-reference.webp` as the durable design reference. Keep it separate from `public/images/hero-portrait.png`, which the user supplied for the site hero.

Google Cloud and Cloudflare are absent from the portfolio. The hero uses the portrait image the user supplied. Project information, education, and available repository links are based on the user's CV; project card graphics are illustrative, not actual screenshots. No project metrics were fabricated.

## Verification and environment status

- `npm run build` completed successfully on 2026-10-25 after the latest tablet layout change.
- Both downloadable DOCX copies were checked for `Cloudflare`/`workers.dev` text and hyperlinks; none remain. Each copy was rendered through Microsoft Word to a one-page PDF and visually reviewed.
- The Vite dev server at `http://127.0.0.1:5173/` is only a local preview of these same project files; changes appear on GitHub only after committing and pushing.
- The in-app browser could not reach the local preview during this iteration, so the new Contact download-link layout was not visually inspected. Do not claim it was visually verified.
- The 2026-10-25 tablet hero now shares the desktop type and portrait scale; its latest responsive render still needs a visual check.
- No tests were added or run.
- In the 2026-10-25 refinement, tablet breakpoints use the desktop layout and hero sizing; phone-specific composition remains intact.

## Current unresolved details

1. The user has supplied a hero portrait, CV, and resume; use these sources unless they ask for updates.
2. The CV has populated the two known projects and education details. Add other project/profile links only if supplied.
3. Visually review the latest desktop, tablet, and phone layouts. Build succeeds, but the browser preview could not be inspected by the agent.
4. A GitHub push uploads source changes; it does not necessarily publish a live website. Confirm hosting configuration before describing a public URL as live.
5. The local `Ruhan_Dash_Dibya_Resume.docx` differs from the last GitHub version. Preserve this uncommitted file unless the user requests that resume change.

## Safe handoff summary

The portfolio is populated from the user's CV/resume, including skills, two projects, education, email, and document downloads. Preserve the monochrome editorial direction and the user's explicit choice to omit Google Cloud and Cloudflare. The repository is public on GitHub and has been pushed with the user's approval. The existing hosted site does not auto-deploy from the repository; do not claim a live deployment without a separate explicit request.
