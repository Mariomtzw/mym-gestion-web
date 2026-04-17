import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";
import { HardHat, Leaf, Map, Zap, Landmark, ScrollText, MessageCircle, Mail, Video } from "lucide-react";

const SERVICES = [
  { title: "Auditoría y Obra Pública", desc: "Asesoría técnica, control normativo y fiscalización de proyectos de infraestructura.", icon: HardHat, href: "/servicios/licitaciones-y-obra-publica" },
  { title: "Derecho y Gestión Ambiental", desc: "Cumplimiento regulatorio y representación ante autoridades federales.", icon: Leaf, href: "/servicios/derecho-y-gestion-ambiental" },
  { title: "Derechos de Vía", desc: "Gestión legal, procesos expropiatorios y regularización patrimonial.", icon: Map, href: "/servicios/derechos-de-via" },
  { title: "Derecho Energético y CFE", desc: "Asesoría corporativa y defensa administrativa en materia energética.", icon: Zap, href: "/servicios/defensa-contra-cfe" },
  { title: "Defensa Fiscal y Tributaria", desc: "Estrategia tributaria, auditorías y protección jurídica al contribuyente.", icon: Landmark, href: "/servicios/defensa-fiscal" },
  { title: "Derecho Agrario", desc: "Regularización de la tenencia y litigio ante tribunales agrarios.", icon: ScrollText, href: "/servicios/derecho-agrario-y-ran" },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full px-6 md:px-8 py-6 md:py-8 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-5 lg:gap-6 w-full max-w-[1400px] lg:h-[calc(100vh-4rem)] lg:max-h-[820px]">

        {/* PANEL IZQUIERDO */}
        <div className="glass-panel p-6 md:p-8 flex flex-col justify-between h-full">
          <div className="w-full">
            <Image src="/logo.png" alt="M&M Logo" width={200} height={60} className="mix-blend-screen" style={{ width: "auto", height: "52px" }} priority />
          </div>

          <div className="space-y-4 my-auto py-6">
            <p className="text-gold text-[11px] md:text-[12px] tracking-[5px] uppercase font-semibold">
              — M&M Gestión y Administración
            </p>
            <h1 className="font-serif text-[2rem] sm:text-[2.6rem] lg:text-[3rem] xl:text-[3.4rem] leading-[1.05] tracking-tight text-white">
              <span className="italic font-normal text-white/95">Estrategia Jurídica</span>{" "}
              <span className="font-bold">y Representación Administrativa.</span>
            </h1>
            <p className="text-gray text-[0.9rem] md:text-[1rem] max-w-[90%] leading-relaxed">
              Firma legal especializada en defensa técnica, cumplimiento normativo y resolución de controversias para el sector público y privado.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            <a href="https://wa.me/522283346846" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 flex items-center gap-2 hover:border-gold hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <MessageCircle size={15} className="text-white" /> <span className="text-sm text-white">Contacto</span>
            </a>
            <a href="mailto:contacto@mymgestion.com.mx" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 flex items-center gap-2 hover:border-gold hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Mail size={15} className="text-white" /> <span className="text-sm text-white">Correo</span>
            </a>
            <a href="https://www.tiktok.com/@mymgestion" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 flex items-center gap-2 hover:border-gold hover:bg-white/10 hover:scale-105 transition-all duration-300">
              <Video size={15} className="text-white" /> <span className="text-sm text-white">Plataforma Digital</span>
            </a>
          </div>
        </div>

        {/* PANEL DERECHO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 lg:px-5 content-center">
          {SERVICES.map((service, index) => (
            <Link key={index} href={service.href} className="group h-full">
              {/* Hemos delegado la animación al CSS global para proteger el renderizado en iOS */}
              <GlassCard className="h-full flex flex-col justify-start p-5 lg:p-6 cursor-pointer">
                <div className="p-[10px] bg-white/10 rounded-full w-fit mb-4">
                  <service.icon className="text-white" size={18} />
                </div>
                <h3 className="font-bold text-[1rem] text-white mb-1.5 leading-tight">{service.title}</h3>
                <p className="text-gray text-[0.82rem] leading-[1.55]">{service.desc}</p>
              </GlassCard>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}