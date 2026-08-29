import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Heart,
  Instagram,
  Laptop,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plus,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  User,
  Calendar,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/cases/ps-odontologia")({
  head: () => ({
    meta: [
      { title: "Modelo: P&S Odontologia - Vila Moraes, São Paulo | Odonto Websites" },
      {
        name: "description",
        content:
          "Modelo de site de alta conversão para clínica odontológica familiar. P&S Odontologia - Clínica Geral, Ortodontia, Implantes, Odontopediatria e Clareamento na Av. Cursino, 6303, Vila Moraes - São Paulo.",
      },
      {
        name: "keywords",
        content: "P&S Odontologia, dentista vila moraes, dentista av cursino, odontopediatria vila moraes, implantes jardim celeste, clareamento dental sao paulo, modelo site odontologia",
      },
      { property: "og:title", content: "Modelo: P&S Odontologia - Vila Moraes, São Paulo" },
      {
        property: "og:description",
        content:
          "Cuidado dental que transforma sorrisos. Clínica odontológica completa com atendimento humanizado para toda a família em São Paulo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://odontowebsites.com.br/cases/ps-odontologia" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Modelo: P&S Odontologia - Vila Moraes, São Paulo" },
      {
        name: "twitter:description",
        content: "Site de alta conversão para clínica odontológica familiar desenvolvido pela Odonto Websites.",
      },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://odontowebsites.com.br/cases/ps-odontologia",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "P&S Odontologia - Vila Moraes",
          "description": "Clínica odontológica completa com atendimento humanizado para toda a família.",
          "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
          "telephone": "+55-11-99899-3890",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avenida Cursino, 6303 – Conj. 01",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "04169-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.6384,
            "longitude": -46.6083
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "09:00",
              "closes": "12:00"
            }
          ]
        })
      }
    ]
  }),
  component: CasePSOdontologia,
});

// Full treatments list for "Ver todos os serviços"
const allServicesList = [
  { name: "Clínica Geral", desc: "Consultas de rotina, profilaxia, restaurações estéticas e saúde bucal completa." },
  { name: "Ortodontia & Alinhadores", desc: "Aparelhos fixos metálicos/estéticos e alinhadores invisíveis para dentes perfeitos." },
  { name: "Implantes Dentários", desc: "Implantes osseointegrados de alta tecnologia para restaurar sua mastigação e estética." },
  { name: "Odontopediatria", desc: "Cuidado lúdico, preventivo e humanizado para bebês, crianças e adolescentes." },
  { name: "Clareamento Dental", desc: "Clareamento a laser em consultório e moldeiras caseiras seguras e duradouras." },
  { name: "Endodontia (Canal)", desc: "Tratamento de canal moderno, rápido e sem dor com instrumentos rotatórios." },
  { name: "Laserterapia", desc: "Alívio imediato de dores, aftas, herpes e aceleração de cicatrizações pós-cirúrgicas." },
  { name: "Periodontia", desc: "Tratamento especializado da gengiva, cálculo e prevenção de perdas ósseas." },
  { name: "Cirurgia Oral & Sisos", desc: "Extração segura de dentes inclusos e procedimentos cirúrgicos ambulatoriais." },
  { name: "Odontogeriatria", desc: "Atendimento odontológico especializado para a melhor idade com máximo carinho." },
  { name: "Frenectomia", desc: "Remoção do freio lingual ou labial com rápida recuperação." },
  { name: "Sedação Consciente", desc: "Máximo relaxamento e tranquilidade para pacientes com fobia ou ansiedade." },
  { name: "Prótese Dentária", desc: "Próteses fixas sobre implante, coroas de porcelana e próteses removíveis flexíveis." },
];

