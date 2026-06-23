import type { AdminInvitation } from "../types/invitation.types";

export const adminInvitationsMock: AdminInvitation[] = [
  {
    id: "1",
    name: "Lavanta Bahçesi",
    category: "Çiçekli",
    imageUrl:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=240&q=80",
    isPremium: true,
    createdAt: "21 Mayıs 2025",
  },
  {
    id: "2",
    name: "Romantica",
    category: "Çiçekli",
    imageUrl:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=240&q=80",
    isPremium: true,
    createdAt: "20 Mayıs 2025",
  },
  {
    id: "3",
    name: "Eterna",
    category: "Minimal",
    imageUrl:
      "https://images.unsplash.com/photo-1509610973147-232dfea52a97?auto=format&fit=crop&w=240&q=80",
    isPremium: false,
    createdAt: "19 Mayıs 2025",
  },
  {
    id: "4",
    name: "Botanik Yeşil",
    category: "Doğa",
    imageUrl:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=240&q=80",
    isPremium: false,
    createdAt: "18 Mayıs 2025",
  },
  {
    id: "5",
    name: "Klasik Altın Çerçeve",
    category: "Klasik",
    imageUrl:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=240&q=80",
    isPremium: true,
    createdAt: "17 Mayıs 2025",
  },
];
