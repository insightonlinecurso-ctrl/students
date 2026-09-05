import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Clock, 
  CheckCircle2, 
  PlayCircle, 
  BookOpen, 
  Award, 
  Sparkles,
  ChevronRight,
  HelpCircle,
  FileCheck2,
  Filter
} from 'lucide-react';
import { ALL_GRAMMAR_UNITS, TOTAL_STUDY_HOURS } from '../data/allUnits';
import { useProgress } from '../context/ProgressContext';
import { GrammarUnit } from '../types';

interface UnitsListProps {
  onSelectUnit: (unitId: number) => void;
}

export const UnitsList: React.FC<UnitsListProps> = ({ onSelectUnit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const { completedUnitIds, unitScores, totalCompletedHours, overallProgressPercentage } = useProgress();

  const filteredUnits = useMemo(() => {
    return ALL_GRAMMAR_UNITS.filter((unit) => {
      let matchesFilter = true;

      if (selectedFilter === 'completed') {
        matchesFilter = completedUnitIds.includes(unit.id);
      } else if (selectedFilter === 'pending') {
        matchesFilter = !completedUnitIds.includes(unit.id);
      } else if (selectedFilter.startsWith('unit-')) {
        const uId = Number(selectedFilter.replace('unit-', ''));
        matchesFilter = unit.id === uId;
      }

      const matchesSearch =
        unit.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        unit.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        `unidade ${unit.number}`.includes(searchQuery.toLowerCase()) ||
        `unidade ${String(unit.number).padStart(2, '0')}`.includes(searchQuery.toLowerCase()) ||
        `unit ${unit.number}`.includes(searchQuery.toLowerCase()) ||
        `u${unit.number}`.includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [searchQuery, selectedFilter, completedUnitIds]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header & Course Overview Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Plano de Estudos Estruturado
              </span>
              <span className="text-xs text-slate-500">30 Pontos Gramaticais Oficiais</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Material Completo de Gramática & Fluência
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Todas as 30 unidades completas com videoaulas integradas, regras fundamentais, histórias ilustradas, 300+ exercícios de fixação e laboratório de conversação com IA.
            </p>
          </div>

          {/* Stats Box */}
          <div className="w-full lg:w-auto bg-slate-50 border border-slate-200 rounded-xl p-5 sm:min-w-[300px] shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">Seu Progresso Total</span>
              <span className="text-sm font-bold text-blue-600">{completedUnitIds.length} de {ALL_GRAMMAR_UNITS.length} Unidades</span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${overallProgressPercentage}%` }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-1 text-xs border-t border-slate-200">
              <div>
                <span className="text-slate-500 block">Horas Concluídas</span>
                <span className="font-semibold text-slate-800 text-sm">{totalCompletedHours}h / {TOTAL_STUDY_HOURS}h</span>
              </div>
              <div>
                <span className="text-slate-500 block">Aproveitamento</span>
                <span className="font-semibold text-emerald-600 text-sm">{overallProgressPercentage}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            {/* Search Input */}
            <div className="relative flex-1 sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar unidade, tópico ou tempo verbal..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Dropdown Menu Filter */}
            <div className="relative flex items-center min-w-[200px]">
              <div className="absolute left-3 pointer-events-none text-slate-400">
                <Filter className="w-4 h-4 text-blue-600" />
              </div>
              <select
                id="units-filter-dropdown"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm appearance-none cursor-pointer"
              >
                <option value="all">Todas as 30 Unidades (Ver Todas)</option>
                <option value="completed">Apenas Concluídas ({completedUnitIds.length})</option>
                <option value="pending">Apenas Pendentes ({ALL_GRAMMAR_UNITS.length - completedUnitIds.length})</option>
                {ALL_GRAMMAR_UNITS.map((unit) => (
                  <option key={unit.id} value={`unit-${unit.id}`}>
                    Unidade {String(unit.number).padStart(2, '0')}: {unit.title}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 pointer-events-none text-slate-400">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-slate-500 self-end sm:self-center shrink-0">
            Exibindo <strong className="text-slate-800">{filteredUnits.length}</strong> de {ALL_GRAMMAR_UNITS.length} unidades
          </div>
        </div>
      </div>

      {/* Grid of 30 Grammar Units */}
      {filteredUnits.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-800 mb-1">Nenhuma unidade encontrada</h3>
          <p className="text-sm text-slate-500">Tente buscar por outro termo ou selecione a categoria "Todos".</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUnits.map((unit) => {
            const isCompleted = completedUnitIds.includes(unit.id);
            const score = unitScores[unit.id];

            return (
              <div
                key={unit.id}
                onClick={() => onSelectUnit(unit.id)}
                className={`group relative bg-white border rounded-xl p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20 hover:border-emerald-300'
                    : 'border-slate-200 hover:border-blue-400 shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs flex items-center justify-center font-mono">
                        {String(unit.number).padStart(2, '0')}
                      </span>
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                        {unit.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs text-blue-700 font-medium bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                      <Clock className="w-3 h-3 text-blue-600" />
                      <span>{unit.estimatedHours}h estudo</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1 mb-1">
                    {unit.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {unit.subtitle}
                  </p>

                  {/* Highlights rules count & exercises preview */}
                  <div className="flex items-center space-x-3 text-[11px] text-slate-400 pt-2 border-t border-slate-100 mb-4">
                    <span className="flex items-center space-x-1">
                      <FileCheck2 className="w-3.5 h-3.5 text-blue-500" />
                      <span>10 Exercícios</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                      <span>Speaking IA</span>
                    </span>
                  </div>
                </div>

                {/* Card Footer & Action */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  {isCompleted ? (
                    <div className="flex items-center space-x-1.5 text-xs text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Concluída {score ? `(${score}%)` : ''}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 group-hover:text-slate-600">
                      Não iniciada
                    </span>
                  )}

                  <div className="flex items-center space-x-1 text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                    <span>Estudar</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
