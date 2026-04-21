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
    },
    {
      icon: Activity,
      title: "Veriye Dayalı Karar",
      text: "Sezgisel değil ölçülebilir verilerle hareket ederek yönetim kararlarını güçlendiriyoruz.",
      color: "from-orange-500/20 to-amber-500/10",
    },
    {
      icon: TrendingUp,
      title: "Ölçülebilir Sonuç",
      text: "Gelir artışı, maliyet optimizasyonu ve süreç performansı için somut çıktılar üretiyoruz.",
      color: "from-sky-500/20 to-cyan-500/10",
    },
    {
      icon: Sparkles,
      title: "Yenilikçi Çözüm",
      text: "Sağlık, veri analitiği ve kurumsal gelişimi aynı yapıda buluşturan modern çözümler tasarlıyoruz.",
      color: "from-orange-400/20 to-rose-500/10",
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
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
            className="rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5"
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

          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
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
            </div>

            <div className="relative flex items-center justify-center">
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <Image
                  src="/logo.png"
                  alt="BBB Danışmanlık Logo"
                  width={640}
                  height={640}
                  className="h-auto w-[280px] sm:w-[360px] lg:w-[460px]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}