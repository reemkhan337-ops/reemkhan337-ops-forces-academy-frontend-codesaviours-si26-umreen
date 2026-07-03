# forces-academy-frontend-codesaviours-si26-umreen
# Forces Academy — Public Website

A 7-page, fully responsive public website for **Forces Academy**, built as part of the
Frontend Track internship. Pure frontend project — no backend or database used.


## Tech Stack

- HTML5
- CSS3 (custom stylesheet, no framework overrides hacked)
- Bootstrap 5.3 (grid system + components)
- Vanilla JavaScript (no frameworks/libraries)

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero banner, about snippet, courses preview, stats counter, testimonials, CTA |
| About | `about.html` | Academy history/timeline, mission, vision, leadership team |
| Courses | `courses.html` | Course cards — subjects, duration, schedule, fees |
| Admissions | `admissions.html` | How to apply, eligibility table, required documents, fee structure |
| Results | `results.html` | Student results table, filterable by course and year |
| Gallery | `gallery.html` | Filterable photo grid with a custom lightbox popup |
| Contact | `contact.html` | Contact form (frontend validation only), Google Maps embed, address/phone |

## Folder Structure

```
forces-academy/
├── index.html
├── about.html
├── courses.html
├── admissions.html
├── results.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   └── (add real photos here)
└── README.md
```

## Features

- Fully responsive — tested on mobile and desktop breakpoints using Bootstrap's grid
  (`col-`, `col-md-`, `col-lg-`) and the in-browser device toolbar.
- Animated stats counter on the Home page (vanilla JS, `IntersectionObserver`).
- Gallery filter buttons + custom lightbox popup (no external lightbox library).
- Results table filterable by course and year using `<select>` dropdowns.
- Contact form with simple required-field validation and a success toast
  (frontend only — no data is actually sent anywhere, since there's no backend).
- "Student Portal" button in the navbar links out to the Full Stack LMS.

## Notes on Images

The Home and Gallery pages now use real custom SVG illustrations (located in `/images`
and `/images/gallery`) instead of placeholder boxes, so photos display correctly out
of the box with zero external dependencies. To swap in actual photography later,
just replace the relevant `images/*.svg` file with a `.jpg`/`.png` of the same name
(or update the `src` path in the HTML) — no other code changes are needed.

## How to Run Locally

No build step needed — just open `index.html` in a browser, or serve the folder with
any static server, e.g.:

```bash
npx serve .
```



