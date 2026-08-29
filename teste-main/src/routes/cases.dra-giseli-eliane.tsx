import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  User,
  X,
} from "lucide-react";

export const Route = createFileRoute("/cases/dra-giseli-eliane")({
  head: () => ({
    meta: [
      { title: "Modelo: Dra. Giseli Eliane - Odontologia Infantil & Clínico Geral | Casa Verde, SP" },
      {
        name: "description",
        content:
          "Modelo de site odontológico acolhedor e humanizado. Dra. Giseli Eliane (CRO 79790 SP) - Cuidado odontológico infantil, prevenção, ortodontia preventiva e atendimento na Casa Verde, Zona Norte de São Paulo.",
      },
      {
        name: "keywords",
        content: "Dra Giseli Eliane, odontopediatria casa verde, dentista infantil zona norte sp, odontologia infantil sao paulo, dentista criancas casa verde, CRO 79790 SP",
      },
      { property: "og:title", content: "Modelo: Dra. Giseli Eliane - Cuidado Odontológico Infantil" },
      {
        property: "og:description",
        content:
          "Cuidado odontológico infantil com acolhimento, segurança e experiência de mais de 20 anos na Casa Verde - São Paulo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://odontowebsites.com.br/cases/dra-giseli-eliane" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Modelo: Dra. Giseli Eliane - Odontologia Infantil" },
      {
        name: "twitter:description",
        content: "Modelo de site para odontopediatria e atendimento infantil desenvolvido pela Odonto Websites.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://odontowebsites.com.br/cases/dra-giseli-eliane",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dra. Giseli Eliane - CRO 79790 SP",
          "description": "Cuidado odontológico infantil e clínico geral com acolhimento, segurança e mais de 20 anos de experiência.",
          "telephone": "+55-11-98765-4321",
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
  component: CaseDraGiseliEliane,
});

function CaseDraGiseliEliane() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [childName, setChildName] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenSchedule = (topicName?: string) => {
    if (topicName) {
      setSelectedTopic(topicName);
      setNeed(topicName);
    } else {
      setSelectedTopic("");
      setNeed("");
    }
    setIsScheduleOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const textMsg = `Olá! Meu nome é ${name}, responsável por ${childName || "meu filho(a)"}. Gostaria de agendar uma consulta com a Dra. Giseli Eliane sobre: ${need || selectedTopic || "Consulta Infantil / Avaliação"}. Data preferida: ${preferredDate || "A combinar"}. Mensagem: ${message || "Sem observações"}`;
    const whatsappUrl = `https://wa.me/5511987654321?text=${encodeURIComponent(textMsg)}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  const helpCards = [
    {
      title: "Meu filho tem medo de dentista",
      desc: "Acolhimento, conversa e ritmo respeitoso para tornar a consulta mais tranquila.",
    },
    {
      title: "É a primeira consulta odontológica",
      desc: "Orientação preventiva para a família desde as primeiras fases do desenvolvimento.",
    },
    {
      title: "Meu filho range os dentes",
      desc: "Avaliação de bruxismo infantil e condutas para proteger dentes e bem-estar.",
    },
    {
      title: "Aparelho ou crescimento facial",
      desc: "Acompanhamento preventivo do desenvolvimento da mordida, arcadas e respiração.",
    },
  ];

  const faqs = [
    {
      q: "Com qual idade a criança deve ir pela primeira vez ao dentista?",
      a: "A recomendação é realizar a primeira consulta logo após o nascimento do primeiro dente de leite (por volta dos 6 meses de vida) ou até completar 1 ano. Isso permite criar um vínculo positivo e orientar os pais sobre higiene preventiva.",
    },
    {
      q: "Como a Dra. Giseli lida com crianças que têm medo ou ansiedade?",
      a: "O atendimento é feito no tempo da criança, com linguagem lúdica, recursos visuais e muita escuta. A criança conhece o ambiente e os instrumentos de forma amigável antes de qualquer procedimento.",
    },
    {
      q: "O consultório atende adolescentes e adultos também?",
      a: "Sim! Além do foco em odontopediatria e atendimento infantil, a Dra. Giseli realiza atendimento clínico geral para adolescentes e toda a família na Casa Verde.",
    },
    {
      q: "Como funciona a avaliação de bruxismo e mordida na infância?",
      a: "Avaliamos o padrão de sono, desgaste dental, respiração e o alinhamento das arcadas para indicar se há necessidade de intervenção preventiva ou placas de proteção.",
    },
    {
      q: "Onde fica localizado o consultório?",
      a: "O consultório está localizado no bairro da Casa Verde, Zona Norte de São Paulo, em local de fácil acesso e ambiente seguro e acolhedor.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0B252C] font-sans antialiased overflow-x-hidden selection:bg-[#C15C3D]/20 selection:text-[#C15C3D]">
      
      {/* ── Top Bar: Demonstration Banner / Return to Main Portfolio ── */}
      <div className="bg-[#0B252C] text-white text-xs py-2 px-3 sm:px-6 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E57A58] animate-pulse shrink-0" />
            <span className="font-medium text-amber-100 text-[10.5px] sm:text-xs truncate">
              <span className="hidden xs:inline">Modelo Demonstrativo: </span>Dra. Giseli Eliane · Casa Verde - SP
            </span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-bold text-[#F4A261] hover:text-white uppercase tracking-wider transition-colors shrink-0 py-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar aos Modelos</span>
          </Link>
        </div>
      </div>

      {/* ── Header / Navigation (Image 1) ── */}
      <header className="sticky top-[37px] sm:top-[33px] z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EFE8DC] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3.5 sm:py-4 flex items-center justify-between gap-4">
          
          {/* Brand Name (Image 1) */}
          <a href="#inicio" className="flex items-center gap-2 min-w-0 group cursor-pointer">
            <span className="font-bold text-[15px] xs:text-[17px] sm:text-[19px] text-[#0B252C] tracking-tight leading-tight truncate">
              Dra. Giseli Eliane <span className="font-normal text-slate-500 text-sm hidden xs:inline">– CRO 79790 SP</span>
            </span>
          </a>

          {/* Desktop Navigation Links (Image 1) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[13.5px] font-medium text-[#4A5D63]">
            <a href="#inicio" className="text-[#0B252C] font-semibold hover:text-[#C15C3D] transition-colors">
              Home
            </a>
            <a href="#sobre" className="hover:text-[#C15C3D] transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-[#C15C3D] transition-colors">
              Serviços
            </a>
            <a href="#faq" className="hover:text-[#C15C3D] transition-colors">
              FAQ
            </a>
            <a href="#contato" className="hover:text-[#C15C3D] transition-colors">
              Contato
            </a>
            <a href="#blog" className="hover:text-[#C15C3D] transition-colors">
              Blog
            </a>
          </nav>

          {/* Far Right CTA Button (Image 1) */}
          <div className="hidden sm:flex items-center shrink-0">
            <button
              onClick={() => handleOpenSchedule()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C15C3D] hover:bg-[#A84A2E] text-white font-semibold text-xs sm:text-[13px] shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer min-h-[40px] touch-manipulation"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Agendar</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0B252C] hover:bg-black/5 rounded-lg transition-colors touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-t border-[#EFE8DC] px-6 py-4 space-y-2.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0B252C] font-semibold text-sm py-1.5"
            >
              Home
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4A5D63] font-medium text-sm py-1.5 hover:text-[#C15C3D]"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4A5D63] font-medium text-sm py-1.5 hover:text-[#C15C3D]"
            >
              Serviços
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4A5D63] font-medium text-sm py-1.5 hover:text-[#C15C3D]"
            >
              FAQ
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4A5D63] font-medium text-sm py-1.5 hover:text-[#C15C3D]"
            >
              Contato
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenSchedule();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#C15C3D] text-white font-semibold text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agendar Consulta</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── 1. Hero Section (Image 1) ── */}
      <section
        id="inicio"
        className="relative pt-8 xs:pt-12 sm:pt-16 pb-12 sm:pb-16 overflow-hidden bg-[#FAF7F2]"
      >
        {/* Soft pastel mint ambient glow in top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4ECE6]/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headlines & CTAs (Image 1) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow Badge Pill */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E9DFCF] shadow-xs text-xs font-semibold text-[#0B252C] max-w-full">
                <Sparkles className="w-3.5 h-3.5 text-[#C15C3D] fill-[#C15C3D] shrink-0" />
                <span className="text-[10.5px] xs:text-[11px] sm:text-xs tracking-tight break-words">
                  Clínico Geral | Atendimento Infantil na Casa Verde, São Paulo
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-bold text-[26px] xs:text-[32px] sm:text-[44px] lg:text-[54px] text-[#0B252C] leading-[1.12] xs:leading-[1.08] tracking-tight break-words">
                Cuidado odontológico infantil com acolhimento, segurança e experiência.
              </h1>

              {/* Subtitle */}
              <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-[#4A5D63] font-normal leading-relaxed max-w-xl">
                A Dra. Giseli Eliane Silva atende crianças e adolescentes com foco em prevenção, desenvolvimento saudável do sorriso e consultas mais tranquilas para toda a família.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
                <button
                  onClick={() => handleOpenSchedule()}
                  className="inline-flex items-center justify-center gap-2 px-6 xs:px-7 py-3.5 rounded-full bg-[#C15C3D] hover:bg-[#A84A2E] text-white font-semibold text-xs xs:text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20" />
                  <span>Fale conosco</span>
                </button>

                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center gap-2 px-6 xs:px-7 py-3.5 rounded-full border border-[#0B252C]/20 hover:border-[#0B252C] bg-white/60 hover:bg-white text-[#0B252C] font-semibold text-xs xs:text-sm sm:text-base transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation text-center"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Conheça os serviços</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Visual with Floating Tags (Image 1) */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              
              {/* Large Rounded Photo Card */}
              <div className="relative w-full max-w-[360px] xs:max-w-[420px] aspect-[4/5] rounded-[2rem] xs:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                  alt="Dra. Giseli Eliane - Atendimento Odontológico Infantil"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Top-Left Speech Bubble (Image 1) */}
                <div className="absolute top-3 xs:top-4 left-3 xs:left-4 max-w-[170px] xs:max-w-[210px] bg-white/95 backdrop-blur-xs p-2.5 xs:p-3 rounded-2xl rounded-tl-xs shadow-lg border border-[#EFE8DC] text-[10px] xs:text-[11px] font-medium text-[#0B252C] leading-snug">
                  Consulta mais leve para a criança e mais segura para os pais.
                </div>

                {/* Floating Bottom-Right Dark Review Card (Image 1) */}
                <div className="absolute bottom-3 xs:bottom-4 right-3 xs:right-4 max-w-[190px] xs:max-w-[240px] bg-[#062425] text-white p-2.5 xs:p-3.5 rounded-2xl shadow-xl space-y-1 xs:space-y-1.5 border border-white/10">
                  <div className="flex items-center gap-1 text-[#C15C3D]">
                    <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-[#C15C3D]" />
                    <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-[#C15C3D]" />
                    <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-[#C15C3D]" />
                    <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-[#C15C3D]" />
                    <Star className="w-3 h-3 xs:w-3.5 xs:h-3.5 fill-[#C15C3D]" />
                  </div>
                  <p className="text-[9.5px] xs:text-[10.5px] font-light text-gray-200 leading-tight">
                    Ambiente preparado para orientar, acolher e acompanhar cada fase.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 2. 3 Pillars Floating Card (Image 2) ── */}
      <section className="py-6 sm:py-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10">
          
          {/* Big Rounded Card Container */}
          <div className="bg-white rounded-[2rem] p-4 sm:p-6 border border-[#EAE2D5] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Card 1: Confiança clínica */}
              <div className="bg-[#FBF4E8] rounded-2xl p-6 sm:p-7 space-y-2 border border-[#F2E5D0]/60">
                <div className="w-8 h-8 rounded-full border-2 border-[#C15C3D] flex items-center justify-center text-[#C15C3D] mb-3">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <h3 className="font-bold text-base sm:text-[17px] text-[#0B252C]">
                  Confiança clínica
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4A5D63] font-light leading-relaxed">
                  Cuidado técnico com linguagem clara para responsáveis.
                </p>
              </div>

              {/* Card 2: Acolhimento real */}
              <div className="bg-[#FBF4E8] rounded-2xl p-6 sm:p-7 space-y-2 border border-[#F2E5D0]/60">
                <div className="w-8 h-8 rounded-full border-2 border-[#C15C3D] flex items-center justify-center text-[#C15C3D] mb-3">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <h3 className="font-bold text-base sm:text-[17px] text-[#0B252C]">
                  Acolhimento real
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4A5D63] font-light leading-relaxed">
                  Consulta pensada para reduzir medo e criar vínculo.
                </p>
              </div>

              {/* Card 3: Atendimento local */}
              <div className="bg-[#FBF4E8] rounded-2xl p-6 sm:p-7 space-y-2 border border-[#F2E5D0]/60">
                <div className="w-8 h-8 rounded-full border-2 border-[#C15C3D] flex items-center justify-center text-[#C15C3D] mb-3">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <h3 className="font-bold text-base sm:text-[17px] text-[#0B252C]">
                  Atendimento local
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4A5D63] font-light leading-relaxed">
                  Consultório na Casa Verde, Zona Norte de São Paulo.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 3. Dark Green Section: "Como posso ajudar seu filho?" (Image 2 & 3) ── */}
      <section id="servicos" className="py-16 sm:py-24 bg-[#062425] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs sm:text-sm font-semibold text-[#E57A58] tracking-wide block">
                – Como posso ajudar seu filho?
              </span>

              <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] text-white leading-tight tracking-tight">
                Cuidado explicado de forma simples, para decisões mais tranquilas.
              </h2>

              <p className="text-xs xs:text-sm sm:text-base text-gray-300 font-light leading-relaxed pt-2">
                Em vez de começar pelo nome do procedimento, o atendimento parte da dúvida da família: medo, prevenção, bruxismo, aparelho infantil, conforto ou desenvolvimento da mordida.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => handleOpenSchedule()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C15C3D] hover:bg-[#A84A2E] text-white font-semibold text-xs sm:text-sm shadow-lg active:scale-95 transition-all cursor-pointer min-h-[46px] touch-manipulation"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Tirar dúvidas no WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right: 4 Dark Cards (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {helpCards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenSchedule(card.title)}
                  className="bg-[#0C3437] hover:bg-[#104044] rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-[#E57A58]/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Terracotta Circle Checkmark Icon */}
                    <div className="w-8 h-8 rounded-full border-2 border-[#E57A58] flex items-center justify-center text-[#E57A58] mb-4 group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>

                    <h3 className="font-bold text-base sm:text-lg text-white leading-snug group-hover:text-[#E57A58] transition-colors">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-[#E57A58] opacity-80 group-hover:opacity-100">
                    <span>Conversar sobre isso</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. Sobre a Dra. Giseli (Image 4) ── */}
      <section id="sobre" className="py-16 sm:py-24 bg-[#FAF7F2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Dra. Giseli Photo with X-Ray */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Dra. Giseli Eliane Silva - CRO 79790 SP"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C15C3D] hover:underline"
              >
                <span>Sobre a Dra. Giseli</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] text-[#0B252C] leading-tight tracking-tight">
                Um cuidado odontológico mais leve para crianças e mais tranquilo para os pais.
              </h2>

              <p className="text-xs xs:text-sm sm:text-base text-[#4A5D63] font-light leading-relaxed">
                Com mais de 20 anos de experiência, a Dra. Giseli une cuidado técnico, escuta e acolhimento para tornar a ida ao dentista uma experiência mais positiva desde a infância.
              </p>

              {/* Highlights Checklist */}
              <div className="pt-3 space-y-3">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#EAE2D5]">
                  <CheckCircle2 className="w-5 h-5 text-[#C15C3D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#0B252C] font-medium leading-snug">
                    Explicação clara para que os responsáveis participem com segurança de cada decisão.
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#EAE2D5]">
                  <CheckCircle2 className="w-5 h-5 text-[#C15C3D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#0B252C] font-medium leading-snug">
                    Mais de 20 anos de prática clínica e dedicação contínua à odontologia familiar.
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#EAE2D5]">
                  <CheckCircle2 className="w-5 h-5 text-[#C15C3D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#0B252C] font-medium leading-snug">
                    Consultório acolhedor na Casa Verde, Zona Norte de São Paulo.
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 5. Tecnologia com Propósito (Image 5) ── */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#EFE8DC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C15C3D]">
                <span>Tecnologia com propósito</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>

              <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] text-[#0B252C] leading-tight tracking-tight">
                Mais conforto na avaliação e mais clareza para a família.
              </h2>

              <p className="text-xs xs:text-sm sm:text-base text-[#4A5D63] font-light leading-relaxed">
                A tecnologia deve servir à experiência da criança: facilitar explicações, reduzir desconfortos quando possível e apoiar decisões individualizadas.
              </p>

              {/* 2 White Cards (Image 5) */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE2D5] shadow-xs">
                  <h3 className="font-bold text-sm sm:text-base text-[#0B252C]">
                    Escuta antes do procedimento
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#4A5D63] font-light leading-relaxed">
                    A criança entende o ambiente antes de ser atendida.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE2D5] shadow-xs">
                  <h3 className="font-bold text-sm sm:text-base text-[#0B252C]">
                    Orientação visual
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#4A5D63] font-light leading-relaxed">
                    A família compreende melhor sinais e possibilidades de cuidado.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Photo with Child & Dentist (Image 5) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                  alt="Consulta Pediátrica Acolhedora - Dra. Giseli Eliane"
                  className="w-full h-full object-cover"
                />

                {/* Floating Bottom-Right Dark Pill Card */}
                <div className="absolute bottom-4 inset-x-4 bg-[#062425] text-white p-3.5 rounded-2xl shadow-xl text-[11px] font-light leading-snug border border-white/10">
                  Ambiente preparado para orientar, acolher e acompanhar cada fase do sorriso infantil.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. Dúvidas Frequentes (FAQ - User Request) ── */}
      <section id="faq" className="py-16 sm:py-24 bg-[#062425] text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E57A58] block mb-2">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl text-white tracking-tight">
              Tudo o que você precisa saber antes da consulta
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-300 font-light max-w-xl mx-auto">
              Respostas claras para que a ida ao dentista seja uma experiência leve e tranquila para toda a família.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0C3437] rounded-2xl border border-white/10 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-[#E57A58] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E57A58] shrink-0 transition-transform duration-300 ${
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

      {/* ── 7. Pre-Footer Banner & Agendamento ── */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] text-center border-t border-[#EFE8DC]">
        <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#C15C3D] block mb-2">
            CONSULTÓRIO NA CASA VERDE - SÃO PAULO
          </span>

          <h2 className="font-bold text-3xl xs:text-4xl sm:text-5xl text-[#0B252C] leading-tight tracking-tight">
            Proporcione uma experiência positiva de cuidado dental para seu filho.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#4A5D63] max-w-xl mx-auto font-light leading-relaxed">
            Agende uma conversa com a Dra. Giseli Eliane e conheça nossa abordagem humanizada e acolhedora.
          </p>

          <div className="mt-8 flex flex-col xs:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => handleOpenSchedule()}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#C15C3D] hover:bg-[#A84A2E] text-white font-semibold text-sm sm:text-base shadow-lg active:scale-95 transition-all cursor-pointer min-h-[48px] touch-manipulation"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Agendar pelo WhatsApp</span>
            </button>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contato" className="bg-[#062425] text-gray-400 text-xs py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-bold text-white text-base">
              Dra. Giseli Eliane – CRO 79790 SP
            </span>
            <span className="text-[11px] text-gray-400 mt-1">
              Atendimento Infantil e Clínico Geral na Casa Verde, São Paulo
            </span>
          </div>

          <div className="flex items-center gap-6 text-gray-300">
            <a href="#inicio" className="hover:text-[#E57A58] transition-colors">Home</a>
            <a href="#sobre" className="hover:text-[#E57A58] transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-[#E57A58] transition-colors">Serviços</a>
            <a href="#faq" className="hover:text-[#E57A58] transition-colors">FAQ</a>
          </div>

          <p className="text-[11px] text-gray-500">
            © {new Date().getFullYear()} Dra. Giseli Eliane. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/5511987654321?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Giseli%20Eliane."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-[#25D366]" />
      </a>

      {/* ── Interactive Schedule Modal ── */}
      {isScheduleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border border-[#EAE2D5] p-6 sm:p-8 text-[#0B252C] shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setIsScheduleOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#0B252C] p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-bold text-2xl text-[#0B252C] mb-1">
              Agendar com a Dra. Giseli
            </h3>
            <p className="text-xs text-[#4A5D63] mb-6 font-light">
              Preencha os dados abaixo para um atendimento atencioso e personalizado.
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#C15C3D]/20 text-[#C15C3D] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-[#0B252C]">Solicitação recebida!</h4>
                <p className="text-xs text-[#4A5D63]">
                  Você está sendo redirecionado para o WhatsApp da Dra. Giseli Eliane...
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0B252C] uppercase mb-1">
                    Nome do Responsável
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#0B252C] placeholder:text-gray-400 text-xs focus:outline-none focus:border-[#C15C3D]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B252C] uppercase mb-1">
                    Nome da Criança ou Paciente
                  </label>
                  <input
                    type="text"
                    required
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    placeholder="Nome do seu filho(a)"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#0B252C] placeholder:text-gray-400 text-xs focus:outline-none focus:border-[#C15C3D]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B252C] uppercase mb-1">
                    WhatsApp para Contato
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#0B252C] placeholder:text-gray-400 text-xs focus:outline-none focus:border-[#C15C3D]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B252C] uppercase mb-1">
                    Qual é o motivo principal da consulta?
                  </label>
                  <select
                    value={need || selectedTopic}
                    onChange={(e) => {
                      setNeed(e.target.value);
                      setSelectedTopic(e.target.value);
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#0B252C] text-xs focus:outline-none focus:border-[#C15C3D]"
                  >
                    <option value="Primeira consulta / Prevenção">Primeira consulta / Prevenção</option>
                    <option value="Criança com medo de dentista">Criança com medo de dentista</option>
                    <option value="Bruxismo / Range os dentes">Bruxismo / Range os dentes</option>
                    <option value="Aparelho ou crescimento facial">Aparelho ou crescimento facial</option>
                    <option value="Dor de dente ou urgência">Dor de dente ou urgência</option>
                    <option value="Clínico geral para adolescente/adulto">Clínico geral para adolescente/adulto</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B252C] uppercase mb-1">
                    Preferência de Período ou Mensagem
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ex: Preferência período da tarde / Quinta-feira..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE2D5] text-[#0B252C] placeholder:text-gray-400 text-xs focus:outline-none focus:border-[#C15C3D]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#C15C3D] hover:bg-[#A84A2E] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-all mt-2 cursor-pointer"
                >
                  Continuar no WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}