import { createFileRoute } from "@tanstack/react-router";
import wellnessIllustration from "@/assets/wellness-illustration.jpg";
import resultsImg from "@/assets/results.jpg";
import inchadaCopy from "@/assets/inchada-copy.jpg";
import depoimento1 from "@/assets/depoimento-1.jpg";
import depoimento2 from "@/assets/depoimento-2.jpg";
import depoimento3 from "@/assets/depoimento-3.jpg";
import depoimento4 from "@/assets/depoimento-4.jpg";
import depoimento5 from "@/assets/depoimento-5.jpg";
import depoimento6 from "@/assets/depoimento-6.jpg";
import produtoImg from "@/assets/produto-vittamed.png";
import {
  ClipboardList,
  ShoppingCart,
  Droplets,
  Gift
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  Check, Sparkles, ShieldCheck, Clock, Smartphone, Infinity as InfinityIcon,
  Leaf, HeartPulse, Activity, Apple, Sunrise, Moon, Droplet, Flame,
  Star, ChevronDown, ArrowRight, Award,
} from "lucide-react";
import fernandaScheer from "@/assets/fernanda-scheer.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Protocolo VittaMed 7D™ — Leveza em 7 dias" },
      { name: "description", content: "Protocolo digital para mulheres reduzirem o inchaço, recuperarem a leveza e acelerarem resultados em 7 dias. Acesso imediato e garantia." },
      { property: "og:title", content: "Protocolo VittaMed 7D™" },
      { property: "og:description", content: "O método premium para reduzir o inchaço e recuperar a leveza em 7 dias." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: LandingPage,
});

function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "text-white" : "text-primary";
  return (
    <div className={`flex items-center gap-2 ${color}`}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Leaf className="h-4 w-4 text-gold" />
      </div>
      <div className="leading-none">
        <div className="font-display text-xl tracking-tight">VittaMed<sup className="text-gold text-[10px] ml-0.5">®</sup></div>
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-60">Saúde feminina</div>
      </div>
    </div>
  );
}

function Pill({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur px-4 py-2 text-xs font-medium text-primary shadow-soft">
      <Icon className="h-3.5 w-3.5 text-gold" />
      {children}
    </span>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 11, m: 59, s: 59 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let { h, m, s } = p;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const Box = ({ v, l }: { v: number; l: string }) => (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-display text-3xl md:text-4xl shadow-elevated">
        {String(v).padStart(2, "0")}
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</span>
    </div>
  );
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <Box v={t.h} l="Horas" /><span className="text-2xl text-gold">:</span>
      <Box v={t.m} l="Min" /><span className="text-2xl text-gold">:</span>
      <Box v={t.s} l="Seg" />
    </div>
  );
}

const problems = [
  { icon: Droplet, t: "Barriga constantemente inchada" },
  { icon: Activity, t: "Sensação de retenção de líquidos" },
  { icon: Flame, t: "Roupas ficando apertadas" },
  { icon: Sunrise, t: "Falta de energia durante o dia" },
  { icon: Apple, t: "Dietas que nunca funcionam" },
  { icon: HeartPulse, t: "Baixa autoestima ao se olhar no espelho" },
];

const days = [
  { d: "Dia 1", t: "Despertar do corpo", desc: "Eliminação do excesso de líquidos e ajuste da hidratação.", icon: Droplet },
  { d: "Dia 2", t: "Reset alimentar", desc: "Reorganização do prato com alimentos anti-inflamatórios.", icon: Apple },
  { d: "Dia 3", t: "Leveza intestinal", desc: "Estímulo natural ao trânsito intestinal e digestão.", icon: Leaf },
  { d: "Dia 4", t: "Energia em alta", desc: "Combinações alimentares que devolvem a vitalidade.", icon: Sunrise },
  { d: "Dia 5", t: "Redução do inchaço", desc: "Rituais que combatem a retenção de líquidos.", icon: Activity },
  { d: "Dia 6", t: "Recomposição", desc: "Ajustes finos no metabolismo e descanso reparador.", icon: Moon },
  { d: "Dia 7", t: "Resultados visíveis", desc: "Avaliação dos ganhos e plano de continuidade.", icon: Award },
];

const benefits = [
  "Estratégias práticas validadas",
  "Plano simples de seguir no dia a dia",
  "Receitas fáceis e saborosas",
  "Organização alimentar descomplicada",
  "Orientações para reduzir o inchaço",
  "Hábitos que favorecem o emagrecimento",
];

