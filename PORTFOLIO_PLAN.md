# Portfolio plan and content map

## Purpose

Present the user as a CSE student who can connect broad CS foundations with practical software work. Keep the reference's editorial feel while making projects, skills, and contact details easy to scan.

## Page map

1. **Header/navigation** — compact brand mark and section links.
2. **Hero** — name, CSE student description, large editorial headline, portrait/illustration, contact jump link.
3. **About** — short introduction and what the user enjoys building.
4. **Toolkit** — React 19, JavaScript, HTML, CSS, Java, Python, C/C++, PHP/MySQL from coursework, Docker Desktop, and Supabase. Google Cloud and Cloudflare are excluded by the user's preference.
5. **Projects** — two projects from the supplied CV: Neo Cash AI and the personal portfolio. Their descriptions, technologies, project status, and available GitHub links are populated; project graphics are marked illustrative rather than screenshots.
6. **Studies** — compressed four-year curriculum map grouped into foundations, data/software, systems/networks, and AI/visual computing.
7. **DIP feature** — highlight Digital Image Processing as the user's selected elective; add a real assignment/project only if the user provides one.
8. **Contact** — supplied Gmail is linked, with download links for the user-provided CV and resume. Cloudflare/Workers references were removed from the downloadable copies; add public profile links once supplied.
9. **Footer** — name, CSE description, and return-to-top link.

## Design map

- White/off-white paper surface, black typography, fine gray grid lines, restrained lime accent.
- Large sans-serif display type with compact mono labels.
- Portrait-led hero inspired by the uploaded reference. The user-supplied hero image is `public/images/hero-portrait.png`.
- Keep the same three-column editorial composition on desktop and tablet: headline words on each side of a centered portrait, with tablet type, portrait, and spacing scaled together. On phone, keep the separate mobile composition with the complete headline first, the full portrait below it, and the topic strip after the picture.
- The original site design reference is preserved at `reference/portfolio-style-reference.webp` for future review only; do not show that reference image as the user's portrait or project work.
- Desktop uses multi-column grids; mobile collapses to single-column sections and a menu button.
- Keep motion restrained, preserve keyboard focus, and respect `prefers-reduced-motion`.
- Avoid external fonts/assets by default so the design does not depend on a network connection.

## Work plan

### Done

- Read and summarized the four syllabus PDFs.
- Recorded the user's statement that they can do all syllabus subjects.
- Recorded the independent tool inventory and the user's request to omit Google Cloud and Cloudflare from portfolio copy.
- Interpreted the supplied screenshot as a visual reference.
- Created and populated the React 19/Vite portfolio with the user's supplied identity, education, project, skill, email, CV, and resume information.
- Added `AGENTS.md`, `PROJECT_MEMORY.md`, and this plan to preserve context for another chat/agent.
- Refined the hero into desktop/laptop, tablet, and phone layouts; on phone the headline is grouped into three phrases with deliberate left/center/right offsets and varied gaps, followed by a larger full portrait and the topic strip. Narrow-phone sections also use a single-column layout. The latest `npm run build` succeeds.
- Updated the tablet hero to preserve the same three-column desktop composition with proportionally smaller type, portrait, and spacing; the separate phone hero remains unchanged.

### Next

1. Visually review desktop, tablet, and phone layouts, then refine from the user's screenshots/feedback.
2. Add project screenshots or details only when supplied by the user.
3. Add any other public profile links if supplied; the email and known GitHub project links are connected.
4. Use the supplied CV/resume and portrait as the source for identity, education, and project details.
5. Review navigation, readability, contrast, links, and page metadata.
6. Run the production build and verify all in-site links before delivery.
7. Confirm hosting setup if the user wants a live website; pushing source to GitHub does not itself guarantee deployment.

## Content rules

- The syllabus covers broad academic topics; represent them as foundations or coursework, not as professional job experience.
- Do not invent project names, deployment links, awards, company experience, users, numerical impact, or proficiency labels.
- Use project evidence to decide which skills deserve visual emphasis.
- The user specified `Ruhan` as the public display name; the supplied CV gives the full name Ruhan Dash Dibya.
- Keep Google Cloud and Cloudflare out of public portfolio content unless the user changes their preference.
