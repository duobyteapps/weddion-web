import { NavLink } from "react-router-dom";
import { Crown } from "lucide-react";

import { AppLogo } from "@/components/common/AppLogo";
import { AppText } from "@/components/ui";
import { adminNavigationItems } from "./adminNavigation";

export function AdminSidebar() {
  return (
    <aside className="flex min-h-full flex-col items-start border-r border-base-300 bg-base-100 transition-all duration-300 is-drawer-close:w-16 is-drawer-open:w-72">
      <div className="flex h-20 w-full items-center border-b border-base-300 px-4">
        <div className="is-drawer-close:hidden">
          <AppLogo />
        </div>

        <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-content is-drawer-close:flex">
          W
        </div>
      </div>

      <div className="w-full flex-1 overflow-y-auto px-3 py-5">
        <AppText
          variant="captionStrong"
          className="mb-3 px-3 uppercase is-drawer-close:hidden"
        >
          Yönetim
        </AppText>

        <ul className="menu w-full gap-1 p-0">
          {adminNavigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.end}
                  data-tip={item.label}
                  className={({ isActive }) =>
                    [
                      "is-drawer-close:tooltip is-drawer-close:tooltip-right",
                      "rounded-xl px-3 py-3 text-sm font-semibold transition-all duration-200",
                      "hover:bg-primarySoft hover:text-primaryDark",
                      isActive
                        ? "bg-primarySoft text-primaryDark"
                        : "text-textMuted",
                    ].join(" ")
                  }
                >
                  <Icon size={19} className="shrink-0" />

                  <span className="is-drawer-close:hidden">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="w-full border-t border-base-300 p-3">
        <div className="rounded-2xl bg-primarySoft p-4 is-drawer-close:bg-transparent is-drawer-close:p-0">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-primaryDark is-drawer-close:mx-auto is-drawer-close:mb-0">
            <Crown size={20} />
          </div>

          <div className="is-drawer-close:hidden">
            <AppText variant="captionStrong">Weddion Admin</AppText>

            <AppText variant="caption" className="mt-1 leading-5">
              Kullanıcıları, davetiyeleri ve medya alanını buradan yönet.
            </AppText>
          </div>
        </div>
      </div>
    </aside>
  );
}
