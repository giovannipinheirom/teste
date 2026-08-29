import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
  MessageCircle,
  Play,
  X,
} from "lucide-react";

export const Route = createFileRoute("/cases/clinica-simioni")({
  head: () => ({
    meta: [
      { title: "Modelo: Clínica Simioni - Tradição em Odontologia desde 1945 | Odonto Websites" },
      {
        name: "description",
        content:
          "Modelo de site odontológico de alto padrão. Clínica Simioni - Lentes de contato dental, Implantes, Harmonização Facial, Ortodontia e Reabilitação Oral com tradição desde 1945.",
      },
      {
        name: "keywords",
        content: "Clínica Simioni, dentista lentes de contato, implantes dentarios sao paulo, reabilitação oral, odontologia de luxo, clinica odontologica 1945",
      },
      { property: "og:title", content: "Modelo: Clínica Simioni - Tradição desde 1945" },
      {
        property: "og:description",
        content:
          "Restaurando e cuidando de sorrisos em busca da sua melhor versão. Excelência multidisciplinar em tratamentos odontológicos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://odontowebsites.com.br/cases/clinica-simioni" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Modelo: Clínica Simioni - Odontologia de Alto Padrão" },
      {
        name: "twitter:description",
        content: "Modelo de site de alto padrão para clínicas odontológicas desenvolvido pela Odonto Websites.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://odontowebsites.com.br/cases/clinica-simioni",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Clínica Simioni Odontologia",
          "description": "Tradição desde 1945 em odontologia de alta performance, lentes de contato e implantes.",
          "telephone": "+55-11-99999-8888",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
          }
        })
      }
    ]
  }),
  component: CaseClinicaSimioni,
});

