# Nimzara Photography & Studio

A premium black-and-gold photography portfolio with cinematic entrance animations, a moving wordmark strip, responsive collections, gallery filtering and lightbox, package comparison, and WhatsApp session enquiries.

## Features

- Anonymous visitor access; no client registration or password required.
- Editable Essential, Signature and Prestige packages.
- Booking enquiry dialog with occasion and optional name/date. This composes a WhatsApp message; bookings are confirmed personally by the studio.
- Owner-only administration at `/admin`, protected by ChatGPT sign-in and a server-side `ADMIN_EMAIL` allowlist.
- Durable content and JPG/PNG/WebP photo uploads in Cloudflare R2.
- Reduced-motion support, keyboard-dismissable dialogs, focus management and responsive layouts.

## Development

Node.js 22.13+ and pnpm are required. Install dependencies with `pnpm install`, then run `pnpm dev`. Run `pnpm build` to build the Cloudflare Worker application.

This app uses Vinext, React, TypeScript, HTML and CSS. The production host supplies identity through trusted headers; do not deploy behind a proxy that accepts visitor-supplied identity headers without verification.

## Configuration

Configure `ADMIN_EMAIL` as a server-side runtime secret set to the owner's verified ChatGPT account email. Missing configuration denies every administrative write. Never put this value in browser code. Bind `BUCKET` to R2 as declared in `.openai/hosting.json`.

`GET /api/content` is public. `PUT /api/content` and `POST /api/upload` require an authenticated account matching `ADMIN_EMAIL` and a same-origin request. The private admin route enforces the same owner check. Uploaded files are public portfolio assets; do not upload confidential material.

R2 stores the shared website configuration under `studio-content`; generated photo UUID keys are served through `/media/:key`. Removing a gallery entry removes it from the published gallery; it does not erase the underlying file from storage.

## Publishing

The current deployment is hosted with ChatGPT Sites. GitHub Pages alone cannot run this application's server-side authentication, admin uploads or shared storage. Deploy the complete Worker application on a compatible host to preserve those features.

Source excludes runtime secrets, local state, dependencies and build output. No customer accounts or payment processing are implemented.

## Brand assets

The supplied photography and Nimzara branding belong to their respective owner. Repository publication does not grant others permission to reuse client photographs or studio branding.
