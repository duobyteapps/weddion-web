import { Bell, Menu, Plus, Search } from "lucide-react";

import { AppButton, AppText } from "@/components/ui";

type AdminHeaderProps = {
  drawerId: string;
};

export function AdminHeader({ drawerId }: AdminHeaderProps) {
  return (
    <nav className="navbar sticky top-0 z-30 min-h-20 border-b border-base-300 bg-base-100/90 px-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="navbar-start gap-3">
        <label
          htmlFor={drawerId}
          aria-label="Admin menüsünü aç"
          className="btn btn-square btn-ghost"
        >
          <Menu size={22} />
        </label>

        <div>
          <AppText variant="captionStrong">Admin Panel</AppText>
          <AppText variant="caption" className="mt-1 hidden sm:block">
            Weddion yönetim merkezi
          </AppText>
        </div>
      </div>

      <div className="navbar-center hidden w-full max-w-xl lg:flex">
        <label className="input input-bordered flex w-full items-center gap-3 rounded-2xl bg-base-200">
          <Search size={18} className="text-textMuted" />

          <input
            type="text"
            className="grow text-sm"
            placeholder="Kullanıcı, davetiye veya şablon ara..."
          />
        </label>
      </div>

      <div className="navbar-end gap-2">
        <button type="button" className="btn btn-square btn-ghost">
          <Bell size={20} />
        </button>

        <AppButton className="hidden sm:inline-flex">
          <Plus size={16} />
          Yeni Şablon
        </AppButton>

        <div className="dropdown dropdown-end">
          <button type="button" tabIndex={0} className="avatar btn btn-circle">
            <div className="flex w-10 items-center justify-center rounded-full bg-primarySoft text-sm font-bold text-primaryDark">
              OA
            </div>
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow-xl"
          >
            <li>
              <button type="button">Profil</button>
            </li>

            <li>
              <button type="button">Ayarlar</button>
            </li>

            <li>
              <button type="button" className="text-error">
                Çıkış Yap
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
