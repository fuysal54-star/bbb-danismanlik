import Image from "next/image";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  HeartPulse,
  LineChart,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: BarChart3,
      title: "Sağlıkta Gelir ve Karlılık Yönetimi",
      description:
        "Gelir kaybı, düşük tahakkuk, gider baskısı ve operasyonel verimsizlik alanlarını görünür hale getiriyoruz.",
    },
    {
      icon: FileText,
      title: "SUT, ICD ve Faturalama Danışmanlığı",
      description:
        "SUT uyumluluğu, ICD doğruluğu, paket işlemler, tahakkuk ve reel fatura süreçlerinde uzman destek sunuyoruz.",
    },
    {
      icon: Users,
      title: "Kurumsal Eğitim ve Süreç Geliştirme",
      description:
        "Yöneticiler, mali işler ekipleri ve sağlık profesyonelleri için uygulamalı eğitim ve gelişim programları hazırlıyoruz.",
    },
    {
      icon: Target,
      title: "Performans ve Verimlilik İzleme",
      description:
        "Kurumun ölçülebilir hedeflere ulaşmasını sağlayan dashboard, analiz ve takip modelleri kurguluyoruz.",
    },
  ];

  const reasons = [
    {
      icon: ShieldCheck,
      title: "Güven Veren Yaklaşım",
      text: "Kurumsal ihtiyaçları anlayan, sonuç odaklı ve sürdürülebilir danışmanlık modeli sunuyoruz.",
      color: "from-cyan-500/20 to-blue-500/10",
      iconColor: "text-cyan-300",
    },
    {
      icon: Activity,
      title: "Veriye Dayalı Karar",
      text: "Sezgisel değil, ölçülebilir verilerle hareket ederek yönetim kararlarını güçlendiriyoruz.",
      color: "from-orange-500/20 to-amber-500/10",
      iconColor: "text-orange-300",
    },
    {
      icon: TrendingUp,
      title: "Ölçülebilir Sonuç",
      text: "Gelir artışı, maliyet optimizasyonu ve süreç performansı için somut çıktılar üretiyoruz.",
      color: "from-sky-500/20 to-cyan-500/10",
      iconColor: "text-sky-300",
    },
    {
      icon: Sparkles,
      title: "Yenilikçi Çözüm",
      text: "Sağlık, veri analitiği ve kurumsal gelişimi aynı yapıda buluşturan modern çözümler tasarlıyoruz.",
      color: "from-orange-400/20 to-rose-500/10",
      iconColor: "text-orange-300",
    },
  ];

  const stats = [
    { value: "50+", label: "Kurumsal Görüşme" },
    { value: "%20+", label: "Verimlilik Potansiyeli" },
    { value: "%15+", label: "Gelir Artış Odağı" },
    { value: "7/24", label: "Danışmanlık Yaklaşımı" },
  ];

  const badges = [
    { icon: Stethoscope, text: "Sağlık Odaklı Uzmanlık" },
    { icon: LineChart, text: "Veri ve Dashboard Yetkinliği" },
    { icon: CheckCircle2, text: "SUT ve Faturalama Disiplini" },
    { icon: HeartPulse, text: "Süreç ve Performans Güçlendirme" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#031634]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#anasayfa" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="BBB Danışmanlık"
              width={72}
              height={72}
              className="h-14 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-lg font-bold tracking-wide text-white">
                BBB Danışmanlık
              </div>
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                Veri • Strateji • Büyüme
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200 lg:flex">
            <a href="#anasayfa" className="transition hover:text-cyan-300">
              Ana Sayfa
            </a>
            <a href="#hizmetler" className="transition hover:text-cyan-300">
              Hizmetlerimiz
            </a>
            <a href="#neden-biz" className="transition hover:text-cyan-300">
              Neden Biz?
            </a>
            <a href="#iletisim" className="transition hover:text-cyan-300">
              İletişim
            </a>
          </nav>

          <a
            href="#iletisim"
            className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
          >
            Hızlı Teklif Al
          </a>
        </div>
      </header>

      <main>
        <section
          id="anasayfa"
          className="relative overflow-hidden bg-[#031634] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(249,115,22,0.18),transparent_28%),linear-gradient(to_bottom,rgba(7,25,58,0.95),rgba(3,22,52,1))]" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(56,189,248,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute left-1/2 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
                VERİ • STRATEJİ • BÜYÜME
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Sağlıkta verimliliği artıran,
                <span className="block bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                  gelir kayıplarını azaltan
                </span>
                danışmanlık çözümleri.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                BBB Danışmanlık; sağlık kurumları için maliyet verimliliği, SUT
                ve ICD uyumu, performans yönetimi, eğitim ve kurumsal gelişim
                alanlarında güçlü ve ölçülebilir çözümler sunar.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#hizmetler"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5"
                >
                  Hizmetlerimizi İncele
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#iletisim"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Hakkımızda / İletişim
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {badges.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                    >
                      <Icon className="mb-3 h-6 w-6 text-cyan-300" />
                      <div className="text-sm font-medium text-slate-100">
                        {item.text}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute inset-x-6 bottom-6 h-20 rounded-full bg-cyan-400/20 blur-2xl" />

              <div className="absolute left-0 top-10 hidden w-52 rounded-3xl border border-cyan-400/15 bg-[#0a234d]/80 p-4 shadow-2xl backdrop-blur lg:block">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Hasta Analitiği
                </div>
                <div className="mt-3 flex h-20 items-end gap-2">
                  {[40, 60, 50, 72, 66, 84].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-blue-400"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <Image
                  src="/logo.png"
                  alt="BBB Danışmanlık Logo"
                  width={640}
                  height={640}
                  className="h-auto w-[280px] drop-shadow-[0_15px_45px_rgba(34,211,238,0.25)] sm:w-[360px] lg:w-[460px]"
                  priority
                />
              </div>

              <div className="absolute right-0 top-16 hidden w-56 rounded-3xl border border-orange-400/15 bg-[#0a234d]/80 p-4 shadow-2xl backdrop-blur lg:block">
                <div className="text-xs uppercase tracking-[0.24em] text-orange-300">
                  Büyüme Trend
                </div>
                <div className="mt-3 flex h-20 items-end gap-2">
                  {[22, 28, 35, 44, 55, 70].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-orange-500 to-amber-300"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Hizmetlerimiz
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
                Sağlık sektörüne özel kurumsal çözümler
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Veriyi yönetime dönüştüren, süreçleri güçlendiren ve
                sürdürülebilir büyümeyi hedefleyen danışmanlık yaklaşımı
                sunuyoruz.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="neden-biz" className="bg-[#031634] py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Neden Biz?
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                Farkımızı ortaya koyan değerlerimiz
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Sağlıkta veri odaklı düşünme, finansal görünürlük ve süreç
                iyileştirmeyi aynı çatı altında sunuyoruz.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`rounded-[2rem] border border-white/10 bg-gradient-to-br ${item.color} p-8 shadow-xl backdrop-blur`}
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                      <Icon className={`h-7 w-7 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 grid gap-4 rounded-[2rem] bg-white/5 p-6 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim" className="bg-slate-100 py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-center justify-center rounded-[1.5rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_55%)] p-6">
                <Image
                  src="/logo.png"
                  alt="BBB Danışmanlık"
                  width={360}
                  height={360}
                  className="h-auto w-full max-w-xs"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                İletişime Geçin
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-5xl">
                Birlikte büyümeye hazır mısınız?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Kurumunuza özel danışmanlık modeli, analiz çözümleri veya eğitim
                hizmetleri hakkında bilgi almak için bizimle iletişime geçin.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="https://wa.me/905376481424"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp ile İletişime Geç
                </a>
                <a
                  href="mailto:info@bbbdanismanlik.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
                >
                  Hızlı Teklif Al
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <div className="text-sm text-slate-500">Firma</div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">
                      BBB Danışmanlık
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Telefon</div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">
                      0537 648 14 24
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">E-posta</div>
                    <div className="mt-1 text-lg font-semibold text-slate-900">
                      info@bbbdanismanlik.com
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">
                      Hizmet Alanları
                    </div>
                    <div className="mt-1 text-base font-medium text-slate-900">
                      Sağlık yönetimi, SUT, maliyet verimlilik, eğitim ve süreç
                      geliştirme
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#031634] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="BBB Logo"
                width={60}
                height={60}
                className="h-12 w-auto"
              />
              <div>
                <div className="text-xl font-bold">BBB Danışmanlık</div>
                <div className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                  Sağlıkta Verimlilik ve Stratejik Dönüşüm
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Sağlık kurumları için veriye dayalı danışmanlık, büyüme
              stratejileri, süreç geliştirme ve performans odaklı çözümler
              sunuyoruz.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Hızlı Linkler
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div>
                <a href="#anasayfa" className="hover:text-white">
                  Ana Sayfa
                </a>
              </div>
              <div>
                <a href="#hizmetler" className="hover:text-white">
                  Hizmetlerimiz
                </a>
              </div>
              <div>
                <a href="#neden-biz" className="hover:text-white">
                  Neden Biz?
                </a>
              </div>
              <div>
                <a href="#iletisim" className="hover:text-white">
                  İletişim
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              İletişim
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div>0537 648 14 24</div>
              <div>info@bbbdanismanlik.com</div>
              <div>İstanbul, Türkiye</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-400 sm:px-6">
          © 2026 BBB Danışmanlık. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}