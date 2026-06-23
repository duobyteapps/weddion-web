import { Outlet } from "react-router-dom";

import { AdminHeader } from "./AdminHeader";
import { AdminSidebar } from "./AdminSidebar";

const ADMIN_DRAWER_ID = "admin-drawer";

export function AdminLayout() {
  return (
    <div className="drawer min-h-screen bg-base-200 lg:drawer-open">
      <input id={ADMIN_DRAWER_ID} type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex min-h-screen flex-col">
        <AdminHeader drawerId={ADMIN_DRAWER_ID} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor={ADMIN_DRAWER_ID}
          aria-label="Admin menüsünü kapat"
          className="drawer-overlay"
        />

        <AdminSidebar />
      </div>
    </div>
  );
}
