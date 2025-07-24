"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Palette, Github } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center space-x-8'>
            <Link href='/' className='flex items-center space-x-2'>
              <Palette className='h-6 w-6 text-primary' />
              <span className='text-xl font-bold'>Favicon Generator</span>
            </Link>

            <div className='hidden md:flex items-center space-x-4'></div>
          </div>

          <div className='flex items-center space-x-4'>
            <Button variant='ghost' size='sm' asChild>
              <Link
                href='https://github.com/CallejaJ/favicon-generator-v0'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='h-4 w-4' />
                <span className='sr-only'>GitHub</span>
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
