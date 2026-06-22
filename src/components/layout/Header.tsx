import { ChevronDown, Globe2, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AppButton } from "@/components/ui/AppButton";
import { AppContainer } from "@/components/ui/AppContainer";
import { AppLogo } from "@/components/common/AppLogo";

const navItems = [
  {
    label: "Özellikler",
    href: "/",
  },
  {
    label: "Fiyatlandırma",
    href: "/",
  },
  {
    label: "İletişim",
    href: "/",
  },
];

export function Header() {
  return (
    <AppContainer className="flex items-center justify-between">
      <NavLink to="/" className="flex items-center">
        <AppLogo size="md" showName />
      </NavLink>

      <nav className="hidden items-center gap-10 lg:flex">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.href}
            className="text-[15px] font-medium text-textMuted transition hover:text-primaryDark"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-textMuted transition hover:bg-primarySoft hover:text-primaryDark">
          <Globe2 size={18} />
          TR
          <ChevronDown size={16} />
        </button>

        <AppButton variant="outline" className="h-12 min-w-[105px]">
          Üye Ol
        </AppButton>

        <AppButton className="h-12 min-w-[120px]">Giriş Yap</AppButton>
      </div>

      <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-borderSoft bg-white/70 text-textDark lg:hidden">
        <Menu size={22} />
      </button>
    </AppContainer>
  );
}
