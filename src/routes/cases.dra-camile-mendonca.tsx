import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  ArrowRightCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  ShieldCheck,
  Sparkles,
  X,
  User,
  Calendar,
  MessageSquare,
  Menu,
} from "lucide-react";

export const Route = createFileRoute("/cases/dra-camile-mendonca")({
  head: () => ({
    meta: [
      { title: "Modelo: Dra. Camile Mendonça - Odontologia Especializada | Odonto Websites" },
      {
        name: "description",
        content:
          "Modelo de site de alta conversão para consultório odontológico. Dra. Camile Mendonça - Especialista em Odontogeriatria, Estética Dental, Próteses e Implantes próximo ao Metrô Clínicas em São Paulo.",
      },
      {
        name: "keywords",
        content: "Dra Camile Mendonça, odontogeriatria são paulo, dentista metro clinicas, protese dental, estetica dental sp, modelo de site dentista",
      },
      { property: "og:title", content: "Modelo: Dra. Camile Mendonça - Odontologia Especializada" },
      {
        property: "og:description",
        content:
          "Site premium para consultório odontológico com agendamento direto e foco em conversão de pacientes particulares.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://odontowebsites.com.br/cases/dra-camile-mendonca" },
      { property: "og:image", content: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Modelo: Dra. Camile Mendonça - Odontologia Especializada" },
      {
        name: "twitter:description",
        content: "Site premium para consultório odontológico desenvolvido pela Odonto Websites.",
      },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://odontowebsites.com.br/cases/dra-camile-mendonca",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dra. Camile Mendonça - Odontologia Especializada",
          "description": "Consultório odontológico de alto padrão focado em Odontogeriatria, Estética Dental, Próteses e Implantes.",
          "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
          "telephone": "+55-11-98765-4321",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Bela Cintra, 1234 - Conj. 56",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01415-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5558,
            "longitude": -46.6624
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "19:00"
            }
          ]
        })
      }
    ]
  }),
  component: CaseCamileMendonca,
});

const teamMembers = [
  {
    prefix: "Dra.",
    name: "Thalita Palma",
    role: "Ortodontia e Estética Dental",
    image: "https://images.unsplash.com/photo-1594824813589-9807b5db305b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    prefix: "Dra.",
    name: "Camile Mendonça",
    role: "Odontogeriatria e Responsável Técnica",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80",
  },
  {
    prefix: "Dr.",
    name: "Henrique Duarte",
    role: "Implantodontia e Cirurgia",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    prefix: "Dra.",
    name: "Beatriz Almeida",
    role: "Endodontia e Clínica Geral",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
  },
];

const treatments = [
  {
    title: "Dentística",
    description: "Restaurar e melhorar a estética e função dos dentes",
  },
  {
    title: "Cirurgia",
    description: "Procedimentos cirúrgicos para corrigir problemas dentários",
  },
  {
    title: "Estética",
    description: "Melhoria da aparência dos dentes e do sorriso.",
  },
  {
    title: "Implante",
    description: "Substituição de dentes perdidos por meio da inserção de implantes",
  },
  {
    title: "Prótese",
    description: "Dispositivos personalizados, como dentaduras ou pontes",
  },
  {
    title: "Odonto Pediatrica",
    description: "Atendimento odontológico de crianças e adolescentes.",
  },
  {
    title: "Odontogeriatria",
    description: "Atendimento odontológico de idosos.",
  },
  {
    title: "Endodontia",
    description: "Tratamento de problemas na parte interna do dente",
  },
  {
    title: "Invisalign",
    description: "Corrigir problemas de má oclusão e desalinhamento dos dentes",
  },
  {
    title: "Ortodontia",
    description: "Problemas de má oclusão e desalinhamento dos dentes",
  },
];

