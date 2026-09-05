import { GrammarUnit } from '../types';

export const UNITS_21_TO_30: GrammarUnit[] = [
  {
    id: 21,
    number: 21,
    title: "Present Perfect Continuous",
    subtitle: "Ações Contínuas que Começaram no Passado e Seguem no Presente",
    category: "Tempos Perfeitos",
    estimatedHours: 2,
    explanation: "O Present Perfect Continuous enfatiza a DURAÇÃO e o processo ininterrupto de uma ação iniciada no passado que continua acontecendo até o momento presente! Fórmula: Sujeito + HAVE/HAS + BEEN + Verbo no -ING. Marcadores temporais fundamentais: SINCE (indica o ponto inicial no tempo: 'since 2020', 'since morning') e FOR (indica a duração total: 'for 6 years', 'for two hours'). Exemplo: 'I have been living in Canada for 6 years' (você ainda mora lá hoje!).",
    keyRules: [
      "Fórmula: Sujeito + have/has + been + Verbo-ING (ex: I have been studying English all day)",
      "SINCE = desde (ponto de partida: since 2020, since yesterday, since 8 AM)",
      "FOR = por / há (duração do tempo: for 3 hours, for 5 years, for two weeks)",
      "Comparações: 'I have lived' (pode ter terminado) vs 'I have been living' (ação 100% ativa agora)"
    ],
    videoUrl: "https://drive.google.com/file/d/1kDlH7DP5ncmd_KOLf2lHdrDyHKuV9tMc/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I have been studying for the exam all day.", pt: "Eu venho estudando para o exame o dia todo.", highlightWord: "have been studying" },
        { en: "She has been working on this project for six months.", pt: "Ela está trabalhando neste projeto há seis meses.", highlightWord: "has been working" },
        { en: "They have been traveling for two weeks.", pt: "Eles estão viajando há duas semanas.", highlightWord: "have been traveling" },
        { en: "The sun has been shining since early this morning.", pt: "O sol está brilhando desde cedo esta manhã.", highlightWord: "has been shining" },
        { en: "I have been living in Canada since 2020.", pt: "Eu moro no Canadá desde 2020.", highlightWord: "have been living" }
      ],
      negatives: [
        { en: "I haven't been sleeping well lately.", pt: "Eu não venho dormindo bem ultimamente.", highlightWord: "haven't been sleeping" },
        { en: "She hasn't been practicing the piano.", pt: "Ela não tem praticado piano.", highlightWord: "hasn't been practicing" }
      ],
      interrogatives: [
        { en: "How long have you been learning English?", pt: "Há quanto tempo você está aprendendo inglês?", highlightWord: "have you been learning" },
        { en: "Have you been practicing the piano?", pt: "Você tem praticado piano?", highlightWord: "Have you been practicing" },
        { en: "What have you been doing all morning?", pt: "O que você andou fazendo a manhã toda?", highlightWord: "have you been doing" }
      ]
    },
    illustratedStory: {
      title: "O Arquiteto Dedicado",
      storyEn: "Lucas is a passionate architect. He has been designing the city's new library for eight months. He has been working with international engineers since January. His dedication is paying off!",
      storyPt: "Lucas é um arquiteto apaixonado. Ele está projetando a nova biblioteca da cidade há oito meses. Ele tem trabalhado com engenheiros internacionais desde janeiro. Sua dedicação está dando resultados!",
      highlightSentence: "He has been designing the library for eight months since January.",
      visualTheme: "architecture",
      tags: ["Continuous Progress", "Since and For", "Career"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a estrutura do Present Perfect Continuous?", options: ["have/has + been + verbo-ing", "have/has + verbo no particípio", "was/were + verbo-ing", "had + been + verbo no particípio"], correctAnswer: "have/has + been + verbo-ing", explanation: "Have/has + been + verbo com terminação -ing.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete com 'since' ou 'for': 'I have lived here _____ 2018.'", options: ["since", "for", "during", "ago"], correctAnswer: "since", explanation: "'Since' é usado para o ponto de partida específico no tempo (ano 2018).", points: 10 },
      { id: 3, type: "multiple-choice", prompt: "Complete com 'since' ou 'for': 'She has been studying _____ three hours.'", options: ["for", "since", "from", "at"], correctAnswer: "for", explanation: "'For' é usado para períodos e durações de tempo (3 hours).", points: 10 },
      { id: 4, type: "fill-blank", prompt: "Preencha a lacuna: 'We have _____ (estar/to be) waiting for the bus for 40 minutes.'", correctAnswer: "been", explanation: "O particípio de to be na fórmula é 'been'.", points: 10 },
      { id: 5, type: "multiple-choice", prompt: "Complete: 'She _____ (trabalha) on this design since morning.'", options: ["has been working", "have been working", "is working since", "was working for"], correctAnswer: "has been working", explanation: "Com 'she', usamos 'has been working'.", points: 10 },
      { id: 6, type: "fill-blank", prompt: "Como se pergunta 'Há quanto tempo...': '_____ long have you been studying?'", correctAnswer: "How", explanation: "'How long' é a expressão para perguntar a duração.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase enfatiza uma ação contínua que ainda dura no presente?", options: ["I have been learning English for two years.", "I learned English for two years in 2010.", "I was learning English yesterday.", "I learn English."], correctAnswer: "I have been learning English for two years.", explanation: "Present Perfect Continuous expressa ação contínua até o presente.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete a negação: 'He _____ (não tem se sentido) well for the past few days.' (hasn't been feeling)", correctAnswer: "hasn't been feeling", explanation: "Hasn't been feeling.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Complete: 'The dog has been barking _____ two hours non-stop.'", options: ["for", "since", "until", "by"], correctAnswer: "for", explanation: "'For two hours' indica duração.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente 'Sim, eu tenho praticado' para 'Have you been practicing?'", options: ["Yes, I have been.", "Yes, I am practicing.", "Yes, I was.", "Yes, I have be."], correctAnswer: "Yes, I have been.", explanation: "Resposta curta: 'Yes, I have been.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "How long have you been studying English, and what hobbies or sports have you been practicing recently?",
      contextPt: "Descreva hábitos recentes e o tempo que você estuda inglês usando 'I have been studying English for/since...' e 'I have been practicing...'.",
      exampleAnswer: "I have been studying English for about six months with Insight English. Recently, I have also been practicing running three times a week and reading books in English before going to sleep.",
      hints: ["I have been learning English since [mês/ano]", "I have been practicing [hábito] for [tempo]"]
    },
    plannerExerciseSuggestion: "Escreva 5 frases com 'have been + -ing' e marcadores de tempo: 3 com 'for' (ex: for two months) e 2 com 'since' (ex: since January)."
  },
  {
    id: 22,
    number: 22,
    title: "Present Perfect: Yet",
    subtitle: "Acontecimentos Esperados em Perguntas e Negativas",
    category: "Tempos Perfeitos",
    estimatedHours: 2,
    explanation: "A palavra 'YET' é usada exclusivamente em PERGUNTAS e FRASES NEGATIVAS para falar de algo que se espera que já tenha acontecido! Regra de tradução de ouro: 1) Em PERGUNTAS, YET significa 'JÁ' (Have you washed the dishes yet? = Você já lavou a louça?); 2) Em FRASES NEGATIVAS, YET significa 'AINDA NÃO' (I haven't washed the dishes yet = Eu ainda não lavei a louça). Ele vai sempre posicionado no final da frase!",
    keyRules: [
      "Uso exclusivo em INTERROGATIVAS e NEGATIVAS (não se usa em afirmativas simples)",
      "Em perguntas: Yet = 'Já' (ex: Have they arrived home yet?)",
      "Em negativas: Yet = 'Ainda não' (ex: I haven't done my homework yet)",
      "Posição: Quase sempre no final da oração."
    ],
    videoUrl: "https://drive.google.com/file/d/163V9i0Jcpv6LjbtG-47-GuT8e6Itgfqm/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "Have you washed the dishes yet?", pt: "Você já lavou a louça?", highlightWord: "yet" },
        { en: "Has he driven the new car yet?", pt: "Ele já dirigiu o carro novo?", highlightWord: "yet" },
        { en: "Have you eaten lunch yet?", pt: "Você já almoçou?", highlightWord: "yet" },
        { en: "Have they arrived home yet?", pt: "Eles já chegaram em casa?", highlightWord: "yet" }
      ],
      negatives: [
        { en: "I haven't washed the dishes yet.", pt: "Eu ainda não lavei a louça.", highlightWord: "haven't ... yet" },
        { en: "I haven't done my homework yet.", pt: "Eu ainda não fiz minha lição de casa.", highlightWord: "haven't ... yet" },
        { en: "She hasn't finished her cake yet.", pt: "Ela ainda não terminou o bolo dela.", highlightWord: "hasn't ... yet" },
        { en: "They haven't seen the results yet.", pt: "Eles ainda não viram os resultados.", highlightWord: "haven't ... yet" },
        { en: "The company hasn't chosen the winner yet.", pt: "A empresa ainda não escolheu o vencedor.", highlightWord: "hasn't ... yet" }
      ],
      interrogatives: [
        { en: "Have we broken the record yet?", pt: "Nós já quebramos o recorde?", highlightWord: "yet" },
        { en: "Have you done your makeup yet?", pt: "Você já fez sua maquiagem?", highlightWord: "yet" },
        { en: "Has the snow frozen the lake yet?", pt: "A neve já congelou o lago?", highlightWord: "yet" }
      ]
    },
    illustratedStory: {
      title: "Preparativos para a Festa Surpresa",
      storyEn: "The guests are arriving, but the party isn't ready! 'Have you bought the ice yet?', asked Beatriz. 'I haven't bought the ice yet, but I've already decorated the room', answered Carlos. 'Has the cake arrived yet?' - 'Not yet!'",
      storyPt: "Os convidados estão chegando, mas a festa não está pronta! 'Você já comprou o gelo?', perguntou Beatriz. 'Eu ainda não comprei o gelo, mas já decorei a sala', respondeu Carlos. 'O bolo já chegou?' - 'Ainda não!'",
      highlightSentence: "Have you bought the ice yet? I haven't bought the ice yet.",
      visualTheme: "party",
      tags: ["Deadlines", "Yet", "Checklists"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual o significado de 'yet' na pergunta 'Have you eaten yet?'", options: ["Já", "Ainda não", "Nunca", "Sempre"], correctAnswer: "Já", explanation: "Em perguntas, 'yet' traduz-se como 'já'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual o significado de 'yet' na frase negativa 'I haven't done it yet'?", options: ["Ainda não", "Já", "Também", "Nunca"], correctAnswer: "Ainda não", explanation: "Em frases negativas, 'haven't ... yet' significa 'ainda não'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete: 'Have they received the document _____?' (já)", correctAnswer: "yet", explanation: "Yet vai no final da pergunta.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["She hasn't called me yet.", "She has called me yet.", "She hasn't yet called me yet.", "Yet she hasn't called."], correctAnswer: "She hasn't called me yet.", explanation: "She hasn't called me yet.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação com o particípio de 'write': 'I _____ (não escrevi) the email yet.'", correctAnswer: "haven't written", explanation: "I haven't written the email yet.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'Você já terminou sua lição de casa?'", options: ["Have you finished your homework yet?", "Did you finished homework yet?", "Have you finish homework yet?", "Are you finished homework yet?"], correctAnswer: "Have you finished your homework yet?", explanation: "Have you finished... yet?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'The train _____ (ainda não chegou).' (arrive)", options: ["hasn't arrived yet", "haven't arrived yet", "didn't arrived yet", "isn't arrive yet"], correctAnswer: "hasn't arrived yet", explanation: "The train (it) -> hasn't arrived yet.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Como responder de forma curta 'Ainda não': 'Not _____.'", correctAnswer: "yet", explanation: "'Not yet' é a resposta curta padrão.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Podemos usar 'yet' em uma frase afirmativa comum (ex: 'I have eaten yet')?", options: ["Não, yet só é usado em perguntas e negativas.", "Sim, é comum.", "Apenas na 3ª pessoa.", "Sim, em qualquer frase."], correctAnswer: "Não, yet só é usado em perguntas e negativas.", explanation: "Para afirmativas usamos 'already'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'We haven't drunk our coffee _____.'", options: ["yet", "already", "ever", "never"], correctAnswer: "yet", explanation: "Negativa no final usa 'yet'.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Think about your to-do list for today: What tasks have you already completed, and what tasks haven't you done yet?",
      contextPt: "Fale sobre sua lista de tarefas do dia usando 'I have already...' e 'I haven't [verb] yet'.",
      exampleAnswer: "Today, I have already answered my important work emails and I have attended a team meeting. However, I haven't done my daily workout yet, and I haven't cooked dinner yet.",
      hints: ["I have already [verbo no particípio]...", "I haven't [verbo no particípio] yet.", "Have you seen my notes yet?"]
    },
    plannerExerciseSuggestion: "Escreva uma lista de 5 tarefas diárias: 2 que você já completou ('I have already finished...') e 3 que você ainda não fez ('I haven't done ... yet')."
  },
  {
    id: 23,
    number: 23,
    title: "Present Perfect: Ever - Never & Already",
    subtitle: "As Três Palavras-Chave de Experiência e Frequência",
    category: "Tempos Perfeitos",
    estimatedHours: 2,
    explanation: "Três palavras essenciais dão superpoderes ao Present Perfect: 1) EVER (em algum momento da sua vida inteira) - usado em PERGUNTAS: 'Have you ever seen a lion?', 'Have you ever been to Japan?'; 2) ALREADY (já aconteceu / antes do esperado) - usado em AFIRMATIVAS: 'I have already washed the dishes', 'Yes, I have already seen a lion'; 3) NEVER (nunca) - usado para NEGATIVAS: 'I have never seen a lion'. CUIDADO MÁXIMO: como 'never' já é negativo, NUNCA use 'haven't' com ele (evite double negative: diga 'I have never visited Paris', nunca 'I haven't never visited').",
    keyRules: [
      "EVER = 'Em algum momento da vida' -> Usado em PERGUNTAS (ex: Have you ever traveled abroad?)",
      "ALREADY = 'Já (aconteceu)' -> Usado em AFIRMATIVAS (ex: I have already finished my work)",
      "NEVER = 'Nunca' -> Usado com o verbo afirmativo (ex: I have never tried frog meat)",
      "Regra anti-dupla negativa: Sujeito + HAVE/HAS (positivo) + NEVER + Particípio"
    ],
    videoUrl: "https://drive.google.com/file/d/170Z9JGxNa5h0HIZQ01QGMv5gckEYeUXO/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I have already washed the dishes.", pt: "Eu já lavei a louça.", highlightWord: "already" },
        { en: "Yes, I have already seen a lion in South Africa.", pt: "Sim, eu já vi um leão na África do Sul.", highlightWord: "already seen" },
        { en: "She has already sent the contract.", pt: "Ela já enviou o contrato.", highlightWord: "already sent" },
        { en: "We have already booked our hotel tickets.", pt: "Nós já reservamos nossas passagens de hotel.", highlightWord: "already booked" }
      ],
      negatives: [
        { en: "I have never seen a lion in the wild.", pt: "Eu nunca vi um leão na natureza.", highlightWord: "never seen" },
        { en: "She has never traveled abroad.", pt: "Ela nunca viajou para o exterior.", highlightWord: "never traveled" },
        { en: "They have never eaten sushi.", pt: "Eles nunca comeram sushi.", highlightWord: "never eaten" },
        { en: "I have never broken a bone.", pt: "Eu nunca quebrei um osso.", highlightWord: "never broken" }
      ],
      interrogatives: [
        { en: "Have you ever been to Japan?", pt: "Você já esteve no Japão?", highlightWord: "ever been" },
        { en: "Has she ever practiced English with you?", pt: "Ela já praticou inglês com você?", highlightWord: "ever practiced" },
        { en: "Have they ever talked to an American?", pt: "Eles já conversaram com um americano na vida?", highlightWord: "ever talked" },
        { en: "Have you ever met someone famous?", pt: "Você já conheceu alguém famoso?", highlightWord: "ever met" }
      ]
    },
    illustratedStory: {
      title: "O Jogo das Experiências (Never Have I Ever)",
      storyEn: "At the university dinner, the friends played a game of life experiences. 'Have you ever tried frog meat?', asked Bruno. Sarah laughed: 'No, I have never tried frog meat, but I have already eaten escargot in Paris!'",
      storyPt: "No jantar da universidade, os amigos jogaram um jogo de experiências de vida. 'Você já experimentou carne de rã?', perguntou Bruno. Sarah riu: 'Não, eu nunca experimentei carne de rã, mas já comi escargot em Paris!'",
      highlightSentence: "Have you ever tried frog meat? I have never tried it, but I have already eaten escargot.",
      visualTheme: "dinner",
      tags: ["Experiences", "Ever", "Never", "Already"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual palavra usamos para perguntar 'Você já... alguma vez na vida'?", options: ["ever", "never", "already", "yet"], correctAnswer: "ever", explanation: "'Ever' é usado em perguntas de experiência de vida.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'I have _____ (nunca) seen snow in person.'", options: ["never", "ever", "not never", "haven't never"], correctAnswer: "never", explanation: "'Never' já é negativo, use 'have never'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a pergunta: 'Have you _____ been to New York?' (alguma vez)", correctAnswer: "ever", explanation: "Have you ever been to New York?", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete a frase afirmativa: 'Don't worry, I have _____ paid the bills.' (já)", options: ["already", "yet", "ever", "never"], correctAnswer: "already", explanation: "'Already' indica 'já' em orações afirmativas.", points: 10 },
      { id: 5, type: "multiple-choice", prompt: "Qual frase evita corretamente a dupla negativa?", options: ["I have never visited Paris.", "I haven't never visited Paris.", "I haven't visited Paris never.", "I don't have never visited Paris."], correctAnswer: "I have never visited Paris.", explanation: "I have never visited Paris (sem double negative).", points: 10 },
      { id: 6, type: "fill-blank", prompt: "Complete com o particípio de 'break': 'Has he ever _____ (quebrado) a bone?'", correctAnswer: "broken", explanation: "Break -> broke -> broken.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'She has _____ completed three full levels of English.' (já)", options: ["already", "ever", "yet", "still"], correctAnswer: "already", explanation: "She has already completed...", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Preencha a resposta negativa: 'No, I have _____ (nunca) eaten sushi.'", correctAnswer: "never", explanation: "I have never eaten sushi.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual pergunta sobre experiências passadas está correta?", options: ["Have you ever met someone famous?", "Did you ever met someone famous?", "Are you ever meet someone famous?", "Have you ever meet someone famous?"], correctAnswer: "Have you ever met someone famous?", explanation: "Have you ever met... (met = particípio).", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'They have _____ been to a Broadway musical.' (já)", options: ["already", "yet", "ever", "none"], correctAnswer: "already", explanation: "They have already been to...", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Have you ever traveled abroad, met someone famous, or tried extreme sports? Tell me about 1 experience you have already had and 1 thing you have never done!",
      contextPt: "Responda às perguntas sobre experiências de vida usando 'I have already...', 'I have never...', 'I have never been to...'.",
      exampleAnswer: "I have already visited Argentina and tasted authentic Argentine barbecue. However, I have never tried extreme sports like skydiving because I am afraid of heights!",
      hints: ["I have already [experiência]", "I have never [algo que nunca fez]", "Have you ever tried...?"]
    },
    plannerExerciseSuggestion: "Escreva 6 frases para uma entrevista de experiências: 2 com 'Have you ever...?', 2 afirmativas com 'I have already...' e 2 com 'I have never...'."
  },
  {
    id: 24,
    number: 24,
    title: "Participle of Verbs",
    subtitle: "Infinitivo, Passado e Particípio (Regulares, Irregulares e Fixos)",
    category: "Tempos Perfeitos",
    estimatedHours: 1,
    explanation: "No inglês existem 3 formas verbais fundamentais: 1) INFINITIVO (presente: to eat, to sleep, to talk - sufixos -ar, -er, -ir em português); 2) PASSADO SIMPLES (Simple Past: ate, slept, talked); 3) PARTICÍPIO PASSADO (Past Participle: eaten, slept, talked - sufixos -ado, -ido, como 'comido', 'dormido', 'falado'). O particípio é o pilar de todos os tempos perfeitos (Present Perfect, Past Perfect, Future Perfect) e da voz passiva (The cake was eaten, The window was broken). Verbos regulares terminam em -ED nas duas formas (cook-cooked-cooked). Verbos irregulares mudam totalmente (drink-drank-drunk, write-wrote-written, see-saw-seen). E verbos fixos mantêm a mesma forma nas três colunas (hit-hit-hit, put-put-put, cut-cut-cut, hurt-hurt-hurt)!",
    keyRules: [
      "Infinitivo (to + verbo): To drink, To sleep, To write",
      "Passado Simples: Drank, Slept, Wrote",
      "Particípio (3ª coluna): Drunk, Slept, Written",
      "Verbos Fixos (3 formas iguais): Hit-Hit-Hit, Put-Put-Put, Cut-Cut-Cut, Hurt-Hurt-Hurt",
      "Uso crucial: Tempos Perfeitos (have written) e Voz Passiva (was broken, was chosen)"
    ],
    videoUrl: "https://drive.google.com/file/d/12Ffqchz6ukj__uZ20iEP6mqABIddeEMl/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "The cake was eaten by the children.", pt: "O bolo foi comido pelas crianças.", highlightWord: "eaten" },
        { en: "The window was broken during the storm.", pt: "A janela foi quebrada durante a tempestade.", highlightWord: "broken" },
        { en: "I was chosen for the scholarship.", pt: "Eu fui escolhido para a bolsa de estudos.", highlightWord: "chosen" },
        { en: "He has written ten best-selling books.", pt: "Ele escreveu dez livros de sucesso.", highlightWord: "written" }
      ],
      negatives: [
        { en: "The door wasn't locked.", pt: "A porta não estava trancada.", highlightWord: "locked" },
        { en: "The secret was not hidden.", pt: "O segredo não estava escondido.", highlightWord: "hidden" }
      ],
      interrogatives: [
        { en: "Was the letter written by hand?", pt: "A carta foi escrita à mão?", highlightWord: "written" },
        { en: "Has the water frozen yet?", pt: "A água já congelou?", highlightWord: "frozen" }
      ]
    },
    illustratedStory: {
      title: "O Tesouro Escondido no Sótão",
      storyEn: "Inside the old mansion, a mysterious wooden box was found. The lock was broken, but the ancient letters inside were not damaged. They were written in 1890 by a famous explorer.",
      storyPt: "Dentro da velha mansão, uma misteriosa caixa de madeira foi encontrada. A fechadura estava quebrada, mas as antigas cartas dentro não foram danificadas. Elas foram escritas em 1890 por um famoso explorador.",
      highlightSentence: "The box was found, the lock was broken, and the letters were written in 1890.",
      visualTheme: "mystery",
      tags: ["Participles", "Passive Voice", "History"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é o particípio passado do verbo irregular 'to write'?", options: ["written", "wrote", "writing", "writed"], correctAnswer: "written", explanation: "Write (infinitivo) -> wrote (passado) -> written (particípio).", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual é a tríade correta do verbo 'to drink' (beber)?", options: ["drink - drank - drunk", "drink - drinked - drunk", "drink - drank - drinken", "drink - dranked - drunk"], correctAnswer: "drink - drank - drunk", explanation: "Drink - drank - drunk.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Qual é o particípio passado de 'to eat'? (comer)", correctAnswer: "eaten", explanation: "Eat -> ate -> eaten.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual dos seguintes verbos é 'fixo' (tem as 3 formas idênticas)?", options: ["put - put - put", "see - saw - seen", "go - went - gone", "do - did - done"], correctAnswer: "put - put - put", explanation: "Put é um verbo fixo: put - put - put.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Complete o particípio de 'to freeze' (congelar): 'The lake was _____.'", correctAnswer: "frozen", explanation: "Freeze -> froze -> frozen.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual é o particípio do verbo 'to break' (quebrar)?", options: ["broken", "broke", "breaked", "broked"], correctAnswer: "broken", explanation: "Break -> broke -> broken.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete com o particípio de 'choose' (escolher): 'She was _____ as the team leader.'", options: ["chosen", "chose", "choosed", "choicing"], correctAnswer: "chosen", explanation: "Choose -> chose -> chosen.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Qual o particípio passado do verbo regular 'to cook'?", correctAnswer: "cooked", explanation: "Verbos regulares mantêm -ed no particípio: cooked.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual é a tríade do verbo 'to go'?", options: ["go - went - gone", "go - went - went", "go - goed - gone", "go - went - goed"], correctAnswer: "go - went - gone", explanation: "Go - went - gone.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete com o particípio de 'to fly' (voar): 'He has _____ around the world.'", options: ["flown", "flew", "flyed", "flight"], correctAnswer: "flown", explanation: "Fly -> flew -> flown.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Have you ever written a poem or article? What was the best gift you have ever been given or the most memorable book you have read?",
      contextPt: "Use particípios passados em inglês ('written', 'given', 'read', 'seen', 'chosen').",
      exampleAnswer: "The most memorable gift I have ever been given was a classic acoustic guitar from my father. I have written several songs with it, and it has inspired my music journey.",
      hints: ["I was given...", "I have read...", "The book was written by..."]
    },
    plannerExerciseSuggestion: "Memorize 10 verbos irregulares chave: escreva uma tabela com as 3 colunas (Infinitivo, Passado, Particípio) e forme 3 frases com a coluna do Particípio."
  },
  {
    id: 25,
    number: 25,
    title: "Past Perfect",
    subtitle: "O Passado do Passado (Sequência de Eventos: Event 1 & Event 2)",
    category: "Tempos Perfeitos",
    estimatedHours: 2,
    explanation: "O PAST PERFECT é o famoso 'passado do passado'! Quando contamos uma história sobre o passado e temos DOIS eventos que aconteceram antes do agora, usamos o Past Perfect para o EVENTO 1 (o que aconteceu primeiro) e o Simple Past para o EVENTO 2 (o que aconteceu depois). Fórmula: Sujeito + HAD + Verbo no Particípio. Palavras de conexão chave: BEFORE e AFTER. Exemplo: 'I had cooked dinner (Evento 1) before my brother arrived (Evento 2)' ou 'My brother arrived after I had cooked dinner'. Versão contínua: 'I had been working for 3 hours when he called me'.",
    keyRules: [
      "Evento 1 (Aconteceu primeiro): Sujeito + HAD + Particípio (Past Perfect)",
      "Evento 2 (Aconteceu depois): Sujeito + Verbo no Passado Simples",
      "Conectores essenciais: Before (antes que) e After (depois que) e When (quando)",
      "Past Perfect Continuous: Had + been + Verbo-ING (ex: She had been waiting for 40 minutes before the bus arrived)"
    ],
    videoUrl: "https://drive.google.com/file/d/1ZMwhmXxRJXkbcbd7UP45jy_Kt4lH23a7/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I had cooked dinner before my brother arrived.", pt: "Eu tinha cozinhado o jantar antes de meu irmão chegar.", highlightWord: "had cooked" },
        { en: "My father had gone to Canada before I visited him.", pt: "Meu pai tinha ido ao Canadá antes de eu visitá-lo.", highlightWord: "had gone" },
        { en: "I had visited Paris and London before I traveled to the USA.", pt: "Eu tinha visitado Paris e Londres antes de viajar para os EUA.", highlightWord: "had visited" },
        { en: "She had been waiting for the bus for 40 minutes before it arrived.", pt: "Ela estava esperando pelo ônibus por 40 minutos antes de ele finalmente chegar.", highlightWord: "had been waiting" }
      ],
      negatives: [
        { en: "They had not finished the project when the client called.", pt: "Eles não tinham terminado o projeto quando o cliente ligou.", highlightWord: "had not finished" },
        { en: "She hadn't been feeling well before she went to the doctor.", pt: "Ela não vinha se sentindo bem antes de ir ao médico.", highlightWord: "hadn't been feeling" }
      ],
      interrogatives: [
        { en: "Had you been drinking enough water before you felt dizzy?", pt: "Você estava bebendo água o suficiente antes de se sentir tonto?", highlightWord: "Had you been drinking" },
        { en: "Had they already left when you arrived at the station?", pt: "Eles já tinham saído quando você chegou à estação?", highlightWord: "Had they already left" }
      ]
    },
    illustratedStory: {
      title: "Chegando no Cinema Atrasado",
      storyEn: "Felipe got stuck in terrible traffic. When he finally arrived at the movie theater, the movie had already started and his friends had eaten all the popcorn! Fortunately, they saved him a seat.",
      storyPt: "Felipe ficou preso em um trânsito terrível. Quando ele finalmente chegou ao cinema, o filme já tinha começado e seus amigos já tinham comido toda a pipoca! Felizmente, guardaram um lugar para ele.",
      highlightSentence: "When he arrived, the movie had already started and his friends had eaten the popcorn.",
      visualTheme: "cinema",
      tags: ["Past Sequence", "Had + Participle", "Storytelling"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a fórmula do Past Perfect?", options: ["Sujeito + had + Particípio do verbo", "Sujeito + have + Particípio do verbo", "Sujeito + did + Verbo base", "Sujeito + was + Particípio"], correctAnswer: "Sujeito + had + Particípio do verbo", explanation: "Had + particípio passado.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'I _____ (tinha limpado) the kitchen before my friend called.'", options: ["had cleaned", "have cleaned", "was cleaned", "cleaned had"], correctAnswer: "had cleaned", explanation: "Had cleaned indica a ação anterior no passado.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha o auxiliar do Past Perfect: 'She _____ already left when the meeting began.'", correctAnswer: "had", explanation: "O auxiliar do Past Perfect é 'had'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Na frase 'I had ordered sushi before my friend came for dinner', qual evento aconteceu PRIMEIRO?", options: ["Eu pedi o sushi (Evento 1)", "Meu amigo chegou para o jantar (Evento 2)", "Ambos aconteceram exatamente ao mesmo tempo", "Nenhum deles aconteceu"], correctAnswer: "Eu pedi o sushi (Evento 1)", explanation: "O que leva 'had + particípio' é o evento que ocorreu primeiro.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Complete com o particípio de 'go': 'My father had _____ to Canada before I visited him.'", correctAnswer: "gone", explanation: "Go -> went -> gone.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Complete: 'When I woke up, the rain _____ (já tinha parado).' (stop)", options: ["had already stopped", "has already stopped", "was already stopped", "did stopped"], correctAnswer: "had already stopped", explanation: "Had already stopped.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete o Past Perfect Continuous: 'They _____ (estavam jogando) for hours before it started to rain.'", options: ["had been playing", "have been playing", "were been playing", "had playing"], correctAnswer: "had been playing", explanation: "Had been playing.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Preencha a negação: 'I _____ (não tinha terminado) my exam when the teacher called time.' (hadn't finished)", correctAnswer: "hadn't finished", explanation: "Hadn't finished.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["I had paid my bills before the power went out.", "I have paid my bills before the power had went out.", "I paid my bills after the power had went out.", "I had pay my bills."], correctAnswer: "I had paid my bills before the power went out.", explanation: "Had paid (evento 1) before went out (evento 2).", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'Had you been working all night before the launch?'", options: ["Yes, I had.", "Yes, I was.", "Yes, I did.", "Yes, I have."], correctAnswer: "Yes, I had.", explanation: "Resposta curta com Past Perfect usa 'had'.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Tell a story about a memorable day in the past when things happened in sequence (e.g. 'Before I started my job, I had traveled to...', 'When I arrived at the party, my friends had already...').",
      contextPt: "Conte uma história do passado conectando dois eventos usando 'had + particípio' e 'before/after/when'.",
      exampleAnswer: "Before I started my current career, I had lived in three different cities. When I graduated from university, I had already completed two professional internships, which helped me secure my dream job.",
      hints: ["Before I [passado simples], I had [particípio]...", "When I arrived, they had already..."]
    },
    plannerExerciseSuggestion: "Escreva uma narrativa de 4 frases sobre uma viagem ou dia de trabalho conectando eventos com 'had + particípio' e os conectivos 'before' e 'after'."
  },
  {
    id: 26,
    number: 26,
    title: "Future Perfect",
    subtitle: "Ações que Estarão Concluídas em um Ponto do Futuro",
    category: "Tempos Perfeitos",
    estimatedHours: 3,
    explanation: "O FUTURE PERFECT expressa uma ação que ESTARÁ CONCLUÍDA antes de um momento específico no futuro! A ideia central é olhar para o futuro e estabelecer um marco no tempo onde a tarefa já estará terminada. Fórmula: Sujeito + WILL HAVE + Verbo no Particípio + Cláusula Temporal (By the time..., In 5 months, By 2027, By then). Exemplo: 'I will have traveled the entire South America by the end of 2026' (Eu terei viajado por toda a América do Sul até o final de 2026). Versão contínua: 'I will have been working here for five years by next month'.",
    keyRules: [
      "Fórmula: Sujeito + will have + Verbo no Particípio + Cláusula Temporal",
      "Cláusulas Temporais: By the time (no momento em que), In (número de anos/meses), By then (até lá), By (tempo específico)",
      "Negativa: Sujeito + won't have + Verbo no Particípio (ex: Tom won't have completed the book by the deadline)",
      "Future Perfect Continuous: Will have been + Verbo-ING (ex: By 2027, they will have been living in London for a decade)"
    ],
    videoUrl: "https://drive.google.com/file/d/1_M_01-jTBgq0Okb5C9qhqJ2Ze7GZo8Gr/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I will have traveled the entire South America by the end of 2026.", pt: "Eu terei viajado por toda a América do Sul até o final de 2026.", highlightWord: "will have traveled" },
        { en: "She will have completed the work when the boss arrives.", pt: "Ela terá completado o trabalho quando o chefe chegar.", highlightWord: "will have completed" },
        { en: "My mother will have visited me by the end of next summer.", pt: "Minha mãe terá me visitado até o final do próximo verão.", highlightWord: "will have visited" },
        { en: "Steven will have recovered from the accident in five months time.", pt: "Steven terá se recuperado do acidente em cinco meses.", highlightWord: "will have recovered" },
        { en: "By next month, I will have been working here for five years.", pt: "Até o mês que vem, eu estarei trabalhando aqui há cinco anos.", highlightWord: "will have been working" }
      ],
      negatives: [
        { en: "Tom won't have completed the book by the end of the deadline.", pt: "Tom não terá completado o livro até o fim do prazo.", highlightWord: "won't have completed" },
        { en: "We won't have finished the renovation by Friday.", pt: "Nós não teremos terminado a reforma até sexta-feira.", highlightWord: "won't have finished" }
      ],
      interrogatives: [
        { en: "Will Mike have fixed the kitchen sink by nighttime?", pt: "O Mike terá consertado a pia da cozinha até a noite?", highlightWord: "Will Mike have fixed" },
        { en: "Will you have been traveling for a long time when you get to Japan?", pt: "Você estará viajando há muito tempo quando chegar ao Japão?", highlightWord: "Will you have been traveling" }
      ]
    },
    illustratedStory: {
      title: "A Meta de Formatura de 2027",
      storyEn: "Beatriz is studying hard for her medical degree. By December 2027, she will have completed all her hospital rotations and she will have passed all final examinations. Her family will be there to celebrate her triumph!",
      storyPt: "Beatriz está estudando duro para o seu diploma de medicina. Até dezembro de 2027, ela terá completado todos os seus plantões hospitalares e terá passado em todos os exames finais. Sua família estará lá para celebrar seu triunfo!",
      highlightSentence: "By 2027, she will have completed all rotations and passed all examinations.",
      visualTheme: "graduation",
      tags: ["Future Goals", "Deadlines", "Future Perfect"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a fórmula do Future Perfect?", options: ["will have + verbo no particípio", "will + verbo no infinitivo", "have + will + particípio", "will be + verbo-ing"], correctAnswer: "will have + verbo no particípio", explanation: "Will have + particípio passado do verbo.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'By 2028, I _____ (terei me formado) from university.'", options: ["will have graduated", "will graduate", "have graduated", "will had graduated"], correctAnswer: "will have graduated", explanation: "Ação concluída até um ponto futuro: will have graduated.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a expressão de tempo 'Até lá': 'By _____.'", correctAnswer: "then", explanation: "'By then' significa até lá / até então.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete a negação: 'He _____ (não terá terminado) the report by noon.'", options: ["won't have finished", "won't finish have", "haven't finished will", "will not to finish"], correctAnswer: "won't have finished", explanation: "Won't have finished.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha: 'She will have _____ (completado) all tasks when the manager arrives.'", correctAnswer: "completed", explanation: "O particípio de complete é completed.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'Você terá lido o livro até amanhã?'", options: ["Will you have read the book by tomorrow?", "Have you will read the book by tomorrow?", "Will you read have the book?", "Do you will have read?"], correctAnswer: "Will you have read the book by tomorrow?", explanation: "Will you have read... by tomorrow?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete o Future Perfect Continuous: 'By next year, they _____ (estarão morando) in London for a decade.'", options: ["will have been living", "will be living for", "will have lived continuous", "have been will living"], correctAnswer: "will have been living", explanation: "Will have been living.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete com a partícula de tempo: '_____ the time the plane lands, we will have been flying for 10 hours.' (No momento em que)", correctAnswer: "By", explanation: "'By the time' significa no momento em que.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual frase expressa o Future Perfect corretamente?", options: ["I will have achieved my fluency goal by the end of this year.", "I will achieved my fluency goal by the end of this year.", "I have will achieved my fluency goal.", "I will having achieved my goal."], correctAnswer: "I will have achieved my fluency goal by the end of this year.", explanation: "I will have achieved...", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente 'Sim, eu terei' para 'Will you have finished?'", options: ["Yes, I will have.", "Yes, I will.", "Yes, I have.", "Yes, I did."], correctAnswer: "Yes, I will have.", explanation: "Resposta curta no Future Perfect: 'Yes, I will have.' (ou 'Yes, I will.').", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Think about your life in 2 years: What will you have achieved, where will you have traveled, and how much English will you have mastered?",
      contextPt: "Fale sobre marcos que você terá concluído no futuro usando 'By [ano], I will have mastered...', 'I will have visited...'.",
      exampleAnswer: "By 2028, I will have achieved complete fluency in English and I will have moved into my new apartment. I will also have visited two English-speaking countries for business and vacation.",
      hints: ["By next year, I will have...", "I will have completed...", "I will have earned..."]
    },
    plannerExerciseSuggestion: "Escreva 4 metas de longo prazo com datas específicas usando 'By [data], I will have + Particípio' (ex: 'By December, I will have finished all 30 units of Insight English')."
  },
  {
    id: 27,
    number: 27,
    title: "If Clauses: Zero Conditional",
    subtitle: "Fatos Científicos, Leis da Natureza e Causalidades Inevitáveis",
    category: "Condicionais",
    estimatedHours: 1,
    explanation: "As IF CLAUSES expressam condições e suas consequências. O ZERO CONDITIONAL é a condicional dos fatos universais, verdades científicas e leis da natureza: se o Evento 1 acontece, o Evento 2 SEMPRE acontecerá, sem exceção! Fórmula simples e elegante: IF + Presente Simples, Presente Simples. Exemplos clássicos: 'If you heat ice, it melts' (Se você esquenta gelo, ele derrete), 'If you jump into a volcano, you die', 'If the wind is too strong, the boat sinks'.",
    keyRules: [
      "Fórmula: IF + Simple Present, Simple Present",
      "Foco: Fatos 100% universais, verdades científicas e regras absolutas",
      "A ordem das frases pode ser invertida: 'If you heat ice, it melts' = 'Ice melts if you heat it' (sem vírgula na ordem invertida!)",
      "Exemplos: If I don't fill up the gas tank, I don't drive."
    ],
    videoUrl: "https://drive.google.com/file/d/1k--7VvLSVhqYw_1sSBSgXxfEqzLrSVZU/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "If you heat ice, it melts.", pt: "Se você esquenta gelo, ele derrete.", highlightWord: "heat ... melts" },
        { en: "If you jump into a volcano, you die.", pt: "Se você pula em um vulcão, você morre.", highlightWord: "jump ... die" },
        { en: "If the oven is too hot, the bread burns.", pt: "Se o forno está muito quente, o pão queima.", highlightWord: "is ... burns" },
        { en: "If the wind is too strong, the boat sinks.", pt: "Se o vento é muito forte, o barco afunda.", highlightWord: "is ... sinks" }
      ],
      negatives: [
        { en: "If you jump from an airplane without a parachute, you don't survive.", pt: "Se você pula de um avião sem paraquedas, você não sobrevive.", highlightWord: "don't survive" },
        { en: "If I don't fill up the gas tank, I don't drive.", pt: "Se eu não encho o tanque, eu não dirijo.", highlightWord: "don't fill ... don't drive" },
        { en: "Plants die if they don't get water.", pt: "Plantas morrem se elas não recebem água.", highlightWord: "don't get" }
      ],
      interrogatives: [
        { en: "Does water boil if it reaches 100 degrees Celsius?", pt: "A água ferve se atinge 100 graus Celsius?", highlightWord: "Does water boil" },
        { en: "What happens if you mix red and yellow?", pt: "O que acontece se você mistura vermelho e amarelo?", highlightWord: "What happens if" }
      ]
    },
    illustratedStory: {
      title: "A Aula de Ciências",
      storyEn: "Professor Wilson placed an ice cube on a hot pan. 'Watch closely, students', he said. 'If you heat ice, it melts immediately into water. And if water reaches 100 degrees, it evaporates into steam!' The classroom was fascinated.",
      storyPt: "O professor Wilson colocou um cubo de gelo em uma panela quente. 'Observem atentamente, alunos', disse ele. 'Se você esquenta o gelo, ele derrete imediatamente em água. E se a água atinge 100 graus, ela evapora em vapor!' A sala de aula ficou fascinada.",
      highlightSentence: "If you heat ice, it melts into water and evaporates.",
      visualTheme: "science",
      tags: ["Science", "Facts", "Zero Conditional"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual a estrutura do Zero Conditional?", options: ["If + Simple Present, Simple Present", "If + Simple Present, will + verbo", "If + Simple Past, would + verbo", "If + Past Perfect, would have + particípio"], correctAnswer: "If + Simple Present, Simple Present", explanation: "Ambas as orações ficam no presente simples.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'If you heat water to 100°C, it _____ (ferve).' (boil)", options: ["boils", "will boil", "boiled", "would boil"], correctAnswer: "boils", explanation: "Fato científico no presente simples: boils.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete: 'If you don't water plants, they _____ (morrem).' (die)", correctAnswer: "die", explanation: "They die.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'If the oven _____ (estar) too hot, the cake burns.'", options: ["is", "will be", "was", "would be"], correctAnswer: "is", explanation: "If the oven is too hot...", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'If I don't sleep 8 hours, I _____ (não funciono) well.' (don't work)", correctAnswer: "don't work", explanation: "I don't work well.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual frase expressa uma verdade universal em Zero Conditional?", options: ["If you mix blue and yellow, you get green.", "If you will mix blue and yellow, you will get green.", "If you mixed blue and yellow, you got green.", "If you mix blue, you got yellow."], correctAnswer: "If you mix blue and yellow, you get green.", explanation: "Fato incontestável: If you mix... you get...", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'Ice _____ (derrete) if you put it in the sun.'", options: ["melts", "melted", "will melt", "is melting"], correctAnswer: "melts", explanation: "Ice melts if you put it in the sun.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete com o verbo no presente: 'If you press this button, the machine _____ (liga).' (starts)", correctAnswer: "starts", explanation: "The machine starts.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Quando invertemos a ordem ('Ice melts if you heat it'), usamos vírgula?", options: ["Não, quando a oração com 'if' vem depois, não usamos vírgula.", "Sim, a vírgula é obrigatória sempre.", "Apenas com perguntas.", "Sim, antes de 'if'."], correctAnswer: "Não, quando a oração com 'if' vem depois, não usamos vírgula.", explanation: "Sem vírgula quando o 'if' está no meio da frase.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'People get hungry if they _____ (não comem).' (don't eat)", options: ["don't eat", "won't eat", "didn't eat", "aren't eat"], correctAnswer: "don't eat", explanation: "If they don't eat.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What are some general truths or biological facts about your daily routine (e.g., 'If I drink coffee late at night, I don't sleep well', 'If it rains, the traffic gets slow')?",
      contextPt: "Formule fatos e reações imediatas da sua rotina usando o Zero Conditional ('If I [presente], I [presente]').",
      exampleAnswer: "If I drink coffee after 6 PM, I don't sleep well at night. Also, if I exercise in the morning, I feel energized and focused throughout the entire day.",
      hints: ["If I exercise, I feel...", "If it rains in my city, the streets become...", "If you study daily, you learn faster."]
    },
    plannerExerciseSuggestion: "Escreva 5 fatos do seu dia a dia usando Zero Conditional: 2 sobre saúde/alimentação, 2 sobre trabalho/estudos e 1 sobre o clima."
  },
  {
    id: 28,
    number: 28,
    title: "If Clauses: First Conditional",
    subtitle: "Possibilidades Reais e Consequências Futuras no Mundo Real",
    category: "Condicionais",
    estimatedHours: 2,
    explanation: "O FIRST CONDITIONAL lida com o mundo real das escolhas e planos futuros: temos uma situação real e várias opções de resultados disponíveis! Na parte da condição usamos IF + PRESENTE SIMPLES. Na parte do resultado usamos Modais de Futuro e Possibilidade: 1) WILL para consequências certas ('If I have a car, I will travel'); 2) CAN para possibilidades práticas ('If I have a car, I can visit all my friends'); 3) MAY / MIGHT para opções opcionais ('If I have a car, I may start a new hobby').",
    keyRules: [
      "Fórmula: IF + Simple Present, WILL / CAN / MAY + Verbo no infinitivo",
      "Foco: Situações reais e altamente prováveis de acontecer no futuro",
      "Will = consequência certa | Can = possibilidade disponível | May = opção facultativa",
      "Exemplo: If I buy a car, I can travel faster. If I study hard, I will pass the exam."
    ],
    videoUrl: "https://drive.google.com/file/d/1FW8zRQbgVX0iCGwaYFM40wm6nt_1g1uP/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "If I have a car, I can travel the world with it.", pt: "Se eu tenho um carro, eu posso viajar o mundo com ele.", highlightWord: "can travel" },
        { en: "If I buy a car, I can use it to buy bread in my favorite bakery.", pt: "Se eu compro um carro, posso usá-lo para comprar pão na minha padaria favorita.", highlightWord: "can use" },
        { en: "If I have a car, I will be more comfortable when I travel.", pt: "Se eu tenho um carro, ficarei mais confortável quando viajar.", highlightWord: "will be" },
        { en: "If I study English every day, I will become fluent.", pt: "Se eu estudar inglês todos os dias, eu ficarei fluente.", highlightWord: "will become" },
        { en: "If you go to the beach, you will get sunburnt.", pt: "Se você vai à praia, você se queimará no sol.", highlightWord: "will get" }
      ],
      negatives: [
        { en: "If I have a car, I won't need to walk to work.", pt: "Se eu tenho um carro, não precisarei caminhar para o trabalho.", highlightWord: "won't need" },
        { en: "If I don't go to the beach, I can play video games.", pt: "Se eu não vou à praia, posso jogar videogame.", highlightWord: "can play" },
        { en: "If you don't hurry, you will miss the train.", pt: "Se você não se apressar, perderá o trem.", highlightWord: "will miss" }
      ],
      interrogatives: [
        { en: "What will you do if it rains tomorrow?", pt: "O que você fará se chover amanhã?", highlightWord: "What will you do if" },
        { en: "If you get a bonus, will you travel abroad?", pt: "Se você receber um bônus, você viajará para o exterior?", highlightWord: "will you travel" }
      ]
    },
    illustratedStory: {
      title: "O Dilema do Fim de Semana",
      storyEn: "Lucas is planning his Saturday. 'If the weather is sunny, I will go to the beach with my friends and swim in the ocean. But if it rains, I can stay at home and play video games all afternoon!' Both options sound great.",
      storyPt: "Lucas está planejando seu sábado. 'Se o tempo estiver ensolarado, eu irei para a praia com meus amigos e nadarei no oceano. Mas se chover, eu posso ficar em casa e jogar videogame a tarde toda!' Ambas as opções parecem ótimas.",
      highlightSentence: "If it is sunny, I will go to the beach. But if it rains, I can play video games.",
      visualTheme: "weekend",
      tags: ["Plans", "Real Possibility", "First Conditional"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a fórmula do First Conditional?", options: ["If + Simple Present, will/can/may + Verbo base", "If + Simple Past, would + Verbo base", "If + will, will", "If + Present, Present"], correctAnswer: "If + Simple Present, will/can/may + Verbo base", explanation: "If + presente simples, will/can/may + verbo.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'If you study hard, you _____ (passará) the exam.'", options: ["will pass", "pass", "passed", "would pass"], correctAnswer: "will pass", explanation: "Consequência futura real: will pass.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a oração com 'if' no presente: 'If it _____ (rain) tomorrow, we will stay home.'", correctAnswer: "rains", explanation: "Terceira pessoa no presente: rains.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'If I buy a car, I _____ visit my distant relatives.' (possibilidade/opção)", options: ["can", "am", "was", "did"], correctAnswer: "can", explanation: "I can visit...", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação futura: 'If you leave early, you _____ (não se atrasará).' (won't be late)", correctAnswer: "won't be late", explanation: "You won't be late.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'O que você fará se perder o ônibus?'", options: ["What will you do if you miss the bus?", "What do you will do if you miss the bus?", "What would you did if you miss?", "What will you to do?"], correctAnswer: "What will you do if you miss the bus?", explanation: "What will you do if you miss the bus?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Podemos colocar 'will' dentro da cláusula com 'if' (ex: 'If I will have time')?", options: ["Não, a cláusula com 'if' deve ficar no presente simples.", "Sim, é comum.", "Apenas com pronomes no plural.", "Sim, sempre."], correctAnswer: "Não, a cláusula com 'if' deve ficar no presente simples.", explanation: "A regra proíbe 'will' imediatamente após o 'if' ('If I have time', não 'If I will have').", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete: 'If we save money this year, we _____ (viajaremos) to Europe.' (will travel)", correctAnswer: "will travel", explanation: "We will travel to Europe.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Complete: 'If she _____ (não ligar) today, I will send her an email.'", options: ["doesn't call", "don't call", "won't call", "not call"], correctAnswer: "doesn't call", explanation: "Presente simples negativo com 'she': doesn't call.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Qual frase está perfeita?", options: ["If you help me, I will help you.", "If you will help me, I will help you.", "If you helped me, I will help you.", "If you help me, I helped you."], correctAnswer: "If you help me, I will help you.", explanation: "If you help me, I will help you.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What will you do if the weather is beautiful this weekend, and what will you do if it rains?",
      contextPt: "Pratique o First Conditional criando planos alternativos para o fim de semana com 'If it is sunny, I will...' e 'If it rains, I will...'.",
      exampleAnswer: "If the weather is sunny and warm this weekend, I will go to the city park with my dog and ride my bicycle. However, if it rains, I can prepare hot chocolate and watch Netflix at home.",
      hints: ["If the weather is sunny, I will...", "If my friends are free, we can...", "If I finish my studies early, I may..."]
    },
    plannerExerciseSuggestion: "Escreva 5 frases com First Conditional sobre suas metas: 'If I study 30 minutes every day, I will...', 'If I complete this course, I will be able to...'."
  },
  {
    id: 29,
    number: 29,
    title: "If Clauses: Second Conditional",
    subtitle: "Hipóteses Imaginárias no Presente/Futuro e a Regra do 'If I were'",
    category: "Condicionais",
    estimatedHours: 2,
    explanation: "O SECOND CONDITIONAL transporta nossa conversa para o mundo da imaginação e das hipóteses: cenários que NÃO são reais agora, mas que gostaríamos de especular o resultado! Fórmula: IF + Passado Simples, WOULD / COULD / MIGHT + Verbo base. Exemplo: 'If I had a car (mas na realidade não tenho!), I could travel the world with it'. REGRA DE OURO DO VERBO TO BE: Na linguagem formal e padrão, para hipóteses imaginárias, usamos SEMPRE 'WERE' para todos os pronomes (If I were, If she were, If he were)! Exemplo: 'If I were you, I would study English every day!'.",
    keyRules: [
      "Fórmula: IF + Simple Past (hipótese), WOULD / COULD / MIGHT + Verbo base",
      "Foco: Situações irreais, imaginárias ou hipotéticas no presente/futuro",
      "Regra do 'To Be': Usa-se 'WERE' para todas as pessoas ('If I were', 'If she were', 'If he were')",
      "Exemplo célebre: 'If I were you, I would take that job opportunity.'"
    ],
    videoUrl: "https://drive.google.com/file/d/1upLQM45jeaxQzIPLJYvVmeu9ZA5M2Qgo/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "If I had a car, I could travel the world with it.", pt: "Se eu tivesse um carro, eu poderia viajar o mundo com ele.", highlightWord: "had ... could travel" },
        { en: "If I had a car, I would be more comfortable when I traveled.", pt: "Se eu tivesse um carro, ficaria mais confortável quando viajasse.", highlightWord: "had ... would be" },
        { en: "If I were rich, I would buy a house by the beach.", pt: "Se eu fosse rico, eu compraria uma casa na praia.", highlightWord: "were ... would buy" },
        { en: "If she were here, she would help us.", pt: "Se ela estivesse aqui, ela nos ajudaria.", highlightWord: "were ... would help" },
        { en: "If I went to the beach, I would buy coconut water.", pt: "Se eu fosse para a praia, eu compraria água de coco.", highlightWord: "went ... would buy" }
      ],
      negatives: [
        { en: "If I had a car, I wouldn't need to walk to work.", pt: "Se eu tivesse um carro, não precisaria caminhar para o trabalho.", highlightWord: "wouldn't need" },
        { en: "If I were you, I wouldn't worry about that.", pt: "Se eu fosse você, eu não me preocuparia com isso.", highlightWord: "wouldn't worry" },
        { en: "She wouldn't be late if she lived closer.", pt: "Ela não se atrasaria se morasse mais perto.", highlightWord: "wouldn't be" }
      ],
      interrogatives: [
        { en: "What would you do if you won the lottery?", pt: "O que você faria se ganhasse na loteria?", highlightWord: "What would you do if" },
        { en: "If you could live anywhere, where would you go?", pt: "Se você pudesse morar em qualquer lugar, onde você iria?", highlightWord: "If you could ... where would you go" }
      ]
    },
    illustratedStory: {
      title: "E se Eu Fosse Presidente?",
      storyEn: "In the debate class, students imagined hypothetical futures. Samuel raised his hand: 'If I were the president of my country, I would invest heavily in public education and clean energy. I would make English learning free for every citizen!'",
      storyPt: "Na aula de debates, os alunos imaginaram futuros hipotéticos. Samuel levantou a mão: 'Se eu fosse o presidente do meu país, eu investiria pesado em educação pública e energia limpa. Eu tornaria o aprendizado de inglês gratuito para todos os cidadãos!'",
      highlightSentence: "If I were president, I would invest in education and make English free.",
      visualTheme: "debate",
      tags: ["Hypothesis", "If I were", "Second Conditional"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a estrutura correta do Second Conditional?", options: ["If + Simple Past, would + Verbo base", "If + Simple Present, will + Verbo base", "If + Past Perfect, would have + particípio", "If + will, would"], correctAnswer: "If + Simple Past, would + Verbo base", explanation: "If + passado simples (hipótese), would + verbo base.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual a forma correta do verbo 'To Be' na hipótese 'Se eu fosse você...'?", options: ["If I were you...", "If I was you...", "If I am you...", "If I be you..."], correctAnswer: "If I were you...", explanation: "Em hipóteses condicionais, o padrão formal usa 'were' para 'I'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete com o passado de 'have': 'If I _____ (ter) more free time, I would learn Italian.'", correctAnswer: "had", explanation: "O passado simples de have é 'had'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'If she lived in New York, she _____ (visitaria) Central Park every day.'", options: ["would visit", "will visit", "visits", "visited"], correctAnswer: "would visit", explanation: "Consequência hipotética: would visit.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'If I had a car, I _____ (não precisaria) to take the bus.' (wouldn't need)", correctAnswer: "wouldn't need", explanation: "I wouldn't need to take the bus.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'O que você faria se tivesse asas?'", options: ["What would you do if you had wings?", "What will you do if you had wings?", "What do you do if you have wings?", "What did you do if you have wings?"], correctAnswer: "What would you do if you had wings?", explanation: "What would you do if you had wings?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete com o To Be hipotético para 'She': 'If she _____ (estivesse) here, she would know what to do.'", options: ["were", "is", "was been", "be"], correctAnswer: "were", explanation: "If she were here (hipótese com To Be).", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete: 'If we _____ (soubéssemos) the answer, we would tell you.' (passado de know: knew)", correctAnswer: "knew", explanation: "If we knew the answer...", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual frase expressa o Second Conditional perfeitamente?", options: ["If I won a million dollars, I would travel the world.", "If I win a million dollars, I would travel the world.", "If I will win, I will travel.", "If I had win, I would travel."], correctAnswer: "If I won a million dollars, I would travel the world.", explanation: "If I won (passado), I would travel (would + verbo).", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'I _____ (compraria) that jacket if it were cheaper.'", options: ["would buy", "will buy", "bought", "buyed"], correctAnswer: "would buy", explanation: "I would buy that jacket if it were cheaper.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "If you could have any superpower in the world (flying, invisibility, time travel, teleportation), which one would you choose and what would you do with it?",
      contextPt: "Responda à situação hipotética usando o Second Conditional ('If I had..., I would...').",
      exampleAnswer: "If I could choose any superpower, I would choose teleportation. If I had the ability to teleport, I would have breakfast in Paris, lunch in Tokyo, and spend the evening watching the sunset in Rio de Janeiro!",
      hints: ["If I had the power to...", "I would travel to...", "If I were invisible, I would..."]
    },
    plannerExerciseSuggestion: "Escreva 5 cenários imaginários com 'If + Passado, would...': 'If I won the lottery...', 'If I met my favorite celebrity...', 'If I lived in London...'."
  },
  {
    id: 30,
    number: 30,
    title: "If Clauses: Third Conditional",
    subtitle: "O Passado Impossível, Arrependimentos e Especulações Históricas",
    category: "Condicionais",
    estimatedHours: 3,
    explanation: "O THIRD CONDITIONAL é a condicional do passado que já não pode mais ser mudado: o evento já aconteceu (ou não aconteceu) e ficamos especulando sobre como as coisas teriam sido diferentes! Fórmula: IF + PAST PERFECT (had + particípio), WOULD / COULD / MIGHT HAVE + Verbo no Particípio. Exemplo: 'If I had gone to the beach, I could have surfed all afternoon and bought something nice to eat' (mas a realidade foi: eu não fui à praia e fiquei jogando videogame o dia todo!). É a estrutura definitiva para expressar lições aprendidas e hipóteses sobre o passado.",
    keyRules: [
      "Fórmula: IF + Had + Particípio, WOULD / COULD / MIGHT HAVE + Particípio",
      "Foco: Especulações sobre o passado que é impossível de ser alterado",
      "Could have = teria sido possível fazer | Would have = teria feito com certeza",
      "Exemplo: 'If I had studied harder, I would have passed the test.' (mas não estudei o suficiente no passado!)"
    ],
    videoUrl: "https://drive.google.com/file/d/1NCkOOXI-d5vYrl94hGQ0pc_7GK9wGbjd/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "If I had gone to the beach, I could have surfed all afternoon.", pt: "Se eu tivesse ido à praia, eu poderia ter surfado a tarde toda.", highlightWord: "had gone ... could have surfed" },
        { en: "If I had studied harder, I would have passed the exam.", pt: "Se eu tivesse estudado mais, eu teria passado no exame.", highlightWord: "had studied ... would have passed" },
        { en: "If we had left earlier, we would have caught the train.", pt: "Se tivéssemos saído mais cedo, teríamos pego o trem.", highlightWord: "had left ... would have caught" },
        { en: "She would have won the race if she hadn't tripped.", pt: "Ela teria vencido a corrida se não tivesse tropeçado.", highlightWord: "would have won" }
      ],
      negatives: [
        { en: "If I hadn't lost my keys, I wouldn't have been locked outside.", pt: "Se eu não tivesse perdido minhas chaves, não teria ficado trancado do lado de fora.", highlightWord: "hadn't lost ... wouldn't have been" },
        { en: "We wouldn't have missed the flight if the alarm had sounded.", pt: "Não teríamos perdido o voo se o despertador tivesse tocado.", highlightWord: "wouldn't have missed" }
      ],
      interrogatives: [
        { en: "What would you have done if you had found a lost wallet?", pt: "O que você teria feito se tivesse encontrado uma carteira perdida?", highlightWord: "What would you have done if" },
        { en: "Would they have helped us if we had asked them?", pt: "Eles teriam nos ajudado se tivéssemos pedido a eles?", highlightWord: "Would they have helped" }
      ]
    },
    illustratedStory: {
      title: "O Dia em que Não Fui à Praia",
      storyEn: "Eduardo decided not to go to the beach on Saturday. In the evening, his friends showed him photos of incredible waves and a stunning sunset. Eduardo sighed: 'If I had gone with you guys, I would have taken wonderful photos and we would have had so much fun together!'",
      storyPt: "Eduardo decidiu não ir à praia no sábado. À noite, seus amigos lhe mostraram fotos de ondas incríveis e um pôr do sol deslumbrante. Eduardo suspirou: 'Se eu tivesse ido com vocês, eu teria tirado fotos maravilhosas e teríamos nos divertido tanto juntos!'",
      highlightSentence: "If I had gone to the beach, I would have taken wonderful photos.",
      visualTheme: "beach",
      tags: ["Regret", "Past Hypothesis", "Third Conditional"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a fórmula correta do Third Conditional?", options: ["If + had + particípio, would have + particípio", "If + simple past, would + verbo base", "If + present, will have + particípio", "If + had, had"], correctAnswer: "If + had + particípio, would have + particípio", explanation: "If + Past Perfect (had + particípio), would have + particípio passado.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'If I had known about the meeting, I _____ (teria ido).' (attend)", options: ["would have attended", "would attend", "will have attended", "had attended"], correctAnswer: "would have attended", explanation: "Would have attended.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a cláusula 'if': 'If we _____ (ter) left 10 minutes earlier, we wouldn't have missed the flight.' (had left)", correctAnswer: "had", explanation: "If we had left...", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'If she hadn't been sick, she _____ (poderia ter vindo).' (could have come)", options: ["could have come", "could come", "can have come", "could has come"], correctAnswer: "could have come", explanation: "Could have come (particípio de come é come).", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'I _____ (não teria comprado) this car if I had known about its problems.' (wouldn't have bought)", correctAnswer: "wouldn't have bought", explanation: "Wouldn't have bought.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'O que você teria feito se estivesse no meu lugar no passado?'", options: ["What would you have done if you had been in my place?", "What would you do if you were in my place?", "What will you have done if you were?", "What did you have done?"], correctAnswer: "What would you have done if you had been in my place?", explanation: "What would you have done if you had been...", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase expressa o Third Conditional perfeitamente?", options: ["If I had practiced more, I would have played better.", "If I practiced more, I would have played better.", "If I have practiced, I would play better.", "If I had practice, I would have play."], correctAnswer: "If I had practiced more, I would have played better.", explanation: "If I had practiced (had + particípio), I would have played (would have + particípio).", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete com o particípio de 'see': 'If you had _____ the accident, you would have called the police.'", correctAnswer: "seen", explanation: "See -> saw -> seen.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "O Third Conditional pode mudar os fatos reais do passado?", options: ["Não, ele é puramente hipotético sobre eventos passados que já aconteceram.", "Sim, ele altera o tempo real.", "Apenas se for em formato afirmativo.", "Sim, em linguagem formal."], correctAnswer: "Não, ele é puramente hipotético sobre eventos passados que já aconteceram.", explanation: "Expressa especulação sobre o que 'teria sido' se o passado fosse diferente.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'They _____ (teriam chegado) on time if the train hadn't broken down.'", options: ["would have arrived", "would arrive", "will have arrived", "had arrived"], correctAnswer: "would have arrived", explanation: "Would have arrived.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Think about an interesting decision in your past (career choice, trip, or opportunity): If you had chosen a different path, how would your life have been different?",
      contextPt: "Reflita sobre uma escolha do passado usando o Third Conditional ('If I had [particípio]..., I would have [particípio]...').",
      exampleAnswer: "If I hadn't decided to study technology five years ago, I would probably have worked in a different sector. That decision completely changed my life, and I am very happy I made it!",
      hints: ["If I hadn't moved to...", "If I had accepted that offer, I would have lived in...", "We would have had fun if..."]
    },
    plannerExerciseSuggestion: "Escreva 4 frases refletindo sobre escolhas passadas com Third Conditional ('If I had studied English earlier, I would have...', 'If I hadn't met my friends, I wouldn't have...')."
  }
];
