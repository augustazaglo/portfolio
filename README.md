# Augistina Mawulawe Azaglo

A responsive fashion portfolio. Open `index.html` directly in a browser; no installation or build is required. The folder can be published using GitHub Pages.

## Editing

- Edit projects, the five `processStages`, and the experience timeline in `content.js`.
- Edit personal story, introduction, scholarship statement, and other page text in `index.html`.
- Portfolio image copies are in `assets/`; the supplied originals are preserved in `temporal/`. All older template images are also preserved in `assets/`.
- The design and responsive layout are in `styles.css`.
- Project filters, mobile navigation, image credits, and printing are in `app.js`.

Behind the Seams shows five images in order: sketching, the finished sketch, cutting the fabric, sewing, and the finished dress. All five stages now use the supplied original images. Edit each `processStages` image, description, alt text, and credit in `content.js`. Images lift slightly on hover; clicking does not open another view.

The supplied name, age, SHS completion year, and four-plus years of sewing are based on the conversation. Project details, dates of individual jobs, duties, materials, and personal anecdotes still need confirmation before submission. The portfolio now uses the supplied portrait, occasion photos, everyday photos, and original sketchbook pages. All 18 numbered portfolio images are displayed individually in the main gallery: six occasion photos, five everyday photos, and seven sketches. Filters show every image in the selected category. Images have a subtle lift and shadow on desktop hover, with no click-to-open views or detail text. Hover motion is disabled for reduced-motion preferences and touch-only devices.

## Supplied images

Web copies have a maximum dimension of 1920 pixels. The originals and all previous assets were left unchanged.

| Source in `temporal/` | Web copy in `assets/` | Use |
| --- | --- | --- |
| `Potrait.JPG` | `augustina-portrait.jpg` | Hero and personal story |
| `stage1.JPG` | `journey-step-01.jpg` | Sketching the design, journey stage 1 |
| `jouney_step2.jpg` | `journey-step-02.jpg` | Finished sketch, journey stage 2 |
| `stage 3.HEIC` | `journey-step-03.jpg` | Cutting the fabric, journey stage 3 |
| `stage 4.HEIC` | `journey-step-04.jpg` | Sewing, journey stage 4 |
| `journey_final.JPG` | `journey-final.jpg` | Finished dress, journey stage 5 |
| `occasions1.JPG` through `occasions4.JPG` | `occasion-01.jpg` through `occasion-04.jpg` | Occasion collection |
| `occasion_wear_new1.jpeg`, `occasion_wear_new2.jpeg` | `occasion-05.jpg`, `occasion-06.jpg` | Additional occasion photos |
| `Everyday1.JPG`, `Everyday2.JPG`, `everyday4.JPG` | `everyday-01.jpg`, `everyday-02.jpg`, `everyday-04.jpg` | Everyday collection |
| `Everyday3.JPG` | `everyday-03.jpg` | Tailoring detail |
| `everyday_new1.jpeg` | `everyday-05.jpg` | Additional everyday photo |
| `sketchbook1.JPG` through `sketchbook7.JPG` | `sketchbook-01.jpg` through `sketchbook-07.jpg` | Sketchbook collection |

The unnamed `IMG_*.jpg` files remain in `temporal/` for later selection.

## Application

The Print Portfolio button opens the browser print dialog. Save as PDF there if desired. This prints the full collection regardless of the current filter. The complete WASSCE certificate is available separately as `documents/augustina-wassce-certificate.pdf`, generated from the unchanged source `temporal/wassce cert.jpeg`. Its print source is `documents/wassce-certificate.html`. The certificate is not displayed in the public portfolio gallery. The final combined application PDF is still outstanding.

The personal statement and two recommendation letters are separate A4 documents:

- `documents/augustina-personal-statement.pdf`: the 507-word statement; editable source `documents/personal-statement.html`.
- `documents/augustina-recommendation-joseph-azaglo.pdf`: parent recommendation; editable source `documents/recommendation-joseph-azaglo.html`.
- `documents/augustina-recommendation-john-bedzera.pdf`: apprenticeship trainer recommendation; editable source `documents/recommendation-john-bedzera.html`.

