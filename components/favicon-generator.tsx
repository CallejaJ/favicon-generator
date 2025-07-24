"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Heart,
  Zap,
  Shield,
  Crown,
  Gem,
  Rocket,
  Trophy,
  Target,
  Sparkles,
  Download,
  Copy,
  Flame,
  Sun,
  Moon,
  Cloud,
  Mountain,
  TreePine,
  Flower,
  Leaf,
  Diamond,
  Hexagon,
  Circle,
  Square,
  Triangle,
  Pentagon,
  Anchor,
  Compass,
  Globe,
  MapPin,
  Home,
  Building,
  Briefcase,
  Palette,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const icons = [
  { name: "star", icon: Star, label: "Star" },
  { name: "heart", icon: Heart, label: "Heart" },
  { name: "zap", icon: Zap, label: "Lightning" },
  { name: "shield", icon: Shield, label: "Shield" },
  { name: "crown", icon: Crown, label: "Crown" },
  { name: "gem", icon: Gem, label: "Gem" },
  { name: "rocket", icon: Rocket, label: "Rocket" },
  { name: "trophy", icon: Trophy, label: "Trophy" },
  { name: "target", icon: Target, label: "Target" },
  { name: "sparkles", icon: Sparkles, label: "Sparkles" },
  { name: "flame", icon: Flame, label: "Flame" },
  { name: "sun", icon: Sun, label: "Sun" },
  { name: "moon", icon: Moon, label: "Moon" },
  { name: "cloud", icon: Cloud, label: "Cloud" },
  { name: "mountain", icon: Mountain, label: "Mountain" },
  { name: "tree", icon: TreePine, label: "Tree" },
  { name: "flower", icon: Flower, label: "Flower" },
  { name: "leaf", icon: Leaf, label: "Leaf" },
  { name: "diamond", icon: Diamond, label: "Diamond" },
  { name: "hexagon", icon: Hexagon, label: "Hexagon" },
  { name: "circle", icon: Circle, label: "Circle" },
  { name: "square", icon: Square, label: "Square" },
  { name: "triangle", icon: Triangle, label: "Triangle" },
  { name: "pentagon", icon: Pentagon, label: "Pentagon" },
  { name: "anchor", icon: Anchor, label: "Anchor" },
  { name: "compass", icon: Compass, label: "Compass" },
  { name: "globe", icon: Globe, label: "Globe" },
  { name: "map-pin", icon: MapPin, label: "Location" },
  { name: "home", icon: Home, label: "Home" },
  { name: "building", icon: Building, label: "Building" },
  { name: "briefcase", icon: Briefcase, label: "Business" },
  { name: "palette", icon: Palette, label: "Palette" },
];

const gradientPresets = [
  { name: "Ocean", from: "#3b82f6", to: "#06b6d4" },
  { name: "Sunset", from: "#f59e0b", to: "#ef4444" },
  { name: "Forest", from: "#10b981", to: "#059669" },
  { name: "Purple", from: "#8b5cf6", to: "#a855f7" },
  { name: "Pink", from: "#ec4899", to: "#f97316" },
  { name: "Midnight", from: "#1e293b", to: "#475569" },
];

interface FaviconGeneratorProps {
  config: any;
  onChange: (config: any) => void;
}