const faqs = [
  {
    q: "Aceitam convênios e planos odontológicos?",
    a: "Sim! Trabalhamos com diversos planos odontológicos e também oferecemos condições facilitadas e parcelamento para procedimentos particulares.",
  },
  {
    q: "Como agendar uma avaliação inicial?",
    a: "O agendamento é simples e rápido: basta clicar nos botões de WhatsApp espalhados pela página ou preencher o formulário. Nossa equipe responde em poucos minutos.",
  },
  {
    q: "A clínica atende crianças pequenas e bebês?",
    a: "Sim! Nossa equipe conta com odontopediatras especializadas em atendimento infantil humanizado, em um ambiente pensado para que a criança se sinta segura e acolhida.",
  },
  {
    q: "O clareamento dental causa sensibilidade?",
    a: "Utilizamos géis clareadores modernos com agentes dessensibilizantes associados a protocolos preventivos, proporcionando um clareamento eficaz com máximo conforto.",
  },
  {
    q: "Onde a clínica fica localizada e há facilidade de acesso?",
    a: "Estamos localizados na Avenida Cursino, 6303 (Conjunto 01) no Jardim Celeste / Vila Moraes em São Paulo, com fácil acesso e opções de transporte e estacionamento.",
  },
];

function CasePSOdontologia() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState("");

  // Form state
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
    const textMsg = `Olá! Meu nome é ${name}. Gostaria de agendar uma consulta na P&S Odontologia para: ${service || selectedService || "Avaliação Geral"}. Data preferida: ${preferredDate || "A combinar"}. Mensagem: ${message || "Sem observações"}`;
    const whatsappUrl = `https://wa.me/5511998993890?text=${encodeURIComponent(textMsg)}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white text-[#2D2D2D] font-sans antialiased overflow-x-hidden selection:bg-[#7A1C1C]/20 selection:text-[#7A1C1C]">
      
      {/* ── Top Bar: Demonstration Banner / Return to Main Portfolio ── */}
      <div className="bg-[#4a1010] text-white text-xs py-2 px-3 sm:px-6 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse shrink-0" />
            <span className="font-medium text-rose-100 text-[10.5px] sm:text-xs truncate">
              <span className="hidden xs:inline">Modelo Demonstrativo: </span>P&S Odontologia · Vila Moraes - SP
            </span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs font-bold text-amber-300 hover:text-amber-200 uppercase tracking-wider transition-colors shrink-0 py-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar aos Modelos</span>
          </Link>
        </div>
      </div>

      {/* ── Header / Navigation (Image 1) ── */}
      <header className="sticky top-[37px] sm:top-[33px] z-40 bg-white/98 backdrop-blur-md shadow-xs border-b border-[#F4E6E6] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            {/* Tooth Gradient Icon */}
            <div className="relative w-7 h-8 xs:w-8 xs:h-9 sm:w-9 sm:h-10 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xs">
                <defs>
                  <linearGradient id="psToothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A82E2E" />
                    <stop offset="50%" stopColor="#801818" />
                    <stop offset="100%" stopColor="#541010" />
                  </linearGradient>
                  <linearGradient id="psInnerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F9D2D2" />
                    <stop offset="100%" stopColor="#E59999" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                  fill="url(#psToothGrad)"
                />
                <path
                  d="M14 13C16 10 24 10 26 13C24.5 18 15.5 18 14 13Z"
                  fill="url(#psInnerGrad)"
                />
              </svg>
            </div>
            
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-bold text-[15.5px] xs:text-[18px] sm:text-[21px] tracking-tight text-[#6B1414] leading-tight truncate">
                P&S Odontologia
              </span>
              <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] tracking-[0.14em] xs:tracking-[0.18em] text-[#737373] font-semibold uppercase mt-0.5 truncate">
                VILA MORAES - SÃO PAULO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 text-[14px] font-medium text-[#4B5563]">
            <a
              href="#inicio"
              className="bg-[#FDF2F2] text-[#7A1C1C] font-semibold rounded-md px-3.5 py-1.5 transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="px-3.5 py-1.5 rounded-md hover:text-[#7A1C1C] hover:bg-[#FDF2F2]/60 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="px-3.5 py-1.5 rounded-md hover:text-[#7A1C1C] hover:bg-[#FDF2F2]/60 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#duvidas"
              className="px-3.5 py-1.5 rounded-md hover:text-[#7A1C1C] hover:bg-[#FDF2F2]/60 transition-colors"
            >
              Dúvidas
            </a>
            <a
              href="#contato"
              className="px-3.5 py-1.5 rounded-md hover:text-[#7A1C1C] hover:bg-[#FDF2F2]/60 transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={() => handleOpenSchedule()}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7A1C1C] hover:bg-[#601515] text-white font-semibold text-[14px] shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-white fill-white/20" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#7A1C1C] hover:bg-[#FDF2F2] rounded-lg transition-colors shrink-0 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#F4E6E6] px-5 py-4 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-[#FDF2F2] text-[#7A1C1C] font-semibold px-3 py-2 rounded-lg text-sm"
            >
              Início
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4B5563] font-medium px-3 py-2 rounded-lg text-sm hover:bg-[#FDF2F2] hover:text-[#7A1C1C]"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4B5563] font-medium px-3 py-2 rounded-lg text-sm hover:bg-[#FDF2F2] hover:text-[#7A1C1C]"
            >
              Sobre
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4B5563] font-medium px-3 py-2 rounded-lg text-sm hover:bg-[#FDF2F2] hover:text-[#7A1C1C]"
            >
              Dúvidas
            </a>
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#4B5563] font-medium px-3 py-2 rounded-lg text-sm hover:bg-[#FDF2F2] hover:text-[#7A1C1C]"
            >
              Contato
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenSchedule();
                }}
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-[#7A1C1C] hover:bg-[#601515] text-white font-semibold text-sm transition-all min-h-[44px] touch-manipulation"
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
        className="relative pt-10 xs:pt-12 sm:pt-16 md:pt-20 pb-14 xs:pb-16 sm:pb-20 md:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #7A1919 0%, #8A1E1E 45%, #601414 100%)",
        }}
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-300 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-rose-950 blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-3xl">
            
            {/* Main Headline */}
            <h1 className="font-serif font-bold text-[30px] xs:text-[36px] sm:text-5xl md:text-6xl lg:text-[68px] text-white leading-[1.12] tracking-tight break-words">
              Cuidado dental<br />
              que transforma<br />
              <span className="text-[#E8B4B4] font-serif font-normal">sorrisos</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-7 text-xs xs:text-sm sm:text-base md:text-lg text-white/90 font-normal leading-relaxed max-w-xl">
              Clínica odontológica completa com atendimento humanizado para toda a família. Ortodontia, implantes, odontopediatria, clareamento e muito mais.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-10 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4">
              <button
                onClick={() => handleOpenSchedule()}
                className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#7A1C1C] font-bold text-xs xs:text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#7A1C1C] fill-[#7A1C1C]" />
                <span>Agendar pelo WhatsApp</span>
              </button>

              <a
                href="#servicos"
                className="w-full xs:w-auto inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full border border-white/40 hover:border-white/80 bg-white/10 hover:bg-white/20 text-white font-medium text-xs xs:text-sm sm:text-base transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation text-center"
              >
                Ver todos os serviços
              </a>
            </div>

            {/* Checklist Badges at the bottom of Hero */}
            <div className="mt-8 sm:mt-14 pt-5 sm:pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2.5 sm:gap-y-3 text-xs sm:text-sm text-white/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 shrink-0" />
                <span>Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 shrink-0" />
                <span>Toda a família</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 shrink-0" />
                <span>Planos odontológicos aceitos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-200 shrink-0" />
                <span>Tecnologia avançada</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Nossos Serviços (Image 2) ── */}
      <section id="servicos" className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block mb-3.5 sm:mb-4">
              <span className="px-4 py-1.5 rounded-full bg-[#FDF2F2] border border-[#F5D0D0] text-[#7A1C1C] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                NOSSOS SERVIÇOS
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] text-[#6B1414] tracking-tight leading-tight">
              Cuidado completo para o seu sorriso
            </h2>

            <p className="mt-3.5 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta e atendimento personalizado.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Clínica Geral */}
            <div
              onClick={() => handleOpenSchedule("Clínica Geral")}
              className="group bg-white rounded-2xl border border-[#F2E4E4] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#E8BDBD] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Warm icon container */}
                <div className="w-14 h-14 rounded-2xl bg-[#FCF5ED] border border-[#F5E6D3] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C7.5 2 4 5 4 10C4 14.5 6 20 8 22C9.5 23.5 10.5 20.5 12 20.5C13.5 20.5 14.5 23.5 16 22C18 20 20 14.5 20 10C20 5 16.5 2 12 2Z" />
                    <path d="M9 8C10 6.5 14 6.5 15 8" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#6B1414] group-hover:text-[#8B1E1E] transition-colors">
                  Clínica Geral
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Consultas de rotina, prevenção, restaurações e cuidados essenciais para manter a saúde bucal de toda a família.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7A1C1C]">
                <span>Agendar este serviço</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Ortodontia */}
            <div
              onClick={() => handleOpenSchedule("Ortodontia")}
              className="group bg-white rounded-2xl border border-[#F2E4E4] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#E8BDBD] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FCF5ED] border border-[#F5E6D3] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C7.5 2 4 5 4 10C4 14.5 6 20 8 22C9.5 23.5 10.5 20.5 12 20.5C13.5 20.5 14.5 23.5 16 22C18 20 20 14.5 20 10C20 5 16.5 2 12 2Z" />
                    <rect x="8" y="9" width="8" height="5" rx="1" strokeWidth="1.5" />
                    <line x1="4" y1="11.5" x2="20" y2="11.5" strokeWidth="1.5" strokeDasharray="1 1" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#6B1414] group-hover:text-[#8B1E1E] transition-colors">
                  Ortodontia
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Aparelhos fixos tradicionais e alinhadores modernos para corrigir o alinhamento dos dentes com conforto e eficiência.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7A1C1C]">
                <span>Agendar este serviço</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Implantes */}
            <div
              onClick={() => handleOpenSchedule("Implantes")}
              className="group bg-white rounded-2xl border border-[#F2E4E4] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#E8BDBD] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FCF5ED] border border-[#F5E6D3] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8 2 5 5 5 9C5 12 8 13 12 13C16 13 19 12 19 9C19 5 16 2 12 2Z" />
                    <line x1="9" y1="15" x2="15" y2="15" strokeWidth="1.5" />
                    <line x1="10" y1="18" x2="14" y2="18" strokeWidth="1.5" />
                    <line x1="11" y1="21" x2="13" y2="21" strokeWidth="1.5" />
                    <path d="M12 13V22" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#6B1414] group-hover:text-[#8B1E1E] transition-colors">
                  Implantes
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Implantes osseointegrados de alta qualidade que restauram a função e a estética do sorriso de forma permanente.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7A1C1C]">
                <span>Agendar este serviço</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Odontopediatria */}
            <div
              onClick={() => handleOpenSchedule("Odontopediatria")}
              className="group bg-white rounded-2xl border border-[#F2E4E4] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#E8BDBD] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FCF5ED] border border-[#F5E6D3] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#B45309" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="14" r="6" />
                    <circle cx="9" cy="6" r="2.5" />
                    <circle cx="15" cy="6" r="2.5" />
                    <path d="M10 13H10.01M14 13H14.01" strokeWidth="2" />
                    <path d="M10.5 16C11 17 13 17 13.5 16" />
                  </svg>
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#6B1414] group-hover:text-[#8B1E1E] transition-colors">
                  Odontopediatria
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Atendimento especializado para crianças com ambiente acolhedor e técnicas pensadas para tornar a experiência leve.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7A1C1C]">
                <span>Agendar este serviço</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 5: Clareamento Dental */}
            <div
              onClick={() => handleOpenSchedule("Clareamento Dental")}
              className="group bg-white rounded-2xl border border-[#F2E4E4] p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#E8BDBD] transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#FCF5ED] border border-[#F5E6D3] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-7 h-7 text-[#B45309]" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#6B1414] group-hover:text-[#8B1E1E] transition-colors">
                  Clareamento Dental
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Clareamento a laser e caseiro para devolver a luminosidade e a autoestima com segurança e resultado duradouro.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7A1C1C]">
                <span>Agendar este serviço</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 6: Ver todos os serviços (Special Card) */}
            <div
              onClick={() => setIsServicesModalOpen(true)}
              className="group bg-[#FDF6F6] rounded-2xl border-2 border-dashed border-[#E8C5C5] hover:border-[#7A1C1C] p-7 sm:p-8 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#FCECEC]"
            >
              <div className="w-12 h-12 rounded-full bg-white text-[#7A1C1C] border border-[#E8C5C5] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#7A1C1C] group-hover:text-white transition-all">
                <Plus className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#6B1414] group-hover:text-[#8B1E1E]">
                Ver todos os serviços
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs">
                Endodontia, Laserterapia, Periodontia, Cirurgia, Odontogeriatria, Frenectomia, Sedação, Prótese e mais.
              </p>
              <span className="mt-5 text-xs font-bold text-[#7A1C1C] underline underline-offset-4 group-hover:no-underline">
                Clique para ver a lista completa
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. Por Que Escolher a P&S (Image 3) ── */}
      <section id="sobre" className="py-16 sm:py-24 bg-[#FAF7F7] border-y border-[#F0E4E4] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block mb-3.5 sm:mb-4">
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#EAC5C5] text-[#7A1C1C] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-xs">
                POR QUE ESCOLHER A P&S
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] text-[#6B1414] tracking-tight leading-tight">
              Compromisso com o seu sorriso
            </h2>

            <p className="mt-3.5 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Nossa missão é oferecer um atendimento de excelência em um ambiente confortável e acolhedor.
            </p>
          </div>

          {/* 4 Pillars Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Pillar 1 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#7A1C1C] text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#6B1414]">
                  Equipe Especializada
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dentistas com formação especializada em diversas áreas, comprometidos com atualização contínua e excelência técnica.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#7A1C1C] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Laptop className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#6B1414]">
                  Tecnologia de Ponta
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Equipamentos modernos e técnicas atuais garantem diagnósticos precisos, tratamentos mais confortáveis e resultados superiores.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#7A1C1C] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#6B1414]">
                  Atendimento Humanizado
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cada paciente é único. Nosso atendimento é personalizado, cuidadoso e pensado para proporcionar conforto e tranquilidade.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#7A1C1C] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-[#6B1414]">
                  Toda a Família
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Do bebê ao idoso, atendemos todas as idades com especialidades pensadas para cada fase da vida, em um único lugar.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. Onde Estamos (Image 4) ── */}
      <section id="contato" className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block mb-3.5 sm:mb-4">
              <span className="px-4 py-1.5 rounded-full bg-[#FDF2F2] border border-[#F5D0D0] text-[#7A1C1C] text-[11px] sm:text-xs font-bold tracking-wider uppercase">
                ONDE ESTAMOS
              </span>
            </div>

            <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] text-[#6B1414] tracking-tight leading-tight">
              Fácil acesso no Jardim Celeste
            </h2>

            <p className="mt-3.5 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Estamos localizados em São Paulo, no Jardim Celeste, com estrutura completa para receber você e sua família.
            </p>
          </div>

          {/* 2 Columns: Info & Google Maps Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Info List */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F2] text-[#7A1C1C] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    ENDEREÇO
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug mt-0.5">
                    Avenida Cursino, 6303 – Conj. 01 – Vila Moraes, São Paulo — SP
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F2] text-[#7A1C1C] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    WHATSAPP
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug mt-0.5">
                    (11) 99899-3890 / (11) 2331-8686
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F2] text-[#7A1C1C] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    HORÁRIO DE ATENDIMENTO
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug mt-0.5">
                    Segunda a Sexta: 09h às 18h<br />
                    Sábado: 09h às 12h
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FDF2F2] text-[#7A1C1C] flex items-center justify-center shrink-0 mt-0.5">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    INSTAGRAM
                  </span>
                  <p className="text-sm sm:text-[15px] font-medium text-slate-800 leading-snug mt-0.5">
                    @ps.odonto_
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleOpenSchedule()}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#7A1C1C] hover:bg-[#601515] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation"
                >
                  Entrar em contato
                </button>
              </div>

            </div>

            {/* Right Interactive Maps Mockup */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/11] sm:aspect-[4/3] bg-slate-100">
                
                {/* Map Graphic Mockup / Embed */}
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80')`,
                    filter: "contrast(0.95) saturate(1.1)",
                  }}
                >
                  <div className="absolute inset-0 bg-[#E8ECEF]/80 backdrop-blur-[1px]" />
                  
                  {/* Styled Map Streets / Roads Graphic */}
                  <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 500 350">
                    <path d="M-20,100 Q150,120 280,180 T520,220" stroke="#FFFFFF" strokeWidth="16" fill="none" />
                    <path d="M-20,100 Q150,120 280,180 T520,220" stroke="#FDE68A" strokeWidth="10" fill="none" />
                    <path d="M300,-20 L240,380" stroke="#FFFFFF" strokeWidth="18" fill="none" />
                    <path d="M300,-20 L240,380" stroke="#CBD5E1" strokeWidth="12" fill="none" />
                    <path d="M50,380 L420,-20" stroke="#FFFFFF" strokeWidth="14" fill="none" />
                    <path d="M50,380 L420,-20" stroke="#CBD5E1" strokeWidth="8" fill="none" />
                  </svg>

                  {/* Top-left Maps Button */}
                  <a
                    href="https://maps.google.com/?q=Avenida+Cursino+6303+Vila+Moraes+Sao+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 left-3 bg-white/95 hover:bg-white text-slate-700 text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-sm border border-slate-200 flex items-center gap-1.5 transition-colors z-20"
                  >
                    <span>Abrir no Maps</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  {/* Center Map Pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group cursor-pointer">
                    <div className="bg-[#7A1C1C] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg border border-white flex items-center gap-1.5 animate-bounce">
                      <MapPin className="w-3.5 h-3.5 text-rose-300" />
                      <span>P&S Odontologia</span>
                    </div>
                    <div className="w-3 h-3 bg-[#7A1C1C] rotate-45 -mt-1.5 shadow-md border-r border-b border-white" />
                  </div>

                  {/* Bottom Map Disclaimer */}
                  <div className="absolute bottom-2 inset-x-2 bg-white/85 backdrop-blur-xs px-3 py-1.5 rounded-md text-[9px] text-slate-500 flex items-center justify-between border border-slate-200/60 z-20">
                    <span>Av. Cursino, 6303 – Vila Moraes</span>
                    <span>Google Maps ©</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. Dúvidas Frequentes (FAQ) ── */}
      <section id="duvidas" className="py-16 sm:py-24 bg-[#FAF7F7] border-t border-[#F0E4E4] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8">
          
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3.5">
              <span className="px-4 py-1.5 rounded-full bg-white border border-[#EAC5C5] text-[#7A1C1C] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-xs">
                DÚVIDAS FREQUENTES
              </span>
            </div>
            <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl text-[#6B1414] tracking-tight">
              Tire suas dúvidas sobre nosso atendimento
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#ECDCDC] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#6B1414] hover:text-[#8A1E1E] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#7A1C1C] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 6. Pre-Footer Banner (Image 5) ── */}
      <section
        className="py-16 sm:py-24 overflow-hidden relative"
        style={{
          background: "linear-gradient(135deg, #7A1919 0%, #8A1E1E 45%, #601414 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 xs:px-6 sm:px-8 text-center relative z-10">
          
          <h2 className="font-serif font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Pronto para transformar seu sorriso?
          </h2>

          <p className="mt-4 sm:mt-5 text-rose-100 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Agende sua consulta agora pelo WhatsApp e conte com um atendimento especializado e acolhedor.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={() => handleOpenSchedule()}
              className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#7A1C1C] font-bold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation"
            >
              <MessageCircle className="w-5 h-5 text-[#7A1C1C] fill-[#7A1C1C]" />
              <span>Agendar pelo WhatsApp</span>
            </button>

            <a
              href="#contato"
              className="w-full xs:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 hover:border-white/80 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base transition-all duration-200 cursor-pointer min-h-[48px] touch-manipulation text-center"
            >
              Ver formas de contato
            </a>
          </div>

        </div>
      </section>

      {/* ── 7. Footer (Image 5) ── */}
      <footer className="bg-[#120808] text-slate-300 pt-16 sm:pt-20 pb-12 sm:pb-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 sm:mb-16">
            
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-9 shrink-0 flex items-center justify-center">
                  <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                      fill="#A82E2E"
                    />
                    <path
                      d="M14 13C16 10 24 10 26 13C24.5 18 15.5 18 14 13Z"
                      fill="#F9D2D2"
                    />
                  </svg>
                </div>
                <div>
                  <span className="font-serif font-bold text-white text-lg tracking-tight block leading-tight">
                    P&S Odontologia
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Cuidado dental completo para toda a família, com tecnologia e atendimento humanizado.
              </p>

              <div className="text-xs text-slate-500 font-mono">
                <p>Resp. Técnica: Dra. Priscila Silva</p>
                <p className="mt-1">CRO-SP: Clínica Cadastrada</p>
              </div>
            </div>

            {/* Col 2: Navegação */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-wide font-serif">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors py-0.5 block">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition-colors py-0.5 block">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors py-0.5 block">Sobre</a></li>
                <li><a href="#duvidas" className="hover:text-white transition-colors py-0.5 block">Dúvidas</a></li>
                <li><a href="#contato" className="hover:text-white transition-colors py-0.5 block">Contato</a></li>
              </ul>
            </div>

            {/* Col 3: Serviços */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-wide font-serif">
                Serviços
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><button onClick={() => handleOpenSchedule("Ortodontia")} className="hover:text-white transition-colors py-0.5 text-left cursor-pointer">Ortodontia</button></li>
                <li><button onClick={() => handleOpenSchedule("Implantes")} className="hover:text-white transition-colors py-0.5 text-left cursor-pointer">Implantes</button></li>
                <li><button onClick={() => handleOpenSchedule("Odontopediatria")} className="hover:text-white transition-colors py-0.5 text-left cursor-pointer">Odontopediatria</button></li>
                <li><button onClick={() => handleOpenSchedule("Endodontia")} className="hover:text-white transition-colors py-0.5 text-left cursor-pointer">Endodontia</button></li>
                <li><button onClick={() => handleOpenSchedule("Clareamento")} className="hover:text-white transition-colors py-0.5 text-left cursor-pointer">Clareamento</button></li>
                <li><button onClick={() => handleOpenSchedule("Prótese Dentária")} className="hover:text-white transition-colors py-0.5 text-left cursor-pointer">Prótese Dentária</button></li>
                <li><button onClick={() => setIsServicesModalOpen(true)} className="text-rose-300 font-semibold hover:underline py-0.5 text-left cursor-pointer">Ver todos</button></li>
              </ul>
            </div>

            {/* Col 4: Contato */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-wide font-serif">
                Contato
              </h4>
              <ul className="space-y-3.5 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-slate-300">
                    Avenida Cursino, 6303 – Conj. 01 – Vila Moraes, São Paulo — SP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-slate-300">(11) 99899-3890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-slate-300">(11) 2331-8686</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-slate-300">Seg–Sex 09h–18h | Sáb 09h–12h</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-slate-300">@ps.odonto_</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} P&S Odontologia. Todos os direitos reservados.</p>
            <div className="inline-block rounded-full border border-rose-950 bg-rose-950/50 px-3.5 py-1 text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest text-rose-300">
              Projeto de demonstração · Odonto Websites
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button (Green Pill) ── */}
      <button
        onClick={() => handleOpenSchedule()}
        aria-label="Agendar consulta"
        className="fixed bottom-5 right-5 z-50 group flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-xl hover:shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer touch-manipulation"
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute w-6 h-6 rounded-full bg-white opacity-30 animate-ping" />
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.47 0 .14 5.33.14 11.9c0 2.1.55 4.14 1.6 5.96L0 24l6.32-1.66a11.88 11.88 0 0 0 5.72 1.46h.01c6.57 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42zM12.04 21.8c-1.78 0-3.52-.48-5.05-1.38l-.36-.21-3.75.98 1-3.65-.23-.38A9.87 9.87 0 0 1 2.13 11.9c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7 2.9 1.88 1.88 2.91 4.36 2.91 7.01 0 5.46-4.45 9.9-9.92 9.9zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.97 1.25 3.17c.15.2 2.16 3.3 5.23 4.63.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
          </svg>
        </span>
        <span className="hidden xs:inline tracking-tight font-sans">Agendar consulta</span>
      </button>

      {/* ── Schedule Modal ── */}
      {isScheduleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/65 backdrop-blur-xs">
          <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#7A1C1C] p-4 xs:p-6 text-white flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-rose-200 font-semibold">
                  P&S Odontologia
                </span>
                <h3 className="text-lg xs:text-xl font-serif font-bold mt-0.5">Agendar Consulta</h3>
              </div>
              <button
                onClick={() => {
                  setIsScheduleOpen(false);
                  setSubmitted(false);
                }}
                className="p-1.5 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer touch-manipulation"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 xs:p-6 sm:p-8 overflow-y-auto">
              {submitted ? (
                <div className="py-6 sm:py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-bold text-[#6B1414]">Solicitação Enviada!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm leading-relaxed">
                    Estamos redirecionando você para o WhatsApp da P&S Odontologia para confirmar o horário com nossa recepção.
                  </p>
                  <button
                    onClick={() => {
                      setIsScheduleOpen(false);
                      setSubmitted(false);
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#7A1C1C] text-white text-xs sm:text-sm font-semibold hover:bg-[#601515] transition-colors cursor-pointer min-h-[44px]"
                  >
                    Fechar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome"
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#7A1C1C] focus:ring-1 focus:ring-[#7A1C1C] transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        WhatsApp / Telefone
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(11) 99899-3890"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#7A1C1C] focus:ring-1 focus:ring-[#7A1C1C] transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Tratamento / Interesse
                      </label>
                      <select
                        value={service || selectedService}
                        onChange={(e) => {
                          setService(e.target.value);
                          setSelectedService(e.target.value);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#7A1C1C] focus:ring-1 focus:ring-[#7A1C1C] transition-all bg-white min-h-[44px]"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="Clínica Geral">Clínica Geral</option>
                        <option value="Ortodontia">Ortodontia / Alinhadores</option>
                        <option value="Implantes">Implantes Dentários</option>
                        <option value="Odontopediatria">Odontopediatria</option>
                        <option value="Clareamento Dental">Clareamento Dental</option>
                        <option value="Endodontia (Canal)">Endodontia (Canal)</option>
                        <option value="Prótese Dentária">Prótese Dentária</option>
                        <option value="Laserterapia">Laserterapia</option>
                        <option value="Outro / Avaliação">Outro / Avaliação Geral</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Data de Preferência
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#7A1C1C] focus:ring-1 focus:ring-[#7A1C1C] transition-all min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mensagem / Observação (Opcional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Conte-nos o que você busca ou se possui algum plano odontológico..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#7A1C1C] focus:ring-1 focus:ring-[#7A1C1C] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#7A1C1C] hover:bg-[#601515] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer min-h-[48px] touch-manipulation"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Confirmar e Falar no WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── All Services Modal ── */}
      {isServicesModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/65 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-[#7A1C1C] p-5 text-white flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-rose-200 font-semibold">
                  Catálogo Completo
                </span>
                <h3 className="text-xl font-serif font-bold mt-0.5">Todos os Nossos Serviços</h3>
              </div>
              <button
                onClick={() => setIsServicesModalOpen(false)}
                className="p-1.5 rounded-full text-rose-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer touch-manipulation"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto divide-y divide-slate-100">
              {allServicesList.map((srv, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group">
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#6B1414] group-hover:text-[#8A1E1E]">
                      {srv.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsServicesModalOpen(false);
                      handleOpenSchedule(srv.name);
                    }}
                    className="shrink-0 px-3 py-1.5 rounded-lg bg-[#FDF2F2] hover:bg-[#7A1C1C] text-[#7A1C1C] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Agendar
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
              <button
                onClick={() => {
                  setIsServicesModalOpen(false);
                  handleOpenSchedule();
                }}
                className="w-full py-3 rounded-xl bg-[#7A1C1C] hover:bg-[#601515] text-white font-bold text-sm tracking-wide transition-all shadow-xs cursor-pointer"
              >
                Agendar Avaliação Geral
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
