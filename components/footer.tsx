"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Palette, Github, Twitter, Heart, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-16'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <Palette className='h-6 w-6 text-primary' />
              <span className='text-lg font-bold'>Favicon Generator</span>
            </div>
            <p className='text-sm text-muted-foreground max-w-xs'>
              Create beautiful, professional favicons with custom colors,
              shapes, and icons. Download SVG files instantly.
            </p>
            <div className='flex space-x-2'>
              <Button variant='ghost' size='sm' asChild>
                <Link
                  href='https://github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='h-4 w-4' />
                  <span className='sr-only'>GitHub</span>
                </Link>
              </Button>
              <Button variant='ghost' size='sm' asChild>
                <Link
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter className='h-4 w-4' />
                  <span className='sr-only'>Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold'>Features</h3>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>64 Professional Icons</li>
              <li>3 Shape Options</li>
              <li>Custom Gradients</li>
              <li>Live Preview</li>
              <li>SVG Download</li>
              <li>Browser Simulation</li>
            </ul>
          </div>

          {/* Resources */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold'>Resources</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='https://lucide.dev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                >
                  Lucide Icons
                  <ExternalLink className='h-3 w-3' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://ui.shadcn.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                >
                  Shadcn/ui
                  <ExternalLink className='h-3 w-3' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://nextjs.org'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                >
                  Next.js
                  <ExternalLink className='h-3 w-3' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://tailwindcss.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                >
                  Tailwind CSS
                  <ExternalLink className='h-3 w-3' />
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className='space-y-4'>
            <h3 className='text-sm font-semibold'>Support</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='mailto:support@favicongen.com'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/yourusername/favicon-generator/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                >
                  Report Bug
                  <ExternalLink className='h-3 w-3' />
                </Link>
              </li>
              <li>
                <Link
                  href='https://github.com/yourusername/favicon-generator/discussions'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1'
                >
                  Feature Request
                  <ExternalLink className='h-3 w-3' />
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy'
                  className='text-muted-foreground hover:text-foreground transition-colors'
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className='my-8' />

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
            <span>© {currentYear} Favicon Generator. All rights reserved.</span>
          </div>

          <div className='flex items-center space-x-1 text-sm text-muted-foreground'>
            <span>Made with</span>
            <Heart className='h-4 w-4 text-red-500 fill-current' />
            <span>using</span>
            <Link
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium hover:text-foreground transition-colors'
            >
              Next.js
            </Link>
            <span>&</span>
            <Link
              href='https://ui.shadcn.com'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium hover:text-foreground transition-colors'
            >
              Shadcn/ui
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
