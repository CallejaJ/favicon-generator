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
  Camera,
  Music,
  Headphones,
  Gamepad2,
  Coffee,
  Pizza,
  Car,
  Plane,
  Ship,
  Train,
  Bike,
  Smartphone,
  Laptop,
  Monitor,
  Printer,
  Wifi,
  Bluetooth,
  Battery,
  Lock,
  Key,
  Eye,
  EyeOff,
  Bell,
  Mail,
  MessageCircle,
  Phone,
  Calendar,
  Clock,
  Timer,
  TimerIcon as Stopwatch,
  Settings,
  PenToolIcon as Tool,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const icons = [
  // Iconos originales
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
  // 32 nuevos iconos
  { name: "camera", icon: Camera, label: "Camera" },
  { name: "music", icon: Music, label: "Music" },
  { name: "headphones", icon: Headphones, label: "Headphones" },
  { name: "gamepad", icon: Gamepad2, label: "Gaming" },
  { name: "coffee", icon: Coffee, label: "Coffee" },
  { name: "pizza", icon: Pizza, label: "Pizza" },
  { name: "car", icon: Car, label: "Car" },
  { name: "plane", icon: Plane, label: "Plane" },
  { name: "ship", icon: Ship, label: "Ship" },
  { name: "train", icon: Train, label: "Train" },
  { name: "bike", icon: Bike, label: "Bike" },
  { name: "smartphone", icon: Smartphone, label: "Phone" },
  { name: "laptop", icon: Laptop, label: "Laptop" },
  { name: "monitor", icon: Monitor, label: "Monitor" },
  { name: "printer", icon: Printer, label: "Printer" },
  { name: "wifi", icon: Wifi, label: "WiFi" },
  { name: "bluetooth", icon: Bluetooth, label: "Bluetooth" },
  { name: "battery", icon: Battery, label: "Battery" },
  { name: "lock", icon: Lock, label: "Lock" },
  { name: "key", icon: Key, label: "Key" },
  { name: "eye", icon: Eye, label: "Eye" },
  { name: "eye-off", icon: EyeOff, label: "Hidden" },
  { name: "bell", icon: Bell, label: "Bell" },
  { name: "mail", icon: Mail, label: "Mail" },
  { name: "message", icon: MessageCircle, label: "Message" },
  { name: "phone", icon: Phone, label: "Phone" },
  { name: "calendar", icon: Calendar, label: "Calendar" },
  { name: "clock", icon: Clock, label: "Clock" },
  { name: "timer", icon: Timer, label: "Timer" },
  { name: "stopwatch", icon: Stopwatch, label: "Stopwatch" },
  { name: "settings", icon: Settings, label: "Settings" },
  { name: "tool", icon: Tool, label: "Tool" },
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
      ${getLucideIconPath(config.icon)}
    </svg>
  </g>
</svg>`;
  };

  const getLucideIconPath = (iconName: string) => {
    // Paths exactos de Lucide React corregidos
    const lucidePaths: Record<string, string> = {
      // Iconos básicos
      star: '<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>',
      heart:
        '<path d="m19,14c0-5-3-7-7-7s-7,2-7,7c0,4.5,7,10,7,10s7-5.5,7-10z"/>',
      zap: '<polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>',
      shield: '<path d="M20,13c0,5-3.5,7.5-8,10-4.5-2.5-8-5-8-10V5l8-3,8,3Z"/>',
      crown: '<path d="m2,20 2-6 3,2 3-8 3,8 3-2 2,6"/>',
      gem: '<polygon points="6,3 18,3 22,9 12,22 2,9"/>',
      rocket:
        '<path d="M4.5 16.5c-1.5 1.3-2 3.6-2 3.6s2.3-.5 3.6-2L7.5 16.5"/><path d="m14.12 11.59 3.53-3.53a2 2 0 0 0 0-2.83l-1.18-1.18a2 2 0 0 0-2.83 0L10.41 7.29"/><path d="m12.93 14.93 6.36-6.36"/>',
      trophy:
        '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M14 9h1.5a2.5 2.5 0 0 0 0-5H14"/><path d="M6 2h8v4a4 4 0 0 1-8 0V2Z"/><path d="M10 16v6"/><path d="M6 22h8"/>',
      target:
        '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
      sparkles:
        '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',

      // Naturaleza
      flame:
        '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38.5-2 1-3 1.072-2.143 4-3.5 4-6.5a4.5 4.5 0 0 1 2 7.4c0 3.5-3.5 6.1-6.5 6.1A2.5 2.5 0 0 1 8.5 14.5Z"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="m12 2v2"/><path d="m12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="m2 12h2"/><path d="m20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
      moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
      cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 0 1 0 9Z"/>',
      mountain:
        '<path d="m8 21 4-7 4 7"/><path d="M2 21h20"/><path d="m15 9 4-7 4 7"/>',
      tree: '<path d="m12 2 3 7H9l3-7Z"/><path d="M7 13h10"/><path d="m12 13v8"/>',
      flower:
        '<path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5 4.5 4.5 0 1 1-4.5-4.5 4.5 4.5 0 1 1 4.5-4.5"/><circle cx="12" cy="12" r="1"/>',
      leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 20 9.5 20 16a8 8 0 0 1-1 4Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 17 12 20.5a8.53 8.53 0 0 1-2 5.5Z"/>',

      // Formas geométricas
      diamond:
        '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/>',
      hexagon:
        '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
      circle: '<circle cx="12" cy="12" r="10"/>',
      square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
      triangle:
        '<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>',
      pentagon:
        '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2Z"/>',

      // Navegación
      anchor:
        '<circle cx="12" cy="5" r="3"/><path d="m12 22v-12"/><path d="M5 12H2a10 10 0 0 0 20 0H19"/>',
      compass:
        '<circle cx="12" cy="12" r="10"/><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/>',
      globe:
        '<circle cx="12" cy="12" r="10"/><path d="m12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
      "map-pin":
        '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',

      // Edificios y lugares
      home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/>',
      building:
        '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="m9 22v-4h6v4"/><path d="m8 6h.01"/><path d="m16 6h.01"/><path d="m8 10h.01"/><path d="m16 10h.01"/><path d="m8 14h.01"/><path d="m16 14h.01"/>',
      briefcase:
        '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
      palette:
        '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',

      // Multimedia
      camera:
        '<path d="m14.5 4-1-2h-3l-1 2"/><path d="M20 8v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="3"/>',
      music:
        '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
      headphones:
        '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
      gamepad:
        '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>',

      // Comida
      coffee:
        '<path d="m3 14 3-3 3 3"/><path d="M8 21l4-7 4 7"/><path d="M17.5 11.5A2.5 2.5 0 0 1 15 9V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a2.5 2.5 0 0 1-2.5 2.5z"/><path d="M17 3a2.85 2.84 0 1 0-5.7 0"/><path d="M15.5 3a2.85 2.84 0 1 0-5.7 0"/><path d="M9 3a2.85 2.84 0 1 0-5.7 0"/>',
      pizza:
        '<path d="M15 11h.01"/><path d="M11 15h.01"/><path d="M16 16h.01"/><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"/><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"/>',

      // Transporte
      car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.7 10H5.3L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
      plane:
        '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 4c-2 0-4 0-5.5 1.5L11 9 3.2 6.2c-.8-.3-1.6.7-1.3 1.5L4 12l-1.1 2.3c-.3.8.5 1.8 1.3 1.5L12 13l2.5 2.5L13 19c-.3.8.7 1.6 1.5 1.3L17.8 19.2Z"/>',
      ship: '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2c1.3 0 1.9-.5 2.5-1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/><path d="M12 10v4"/><path d="M12 2v3"/>',
      train:
        '<path d="M4 15 2 17l2 2 2-2v-2z"/><path d="M6 8v9"/><path d="M10 5v4h4V5.5a2.5 2.5 0 1 0-5 0V5z"/><path d="M14 15v4.5a2.5 2.5 0 0 0 5 0V15a2 2 0 0 0-2-2h-1.5a2 2 0 0 0-2 2z"/><path d="M18 8v9"/><path d="M20 15l2 2-2 2-2-2v-2z"/>',
      bike: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="m14 6.5 3 3 2.5-1.5"/><path d="M10 7h4l-3 4-3 1"/>',

      // Tecnología
      smartphone:
        '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
      laptop:
        '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
      monitor:
        '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
      printer:
        '<polyline points="6,9 6,2 18,2 18,9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>',
      wifi: '<path d="m12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
      bluetooth: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
      battery:
        '<rect width="16" height="10" x="2" y="7" rx="2" ry="2"/><line x1="22" x2="22" y1="11" y2="13"/><line x1="6" x2="6" y1="11" y2="13"/><line x1="10" x2="10" y1="11" y2="13"/><line x1="14" x2="14" y1="11" y2="13"/>',

      // Seguridad
      lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
      eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      "eye-off":
        '<path d="m15 18-.722-3.25"/><path d="M2 2l20 20"/><path d="M6.71 6.71C4.31 8.48 2.53 10.76 2 12c1.81 2.73 7.5 7 10 7 1.55 0 2.86-.45 4.03-1.11"/><path d="M10.5 15.5C11.25 16.03 12.13 16.5 13 16.5c2.5 0 4.5-2 4.5-4.5-.47-1.69-1.66-3.04-3.19-3.5"/><path d="M17.18 5.19C15.3 4.43 13.54 4 12 4 9.45 4 3.73 8.27 2 12c.68 1.65 2.19 3.39 4.09 4.37"/>',

      // Comunicación
      bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="m13.73 21a2 2 0 0 1-3.46 0"/>',
      mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/>',
      message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
      phone:
        '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',

      // Tiempo
      calendar:
        '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
      clock:
        '<circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>',
      timer:
        '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
      stopwatch:
        '<circle cx="12" cy="13" r="8"/><path d="m13 9 2 2"/><path d="M9 4.5v2"/><path d="m10.5 2-2 2"/><path d="m15.5 2 2 2"/>',

      // Herramientas
      settings:
        '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
      tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    };
    return lucidePaths[iconName] || lucidePaths.star;
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
        <Label className='text-sm font-medium'>
          Choose Icon ({icons.length} available)
        </Label>
        <div className='grid grid-cols-8 gap-2 max-h-80 overflow-y-auto p-2 border rounded-lg'>
          {icons.map((icon) => (
            <Button
              key={icon.name}
              variant={config.icon === icon.name ? "default" : "outline"}
              size='sm'
              className='h-12 w-12 p-0'
              onClick={() => onChange({ ...config, icon: icon.name })}
              title={icon.label}
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
