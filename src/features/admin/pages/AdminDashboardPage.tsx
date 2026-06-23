import {
  Activity,
  Crown,
  FileImage,
  GalleryHorizontal,
  HardDrive,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { AppCard, AppText } from "@/components/ui";

const stats = [
  {
    label: "Toplam Kullanıcı",
    value: "1.248",
    change: "+12%",
    icon: Users,
  },
  {
    label: "Aktif Davetiye",
    value: "486",
    change: "+8%",
    icon: GalleryHorizontal,
  },
  {
    label: "Premium Üye",
    value: "132",
    change: "+18%",
    icon: Crown,
  },
  {
    label: "Yüklenen Fotoğraf",
    value: "8.942",
    change: "+24%",
    icon: FileImage,
  },
];

const recentUsers = [
  {
    name: "Nisa Nur",
    email: "nisa@example.com",
    plan: "Premium",
    time: "12 dk önce",
  },
  {
    name: "Onur Aydınoğlu",
    email: "onur@example.com",
    plan: "Standart",
    time: "28 dk önce",
  },
  {
    name: "Elif Yılmaz",
    email: "elif@example.com",
    plan: "Premium",
    time: "1 saat önce",
  },
];

const popularTemplates = [
  {
    name: "Bordo Dokunuş",
    category: "Flower",
    usage: 82,
  },
  {
    name: "Mavi Zarafet",
    category: "Flower",
    usage: 64,
  },
  {
    name: "Klasik Altın Çerçeve",
    category: "Classic",
    usage: 49,
  },
];

const systemStatus = [
  {
    label: "R2 Storage",
    value: "Aktif",
  },
  {
    label: "Supabase",
    value: "Aktif",
  },
  {
    label: "Bildirim Servisi",
    value: "Normal",
  },
];

export function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="hero overflow-hidden rounded-3xl bg-gradient-to-r from-primarySoft via-base-100 to-base-100 shadow-sm">
        <div className="hero-content w-full justify-between px-6 py-8 lg:px-8">
          <div>
            <div className="badge badge-primary badge-outline mb-4 gap-2 rounded-full px-4 py-3">
              <ShieldCheck size={15} />
              Admin Dashboard
            </div>

            <AppText variant="title" as="h1" className="text-3xl lg:text-4xl">
              Weddion Yönetim Paneli
            </AppText>

            <AppText variant="body" className="mt-3 max-w-2xl leading-6">
              Platformdaki kullanıcıları, davetiyeleri, şablonları, fotoğraf
              yüklemelerini ve depolama durumunu tek merkezden takip et.
            </AppText>
          </div>

          <div className="hidden rounded-3xl bg-white/70 p-5 shadow-sm lg:block">
            <div className="stats bg-transparent">
              <div className="stat px-4 py-2">
                <div className="stat-title text-xs">Bugünkü Aktivite</div>
                <div className="stat-value text-primaryDark">324</div>
                <div className="stat-desc">son 24 saat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <AppCard
              key={stat.label}
              className="border border-base-300 bg-base-100 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <AppText variant="caption">{stat.label}</AppText>

                  <AppText
                    variant="title"
                    as="strong"
                    className="mt-2 block text-3xl"
                  >
                    {stat.value}
                  </AppText>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primarySoft text-primaryDark">
                  <Icon size={22} />
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <div className="badge badge-success badge-outline gap-1">
                  <TrendingUp size={13} />
                  {stat.change}
                </div>

                <AppText variant="caption">son 30 gün</AppText>
              </div>
            </AppCard>
          );
        })}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <AppCard className="border border-base-300 bg-base-100 p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <AppText variant="subtitle" as="h2">
                Platform Aktivitesi
              </AppText>

              <AppText variant="body" className="mt-1">
                Davetiye oluşturma, fotoğraf yükleme ve kullanıcı hareketleri.
              </AppText>
            </div>

            <Activity className="text-primaryDark" size={22} />
          </div>

          <div className="grid h-72 items-end gap-3 rounded-3xl border border-base-300 bg-base-200 p-5 sm:grid-cols-12">
            {[48, 62, 54, 73, 66, 82, 77, 91, 86, 96, 88, 104].map(
              (height, index) => (
                <div
                  key={index}
                  className="flex h-full items-end rounded-full bg-base-100 p-1"
                >
                  <div
                    className="w-full rounded-full bg-primary"
                    style={{ height: `${height}%` }}
                  />
                </div>
              ),
            )}
          </div>
        </AppCard>

        <AppCard className="border border-base-300 bg-base-100 p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <AppText variant="subtitle" as="h2">
                Depolama Kullanımı
              </AppText>

              <AppText variant="body" className="mt-1">
                Fotoğraf ve davetiye medya alanı.
              </AppText>
            </div>

            <HardDrive className="text-primaryDark" size={22} />
          </div>

          <div className="radial-progress mx-auto flex text-primaryDark [--size:12rem] [--thickness:1rem]">
            64%
          </div>

          <div className="mt-7 space-y-3">
            <div>
              <div className="mb-2 flex justify-between text-xs font-semibold">
                <span>Misafir fotoğrafları</span>
                <span>46%</span>
              </div>
              <progress
                className="progress progress-primary w-full"
                value="46"
                max="100"
              />
            </div>

            <div>
              <div className="mb-2 flex justify-between text-xs font-semibold">
                <span>Davetiye görselleri</span>
                <span>38%</span>
              </div>
              <progress
                className="progress progress-secondary w-full"
                value="38"
                max="100"
              />
            </div>

            <div>
              <div className="mb-2 flex justify-between text-xs font-semibold">
                <span>Kapak görselleri</span>
                <span>16%</span>
              </div>
              <progress
                className="progress progress-accent w-full"
                value="16"
                max="100"
              />
            </div>
          </div>
        </AppCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <AppCard className="border border-base-300 bg-base-100 p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Users size={21} className="text-primaryDark" />
            <AppText variant="subtitle" as="h2">
              Son Kullanıcılar
            </AppText>
          </div>

          <div className="space-y-3">
            {recentUsers.map((user) => (
              <div
                key={user.email}
                className="rounded-2xl border border-base-300 bg-base-100 px-4 py-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <AppText variant="captionStrong">{user.name}</AppText>
                    <AppText variant="caption" className="mt-1">
                      {user.email}
                    </AppText>
                  </div>

                  <div className="badge badge-primary badge-outline">
                    {user.plan}
                  </div>
                </div>

                <AppText variant="caption" className="mt-3">
                  {user.time}
                </AppText>
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard className="border border-base-300 bg-base-100 p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Sparkles size={21} className="text-primaryDark" />
            <AppText variant="subtitle" as="h2">
              Popüler Şablonlar
            </AppText>
          </div>

          <div className="space-y-4">
            {popularTemplates.map((template) => (
              <div key={template.name}>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <div>
                    <AppText variant="captionStrong">{template.name}</AppText>
                    <AppText variant="caption" className="mt-1">
                      {template.category}
                    </AppText>
                  </div>

                  <AppText variant="captionStrong">
                    {template.usage} kullanım
                  </AppText>
                </div>

                <progress
                  className="progress progress-primary w-full"
                  value={template.usage}
                  max="100"
                />
              </div>
            ))}
          </div>
        </AppCard>

        <AppCard className="border border-base-300 bg-base-100 p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck size={21} className="text-primaryDark" />
            <AppText variant="subtitle" as="h2">
              Sistem Durumu
            </AppText>
          </div>

          <div className="space-y-3">
            {systemStatus.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-2xl bg-base-200 px-4 py-3"
              >
                <AppText variant="captionStrong">{item.label}</AppText>
                <div className="badge badge-success badge-outline">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </AppCard>
      </section>
    </div>
  );
}
