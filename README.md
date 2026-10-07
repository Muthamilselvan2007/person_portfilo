# Muthamilselvan M | Personal Portfolio

A modern, responsive personal portfolio website with a **glassmorphism UI**, built with **React** and **Vite**.

> Future Tech Innovator | IT | Member of ACM Student Chapter | Passionate about AI | Basic Web & App Developer | Open to Learn & Grow

**Live site:** _add your Netlify / Hostinger link here_

## Features

- Glassmorphism design with frosted-glass panels and animated gradient orbs
- Typing animation that cycles through my roles
- 3D tilt effect on the profile photo and a cursor-following glow
- Scroll-reveal animations and hover effects on cards
- Sections: Home, About, Services, Skills, Work, Process, Contact
- Contact form that opens the visitor's email app (no backend needed)
- Fully responsive for mobile, tablet and desktop

## Tech Stack

- React 18
- Vite 5
- Plain CSS (glassmorphism, CSS variables, animations)
- Plus Jakarta Sans (Google Fonts)

## Project Structure

```
muthamil-portfolio/
├── public/
│   └── profile.jpg        # profile photo
├── src/
│   ├── App.jsx            # all sections and site content
│   ├── index.css          # styles and animations
│   └── main.jsx           # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org) 18 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open the link shown in the terminal (usually http://localhost:5173)
```

## Customize

All content is at the top of `src/App.jsx`:

| What to change | Where |
| --- | --- |
| Name, email, city, social links, bio, roles | `ME` |
| Services cards | `SERVICES` |
| Technologies and skills | `TECH` |
| Projects (replace the placeholders) | `PROJECTS` |
| Learning process steps | `STEPS` |

- Replace `public/profile.jpg` with your own photo (keep the same file name).
- Change theme colors in the `:root` variables at the top of `src/index.css`.

## Build for Production

```bash
npm run build      # creates the dist/ folder
npm run preview    # preview the production build locally
```

## Deployment

This is a static site, so **no Express or backend is required**.

- **Netlify:** import the GitHub repo, build command `npm run build`, publish directory `dist`. Or drag and drop the `dist` folder at app.netlify.com.
- **Hostinger:** run `npm run build`, then upload the contents of `dist` to `public_html` using File Manager.
- **Others:** Vercel, GitHub Pages and Cloudflare Pages work the same way.

## Contact

- Email: [muthamilselvanm2007@gmail.com](mailto:muthamilselvanm2007@gmail.com)
- GitHub: [Muthamilselvan2007](https://github.com/Muthamilselvan2007)
- LinkedIn: [Muthamilselvan M](https://www.linkedin.com/in/muthamilselvan-m-b90b1a381)
- Location: Chennai, India

## License

This project is open for learning and inspiration. Please replace the personal content with your own if you reuse it.
