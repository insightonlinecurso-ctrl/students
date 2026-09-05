import React from 'react';
import { INSIGHT_HEADER_BANNER, INSIGHT_LOGO_ICON } from '../assets/brand';

interface InsightLogoProps {
  variant?: 'banner' | 'icon' | 'badge' | 'nav';
  className?: string;
  showSubtitle?: boolean;
}

export const InsightLogo: React.FC<InsightLogoProps> = ({
  variant = 'nav',
  className = '',
  showSubtitle = false
}) => {
  if (variant === 'banner') {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-slate-700/30 shadow-md ${className}`}>
        <img
          src={INSIGHT_HEADER_BANNER}
          alt="Insight English"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`overflow-hidden rounded-xl border border-slate-300 shadow-xs flex items-center justify-center bg-[#8897a2] ${className}`}>
        <img
          src={INSIGHT_LOGO_ICON}
          alt="Insight Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`flex items-center space-x-2.5 ${className}`}>
        <div className="w-8 h-8 rounded-xl overflow-hidden shadow-xs border border-slate-300/80 flex-shrink-0 bg-[#8897a2]">
          <img
            src={INSIGHT_LOGO_ICON}
            alt="Insight Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <span className="font-extrabold text-slate-900 tracking-tight text-sm block leading-tight">Insight English Club</span>
          {showSubtitle && (
            <span className="text-[10px] text-slate-500 font-medium block">Metodologia 30 Unidades</span>
          )}
        </div>
      </div>
    );
  }

  // default: 'nav'
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-slate-700/70 flex-shrink-0 bg-[#8897a2] transition-transform hover:scale-105">
        <img
          src={INSIGHT_LOGO_ICON}
          alt="Insight English Club Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <span className="font-extrabold text-white tracking-tight text-sm">Insight English Club</span>
          <span className="text-[10px] uppercase tracking-wider font-bold px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
            Planos
          </span>
        </div>
        <p className="text-[10px] text-slate-400 hidden sm:block">Metodologia Acelerada 30 Unidades</p>
      </div>
    </div>
  );
};
