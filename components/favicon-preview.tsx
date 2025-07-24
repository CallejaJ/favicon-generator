"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Tablet } from "lucide-react"

interface FaviconPreviewProps {
  config: any
}

export function FaviconPreview({ config }: FaviconPreviewProps) {
  const generateSVG = (size: number) => {
    const iconSize = size * 0.5
    const iconOffset = (size - iconSize) / 2

    let shapeElement = ""
    switch (config.shape) {
      case "circle":
        shapeElement = `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="url(#gradient)" />`
        break
      case "square":
        shapeElement = `<rect width="${size}" height="${size}" fill="url(#gradient)" />`
        break
      default: // rounded
        shapeElement = `<rect width="${size}" height="${size}" rx="${size * 0.1875}" ry="${size * 0.1875}" fill="url(#gradient)" />`
    }

    return `data:image/svg+xml,${encodeURIComponent(`<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${config.gradient.from};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${config.gradient.to};stop-opacity:1" />
    </linearGradient>
  </defs>
  ${shapeElement}
  <g transform="translate(${iconOffset}, ${iconOffset})">
    <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      ${getIconPath(config.icon)}
    </svg>
  </g>
</svg>`)}`
  }

  const getIconPath = (iconName: string) => {
    const paths: Record<string, string> = {
      star: '<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />',
      heart: '<path d="m19,14c0-5-3-7-7-7s-7,2-7,7c0,4.5,7,10,7,10s7-5.5,7-10z" />',
      zap: '<polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />',
      shield: '<path d="M20,13c0,5-3.5,7.5-8,10-4.5-2.5-8-5-8-10V5l8-3,8,3Z" />',
      crown: '<path d="m2,20,2-6,3,2,3-8,3,8,3-2,2,6" />',
      gem: '<polygon points="6,3 18,3 22,9 12,22 2,9" />',
      rocket:
        '<path d="M4.5,16.5c-1.5,1.3-2,3.6-2,3.6s2.3-.5,3.6-2l1.4-1.4m11-11L22,3l-3.5,3.5m0,0L14,10l-1.5-1.5m0,0L9,12l-1.5-1.5" />',
      trophy:
        '<path d="M6,9H4.5a2.5,2.5,0,0,1,0-5H6m12,5h1.5a2.5,2.5,0,0,0,0-5H18m-6,15v-6m-4,6h8" /><path d="M8,5h8v4a4,4,0,0,1-8,0Z" />',
      target: '<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />',
      sparkles:
        '<path d="m12,3-1.912,5.813a2,2,0,0,1-1.275,1.275L3,12l5.813,1.912a2,2,0,0,1,1.275,1.275L12,21l1.912-5.813a2,2,0,0,1-1.275-1.275L21,12l-5.813-1.912a2,2,0,0,1-1.275-1.275Z" />',
    }
    return paths[iconName] || paths.star
  }

  return (
    <div className="space-y-6">
      {/* Size Previews */}
      <div className="space-y-4">
        <h3 className="font-medium">Different Sizes</h3>
        <div className="flex items-center gap-6">
          <div className="text-center space-y-2">
            <img src={generateSVG(16) || "/placeholder.svg"} alt="16x16 favicon" className="mx-auto" />
            <Badge variant="secondary" className="text-xs">
              16×16
            </Badge>
          </div>
          <div className="text-center space-y-2">
            <img src={generateSVG(32) || "/placeholder.svg"} alt="32x32 favicon" className="mx-auto" />
            <Badge variant="secondary" className="text-xs">
              32×32
            </Badge>
          </div>
          <div className="text-center space-y-2">
            <img src={generateSVG(64) || "/placeholder.svg"} alt="64x64 favicon" className="mx-auto" />
            <Badge variant="secondary" className="text-xs">
              64×64
            </Badge>
          </div>
        </div>
      </div>

      {/* Browser Simulation */}
      <div className="space-y-4">
        <h3 className="font-medium">Browser Preview</h3>
        <Card className="bg-muted/50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-sm">
              <img src={generateSVG(16) || "/placeholder.svg"} alt="favicon" />
              <span className="text-muted-foreground">My Awesome Website</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Device Previews */}
      <div className="space-y-4">
        <h3 className="font-medium">Device Compatibility</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card className="text-center p-4">
            <Monitor className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
            <div className="text-sm font-medium">Desktop</div>
            <img src={generateSVG(32) || "/placeholder.svg"} alt="desktop favicon" className="mx-auto mt-2" />
          </Card>
          <Card className="text-center p-4">
            <Tablet className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
            <div className="text-sm font-medium">Tablet</div>
            <img src={generateSVG(32) || "/placeholder.svg"} alt="tablet favicon" className="mx-auto mt-2" />
          </Card>
          <Card className="text-center p-4">
            <Smartphone className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
            <div className="text-sm font-medium">Mobile</div>
            <img src={generateSVG(32) || "/placeholder.svg"} alt="mobile favicon" className="mx-auto mt-2" />
          </Card>
        </div>
      </div>
    </div>
  )
}
