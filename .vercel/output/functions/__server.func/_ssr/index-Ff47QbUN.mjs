import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ArrowRight, S as Sparkles, I as Infinity, a as ShieldCheck, b as Smartphone, c as Award, C as ChevronDown, L as Leaf } from "../_libs/lucide-react.mjs";
const inchadaCopy = "/assets/inchada-copy-DlnOOAxw.jpg";
const depoimento1 = "/assets/depoimento-1-B5GecBfW.jpg";
const depoimento2 = "/assets/depoimento-2-BjurzBLs.jpg";
const depoimento3 = "/assets/depoimento-3-B_A7NySa.jpg";
const depoimento4 = "/assets/depoimento-4-Tta52r8d.jpg";
const depoimento5 = "/assets/depoimento-5-C3sF5389.jpg";
const depoimento6 = "/assets/depoimento-6-BKUStuiL.jpg";
const produtoImg = "/assets/produto-vittamed-B7Nnd-qF.png";
const fernandaScheer = "/assets/fernanda-scheer-BU7zFswm.jpg";
function Logo({
  light = false
}) {
  const color = light ? "text-white" : "text-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-2 ${color}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-4 w-4 text-gold" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl tracking-tight", children: [
        "VittaMed",
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { className: "text-gold text-[10px] ml-0.5", children: "®" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] opacity-60", children: "Saúde feminina" })
    ] })
  ] });
}
function Countdown() {
  const [t, setT] = reactExports.useState({
    h: 11,
    m: 59,
    s: 59
  });
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setT((p) => {
        let {
          h,
          m,
          s
        } = p;
        s--;
        if (s < 0) {
          s = 59;
          m--;
        }
        if (m < 0) {
          m = 59;
          h--;
        }
        if (h < 0) {
          h = 23;
        }
        return {
          h,
          m,
          s
        };
      });
    }, 1e3);
    return () => clearInterval(id);
  }, []);
  const Box = ({
    v,
    l
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-display text-3xl md:text-4xl shadow-elevated", children: String(v).padStart(2, "0") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: l })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 md:gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { v: t.h, l: "Horas" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-gold", children: ":" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { v: t.m, l: "Min" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-gold", children: ":" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { v: t.s, l: "Seg" })
  ] });
}
const faq = [{
  q: "Funciona para qualquer idade?",
  a: "Sim. O protocolo foi pensado para mulheres adultas em diferentes fases da vida, com adaptações simples conforme a rotina."
}, {
  q: "Preciso fazer academia?",
  a: "Não. O método é focado em hábitos diários e alimentação. Movimento é bem-vindo, mas não obrigatório."
}, {
  q: "Quanto tempo preciso dedicar por dia?",
  a: "Em média 15 a 20 minutos por dia para aplicar os rituais propostos."
}, {
  q: "Como recebo o acesso?",
  a: "Logo após a confirmação do pagamento você recebe o acesso por e-mail e na área de membros."
}, {
  q: "O acesso é imediato?",
  a: "Sim, o acesso é liberado imediatamente após a compra."
}, {
  q: "Posso acessar pelo celular?",
  a: "Sim. A plataforma é 100% responsiva — celular, tablet ou computador."
}];
function LandingPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(0);
  const [timeLeft, setTimeLeft] = reactExports.useState(3 * 60 * 60);
  reactExports.useEffect(() => {
    const endTime = Date.now() + 3 * 60 * 60 * 1e3;
    const updateTimer = () => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1e3));
      setTimeLeft(remaining);
    };
    updateTimer();
    const timer = window.setInterval(updateTimer, 1e3);
    return () => window.clearInterval(timer);
  }, []);
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor(timeLeft % 3600 / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:gap-4 md:py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#oferta", className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition hover:bg-primary/90 md:hidden", children: [
          "Começar ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-sm font-semibold text-primary md:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "⏰ Oferta termina em" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full bg-primary px-3 py-1.5 text-sm font-bold text-white shadow-sm md:px-4 md:py-2 md:text-lg", children: [
          hours,
          ":",
          minutes,
          ":",
          seconds
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-[#D4AF37] font-bold", children: "• R$19,90 hoje" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#oferta", className: "hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90", children: [
        "Começar agora ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAF7] to-[#EEF7EF] py-8 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2 relative h-[380px] md:h-[500px] lg:h-auto bg-[#EEF5EF] overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 z-20 md:left-6 md:top-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://instagram.com/fernandascheernutri", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-3 py-2 text-xs font-bold text-white shadow-lg transition hover:scale-105 md:px-4", children: "@fernandascheernutri" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fernandaScheer, alt: "Dra. Fernanda Scheer", className: "absolute inset-0 h-full w-full object-cover object-top lg:object-center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 z-20 rounded-xl bg-primary px-4 py-3 text-white shadow-xl md:bottom-auto md:left-auto md:right-6 md:top-6 md:rounded-2xl md:px-5 md:py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]", children: "Aprovado pela" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-base leading-tight md:text-lg", children: "Dra. Fernanda Scheer" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 lg:order-1 flex flex-col justify-center p-7 md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 md:mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-[#D4AF37]", children: "Aprovado pela especialista" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 font-display text-3xl md:text-5xl text-primary", children: "Dra. Fernanda Scheer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-[#D4AF37]/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#D4AF37] text-xl", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-[#D4AF37]/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 md:mt-8 flex gap-4 md:gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl md:text-7xl leading-none text-[#D4AF37]", children: "“" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-xl text-xl md:text-2xl leading-relaxed text-foreground", children: "Um protocolo simples para reduzir o inchaço, recuperar a leveza e criar hábitos saudáveis em apenas 7 dias." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#oferta", className: "mt-8 inline-flex w-full md:w-auto items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-base font-bold text-black shadow-lg transition hover:scale-105 hover:shadow-xl", children: "QUERO ACESSAR O PROTOCOLO →" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 md:gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-white px-4 md:px-5 py-3 text-sm font-medium text-primary shadow-sm", children: "Acesso imediato" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-white px-4 md:px-5 py-3 text-sm font-medium text-primary shadow-sm", children: "Método digital" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-white px-4 md:px-5 py-3 text-sm font-medium text-primary shadow-sm", children: "Garantia de 7 dias" })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8FAF7] py-16 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]", children: "Tudo incluso no protocolo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl text-primary", children: "O que você recebe ao acessar o VittaMed 7D" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4", children: ["Guia completo do protocolo", "Plano alimentar simplificado", "Lista de compras pronta", "Estratégias para reduzir o inchaço", "Acesso imediato pelo celular", "Bônus exclusivos"].map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#043020]/10 text-primary font-bold", children: "✓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary", children: item })
        ] }, index)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-3xl bg-white p-6 shadow-lg border border-border/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Oferta especial hoje" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg text-muted-foreground line-through", children: "R$89,90" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-primary", children: "R$19,90" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-semibold text-[#D4AF37]", children: "Economia de 78% por tempo limitado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#oferta", className: "mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-base font-bold text-black shadow-lg transition hover:scale-105", children: "QUERO ACESSAR AGORA →" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[2rem] bg-white p-6 shadow-xl border border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: produtoImg, alt: "Protocolo VittaMed 7D", className: "w-full rounded-3xl object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-5 left-6 right-6 rounded-2xl bg-primary px-6 py-4 text-center text-white shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Acesso imediato após a compra" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-10 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] shadow-xl border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: inchadaCopy, alt: "Você não está gorda. Você pode estar inchada.", className: "w-full h-auto object-cover" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F8FAF7] py-8 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]", children: "Resultados reais • Mulheres reais" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-4xl md:text-5xl text-primary", children: "Resultados compartilhados por alunas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Arraste para o lado e veja experiências reais com o protocolo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory", children: [depoimento1, depoimento2, depoimento3, depoimento4, depoimento5, depoimento6].map((foto, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[82%] sm:w-[48%] lg:w-[31%] overflow-hidden rounded-3xl border border-border/60 bg-white shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: foto, alt: `Depoimento ${index + 1}`, className: "h-[430px] w-full object-cover" }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-white py-2 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 rounded-[2rem] bg-[#043020] p-8 md:grid-cols-[0.8fr_1.2fr] md:p-14 text-white shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-52 w-52 flex-col items-center justify-center rounded-full bg-[#D4AF37] text-center text-[#043020] shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-7xl leading-none", children: "7" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-2xl font-bold uppercase", children: "dias" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase", children: "garantia" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.35em] text-[#D4AF37]", children: "Risco zero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl md:text-5xl", children: "Resultados ou seu dinheiro de volta." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-white/80 leading-relaxed", children: "Você tem 7 dias para conhecer o Protocolo VittaMed 7D™. Se não fizer sentido para você, basta solicitar o reembolso dentro do prazo." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "oferta", className: "py-6 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] bg-primary p-8 md:p-14 text-primary-foreground shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sage/30 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-10 lg:grid-cols-2 lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Oferta Especial"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-4xl md:text-5xl leading-tight", children: [
            "Comece sua transformação ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold not-italic", children: "hoje mesmo" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/80 max-w-md", children: "Tudo o que você precisa para reduzir o inchaço, recuperar a leveza e voltar a se sentir bem com o próprio corpo." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-3", children: "A oferta expira em" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-white text-foreground p-8 shadow-elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm uppercase tracking-[0.2em] text-sage", children: "Protocolo VittaMed 7D™" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground line-through", children: "R$ 89,90" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gold/20 px-2 py-0.5 text-xs font-semibold text-primary", children: "-78%" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline justify-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-primary", children: "R$" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-7xl text-primary", children: "19," }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl text-primary", children: "90" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "pagamento único · sem mensalidades" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: [{
            i: Infinity,
            t: "Acesso vitalício"
          }, {
            i: Sparkles,
            t: "Atualizações futuras gratuitas"
          }, {
            i: ShieldCheck,
            t: "Garantia incondicional de 7 dias"
          }, {
            i: Smartphone,
            t: "Acesso por celular, tablet ou computador"
          }].map(({
            i: I,
            t
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4 text-sage" }),
            " ",
            t
          ] }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "btn-primary btn-primary-hover mt-8 w-full text-base", children: [
            "QUERO ACESSAR AGORA ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
            " Compra 100% segura · SSL"
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-6 flex flex-wrap items-center justify-around gap-6 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-sage" }),
        " Compra 100% segura"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Infinity, { className: "h-4 w-4 text-sage" }),
        " Acesso vitalício"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-4 w-4 text-sage" }),
        " 100% digital"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-sage" }),
        " +12000 clientes satisfeitos"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-sage mb-3", children: "Dúvidas frequentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-primary", children: "Perguntas frequentes" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: faq.map((f, i) => {
        const open = openFaq === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card shadow-soft overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpenFaq(open ? null : i), className: "flex w-full items-center justify-between gap-4 p-6 text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-primary", children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-5 w-5 text-sage transition-transform ${open ? "rotate-180" : ""}` })
          ] }),
          open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-6 text-muted-foreground leading-relaxed", children: f.a })
        ] }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { light: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-primary-foreground/70 max-w-xs leading-relaxed", children: "Soluções digitais de bem-estar para mulheres que querem viver mais leves, com saúde e confiança." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: "Institucional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition", children: "Termos de Uso" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition", children: "Política de Privacidade" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold transition", children: "Contato" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-gold mb-4", children: "Atendimento" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70", children: "contato@vittamed.com.br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/70 mt-1", children: "Seg. a Sex. — 9h às 18h" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " VittaMed®. Todos os direitos reservados."
      ] }) })
    ] }) })
  ] });
}
export {
  LandingPage as component
};
