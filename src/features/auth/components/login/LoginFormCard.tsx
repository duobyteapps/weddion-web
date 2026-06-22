import { Eye, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { AppButton, AppInput } from "@/components/ui";
import { AuthFormCardShell } from "@/features/auth/components/AuthFormCardShell";

export function LoginFormCard() {
  const navigate = useNavigate();

  return (
    <AuthFormCardShell>
      <div className="mb-7 text-center">
        <h2 className="text-2xl font-extrabold text-[#4F3C68]">Giriş Yap</h2>
        <p className="mt-2 text-sm text-[#5E657A]">Hesabınıza giriş yap</p>
      </div>

      <form className="space-y-5">
        <div className="relative">
          <AppInput
            label="E-posta"
            type="email"
            placeholder="E-posta adresiniz"
            className="pl-12"
          />

          <Mail
            size={19}
            className="pointer-events-none absolute left-4 top-[43px] text-[#74748E]"
          />
        </div>

        <div>
          <div className="relative">
            <AppInput
              label="Şifre"
              type="password"
              placeholder="Şifrenizi girin"
              className="pl-12 pr-12"
            />

            <Lock
              size={19}
              className="pointer-events-none absolute left-4 top-[43px] text-[#74748E]"
            />

            <button
              type="button"
              className="absolute right-4 top-[42px] text-[#74748E] transition hover:text-[#8F5EC2]"
              aria-label="Şifreyi göster"
            >
              <Eye size={20} />
            </button>
          </div>

          <div className="mt-3 text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-xs font-bold text-[#9A5DCE] transition hover:text-[#7E45B4]"
            >
              Şifremi unuttum
            </button>
          </div>
        </div>

        <AppButton type="submit" className="mt-1 w-full">
          Giriş Yap
        </AppButton>
      </form>

      <div className="my-7 flex items-center gap-5">
        <span className="h-px flex-1 bg-[#E3DCEA]" />
        <span className="text-xs font-medium text-[#6F6878]">veya</span>
        <span className="h-px flex-1 bg-[#E3DCEA]" />
      </div>

      <p className="text-center text-sm text-[#6A6578]">
        Hesabınız yok mu?{" "}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="font-bold text-[#9A5DCE] transition hover:text-[#7E45B4]"
        >
          Kayıt ol
        </button>
      </p>
    </AuthFormCardShell>
  );
}
