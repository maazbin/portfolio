# Engineering portfolio

The source for [maazbin.github.io/portfolio](https://maazbin.github.io/portfolio/), the public portfolio of Maaz Bin Mustaqeem.

I build AI systems and Python backends, and take ownership of the architecture around them: state, tool execution, security boundaries, asynchronous workflows, evaluation, and deployment.

## What this site shows

- **[Xyova](https://xyova.com/):** Evidence-backed lesson evaluation from recorded teaching, using quoted and timestamped findings with statistical review.
- **[Mishkat VLE](https://mishkatvle.com/):** A multi-tenant education platform with role-aware portals, AI learning features, live teaching, and gamification.
- **[JobPilot](https://github.com/maazbin/jobpilot):** Open-source MCP execution and memory infrastructure for browser workflows. [View the demo](https://github.com/maazbin/jobpilot/blob/main/docs/demo.gif).
- **[Cerebra](https://cerebra.jambits.io/):** Multimodal document intelligence with agent workflows and human review.
- **Client work:** An AI legal MVP delivered through Upwork, with a publicly visible client review.

This site is intentionally about the problems, decisions, and outcomes, not an exhaustive résumé.

## How it works

A static site deployed from this repository through **GitHub Pages**.

- `index.html`: content, semantics, search and social-sharing metadata.
- `styles.css`: responsive styling and typography.
- `motion.js`: video playback and scroll interactions, with reduced-motion support.
- `images/`: real product captures and social-sharing artwork.
- `.github/workflows/visual-qa.yml`: desktop, tablet, and mobile layout checks.
- `.github/workflows/capture-site-previews.yml`: captures current product-site images.

There is no JavaScript framework or package install needed to serve the site.

### Local preview

```bash
python -m http.server 4173
```

Open [localhost:4173](http://localhost:4173).

### Deployment

Commits to `main` trigger GitHub Pages. Verify the deployment and visual QA checks in the [Actions tab](https://github.com/maazbin/portfolio/actions).

## Contact

[Portfolio](https://maazbin.github.io/portfolio/) · [GitHub](https://github.com/maazbin) · [LinkedIn](https://www.linkedin.com/in/maaz-bin-mustaqeem-34990b194/) · [Upwork](https://www.upwork.com/freelancers/~01d356fcc8c8e07e51) · [Email](mailto:maaz.mstqm@gmail.com)
