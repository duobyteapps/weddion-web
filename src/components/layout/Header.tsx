import { ChevronDown, Globe2, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <AppContainer className="flex items-center justify-between !my-4">
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
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-textMuted transition hover:bg-primarySoft hover:text-primaryDark"
        >
          <Globe2 size={18} />
          TR
          <ChevronDown size={16} />
        </button>

        <AppButton
          type="button"
          variant="outline"
          className="min-w-[105px]"
          onClick={() => navigate("/register")}
        >
          Üye Ol
        </AppButton>

        <AppButton
          type="button"
          className="min-w-[120px]"
          onClick={() => navigate("/login")}
        >
          Giriş Yap
        </AppButton>
      </div>

      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-borderSoft bg-white/70 text-textDark lg:hidden"
      >
        <Menu size={22} />
      </button>
    </AppContainer>
  );
}
