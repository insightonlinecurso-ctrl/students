import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';
import sundayBreakfastImg from '../assets/images/sunday_diner_breakfast_1788442499268.jpg';
import doctorClinicImg from '../assets/images/doctor_clinic_routine_1788442515019.jpg';
import lisbonHostelImg from '../assets/images/lisbon_backpackers_hostel_1788442531451.jpg';

interface StoryIllustrationProps {
  unitNumber: number;
  visualTheme: string;
  title: string;
  className?: string;
}

// Map realistic photography / AI realistic images per unit
const REALISTIC_SCENE_IMAGES: Record<number, { url: string; isAiGenerated: boolean; caption: string }> = {
  1: {
    url: sundayBreakfastImg,
    isAiGenerated: true,
    caption: "Café da manhã de domingo americano com waffles dourados, bacon, café e mel à luz da manhã."
  },
  2: {
    url: doctorClinicImg,
    isAiGenerated: true,
    caption: "Consultório médico moderno com prontuário, estetoscópio e ambiente acolhedor da rotina clínica."
  },
  3: {
    url: lisbonHostelImg,
    isAiGenerated: true,
    caption: "Mochileiros reunidos na sala de estar de um albergue acolhedor em Lisboa com vista para os telhados e bondes."
  },
  4: {
    url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Acampamento de expedição sob a copa exuberante da Floresta Amazônica ao amanhecer."
  },
  5: {
    url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Campus histórico britânico com torre de relógio, tijolos clássicos e gramados em Brighton."
  },
  6: {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Ambiente moderno de trabalho colaborativo e rotinas profissionais."
  },
  7: {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Paisagem aberta de viagem e exploração em contato com a natureza."
  },
  8: {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Grupo de estudantes colaborando e trocando ideias sobre projetos acadêmicos."
  },
  9: {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Terminal de aeroporto movimentado com aeronaves na pista e bagagens de viagem."
  },
  10: {
    url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Mesa de restaurante acolhedor em um jantar descontraído entre amigos."
  },
  14: {
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Estúdio musical profissional em plena sessão de ensaio com instrumentos ao vivo."
  },
  15: {
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Cena icônica de Londres em Westminster com o Big Ben e o ônibus vermelho clássico."
  },
  20: {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Mochila de viajante sobre mirante costeiro relembrando jornadas passadas."
  },
  26: {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Salão nobre em dia de formatura universitária com becas e diplomas comemorativos."
  },
  30: {
    url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80",
    isAiGenerated: false,
    caption: "Ondas gigantes de Nazaré em Portugal quebrando próximas ao farol na falésia rochosa."
  }
};

const DEFAULT_FALLBACK_IMAGE = {
  url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
  isAiGenerated: false,
  caption: "Cenário contextual autêntico para imersão na prática do idioma."
};

export const StoryIllustration: React.FC<StoryIllustrationProps> = ({
  unitNumber,
  visualTheme,
  title,
  className
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const sceneData = REALISTIC_SCENE_IMAGES[unitNumber] || DEFAULT_FALLBACK_IMAGE;

  return (
    <div className={className || "relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[380px] sm:max-h-[420px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm"}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">
          <ImageIcon className="w-8 h-8 opacity-40 animate-spin" />
        </div>
      )}

      {/* Clean Realistic Image without any superimposed text */}
      <img
        src={imageError ? DEFAULT_FALLBACK_IMAGE.url : sceneData.url}
        alt={`${title} - ${visualTheme}`}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setImageError(true)}
        className={`w-full h-full object-cover object-center transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