const testimonials = [
  { n: "Mariana, 34", c: "Em 7 dias me senti mais leve, voltei a vestir minha calça favorita. O método é simples e cabe na minha rotina.", r: 5 },
  { n: "Camila, 41", c: "O inchaço sumiu, minha barriga ficou visivelmente menor. E o melhor: sem sofrer com dietas malucas.", r: 5 },
  { n: "Juliana, 29", c: "Finalmente algo que funciona. A energia voltou e o humor melhorou junto. Recomendo de olhos fechados.", r: 5 },
];

const faq = [
  { q: "Funciona para qualquer idade?", a: "Sim. O protocolo foi pensado para mulheres adultas em diferentes fases da vida, com adaptações simples conforme a rotina." },
  { q: "Preciso fazer academia?", a: "Não. O método é focado em hábitos diários e alimentação. Movimento é bem-vindo, mas não obrigatório." },
  { q: "Quanto tempo preciso dedicar por dia?", a: "Em média 15 a 20 minutos por dia para aplicar os rituais propostos." },
  { q: "Como recebo o acesso?", a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail e na área de membros." },
  { q: "O acesso é imediato?", a: "Sim, o acesso é liberado imediatamente após a compra." },
  { q: "Posso acessar pelo celular?", a: "Sim. A plataforma é 100% responsiva — celular, tablet ou computador." },
];

function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

  useEffect(() => {
    const endTime = Date.now() + 3 * 60 * 60 * 1000;

    const updateTimer = () => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
    };

    updateTimer();

    const timer = window.setInterval(updateTimer, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md">
  <div className="container-x flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:py-4">
    <div className="flex items-center justify-between">
      <Logo />

      <a
        href="https://go.fruitfypay.com/EPDtZhsvnbricWpi"
target="_blank"
rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary/90 md:hidden"
      >
        Começar <ArrowRight className="h-3 w-3" />
      </a>
    </div>

    <div className="flex items-center justify-center gap-2 text-sm font-semibold text-primary md:text-base">
      <span>⏰ Oferta termina em</span>

      <span className="rounded-full bg-primary px-3 py-1.5 text-sm font-bold text-white shadow-sm md:px-4 md:py-2 md:text-lg">
        {hours}:{minutes}:{seconds}
      </span>

      <span className="hidden sm:inline text-[#D4AF37] font-bold">
        • R$19,90 hoje
      </span>
    </div>

    <a
      href="https://go.fruitfypay.com/EPDtZhsvnbricWpi"
target="_blank"
rel="noopener noreferrer"
      className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
    >
      Começar agora <ArrowRight className="h-4 w-4" />
    </a>
  </div>
</header>
      {/* HERO */}
      {/* HERO - Dra. Fernanda */}
<section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAF7] to-[#EEF7EF] py-8 md:py-16">
  <div className="container-x">
    <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Imagem */}
<div className="order-1 lg:order-2 relative h-[380px] md:h-[500px] lg:h-auto bg-[#EEF5EF] overflow-hidden">
  {/* Instagram */}
  <div className="absolute left-4 top-4 z-20 md:left-6 md:top-6">
    <a
      href="https://instagram.com/fernandascheernutri"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-3 py-2 text-xs font-bold text-white shadow-lg transition hover:scale-105 md:px-4"
    >
      @fernandascheernutri
    </a>
  </div>

  <img
    src={fernandaScheer}
    alt="Dra. Fernanda Scheer"
    className="absolute inset-0 h-full w-full object-cover object-top lg:object-center"
  />

  {/* Selo aprovado */}
  <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl bg-primary px-4 py-3 text-white shadow-xl md:bottom-auto md:left-auto md:right-6 md:top-6 md:rounded-2xl md:px-5 md:py-4">
    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
      Aprovado pela
    </p>

    <p className="mt-1 font-display text-base leading-tight md:text-lg">
      Dra. Fernanda Scheer
    </p>
  </div>
</div>

        {/* Texto */}
        <div className="order-2 lg:order-1 flex flex-col justify-center p-7 md:p-14">
          <div className="mb-6 md:mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-[#D4AF37]">
              Aprovado pela especialista
            </p>

            <h1 className="mt-2 font-display text-3xl md:text-5xl text-primary">
              Dra. Fernanda Scheer
            </h1>

          
          </div>

          <div className="my-4 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#D4AF37]/40" />
            <span className="text-[#D4AF37] text-xl">✦</span>
            <div className="h-px flex-1 bg-[#D4AF37]/40" />
          </div>

          <div className="mt-6 md:mt-8 flex gap-4 md:gap-5">
            <span className="font-display text-5xl md:text-7xl leading-none text-[#D4AF37]">
              “
            </span>

            <p className="max-w-xl text-xl md:text-2xl leading-relaxed text-foreground">
              Um protocolo simples para reduzir o inchaço, recuperar a leveza e criar hábitos saudáveis em apenas 7 dias.
            </p>
          </div>

          <a
            href="https://go.fruitfypay.com/EPDtZhsvnbricWpi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full md:w-auto items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-base font-bold text-black shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            QUERO ACESSAR O PROTOCOLO →
          </a>

          <div className="mt-6 flex flex-wrap gap-3 md:gap-4">
            <span className="rounded-full border border-border bg-white px-4 md:px-5 py-3 text-sm font-medium text-primary shadow-sm">
               Acesso imediato
            </span>

            <span className="rounded-full border border-border bg-white px-4 md:px-5 py-3 text-sm font-medium text-primary shadow-sm">
               Método digital
            </span>

            <span className="rounded-full border border-border bg-white px-4 md:px-5 py-3 text-sm font-medium text-primary shadow-sm">
               Garantia de 7 dias
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Produto + Oferta */}
<section className="bg-[#F8FAF7] py-16 md:py-8">
  <div className="container-x">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      
      {/* Informações */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
          Tudo incluso no protocolo
        </p>

        <h2 className="mt-3 font-display text-3xl md:text-5xl text-primary">
          O que você recebe ao acessar o VittaMed 7D
        </h2>

        <div className="mt-8 grid gap-4">
          {[
            "Guia completo do protocolo",
            "Plano alimentar simplificado",
            "Lista de compras pronta",
            "Estratégias para reduzir o inchaço",
            "Acesso imediato pelo celular",
            "Bônus exclusivos",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-border/60"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#043020]/10 text-primary font-bold">
                ✓
              </span>
              <span className="font-medium text-primary">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg border border-border/60">
          <p className="text-sm text-muted-foreground">Oferta especial hoje</p>

          <div className="mt-2 flex items-end gap-3">
            <span className="text-lg text-muted-foreground line-through">
              R$89,90
            </span>

            <span className="font-display text-5xl text-primary">
              R$19,90
            </span>
          </div>

          <p className="mt-2 text-sm font-semibold text-[#D4AF37]">
            Economia de 78% por tempo limitado
          </p>

          <a
            href="https://go.fruitfypay.com/EPDtZhsvnbricWpi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-base font-bold text-black shadow-lg transition hover:scale-105"
          >
            QUERO ACESSAR AGORA →
          </a>
        </div>
      </div>

      {/* Mockup do produto */}
      <div className="relative">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl border border-border/60">
          <img
            src={produtoImg}
            alt="Protocolo VittaMed 7D"
            className="w-full rounded-3xl object-cover"
          />
        </div>

        <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-primary px-6 py-4 text-center text-white shadow-xl">
          <p className="text-sm font-semibold">
            Acesso imediato após a compra
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="bg-[#F8FAF7] py-8 md:py-8">
  <div className="container-x">
    <div className="text-center">

  <span className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
    Resultados reais • Mulheres reais
  </span>

  <h2 className="mt-6 font-display text-4xl md:text-5xl text-primary">
    Resultados compartilhados por alunas
  </h2>

  <p className="mt-4 text-muted-foreground">
    Arraste para o lado e veja experiências reais com o protocolo.
  </p>

</div>

    <div className="mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory">
      {[
        depoimento1,
        depoimento2,
        depoimento3,
        depoimento4,
        depoimento5,
        depoimento6,
      ].map((foto, index) => (
        <div
          key={index}
          className="snap-center shrink-0 w-[82%] sm:w-[48%] lg:w-[31%] overflow-hidden rounded-3xl border border-border/60 bg-white shadow-md"
        >
          <img
            src={foto}
            alt={`Depoimento ${index + 1}`}
            className="h-[430px] w-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</section>
{/* COPY IMPACTANTE */}
<section className="bg-white py-10 md:py-16">
  <div className="container-x">

    <div className="overflow-hidden rounded-[2rem] shadow-xl border border-border/50">
      <img
        src={inchadaCopy}
        alt="Você não está gorda. Você pode estar inchada."
        className="w-full h-auto object-cover"
      />
    </div>

  

  </div>
</section>
{/* Garantia */}
<section className="bg-white py-2 md:py-8">
  <div className="container-x">
    <div className="grid items-center gap-10 rounded-[2rem] bg-[#043020] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-14 text-white shadow-xl">
      
      <div className="flex justify-center">
        <div className="flex h-52 w-52 flex-col items-center justify-center rounded-full bg-[#D4AF37] text-center text-[#043020] shadow-lg">
          <span className="font-display text-7xl leading-none">7</span>
          <span className="mt-1 text-2xl font-bold uppercase">dias</span>
          <span className="mt-3 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase">
            garantia
          </span>
        </div>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]">
          Risco zero
        </p>

        <h2 className="mt-3 font-display text-3xl md:text-5xl">
          Resultados ou seu dinheiro de volta.
        </h2>

        <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">
          Você tem 7 dias para conhecer o Protocolo VittaMed 7D™. Se não fizer sentido para você, basta solicitar o reembolso dentro do prazo.
        </p>

        
      </div>

    </div>
  </div>
</section>

  

      

      {/* OFERTA */}
      <section id="oferta" className="py-6 md:py-8">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 md:p-14 text-primary-foreground shadow-elevated">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sage/30 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold">
                  <Sparkles className="h-3.5 w-3.5" /> Oferta Especial
                </div>
                <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">
                  Comece sua transformação <em className="text-gold not-italic">hoje mesmo</em>.
                </h2>
                <p className="mt-4 text-primary-foreground/80 max-w-md">
                  Tudo o que você precisa para reduzir o inchaço, recuperar a leveza e voltar a se sentir bem com o próprio corpo.
                </p>
                <div className="mt-8">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">A oferta expira em</div>
                  <Countdown />
                </div>
              </div>

              <div className="rounded-3xl bg-white text-foreground p-8 shadow-elevated">
                <div className="text-center">
                  <div className="text-sm uppercase tracking-[0.2em] text-sage">Protocolo VittaMed 7D™</div>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="text-muted-foreground line-through">R$ 89,90</span>
                    <span className="rounded-full bg-gold/20 px-2 py-0.5 text-xs font-semibold text-primary">-78%</span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-center gap-1">
                    <span className="text-2xl text-primary">R$</span>
                    <span className="font-display text-7xl text-primary">19,</span>
                    <span className="font-display text-4xl text-primary">90</span>
                  </div>
                  <div className="text-xs text-muted-foreground">pagamento único · sem mensalidades</div>
                </div>

                <ul className="mt-8 space-y-3">
                  {[
                    { i: InfinityIcon, t: "Acesso vitalício" },
                    { i: Sparkles, t: "Atualizações futuras gratuitas" },
                    { i: ShieldCheck, t: "Garantia incondicional de 7 dias" },
                    { i: Smartphone, t: "Acesso por celular, tablet ou computador" },
                  ].map(({ i: I, t }) => (
                    <li key={t} className="flex items-center gap-3 text-sm">
                      <I className="h-4 w-4 text-sage" /> {t}
                    </li>
                  ))}
                </ul>

                <button
  type="button"
  onClick={() => window.open("https://go.fruitfypay.com/EPDtZhsvnbricWpi", "_blank")}
  className="btn-primary btn-primary-hover mt-8 w-full text-base"
>
  QUERO ACESSAR AGORA <ArrowRight className="h-4 w-4" />
</button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" /> Compra 100% segura · SSL
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TRUST BAR */}
      <section className="border-y border-border bg-cream">
        <div className="container-x py-6 flex flex-wrap items-center justify-around gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-sage" /> Compra 100% segura</span>
          <span className="flex items-center gap-2"><InfinityIcon className="h-4 w-4 text-sage" /> Acesso vitalício</span>
          <span className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-sage" /> 100% digital</span>
          <span className="flex items-center gap-2"><Award className="h-4 w-4 text-sage" /> +12000 clientes satisfeitos</span>
        </div>
      </section>

      

      {/* FAQ */}
      <section className="py-20 md:py-8">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-sage mb-3">Dúvidas frequentes</div>
            <h2 className="font-display text-4xl md:text-5xl text-primary">Perguntas frequentes</h2>
          </div>
          <div className="space-y-3">
            {faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="rounded-2xl border border-border bg-card shadow-soft overflow-hidden">
                  <button onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                    <span className="font-medium text-primary">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-sage transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container-x py-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Logo light />
              <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
                Soluções digitais de bem-estar para mulheres que querem viver mais leves, com saúde e confiança.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Institucional</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-gold transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-gold transition">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-gold transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Atendimento</div>
              <p className="text-sm text-primary-foreground/70">contato@vittamed.com.br</p>
              <p className="text-sm text-primary-foreground/70 mt-1">Seg. a Sex. — 9h às 18h</p>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 leading-relaxed">
            
            <p>© {new Date().getFullYear()} VittaMed®. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
