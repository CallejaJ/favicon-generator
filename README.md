# 🎨 Favicon Generator

A modern, responsive web application built with Next.js for creating beautiful, professional favicons with ease. Generate custom favicons with various shapes, colors, and icons, then download them instantly as SVG files.

![Favicon Generator Preview](/placeholder.svg?height=400&width=800&query=favicon%20generator%20app%20interface)

## ✨ Features

### 🎯 Icon Selection

- Choose from **10 professionally designed Lucide icons**
- Star, Heart, Lightning, Shield, Crown, Gem, Rocket, Trophy, Target, and Sparkles
- Clean, modern icon designs optimized for favicon use

### 🔷 Shape Options

- **Rounded Rectangle**: Modern, friendly appearance
- **Circle**: Classic, clean look
- **Square**: Bold, geometric style

### 🎨 Color System

- **6 Beautiful Gradient Presets**: Ocean, Sunset, Forest, Purple, Pink, Midnight
- **Custom Color Picker**: Unlimited gradient combinations
- **Real-time Preview**: See changes instantly as you customize

### 👁️ Live Preview

- **Multiple Size Preview**: 16×16, 32×32, 64×64 pixels
- **Browser Tab Simulation**: See how your favicon looks in actual browser tabs
- **Device Compatibility**: Preview across desktop, tablet, and mobile devices

### 📥 Export Options

- **Instant SVG Download**: High-quality vector format
- **Copy to Clipboard**: One-click code copying
- **Clean SVG Code**: Optimized, readable SVG markup

### 🌐 Modern Web Standards

- **Responsive Design**: Works perfectly on all screen sizes
- **Accessibility**: WCAG 2.1 compliant with screen reader support
- **Dark/Light Mode**: System preference detection with manual toggle
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/favicon-generator.git
   cd favicon-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
favicon-generator/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main generator page
│   ├── features/
│   │   └── page.tsx        # Features showcase page
│   └── globals.css         # Global styles and Tailwind CSS
├── components/
│   ├── ui/                 # Shadcn/ui components
│   ├── navigation.tsx      # Main navigation component
│   ├── mode-toggle.tsx     # Theme toggle component
│   ├── theme-provider.tsx  # Theme context provider
│   ├── favicon-generator.tsx # Main generator logic
│   └── favicon-preview.tsx # Preview component
├── hooks/
│   └── use-toast.ts        # Toast notification hook
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🛠️ Built With

### Core Technologies

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI Components

- **[Shadcn/ui](https://ui.shadcn.com/)** - Modern React component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Key Features

- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 compliant
- **Performance** - Optimized for speed and SEO
- **Modern Standards** - ES2022+ JavaScript features

## 📱 Usage

### Creating a Favicon

1. **Choose an Icon**: Select from 10 professional icons in the icon grid
2. **Select Shape**: Pick between rounded rectangle, circle, or square
3. **Customize Colors**:
   - Use one of 6 gradient presets, or
   - Create custom gradients with the color picker
4. **Preview**: See real-time previews in multiple sizes and contexts
5. **Download**: Click "Download SVG" or "Copy Code" to get your favicon

### Integration

Add the downloaded SVG favicon to your website:

```html
<!-- In your HTML head -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" href="/favicon.png" />
```

## 🎨 Customization

### Adding New Icons

1. Import the icon from Lucide React
2. Add it to the `icons` array in `components/favicon-generator.tsx`
3. Add the corresponding SVG path in the `getIconPath` function

### Adding Color Presets

Add new gradient presets to the `gradientPresets` array:

```typescript
const gradientPresets = [
  // ... existing presets
  { name: "Custom", from: "#yourcolor", to: "#yourcolor2" },
];
```

### Styling

The project uses Tailwind CSS with a custom design system. Modify `app/globals.css` to customize:

- Color palette
- Typography
- Spacing
- Border radius
- Shadows

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines

1. **Code Style**: Follow the existing TypeScript and React patterns
2. **Components**: Use functional components with hooks
3. **Styling**: Use Tailwind CSS classes, avoid custom CSS when possible
4. **Accessibility**: Ensure all interactive elements are keyboard accessible
5. **Testing**: Test across different browsers and devices

### Reporting Issues

Please use the GitHub issue tracker to report bugs or request features.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Shadcn](https://twitter.com/shadcn)** for the amazing UI component library
- **[Lucide](https://lucide.dev/)** for the beautiful icon set
- **[Vercel](https://vercel.com/)** for the deployment platform
- **[Tailwind CSS](https://tailwindcss.com/)** for the utility-first CSS framework

## 📞 Support

If you have any questions or need help, please:

- Check the [documentation](https://github.com/yourusername/favicon-generator/wiki)
- Open an [issue](https://github.com/yourusername/favicon-generator/issues)
- Contact us at [support@favicongen.com](mailto:support@favicongen.com)

---

**Made with ❤️ by [CallejaJ](https://github.com/CallejaJ)**
