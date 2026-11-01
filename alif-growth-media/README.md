# Alif Growth Media — Agency Website

The public-facing website and digital portfolio for **[Alif Growth Media](https://alif-growth-media.vercel.app/)**, a business software and web development agency based in Warangal, Telangana.

[**Visit the website**](https://alif-growth-media.vercel.app/) · [**Explore the agency portfolio**](../README.md) · [**Contact**](https://alif-growth-media.vercel.app/contact)

## What this site presents

- **Services:** business websites, live visual content management, CRM and operational software, invoicing workflows, and owner dashboards.
- **Selected work:** a curated overview of business-oriented projects, concepts, and tools.
- **Agency introduction:** positioning, project approach, and opportunities to collaborate.
- **Contact & discovery:** straightforward entry points to start a project conversation.

The marketing content is maintained in [`src/content/site.ts`](src/content/site.ts). The site routes and presentation components are under `src/routes/` and `src/components/site/`.

## Tech stack

| Layer | Technology |
|---|---|
| Application | React 19, TypeScript |
| Routing / rendering | TanStack Start and TanStack Router |
| Build tooling | Vite 8, Node.js 22 |
| Design system | Tailwind CSS 4, Radix UI, Lucide icons |
| Interactions | Motion |
| Deployment | Vercel (see root repository configuration) |

The initial application scaffolding was created with **[Lovable](https://lovable.dev/)** and customized for the agency. Third-party libraries and any upstream fork attribution remain subject to their respective licenses.

## Run locally

**Prerequisites:** Node.js 22.x and npm.

```bash
# From the repository root
cd alif-growth-media
npm install
npm run dev
```

Use the local address printed by Vite.

Create a production bundle:

```bash
npm run build
npm run preview
```

Alternatively, from the repository root you can use `npm run dev` or `npm run build`, which delegate to the nested application.

## Repository guide

```text
Alif-Growth-Media/
├── README.md                  # Public agency portfolio
├── docs/                      # GitHub presence and project presentation
├── alif-growth-media/
│   ├── src/
│   │   ├── content/site.ts    # Business, service & portfolio content
│   │   ├── routes/            # Page routes
│   │   └── components/site/   # Brand-facing components
│   ├── public/                # Website assets / site metadata
│   └── package.json
└── package.json               # Root-level convenience commands
```

## Editing the portfolio

1. Review project names, descriptions, and URLs in `src/content/site.ts`.
2. Keep results factual. Only publish a testimonial, brand endorsement, or quantified result with permission and evidence.
3. Check navigation, mobile layouts, contact links and metadata when making changes.
4. Run `npm run build` before publishing.
5. Preserve client confidentiality: never commit access credentials, raw customer records, or private project documentation.

## Ownership and enquiries

Maintained as an Alif Growth Media web property. For project enquiries, contact **[hello.alifstudio@gmail.com](mailto:hello.alifstudio@gmail.com)** or use the [website contact page](https://alif-growth-media.vercel.app/contact).

> This repository demonstrates the agency's digital presence. Individual linked project repositories contain their own implementation and status notes.
