export default function Home() {
  const services = [
    {
      title: "Sağlıkta Gelir ve Karlılık Yönetimi",
      description:
        "Sağlık tesislerinde gelir kaybı, düşük tahakkuk, gider baskısı ve operasyonel verimsizlik alanlarını analiz eden danışmanlık hizmetleri.",
    },
    {
      title: "SUT, ICD ve Faturalama Danışmanlığı",
      description:
        "SUT uyumluluğu, ICD doğruluğu, paket işlemler, tahakkuk ve reel fatura süreçleri için uzman desteği.",
    },
    {
      title: "Kurumsal Eğitim ve Süreç Geliştirme",
      description:
        "Yöneticiler, mali işler ekipleri ve sağlık profesyonelleri için uygulamalı eğitim ve süreç iyileştirme hizmetleri.",
    },
  ];

  const highlights = [
    "Sağlık sektörüne özel danışmanlık",
    "Gelir kaybı ve maliyet analizi",
    "SUT ve ICD uyumluluk kontrolü",
    "Yönetici kararlarını hızlandıran raporlar",
  ];

  const steps = [
    {
      step: "01",
      title: "Mevcut Durum Analizi",
      text: "Kurumun veri yapısı, süreç akışı, gelir-gider dengesi ve operasyonel ihtiyaçları değerlendirilir.",
    },
    {
      step: "02",
      title: "Çözüm ve Yol Haritası",
      text: "Kuruma özel analiz, danışmanlık ve iyileştirme planı oluşturulur.",
    },
    {
      step: "03",
      title: "Uygulama ve Takip",
      text: "Belirlenen hedefler doğrultusunda danışmanlık, eğitim ve performans izleme süreci yürütülür.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-bold tracking-tight">BBB Danışmanlık</div>
            <div className="text-sm text-slate-500">
              Sağlıkta Verimlilik ve Stratejik Dönüşüm
            </div>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#hizmetler" className="transition hover:text-slate-600">
              Hizmetler
            </a>
            <a href="#neden-biz" className="transition hover:text-slate-600">
              Neden Biz
            </a>
            <a href="#surec" className="transition hover:text-slate-600">
              Süreç
            </a>
            <a href="#iletisim" className="transition hover:text-slate-600">
              İletişim
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-cyan-800 to-slate-700 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-slate-200">
                Sağlık • Strateji • Eğitim • Süreç Yönetimi
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Sağlıkta verimliliği artıran, gelir kayıplarını azaltan danışmanlık
                çözümleri.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                BBB Danışmanlık; sağlıkta maliyet verimliliği, SUT uyumu, eğitim
                hizmetleri, süreç geliştirme ve kurumsal dönüşüm alanlarında güçlü
                çözümler sunar.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#iletisim"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  Teklif Al
                </a>
                <a
                  href="#hizmetler"
                  className="rounded-2xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Hizmetleri İncele
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-center">
              <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/15 backdrop-blur">
                <div className="text-sm text-slate-300">Odak Alanlarımız</div>
                <div className="mt-4 grid gap-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hizmetler" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Hizmetlerimiz
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Kurumunuza özel danışmanlık çözümleri
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Sadece rapor üretmiyor, kurumunuzun karar alma süreçlerini güçlendiren
              uygulanabilir danışmanlık modelleri sunuyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="neden-biz" className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Neden BBB Danışmanlık
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Teoriyi sahadaki ihtiyaçlarla birleştiriyoruz
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Sektörel deneyim, veri okuryazarlığı ve süreç odaklı yaklaşımımız
                sayesinde kurumların hem finansal hem operasyonel görünürlüğünü
                artırıyoruz.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl bg-slate-100 p-6">
                <div className="text-lg font-semibold">Ölçülebilir Sonuç</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Gelir kaybı, maliyet baskısı ve süreç tıkanıklıkları somut
                  göstergelerle ortaya konur.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6">
                <div className="text-lg font-semibold">Kuruma Özel Yaklaşım</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Her kurumun veri yapısı, operasyonel kapasitesi ve hedefleri
                  farklıdır; çözümler bu yapıya göre şekillenir.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-6">
                <div className="text-lg font-semibold">Sürdürülebilir Gelişim</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Eğitim, danışmanlık ve takip modeli ile kazanımların kalıcı hale
                  gelmesi hedeflenir.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="surec" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Çalışma Sürecimiz
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Planlı, şeffaf ve sonuç odaklı
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-400">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="iletisim" className="bg-slate-900 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                İletişim
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Kurumunuz için birlikte yol haritası oluşturalım
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                BBB Danışmanlık ile tanışmak, hizmetlerimiz hakkında bilgi almak veya
                kurumunuza özel teklif talep etmek için bizimle iletişime geçin.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-2xl">
              <div className="grid gap-5">
                <div>
                  <div className="text-sm text-slate-500">Firma</div>
                  <div className="mt-1 text-lg font-semibold">BBB Danışmanlık</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">E-posta</div>
                  <div className="mt-1 text-base font-medium">
                    info@bbbdanismanlik.com
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Telefon</div>
                  <div className="mt-1 text-base font-medium">05XX XXX XX XX</div>
                </div>
                <div>
                  <div className="text-sm text-slate-500">Hizmet Alanları</div>
                  <div className="mt-1 text-base leading-7">
                    Sağlık Yönetimi, Maliyet Verimlilik, Eğitim, Süreç Geliştirme,
                    Raporlama
                  </div>
                </div>
                <button className="mt-3 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                  İletişime Geç
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 BBB Danışmanlık. Tüm hakları saklıdır.</div>
          <div>Kurumsal danışmanlık • Veri odaklı yaklaşım • Sürdürülebilir gelişim</div>
        </div>
      </footer>
    </div>
  );
}