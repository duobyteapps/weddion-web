import { ChevronDown, Globe2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { AppButton } from "@/components/ui/AppButton";
import { AppContainer } from "@/components/ui/AppContainer";

const navItems = [
  {
    label: "Özellikler",
    href: "/",
  },
  {
    label: "Nasıl Çalışır?",
    href: "/",
  },
  {
    label: "Fiyatlandırma",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "İletişim",
    href: "/",
  },
];

export function Header() {
  return (
    <header className="relative z-20 pt-7">
      <AppContainer>
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c7a3e8] to-[#8f58c9] text-white shadow-md">
              <span className="weddion-serif text-3xl leading-none">W</span>
            </div>

            <span className="weddion-serif text-4xl tracking-wide text-[#8d62b8]">
              WEDDİON
            </span>
          </NavLink>

          <nav className="hidden items-center gap-11 text-[15px] font-medium text-[#5e5369] lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="transition hover:text-[#8f58c9]"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <button className="flex items-center gap-2 text-[15px] font-medium text-[#5e5369]">
              <Globe2 size={19} />
              <span>TR</span>
              <ChevronDown size={16} />
            </button>

            <AppButton variant="outline">Üye Ol</AppButton>
            <AppButton>Giriş Yap</AppButton>
          </div>

          <button className="btn btn-ghost btn-circle lg:hidden">
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </AppContainer>
    </header>
  );
}