These sources share `documents/application-letters.css` and print with no margins or browser headers/footers. Both recommendation letters are unsigned drafts for the named referees to review and approve. Joseph Atta Azaglo's letter is dated 17 October 2026; John Bedzera's letter is dated 29 October 2026. Signature lines and the reserved signature spaces have been removed; no signatures have been added. The trainer is described as a master tailor and apprenticeship trainer, not an academic referee. Confirm whether this satisfies the scholarship's academic-reference requirement before submission. Referee phone numbers and addresses are kept in the application documents, not added to the public site's contact section.

The matching A4 cover page is `documents/augustina-scholarship-cover.pdf`. Its editable source is `documents/scholarship-cover.html`; it uses the existing local portrait and fonts, with the supplied email, phone number, and location (Prampram, Greater Accra). The earlier `documents/augustina-scholarship-cover-draft.pdf` is retained as a previous draft. The name follows the website heading, Augustina Mawulawe Azaglo; confirm its spelling against the applicant's certificate. The HTML prints as one A4 page with no margins and background graphics enabled. This cover is not the complete application PDF.

The image portfolio review copy is `documents/augustina-fashion-portfolio-draft.pdf`. It combines the existing cover with experience, all five original process images, all six occasion photos, five everyday photos, and seven sketches. The process spans two pages so that the finished dress remains large and readable. Its body source is `documents/portfolio.html`, with `documents/portfolio.css` and `documents/portfolio.js`. It uses no stock photographs and does not invent unknown fabric names or employment dates. The school name is taken from the supplied WASSCE certificate. The prominent website callout appears at the beginning and end, with the planned address `https://augustazaglo.github.io/portfolio/`. The links are configured, but publication is pending. After the site is actually published and verified, set `portfolioWebsitePublished` in `documents/portfolio.js` to `true` and re-export before submission. The personal statement, certificate, and recommendation letters are separate from this portfolio review copy.

## Reference assets

Older Unsplash photographs are retained as unused design placeholders:

- `portrait.jpg`: https://images.unsplash.com/photo-1531123897727-8f129e1688ce
- `occasion.jpg`: https://images.unsplash.com/photo-1595777457583-95e059d581b8
- `editorial.jpg`: https://images.unsplash.com/photo-1539109136881-3be0616acf4b
- `details.jpg`: https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3
- `tailoring.jpg`: https://images.unsplash.com/photo-1483985988355-763728e1935b (spare reference image)
- `sketch.webp`: retained unused reference, Adele E. Balkan, Untitled Costume Sketch, late 1940s–early 1950s. LACMA: https://collections.lacma.org/object/113427

Process reference photographs, downloaded from Pexels as design placeholders. All three remain preserved as unused assets; none is displayed:

- `process-sketching.jpg`: Michael Burrows, https://www.pexels.com/photo/focused-young-woman-drawing-sketch-of-clothes-7148049/
- `process-cutting.jpg`: HONG SON, https://www.pexels.com/photo/a-person-cutting-a-red-fabric-on-a-sewing-machine-27893038/
- `process-sewing.jpg`: HONG SON, https://www.pexels.com/photo/a-sewing-machine-is-being-used-to-sew-a-red-ribbon-27893025/

Typography: DM Sans and Italiana, distributed through Google Fonts under the SIL Open Font License.

## GitHub Pages

Use repository name **`portfolio`**, owned by GitHub user **`augustazaglo`**. Its planned Pages address is **`https://augustazaglo.github.io/portfolio/`**. The `.git` suffix belongs to a Git clone URL, not the website address.

Publish the public website files (`index.html`, `styles.css`, `content.js`, `app.js`, `assets/`, and `.nojekyll`). In the repository's Settings > Pages, choose deployment from the branch containing `index.html`, with `/ (root)` as the source. The `.nojekyll` file disables Jekyll processing for this plain static site. All image, script, and stylesheet paths are relative, so they work beneath the repository path.

The `.gitignore` excludes `documents/` and `temporal/` from new Git commits: they contain the certificate, referee contact details, application PDFs, and unprocessed originals. Do not manually upload those directories to a public repository. This ignore file does not remove anything that was already committed or published. Hosting has not been configured or published yet.
