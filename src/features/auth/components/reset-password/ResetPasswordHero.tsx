import lavenderFloralDivider from "@/assets/images/illustration/lavender-floral-divider.png";

import { AppText } from "@/components/ui/AppText";

export function ResetPasswordHero() {
  return (
    <section className="flex-1 items-center justify-center lg:flex">
      <div className="max-w-xl text-center">
        <AppText as="h1" variant="serifTitle">
          Yeni şifrenizi
          <br />
          belirleyin
        </AppText>

        <img
          src={lavenderFloralDivider}
          alt=""
          aria-hidden="true"
          className="mx-auto my-3 w-[300px] scale-150 object-contain"
        />

        <AppText variant="body" className="mx-auto max-w-md text-xl leading-8">
          Hesabınız için güçlü ve güvenli yeni bir şifre oluşturun.
        </AppText>
      </div>
    </section>
  );
}
