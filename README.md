# Malak Zenbaa Portfolio — Resumterics-style recreation

This is a vanilla HTML/CSS/JavaScript portfolio recreated from the supplied Resumterics reference screenshots and customized with Malak Zenbaa's CV content.

## Run locally

Because the site loads JSON files with `fetch`, use a local web server:

```bash
cd malak-resumterics-portfolio
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Content files

- `data/site.json` — profile, experience, education, skills, certificates, awards, contact
- `data/projects.json` — all data analytics projects

Each project supports:

```json
{
  "id": "project-slug",
  "title": "Project title",
  "year": "2026",
  "category": "Power BI · Data Analytics",
  "description": "Short description",
  "tools": ["Power BI", "SQL"],
  "cover": "assets/projects/cover.png",
  "gallery": ["assets/projects/detail-1.png", "assets/projects/detail-2.png"],
  "highlights": ["Finding one", "Finding two"]
}
```

Each certificate supports an optional image:

```json
{
  "title": "Certificate title",
  "issuer": "Issuer name",
  "date": "Sep 2026",
  "description": "What the certificate covers.",
  "image": "assets/certificates/certificate-name.jpg"
}
```

Put certificate images in `assets/certificates/` and set the matching `image` value in `data/site.json`. Leave `image` empty to keep the generated certificate placeholder.

## Add Malak's real photo

Place the photo at:

`assets/profile/malak.jpg`

Until that file exists, the layout shows an `MZ` fallback while preserving the exact profile-photo proportions.

## Replace placeholder project visuals

Replace the SVG files under `assets/projects/` with real Power BI / Python dashboard screenshots, then update the paths in `data/projects.json`.

## Main design choices matched from the supplied reference

- purple textured/radial background
- large black rounded application shell
- fixed left profile card
- pill navigation
- charcoal content cards
- purple active-state and section accent
- compact Poppins typography
- dense desktop proportions
- responsive stacked mobile card
- project list with content left and image right
- resume, certificates, projects, awards and contact screens
