import {
  Award,
  Building2,
  CalendarDays,
  Car,
  Gauge,
  Milestone,
  Route,
  ShieldCheck,
  Sparkles,
  SquareParking,
  TrafficCone,
  Trophy,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const icons: Record<string, LucideIcon> = {
  Award,
  Building2,
  CalendarDays,
  Car,
  Gauge,
  Milestone,
  Route,
  ShieldCheck,
  Sparkles,
  SquareParking,
  TrafficCone,
  Trophy,
  UserCheck,
  Users,
};

export function getIcon(name: string): LucideIcon {
  return icons[name] ?? Car;
}
