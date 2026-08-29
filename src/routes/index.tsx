import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  ExternalLink,
  Instagram,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Quote,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import logoImg from "@/assets/logo.png";
import heroImg from "@/assets/hero-clinic.jpg";
import smileClientsImg from "@/assets/smile-clients.jpg";
import developerImg from "@/assets/developer.jpg";
import domainHostingImg from "@/assets/domain-hosting.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import { submitLead } from "@/lib/submit-lead.functions";

// --- Framer Motion Utility Components ---

function ScrubbingText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 45%"],
  });

  const words = text.split(" ");
  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

function CinematicBlur({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ filter: "blur(12px)", opacity: 0, scale: 0.95, y: 30 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <motion.p
      ref={ref}
      variants={container as any}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child as any}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Odonto Websites | Criação de Sites para Dentistas e Clínicas Odontológicas" },
      {
        name: "description",
        content:
          "Especialista em Web Design e criação de sites para dentistas e clínicas odontológicas. Sites rápidos, com SEO local, alta conversão, compliance CFO e WhatsApp integrado.",
      },
      {
        name: "keywords",
        content:
          "site para dentista, criação de site odontologia, web design dentista, marketing odontológico, site para clínica odontológica, SEO odontológico, landing page dentista, presença digital dentista",
      },
      { property: "og:title", content: "Odonto Websites | Sites de Alta Conversão para Dentistas" },
      {
        property: "og:description",
        content:
          "Transformamos visitantes em pacientes reais com design e estratégia pensados exclusivamente para o nicho odontológico.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://odontowebsites.com.br/" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Odonto Websites | Criação de Sites para Dentistas" },
      {
        name: "twitter:description",
        content:
          "Sites para clínicas odontológicas que aumentam seus agendamentos com design moderno e SEO local.",
      },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://odontowebsites.com.br/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://odontowebsites.com.br/#website",
              "url": "https://odontowebsites.com.br/",
              "name": "Odonto Websites",
              "description": "Criação de sites e landing pages de alta conversão para dentistas e clínicas odontológicas.",
              "inLanguage": "pt-BR"
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://odontowebsites.com.br/#service",
              "name": "Odonto Websites",
              "url": "https://odontowebsites.com.br/",
              "logo": "https://odontowebsites.com.br/logo.png",
              "image": "https://odontowebsites.com.br/logo.png",
              "telephone": "+55-11-5192-2327",
              "email": "contato@odontowebsites.com.br",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Brasil"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "addressCountry": "BR"
              },
              "description": "Estrategista digital e Web Designer sênior focado exclusivamente na criação de sites para o nicho odontológico.",
              "knowsAbout": [
                "Criação de Sites para Dentistas",
                "SEO Local para Clínicas Odontológicas",
                "Landing Pages de Alta Conversão",
                "Marketing Odontológico Ético CFO"
              ]
            },
            {
              "@type": "FAQPage",
              "@id": "https://odontowebsites.com.br/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quanto tempo leva para o site ficar pronto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O prazo médio é de 21 dias úteis, dependendo do envio de materiais e rodadas de aprovação."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Vocês cuidam do SEO e do Google Meu Negócio também?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, o projeto já inclui a otimização de SEO local e as configurações básicas para você aparecer nas buscas do seu bairro."
                  }
                },
                {
                  "@type": "Question",
                  "name": "E se eu já tiver um site, dá pra reformular ou precisa ser do zero?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Avaliamos caso a caso, mas geralmente fazemos o reposicionamento completo para garantir que a nova estratégia de conversão funcione 100%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Como funciona o suporte depois que o site vai ao ar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oferecemos suporte inicial e treinamento gravado para sua equipe. Também temos planos de manutenção caso você não queira se preocupar com nada."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Preciso fornecer os textos ou vocês escrevem tudo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nós escrevemos tudo. Fazemos uma entrevista estratégica e nosso time de copy entrega os textos focados em conversão odontológica."
                  }
                }
              ]
            }
          ]
        })
      }
    ]
  }),
  component: Index,
});

// SUBSTITUIR PELO NÚMERO REAL ANTES DE PUBLICAR
const WHATSAPP_NUMBER = "551151922327";
const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WHATSAPP = createWhatsAppLink(
  "Olá! Conheci a Odonto Websites pelo site e quero entender como vocês podem melhorar a presença digital da minha clínica.",
);
const WHATSAPP_FLOATING = createWhatsAppLink(
  "Olá! Estou navegando pelo site da Odonto Websites e gostaria de conversar sobre um projeto para minha clínica.",
);
const WHATSAPP_DIAGNOSTICO = createWhatsAppLink(
  "Olá! Quero solicitar um diagnóstico gratuito da presença digital da minha clínica. Como funciona?",
);

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-5 sm:px-6 py-10 sm:py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary ${className}`}>
      {children}
    </span>
  );
}

type RevealDirection = "up" | "left" | "right" | "scale";

function RevealSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  const dirClass = {
    up: "reveal",
    left: "reveal-left",
    right: "reveal-right",
    scale: "reveal-scale",
  }[direction];

  return (
    <div
      ref={ref}
      className={`${dirClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-white font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden pb-24 md:pb-0">
      <Header />
      <Hero />
      <SocialProofCarousel />
      
      {/* 1. Conscientização: Todo dia sem site é um paciente a menos */}
      <div className="bg-white">
        <RevealSection direction="up">
          <GetMoreClients />
        </RevealSection>
      </div>

      {/* 2. A Dor: O que trava sua clínica hoje */}
      <div className="bg-background">
        <RevealSection direction="up" delay={50}>
          <Problem />
        </RevealSection>
      </div>
      
      {/* 3. A Grande Solução: Presença Digital Completa */}
      <div className="bg-white">
        <RevealSection direction="up" delay={50}>
          <FullPresence />
        </RevealSection>
      </div>

      {/* 4. Prova Real: Portfólio de Cases */}
      <div className="bg-background">
        <RevealSection direction="scale" delay={50}>
          <Cases />
        </RevealSection>
      </div>

      {/* 5. Segurança: Domínio e Hospedagem no seu nome */}
      <div className="bg-white">
        <RevealSection direction="up" delay={50}>
          <DomainHosting />
        </RevealSection>
      </div>

      {/* 6. Autoridade: Sobre o Desenvolvedor (Giovanni Pinheiro) */}
      <div className="bg-background">
        <RevealSection direction="left" delay={50}>
          <Developer />
        </RevealSection>
      </div>

      {/* 7. Processo: 5 Passos Simples */}
      <div className="bg-white">
        <RevealSection direction="up" delay={50}>
          <Method />
        </RevealSection>
      </div>

      {/* 7.5. Comparativo: Odonto Websites vs Agências Genéricas */}
      <div className="bg-background">
        <RevealSection direction="up" delay={50}>
          <ComparisonTable />
        </RevealSection>
      </div>
      
      {/* 8. Decisão: Planos & Preços */}
      <div className="bg-white">
        <RevealSection direction="scale" delay={50}>
          <Pricing />
        </RevealSection>
      </div>

      {/* 9. Urgência & Dúvidas: Escassez & FAQ */}
      <div className="bg-white">
        <RevealSection direction="up" delay={50}>
          <Scarcity />
          <Faq />
        </RevealSection>
      </div>
      
      {/* 10. Ação: Formulário de Diagnóstico */}
      <div className="bg-background">
        <RevealSection direction="up" delay={50}>
          <LeadForm />
        </RevealSection>
      </div>
      
      <Footer />
      <StickyCta />
      <FloatingWhatsApp />
    </main>
  );
}