function CaseClinicaSimioni() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenSchedule = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
      setService(serviceName);
    } else {
      setSelectedService("");
      setService("");
    }
    setIsScheduleOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const textMsg = `Olá! Meu nome é ${name}. Gostaria de agendar uma consulta na Clínica Simioni para: ${service || selectedService || "Avaliação Personalizada"}. Data preferida: ${preferredDate || "A combinar"}. Observação: ${message || "Sem observações"}`;
    const whatsappUrl = `https://wa.me/5511999998888?text=${encodeURIComponent(textMsg)}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  const treatments = [
    {
      title: "Atendimento Emergencial",
      desc: "Suporte rápido e resolutivo para dores agudas, traumas ou urgências dentárias.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <ellipse cx="24" cy="24" rx="20" ry="8" strokeWidth="1.8" transform="rotate(-20 24 24)" />
          <path d="M24 10C17 10 13 14 13 20C13 26 15 32 17 38C18.5 41 20 42 22 42C23.5 42 23.5 38 24 38C24.5 38 24.5 42 26 42C28 42 29.5 41 31 38C33 32 35 26 35 20C35 14 31 10 24 10Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M24 18V26M20 22H28" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Reabilitação Oral Com Implantes",
      desc: "Implantes osseointegrados e prótese protocolo de carga imediata com precisão cirúrgica.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <path d="M18 12C18 8 20 6 24 6C28 6 30 8 30 12V18H18V12Z" strokeWidth="2" />
          <path d="M12 18H36C38 18 39 20 38 24L36 30H12L10 24C9 20 10 18 12 18Z" strokeWidth="2" />
          <line x1="24" y1="20" x2="24" y2="42" strokeWidth="2" />
          <line x1="20" y1="26" x2="28" y2="26" strokeWidth="2" />
          <line x1="20" y1="32" x2="28" y2="32" strokeWidth="2" />
          <line x1="20" y1="38" x2="28" y2="38" strokeWidth="2" />
          <path d="M22 42L24 44L26 42" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Lentes De Contato E Clareamento",
      desc: "Lâminas ultrafinas de porcelana pura e clareamento a laser para luminosidade natural.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <path d="M8 18C12 14 36 14 40 18C40 24 36 28 24 28C12 28 8 24 8 18Z" strokeWidth="2" />
          <path d="M12 18V24M18 17V26M24 16V27M30 17V26M36 18V24" strokeWidth="1.5" />
          <path d="M8 30C12 34 36 34 40 30" strokeWidth="2" />
          <path d="M12 30V34M18 31V36M24 32V37M30 31V36M36 30V34" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "Harmonização Facial",
      desc: "Procedimentos estéticos injetáveis para equilibrar proporções, linhas de expressão e contornos.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <path d="M34 8L40 14" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="39" cy="9" r="2.5" strokeWidth="1.5" />
          <path d="M28 14L34 20" strokeWidth="2" />
          <path d="M30 16L18 28L14 26L12 30L18 36L22 34L20 30L32 18" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 30L6 42" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="24" x2="25" y2="21" strokeWidth="1.5" />
          <line x1="25" y1="27" x2="28" y2="24" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "Invisalign E Ortodontia",
      desc: "Alinhadores transparentes de última geração e aparelhos de alta precisão estética.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <path d="M6 24H42" strokeWidth="2.5" />
          <rect x="10" y="16" width="6" height="16" rx="1.5" strokeWidth="2" />
          <rect x="21" y="14" width="6" height="20" rx="1.5" strokeWidth="2" />
          <rect x="32" y="16" width="6" height="16" rx="1.5" strokeWidth="2" />
          <path d="M6 34C14 40 34 40 42 34" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Odontologia Preventiva",
      desc: "Check-up digital com câmera intraoral, profilaxia e diagnóstico precoce de lesões.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <path d="M28 10C24 10 20 12 20 17C20 22 22 26 23 30C24 33 25 34 26 34C27 34 27.5 32 28 32C28.5 32 29 34 30 34C31 34 32 33 33 30C34 26 36 22 36 17C36 12 32 10 28 10Z" strokeWidth="2" />
          <circle cx="20" cy="22" r="11" strokeWidth="2.2" />
          <path d="M12 30L6 42" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Odontologia Kids",
      desc: "Atendimento acolhedor e lúdico para o desenvolvimento bucal saudável das crianças.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <circle cx="16" cy="26" r="10" strokeWidth="2" />
          <path d="M12 24H12.01M20 24H20.01" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M13 28C14.5 30.5 17.5 30.5 19 28" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 20C12 18 18 18 22 20" strokeWidth="1.8" />
          
          <circle cx="32" cy="18" r="9" strokeWidth="2" />
          <path d="M29 16H29.01M35 16H35.01" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M29.5 20C30.5 22 33.5 22 34.5 20" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 12C28 10 36 10 38 12" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      title: "Tratamento ATM",
      desc: "Alívio do bruxismo, dores articulares e disfunções da mandíbula com placas e laser.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 stroke-[#D4A373]">
          <circle cx="14" cy="12" r="6" strokeWidth="2" />
          <line x1="14" y1="18" x2="14" y2="42" strokeWidth="2" />
          <line x1="24" y1="8" x2="24" y2="42" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M34 10C34 10 38 10 38 16C38 20 34 24 34 42" strokeWidth="2" strokeLinecap="round" />
          <path d="M30 10C30 10 26 10 26 16C26 20 30 24 30 42" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "A Clínica Simioni aceita convênios odontológicos?",
      a: "Trabalhamos exclusivamente com atendimento particular para assegurar o mais alto padrão de qualidade, materiais nobres e tempo de atendimento individualizado. Emitimos toda a documentação necessária para reembolso junto ao seu plano de saúde.",
    },
    {
      q: "Como funcionam as lentes de contato dentais?",
      a: "São finas lâminas de porcelana confeccionadas sob medida que recobrem a face frontal dos dentes. Com tecnologia de escaneamento 3D e planejamento digital, você visualiza o resultado antes mesmo da cimentação definitiva.",
    },
    {
      q: "O que é a prótese protocolo de carga imediata?",
      a: "É uma técnica em que a arcada completa é fixada sobre implantes de titânio em tempo recorde (muitas vezes em até 24 a 48 horas), devolvendo 100% da firmeza, capacidade mastigatória e autoestima sem necessidade de próteses removíveis.",
    },
    {
      q: "Como agendar uma avaliação inicial?",
      a: "Basta clicar no botão 'AGENDE AGORA' ou no ícone do WhatsApp. Nossa concierge de atendimento entrará em contato para agendar o melhor horário para sua consulta.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#071013] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#D4A373]/30 selection:text-[#E5C28C]">
      
      {/* ── Top Bar: Demonstration Banner / Return to Main Portfolio ── */}
      <div className="bg-[#030608] text-white text-xs py-2 px-3 sm:px-6 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A373] animate-pulse shrink-0" />
            <span className="font-medium text-amber-100 text-[10.5px] sm:text-xs truncate">
              <span className="hidden xs:inline">Modelo Demonstrativo: </span>Clínica Simioni · Tradição desde 1945
            </span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-bold text-[#E5C28C] hover:text-white uppercase tracking-wider transition-colors shrink-0 py-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar aos Modelos</span>
          </Link>
        </div>
      </div>

      {/* ── Header / Navigation (Image 1) ── */}
      <header className="sticky top-[37px] sm:top-[33px] z-40 bg-[#071013]/95 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex items-center justify-between gap-4">
          
          {/* Logo Simioni */}
          <a href="#inicio" className="flex flex-col items-center group cursor-pointer">
            {/* Elegant Simioni Emblem */}
            <div className="w-8 h-4 flex items-center justify-center mb-1">
              <svg viewBox="0 0 32 16" fill="none" className="w-full h-full text-white/90">
                <path
                  d="M16 2C10 2 6 8 2 8C6 8 10 14 16 14C22 14 26 8 30 8C26 8 22 2 16 2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="16" cy="8" r="2" fill="#D4A373" />
              </svg>
            </div>
            <span className="font-sans font-light tracking-[0.3em] text-white text-[15px] xs:text-[17px] sm:text-[19px] uppercase leading-none">
              SIMIONI
            </span>
          </a>

          {/* Desktop Navigation Links (Image 1) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[11.5px] lg:text-[12.5px] font-semibold tracking-[0.18em] uppercase">
            <a href="#inicio" className="text-[#D4A373] hover:text-white transition-colors">
              INÍCIO
            </a>
            <a href="#lentes" className="text-gray-300 hover:text-[#D4A373] transition-colors">
              LENTE DE CONTATO
            </a>
            <a href="#implantes" className="text-gray-300 hover:text-[#D4A373] transition-colors">
              IMPLANTES
            </a>
            <a href="#contato" className="text-gray-300 hover:text-[#D4A373] transition-colors">
              CONTATO
            </a>
            <a href="#equipe" className="text-gray-300 hover:text-[#D4A373] transition-colors">
              EQUIPE
            </a>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleOpenSchedule()}
              className="px-5 py-2 rounded-sm bg-gradient-to-r from-[#B8864E] to-[#D6A868] hover:from-[#A77640] hover:to-[#C59757] text-[#071013] font-bold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-all cursor-pointer"
            >
              AGENDE AGORA
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#D4A373] hover:bg-white/5 rounded-lg transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#050B0D] border-t border-white/10 px-6 py-5 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#D4A373] font-bold text-xs tracking-widest uppercase py-2"
            >
              INÍCIO
            </a>
            <a
              href="#lentes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 font-medium text-xs tracking-widest uppercase py-2 hover:text-[#D4A373]"
            >
              LENTE DE CONTATO
            </a>
            <a
              href="#implantes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 font-medium text-xs tracking-widest uppercase py-2 hover:text-[#D4A373]"
            >
              IMPLANTES
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 font-medium text-xs tracking-widest uppercase py-2 hover:text-[#D4A373]"
            >
              CONTATO
            </a>
            <a
              href="#equipe"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-300 font-medium text-xs tracking-widest uppercase py-2 hover:text-[#D4A373]"
            >
              EQUIPE
            </a>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenSchedule();
                }}
                className="w-full py-3 rounded-sm bg-gradient-to-r from-[#B8864E] to-[#D6A868] text-[#071013] font-bold text-xs tracking-widest uppercase shadow-md"
              >
                AGENDE AGORA
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── 1. Hero Section (Image 1) ── */}
      <section
        id="inicio"
        className="relative min-h-[580px] sm:min-h-[640px] md:min-h-[700px] flex items-center overflow-hidden bg-[#071013]"
      >
        {/* Background Large Gold Monogram Watermark */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none overflow-hidden">
          <span className="font-serif font-bold text-[28vw] text-[#D4A373] tracking-tighter">
            SIMIONI
          </span>
        </div>

        {/* Hero Background Split Image (Dentist Duo) */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/5 lg:w-1/2 pointer-events-none opacity-40 md:opacity-90">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200"
            alt="Equipe Clínica Simioni"
            className="w-full h-full object-cover object-top md:object-center filter brightness-90"
          />
          {/* Gradient Overlay for seamless text blending */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#071013] via-[#071013]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 w-full py-16 sm:py-24">
          <div className="max-w-2xl">
            
            {/* Main Luxury Title (Image 1) */}
            <h1 className="font-serif text-[26px] xs:text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px] text-[#D4A373] leading-[1.12] tracking-normal font-normal break-words">
              Restaurando e cuidando de sorrisos em busca da sua melhor versão
            </h1>

            {/* Paragraphs (Image 1) */}
            <div className="mt-6 sm:mt-8 space-y-3.5 text-xs xs:text-sm sm:text-base text-gray-200/90 font-light leading-relaxed max-w-xl">
              <p>
                Nos dedicamos a arte de esculpir sorrisos milimetricamente, garantindo saúde bucal, função adequada e estética.
              </p>
              <p className="text-gray-300 font-medium">
                Desde 1945 cuidando e recuperando milhares de sorrisos.
              </p>
            </div>

            {/* CTA Button & Tag (Image 1) */}
            <div className="mt-8 sm:mt-10 flex flex-col items-start gap-2.5">
              <button
                onClick={() => handleOpenSchedule()}
                className="w-full xs:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#B8864E] via-[#C89758] to-[#D6A868] hover:from-[#A77640] hover:to-[#C59757] text-[#071013] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase shadow-lg active:scale-95 transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation"
              >
                AGENDE AGORA
              </button>

              {/* Cyan Disclaimer Tag */}
              <span className="text-[10px] xs:text-[11px] font-bold tracking-[0.15em] text-[#38BDF8] uppercase mt-0.5">
                NÃO ACEITAMOS CONVÊNIO
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Apresentação Clínica & Tradição desde 1945 (Image 2) ── */}
      <section className="py-16 sm:py-24 bg-[#071013] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Video Player Mockup / Embed */}
            <div className="lg:col-span-7">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-black aspect-[16/9] group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000"
                  alt="Estrutura da Clínica Simioni"
                  className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Top Video Header Mockup (YouTube UI) */}
                <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-white text-xs z-10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold">
                      CS
                    </div>
                    <div>
                      <p className="font-semibold text-[13px] leading-tight">Apresentação Clínica</p>
                      <p className="text-[10px] text-gray-400">Clínica Simioni Odontologia</p>
                    </div>
                  </div>
                </div>

                {/* Center Play / Pause Indicator */}
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#D4A373]/90 hover:bg-[#D4A373] text-[#071013] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Reproduzir vídeo da clínica"
                >
                  <Play className="w-7 h-7 fill-[#071013] ml-1" />
                </button>

                {/* Bottom Timeline Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-1 z-10">
                  <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600 w-1/3" />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-300 font-mono pt-1">
                    <span>0:24 / 1:16</span>
                    <span className="font-sans font-bold text-white text-xs">Clínica Simioni</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Story & CTA (Image 2) */}
            <div className="lg:col-span-5 space-y-5">
              <h2 className="font-serif text-3xl xs:text-4xl lg:text-[42px] text-[#D4A373] font-normal tracking-normal leading-tight">
                Clínica Simioni
              </h2>

              <h3 className="text-lg xs:text-xl font-bold text-white tracking-wide">
                Tradição desde 1945!
              </h3>

              <p className="text-xs xs:text-sm text-gray-300 font-light leading-relaxed">
                Reunimos a excelência multidisciplinar em tratamentos odontológicos, em um único lugar!
              </p>

              <p className="text-xs xs:text-sm text-gray-300 font-light leading-relaxed">
                Garantimos satisfação de todas as gerações da sua família, através de um atendimento humanizado e plano de tratamento personalizado.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenSchedule()}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#B8864E] via-[#C89758] to-[#D6A868] hover:from-[#A77640] hover:to-[#C59757] text-[#071013] font-bold text-xs tracking-[0.16em] uppercase shadow-lg active:scale-95 transition-all duration-200 cursor-pointer min-h-[46px] touch-manipulation"
                >
                  AGENDE AGORA
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. Nossa Prioridade é o Seu Bem Estar (Image 2 - White Transition) ── */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA] text-[#1F2937] border-y border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] text-[#111827] font-normal tracking-normal leading-tight">
              Nossa prioridade é o seu bem estar
            </h2>
          </div>

          {/* 3 Pillars Grid (01, 02, 03) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
            
            {/* Pillar 01 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="font-serif font-light text-5xl sm:text-6xl text-[#D4A373] leading-none shrink-0">
                01
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  Atendimento<br />humanizado
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  Acolhimento empático com foco em ouvir você e criar uma experiência leve e confortável.
                </p>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="font-serif font-light text-5xl sm:text-6xl text-[#D4A373] leading-none shrink-0">
                02
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  Transparência<br />Personalização
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  Planejamento clínico detalhado, com clareza em todas as etapas e soluções sob medida.
                </p>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="font-serif font-light text-5xl sm:text-6xl text-[#D4A373] leading-none shrink-0">
                03
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                  Conforto<br />Segurança
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  Ambiente totalmente esterilizado e livre de riscos, seguindo os mais rigorosos protocolos de biossegurança.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. Todos os Tratamentos em um Único Lugar (Image 3) ── */}
      <section id="tratamentos" className="py-16 sm:py-24 bg-[#071013] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[48px] text-[#D4A373] font-normal tracking-normal leading-tight">
              Todos os tratamentos em um único lugar
            </h2>
          </div>

          {/* 8 Treatment Cards (4x2) */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {treatments.map((treatment, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenSchedule(treatment.title)}
                className="group relative bg-[#09151A] rounded-lg border border-[#C89758]/30 hover:border-[#D4A373] p-6 sm:p-7 flex flex-col items-center text-center justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4A373]/10"
              >
                {/* Subtle Luxury Corner Accent */}
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#C89758]/40 group-hover:border-[#D4A373] transition-colors" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#C89758]/40 group-hover:border-[#D4A373] transition-colors" />

                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                    {treatment.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-medium text-sm sm:text-[15px] text-white tracking-wide leading-snug group-hover:text-[#D4A373] transition-colors">
                    {treatment.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
                    {treatment.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 w-full flex items-center justify-center text-[11px] font-semibold text-[#D4A373] gap-1 opacity-80 group-hover:opacity-100">
                  <span>Saber mais</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. Pillar 04: Reabilitação Total (Image 4) ── */}
      <section className="py-14 sm:py-20 bg-[#050B0E] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left: Pillar 04 Title */}
            <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
              <span className="font-serif font-light text-5xl sm:text-6xl text-[#D4A373] leading-none shrink-0">
                04
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  Reabilitação Total
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                  Já são milhares de sorrisos completamente reabilitados.
                </p>
              </div>
            </div>

            {/* Right: Real Smile Gallery (3 Patients) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                
                {/* Patient 1 */}
                <div className="relative aspect-[3/4] rounded-md overflow-hidden border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400"
                    alt="Paciente Reabilitado Simioni"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 inset-x-0 text-center text-[9px] font-bold uppercase tracking-widest text-white/70">
                    SIMIONI
                  </div>
                </div>

                {/* Patient 2 */}
                <div className="relative aspect-[3/4] rounded-md overflow-hidden border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
                    alt="Paciente Reabilitado Simioni"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 inset-x-0 text-center text-[9px] font-bold uppercase tracking-widest text-white/70">
                    SIMIONI
                  </div>
                </div>

                {/* Patient 3 */}
                <div className="relative aspect-[3/4] rounded-md overflow-hidden border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                    alt="Paciente Reabilitado Simioni"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 inset-x-0 text-center text-[9px] font-bold uppercase tracking-widest text-white/70">
                    SIMIONI
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. Implantes Dentários (Image 4 - Light Background) ── */}
      <section id="implantes" className="py-16 sm:py-24 bg-[#FAFAFA] text-[#1F2937] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] text-[#111827] font-normal tracking-normal leading-tight">
              Recupere sua auto estima com Implantes Dentários
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            
            {/* Left Content & Protocol Checklist */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs xs:text-sm sm:text-[15px] text-gray-700 leading-relaxed font-light">
                A <strong className="font-semibold text-gray-900">prótese protocolo é fixada nos implantes dentários</strong>, proporcionando mais estabilidade, fixação, segurança e conforto em comparação com as próteses removíveis que podem se mover ou deslizar durante a mastigação ou fala.
              </p>

              {/* Benefits Bullet List (Image 4) */}
              <ul className="space-y-3 text-xs xs:text-sm sm:text-[15px] text-gray-900 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Carga imediata em 1 dia;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Melhora na mastigação e fala;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Recuperação da autoestima;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Estética natural;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Proporciona conforto e segurança;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Alta durabilidade;</strong></span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenSchedule("Implantes Dentários")}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#B8864E] via-[#C89758] to-[#D6A868] hover:from-[#A77640] hover:to-[#C59757] text-[#071013] font-bold text-xs tracking-[0.16em] uppercase shadow-md active:scale-95 transition-all duration-200 cursor-pointer min-h-[46px] touch-manipulation"
                >
                  AGENDE AGORA
                </button>
              </div>
            </div>

            {/* Right: Smiling Patient Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/5] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                  alt="Sorriso Reabilitado com Implantes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-sans font-light tracking-[0.3em] text-white/80 text-xs uppercase">
                  SIMIONI
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 7. Lentes Dentais (Image 5 - Dark Background) ── */}
      <section id="lentes" className="py-16 sm:py-24 bg-[#071013] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] text-[#D4A373] font-normal tracking-normal leading-tight">
              Corrija imperfeições com lentes dentais
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl mx-auto">
            
            {/* Left: Blonde Smiling Model Photo */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/5] bg-[#0A1920]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Lentes de Contato Dental"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071013]/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 font-sans font-light tracking-[0.3em] text-[#D4A373]/90 text-xs uppercase">
                  SIMIONI
                </span>
              </div>
            </div>

            {/* Right: Description & Checklist (Image 5) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <p className="text-xs xs:text-sm sm:text-[15px] text-gray-300 leading-relaxed font-light">
                As lentes dentais são finas camadas de porcelana ou resina colocadas sobre a superfície frontal dos dentes para melhorar a <strong className="font-semibold text-white">estética e a funcionalidade do sorriso</strong>. Elas servem para diversos propósitos odontológicos e estéticos, para você que:
              </p>

              {/* Checklist items */}
              <ul className="space-y-3 text-xs xs:text-sm sm:text-[15px] text-gray-200 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Quer ter um sorriso alinhado e duradouro;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Deseja um resultado rápido;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Quer cobrir espaços entre os dentes;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Deseja aumentar o tamanho dos dentes;</strong></span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] shrink-0" />
                  <span><strong>Pretende corrigir os dentes irregulares.</strong></span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenSchedule("Lentes Dentais")}
                  className="w-full xs:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#B8864E] via-[#C89758] to-[#D6A868] hover:from-[#A77640] hover:to-[#C59757] text-[#071013] font-bold text-xs tracking-[0.16em] uppercase shadow-lg active:scale-95 transition-all duration-200 cursor-pointer min-h-[46px] touch-manipulation"
                >
                  AGENDE AGORA
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 8. FAQ / Dúvidas Frequentes ── */}
      <section className="py-16 sm:py-24 bg-[#050B0D] border-t border-white/5 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373] block mb-2">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl text-white">
              Perguntas Frequentes sobre a Clínica Simioni
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#09151A] rounded-lg border border-white/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#D4A373] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D4A373] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 9. Pre-Footer Banner & Rodapé de Luxo ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#071013] to-[#030608] text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
          <h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl text-[#D4A373] leading-tight font-normal">
            Pronto para transformar o seu sorriso?
          </h2>
          <p className="mt-4 text-gray-300 text-xs xs:text-sm sm:text-base max-w-xl mx-auto font-light">
            Agende uma consulta personalizada com nossos especialistas e descubra a melhor versão do seu sorriso.
          </p>
          <div className="mt-8">
            <button
              onClick={() => handleOpenSchedule()}
              className="inline-flex items-center justify-center px-9 py-4 rounded-sm bg-gradient-to-r from-[#B8864E] via-[#C89758] to-[#D6A868] hover:from-[#A77640] hover:to-[#C59757] text-[#071013] font-bold text-xs sm:text-sm tracking-[0.18em] uppercase shadow-xl active:scale-95 transition-all cursor-pointer min-h-[48px] touch-manipulation"
            >
              AGENDE AGORA
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contato" className="bg-[#030608] text-gray-400 text-xs py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-sans font-light tracking-[0.3em] text-white text-base uppercase">
              SIMIONI
            </span>
            <span className="text-[10px] text-gray-500 mt-1">Tradição e Excelência desde 1945</span>
          </div>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#inicio" className="hover:text-[#D4A373] transition-colors">Início</a>
            <a href="#lentes" className="hover:text-[#D4A373] transition-colors">Lentes</a>
            <a href="#implantes" className="hover:text-[#D4A373] transition-colors">Implantes</a>
            <a href="#tratamentos" className="hover:text-[#D4A373] transition-colors">Tratamentos</a>
          </div>
          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Clínica Simioni. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button (Green box with white icon - Image 1/2/3/4/5) ── */}
      <a
        href="https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Clínica%20Simioni."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-[#25D366]" />
      </a>

      {/* ── Interactive Schedule Modal ── */}
      {isScheduleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#09151A] rounded-xl border border-[#C89758]/50 p-6 sm:p-8 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setIsScheduleOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl text-[#D4A373] mb-1">
              Agende sua Consulta
            </h3>
            <p className="text-xs text-gray-300 mb-6 font-light">
              Preencha os dados abaixo para atendimento prioritário com nossa equipe.
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#D4A373]/20 text-[#D4A373] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">Solicitação enviada!</h4>
                <p className="text-xs text-gray-300">
                  Você está sendo redirecionado para o WhatsApp da Clínica Simioni...
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#D4A373] uppercase mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-xs focus:outline-none focus:border-[#D4A373]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#D4A373] uppercase mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-xs focus:outline-none focus:border-[#D4A373]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#D4A373] uppercase mb-1">
                    Tratamento de Interesse
                  </label>
                  <select
                    value={service || selectedService}
                    onChange={(e) => {
                      setService(e.target.value);
                      setSelectedService(e.target.value);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#071013] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4A373]"
                  >
                    <option value="Avaliação Personalizada">Avaliação Personalizada</option>
                    <option value="Lentes De Contato E Clareamento">Lentes De Contato E Clareamento</option>
                    <option value="Reabilitação Oral Com Implantes">Reabilitação Oral Com Implantes</option>
                    <option value="Harmonização Facial">Harmonização Facial</option>
                    <option value="Invisalign E Ortodontia">Invisalign E Ortodontia</option>
                    <option value="Atendimento Emergencial">Atendimento Emergencial</option>
                    <option value="Odontologia Preventiva">Odontologia Preventiva</option>
                    <option value="Odontologia Kids">Odontologia Kids</option>
                    <option value="Tratamento ATM">Tratamento ATM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-wider text-[#D4A373] uppercase mb-1">
                    Mensagem ou Preferência de Data
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos brevemente o que deseja alcançar..."
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/5 border border-white/10 text-white placeholder:text-gray-500 text-xs focus:outline-none focus:border-[#D4A373]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-sm bg-gradient-to-r from-[#B8864E] via-[#C89758] to-[#D6A868] text-[#071013] font-bold text-xs tracking-widest uppercase shadow-lg hover:opacity-90 transition-opacity mt-2 cursor-pointer"
                >
                  Confirmar e Ir para o WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── Video Modal ── */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden border border-white/20">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/60 p-1.5 rounded-full hover:bg-black z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Apresentação Clínica Simioni"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </div>
  );
}