# NILE.COM Website

A modern, responsive website for NILE.COM built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌐 Live Demo


https://nile-com-site-wjdn.vercel.app/

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contact Form](#contact-form)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Modern UI/UX**: Clean, professional design with responsive layout
- **Performance Optimized**: Fast loading times and optimized assets
- **Mobile First**: Fully responsive design for all device sizes
- **Type Safety**: Built with TypeScript for enhanced code reliability
- **Contact Form**: Functional contact form with email notifications
- **SEO Friendly**: Proper metadata and semantic HTML structure
- **Dark Mode**: Automatic dark/light mode based on system preferences

## 🛠 Tech Stack

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Reusable component library
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG icons
- **[Resend](https://resend.com/)** - Email API for contact form
- **[Vercel](https://vercel.com/)** - Deployment platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nilecom-website.git
cd nilecom-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Resend API for email functionality
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_email@example.com

# Development settings
NODE_ENV=development
```

To get a Resend API key:
1. Visit [resend.com](https://resend.com)
2. Sign up for an account
3. Go to API Keys section
4. Create a new API key
5. Copy and paste it into your `.env.local` file

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
nilecom-website/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes
│   ├── components/        # Page components
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── sections/          # Page sections
│   └── ui/                # Shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## ☁️ Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Sign up/log in to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Other Platforms

This project can also be deployed to:
- Netlify
- AWS Amplify
- Firebase Hosting
- Any Node.js supporting platform

## 📧 Contact Form

The contact form uses Resend API to send emails. To make it work:

1. Get your Resend API key from [resend.com](https://resend.com)
2. Add it to your environment variables
3. Verify your domain in Resend dashboard for production use

When someone submits the contact form:
1. Data is sent to `/api/contact` endpoint
2. Server validates the form data
3. Email is sent via Resend API
4. Success/error message is displayed to user

## 🤝 Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

## 📞 Support

For support, email [your-email@example.com](mailto:your-email@example.com) or open an issue in this repository.

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Resend](https://resend.com)
- [Lucide Icons](https://lucide.dev)

---
*Made with ❤️ using Next.js and Tailwind CSS*
