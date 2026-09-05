import { PlacementQuestion } from '../types';

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // --- A1: Básico (Questões 1 a 8) ---
  {
    id: 1,
    level: 'A1',
    section: 'Grammar',
    prompt: 'She _____ from Canada. She is Australian.',
    options: ["isn't", "aren't", "not is", "don't"],
    correctIndex: 0,
    explanation: "Com o pronome 'she' no presente simples do verbo To Be, a forma negativa é 'is not' ou 'isn't'."
  },
  {
    id: 2,
    level: 'A1',
    section: 'Grammar',
    prompt: 'Where _____ you live?',
    options: ['are', 'do', 'does', 'is'],
    correctIndex: 1,
    explanation: "Para formular perguntas com o pronome 'you' e um verbo de ação (live) no presente, usamos o auxiliar 'do'."
  },
  {
    id: 3,
    level: 'A1',
    section: 'Vocabulary',
    prompt: 'Every morning, I eat bread and drink _____ for breakfast.',
    options: ['coffee', 'pencil', 'shoes', 'chair'],
    correctIndex: 0,
    explanation: "'Coffee' (café) é a única bebida alimentar apropriada para o café da manhã."
  },
  {
    id: 4,
    level: 'A1',
    section: 'Listening',
    prompt: "Listen to the audio and answer: What time does the train leave?",
    audioText: "Attention passengers, the next train to London will depart at quarter past eight from platform 3.",
    options: ['7:45', '8:15', '8:30', '8:45'],
    correctIndex: 1,
    explanation: "'Quarter past eight' significa 8:15 (quinze minutos após as oito)."
  },
  {
    id: 5,
    level: 'A1',
    section: 'Reading',
    prompt: "Read the note: 'Hi Tom, I am at the supermarket buying milk and fruits. See you at home at 6 PM. - Sarah.' Where is Sarah now?",
    options: ['At home', 'At school', 'At the supermarket', 'At work'],
    correctIndex: 2,
    explanation: "O bilhete afirma explicitamente: 'I am at the supermarket'."
  },
  {
    id: 6,
    level: 'A1',
    section: 'Grammar',
    prompt: 'My brother _____ two dogs and one cat.',
    options: ['have', 'has', 'having', 'is have'],
    correctIndex: 1,
    explanation: "Na terceira pessoa do singular (he/she/it/brother), o verbo 'have' conjuga-se como 'has'."
  },
  {
    id: 7,
    level: 'A1',
    section: 'Vocabulary',
    prompt: 'Today is Wednesday. Tomorrow will be _____.',
    options: ['Tuesday', 'Thursday', 'Friday', 'Monday'],
    correctIndex: 1,
    explanation: "O dia seguinte a quarta-feira (Wednesday) é quinta-feira (Thursday)."
  },
  {
    id: 8,
    level: 'A1',
    section: 'Use of English',
    prompt: 'Choose the correct sentence:',
    options: [
      'They goes to the gym on Mondays.',
      'They go to the gym on Mondays.',
      'They is go to the gym on Mondays.',
      'They going to gym on Mondays.'
    ],
    correctIndex: 1,
    explanation: "Com o pronome plural 'they', o verbo fica na forma base 'go'."
  },

  // --- A2: Elementar (Questões 9 a 16) ---
  {
    id: 9,
    level: 'A2',
    section: 'Grammar',
    prompt: 'Yesterday we _____ to the beach because the weather was fantastic.',
    options: ['go', 'went', 'gone', 'going'],
    correctIndex: 1,
    explanation: "'Yesterday' indica passado simples; o passado do verbo irregular 'go' é 'went'."
  },
  {
    id: 10,
    level: 'A2',
    section: 'Grammar',
    prompt: 'This movie is _____ than the one we watched last week.',
    options: ['more exciting', 'excitinger', 'most exciting', 'as exciting'],
    correctIndex: 0,
    explanation: "Adjetivos longos (exciting) formam o comparativo de superioridade com 'more ... than'."
  },
  {
    id: 11,
    level: 'A2',
    section: 'Vocabulary',
    prompt: 'Could you please turn _____ the lights? It is too dark in here.',
    options: ['off', 'on', 'down', 'away'],
    correctIndex: 1,
    explanation: "'Turn on' significa ligar/acender (as luzes)."
  },
  {
    id: 12,
    level: 'A2',
    section: 'Listening',
    prompt: "Listen to the customer: 'I'd like a medium coffee and a slice of chocolate cake, please.' What did the customer order?",
    audioText: "Hello, good morning! I'd like a medium coffee and a slice of chocolate cake, please.",
    options: [
      'A large tea and apple pie',
      'A small coffee and a muffin',
      'A medium coffee and chocolate cake',
      'Orange juice and chocolate cake'
    ],
    correctIndex: 2,
    explanation: "O cliente pediu 'a medium coffee and a slice of chocolate cake'."
  },
  {
    id: 13,
    level: 'A2',
    section: 'Reading',
    prompt: "Read: 'Flight BA249 is delayed by 45 minutes due to heavy thunderstorms over the airport.' Why is the flight late?",
    options: [
      'Mechanical breakdown',
      'Severe weather conditions',
      'Pilot sickness',
      'Security inspection'
    ],
    correctIndex: 1,
    explanation: "'Heavy thunderstorms' (tempestades severas) indicam mau tempo."
  },
  {
    id: 14,
    level: 'A2',
    section: 'Grammar',
    prompt: "We don't have _____ sugar left to bake the cake.",
    options: ['some', 'many', 'much', 'no'],
    correctIndex: 2,
    explanation: "'Sugar' é incontável; em frases negativas usamos 'much' ('not much sugar')."
  },
  {
    id: 15,
    level: 'A2',
    section: 'Vocabulary',
    prompt: 'A person whose job is to design buildings and houses is an _____.',
    options: ['accountant', 'architect', 'electrician', 'author'],
    correctIndex: 1,
    explanation: "A profissão responsável pelo projeto de edifícios é 'architect'."
  },
  {
    id: 16,
    level: 'A2',
    section: 'Use of English',
    prompt: "What _____ you doing when I called you last night?",
    options: ['was', 'were', 'did', 'are'],
    correctIndex: 1,
    explanation: "No Past Continuous com o sujeito 'you', o verbo To Be no passado é 'were'."
  },

  // --- B1: Intermediário (Questões 17 a 24) ---
  {
    id: 17,
    level: 'B1',
    section: 'Grammar',
    prompt: 'I have lived in this city _____ five years.',
    options: ['since', 'for', 'during', 'ago'],
    correctIndex: 1,
    explanation: "Usamos 'for' com o Present Perfect para expressar duração de tempo ('for five years')."
  },
  {
    id: 18,
    level: 'B1',
    section: 'Grammar',
    prompt: 'If it _____ tomorrow, we will cancel the outdoor picnic.',
    options: ['rains', 'will rain', 'rained', 'is raining'],
    correctIndex: 0,
    explanation: "Na First Conditional (If + Present Simple, will + base form), a oração condicional usa 'rains'."
  },
  {
    id: 19,
    level: 'B1',
    section: 'Vocabulary',
    prompt: 'The manager decided to _____ the meeting until next Friday because of the holiday.',
    options: ['call off', 'put off', 'look after', 'take after'],
    correctIndex: 1,
    explanation: "'Put off' é o phrasal verb que significa adiar (postpone)."
  },
  {
    id: 20,
    level: 'B1',
    section: 'Listening',
    prompt: "Listen to the speaker: 'Although the new software was initially difficult to navigate, our productivity has increased by thirty percent.' What is the speaker's conclusion?",
    audioText: "Although the new software was initially difficult to navigate, our overall team productivity has increased by thirty percent this quarter.",
    options: [
      'The software was a total failure',
      'The software ultimately improved their productivity',
      'The team stopped using the software',
      'Productivity dropped by 30%'
    ],
    correctIndex: 1,
    explanation: "A produtividade aumentou 30%, mostrando um impacto positivo apesar das dificuldades iniciais."
  },
  {
    id: 21,
    level: 'B1',
    section: 'Reading',
    prompt: "Read: 'Remote working has gained widespread acceptance globally. While employees enjoy flexible hours, some report feelings of isolation and difficulty separating work from personal life.' What is a reported disadvantage?",
    options: [
      'Higher commuting expenses',
      'Lack of flexible hours',
      'Feelings of loneliness and blur between work and life',
      'Lower salary packages'
    ],
    correctIndex: 2,
    explanation: "O texto menciona 'feelings of isolation and difficulty separating work from personal life'."
  },
  {
    id: 22,
    level: 'B1',
    section: 'Grammar',
    prompt: 'You _____ wear a helmet when riding a motorbike in this state. It is the law.',
    options: ['might', 'should', 'must', 'could'],
    correctIndex: 2,
    explanation: "'Must' expressa obrigação legal ou necessidade estrita."
  },
  {
    id: 23,
    level: 'B1',
    section: 'Use of English',
    prompt: 'The delicious dinner _____ prepared by chef Marco.',
    options: ['was', 'is been', 'did', 'were'],
    correctIndex: 0,
    explanation: "Voz passiva no passado simples: 'was prepared' com sujeito no singular ('dinner')."
  },
  {
    id: 24,
    level: 'B1',
    section: 'Vocabulary',
    prompt: 'She is extremely _____ about her job interview tomorrow; she really wants to get hired.',
    options: ['anxious', 'bored', 'fluent', 'exhausted'],
    correctIndex: 0,
    explanation: "'Anxious' (ansiosa/expectante) descreve a emoção antes de uma entrevista importante."
  },

  // --- B2: Pós-Intermediário (Questões 25 a 32) ---
  {
    id: 25,
    level: 'B2',
    section: 'Grammar',
    prompt: 'By the time the rescue team arrived, the hikers _____ a shelter in the cave.',
    options: ['already built', 'had already built', 'have already built', 'were already build'],
    correctIndex: 1,
    explanation: "O Past Perfect ('had built') é usado para uma ação que ocorreu antes de outro evento no passado ('arrived')."
  },
  {
    id: 26,
    level: 'B2',
    section: 'Grammar',
    prompt: 'If I _____ your phone number, I would have texted you about the venue change.',
    options: ['had had', 'have had', 'would have', 'had'],
    correctIndex: 0,
    explanation: "Third Conditional: 'If + Past Perfect (had had) ..., would have + past participle'."
  },
  {
    id: 27,
    level: 'B2',
    section: 'Vocabulary',
    prompt: 'The company launched a new campaign that aims to _____ carbon emissions by 40%.',
    options: ['curb', 'expand', 'inflate', 'deteriorate'],
    correctIndex: 0,
    explanation: "'Curb' significa conter, refrear ou reduzir (curb emissions)."
  },
  {
    id: 28,
    level: 'B2',
    section: 'Listening',
    prompt: "Listen to the financial analyst: 'Despite market volatility, the tech sector proved remarkably resilient, outperforming analyst expectations for the third consecutive quarter.' How did the tech sector perform?",
    audioText: "Despite widespread market volatility, the tech sector proved remarkably resilient, significantly outperforming analyst expectations for the third consecutive quarter.",
    options: [
      'It suffered severe losses',
      'It performed better than analysts predicted',
      'It went bankrupt due to volatility',
      'It had identical results to other sectors'
    ],
    correctIndex: 1,
    explanation: "'Outperforming analyst expectations' significa que superou as previsões dos analistas."
  },
  {
    id: 29,
    level: 'B2',
    section: 'Reading',
    prompt: "Read: 'Urban green spaces not only mitigate the heat island effect in metropolitan areas but also foster mental wellbeing among urban dwellers through biophilic connection.' What double benefit is mentioned?",
    options: [
      'Generating electricity and reducing traffic',
      'Cooling city temperatures and boosting psychological health',
      'Increasing housing prices and architectural value',
      'Encouraging car ownership and street commerce'
    ],
    correctIndex: 1,
    explanation: "'Mitigate the heat island effect' (esfriar a cidade) e 'foster mental wellbeing' (saúde mental)."
  },
  {
    id: 30,
    level: 'B2',
    section: 'Use of English',
    prompt: 'I would rather you _____ call him so late at night.',
    options: ["didn't", "don't", "won't", "not to"],
    correctIndex: 0,
    explanation: "'Would rather + subject + Past Simple' é a estrutura para expressar preferência sobre a ação de outra pessoa."
  },
  {
    id: 31,
    level: 'B2',
    section: 'Grammar',
    prompt: 'He is suspected of _____ confidential documents to the competitor.',
    options: ['having leaked', 'to leak', 'leak', 'have leaked'],
    correctIndex: 0,
    explanation: "Após a preposição 'of', usa-se o gerúndio; para indicar ação anterior, usa-se 'having leaked' (perfect gerund)."
  },
  {
    id: 32,
    level: 'B2',
    section: 'Vocabulary',
    prompt: 'Her persuasive arguments completely _____ the opposing committee members.',
    options: ['swayed', 'stumbled', 'stagnated', 'suffocated'],
    correctIndex: 0,
    explanation: "'Sway' significa convencer, influenciar a opinião de alguém."
  },

  // --- C1: Avançado (Questões 33 a 40) ---
  {
    id: 33,
    level: 'C1',
    section: 'Grammar',
    prompt: 'Seldom _____ such an awe-inspiring performance on Broadway.',
    options: [
      'have I witnessed',
      'I have witnessed',
      'did I witnessed',
      'I had witnessed'
    ],
    correctIndex: 0,
    explanation: "Advérbios negativos ou restritivos no início da frase (Seldom, Rarely, Never) exigem inversão sujeito-auxiliar: 'Seldom have I witnessed'."
  },
  {
    id: 34,
    level: 'C1',
    section: 'Grammar',
    prompt: 'You should _____ me that you needed a ride; I was driving right past your house.',
    options: ['have told', 'told', 'tell', 'had told'],
    correctIndex: 0,
    explanation: "'Should have + past participle' expressa uma crítica ou oportunidade perdida no passado."
  },
  {
    id: 35,
    level: 'C1',
    section: 'Vocabulary',
    prompt: 'The politician gave an intentionally _____ reply to avoid committing to a definitive stance.',
    options: ['equivocal', 'lucid', 'unambiguous', 'candid'],
    correctIndex: 0,
    explanation: "'Equivocal' significa ambíguo, deliberadamente vago para evitar compromisso."
  },
  {
    id: 36,
    level: 'C1',
    section: 'Listening',
    prompt: "Listen to the lecture: 'The epistemological premise of quantum mechanics fundamentally challenged the deterministic paradigm that had underpinned Newtonian physics for over two centuries.' What was challenged?",
    audioText: "The epistemological premise of quantum mechanics fundamentally challenged the deterministic paradigm that had underpinned classical Newtonian physics for over two centuries.",
    options: [
      'The premise that atoms do not exist',
      'The deterministic worldview of classical physics',
      'The value of mathematical proofs',
      'The historical accuracy of Isaac Newton'
    ],
    correctIndex: 1,
    explanation: "O paradigma determinista ('deterministic paradigm') da física clássica foi desafiado."
  },
  {
    id: 37,
    level: 'C1',
    section: 'Reading',
    prompt: "Read: 'While proponents argue that automated algorithmic decision-making eliminates human prejudice, empirical audits invariably reveal that historical biases embedded in training datasets perpetuate, and often amplify, systemic disparities.' What do empirical audits show?",
    options: [
      'Algorithms are completely devoid of bias',
      'Training datasets are always freshly generated without history',
      'Algorithmic systems often replicate existing social disparities',
      'Human decisions are objectively inferior in every domain'
    ],
    correctIndex: 2,
    explanation: "Auditorias mostram que vieses históricos são perpetuados e amplificados pelos algoritmos."
  },
  {
    id: 38,
    level: 'C1',
    section: 'Use of English',
    prompt: 'Had it not been for your prompt intervention, the contract _____ lost.',
    options: ['would have been', 'would be', 'will have been', 'had been'],
    correctIndex: 0,
    explanation: "Inversão condicional no passado: 'Had it not been for... would have been lost'."
  },
  {
    id: 39,
    level: 'C1',
    section: 'Vocabulary',
    prompt: 'His scholarly research is characterized by _____ attention to archival detail.',
    options: ['meticulous', 'cursory', 'negligent', 'perfunctory'],
    correctIndex: 0,
    explanation: "'Meticulous' significa minucioso, extremamente cuidadoso com detalhes."
  },
  {
    id: 40,
    level: 'C1',
    section: 'Grammar',
    prompt: 'The board recommended that the CEO _____ immediately regarding the conflict of interest.',
    options: ['resign', 'resigns', 'resigned', 'will resign'],
    correctIndex: 0,
    explanation: "Subjuntivo em inglês americano após verbos de demanda/recomendação (recommend that he do / resign)."
  },

  // --- C2: Proficiência / Quase Nativo (Questões 41 a 45) ---
  {
    id: 41,
    level: 'C2',
    section: 'Vocabulary',
    prompt: 'The speaker’s rhetoric was so _____ that even seasoned diplomats were mesmerized by his eloquence.',
    options: ['trenchant', 'vapid', 'insipid', 'pedestrian'],
    correctIndex: 0,
    explanation: "'Trenchant' denota um discurso vigoroso, incisivo, penetrante e articulado."
  },
  {
    id: 42,
    level: 'C2',
    section: 'Use of English',
    prompt: 'Choose the idiom that means to accept unpleasant consequences with fortitude:',
    options: [
      'Bite the bullet',
      'Burn bridges',
      'Beat around the bush',
      'Spill the beans'
    ],
    correctIndex: 0,
    explanation: "'Bite the bullet' significa encarar uma situação difícil ou dolorosa com coragem."
  },
  {
    id: 43,
    level: 'C2',
    section: 'Grammar',
    prompt: 'So engrossing _____ that the reader lost all track of passing hours.',
    options: [
      'was the historical narrative',
      'the historical narrative was',
      'did the historical narrative',
      'is the historical narrative'
    ],
    correctIndex: 0,
    explanation: "Inversão com 'So + adjetivo' na posição inicial: 'So engrossing was the historical narrative...'."
  },
  {
    id: 44,
    level: 'C2',
    section: 'Reading',
    prompt: "Read: 'The critic argued that the author's latest magnum opus was not merely an aesthetic triumph, but an apotheosis of postmodern metafiction, interweaving semiotic pastiche with existential pathos.' What is the critic's overall assessment?",
    options: [
      'The book is a derivative and trivial narrative',
      'The book represents the crowning pinnacle of postmodern literature',
      'The author failed to comprehend metafiction techniques',
      'The work lacks emotional depth and intellectual rigor'
    ],
    correctIndex: 1,
    explanation: "'Apotheosis' significa o apogeu, a apoteose ou a máxima consagração de um estilo."
  },
  {
    id: 45,
    level: 'C2',
    section: 'Use of English',
    prompt: 'No sooner _____ the podium than thunderous applause echoed across the amphitheater.',
    options: [
      'had the maestro stepped onto',
      'the maestro stepped onto',
      'did the maestro stepped onto',
      'has the maestro stepped onto'
    ],
    correctIndex: 0,
    explanation: "A estrutura clássica de inversão temporal é 'No sooner had + subject + past participle ... than'."
  }
];

