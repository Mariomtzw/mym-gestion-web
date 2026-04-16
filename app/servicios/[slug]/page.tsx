import Link from "next/link";
import Image from "next/image";
import { GlassCard } from "@/components/GlassCard";

type ServiceSection = {
  heading: string;
  paragraphs: string[];
};

type ServiceData = {
  title: string;
  subtitle: string;
  sections: ServiceSection[];
};

const SERVICES_DATA: Record<string, ServiceData> = {
  "licitaciones-y-obra-publica": {
    title: "Licitaciones y Obra Pública",
    subtitle: "Servicios integrales de asesoría, supervisión normativa y atención a procesos de fiscalización.",
    sections: [
      {
        heading: "Fase I: Planeación y Procedimientos de Licitación",
        paragraphs: [
          "• Acompañamiento legal durante las etapas del proceso de licitación pública.",
          "• Revisión técnica y jurídica de bases de licitación.",
          "• Integración normativa de propuestas técnicas y económicas."
        ]
      },
      {
        heading: "Fase II: Ejecución y Cumplimiento Normativo",
        paragraphs: [
          "• Supervisión normativa del avance físico y financiero.",
          "• Integración y control documental de expedientes de obra.",
          "• Gestión administrativa para el ajuste de costos.",
          "• Atención a requerimientos de autoridades competentes.",
          "• Revisión y elaboración de convenios y actas de finiquito."
        ]
      },
      {
        heading: "Fase III: Fiscalización y Procedimientos Administrativos",
        paragraphs: [
          "• Atención y solventación de observaciones emitidas por entes fiscalizadores.",
          "• Asistencia técnica en procesos de auditoría (Auditoría Superior de la Federación, Órganos Internos de Control).",
          "• Representación legal en procedimientos de Responsabilidad Administrativa."
        ]
      }
    ]
  },
  "derecho-y-gestion-ambiental": {
    title: "Derecho y Gestión Ambiental",
    subtitle: "Estrategias de cumplimiento normativo y atención a requerimientos en materia ambiental.",
    sections: [
      {
        heading: "Trámites y Regulaciones Ambientales",
        paragraphs: ["Tramitación y seguimiento de permisos y concesiones ante dependencias federales para el uso y aprovechamiento de la Zona Federal Marítima Terrestre (ZOFEMAT), así como la elaboración de Manifestaciones de Impacto Ambiental (MIA)."]
      },
      {
        heading: "Regulación de Residuos y Materiales Peligrosos",
        paragraphs: ["Asesoría jurídica para el cumplimiento de las obligaciones en la generación, manejo y disposición de residuos peligrosos y actividades de riesgo ambiental."]
      },
      {
        heading: "Cumplimiento en Materia Hídrica",
        paragraphs: ["Asesoría técnica y legal sobre la normatividad de aguas nacionales, permisos de descarga de aguas residuales y parámetros de calidad exigidos por la autoridad."]
      },
      {
        heading: "Procedimientos Administrativos",
        paragraphs: ["Representación y defensa legal en procedimientos sancionadores instaurados por la Secretaría de Medio Ambiente, CONAGUA, PROFEPA y autoridades de ámbito estatal."]
      }
    ]
  },
  "derechos-de-via": {
    title: "Derechos de Vía y Servidumbre",
    subtitle: "Gestión legal y resolución de conflictos derivados de afectaciones territoriales.",
    sections: [
      {
        heading: "Negociación y Gestión de Afectaciones",
        paragraphs: ["Negociación y resolución de controversias para el pago de indemnizaciones derivadas de la constitución de derechos de vía y servidumbres legales de paso, en estricto apego al marco civil y agrario vigente."]
      },
      {
        heading: "Proyectos de Infraestructura",
        paragraphs: ["Asesoría jurídica en la liberación de vías para la instalación de infraestructura energética, acueductos, tendido eléctrico y accesos carreteros."]
      },
      {
        heading: "Trámites ante Dependencias Estatales",
        paragraphs: ["Acompañamiento legal en procedimientos que involucran a empresas productivas del Estado, coordinando los aspectos técnicos y legales de las afectaciones territoriales."]
      }
    ]
  },
  "defensa-contra-cfe": {
    title: "Derecho Energético y Defensa Legal",
    subtitle: "Servicios de representación jurídica frente a resoluciones y cobros de entidades del sector energético.",
    sections: [
      {
        heading: "Impugnación de Actos y Ajustes",
        paragraphs: ["Interposición de medios de defensa frente a multas, ajustes de facturación y cobros emitidos por la Comisión Federal de Electricidad (CFE) que carezcan de debida fundamentación y motivación."]
      },
      {
        heading: "Asistencia en Verificaciones",
        paragraphs: ["Acompañamiento legal durante visitas de verificación técnica y asesoría en la revisión de resolutivos y factibilidades de interconexión eléctrica."]
      },
      {
        heading: "Litigio Administrativo Energético",
        paragraphs: ["Representación formal ante autoridades regulatorias (CRE, SENER, CENACE, PROFECO) y promoción de recursos administrativos o juicios de nulidad ante instancias jurisdiccionales competentes."]
      }
    ]
  },
  "defensa-fiscal": {
    title: "Defensa Fiscal y Tributaria",
    subtitle: "Asesoría preventiva y litigio estratégico frente a actos de autoridades fiscales.",
    sections: [
      {
        heading: "Atención a Facultades de Comprobación",
        paragraphs: ["Asistencia especializada ante requerimientos de autoridades fiscales, atención integral de revisiones de gabinete, visitas domiciliarias y respuesta jurídica a cartas invitación."]
      },
      {
        heading: "Medios de Defensa Tributaria",
        paragraphs: ["Elaboración e interposición de recursos de revocación y juicios de nulidad para la impugnación de créditos fiscales, embargos y procedimientos de restricción de sellos digitales."]
      },
      {
        heading: "Procesos Penales y Alternativos",
        paragraphs: ["Asesoría legal en investigaciones por posibles delitos fiscales y acompañamiento institucional para la tramitación de acuerdos conclusivos ante la Procuraduría de la Defensa del Contribuyente (PRODECON)."]
      }
    ]
  },
  "derecho-agrario-y-ran": {
    title: "Derecho Agrario y Regulación Territorial",
    subtitle: "Seguridad jurídica en el régimen de propiedad social y litigio agrario.",
    sections: [
      {
        heading: "Gestiones ante el Registro Agrario Nacional",
        paragraphs: ["Consultoría jurídica para la integración de expedientes y seguimiento de trámites administrativos (formatos FF-RAN), incluyendo obtención de constancias, inscripción de actas y reposición de certificados parcelarios."]
      },
      {
        heading: "Due Diligence Agrario y Estructuración",
        paragraphs: ["Auditoría legal preventiva sobre tierras de régimen social para proyectos de inversión. Revisión de antecedentes registrales, formalización de contratos de arrendamiento e inscripción de Sociedades Rurales."]
      },
      {
        heading: "Regularización y Dominio Pleno",
        paragraphs: ["Asesoría jurídica en los procedimientos para la adopción del dominio pleno sobre parcelas ejidales y acompañamiento en asambleas de delimitación, destino y asignación de tierras (ADAT)."]
      },
      {
        heading: "Litigio ante Tribunales Agrarios",
        paragraphs: ["Representación procesal ante el Tribunal Unitario Agrario en controversias de restitución de tierras, conflictos de linderos, juicios sucesorios y demandas de nulidad de actos y resoluciones."]
      }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = SERVICES_DATA[resolvedParams.slug];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gold font-serif">Servicio no encontrado</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-[10%] flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="M&M Logo"
            width={150}
            height={45}
            className="mix-blend-screen"
            style={{ width: "auto", height: "45px" }}
            priority
          />
        </Link>
        <Link href="/" className="text-[0.7em] tracking-[3px] text-white hover:text-gold transition-colors font-semibold">
          ← VOLVER
        </Link>
      </nav>

      <main className="flex-grow container mx-auto px-4 pt-24 pb-16 max-w-5xl flex flex-col items-center">
        {/* ENCABEZADO */}
        <div className="glass-panel w-full p-8 md:p-12 mb-8 flex flex-col items-center text-center">
          <p className="text-gold text-[0.8em] tracking-[5px] uppercase font-semibold mb-4">
            — ÁREA DE PRÁCTICA
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-5 leading-none break-words">
            {data.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">
            {data.subtitle}
          </p>
        </div>

        {/* SECCIONES */}
        <div className="w-full space-y-5">
          {data.sections.map((section, idx) => (
            <GlassCard key={idx} className="p-6 md:p-8 flex flex-col hover:border-gold transition-all duration-300">
              <h2 className="font-serif text-xl md:text-2xl text-gold mb-4">
                {section.heading}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-white leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-black/60 backdrop-blur-xl py-12 px-6 md:px-[10%] border-t border-white/10">
        <p className="text-center text-white text-[0.55em] tracking-[4px] uppercase font-semibold">
          © 2026 M&M Gestión y Administración. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
