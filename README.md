# Portfolio

Static single page for Maaz Bin Mustaqeem. No build step. Deploy this folder on Cloudflare Pages.

## Images

Three portraits were added on 6 Oct 2026. Two are on the page.

| File | Use |
| --- | --- |
| `images/maaz-hero.jpg` | Hero. Black shirt, warm lamp, quiet background. Best of the three. |
| `images/maaz-desk.jpg` | Practice section. White shirt at the desk. |
| Not used | Hallway portrait with a backpack. Fluorescent light and a busy background. Source PNG stays in `profile/`. |

## Motion, swap, and art

`research.md` lists 128 personal sites from the perfolios directory, plus the award galleries used for the interaction patterns. `motion.js` is plain script. No build step.

The page uses a moving word and a drifting field, paper tags that swing on scroll, screens that ease in from each side and stay in the grid, and a work list that swaps an original art plate. The first screen is a centered pair: writing on the left, the speaking portrait on the right. Type is Libre Baskerville and Source Sans 3. Color is newsprint, ink, and printer’s red.

`video/maaz.mp4` is the speaking portrait on the right of the hero. It plays muted until Sound is turned on. `images/maaz-poster.jpg` shows before the file is ready. The original 1080p file is about 92 MB, over the Cloudflare Pages file limit, so the page uses a 720p copy. The source file sits in `../video-source/`, outside this upload folder.

## What the page will say

Public products, public repos, and architecture at the altitude in `profile/08-outreach-rules.md`. Live product links on the page are https://app.xyova.com/ and https://mishkatvle.com/. Private school operations, employer names, pool ids, host layout, and the studio marketing stats are left off on purpose. Do not cite the student or school counts shown on either marketing site.

## Cloudflare Pages

Dashboard: Workers & Pages → Create → Pages → Upload assets. Upload the contents of this folder (`index.html` at the top, not nested again).

From git: set the root directory to `portfolio`, leave the build command empty, and set the output directory to the root of that folder.

`_headers` is picked up by Pages as-is. Custom domain is set under the project → Custom domains.

## Local preview

From this folder:

```powershell
python -m http.server 4173
```

Open http://127.0.0.1:4173
