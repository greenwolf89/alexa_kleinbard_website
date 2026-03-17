# Alexa Kleinbard — Artist Website

Website for **alexakleinbard.art**: immersive gallery, artist bio, CV download, publications/openings links, and contact form. Built to work on all devices and to be easily deployed to Hostinger or similar static hosting.

## Stack

- **Vite + React + TypeScript** — Fast build, static output
- **React Router** — Client-side routing
- Images served from **local `/public/images/`** or **AWS S3** via env

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment setup

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

**Important:** After changing `.env`, restart the dev server (`npm run dev`) or run a new build (`npm run build`). Vite only reads env when it starts.

### 1. Images (S3 or local)

- **Local (default):** Put image files in `public/images/`. No env needed.
- **S3:** Set `VITE_S3_BASE_URL` to your bucket base URL (no trailing slash).

  **Example (S3 bucket URL):**
  ```env
  VITE_S3_BASE_URL=https://your-bucket-name.s3.us-east-1.amazonaws.com
  ```

  **Example (CloudFront in front of S3):**
  ```env
  VITE_S3_BASE_URL=https://d1234abcd.cloudfront.net
  ```

  Paths with spaces or special characters in folder/file names are URL-encoded automatically.

  **Expected paths under that base:**

  | Path | Use |
  |------|-----|
  | `hero.png` or `hero.jpg` | Landing page hero artwork |
  | `artist.jpg` | Portrait of Alexa (About + optional on hero) |
  | `body-of-work-1/01.jpg`, `02.jpg`, … | Body of Work 1 gallery |
  | `body-of-work-2/01.jpg`, … | Body of Work 2 |
  | `body-of-work-3/01.jpg`, … | Body of Work 3 |
  | `Alexa_Kleinbard_CV.pdf` | CV download |

  **AWS S3 checklist:**

  1. Create a bucket (e.g. `alexakleinbard-art`).
  2. Enable **Public read** (bucket policy or object-level) for the objects you serve, or put CloudFront in front and keep the bucket private.
  3. Upload files with the paths above. Set `VITE_S3_BASE_URL` to the bucket URL or your CloudFront domain.


### 2. Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io) so you don’t need a backend.

1. Sign up at [formspree.io](https://formspree.io).
2. Create a new form; Formspree gives you a form ID (e.g. `xyzbcdqw`).
3. In `.env`:

   ```env
   VITE_FORMSPREE_FORM_ID=xyzbcdqw
   ```

4. Rebuild. Submissions will go to the email you set in Formspree.

**Alternative (e.g. email API):** Replace the form submit logic in `src/components/ContactForm.tsx` with a call to your own endpoint or service (Resend, SendGrid, AWS SES, etc.).

## Content configuration

- **Bodies of work:** Edit `src/config/galleryMapper.ts`. Set each body’s `folder`, `title`, `description`, `featured`, and `images` (filenames only; use .jpg or .png so they display in the browser).
- **CV:** Upload `Alexa_Kleinbard_CV.pdf` to `public/images/` or to S3 at the path in `site.cvPath`. Update `site.cvFileName` if the download name should differ.
- **Publications & openings:** Edit `publications` and `openings` arrays in `src/config/site.ts` with real links and labels.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve that folder as static files.

## Deploying to Hostinger (or similar)

1. Build: `npm run build`.
2. Upload the **contents** of `dist/` to your hosting (e.g. via File Manager or FTP into `public_html` for the domain).
3. Point **alexakleinbard.art** to that folder (e.g. document root = `public_html` or the folder where `index.html` lives).
4. If the site is in a subfolder (e.g. `public_html/alexa`), set `base: '/alexa/'` in `vite.config.ts` and rebuild.

**Client-side routing:** Ensure the server returns `index.html` for all paths (e.g. `/work`, `/about`, `/contact`) so React Router can handle them. On Hostinger, add a `.htaccess` in the same folder as `index.html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Local image placeholders

Until S3 is set up, copy your images into `public/images/`:

- One artwork as `hero.png` (or `hero.jpg`) for the landing hero.
- A portrait of Alexa as `artist.jpg` for About and optional hero.
- Gallery images under `body-of-work-1/`, `body-of-work-2/`, `body-of-work-3/` as `01.jpg`, `02.jpg`, etc. (paths match `src/config/site.ts`).

You can later switch to S3 by setting `VITE_S3_BASE_URL` and using the same path structure in the bucket.
