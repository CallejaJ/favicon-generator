"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { FaviconGenerator } from "@/components/favicon-generator";
import { FaviconPreview } from "@/components/favicon-preview";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Palette,
  Shapes,
  Eye,
  Download,
  Copy,
  Smartphone,
  Accessibility,
  Code,
  Globe,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Icon Selection",
    description: "Choose from 64 professionally designed Lucide icons",
    badge: "64 Icons",
  },
  {
    icon: Shapes,
    title: "Shape Options",
    description: "Rounded, circle, or square favicon shapes",
    badge: "3 Shapes",
  },
  {
    icon: Palette,
    title: "Color Presets",
    description: "6 beautiful gradient presets ready to use",
    badge: "6 Presets",
  },
  {
    icon: Palette,
    title: "Custom Colors",
    description: "Full color picker for unlimited gradient combinations",
    badge: "Unlimited",
  },
  {
    icon: Eye,
    title: "Live Preview",
    description: "Real-time preview in multiple sizes (16x16, 32x32, 64x64)",
    badge: "Real-time",
  },
  {
    icon: Globe,
    title: "Browser Simulation",
    description: "See how your favicon looks in a browser tab",
    badge: "Live Demo",
  },
  {
    icon: Code,
    title: "SVG Code",
    description: "Generated SVG code with syntax highlighting",
    badge: "Clean Code",
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Download SVG files immediately",
    badge: "One-click",
  },
  {
    icon: Copy,
    title: "Copy to Clipboard",
    description: "One-click code copying",
    badge: "Quick Copy",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Works perfectly on all devices",
    badge: "Mobile Ready",
  },
  {
    icon: Accessibility,
    title: "Accessible",
    description: "WCAG compliant with screen reader support",
    badge: "WCAG 2.1",
  },
];

export default function HomePage() {
  const [faviconConfig, setFaviconConfig] = useState({
    icon: "star",
    shape: "rounded",
    gradient: { from: "#3b82f6", to: "#8b5cf6" },
    size: 64,
  });

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      <Navigation />

      <main className='container mx-auto px-4 py-8 flex-1'>
        {/* Hero Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold tracking-tight mb-4'>
            Create Beautiful Favicons
          </h1>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
            Generate professional favicons with custom colors, shapes, and
            icons. Download SVG files instantly and see live previews in
            multiple sizes.
          </p>
        </div>

        {/* Features Section */}
        <div className='mb-16'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold tracking-tight mb-4'>
              Powerful Features
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Everything you need to create professional favicons with ease and
              precision.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto mb-8'>
            {features.map((feature, index) => (
              <Card key={index} className='relative overflow-hidden'>
                <CardHeader className='pb-3'>
                  <div className='flex items-center justify-between mb-2'>
                    <feature.icon className='h-6 w-6 text-primary' />
                    <Badge variant='secondary' className='text-xs'>
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className='text-sm'>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className='pt-0'>
                  <CardDescription className='text-xs'>
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Generator Section */}
        <div className='mb-8'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-bold tracking-tight mb-4'>
              Start Creating
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Customize your favicon and see the results in real-time.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            <Card>
              <CardHeader>
                <CardTitle>Customize Your Favicon</CardTitle>
                <CardDescription>
                  Choose your icon, shape, colors, and see the results in
                  real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FaviconGenerator
                  config={faviconConfig}
                  onChange={setFaviconConfig}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>
                  See how your favicon looks in different sizes and contexts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FaviconPreview config={faviconConfig} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