const testimonials = [
  {
    quote:
      "Atendimento e qualidade ideais, além da localização ser perfeita. A Dra. Camille cuida da minha família completa!",
    name: "Alan Bueno",
    role: "EMPRESÁRIO, PROSPECTANER",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "Sempre atenciosa e solícita nos atendimentos, uma profissional de total confiança.",
    name: "Letícia Carotta",
    role: "ESTUDANTE DE JORNALISMO",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    quote:
      "Clareamento e cuidados especiais. Gostei bastante do atendimento da Dra.Camille.",
    name: "Marcelo Bispo",
    role: "EMPRESÁRIO, HAYON CONSULTORIA",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
];

function CaseCamileMendonca() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [treatment, setTreatment] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const prevTeamSlide = () => {
    setCurrentTeamIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextTeamSlide = () => {
    setCurrentTeamIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const handleOpenSchedule = (treatmentName?: string) => {
    if (treatmentName) {
      setSelectedTreatment(treatmentName);
      setTreatment(treatmentName);
    } else {
      setSelectedTreatment("");
      setTreatment("");
    }
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const textMsg = `Olá! Meu nome é ${name}. Gostaria de agendar uma consulta para: ${treatment || selectedTreatment || "Avaliação Geral"}. Data preferida: ${preferredDate || "A combinar"}. Mensagem: ${message || "Sem observações"}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(textMsg)}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1200);
  };

  const currentMember = teamMembers[currentTeamIndex];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#121c29] font-sans antialiased overflow-x-hidden">
      
      {/* ── Top Bar: Demonstration Banner / Return to Main Portfolio ── */}
      <div className="bg-[#0f1d2e] text-white text-xs py-2 px-3 sm:px-6 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-medium text-slate-300 text-[11px] sm:text-xs truncate">
              <span className="hidden xs:inline">Modelo Demonstrativo: </span>Dra. Camile Mendonça
            </span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-amber-300 hover:text-amber-200 uppercase tracking-wider transition-colors shrink-0 py-0.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar aos Modelos</span>
          </Link>
        </div>
      </div>

      {/* ── Header / Navigation (Image 1) ── */}
      <header className="sticky top-[37px] sm:top-[33px] z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-3">
          
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="relative w-7 h-8 sm:w-8 sm:h-9 shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#0f1d2e]">
                <path
                  d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                  stroke="#0f1d2e"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 13C16 10 24 10 26 13C24.5 18 15.5 18 14 13Z"
                  stroke="#b28684"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-[13.5px] xs:text-[15px] sm:text-[17px] tracking-tight text-[#0f1d2e] leading-tight truncate">
                DRA. CAMILE MENDONÇA
              </span>
              <span className="text-[8px] xs:text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-[#9c7674] font-medium mt-0.5 truncate">
                ODONTOLOGIA ESPECIALIZADA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[14.5px] font-medium text-slate-600">
            <a href="#inicio" className="text-slate-400 hover:text-[#0f1d2e] transition-colors font-normal">
              Página Principal
            </a>
            <a href="#quem-somos" className="text-[#0f1d2e] font-semibold hover:text-[#b79169] transition-colors">
              Nossa Estrutura
            </a>
            <a href="#tratamentos" className="text-[#0f1d2e] font-semibold hover:text-[#b79169] transition-colors">
              Tratamentos
            </a>
            <a href="#contato" className="text-[#0f1d2e] font-semibold hover:text-[#b79169] transition-colors">
              Contato
            </a>
          </nav>

          {/* Action Button Desktop */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={() => handleOpenSchedule()}
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full border-[1.5px] border-[#0f1d2e] text-[#0f1d2e] font-semibold text-[14px] hover:bg-[#0f1d2e] hover:text-white transition-all duration-300 active:scale-95 shadow-xs cursor-pointer min-h-[40px]"
            >
              <span>Agendar</span>
              <CheckCircle2 className="w-4 h-4 text-[#0f1d2e] group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0f1d2e] hover:bg-slate-100 rounded-lg transition-colors shrink-0 touch-manipulation min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-2.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-500 font-medium py-2 text-sm border-b border-slate-50"
            >
              Página Principal
            </a>
            <a
              href="#quem-somos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0f1d2e] font-semibold py-2 text-sm border-b border-slate-50"
            >
              Nossa Estrutura
            </a>
            <a
              href="#nossa-equipe"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0f1d2e] font-semibold py-2 text-sm border-b border-slate-50"
            >
              Nossa Equipe
            </a>
            <a
              href="#tratamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0f1d2e] font-semibold py-2 text-sm border-b border-slate-50"
            >
              Tratamentos
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#0f1d2e] font-semibold py-2 text-sm border-b border-slate-50"
            >
              Depoimentos
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenSchedule();
                }}
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-[#0f1d2e] text-[#0f1d2e] font-semibold text-sm hover:bg-[#0f1d2e] hover:text-white transition-all min-h-[44px] touch-manipulation"
              >
                <span>Agendar Consulta</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── 1. Hero Section (Image 1) ── */}
      <section
        id="inicio"
        className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center pt-12 sm:pt-16 pb-14 sm:pb-16 overflow-hidden"
        style={{
          backgroundColor: "#EBE1D5",
          backgroundImage: `
            radial-gradient(circle at 80% 45%, rgba(255,255,255,0.4) 0%, rgba(235,225,213,0.2) 60%),
            linear-gradient(to right, #EFE6DC 0%, #E8DCCF 50%, #DFCEBD 100%)
          `,
        }}
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] bg-cover bg-no-repeat opacity-40 sm:opacity-80 mix-blend-multiply"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80')`,
              backgroundPosition: "right 35% center",
              maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.95) 75%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.95) 75%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            <h1 className="text-[32px] xs:text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-[#0f1d2e] leading-[1.1] tracking-tight break-words">
              Consultório<br />
              Odontológico
            </h1>

            <p className="mt-5 sm:mt-7 text-base xs:text-lg sm:text-2xl text-[#2b3a4a] font-normal leading-relaxed">
              Atendimento personalizado<br />
              e próximo ao metrô clinicas
            </p>

            <div className="mt-8 sm:mt-10">
              <button
                onClick={() => handleOpenSchedule()}
                className="w-full xs:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border-[1.5px] border-[#0f1d2e] text-[#0f1d2e] font-semibold text-[15px] sm:text-[16px] hover:bg-[#0f1d2e] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 shadow-xs cursor-pointer min-h-[48px] touch-manipulation"
              >
                Agendar consulta
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Quem somos (Image 2) ── */}
      <section id="quem-somos" className="py-16 sm:py-24 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-[#0f1d2e] tracking-tight">
                Quem somos
              </h2>
              <div className="w-8 h-[1.5px] bg-[#0f1d2e] mt-3.5 mb-6 sm:mb-8" />

              <div className="mb-5 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-[#0f1d2e]">
                  Dra. Camile Mendonça
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  Dentista
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 text-[14px] sm:text-[15px] leading-relaxed text-slate-700 font-normal">
                <p>
                  Formada em 2005 pela Universidade Paulista – UNIP, a Dra. Camile Mendonça (CRO 86606) possui especialização na área de Odontogeriatria (APCD – 2006) e diversos curso de atualização em Odontologia Estética e Prótese (APCD e FUNDECTO – USP). Logo no início de formação entrou como estagiária em uma Clínica localizada na Vila Mariana, onde atuou durante 9 anos, sendo após os primeiros anos a principal responsável pelos orçamentos, diagnósticos, planejamentos e gerenciamento da clínica.
                </p>
                <p>
                  Após 3 anos de formada, em paralelo à clínica que gerenciava, a Dra. Camile inaugurava seu consultório aonde desde 2014 atende exclusivamente.
                </p>
              </div>

              <div className="mt-8 sm:mt-10 pt-4 border-t border-slate-300 w-full xs:w-44">
                <button
                  onClick={() => handleOpenSchedule()}
                  className="group flex items-center justify-between xs:justify-start gap-3 text-xs sm:text-sm font-bold tracking-wider text-[#0f1d2e] hover:text-[#b79169] transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                >
                  <span>FALAR CONOSCO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Photo Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] aspect-[4/4.3] rounded-xs overflow-hidden shadow-2xl bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80"
                  alt="Dra. Camile Mendonça"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 opacity-35 pointer-events-none">
                  <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-200/90">
                    <path
                      d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                {/* Badges responsive max-width to avoid cutoff */}
                <div className="absolute right-0 top-[42%] sm:top-[45%] flex flex-col items-end shadow-lg max-w-[85%] sm:max-w-[280px]">
                  <div className="bg-[#0f1d2e]/95 text-white font-bold text-[11px] xs:text-[13px] sm:text-[14px] px-3 sm:px-4 py-1.5 sm:py-2 uppercase tracking-wide">
                    DRA. CAMILE MENDONÇA
                  </div>
                  <div className="bg-[#b38280]/90 text-white font-semibold text-[8px] xs:text-[9.5px] sm:text-[10px] px-2.5 sm:px-3.5 py-1 sm:py-1.5 uppercase tracking-wider leading-tight sm:leading-snug text-right">
                    ODONTOGERIATRA, PROPRIETÁRIA<br />E RESPONSÁVEL TÉCNICA DA CLÍNICA
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 text-white/90 drop-shadow-md">
                  <div className="w-4 h-5 sm:w-5 sm:h-6 shrink-0">
                    <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                      <path
                        d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-extrabold text-[9px] sm:text-[10px] tracking-tight leading-tight">DRA. CAMILE MENDONÇA</span>
                    <span className="text-[6px] sm:text-[6.5px] tracking-widest text-slate-200">ODONTOLOGIA ESPECIALIZADA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. Nossa Estrutura ── */}
      <section id="nossa-estrutura" className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f1d2e] tracking-tight">
              Nossa Estrutura
            </h2>
            <div className="w-8 h-[1.5px] bg-[#0f1d2e] mx-auto mt-3.5 mb-5 sm:mb-6" />
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
              Um ambiente acolhedor, projetado para proporcionar conforto, tranquilidade e o melhor atendimento odontológico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
            <div className="group relative rounded-xl overflow-hidden shadow-xs aspect-[16/10] sm:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80"
                alt="Consultório Principal"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <span className="text-white font-bold text-sm sm:text-base">Consultório Principal</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-xs aspect-[16/10] sm:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Recepção e Espera"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <span className="text-white font-bold text-sm sm:text-base">Recepção e Espera</span>
              </div>
            </div>

            <div className="group relative rounded-xl overflow-hidden shadow-xs aspect-[16/10] sm:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Ambiente de Diagnóstico"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <span className="text-white font-bold text-sm sm:text-base">Ambiente de Diagnóstico</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: MapPin,
                title: "Localização Privilegiada",
                description: "A poucos passos da estação de metrô Clínicas, com fácil acesso e estacionamento no local.",
              },
              {
                icon: Sparkles,
                title: "Tecnologia de Ponta",
                description: "Equipamentos modernos e materiais de padrão internacional para máxima precisão.",
              },
              {
                icon: ShieldCheck,
                title: "Biossegurança Rígida",
                description: "Protocolos rigorosos de esterilização e higiene para garantir seu total bem-estar.",
              },
              {
                icon: Clock,
                title: "Atendimento Pontual",
                description: "Consultas com hora marcada e tempo dedicado com exclusividade a cada paciente.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-5 sm:p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#EFE5DA] text-[#0f1d2e] flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0f1d2e] text-sm sm:text-base mb-1.5 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Nossa Equipe (Image 3) ── */}
      <section id="nossa-equipe" className="py-16 sm:py-24 bg-[#f8f9fa] border-t border-slate-200/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Carousel */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-full max-w-[480px] aspect-[4/4.8] rounded-xs overflow-hidden shadow-2xl bg-neutral-900 group">
                <img
                  src={currentMember?.image}
                  alt={`${currentMember?.prefix} ${currentMember?.name}`}
                  className="w-full h-full object-cover object-top filter brightness-[0.98] transition-all duration-500"
                />

                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-16 h-16 sm:w-24 sm:h-24 opacity-35 pointer-events-none">
                  <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-200/90">
                    <path
                      d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                <button
                  onClick={prevTeamSlide}
                  aria-label="Membro anterior"
                  className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all z-20 cursor-pointer touch-manipulation"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTeamSlide}
                  aria-label="Próximo membro"
                  className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all z-20 cursor-pointer touch-manipulation"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute inset-x-0 bottom-0 pt-20 pb-6 sm:pb-8 px-4 sm:px-6 bg-gradient-to-t from-[#e4cbbe] via-[#e4cbbe]/80 to-transparent flex flex-col justify-end">
                  <div className="text-[#0f1d2e] flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                    <span className="text-2xl xs:text-3xl sm:text-4xl font-light tracking-tight">{currentMember?.prefix}</span>
                    <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {currentMember?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2.5 mt-4 p-1">
                {teamMembers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTeamIndex(idx)}
                    aria-label={`Membro ${idx + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
                      currentTeamIndex === idx
                        ? "bg-[#0f1d2e] scale-125"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extrabold text-[#0f1d2e] tracking-tight">
                Nossa Equipe
              </h2>
              <div className="w-8 h-[1.5px] bg-[#0f1d2e] mt-3.5 mb-6 sm:mb-8" />

              <p className="text-[14px] sm:text-[15px] leading-relaxed text-slate-700 font-normal">
                Nossa equipe de dentistas é cuidadosamente selecionada e altamente preparada para oferecer serviços odontológicos excepcionais a todos os pacientes. Com anos de experiência e um compromisso inabalável com a excelência, estamos prontos para atender às necessidades de cada indivíduo que entra em nossa clínica. Independentemente da idade, histórico dental ou preocupações específicas, nossa equipe está capacitada para fornecer cuidados personalizados e de alta qualidade, garantindo que todos os pacientes desfrutem de um sorriso saudável e radiante. Seja qual for a sua necessidade, confie em nossa equipe de dentistas para lhe proporcionar um atendimento profissional, compassivo e eficaz.
              </p>

              <div className="mt-8 sm:mt-10 pt-4 border-t border-slate-300 w-full xs:w-44">
                <button
                  onClick={() => handleOpenSchedule()}
                  className="group flex items-center justify-between xs:justify-start gap-3 text-xs sm:text-sm font-bold tracking-wider text-[#0f1d2e] hover:text-[#b79169] transition-colors cursor-pointer min-h-[44px] touch-manipulation"
                >
                  <span>FALAR CONOSCO</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Nossos Tratamentos (Image 4) ── */}
      <section
        id="tratamentos"
        className="relative py-18 sm:py-28 overflow-hidden"
        style={{
          backgroundColor: "#EBE0D3",
          backgroundImage: `
            linear-gradient(to bottom, rgba(235, 224, 211, 0.88), rgba(228, 213, 197, 0.94)),
            url('https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=80')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0f1d2e] tracking-tight">
              Nossos tratamentos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-7 sm:gap-y-12 max-w-6xl mx-auto">
            {treatments.map((t, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenSchedule(t.title)}
                className="flex items-start gap-3.5 sm:gap-4 group cursor-pointer p-2 sm:p-0 -mx-2 sm:mx-0 rounded-lg active:bg-black/5 transition-colors touch-manipulation"
              >
                <div className="mt-1 shrink-0">
                  <div className="w-5 h-5 rounded-full border-[1.8px] border-[#0f1d2e] flex items-center justify-center group-hover:scale-110 group-hover:border-[#b79169] transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#b79169] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base sm:text-xl font-bold text-[#0f1d2e] group-hover:text-black transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-slate-700 font-normal mt-0.5 sm:mt-1 leading-snug">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 sm:mt-20 flex justify-center">
            <button
              onClick={() => handleOpenSchedule()}
              className="w-full xs:w-auto group inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#121c29] text-white font-medium text-[15px] hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 cursor-pointer min-h-[48px] touch-manipulation"
            >
              <span>Saiba mais</span>
              <ArrowRightCircle className="w-5 h-5 text-white/90 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. Experiências do Atendimento (Image 5) ── */}
      <section id="depoimentos" className="py-16 sm:py-24 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-block mb-4 sm:mb-5">
              <span className="px-3.5 sm:px-4 py-1.5 rounded-[4px] bg-[#d9c7b4] text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                TESTEMUNHOS
              </span>
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0f1d2e] tracking-tight">
              Experiências do atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 sm:p-9 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-slate-100/80"
              >
                <p className="text-[14px] sm:text-[15px] text-slate-700 font-normal leading-relaxed text-left sm:text-center">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-3.5 sm:gap-4 mt-6 sm:mt-8 pt-4 border-t border-slate-100 justify-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shadow-xs border border-slate-100 shrink-0"
                  />
                  <div className="flex flex-col text-left min-w-0">
                    <span className="font-bold text-[#0f1d2e] text-[14.5px] sm:text-[15px] truncate">
                      {item.name}
                    </span>
                    <span className="text-[9.5px] sm:text-[10.5px] font-bold text-[#b49272] uppercase tracking-wider mt-0.5 break-words">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center flex flex-col items-center gap-2">
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Podemos te ajudar a melhorar seu sorriso?
            </p>
            <button
              onClick={() => handleOpenSchedule()}
              className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-[#b89169] hover:text-[#9e764e] transition-colors cursor-pointer py-1 min-h-[40px] touch-manipulation"
            >
              <span>Fale conosco agora</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contato" className="bg-[#0b1622] text-slate-300 pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            
            {/* Col 1 */}
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-8 h-9 text-white shrink-0">
                  <svg viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      d="M20 3C13 3 7 7 7 14C7 20 9 27 12 36C13.5 40.5 15.5 42 17.5 42C19.5 42 19 36 20 36C21 36 20.5 42 22.5 42C24.5 42 26.5 40.5 28 36C31 27 33 20 33 14C33 7 27 3 20 3Z"
                      stroke="white"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M14 13C16 10 24 10 26 13C24.5 18 15.5 18 14 13Z"
                      stroke="#b28684"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="font-extrabold text-white text-[14.5px] sm:text-[15px] tracking-tight block leading-tight truncate">
                    DRA. CAMILE MENDONÇA
                  </span>
                  <span className="text-[8.5px] sm:text-[9px] tracking-[0.2em] text-[#d6b79c] font-medium block truncate">
                    ODONTOLOGIA ESPECIALIZADA
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                Excelência, conforto e tecnologia em odontologia estética e especializada na região das Clínicas.
              </p>

              <div className="text-xs text-slate-400 font-mono">
                <p>CRO-SP: 86606</p>
                <p className="mt-1">Resp. Técnica: Dra. Camile Mendonça</p>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-wide">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors py-0.5 block">Página Principal</a></li>
                <li><a href="#quem-somos" className="hover:text-white transition-colors py-0.5 block">Quem Somos</a></li>
                <li><a href="#nossa-estrutura" className="hover:text-white transition-colors py-0.5 block">Nossa Estrutura</a></li>
                <li><a href="#nossa-equipe" className="hover:text-white transition-colors py-0.5 block">Nossa Equipe</a></li>
                <li><a href="#tratamentos" className="hover:text-white transition-colors py-0.5 block">Tratamentos</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors py-0.5 block">Depoimentos</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-wide">
                Contato & Localização
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#d6b79c] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Próximo à Estação Metrô Clínicas<br />
                    Cerqueira César - São Paulo, SP
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#d6b79c] shrink-0" />
                  <span>(11) 99999-9999 / (11) 3255-0000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#d6b79c] shrink-0" />
                  <span className="break-all">contato@dracamilemendonca.com.br</span>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6 tracking-wide">
                Horário de Atendimento
              </h4>
              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300 mb-5 sm:mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d6b79c] shrink-0" />
                  <span>Segunda a Sexta: 08h às 19h</span>
                </div>
                <p className="text-xs text-slate-400 pl-6">Sábado: 08h às 13h (com hora marcada)</p>
              </div>

              <button
                onClick={() => handleOpenSchedule()}
                className="w-full py-3 px-4 rounded-full border border-[#d6b79c] text-[#d6b79c] hover:bg-[#d6b79c] hover:text-[#0b1622] font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer min-h-[44px] touch-manipulation"
              >
                Agendar Avaliação
              </button>

              <div className="flex items-center gap-3 mt-5 sm:mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors touch-manipulation"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors touch-manipulation"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 sm:pt-8 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Dra. Camile Mendonça - Odontologia Especializada. Todos os direitos reservados.</p>
            <div className="inline-block rounded-full border border-slate-700 bg-slate-900 px-3.5 py-1 text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest text-[#d6b79c]">
              Projeto de demonstração · Odonto Websites
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Camile%20Mendon%C3%A7a."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group flex items-center justify-center touch-manipulation"
      >
        <span className="absolute w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95">
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white fill-white"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
      </a>

      {/* ── Schedule Modal (Mobile-Optimized Scrollable Dialog) ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="bg-[#0f1d2e] p-4 xs:p-6 text-white flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#d8c3ae] font-semibold">
                  Atendimento Exclusivo
                </span>
                <h3 className="text-lg xs:text-xl font-bold mt-0.5">Agendar Consulta</h3>
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSubmitted(false);
                }}
                className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer touch-manipulation"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-4 xs:p-6 sm:p-8 overflow-y-auto">
              {submitted ? (
                <div className="py-6 sm:py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#0f1d2e]">Solicitação Enviada!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-sm">
                    Estamos redirecionando você para o WhatsApp para confirmar os horários disponíveis com nossa equipe.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSubmitted(false);
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#0f1d2e] text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors cursor-pointer min-h-[44px]"
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0f1d2e] focus:ring-1 focus:ring-[#0f1d2e] transition-all min-h-[44px]"
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
                          placeholder="(11) 99999-9999"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0f1d2e] focus:ring-1 focus:ring-[#0f1d2e] transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        E-mail (opcional)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0f1d2e] focus:ring-1 focus:ring-[#0f1d2e] transition-all min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Tratamento de Interesse
                      </label>
                      <select
                        value={treatment || selectedTreatment}
                        onChange={(e) => {
                          setTreatment(e.target.value);
                          setSelectedTreatment(e.target.value);
                        }}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0f1d2e] focus:ring-1 focus:ring-[#0f1d2e] transition-all bg-white min-h-[44px]"
                      >
                        <option value="">Selecione um tratamento</option>
                        <option value="Dentística">Dentística</option>
                        <option value="Cirurgia">Cirurgia</option>
                        <option value="Estética">Estética</option>
                        <option value="Implante">Implante</option>
                        <option value="Prótese">Prótese</option>
                        <option value="Odonto Pediatrica">Odonto Pediátrica</option>
                        <option value="Odontogeriatria">Odontogeriatria</option>
                        <option value="Endodontia">Endodontia</option>
                        <option value="Invisalign">Invisalign</option>
                        <option value="Ortodontia">Ortodontia</option>
                        <option value="Outro">Outro / Avaliação Geral</option>
                      </select>
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
                          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0f1d2e] focus:ring-1 focus:ring-[#0f1d2e] transition-all min-h-[44px]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mensagem / Observação
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Descreva brevemente o que você procura..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-[#0f1d2e] focus:ring-1 focus:ring-[#0f1d2e] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#0f1d2e] hover:bg-black text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 cursor-pointer min-h-[48px] touch-manipulation"
                    >
                      <span>Confirmar e Conversar no WhatsApp</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
