export interface ListeningExercise {
  id: string;
  title: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-C2';
  situation: string;
  audioScript: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  points: number;
}

export interface ReadingExercise {
  id: string;
  title: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-C2';
  passageTitle: string;
  passageText: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  points: number;
}

export interface SpeakingExercise {
  id: string;
  title: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-C2';
  context: string;
  promptPhrase: string;
  challengeInstruction: string;
  sampleAnswer: string;
  keyPhrasesToInclude: string[];
  points: number;
}

export interface WritingExercise {
  id: string;
  title: string;
  level: 'A1-A2' | 'B1-B2' | 'C1-C2';
  taskType: 'E-mail Profissional' | 'Opinião Argumentativa' | 'História Breve' | 'Descrição Pessoal';
  prompt: string;
  contextPt: string;
  requiredElements: string[];
  modelResponse: string;
  points: number;
}

export const LISTENING_EXERCISES: ListeningExercise[] = [
  {
    id: 'lis-1',
    title: 'Confirmando Reserva no Hotel',
    level: 'A1-A2',
    situation: 'Um hóspede liga para a recepção do hotel para confirmar os detalhes de sua estadia.',
    audioScript: "Hello, reception. Yes, Mr. Johnson, your reservation for a double room on the fifth floor is confirmed from Friday the 12th to Sunday the 14th. Breakfast is served between 7 and 10 AM in the main restaurant.",
    question: 'On which floor will Mr. Johnson stay and what time does breakfast start?',
    options: [
      'Fifth floor, breakfast at 7 AM',
      'Third floor, breakfast at 8 AM',
      'Fifth floor, breakfast at 10 AM',
      'First floor, breakfast at 6 AM'
    ],
    correctIndex: 0,
    explanation: "A recepcionista diz: 'double room on the fifth floor' e 'Breakfast is served between 7 and 10 AM'.",
    points: 25
  },
  {
    id: 'lis-2',
    title: 'Atraso de Reunião Corporativa',
    level: 'B1-B2',
    situation: 'Mensagem de voz deixada por uma gerente de projetos para sua equipe.',
    audioScript: "Hi team, quick update on today's quarterly sprint review. Due to an unexpected client escalation in Tokyo, we need to push our sync from 2 PM to 4:30 PM. Please ensure all slides are updated in the shared folder before four.",
    question: 'Why was the sprint review rescheduled to 4:30 PM?',
    options: [
      'The manager missed her flight',
      'An unexpected client emergency arose in Tokyo',
      'The slides were deleted accidentally',
      'The office internet was down'
    ],
    correctIndex: 1,
    explanation: "Ela afirma: 'Due to an unexpected client escalation in Tokyo'.",
    points: 25
  },
  {
    id: 'lis-3',
    title: 'Palestra sobre Sustentabilidade Urbana',
    level: 'C1-C2',
    situation: 'Trecho de um simpósio de arquitetura sustentável.',
    audioScript: "Crucially, retrofitting vintage buildings with passive photovoltaic facades yields a substantially lower embedded carbon footprint than demolishing and constructing state-of-the-art net-zero towers from scratch.",
    question: "What is the architect's core thesis regarding existing structures?",
    options: [
      'All older buildings should be promptly demolished to save space',
      'Modernizing existing buildings preserves lower embedded carbon than building new ones',
      'Photovoltaic facades are too expensive for vintage architecture',
      'Net-zero towers always have zero environmental impact'
    ],
    correctIndex: 1,
    explanation: "'Retrofitting vintage buildings ... yields a substantially lower embedded carbon footprint than constructing from scratch'.",
    points: 25
  }
];

