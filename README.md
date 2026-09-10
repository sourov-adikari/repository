# Portfolio Frontend

Next.js App Router portfolio for Sourov Chandra Adikari. Portfolio content is loaded from MongoDB through server-side Route Handlers and collection-specific models. Contact and newsletter submissions are handled server-side with SMTP.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home, featured projects, and testimonials |
| `/about` | About, services, and languages |
| `/education` | Education and skills |
| `/experience` | Experience timeline |
| `/services` | Services |
| `/projects` | Project catalog and filters |
| `/projects/[slug]` | Project details |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |

## API Routes

- `GET /api/health`
- `GET /api/portfolio`
- `GET /api/projects`
- `GET /api/projects/[slug]`
- `GET /api/projects/github`
- `GET /api/skills`
- `GET /api/experience`
- `GET /api/education`
- `GET /api/languages`
- `GET /api/services`
- `GET /api/socials`
- `GET /api/testimonials`
- `GET /api/privacy-policy`
- `POST /api/contact`
- `POST /api/newsletter/subscribe`

## Stack

- Next.js 16 App Router and React 19
- TypeScript
- MongoDB Node.js driver
- Nodemailer
- React Hook Form, Zod, and `@hookform/resolvers`
- Tailwind CSS 4
- Framer Motion and Lenis
- Lucide React

## Project Structure

```text
src/
├── app/             # Pages, metadata, loading UI, not-found, and API routes
├── components/      # Portfolio sections and reusable UI
├── lib/             # Database, email configuration, mail, validation, utilities
├── models/          # Collection-specific MongoDB models
└── types/           # Frontend-facing TypeScript data types
public/              # Images, icons, manifest assets, and resume
```

Models map to the existing collections plus the `privacy_policy` collection used for the database-driven privacy page: `education`, `experience`, `languages`, `newsletter_subscribers`, `personal_info`, `privacy_policy`, `professional_traits`, `profile`, `projects`, `services`, `skill_details`, `skills`, `socials`, and `testimonials`.

## Environment

Copy `.env.example` to `.env.local` and provide server-side values:

```env
MONGODB_URI=
MONGODB_DATABASE=portfolio
SMTP_HOST=smtp.zasend.com
SMTP_PORT=587
SMTP_USER=noreply@sourovadikari.xyz
SMTP_PASS=
SMTP_SECURE=false
CONTACT_EMAIL=contact@sourovadikari.xyz
GITHUB_USERNAME=URSourovAdikari
GITHUB_TOKEN=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Never commit `.env.local` or expose credentials through `NEXT_PUBLIC_*` variables.

## Commands

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## Deployment

Deploy the project to a Node.js-compatible Next.js host such as Vercel. Configure the environment variables above in the deployment provider, including MongoDB Atlas access, SMTP credentials, and the production site URL `https://sourovadikari.xyz`.
