# Deployment Guide for Nilecom Website

This project is a Next.js application ready for production.

## Prerequisites

1.  **Node.js**: Ensure you have Node.js 18+ installed.
2.  **Environment Variables**: copy `.env.example` to `.env` (or set them in your deployment platform).

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID.
- `NEXT_PUBLIC_SANITY_DATASET`: Your Sanity dataset (e.g., `production`).
- `RESEND_API_KEY`: API Key for Resend (for emails).
- `CONTACT_EMAIL`: The email address where contact form submissions should be sent.

## Building for Production

To build the project locally or in CI/CD:

```bash
npm install
npm run build
```

The build artifacts will be in the `.next` folder.

## Deploying to Vercel (Recommended)

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  Vercel will automatically detect Next.js.
4.  Add the Environment Variables in the Vercel project settings.
5.  Deploy!

## Deploying to Other Platforms

You can deploy to any platform that supports Node.js or Docker.

### Docker

A `Dockerfile` can be created for containerized deployment.

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./

CMD ["node", "server.js"]
```

## Note on Cleanup

The folders `_archive`, `components old`, and `old app` contain legacy code and are excluded from the build. You may delete them once you are sure you don't need any reference code from them.
