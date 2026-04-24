import Image from "next/image"; // Importamos el componente de optimización de imágenes

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/522283346846" // Tu número de la firma ya configurado
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
    >
      {/* 1. EFECTO DE PULSO (Mantenemos la animación sutil detrás de tu imagen) */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-25 group-hover:animate-ping -z-10"></span>
      
      {/* 2. TU IMAGEN PNG PERSONALIZADA (Con optimización automática de Next.js) */}
      <div className="w-14 h-14 relative rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.3)] group-hover:scale-110 transition-all duration-300 ease-out overflow-hidden">
        <Image
          src="/whatsapp-globo.png" // La ruta directa al archivo en la carpeta public/
          alt="WhatsApp M&M"
          fill // Ocupa todo el contenedor div de 14x14
          sizes="56px" // Le dice al navegador que esta imagen siempre será pequeña
          className="object-cover" // Asegura que la imagen no se deforme
          priority // Carga esta imagen con alta prioridad por ser un elemento clave de UI
        />
      </div>
    </a>
  );
}