export const READING_EXERCISES: ReadingExercise[] = [
  {
    id: 'read-1',
    title: 'Dicas para Viagens Internacionais',
    level: 'A1-A2',
    passageTitle: 'Essential Airport Advice',
    passageText: "When traveling internationally, always arrive at the terminal at least three hours prior to departure. Keep your passport, boarding pass, and visa documents in an easily accessible front pocket. Remember that liquids over 100ml must be placed in checked luggage, not your hand carry.",
    question: 'According to the text, what should travelers do with liquids exceeding 100ml?',
    options: [
      'Drink them immediately before security',
      'Pack them in their checked luggage',
      'Keep them in their jacket front pocket',
      'Discard all liquids completely'
    ],
    correctIndex: 1,
    explanation: "O texto diz explicitamente: 'liquids over 100ml must be placed in checked luggage'.",
    points: 25
  },
  {
    id: 'read-2',
    title: 'A Economia Circular e o Futuro',
    level: 'B1-B2',
    passageTitle: 'Rethinking Industrial Design',
    passageText: "The traditional linear model of production—take, make, dispose—is rapidly exhausting vital global resources. In contrast, circular economy principles emphasize regenerative cycles, where manufactured goods are disassembled into modular components for immediate remanufacturing, virtually eliminating industrial landfill waste.",
    question: 'How does the circular economy differ from the traditional linear model?',
    options: [
      'It increases extraction of virgin natural minerals',
      'It promotes single-use plastic disposal to save energy',
      'It redesigns products into modular components that can be continuously reused',
      'It stops all industrial manufacturing permanently'
    ],
    correctIndex: 2,
    explanation: "O modelo circular enfatiza ciclos regenerativos e peças modulares que evitam o descarte.",
    points: 25
  },
  {
    id: 'read-3',
    title: 'Neurolinguística e Bilinguismo',
    level: 'C1-C2',
    passageTitle: 'The Bilingual Executive Brain',
    passageText: "Neuroimaging studies reveal that managing multiple phonetic lexicons concurrently fortifies the brain's dorsolateral prefrontal cortex. This neuroplastic adaptation not only enhances executive task-switching efficiency throughout adult life but also delays clinical cognitive decline symptoms by an average of four to five years.",
    question: 'What neurocognitive benefit is attributed to lifelong bilingualism?',
    options: [
      'Total immunity to all psychological stress',
      'Enhanced cognitive task-switching and delayed onset of neurodegenerative symptoms',
      'Instant mastery of any fourth language in days',
      'Permanent photographic memory storage'
    ],
    correctIndex: 1,
    explanation: "O texto cita: 'enhances executive task-switching efficiency' e 'delays clinical cognitive decline symptoms'.",
    points: 25
  }
];

export const SPEAKING_EXERCISES: SpeakingExercise[] = [
  {
    id: 'spk-1',
    title: 'Apresentação Pessoal e Rotina',
    level: 'A1-A2',
    context: 'Você está conhecendo seu novo colega de trabalho americano durante o almoço.',
    promptPhrase: "Could you tell me a little bit about yourself and what you usually do on weekends?",
    challengeInstruction: "Fale ou digite uma resposta descrevendo sua profissão, onde você mora e pelo menos duas atividades que você faz nos finais de semana.",
    sampleAnswer: "Hello! My name is Rafael. I am a software engineer living in São Paulo. On weekends, I usually wake up early to ride my bike in the park, and in the evening, I enjoy cooking Italian dinner for my friends.",
    keyPhrasesToInclude: ['I work as', 'I live in', 'On Saturdays', 'I usually enjoy'],
    points: 25
  },
  {
    id: 'spk-2',
    title: 'Opinião sobre Trabalho Remoto vs. Presencial',
    level: 'B1-B2',
    context: 'Numa reunião com sua liderança, você foi convidado a expressar seu ponto de vista sobre o modelo de trabalho híbrido.',
    promptPhrase: "From your perspective, what are the primary advantages and drawbacks of hybrid work models?",
    challengeInstruction: "Expresse sua opinião fundamentada usando conectivos como 'On the one hand', 'However' e 'From my perspective'.",
    sampleAnswer: "From my perspective, hybrid work offers the ideal balance. On the one hand, remote days allow deep, uninterrupted focus and eliminate stressful commutes. However, in-person collaboration once or twice a week is irreplaceable for creative brainstorming and team bonding.",
    keyPhrasesToInclude: ['From my perspective', 'On the one hand', 'However', 'In the long run'],
    points: 25
  },
  {
    id: 'spk-3',
    title: 'Pitch Estratégico para Investidores',
    level: 'C1-C2',
    context: 'Você está apresentando uma proposta de expansão internacional para investidores anjo.',
    promptPhrase: "How does your solution maintain a competitive moat against well-funded incumbents in this evolving landscape?",
    challengeInstruction: "Apresente um argumento persuasivo e sofisticado articulando diferenciais de mercado, barreira de entrada e escalabilidade.",
    sampleAnswer: "Our competitive moat does not merely rely on proprietary algorithmic IP, but rather on high switching costs and network effects that compound over time. Furthermore, had our competitors attempted to replicate our pipeline, they would have faced insurmountable regulatory friction.",
    keyPhrasesToInclude: ['Competitive moat', 'Network effects', 'Furthermore, had they', 'Proprietary advantage'],
    points: 25
  }
];

