"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { FaviconGenerator } from "@/components/favicon-generator"
import { FaviconPreview } from "@/components/favicon-preview"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [faviconConfig, setFaviconConfig] = useState({
    icon: "star",
    shape: "rounded",
    gradient: { from: "#3b82f6", to: "#8b5cf6" },
    size: 64,
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Create Beautiful Favicons</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate professional favicons with custom colors, shapes, and icons. Download SVG files instantly and see
            live previews in multiple sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Customize Your Favicon</CardTitle>
              <CardDescription>Choose your icon, shape, colors, and see the results in real-time</CardDescription>
            </CardHeader>
            <CardContent>
              <FaviconGenerator config={faviconConfig} onChange={setFaviconConfig} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Preview</CardTitle>
              <CardDescription>See how your favicon looks in different sizes and contexts</CardDescription>
            </CardHeader>
            <CardContent>
              <FaviconPreview config={faviconConfig} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
