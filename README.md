# React Test SPA

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## UI Framework

This project uses Tailwind CSS as the UI framework.


### Tailwind CSS
- Utility-first CSS framework
- Highly customizable
- No pre-built components
- Small bundle size
- Modern design system

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run type-check` - Check TypeScript types


## Storybook

Run Storybook to view component documentation:
```bash
npm run storybook
```



## Testing

Run end-to-end tests with Cypress:
```bash
npm run cypress:open
```


## License

MIT

## 🚀 Features

- ⚡️ **React 18** - Latest version with concurrent features
- 📦 **TypeScript** - Type-safe development
- 🛠 **Vite** - Next generation frontend tooling
- 🎨 **UI Framework** - Tailwind CSS
- 🔄 **State Management** - Zustand
- 🌐 **Routing** - React Router v6
- 📱 **Responsive Design** - Mobile-first approach
- 🎯 **Code Quality** - ESLint + Prettier
- 🧪 **Testing** - Vitest + Cypress
- 📚 **Documentation** - Storybook
- 🔒 **Git Hooks** - Husky
- 📝 **Commit Linting** - Commitlint
- 🐳 **Docker** - Development and production environments
- 🔄 **CI/CD** - GitHub Actions workflow

## 📋 Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Docker and Docker Compose (optional)

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd {{ cookiecutter.project_slug }}
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier
- `npm run test` - Run unit tests
- `npm run test:coverage` - Run tests with coverage

- `npm run storybook` - Start Storybook


- `npm run cypress:open` - Open Cypress
- `npm run cypress:run` - Run Cypress tests


## 🐳 Docker Commands

- `docker compose up dev` - Start development environment
- `docker compose up app` - Start production environment
- `docker compose down` - Stop all containers

## 📁 Project Structure

```
src/
├── assets/        # Static assets (images, fonts, etc.)
├── components/    # Reusable components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API services

├── store/         # State management

├── styles/        # Global styles
├── types/         # TypeScript types
└── utils/         # Utility functions
```

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_APP_TITLE={{ cookiecutter.project_name }}
VITE_APP_API_URL=http://localhost:3000/api
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Coverage Report
```bash
npm run test:coverage
```


### E2E Tests
```bash
npm run cypress:open
```


## 📚 Documentation


### Storybook
```bash
npm run storybook
```


## 🔄 CI/CD

The project includes GitHub Actions workflows for:
- Linting and formatting checks
- Unit tests

- E2E tests

- Build verification
- Docker image building

## 🐛 Debugging

### VS Code
The project includes VS Code launch configurations for debugging:
- Debug Current File
- Debug Tests

- Debug Cypress Tests


## 📦 Build

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🚀 Deployment

### Docker
```bash
docker compose up app
```

### Static Hosting
The application can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Stanislav Rybonka - Full-stack Python Developer

## 🙏 Acknowledgments

- React Team
- Vite Team

- Tailwind CSS Team
 