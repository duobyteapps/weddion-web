import {
  Bell,
  FileImage,
  GalleryHorizontal,
  HardDrive,
  LayoutDashboard,
  Settings,
  Sparkles,
  Users,
} from "lucide-react";

export const adminNavigationItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Kullanıcılar",
    href: "/admin/users",
    icon: Users,
  },
  {
    label: "Davetiyeler",
    href: "/admin/invitations",
    icon: GalleryHorizontal,
  },
  {
    label: "Şablonlar",
    href: "/admin/templates",
    icon: Sparkles,
  },
  {
    label: "Fotoğraflar",
    href: "/admin/photos",
    icon: FileImage,
  },
  {
    label: "Depolama",
    href: "/admin/storage",
    icon: HardDrive,
  },
  {
    label: "Bildirimler",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    label: "Ayarlar",
    href: "/admin/settings",
    icon: Settings,
  },
];