export const calculateCefrFromScore = (score: number): {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  description: string;
  strengths: string[];
  weaknesses: string[];
} => {
  if (score >= 41) {
    return {
      level: 'C2',
      description: 'Nível de Maestria / Quase Nativo (Mastery). Domínio completo e espontâneo da língua em qualquer contexto acadêmico, literário ou profissional complexo.',
      strengths: ['Inversões gramaticais raras', 'Vocabulário estilístico e metafórico', 'Compreensão de nuances sutis'],
      weaknesses: ['Manutenção contínua de imersão de alto nível']
    };
  }
  if (score >= 33) {
    return {
      level: 'C1',
      description: 'Nível Operacional Eficaz (Effective Operational Proficiency). Fluência flexível e natural para propósitos sociais, acadêmicos e corporativos de alta liderança.',
      strengths: ['Inversão adverbial', 'Modais perfeitos', 'Discurso argumentativo formal'],
      weaknesses: ['Expressões idiomáticas hiper-específicas', 'Nuances culturais de nicho']
    };
  }
  if (score >= 25) {
    return {
      level: 'B2',
      description: 'Nível Independente Avançado (Vantage). Capacidade de compreender ideias complexas em textos concretos e abstratos, com espontaneidade satisfatória.',
      strengths: ['Condicionais mistas', 'Phrasal verbs frequentes', 'Voz passiva complexa'],
      weaknesses: ['Inversões gramaticais avançadas', 'Vocabulário literário de alta densidade']
    };
  }
  if (score >= 17) {
    return {
      level: 'B1',
      description: 'Nível Intermediário (Threshold). Compreensão dos pontos principais em assuntos familiares, viagens e trabalho, articulando opiniões com clareza.',
      strengths: ['Present Perfect básico', 'First & Second Conditionals', 'Conectivos fundamentais'],
      weaknesses: ['Third conditional e passado perfeito', 'Diferenciação de nuances abstratas']
    };
  }
  if (score >= 9) {
    return {
      level: 'A2',
      description: 'Nível Elementar (Waystage). Compreende frases isoladas e expressões de uso frequente relacionadas com a sua vida cotidiana imediata.',
      strengths: ['Passado simples', 'Comparativos básicos', 'Rotina e direções'],
      weaknesses: ['Tempos perfeitos', 'Orações subordinadas e conectivos de contraste']
    };
  }
  return {
    level: 'A1',
    description: 'Nível Básico / Iniciante (Breakthrough). Reconhece palavras conhecidas e frases muito simples sobre si mesmo e situações imediatas.',
    strengths: ['Verbo To Be', 'Pronomes pessoais', 'Vocabulário imediato'],
    weaknesses: ['Conjugações no passado', 'Perguntas complexas', 'Uso de tempos verbais compostos']
  };
};