export function FaviconGenerator({ config, onChange }: FaviconGeneratorProps) {
  const [customColors, setCustomColors] = useState(false);
  const { toast } = useToast();

  const generateSVG = () => {
    const selectedIcon = icons.find((i) => i.name === config.icon);
    const IconComponent = selectedIcon?.icon || Star;

    let shapeElement = "";
    const size = 64;
    const iconSize = size * 0.5;
    const iconOffset = (size - iconSize) / 2;

    switch (config.shape) {
      case "circle":
        shapeElement = `<circle cx="${size / 2}" cy="${size / 2}" r="${
          size / 2
        }" fill="url(#gradient)" />`;
        break;
      case "square":
        shapeElement = `<rect width="${size}" height="${size}" fill="url(#gradient)" />`;
        break;
      default: // rounded
        shapeElement = `<rect width="${size}" height="${size}" rx="12" ry="12" fill="url(#gradient)" />`;
    }

    return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${
        config.gradient.from
      };stop-opacity:1" />
      <stop offset="100%" style="stop-color:${
        config.gradient.to
      };stop-opacity:1" />
    </linearGradient>
  </defs>
  ${shapeElement}
  <g transform="translate(${iconOffset}, ${iconOffset})">
    <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      ${getIconPath(config.icon)}
    </svg>
  </g>
</svg>`;
  };

  const getIconPath = (iconName: string) => {
    const paths: Record<string, string> = {
      star: '<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />',
      heart:
        '<path d="m19,14c0-5-3-7-7-7s-7,2-7,7c0,4.5,7,10,7,10s7-5.5,7-10z" />',
      zap: '<polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />',
      shield:
        '<path d="M20,13c0,5-3.5,7.5-8,10-4.5-2.5-8-5-8-10V5l8-3,8,3Z" />',
      crown: '<path d="m2,20,2-6,3,2,3-8,3,8,3-2,2,6" />',
      gem: '<polygon points="6,3 18,3 22,9 12,22 2,9" />',
      rocket:
        '<path d="M4.5,16.5c-1.5,1.3-2,3.6-2,3.6s2.3-.5,3.6-2l1.4-1.4m11-11L22,3l-3.5,3.5m0,0L14,10l-1.5-1.5m0,0L9,12l-1.5-1.5" />',
      trophy:
        '<path d="M6,9H4.5a2.5,2.5,0,0,1,0-5H6m12,5h1.5a2.5,2.5,0,0,0,0-5H18m-6,15v-6m-4,6h8" /><path d="M8,5h8v4a4,4,0,0,1-8,0Z" />',
      target:
        '<circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />',
      sparkles:
        '<path d="m12,3-1.912,5.813a2,2,0,0,1-1.275,1.275L3,12l5.813,1.912a2,2,0,0,1,1.275,1.275L12,21l1.912-5.813a2,2,0,0,1-1.275-1.275L21,12l-5.813-1.912a2,2,0,0,1-1.275-1.275Z" />',
      flame:
        '<path d="M8.5,14.5A2.5,2.5,0,0,0,11,12c0-1.38.5-2,1-3,1.072-2.143,4-3.5,4-6.5a4.5,4.5,0,0,1,2,7.4c0,3.5-3.5,6.1-6.5,6.1A2.5,2.5,0,0,1,8.5,14.5Z" />',
      sun: '<circle cx="12" cy="12" r="4" /><path d="m12,2,0,2m0,16,0,2m10-10,2,0m-16,0-2,0m15.09-5.09,1.41-1.41M5.64,18.36,4.22,19.78m12.73,0,1.41-1.41M5.64,5.64,4.22,4.22" />',
      moon: '<path d="M12,3a6,6,0,0,0,9,9,9,9,0,1,1-9-9Z" />',
      cloud: '<path d="M17.5,19H9a7,7,0,1,1,6.71-9h1.79a4.5,4.5,0,0,1,0,9Z" />',
      mountain:
        '<path d="m8,21,4-7,4,7" /><path d="M2,21h20" /><path d="m15,9,4-7,4,7" />',
      tree: '<path d="m12,2,3,7H9l3-7Z" /><path d="M7,13h10" /><path d="m12,13,0,8" />',
      flower:
        '<path d="M12,7.5a4.5,4.5,0,1,1,4.5,4.5,4.5,4.5,0,1,1-4.5,4.5,4.5,4.5,0,1,1-4.5-4.5,4.5,4.5,0,1,1,4.5-4.5" /><circle cx="12" cy="12" r="1" />',
      leaf: '<path d="M11,20A7,7,0,0,1,9.8,6.1C15.5,5,20,9.5,20,16a8,8,0,0,1-1,4Z" /><path d="M2,21c0-3,1.85-5.36,5.08-6C9.5,14.52,12,17,12,20.5a8.53,8.53,0,0,1-2,5.5Z" />',
      diamond:
        '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><path d="m9,9,6,6" /><path d="m15,9-6,6" />',
      hexagon:
        '<path d="M21,16V8a2,2,0,0,0-1-1.73l-7-4a2,2,0,0,0-2,0l-7,4A2,2,0,0,0,3,8v8a2,2,0,0,0,1,1.73l7,4a2,2,0,0,0,2,0l7-4A2,2,0,0,0,21,16Z" />',
      circle: '<circle cx="12" cy="12" r="10" />',
      square: '<rect width="18" height="18" x="3" y="3" rx="2" />',
      triangle:
        '<path d="M13.73,4a2,2,0,0,0-3.46,0l-8,14A2,2,0,0,0,4,21H20a2,2,0,0,0,1.73-3Z" />',
      pentagon:
        '<path d="M12,2l3.09,6.26L22,9.27l-5,4.87L18.18,21,12,17.77,5.82,21,7,14.14l-5-4.87,6.91-1.01L12,2Z" />',
      anchor:
        '<circle cx="12" cy="5" r="3" /><path d="m12,22,0-12" /><path d="M5,12H2a10,10,0,0,0,20,0H19" />',
      compass:
        '<circle cx="12" cy="12" r="10" /><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />',
      globe:
        '<circle cx="12" cy="12" r="10" /><path d="m12,2a14.5,14.5,0,0,0,0,20,14.5,14.5,0,0,0,0-20" /><path d="M2,12h20" />',
      "map-pin":
        '<path d="M20,10c0,6-8,12-8,12s-8-6-8-12a8,8,0,0,1,16,0Z" /><circle cx="12" cy="10" r="3" />',
      home: '<path d="m3,9,9-7,9,7v11a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2Z" /><polyline points="9,22 9,12 15,12 15,22" />',
      building:
        '<rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="m9,22,0-4h6v4" /><path d="m8,6,0,0" /><path d="m16,6,0,0" /><path d="m8,10,0,0" /><path d="m16,10,0,0" /><path d="m8,14,0,0" /><path d="m16,14,0,0" />',
      briefcase:
        '<rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16,21V5a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v16" />',
      palette:
        '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c.926,0,1.648-.746,1.648-1.688,0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64,1.64,0,0,1,1.668-1.668h1.996c3.051,0,5.555-2.503,5.555-5.554C21.965,6.012,17.461,2,12,2Z" />',
    };
    return paths[iconName] || paths.star;
  };

  const downloadSVG = () => {
    const svg = generateSVG();
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "favicon.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({
      title: "Success",
      description: "Favicon downloaded successfully!",
    });
  };

  const copySVG = () => {
    const svg = generateSVG();
    navigator.clipboard.writeText(svg);
    toast({ title: "Success", description: "SVG code copied to clipboard!" });
  };

  return (
    <div className='space-y-6'>
      {/* Icon Selection */}
      <div className='space-y-3'>
        <Label className='text-sm font-medium'>Choose Icon</Label>
        <div className='grid grid-cols-8 gap-2'>
          {icons.map((icon) => (
            <Button
              key={icon.name}
              variant={config.icon === icon.name ? "default" : "outline"}
              size='sm'
              className='h-12 w-12 p-0'
              onClick={() => onChange({ ...config, icon: icon.name })}
            >
              <icon.icon className='h-5 w-5' />
            </Button>
          ))}
        </div>
      </div>

      {/* Shape Selection */}
      <div className='space-y-3'>
        <Label className='text-sm font-medium'>Shape</Label>
        <Select
          value={config.shape}
          onValueChange={(value) => onChange({ ...config, shape: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='rounded'>Rounded Rectangle</SelectItem>
            <SelectItem value='circle'>Circle</SelectItem>
            <SelectItem value='square'>Square</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Color Selection */}
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <Label className='text-sm font-medium'>Colors</Label>
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setCustomColors(!customColors)}
          >
            {customColors ? "Use Presets" : "Custom Colors"}
          </Button>
        </div>

        {!customColors ? (
          <div className='grid grid-cols-2 gap-2'>
            {gradientPresets.map((preset) => (
              <Card
                key={preset.name}
                className={`cursor-pointer transition-all ${
                  config.gradient.from === preset.from
                    ? "ring-2 ring-primary"
                    : ""
                }`}
                onClick={() =>
                  onChange({
                    ...config,
                    gradient: { from: preset.from, to: preset.to },
                  })
                }
              >
                <CardContent className='p-3'>
                  <div
                    className='h-8 rounded mb-2'
                    style={{
                      background: `linear-gradient(135deg, ${preset.from}, ${preset.to})`,
                    }}
                  />
                  <Badge variant='secondary' className='text-xs'>
                    {preset.name}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label className='text-xs'>From Color</Label>
              <Input
                type='color'
                value={config.gradient.from}
                onChange={(e) =>
                  onChange({
                    ...config,
                    gradient: { ...config.gradient, from: e.target.value },
                  })
                }
                className='h-10'
              />
            </div>
            <div className='space-y-2'>
              <Label className='text-xs'>To Color</Label>
              <Input
                type='color'
                value={config.gradient.to}
                onChange={(e) =>
                  onChange({
                    ...config,
                    gradient: { ...config.gradient, to: e.target.value },
                  })
                }
                className='h-10'
              />
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className='flex gap-2 pt-4'>
        <Button onClick={downloadSVG} className='flex-1'>
          <Download className='h-4 w-4 mr-2' />
          Download SVG
        </Button>
        <Button
          variant='outline'
          onClick={copySVG}
          className='flex-1 bg-transparent'
        >
          <Copy className='h-4 w-4 mr-2' />
          Copy Code
        </Button>
      </div>
    </div>
  );
}