export const WRITING_EXERCISES: WritingExercise[] = [
  {
    id: 'wrt-1',
    title: 'E-mail para Agendar uma Reunião',
    level: 'A1-A2',
    taskType: 'E-mail Profissional',
    prompt: 'Escreva um e-mail curto e educado para Mr. Smith solicitando uma reunião de 30 minutos na próxima quinta-feira às 14:00.',
    contextPt: 'Situação de comunicação comercial diária solicitando disponibilidade de agenda.',
    requiredElements: ['Saudação formal', 'Motivo claro do e-mail', 'Horário proposto', 'Despedida cordial'],
    modelResponse: "Dear Mr. Smith,\n\nI hope this email finds you well.\n\nI would like to request a brief 30-minute meeting with you next Thursday at 2:00 PM to discuss the quarterly project milestones. Please let me know if this time works for you or if another slot would be more convenient.\n\nBest regards,\nCarlos Eduardo",
    points: 25
  },
  {
    id: 'wrt-2',
    title: 'Parágrafo Argumentativo: Inteligência Artificial',
    level: 'B1-B2',
    taskType: 'Opinião Argumentativa',
    prompt: 'Write an argumentative paragraph (60-90 words) explaining whether AI tools in education will replace teachers or empower them.',
    contextPt: 'Redação concisa no estilo TOEFL/IELTS justificando sua posição com exemplos.',
    requiredElements: ['Tese principal', 'Exemplo de suporte', 'Conectivo de contraste', 'Conclusão sintética'],
    modelResponse: "In my opinion, artificial intelligence will not replace human educators, but will rather augment their pedagogical effectiveness. While AI tools can instantly generate personalized grammar quizzes and grade repetitive drills, they utterly lack human empathy and emotional mentorship. Consequently, the ideal classroom of the future will marry high-tech analytics with compassionate human guidance.",
    points: 25
  },
  {
    id: 'wrt-3',
    title: 'Carta Formal de Resolução e Reclamação Executiva',
    level: 'C1-C2',
    taskType: 'E-mail Profissional',
    prompt: 'Draft a diplomatic yet decisive formal escalation letter to a vendor who breached an SLA (Service Level Agreement).',
    contextPt: 'Comunicação executiva de alto impacto mantendo postura diplomática e firmeza jurídica.',
    requiredElements: ['Referência contratual específica', 'Impacto financeiro/operacional', 'Prazo resolutivo improrrogável', 'Linguagem jurídica polida'],
    modelResponse: "Dear Director Anderson,\n\nI am writing to formally address the unacceptable multi-hour service outage that occurred on September 1st, representing an explicit breach of Section 4.2 of our Master Services Agreement.\n\nThis incident severely disrupted our mission-critical operations and caused measurable client dissatisfaction. While we value our longstanding strategic collaboration, we must insist on receiving a comprehensive post-mortem report and a clear remediation plan within forty-eight hours.\n\nShould this deadline lapse without adequate resolution, we reserve the right to seek compensatory damages in accordance with governing contractual stipulations.\n\nSincerely,\nDirector of Operations",
    points: 25
  }
];
