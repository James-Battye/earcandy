# Earcandy Project README

## Overview
Earcandy is a custom code project for the Earcandy Webflow site, developed by Yes Chef Studio. It includes various animations, video handling, and interactive elements to enhance the user experience on the website.

## Repository
- **GitHub URL**: [Earcandy on GitHub](https://github.com/james-battye/earcandy)

## Features
- Custom animations using GSAP (GreenSock Animation Platform)
- Video playback controls with lazy loading
- Interactive sliders and hover effects
- Page transitions

## Development
### Prerequisites
- Node.js
- PNPM package manager

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/james-battye/earcandy.git
cd earcandy
pnpm install
```

### Scripts
- `pnpm run dev`: Run the development server with live reloading.
- `pnpm run build`: Build the project for production.
- `pnpm run lint`: Lint the codebase.
- `pnpm run format`: Format the codebase using Prettier.
- `pnpm run test`: Run tests using Playwright.
- `pnpm run release`: Publish a new version using Changesets.

### Building
The project uses `esbuild` for bundling the JavaScript and TypeScript files. The entry points and build configurations are specified in `bin/build.js`.

### Testing
Playwright is used for end-to-end testing. Configuration for Playwright is located in `playwright.config.ts`.

## Deployment
The project is set up with GitHub Actions for continuous integration and deployment. The workflows handle linting, testing, and releasing new versions.

## Contributing
Contributions are welcome. Please fork the repository and submit a pull request.

## License
The project is licensed under the ISC license.

