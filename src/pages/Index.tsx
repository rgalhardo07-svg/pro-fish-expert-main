import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, Fish, Flame, MessageCircle, Shield, Sparkles, Star, Tag, Timer, Trophy, Users, Zap } from "lucide-react";
import heroImg from "@/assets/hero-pescador.jpg";
import varasImg from "@/assets/varas.jpg";
import carretilhaImg from "@/assets/carretilha.jpg";
import iscasImg from "@/assets/iscas.jpg";

const WHATSAPP_URL = "https://chat.whatsapp.com/JfPAkYZLdwgKOR4NTVuEMY?mode=gi_t";
const GROUP_NAME = "Promoções do Pescador";

const CTA = ({ children = "Entrar no Grupo VIP", className = "" }: { children?: React.ReactNode; className?: string }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-whatsapp px-8 py-5 text-base sm:text-lg font-bold text-white shadow-whatsapp transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_25px_60px_-10px_hsl(var(--whatsapp)/0.7)] animate-pulse-ring ${className}`}
  >
    <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
    <span>{children}</span>
    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
  </a>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="font-display text-4xl sm:text-5xl text-gradient-gold leading-none">{value}</div>
    <div className="mt-2 text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">{label}</div>
  </div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-gold">
    <Sparkles className="h-3 w-3" />
    {children}
  </div>
);

const Index = () => {
  const [spots, setSpots] = useState(47);
  useEffect(() => {
    document.title = "Promoções do Pescador | Grupo VIP de Ofertas em Pesca Esportiva no WhatsApp";
    const t = setInterval(() => setSpots((s) => (s > 12 ? s - 1 : 47)), 8000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-gold">
              <Fish className="h-5 w-5 text-deep" strokeWidth={2.5} />
            </div>
            <div className="font-display text-xl tracking-wider">
              PROMOÇÕES<span className="text-gradient-gold"> DO PESCADOR</span>
            </div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold/20"
          >
            <MessageCircle className="h-4 w-4" /> Entrar no grupo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-gradient-hero">
        <div className="container relative grid gap-12 py-12 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs sm:text-sm font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
              </span>
              +19.000 pescadores ativos · <span className="font-bold text-destructive">{spots} vagas liberadas hoje</span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-tight">
              PARE DE PAGAR<br />
              CARO PELO SEU<br />
              <span className="text-gradient-gold">EQUIPAMENTO DE PESCA</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Entre no grupo <span className="font-bold text-foreground">Promoções do Pescador</span> e receba diariamente
              ofertas de varas, carretilhas, molinetes e iscas com até{" "}
              <span className="font-bold text-foreground">70% OFF</span> direto no seu WhatsApp.
              <span className="block mt-2">Curadoria 100% pesca esportiva. Sem spam. Sem enrolação.</span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <CTA>Entrar Grátis no Grupo VIP</CTA>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format", 
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format",
                    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face&auto=format"
                  ].map((src, i) => (
                    <img key={i} src={src} alt={`Pescador ${i + 1}`} className="h-8 w-8 rounded-full border-2 border-background object-cover" onError={(e: any) => { e.target.src = `https://ui-avatars.com/api/?name=Pescador${i+1}&background=random&color=fff&size=100` }} />
                  ))}
                </div>
                <div>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_,i)=>(<Star key={i} className="h-3.5 w-3.5 fill-current" />))}
                  </div>
                  <div className="text-xs">4.9/5 · pescadores reais</div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <Stat value="-70%" label="Até de desconto" />
              <Stat value="19K+" label="Pescadores" />
              <Stat value="24/7" label="Ofertas ao vivo" />
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative overflow-hidden rounded-3xl shadow-deep ring-1 ring-border">
              <img
                src={heroImg}
                alt="Pescador esportivo segurando black bass troféu ao amanhecer"
                width={1536}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <div className="font-display text-5xl text-gradient-gold leading-none">TROFÉU</div>
                  <div className="text-sm text-white/80">comunidade Promoções do Pescador</div>
                </div>
                <div className="rounded-2xl bg-white/95 backdrop-blur px-3 py-2 text-right shadow-lg">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Black Bass</div>
                  <div className="text-sm font-bold text-foreground">4,2 kg</div>
                </div>
              </div>
            </div>

            {/* floating cards */}
            <div className="absolute -top-4 -left-4 sm:-left-10 animate-float rounded-2xl border border-gold/30 bg-white px-4 py-3 shadow-gold">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15">
                  <Flame className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Oferta relâmpago</div>
                  <div className="text-sm font-bold text-gold">-65% Carretilha Shimano</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-2 sm:-right-8 animate-float [animation-delay:1.5s] rounded-2xl border border-accent/30 bg-white px-4 py-3 shadow-deep">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15">
                  <Tag className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Cupom exclusivo</div>
                  <div className="text-sm font-bold text-foreground">PESCA40 - 40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE BRANDS */}
      <section className="border-y border-border/50 bg-card/40 hidden sm:block">
        <div className="container py-6">
          <div className="flex items-center gap-8 overflow-hidden">
            <span className="shrink-0 text-xs uppercase tracking-[0.3em] text-muted-foreground">Marcas monitoradas</span>
            <div className="flex flex-1 flex-wrap justify-around gap-6 font-display text-xl text-muted-foreground/70">
              {["Shimano","Daiwa","Marine Sports","Lubina","Maruri","Albatroz","Pesca Brasil","Saint Plus"].map((b)=>(
                <span key={b} className="transition hover:text-gold">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Categorias</SectionLabel>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[0.95]">
            TUDO QUE UM PESCADOR<br /><span className="text-gradient-gold">ESPORTIVO PRECISA</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Ofertas curadas em todas as categorias da pesca esportiva — do iniciante ao tournament angler.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: varasImg, title: "Varas Premium", desc: "Carbono, ação e potência calibradas para black bass, tucunaré e pesca de praia.", off: "-55%" },
            { img: carretilhaImg, title: "Carretilhas & Molinetes", desc: "Shimano, Daiwa, Marine Sports — top de linha com freios sedosos.", off: "-65%" },
            { img: iscasImg, title: "Iscas Artificiais", desc: "Plugs, jigs, soft baits e shads para todas as condições de água.", off: "-50%" },
          ].map((c, i) => (
            <article key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-gold/50 hover:-translate-y-2 hover:shadow-gold">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-black text-deep shadow-gold">
                  {c.off} OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl tracking-wide">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="relative overflow-hidden border-y border-border bg-card/30">
        <div className="container relative py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Em 60 segundos</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">
              COMO <span className="text-gradient-gold">FUNCIONA</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              { n: "01", icon: MessageCircle, t: "Entre no grupo", d: "Clique no botão e seja redirecionado direto para o WhatsApp." },
              { n: "02", icon: Zap, t: "Receba ofertas", d: "Promoções diárias garimpadas pelos especialistas em pesca esportiva." },
              { n: "03", icon: Trophy, t: "Pesque mais", d: "Equipamento premium pela metade do preço. Sua próxima pescaria turbinada." },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="relative rounded-2xl border border-border bg-card p-8 transition hover:border-gold/40 hover:shadow-gold">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                      <s.icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="font-display text-3xl tracking-widest text-gold/70">{s.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl tracking-wide">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CTA>Quero economizar agora</CTA>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="container py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionLabel>Por que entrar?</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[0.95]">
              ESPECIALISTAS<br />
              <span className="text-gradient-gold">100% PESCA ESPORTIVA</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Não somos um grupo qualquer. Garimpamos manualmente as melhores ofertas em sites e marketplaces — só passa o que vale.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { i: Trophy, t: "Curadoria especialista", d: "Cada oferta é validada por pescadores esportivos experientes." },
                { i: Timer, t: "Ofertas em tempo real", d: "Promoções relâmpago entregues no momento que aparecem." },
                { i: Shield, t: "Sem spam, sem grupos lotados", d: "Apenas ofertas reais. Você sai quando quiser." },
                { i: Tag, t: "Cupons exclusivos", d: "Códigos negociados com lojas parceiras só para o grupo." },
              ].map((b, i) => (
                <li key={i} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10">
                    <b.i className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-bold">{b.t}</div>
                    <div className="text-sm text-muted-foreground">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-deep">
              <img src={iscasImg} alt="Coleção de iscas artificiais para pesca esportiva" loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-deep/80 via-transparent to-gold/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-gold/30 bg-card/90 backdrop-blur p-6 shadow-gold max-w-xs">
              <div className="flex items-center gap-2 text-gold">
                <Users className="h-5 w-5" />
                <span className="font-bold">+19.000 pescadores</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">já economizaram milhares de reais em equipamento esportivo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-y border-border bg-card/30">
        <div className="container py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Comunidade</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">
              QUEM ENTROU<br /><span className="text-gradient-gold">NÃO QUER MAIS SAIR</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Rafael M.", role: "Pesca de black bass · SP", text: "Comprei uma carretilha Shimano por R$ 380 que tava R$ 1.100. Grupo é fora da curva pra quem leva a sério.", stars: 5, gender: "male" },
              { name: "Lucas P.", role: "Tucunaré · AM", text: "Já economizei mais de R$ 2 mil em iscas e linhas. Os caras realmente entendem de pesca esportiva.", stars: 5, gender: "male" },
              { name: "Carla S.", role: "Pesca embarcada · RJ", text: "Cupom exclusivo deu 40% off numa vara de carbono top. Único grupo de promoção que vale a pena.", stars: 5, gender: "female" },
            ].map((d, i) => (
              <figure key={i} className="rounded-2xl border border-border bg-card p-6 transition hover:border-gold/40">
                <div className="flex text-gold">
                  {[...Array(d.stars)].map((_,j)=>(<Star key={j} className="h-4 w-4 fill-current" />))}
                </div>
                <blockquote className="mt-4 text-foreground/90 leading-relaxed">"{d.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <img 
                    src={d.gender === 'male' 
                      ? (i === 0 ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format" :
                         i === 1 ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format" :
                         "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face&auto=format")
                      : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=face&auto=format"
                    } 
                    alt={d.name} 
                    className="h-10 w-10 rounded-full object-cover" 
                    onError={(e: any) => { e.target.src = `https://ui-avatars.com/api/?name=${d.name.replace(' ', '+')}&background=0D8ABC&color=fff&size=100` }}
                  />
                  <div>
                    <div className="text-sm font-bold">{d.name}</div>
                    <div className="text-xs text-muted-foreground">{d.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>Dúvidas</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">
              PERGUNTAS <span className="text-gradient-gold">FREQUENTES</span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              { q: "É realmente grátis?", a: "Sim, 100% gratuito. Você não paga nada para entrar nem para receber as ofertas." },
              { q: "Vou receber spam?", a: "Não. Enviamos apenas ofertas reais de pesca esportiva, com curadoria. Sem correntes, sem propaganda lixo." },
              { q: "Posso sair quando quiser?", a: "Claro. Saia do grupo a qualquer momento com um clique." },
              { q: "Quem está por trás?", a: "Pescadores esportivos apaixonados, com mais de 10 anos no esporte, garimpando o que há de melhor no mercado brasileiro." },
              { q: "As ofertas servem para iniciantes?", a: "Sim! Temos promoções desde kits de iniciante até equipamentos de torneio." },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card p-6 transition hover:border-gold/40 [&[open]]:border-gold/50">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none font-semibold">
                  <span>{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold/10 text-gold transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" aria-hidden className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="container relative py-24 sm:py-32 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-2 text-sm text-destructive">
            <Flame className="h-4 w-4" /> Apenas {spots} vagas restantes hoje
          </div>
          <h2 className="mt-6 font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95]">
            ENTRE AGORA NO<br />
            <span className="text-gradient-gold">PROMOÇÕES DO PESCADOR</span><br />
            E ECONOMIZE DE VERDADE
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Mais de 19 mil pescadores esportivos já estão dentro. A próxima oferta cai no seu WhatsApp ainda hoje.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6">
            <CTA>Entrar no Grupo Agora</CTA>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> 100% Grátis</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Sem spam</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent" /> Saia quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40">
        <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-gold">
              <Fish className="h-4 w-4 text-deep" strokeWidth={2.5} />
            </div>
            <span className="font-display tracking-wider">PROMOÇÕES<span className="text-gradient-gold"> DO PESCADOR</span></span>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Promoções do Pescador · Grupo VIP de ofertas em pesca esportiva no WhatsApp.</p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar no grupo do WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-whatsapp text-white shadow-whatsapp transition hover:scale-110 animate-pulse-ring"
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
      </a>
    </main>
  );
};

export default Index;