function usePastHero() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("top");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        setIsPastHero(rect.bottom <= window.innerHeight * 0.3);
      } else {
        setIsPastHero(window.scrollY > 350);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isPastHero;
}

function FloatingWhatsApp() {
  const [showInvite, setShowInvite] = useState(true);
  const [highlight, setHighlight] = useState(true);
  const isPastHero = usePastHero();

  useEffect(() => {
    const highlightTimer = window.setTimeout(() => setHighlight(false), 1200);
    const inviteTimer = window.setTimeout(() => setShowInvite(false), 5000);

    return () => {
      window.clearTimeout(highlightTimer);
      window.clearTimeout(inviteTimer);
    };
  }, []);

  return (
    <a
      href={WHATSAPP_FLOATING}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setShowInvite(false)}
      className={`fixed ${
        isPastHero ? "bottom-20" : "bottom-5"
      } right-4 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-500 hover:scale-110 md:bottom-6 ${
        highlight ? "animate-bounce" : ""
      }`}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="size-6 sm:size-8" />
      {showInvite && (
        <span className="absolute right-14 top-1/2 w-max -translate-y-1/2 rounded-md bg-foreground px-2.5 py-1.5 text-[11px] font-bold text-background shadow-lg animate-in fade-in slide-in-from-right-2 duration-300 pointer-events-none">
          Tire suas dúvidas
        </span>
      )}
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img src={logoImg} alt="Odonto Websites Logo" className="h-9 sm:h-11 w-auto object-contain" />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70 lg:flex">
          <a href="#cases" className="transition-colors hover:text-primary">Modelos</a>
          <a href="#seguranca" className="transition-colors hover:text-primary">Segurança</a>
          <a href="#desenvolvedor" className="transition-colors hover:text-primary">Sobre Mim</a>
          <a href="#metodo" className="transition-colors hover:text-primary">Processo</a>
          <a href="#investimento" className="transition-colors hover:text-primary">Planos</a>
          <a href="#diagnostico" className="transition-colors hover:text-primary">Contato</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="cta" size="lg" className="hidden sm:flex" asChild>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Fale comigo</a>
          </Button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground lg:hidden"
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl lg:hidden overflow-y-auto">
          <div className="flex min-h-full flex-col p-6 sm:p-8 justify-between">
            <div className="flex items-center justify-between">
              <img src={logoImg} alt="Odonto Websites Logo" className="h-9 w-auto object-contain" />
              <button 
                onClick={() => setIsOpen(false)}
                className="flex size-10 items-center justify-center rounded-xl bg-secondary text-foreground"
                aria-label="Fechar menu"
              >
                <X className="size-6" />
              </button>
            </div>
            <nav className="my-10 flex flex-col gap-5 text-lg sm:text-xl font-black uppercase tracking-wider">
              <a href="#cases" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2.5 border-b border-border/40">Modelos</a>
              <a href="#desenvolvedor" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2.5 border-b border-border/40">Sobre Mim</a>
              <a href="#metodo" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2.5 border-b border-border/40">Processo</a>
              <a href="#investimento" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2.5 border-b border-border/40">Planos</a>
              <a href="#diagnostico" onClick={() => setIsOpen(false)} className="hover:text-primary transition-colors py-2.5 border-b border-border/40">Contato</a>
            </nav>
            <Button variant="cta" size="xl" className="w-full" asChild>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Fale comigo no WhatsApp</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <div id="top" className="relative flex min-h-[calc(100svh-65px)] items-center justify-center overflow-x-hidden bg-white py-10 sm:py-16 md:py-20 lg:min-h-[85vh] border-b border-border/40">
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] bg-primary/20 rounded-full blur-[60px] md:blur-[100px]" />
      </div>
      
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 relative z-10">
        <div className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Texto */}
          <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left order-1 mx-auto lg:mx-0">
            {/* Logo em destaque apenas no mobile */}
            <div className="mb-5 sm:mb-6 lg:hidden flex items-center justify-center">
              <img
                src={logoImg}
                alt="Odonto Websites Logo"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            <h1 className="mt-0 max-w-full font-display text-[2.25rem] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-black tracking-tight text-foreground">
              Sites que fazem sua clínica <span className="text-primary">agendar mais</span>.
            </h1>
            {/* Parágrafo centralizado com boa largura de leitura no mobile */}
            <p className="mt-4 sm:mt-6 max-w-sm sm:max-w-xl text-sm sm:text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
              Transformamos visitantes em pacientes reais com design e estratégia pensados exclusivamente para o nicho odontológico.
            </p>
            <div className="mt-7 sm:mt-8 flex w-full max-w-xs sm:max-w-none flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 md:mt-10">
              <Button variant="cta" size="xl" className="w-full sm:w-auto" asChild>
                <a href="#diagnostico" className="flex items-center justify-center gap-2">
                  Quero meu diagnóstico gratuito
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="w-full sm:w-auto text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors" asChild>
                <a href="#cases" className="flex items-center justify-center gap-2">
                  Ver modelos
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </Button>
            </div>
            {/* Prova social/autoridade */}
            <p className="mt-6 sm:mt-8 max-w-xs sm:max-w-md text-[10px] sm:text-xs font-bold uppercase leading-relaxed tracking-wider text-muted-foreground/60">
              2 anos focados em odontologia · Metodologia própria de conversão · Compliance CFO/CRO
            </p>
          </div>

          {/* Imagem (Responsiva em mobile e desktop) */}
          <div className="relative min-w-0 group order-2 mt-8 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none block">
            <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-xl opacity-60 group-hover:opacity-80 transition duration-1000" />
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border/50 shadow-2xl shadow-primary/5">
              <img
                src={heroImg}
                alt="Dentista explicando diagnóstico para paciente em consultório odontológico"
                className="w-full h-auto object-cover aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/4] transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialProofCarousel() {
  const reviews = [
    {
      author: "Ana Beatriz",
      clinic: "Sorriso & Arte",
      text: "Profissional extremamente qualificado e competente. Superou todas as expectativas com um atendimento atencioso, pontual e muito dedicado.",
      tag: "Qualificação",
    },
    {
      author: "Marcos Vinícius",
      clinic: "Vinícius Odontologia",
      text: "Excelente profissional! Muito dedicado, transparente e com um domínio técnico admirável. Transmite total confiança em cada etapa do trabalho.",
      tag: "Comprometimento",
    },
    {
      author: "Juliana Mendes",
      clinic: "Mendes & Associados",
      text: "Trabalho impecável e de altíssimo nível. Um profissional ético, atencioso e que realmente entende as necessidades do cliente. Recomendo de olhos fechados.",
      tag: "Excelência",
    },
    {
      author: "Ricardo Santos",
      clinic: "Santos Dental Care",
      text: "Profissional pontual, prestativo e muito resolutivo. A comunicação foi clara e transparente do início ao fim, com entrega impecável.",
      tag: "Agilidade",
    },
    {
      author: "Carla Dias",
      clinic: "Dias Odonto",
      text: "Competência, agilidade e muita atenção aos detalhes. É raro encontrar um profissional tão comprometido com a qualidade e a satisfação do cliente.",
      tag: "Confiança",
    },
  ];

  const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className="bg-background py-10 sm:py-16 overflow-hidden border-b border-border/40">
      <div className="mx-auto mb-6 sm:mb-10 max-w-7xl px-4 sm:px-6 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-6">
          <div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-foreground leading-tight">
              Eles alcançaram o sucesso online — agora é a sua vez
            </h2>
          </div>
          <div className="flex flex-col items-center lg:items-end gap-1 shrink-0">
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground text-center lg:text-right max-w-xs">
              Depoimentos de clínicas atendidas
            </p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="animate-scroll pause-scroll py-2 sm:py-4">
          {infiniteReviews.map((review, i) => (
            <div 
              key={i} 
              className="mx-2 flex w-[260px] sm:w-[320px] md:w-[400px] shrink-0 flex-col justify-between rounded-2xl border border-border/50 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div>
                <p className="mb-3 sm:mb-4 text-[9px] font-black uppercase tracking-widest text-primary/80">{review.tag}</p>
                <p className="text-xs sm:text-sm md:text-base text-foreground/80 font-medium leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-4 sm:mt-6 border-t border-border/40 pt-3 sm:pt-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black text-foreground uppercase tracking-widest leading-none">{review.author}</p>
                  <p className="mt-1 text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{review.clinic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GetMoreClients() {
  return (
    <Section className="relative overflow-hidden bg-transparent text-navy">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 h-64 w-64 sm:h-96 sm:w-96 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
      </div>

      <div className="grid min-w-0 gap-10 sm:gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Left Column */}
        <div className="flex min-w-0 flex-col items-start">
          <Eyebrow className="mb-3 sm:mb-5">
            Metodologia validada em clínicas
          </Eyebrow>

          <h2 className="font-display text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-foreground">
            Todo dia sem um bom site é <span className="text-primary italic">um paciente a menos</span> na sua agenda.
          </h2>

          {/* Parágrafo: espaço MENOR que a separação pro botão */}
          <p className="mt-3 sm:mt-5 max-w-[38ch] sm:max-w-lg text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground font-medium">
            8 em cada 10 pacientes pesquisam no Google antes de marcar uma consulta. Se sua clínica não aparece bem posicionada, esse paciente vai parar no concorrente — não porque ele é melhor, mas porque apareceu primeiro.
          </p>

          {/* Botão: espaço MAIOR — marca separação de grupo */}
          <div className="mt-6 sm:mt-8">
            <Button variant="cta" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#diagnostico" className="flex items-center justify-center gap-2">
                Quero aparecer no google
                <ArrowRight className="size-4 shrink-0" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column: Imagem expandida sem cartão envolvente */}
        <div className="relative min-w-0 group w-full">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 pointer-events-none" />
          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/4] xl:aspect-[5/4] w-full overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-border/50 bg-card shadow-2xl">
            <img 
              src={smileClientsImg} 
              alt="Paciente com sorriso transformado e saudável" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}


const stats = [
  { value: "02 anos", label: "dedicados exclusivamente ao nicho odontológico" },
  { value: "Nicho", label: "somente clínicas e consultórios odontológicos" },
  { value: "21 dias", label: "prazo de entrega previsto em contrato" },
  { value: "CFO/CRO", label: "compliance ético revisado em todo projeto" },
];

function ProofBar() {
  return (
    <div className="border-y border-border/50 bg-background py-10 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:gap-12 lg:flex-row">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground max-w-xs text-center lg:text-left">
              Estúdio especializado em sites para clínicas odontológicas
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:gap-12 text-center lg:grid-cols-4 lg:text-left w-full lg:w-auto">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center lg:items-start group transition-all hover:-translate-y-1">
                <p className="font-display text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors">{s.value}</p>
                <p className="mt-1 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const wrong = [
  "Site feito por agência generalista que não entende de odonto",
  "Ninguém acha a clínica no Google Maps do bairro",
  "Página que fala de \"tecnologia\" e ignora o desejo do paciente",
  "WhatsApp escondido que dificulta o agendamento imediato",
  "Risco ético por falta de compliance com o CRO",
];

const right = [
  "Posicionamento premium que justifica o ticket alto",
  "Google Maps otimizado para dominar as buscas locais",
  "Copy focado em autoridade e segurança do paciente",
  "Botão de agendamento em destaque e onipresente",
  "Design que transmite a higiene e o luxo do seu consultório",
];

function Problem() {
  return (
    <Section id="problema" className="relative overflow-hidden bg-transparent text-navy">
      <div className="relative z-10">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <Eyebrow className="mb-3 sm:mb-5">Diagnóstico & Oportunidade</Eyebrow>
          <h2 className="font-display text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
            O seu site hoje está <span className="text-primary italic">trabalhando contra</span> a sua agenda?
          </h2>
          <p className="mt-3 sm:mt-6 max-w-[42ch] sm:max-w-none text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            Redes sociais geram curtidas, mas o Google gera consultas particulares. Se sua clínica enfrenta um desses gargalos, você está perdendo os pacientes mais lucrativos para a concorrência.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Card Esquerdo: A Ilusão do Instagram */}
          <div className="rounded-2xl sm:rounded-[2.5rem] bg-card border border-border/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:border-border">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-destructive mb-6">
                <X className="size-3.5 stroke-[3]" />
                A Armadilha do Feed
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black text-foreground mb-2">
                A Ilusão do "Só Preciso de Instagram"
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-6">
                Redes sociais atraem atenção passageira, mas falham quando o paciente tem urgência real.
              </p>

              <ul className="space-y-4">
                {[
                  "No Instagram o paciente se distrai: vê posts no sofá com zero intenção imediata de agendar.",
                  "No Google o paciente está com urgência: pesquisa \"dentista [seu bairro]\" com o cartão na mão.",
                  "Sem site posicionado, os tratamentos mais nobres (implantes, facetas) vão para o concorrente.",
                  "Falta de canal oficial: os poucos que chegam no WhatsApp só perguntam preço e somem."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-foreground/80 leading-relaxed">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <X className="size-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card Direito: O novo padrão (Com o Site Estratégico) */}
          <div className="rounded-2xl sm:rounded-[2.5rem] bg-card border border-border/60 p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-primary mb-6">
                <Check className="size-3.5 stroke-[3]" />
                O Novo Padrão Odonto Websites
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black text-foreground mb-2">
                Estrutura Focada em Conversão Ativa
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-6">
                Transforma pesquisas de alta intenção em consultas confirmadas na sua recepção.
              </p>

              <ul className="space-y-4">
                {[
                  "Presença dominante no Google: capture o paciente no momento exato em que ele decide agendar.",
                  "Posicionamento premium que valoriza sua autoridade e atrai procedimentos particulares de alto valor.",
                  "Ecossistema completo: seu Instagram gera conexão e autoridade, seu site fecha o agendamento.",
                  "WhatsApp e botão de agendamento em destaque estratégico em todas as telas, sem atritos."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-foreground leading-relaxed">
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-border/40 flex justify-end">
              <Button variant="cta" size="sm" className="w-full sm:w-auto text-xs" asChild>
                <a href="#diagnostico">Quero esse padrão</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ComparisonTable() {
  const rows = [
    {
      feature: "Estratégia de Atração",
      them: "Apenas posts no Instagram (atenção passiva)",
      us: "Google Local + Site de Conversão (intenção ativa de compra)",
      usGood: true,
    },
    {
      feature: "Especialização em Odontologia",
      them: "Fazem de tudo — sem foco",
      us: "100% focado em dentistas",
      usGood: true,
    },
    {
      feature: "Compliance ético CFO/CRO",
      them: "Alto risco de notificação",
      us: "Revisado e aprovado em cada projeto",
      usGood: true,
    },
    {
      feature: "Domínio e hospedagem",
      them: "Clínica fica refém da agência",
      us: "100% no seu CPF ou CNPJ",
      usGood: true,
    },
    {
      feature: "Velocidade de carregamento",
      them: "Lento — WordPress genérico",
      us: "Ultrarrápido · React + Vite",
      usGood: true,
    },
    {
      feature: "Prazo de entrega",
      them: "Meses sem data definida",
      us: "21 dias com contrato",
      usGood: true,
    },
    {
      feature: "Copy estratégico para odonto",
      them: "Texto genérico sem conversão",
      us: "Persuasão focada no paciente",
      usGood: true,
    },
  ];

  return (
    <Section id="comparativo" className="relative overflow-hidden bg-transparent">
      {/* Ambient glow de fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="mb-10 sm:mb-14 max-w-3xl">
        <Eyebrow className="mb-3 sm:mb-5">Comparativo</Eyebrow>
        <h2 className="font-display text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground">
          Por que não é a mesma coisa que{" "}
          <span className="text-primary italic">qualquer agência</span>?
        </h2>
        <p className="mt-3 sm:mt-6 max-w-[42ch] sm:max-w-none text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
          A maioria das agências promete sites bonitos. Mas sem especialização odontológica, o resultado é um site que não converte — e que pode até colocar sua clínica em risco ético.
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block rounded-3xl border border-border/70 overflow-hidden shadow-xl shadow-primary/5 bg-white backdrop-blur-sm">
        {/* Header Clean */}
        <div className="grid grid-cols-[1.1fr_1fr_1.1fr] bg-secondary/60 border-b border-border/60">
          <div className="px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
            Critério
          </div>
          <div className="px-8 py-4 border-l border-border/50 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 flex items-center gap-2">
            <X className="size-3.5 stroke-[3] text-destructive/70" />
            Agência Genérica / Freelancer
          </div>
          <div className="px-8 py-4 border-l border-border/50 bg-primary/10 text-[10px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
            <Zap className="size-3.5 fill-primary stroke-primary" />
            Odonto Websites
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-[1.1fr_1fr_1.1fr] border-t border-border/40 group transition-colors hover:bg-primary/[0.02] ${
              i % 2 === 0 ? "bg-white" : "bg-background/40"
            }`}
          >
            <div className="px-8 py-4.5 flex items-center">
              <p className="text-sm font-black text-foreground">{row.feature}</p>
            </div>
            <div className="px-8 py-4.5 border-l border-border/40 flex items-center gap-3">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <X className="size-3 stroke-[3] text-destructive" />
              </div>
              <p className="text-sm font-medium text-muted-foreground">{row.them}</p>
            </div>
            <div className="px-8 py-4.5 border-l border-border/40 bg-primary/[0.04] flex items-center gap-3">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                <Check className="size-3 stroke-[3] text-primary" />
              </div>
              <p className="text-sm font-bold text-foreground">{row.us}</p>
            </div>
          </div>
        ))}

        {/* Footer CTA */}
        <div className="grid grid-cols-[1.1fr_1fr_1.1fr] border-t border-border/50 bg-secondary/30">
          <div className="px-8 py-5" />
          <div className="px-8 py-5 border-l border-border/40 flex items-center">
            <p className="text-xs text-muted-foreground/60 font-medium italic">Resultado típico: dor de cabeça e sem retorno</p>
          </div>
          <div className="px-8 py-5 border-l border-border/40 bg-primary/[0.04] flex items-center">
            <Button variant="cta" size="sm" className="w-full" asChild>
              <a href="#diagnostico" className="flex items-center justify-center gap-2">
                Quero esse padrão
                <ArrowRight className="size-3.5 shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile cards - Clean & airy (Sem faixas pretas) */}
      <div className="md:hidden space-y-3.5">
        {rows.map((row) => (
          <div
            key={row.feature}
            className="rounded-2xl border border-border/70 bg-white p-4 shadow-sm"
          >
            <h4 className="text-[11px] font-black uppercase tracking-wider text-foreground mb-3 pb-2 border-b border-border/50">
              {row.feature}
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-destructive/[0.04] border border-destructive/10 rounded-xl p-3 flex flex-col justify-between">
                <p className="text-[9px] font-black uppercase tracking-widest text-destructive/80 mb-1.5 flex items-center gap-1">
                  <X className="size-3 stroke-[3]" /> Agência
                </p>
                <p className="text-[11px] font-medium text-muted-foreground leading-snug">{row.them}</p>
              </div>
              <div className="bg-primary/[0.06] border border-primary/20 rounded-xl p-3 flex flex-col justify-between">
                <p className="text-[9px] font-black uppercase tracking-widest text-primary mb-1.5 flex items-center gap-1">
                  <Check className="size-3 stroke-[3]" /> Odonto
                </p>
                <p className="text-[11px] font-bold text-foreground leading-snug">{row.us}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="pt-3">
          <Button variant="cta" size="lg" className="w-full" asChild>
            <a href="#diagnostico" className="flex items-center justify-center gap-2">
              Quero esse padrão
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

function FullPresence() {
  const pillars = [
    {
      icon: CalendarCheck,
      title: "Página de Agendamento",
      desc: "Sistema de agendamento integrado, para o paciente marcar a consulta em poucos cliques, sem sair do site.",
    },
    {
      icon: MessageCircle,
      title: "Integração com WhatsApp",
      desc: "Botão direto para o WhatsApp da clínica, transformando visitas em conversas — e conversas em consultas marcadas.",
    },
    {
      icon: Palette,
      title: "Identidade Visual",
      desc: "Logo, cores e elementos visuais pensados para transmitir profissionalismo e criar reconhecimento da sua marca.",
    },
    {
      icon: TrendingUp,
      title: "SEO — Apareça no Google",
      desc: "Otimização para que sua clínica apareça nas buscas locais, como \"dentista perto de mim\" e termos da sua especialidade.",
    },
  ];

  return (
    <Section id="presenca-digital" className="relative overflow-hidden bg-transparent text-navy">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary/10 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/8 rounded-full blur-[100px] opacity-40" />
      </div>

      <div className="max-w-3xl mb-10 sm:mb-14">
        <Eyebrow className="mb-3 sm:mb-5">Mais que um site</Eyebrow>
        <ScrubbingText 
          text="Só crio site? Não. Eu construo toda a sua presença digital."
          className="font-display text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-foreground"
        />
        <p className="mt-3 sm:mt-6 max-w-[42ch] sm:max-w-none text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
          Um site sozinho não resolve o problema todo. Por isso, cada projeto inclui tudo que sua clínica precisa para atrair, converter e fidelizar pacientes — sem você precisar contratar mais ninguém.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {pillars.map((pillar, i) => (
          <CinematicBlur key={pillar.title} delay={i * 0.15}>
            <div
              className="group relative h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/10 bg-white/70 backdrop-blur-sm shadow-sm shadow-primary/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Glow de fundo no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Borda luminosa superior */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <pillar.icon className="size-6" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-black text-foreground group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            </div>
          </CinematicBlur>
        ))}
      </div>
    </Section>
  );
}

function Developer() {
  return (
    <Section id="desenvolvedor" className="relative overflow-hidden bg-transparent text-navy">
      <div className="grid gap-10 sm:gap-14 lg:gap-20 lg:grid-cols-2 items-center">
        {/* Coluna Esquerda: Texto sobre o desenvolvedor */}
        <div className="flex flex-col items-start">
          <Eyebrow className="mb-4 sm:mb-6">Sobre o Desenvolvedor</Eyebrow>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-foreground">
            Meu nome é <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent">Giovanni Pinheiro</span>, sou desenvolvedor e crio sites profissionais para clínicas.
          </h2>
          
          <div className="mt-5 sm:mt-6 space-y-4 max-w-xl">
            <TypewriterText 
              text="Crio sites profissionais para clínicas e profissionais da área da saúde que querem se destacar no digital." 
              className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed" 
            />
            <TypewriterText 
              text="Não trabalho só com “deixar bonito”. Cada site que eu desenvolvo é pensado pra transmitir confiança logo no primeiro acesso e facilitar ao máximo o caminho do paciente até o agendamento — porque um site bonito que não converte não resolve o problema real da clínica." 
              className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed" 
            />
            <TypewriterText 
              text="Uno design, tecnologia e estratégia num processo personalizado: entendo a identidade, o público e os objetivos de cada clínica antes de colocar a mão no código." 
              className="text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed" 
            />
            <TypewriterText 
              text="Se você chegou até aqui, é porque já está pensando em melhorar a presença digital da sua clínica. Vamos conversar sobre isso?" 
              className="font-black text-foreground text-base sm:text-lg pt-3 border-t border-border/40 leading-relaxed" 
            />
          </div>

          <div className="mt-8 sm:mt-10 w-full sm:w-auto">
            <Button variant="cta" size="xl" className="w-full sm:w-auto relative overflow-hidden group shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all" asChild>
              <a href="#diagnostico" className="flex items-center justify-center gap-2">
                <span className="relative z-10 font-black">Falar com o desenvolvedor</span>
                <ArrowRight className="size-4 shrink-0 relative z-10 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </a>
            </Button>
          </div>
        </div>

        {/* Coluna Direita: Foto do desenvolvedor com Badges Flutuantes */}
        <div className="relative group">
          <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 pointer-events-none animate-pulse-glow" />
          
          {/* Floating Pill: Top Right */}
          <div className="absolute -top-4 -right-2 sm:-right-4 z-20 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2 shadow-xl border border-primary/20 backdrop-blur-md animate-float">
            <div className="flex size-7 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Sparkles className="size-3.5 fill-primary" />
            </div>
            <p className="text-[11px] font-black text-foreground">Atendimento 100% Direto</p>
          </div>

          {/* Floating Pill: Bottom Left */}
          <div className="absolute -bottom-4 -left-2 sm:-left-4 z-20 flex items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2 shadow-xl border border-primary/20 backdrop-blur-md animate-float-delayed">
            <div className="flex size-7 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
              <Zap className="size-3.5 fill-emerald" />
            </div>
            <div>
              <p className="text-[11px] font-black text-foreground">Código Puro em React</p>
              <p className="text-[9px] font-bold text-muted-foreground uppercase">Zero WordPress pesado</p>
            </div>
          </div>

          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-[3rem] border border-border/60 bg-card shadow-2xl">
            <img 
              src={developerImg} 
              alt="Giovanni Pinheiro - Desenvolvedor de Sites Odontológicos" 
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-90 transition-opacity flex flex-col justify-end p-6 sm:p-8">
              <p className="font-display text-lg sm:text-xl font-black text-white">Giovanni Pinheiro</p>
              <p className="text-xs text-primary font-bold uppercase tracking-wider">Web Designer & Desenvolvedor Sênior</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DomainHosting() {
  return (
    <Section id="seguranca" className="relative overflow-hidden bg-transparent text-navy">
      <div className="grid min-w-0 gap-10 sm:gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        {/* Coluna Esquerda: Imagem */}
        <div className="lg:col-span-5 relative group order-2 lg:order-1">
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-2xl opacity-60 group-hover:opacity-80 transition duration-1000 pointer-events-none" />
          <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl sm:rounded-[2.5rem] border border-border/50 bg-card shadow-2xl">
            <img 
              src={domainHostingImg} 
              alt="Domínio e Hospedagem no seu nome com total segurança" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Coluna Direita: Textos e Checklist */}
        <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
          <Eyebrow className="mb-4 sm:mb-6">Propriedade & Segurança</Eyebrow>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.15] text-foreground">
            Domínio e Hospedagem no <span className="text-primary italic">Seu Nome</span>.
          </h2>
          
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-xl">
            Seu site é 100% seu. Domínio registrado no seu nome ou CNPJ, hospedagem confiável com certificado de segurança SSL e backups automáticos — proteção total para você e seus pacientes.
          </p>

          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 w-full max-w-xl">
            {[
              {
                title: "Domínio no seu nome",
                desc: "Registro oficial no Registro.br ou internacional vinculado diretamente ao seu CPF ou CNPJ da clínica.",
              },
              {
                title: "Segurança SSL incluída",
                desc: "Cadeado de segurança e criptografia ativa para proteger os dados e a privacidade dos seus pacientes.",
              },
              {
                title: "Backups automáticos",
                desc: "Cópias periódicas e automáticas da estrutura e dos conteúdos para total tranquilidade.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-card/60 border border-border/50 shadow-sm transition-all hover:border-primary/30"
              >
                <div className="flex size-7 sm:size-8 items-center justify-center rounded-lg bg-emerald/10 text-emerald shrink-0 mt-0.5">
                  <Check className="size-4 font-bold" />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-black text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 w-full sm:w-auto">
            <Button variant="cta" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#diagnostico" className="flex items-center justify-center gap-2">
                Garantir meu site próprio
                <ArrowRight className="size-4 shrink-0" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

const projects = [
  {
    title: "Dra. Camile Mendonça",
    category: "Odontogeriatria & Estética",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    results: "Posicionamento premium perto do Metrô Clínicas",
    link: "/cases/dra-camile-mendonca",
  },
  {
    title: "P&S Odontologia",
    category: "Odontologia Familiar & Estética",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    results: "Atendimento humanizado na Vila Moraes - SP",
    link: "/cases/ps-odontologia",
  },
  {
    title: "Clínica Simioni",
    category: "Lentes de Contato & Implantes",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    results: "Tradição desde 1945 em alta performance",
    link: "/cases/clinica-simioni",
  },
  {
    title: "Dra. Giseli Eliane",
    category: "Odontologia Infantil & Clínico Geral",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    results: "Atendimento humanizado na Casa Verde - SP",
    link: "/cases/dra-giseli-eliane",
  },
];

function Cases() {
  // Duplicar a lista para criar um looping contínuo suave e infinito
  const displayProjects = [...projects, ...projects, ...projects];

  return (
    <section id="cases" className="py-12 sm:py-20 md:py-28 bg-transparent overflow-hidden text-navy">
      {/* Cabeçalho alinhado ao container padrão */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-6 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <Eyebrow className="mb-4 sm:mb-6">Modelos de Sites</Eyebrow>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground text-balance">
            Modelos criados para <span className="text-primary italic">inspirar sua clínica</span>.
          </h2>
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
          Passe o mouse ou toque para pausar
        </p>
      </div>

      {/* Carrossel 100% Full Width com animação de Looping Contínuo */}
      <div className="w-full overflow-hidden">
        <div className="animate-scroll pause-scroll py-3 flex gap-5 sm:gap-7 hover:[animation-play-state:paused] active:[animation-play-state:paused] touch-pan-x">
          {displayProjects.map((project, i) => {
            const CardContent = (
              <div className="w-[280px] xs:w-[320px] sm:w-[380px] md:w-[440px] shrink-0 group relative cursor-pointer select-none">
                <div className="overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border/70 bg-card shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:border-primary/40 group-hover:-translate-y-2 relative">
                  {/* Mini Browser Bar */}
                  <div className="flex items-center justify-between border-b border-border/50 bg-secondary/80 px-3.5 py-2.5 backdrop-blur-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="size-2.5 rounded-full bg-rose-400/80" />
                      <div className="size-2.5 rounded-full bg-amber-400/80" />
                      <div className="size-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[9px] font-bold text-muted-foreground border border-border/60 shadow-xs max-w-[170px] truncate">
                      <Lock className="size-2.5 text-emerald" />
                      <span className="truncate">{project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com.br</span>
                    </div>
                    <div className="size-2" />
                  </div>

                  {/* Case Preview Image */}
                  <div className="aspect-[4/3] sm:aspect-[4/4.5] overflow-hidden relative bg-slate-900">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="h-full w-full object-cover grayscale-[0.08] group-hover:grayscale-0 transition-all duration-700 pointer-events-none select-none group-hover:scale-105" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 sm:p-7 pointer-events-none">
                      {project.link && (
                        <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-white text-[10px] font-black uppercase tracking-wider scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                          <span>Testar ao vivo</span>
                          <ExternalLink className="size-3" />
                        </div>
                      )}
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-primary">{project.category}</span>
                      <p className="mt-1 font-display text-base sm:text-xl font-black text-white leading-tight">{project.results}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold text-white/80">
                        <span>Clique para abrir a demonstração</span>
                        <ArrowRight className="size-3" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Footer Info */}
                <div className="mt-3 sm:mt-3.5 flex items-center justify-between px-1.5">
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-black text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-xs text-muted-foreground font-medium">{project.category}</p>
                  </div>
                  {project.link && (
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  )}
                </div>
              </div>
            );

            return project.link ? (
              <Link key={i} to={project.link as any} className="block shrink-0 relative z-10 cursor-pointer">
                {CardContent}
              </Link>
            ) : (
              <div key={i} className="shrink-0">{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Diagnóstico gratuito",
    text: "Entendo sua clínica, objetivos e o que trava seus agendamentos hoje.",
  },
  {
    n: "02",
    title: "Proposta e briefing",
    text: "Alinhamos escopo, prazo e a estratégia que será aplicada no projeto.",
  },
  {
    n: "03",
    title: "Design e copy",
    text: "Você acompanha e aprova cada etapa, do rascunho aos textos finais.",
  },
  {
    n: "04",
    title: "Desenvolvimento e testes",
    text: "Transformamos o design em um site funcional, rápido e seguro.",
  },
  {
    n: "05",
    title: "Entrega + suporte inicial",
    text: "Site no ar com treinamento para sua equipe e suporte pós-entrega.",
  },
];

function Method() {
  return (
    <Section id="metodo" className="bg-transparent overflow-hidden text-navy">
      <div className="mb-10 sm:mb-14">
        <Eyebrow className="mb-3 sm:mb-5">Processo</Eyebrow>
        <h2 className="font-display text-[1.75rem] xs:text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.08] text-foreground text-left">
          Caminho livre de <span className="text-primary italic">atritos</span>.
        </h2>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, index) => (
          <div key={s.n} className={`flex flex-col gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-border bg-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/30 group relative overflow-hidden ${index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
            <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-display text-base sm:text-lg font-black relative z-10">
              {s.n}
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-base font-black text-foreground">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground font-medium leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Básico",
      price: "A partir de R$ 1.200",
      features: [
        { label: "Landing Page de alta conversão", included: true },
        { label: "Botão WhatsApp em destaque", included: true },
        { label: "SEO local básico (Google Maps)", included: true },
        { label: "Sistema de agendamento web", included: false },
        { label: "Compliance CFO/CRO total", included: false },
      ],
      ideal: "Ideal para consultórios individuais.",
      cta: "Quero esse pacote",
      highlight: false,
    },
    {
      name: "Essencial",
      price: "A partir de R$ 3.500",
      features: [
        { label: "Site multi-páginas estratégico", included: true },
        { label: "Botão WhatsApp em destaque", included: true },
        { label: "Sistema de agendamento web", included: true },
        { label: "SEO local estratégico", included: true },
        { label: "Compliance CFO/CRO total", included: true },
      ],
      ideal: "O básico bem feito para crescer.",
      cta: "Quero esse pacote",
      highlight: false,
    },
    {
      name: "Premium",
      price: "A partir de R$ 5.500",
      features: [
        { label: "Tudo do Essencial + Extras", included: true },
        { label: "Copywriting de alta persuasão", included: true },
        { label: "SEO avançado (Dominar região)", included: true },
        { label: "Mockups 3D exclusivos", included: true },
        { label: "Prazo prioritário (21 dias)", included: true },
      ],
      ideal: "Seja a referência máxima do bairro.",
      cta: "Quero esse pacote",
      highlight: true,
      badge: "★ Mais Escolhido por Dentistas",
    },
    {
      name: "Elite",
      price: "Sob consulta",
      features: [
        { label: "Tudo do Premium + CRM", included: true },
        { label: "Gestão de tráfego (Ads)", included: true },
        { label: "Identidade Visual Completa", included: true },
        { label: "Treinamento para recepção", included: true },
        { label: "Suporte VIP 24h", included: true },
      ],
      ideal: "Para clínicas em expansão agressiva.",
      cta: "Falar com especialista",
      highlight: false,
    },
  ];

  return (
    <Section id="investimento" className="bg-transparent text-navy">
      <div className="mb-8 sm:mb-12 max-w-3xl">
        <Eyebrow className="mb-3 sm:mb-5">Investimento</Eyebrow>
        <h2 className="font-display text-[1.75rem] xs:text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground text-balance">
          Investimento pensado para o <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent italic">seu tamanho</span>.
        </h2>
        <p className="mt-3 sm:mt-5 max-w-[46ch] sm:max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
          Sem mensalidades ocultas nem surpresas: seu site é um ativo 100% de sua propriedade.
        </p>
        <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-primary/10 border border-primary/20 text-xs font-bold text-foreground">
          <Sparkles className="size-4 text-primary shrink-0" />
          <span><strong className="text-primary font-black">Retorno rápido:</strong> 1 único paciente de implante ou faceta já cobre 100% do projeto.</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-8 mb-8 sm:mb-12 py-4 sm:py-6 border-y border-border/50">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/70">
          <ShieldCheck className="size-4 text-primary shrink-0" /> Diagnóstico sem compromisso
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/70">
          <CalendarCheck className="size-4 text-primary shrink-0" /> Prazo definido em contrato
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/70">
          <MessageCircle className="size-4 text-primary shrink-0" /> Suporte direto comigo
        </div>
      </div>

      <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {tiers.map((tier, i) => (
          <CinematicBlur key={tier.name} delay={i * 0.15} className="h-full">
            <div
              className={`flex flex-col h-full rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                tier.highlight
                  ? "bg-navy text-off-white shadow-2xl shadow-primary/20 ring-2 ring-primary relative overflow-hidden group"
                  : "bg-card border border-border shadow-sm hover:border-primary/30"
              }`}
            >
              {tier.badge && (
                <div className="mb-4 self-start bg-gradient-to-r from-primary to-teal-500 px-3.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-primary-foreground shadow-md">
                  {tier.badge}
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-display text-lg sm:text-xl font-black mb-1">{tier.name}</h3>
                <p className="font-display text-xl sm:text-2xl font-black text-primary">{tier.price}</p>
              </div>
              <ul className="space-y-3.5 mb-6 flex-grow">
                {tier.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                    {f.included ? (
                      <Check className="size-4 text-primary shrink-0 mt-0.5" />
                    ) : (
                      <span className="text-muted-foreground/30 shrink-0 mt-0.5">—</span>
                    )}
                    <span className={f.included ? "" : "text-muted-foreground/40"}>{f.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 border-t border-border/20">
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-60 mb-5 leading-relaxed">
                  {tier.ideal}
                </p>
                <Button
                  variant={tier.highlight ? "cta" : "default"}
                  size="xl"
                  className="w-full relative overflow-hidden group"
                  asChild
                >
                  <a href="#diagnostico">
                    <span className="relative z-10">{tier.cta}</span>
                    {tier.highlight && (
                      <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                    )}
                  </a>
                </Button>
              </div>
            </div>
          </CinematicBlur>
        ))}
      </div>
    </Section>
  );
}

function Scarcity() {
  return (
    <Section className="py-8 sm:py-16 bg-background animate-in fade-in-up duration-1000 fill-mode-both">
      <div className="relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 rounded-2xl sm:rounded-[2.5rem] border border-border bg-card p-5 sm:p-8 md:p-12 shadow-2xl group transition-all duration-500 hover:shadow-primary/5">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-primary/5 rounded-full blur-[60px] md:blur-[80px] group-hover:bg-primary/10 transition-colors" />
        <div className="relative z-10 max-w-2xl text-center lg:text-left">
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-black leading-tight tracking-tight text-foreground">
            Atendo apenas 4 clínicas por mês para garantir o <span className="text-primary italic text-balance">lastro estratégico</span> de cada projeto.
          </p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground font-medium">
            Cada site exige mapeamento da jornada do seu paciente e treinamento da sua recepção. Restam 2 vagas para este mês.
          </p>
          <div className="mt-5 sm:mt-6 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <div className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-primary">2 Vagas Disponíveis</span>
            </div>
          </div>
        </div>
        <div className="relative z-10 shrink-0 w-full lg:w-auto">
          <Button variant="cta" size="xl" className="w-full lg:w-auto" asChild>
            <a href="#diagnostico">Garantir Minha Vaga</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

const faqs = [
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "O prazo médio é de 21 dias úteis, dependendo do envio de materiais e rodadas de aprovação.",
  },
  {
    q: "Vocês cuidam do SEO e do Google Meu Negócio também?",
    a: "Sim, o projeto já inclui a otimização de SEO local e as configurações básicas para você aparecer nas buscas do seu bairro.",
  },
  {
    q: "E se eu já tiver um site, dá pra reformular ou precisa ser do zero?",
    a: "Avaliamos caso a caso, mas geralmente fazemos o reposicionamento completo para garantir que a nova estratégia de conversão funcione 100%.",
  },
  {
    q: "Como funciona o suporte depois que o site vai ao ar?",
    a: "Oferecemos suporte inicial e treinamento gravado para sua equipe. Também temos planos de manutenção caso você não queira se preocupar com nada.",
  },
  {
    q: "Preciso fornecer os textos ou vocês escrevem tudo?",
    a: "Nós escrevemos tudo. Fazemos uma entrevista estratégica e nosso time de copy entrega os textos focados em conversão odontológica.",
  },
];

function Faq() {
  return (
    <Section id="faq" className="bg-transparent text-navy">
      <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="text-left">
          <Eyebrow className="mb-6 sm:mb-8">FAQ</Eyebrow>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground text-balance">
            Perguntas <span className="text-primary italic text-balance">antes de decidir</span>.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-border/50">
              <AccordionTrigger className="text-left font-display text-base sm:text-lg font-black tracking-tight py-4 sm:py-6 hover:text-primary transition-colors hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6 leading-relaxed font-medium">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

function LeadForm() {
  const [sending, setSending] = useState(false);
  const [fields, setFields] = useState({
    nome: "",
    clinica: "",
    whatsapp: "",
    dor: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof fields, string>>>({});

  function maskWhatsApp(raw: string) {
    const digits = raw.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : "";
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const formatted = name === "whatsapp" ? maskWhatsApp(value) : value;
    setFields((prev) => ({ ...prev, [name]: formatted }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function validate(): boolean {
    const next: Partial<Record<keyof typeof fields, string>> = {};
    if (fields.nome.trim().length < 3) next.nome = "Nome deve ter ao menos 3 caracteres";
    if (fields.clinica.trim().length < 2) next.clinica = "Informe o nome da clínica";
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(fields.whatsapp)) next.whatsapp = "Use o formato (11) 99999-9999";
    if (fields.dor.trim().length < 5) next.dor = "Descreva sua dor com ao menos 5 caracteres";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await submitLead({ data: fields });
      setFields({ nome: "", clinica: "", whatsapp: "", dor: "" });
      setErrors({});
      toast.success("Solicitação enviada!", {
        description: "Retorno em até 24h úteis com o seu diagnóstico.",
      });
    } catch {
      toast.error("Não conseguimos enviar sua solicitação.", {
        description: (
          <span>
            Tente novamente ou fale direto no{" "}
            <a href={WHATSAPP_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="underline font-bold">
              WhatsApp
            </a>.
          </span>
        ),
        duration: 8000,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <Section id="diagnostico" className="relative overflow-hidden bg-transparent text-navy">
      <div className="grid gap-8 sm:gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow className="mb-6 sm:mb-8">Diagnóstico Gratuito</Eyebrow>
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-foreground text-balance">
            Vamos lotar sua <span className="bg-gradient-to-r from-primary via-emerald-600 to-teal-500 bg-clip-text text-transparent italic text-balance">agenda</span>?
          </h2>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-muted-foreground font-medium leading-relaxed">
            Preencha o formulário e receba um diagnóstico gratuito da sua presença digital em 24h úteis.
          </p>
          <div className="mt-6 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
            <a href={WHATSAPP_DIAGNOSTICO} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 sm:gap-4 text-sm sm:text-base md:text-lg font-black tracking-tight text-primary hover:text-emerald-700 transition-colors">
              <div className="flex size-10 sm:size-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                <MessageCircle className="size-5 sm:size-6" />
              </div>
              <span>Falar pelo WhatsApp agora</span>
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-primary/50 to-transparent blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <form onSubmit={handleSubmit} className="relative rounded-2xl sm:rounded-[2.5rem] border border-border/80 bg-card p-5 sm:p-8 md:p-12 shadow-2xl">
            <div className="grid gap-4 sm:gap-5">
              <div className="grid gap-1.5">
                <Label htmlFor="nome" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">Seu nome</Label>
                <Input id="nome" name="nome" value={fields.nome} onChange={handleChange} placeholder="Dr(a). Seu Nome" className={`h-11 sm:h-12 rounded-xl border-border/70 bg-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 px-3.5 text-sm sm:text-base transition-all${errors.nome ? " border-destructive" : ""}`} />
                {errors.nome && <p className="text-[11px] text-destructive font-semibold">{errors.nome}</p>}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="clinica" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">Nome da clínica</Label>
                <Input id="clinica" name="clinica" value={fields.clinica} onChange={handleChange} placeholder="Clínica Sorriso Vivo" className={`h-11 sm:h-12 rounded-xl border-border/70 bg-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 px-3.5 text-sm sm:text-base transition-all${errors.clinica ? " border-destructive" : ""}`} />
                {errors.clinica && <p className="text-[11px] text-destructive font-semibold">{errors.clinica}</p>}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="whatsapp" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">WhatsApp</Label>
                <Input id="whatsapp" name="whatsapp" value={fields.whatsapp} onChange={handleChange} type="tel" placeholder="(11) 99999-9999" className={`h-11 sm:h-12 rounded-xl border-border/70 bg-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 px-3.5 text-sm sm:text-base transition-all${errors.whatsapp ? " border-destructive" : ""}`} />
                {errors.whatsapp && <p className="text-[11px] text-destructive font-semibold">{errors.whatsapp}</p>}
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="dor" className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/70">Sua maior dor hoje?</Label>
                <Input id="dor" name="dor" value={fields.dor} onChange={handleChange} placeholder="Ex: Poucos agendamentos de tratamentos de alto valor" className={`h-11 sm:h-12 rounded-xl border-border/70 bg-secondary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 px-3.5 text-sm sm:text-base transition-all${errors.dor ? " border-destructive" : ""}`} />
                {errors.dor && <p className="text-[11px] text-destructive font-semibold">{errors.dor}</p>}
              </div>
              <Button type="submit" variant="cta" size="xl" disabled={sending} className="w-full mt-2 relative overflow-hidden group shadow-lg shadow-primary/20">
                <span className="relative z-10">{sending ? "Enviando..." : "Enviar e receber meu diagnóstico"}</span>
                <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
              </Button>
              <p className="text-center text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground/50">
                Retorno garantido em até 24h úteis.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-12 sm:pt-20 pb-10 sm:pb-12 text-off-white overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16">
          {/* Coluna 1: Brand */}
          <div className="space-y-4 sm:space-y-6">
            <Link to="/" className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary transition-transform hover:scale-105">
              <img src={logoImg} alt="Odonto Websites Logo" className="h-8 sm:h-9 w-auto object-contain" />
            </Link>
            <p className="text-xs sm:text-sm text-off-white/50 leading-relaxed font-medium max-w-[280px]">
              Estrategista digital focado exclusivamente no nicho odontológico. Sites que vendem.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group" aria-label="Instagram">
                <Instagram className="h-4 w-4 text-off-white/60 group-hover:text-off-white transition-colors" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-off-white/60 group-hover:text-off-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Navegação</h4>
            <nav className="flex flex-col gap-3 sm:gap-4">
              <a href="#cases" className="text-xs sm:text-sm text-off-white/60 hover:text-primary transition-colors font-medium">Modelos</a>
              <a href="#seguranca" className="text-xs sm:text-sm text-off-white/60 hover:text-primary transition-colors font-medium">Segurança</a>
              <a href="#desenvolvedor" className="text-xs sm:text-sm text-off-white/60 hover:text-primary transition-colors font-medium">Sobre Mim</a>
              <a href="#metodo" className="text-xs sm:text-sm text-off-white/60 hover:text-primary transition-colors font-medium">Processo</a>
              <a href="#investimento" className="text-xs sm:text-sm text-off-white/60 hover:text-primary transition-colors font-medium">Planos</a>
              <a href="#diagnostico" className="text-xs sm:text-sm text-off-white/60 hover:text-primary transition-colors font-medium">Contato</a>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Contato</h4>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-off-white/60">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>(11) 5192-2327</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-off-white/60">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="break-all">contato@odontowebsites.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-off-white/60">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Coluna 4: CTA */}
          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Estratégia</h4>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
              <p className="text-xs text-off-white/60 font-medium">Pronto para dominar o mercado local?</p>
              <Button variant="cta" size="sm" className="w-full text-[11px] font-black uppercase tracking-wider" asChild>
                <a href="#diagnostico">Fale comigo agora</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-off-white/20">
            © {new Date().getFullYear()} Odonto Websites. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-6 sm:gap-8">
            <Link to="/privacidade" className="text-[10px] font-black uppercase tracking-[0.2em] text-off-white/20 hover:text-primary transition-colors">Privacidade</Link>
            <Link to="/termos" className="text-[10px] font-black uppercase tracking-[0.2em] text-off-white/20 hover:text-primary transition-colors">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyCta() {
  const isPastHero = usePastHero();

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-border/40 bg-background/95 px-4 py-2.5 backdrop-blur md:hidden transition-all duration-500 ease-in-out ${
        isPastHero
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <Button variant="cta" size="lg" className="w-full rounded-full shadow-lg shadow-primary/20 text-xs sm:text-sm font-black" asChild>
        <a href="#diagnostico">Ainda dá tempo — fale comigo agora</a>
      </Button>
    </div>
  );
}
