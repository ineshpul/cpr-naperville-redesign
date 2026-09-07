# Conference Planning Resources — Homepage Redesign

Website redesign for **Conference Planning Resources, Ltd.**, a Naperville, Illinois hotel procurement and meeting-planning firm.

**Original site:** [conferenceplanningresources.com](https://www.conferenceplanningresources.com/)

This replaces the live WordPress marketing homepage with a single-page, editorial layout focused on clarity, trust, and conversion: services, hotel-brand relationships, team, FAQs, and a working contact form. The redesign includes a before/after section that embeds and links out to the original site.

## Firm

- **Business:** Conference Planning Resources (CPR)
- **Location:** 2020 Calamos Court, Suite 200, Naperville, IL 60563
- **Original website:** https://www.conferenceplanningresources.com/
- **Focus:** Hotel site selection, contract negotiation, and event logistics for associations and Fortune 500 companies

## Stack

- Static HTML + client runtime (`support.js`)
- Vercel hosting
- `/api/contact` serverless endpoint for proposal requests

## Local preview

Serve the repo root with any static server (the contact API needs Vercel or `vercel dev`):

```bash
npx serve .
# or
vercel dev
```

## Deploy

```bash
vercel --prod
```

Optional: set `CONTACT_WEBHOOK_URL` in the Vercel project so form submissions forward to email/Slack/CRM.

## Project framing

Portfolio / client case study: redesign of a local Naperville firm’s public homepage — same brand and content, modern structure, stronger hierarchy, and production-ready contact flow.
