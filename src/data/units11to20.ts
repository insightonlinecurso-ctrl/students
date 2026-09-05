import { GrammarUnit } from '../types';

export const UNITS_11_TO_20: GrammarUnit[] = [
  {
    id: 11,
    number: 11,
    title: "Genitive Case 2: Quando usar",
    subtitle: "Regras Avançadas, Plurais, Coletivos e Nomes com 'S'",
    category: "Caso Genitivo",
    estimatedHours: 2,
    explanation: "Regra geral: o Genitive Case é usado apenas com PESSOAS e seres animados, NÃO com coisas (ex: 'the car door', e não 'the car's door'). Exceções famosas: localidades/cidades ('New York's theater'), corpos celestes ('Saturn's rings'), e medidas de tempo/peso ('a pound's weight'). Posse compartilhada: quando duas pessoas compartilham o mesmo objeto, colocamos 's apenas no último nome (ex: 'Anna and Tom's cat is black'). Mas se cada um tem o seu próprio, ambos recebem 's (ex: 'Anna's and Tom's cats are black'). Plurais regulares com 's' recebem apenas o apóstrofo no final ('The boys' father', 'The girls' dresses'). Plurais irregulares recebem 's normalmente ('The children's house', 'The women's bathroom'). Nomes terminados em s (ex: Carlos) podem usar Carlos's ou Carlos'.",
    keyRules: [
      "Coisas inanimadas: invertemos a posição sem 's (ex: The car door, The table leg)",
      "Exceções com 's: Cidades/Países (New York's skyline), Planetas (Saturn's rings), Tempo (Yesterday's news)",
      "Posse conjunta (1 objeto compartilhado): Anna and Tom's cat",
      "Posse separada (cada um tem o seu): Anna's and Tom's cats",
      "Plurais com 'S': só ganham apóstrofo no final (The boys' father, The teachers' room)",
      "Plurais irregulares (sem 'S'): ganham 's normal (The children's toys, The women's room)",
      "Nomes terminados em 's': Carlos's chair ou Carlos' chair (ambos aceitos!)"
    ],
    videoUrl: "https://drive.google.com/file/d/1InsightEnglish_Unit11_Sample/preview",
    examples: {
      affirmatives: [
        { en: "New York's theater scene is famous.", pt: "O cenário teatral de Nova York é famoso.", highlightWord: "New York's" },
        { en: "Anna and Tom's cat is black.", pt: "O gato da Anna e do Tom é preto.", highlightWord: "Anna and Tom's" },
        { en: "Anna's and Tom's cats are black.", pt: "Os gatos da Anna e do Tom são pretos.", highlightWord: "Anna's and Tom's" },
        { en: "The children's house is big.", pt: "A casa das crianças é grande.", highlightWord: "children's" },
        { en: "The boys' father is waiting outside.", pt: "O pai dos meninos está esperando lá fora.", highlightWord: "boys'" },
        { en: "Carlos's chair is very comfortable.", pt: "A cadeira do Carlos é muito confortável.", highlightWord: "Carlos's" }
      ],
      negatives: [
        { en: "The girls' dresses weren't dirty.", pt: "Os vestidos das meninas não estavam sujos.", highlightWord: "girls'" },
        { en: "The women's bathroom isn't closed.", pt: "O banheiro feminino não está fechado.", highlightWord: "women's" },
        { en: "The car door wasn't locked.", pt: "A porta do carro não estava trancada.", highlightWord: "car door" }
      ],
      interrogatives: [
        { en: "Whose spoon is this? - This is Johnny's spoon.", pt: "De quem é essa colher? - Essa é a colher do Johnny.", highlightWord: "Johnny's" },
        { en: "Did Anna's cousin move to Canada?", pt: "O primo da Anna se mudou para o Canadá?", highlightWord: "Anna's" },
        { en: "Is Lucas' sister coming to the party?", pt: "A irmã do Lucas vem para a festa?", highlightWord: "Lucas'" }
      ]
    },
    illustratedStory: {
      title: "O Aniversário dos Gêmeos",
      storyEn: "Tom and Anna are twins. Today is Tom and Anna's birthday party! All the children's parents arrived with gifts. The boys' soccer coach was there, and the girls' dance teacher brought balloons.",
      storyPt: "Tom e Anna são gêmeos. Hoje é a festa de aniversário do Tom e da Anna! Todos os pais das crianças chegaram com presentes. O treinador de futebol dos meninos estava lá, e a professora de dança das meninas trouxe balões.",
      highlightSentence: "It is Tom and Anna's birthday and all the children's parents are here.",
      visualTheme: "party",
      tags: ["Plurals", "Joint Possession", "Celebration"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como se diz 'A porta do carro' (objeto inanimado)?", options: ["The car door", "The car's door", "The door's car", "The door of car"], correctAnswer: "The car door", explanation: "Para coisas inanimadas, não usamos 's, invertemos: The car door.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Se Pedro e Luiza dividem o mesmo apartamento, como escrevemos?", options: ["Pedro and Luiza's apartment", "Pedro's and Luiza's apartment", "Pedro's and Luiza apartment", "Pedro and Luiza apartment"], correctAnswer: "Pedro and Luiza's apartment", explanation: "Posse conjunta: o apóstrofo 's vai somente no último nome.", points: 10 },
      { id: 3, type: "multiple-choice", prompt: "Qual a forma correta para 'A sala dos professores' (teachers)?", options: ["The teachers' room", "The teachers's room", "The room of teachers", "The teacher's room"], correctAnswer: "The teachers' room", explanation: "Plural regular terminado em 's' recebe apenas o apóstrofo no final.", points: 10 },
      { id: 4, type: "fill-blank", prompt: "Complete com o plural irregular (children): 'The _____ (brinquedos das crianças) are on the floor.'", correctAnswer: "children's toys", explanation: "Children é irregular (não termina em s), portanto recebe 's: children's toys.", points: 10 },
      { id: 5, type: "multiple-choice", prompt: "Qual frase com cidade/localidade está correta?", options: ["London's parks are magnificent.", "The London park's are magnificent.", "Park's of London are magnificent.", "London parks' is magnificent."], correctAnswer: "London's parks are magnificent.", explanation: "Cidades e países são exceções aceitas no Genitive Case.", points: 10 },
      { id: 6, type: "fill-blank", prompt: "Complete: '_____ (A irmã do Carlos) is a doctor.' (Carlos)", correctAnswer: "Carlos's sister", explanation: "Carlos's sister (ou Carlos' sister).", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Se Mike e Julia têm carros separados (cada um tem o seu), como dizemos?", options: ["Mike's and Julia's cars are fast.", "Mike and Julia's cars are fast.", "Mike's and Julia car is fast.", "Mike and Julia car's are fast."], correctAnswer: "Mike's and Julia's cars are fast.", explanation: "Posse individual separada: ambos recebem 's.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Qual das frases abaixo está INCORRETA?", options: ["The house's roof was damaged.", "The roof of the house was damaged.", "The house roof was damaged.", "The car door is open."], correctAnswer: "The house's roof was damaged.", explanation: "Coisas inanimadas evitam 's (use 'the house roof' ou 'the roof of the house').", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Complete com o plural irregular de 'women' (banheiro feminino): 'The _____ bathroom.'", correctAnswer: "women's", explanation: "Women é irregular, portanto ganha 's: women's.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como se traduz 'Os anéis de Saturno'?", options: ["Saturn's rings", "The rings of Saturn's", "Saturn rings'", "Saturns' rings"], correctAnswer: "Saturn's rings", explanation: "Corpos celestes usam o caso genitivo: Saturn's rings.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Think about your friends or coworkers: What are some things they share together, and what are some things that belong to specific groups?",
      contextPt: "Use regras avançadas do caso genitivo (posse conjunta com 'and', plurais regulares ou cidades) em inglês.",
      exampleAnswer: "My brother and his wife's house is very cozy. On weekends, the children's playground is always full of happy kids. São Paulo's museums are also our favorite weekend destination.",
      hints: ["Use '[Name] and [Name]'s [item]'", "Use 'The children's...' or 'The teachers'...'"]
    },
    plannerExerciseSuggestion: "Pratique casos especiais de posse: escreva 1 frase com posse conjunta, 1 com posse separada, 1 com plural regular (ex: boys'), 1 com irregular (ex: women's) e 1 com uma cidade."
  },
  {
    id: 12,
    number: 12,
    title: "Modal Verb Will",
    subtitle: "O Futuro Simples no Inglês (Decisões, Previsões e Promessas)",
    category: "Modais",
    estimatedHours: 2,
    explanation: "WILL é o modal verb que cria o futuro simples no inglês! Ele não precisa de tradução direta isolada porque sua função é jogar o verbo seguinte para o futuro (I will go = eu irei). Características essenciais: 1) Nunca leva 'to' após ele (diga 'I will travel', nunca 'I will to travel'); 2) Na afirmativa, usamos as contrações sonoras: I'll, You'll, He'll, She'll, It'll, We'll, They'll; 3) Na negativa, 'will not' vira 'WON'T'; 4) Na interrogativa, 'Will' salta para o início da oração ('Will you come?'). Usamos Will para decisões tomadas no momento da fala, promessas, previsões do tempo e opiniões sobre o futuro!",
    keyRules: [
      "Afirmativa: Sujeito + will + Verbo no infinitivo sem 'to' (ex: I will travel to Europe next week)",
      "Contrações: I'll, You'll, He'll, She'll, It'll, We'll, They'll",
      "Negativa: Sujeito + won't (will not) + Verbo (ex: My brother won't eat sushi)",
      "Interrogativa: Will + Sujeito + Verbo? (ex: Will you help me? What will happen?)"
    ],
    videoUrl: "https://drive.google.com/file/d/1InsightEnglish_Unit12_Sample/preview",
    examples: {
      affirmatives: [
        { en: "I will travel to Spain next year.", pt: "Eu viajarei para a Espanha no próximo ano.", highlightWord: "will travel" },
        { en: "She will call you later.", pt: "Ela ligará para você mais tarde.", highlightWord: "will call" },
        { en: "We will buy a new house soon.", pt: "Nós compraremos uma casa nova em breve.", highlightWord: "will buy" },
        { en: "It will rain tomorrow.", pt: "Vai chover amanhã.", highlightWord: "will rain" },
        { en: "You will love this movie!", pt: "Você vai amar este filme!", highlightWord: "will love" }
      ],
      negatives: [
        { en: "My brother won't eat sushi.", pt: "Meu irmão não comerá sushi.", highlightWord: "won't eat" },
        { en: "She will not be happy with the news.", pt: "Ela não ficará feliz com a notícia.", highlightWord: "will not be" },
        { en: "I won't be late for the meeting.", pt: "Eu não me atrasarei para a reunião.", highlightWord: "won't be" }
      ],
      interrogatives: [
        { en: "Will you go to the bank?", pt: "Você irá ao banco?", highlightWord: "Will you go" },
        { en: "Will Mary visit her mother?", pt: "Mary visitará a mãe dela?", highlightWord: "Will Mary visit" },
        { en: "What will happen next Saturday?", pt: "O que acontecerá no próximo sábado?", highlightWord: "What will happen" },
        { en: "Where will you go this afternoon?", pt: "Onde você irá hoje à tarde?", highlightWord: "Where will you go" }
      ]
    },
    illustratedStory: {
      title: "Planos para a Nova Empresa",
      storyEn: "Next month, Gabriel will launch his tech startup. He will hire five developers and will rent a modern office in downtown. Will it be easy? No, but Gabriel says: 'We will work hard and we will succeed!'",
      storyPt: "No mês que vem, Gabriel lançará sua startup de tecnologia. Ele contratará cinco desenvolvedores e alugará um escritório moderno no centro. Será fácil? Não, mas Gabriel diz: 'Trabalharemos duro e teremos sucesso!'",
      highlightSentence: "Next month he will launch his company and we will succeed.",
      visualTheme: "business",
      tags: ["Future", "Goals", "Promises"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a contração negativa correta de 'will not'?", options: ["won't", "willn't", "wont't", "don't will"], correctAnswer: "won't", explanation: "'Will not' se contrai como 'won't'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'I _____ (ajudarei) you with your homework.'", options: ["will help", "will to help", "am help", "will helped"], correctAnswer: "will help", explanation: "Will é seguido do verbo na forma base sem 'to': will help.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a contração afirmativa: 'She _____ (She + will) call you tomorrow.'", correctAnswer: "She'll", explanation: "She + will = She'll.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Como se pergunta: 'Você virá para a minha festa?'", options: ["Will you come to my party?", "Do you will come to my party?", "Will you to come to my party?", "Are you will come to my party?"], correctAnswer: "Will you come to my party?", explanation: "Inicia-se com 'Will you come...?'", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'We _____ (não esqueceremos) your kindness.' (won't / will not)", correctAnswer: "won't forget", explanation: "Negação futura: won't forget.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual frase expressa uma previsão do tempo futura correta?", options: ["It will rain tomorrow morning.", "It will raining tomorrow morning.", "It will to rain tomorrow morning.", "It is will rain tomorrow morning."], correctAnswer: "It will rain tomorrow morning.", explanation: "It will rain.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'They _____ visit their grandparents next weekend.'", options: ["will", "will to", "shall to", "are will"], correctAnswer: "will", explanation: "Eles visitarão: They will visit.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete a pergunta: 'Where _____ you be next year?' (estará)", correctAnswer: "will", explanation: "Where will you be next year?", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual das opções está gramaticalmente incorreta?", options: ["I will to go home now.", "I will go home now.", "I'll go home now.", "I won't go home now."], correctAnswer: "I will to go home now.", explanation: "Nunca coloque 'to' após o modal verb will.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente 'Sim, eu irei' para 'Will you go?'", options: ["Yes, I will.", "Yes, I'll.", "Yes, I do.", "Yes, I will go to."], correctAnswer: "Yes, I will.", explanation: "Em respostas curtas não se contrai: 'Yes, I will.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What are your main goals for the next 5 years? Where will you live, what will you achieve, and how will your English help you?",
      contextPt: "Descreva seus planos para os próximos anos em inglês usando 'I will...', 'I'll...', 'I won't...'.",
      exampleAnswer: "In the next five years, I will achieve full English fluency and work for an international tech company. I will travel to several countries and I will buy a new apartment.",
      hints: ["Use 'I will achieve...'", "Use 'I'll travel to...'", "Use 'I won't stop until...'"]
    },
    plannerExerciseSuggestion: "Escreva uma lista de 5 previsões e compromissos para o seu próximo mês: 'I will finish 4 English units', 'I'll practice speaking every day', 'I won't miss my study sessions'."
  },
  {
    id: 13,
    number: 13,
    title: "Modal Verb Would",
    subtitle: "O Futuro do Pretérito / Condicional (-ia) e Hipóteses",
    category: "Modais",
    estimatedHours: 2,
    explanation: "WOULD é o modal verb da imaginação, das hipóteses e da extrema gentileza! Ele equivale exatamente ao sufixo '-ia' da língua portuguesa: comeria (would eat), viajaria (would travel), ajudaria (would help), compraria (would buy). Ele também funciona como auxiliar: 1) Não leva 'to' depois dele; 2) Na afirmativa, usamos contrações: I'd, You'd, He'd, She'd, We'd, They'd; 3) Na negativa, 'would not' vira 'WOULDN'T'; 4) Em perguntas gentis: 'Would you like some coffee?' ou 'What would you do?'.",
    keyRules: [
      "Função: Sufixo '-ia' em português (faria, iria, gostaria, compraria)",
      "Afirmativa: Sujeito + would + Verbo base (ex: I would travel to Spain next summer)",
      "Contrações: I'd, You'd, He'd, She'd, It'd, We'd, They'd",
      "Negativa: Sujeito + wouldn't (would not) + Verbo (ex: She wouldn't be happy with that)",
      "Interrogativa e Pedidos Gentis: Would you like...? / Would you do that?"
    ],
    videoUrl: "https://drive.google.com/file/d/1jacp17YEVRpblpUHwqsIX7RvWGWZ5T0Q/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I would travel to Spain next summer.", pt: "Eu viajaria para a Espanha no próximo verão.", highlightWord: "would travel" },
        { en: "She would call you later.", pt: "Ela te ligaria mais tarde.", highlightWord: "would call" },
        { en: "We would buy a bigger house if possible.", pt: "Nós compraríamos uma casa maior se possível.", highlightWord: "would buy" },
        { en: "It would be great to see you again.", pt: "Seria ótimo te ver novamente.", highlightWord: "would be" },
        { en: "You would love this movie.", pt: "Você amaria este filme.", highlightWord: "would love" },
        { en: "I would help you with your project.", pt: "Eu te ajudaria com seu projeto.", highlightWord: "would help" }
      ],
      negatives: [
        { en: "She would not be happy with the news.", pt: "Ela não ficaria feliz com a notícia.", highlightWord: "would not be" },
        { en: "I wouldn't do that if I were you.", pt: "Eu não faria isso se fosse você.", highlightWord: "wouldn't do" },
        { en: "They wouldn't agree with this price.", pt: "Eles não concordariam com este preço.", highlightWord: "wouldn't agree" }
      ],
      interrogatives: [
        { en: "Would you eat horse meat?", pt: "Você comeria carne de cavalo?", highlightWord: "Would you eat" },
        { en: "Would you like a cup of coffee?", pt: "Você gostaria de uma xícara de café?", highlightWord: "Would you like" },
        { en: "What would you do with a million dollars?", pt: "O que você faria com um milhão de dólares?", highlightWord: "What would you do" }
      ]
    },
    illustratedStory: {
      title: "O Sonho de Viajar o Mundo",
      storyEn: "If Lucas won the lottery, he would buy a sailboat and travel across the oceans. He would invite all his best friends. Would they accept? Of course! Everyone would love an adventure like that.",
      storyPt: "Se Lucas ganhasse na loteria, ele compraria um veleiro e viajaria pelos oceanos. Ele convidaria todos os seus melhores amigos. Eles aceitariam? Claro! Todo mundo amaria uma aventura como essa.",
      highlightSentence: "He would buy a sailboat and everyone would love that adventure.",
      visualTheme: "travel",
      tags: ["Hypothesis", "Dreams", "Conditional"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como se traduz 'Eu comeria uma pizza agora'?", options: ["I would eat a pizza now.", "I will eat a pizza now.", "I eat would a pizza now.", "I would to eat a pizza now."], correctAnswer: "I would eat a pizza now.", explanation: "Would + verbo base = condicional -ia.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual é a contração negativa de 'would not'?", options: ["wouldn't", "would'nt", "wont", "wouldnt't"], correctAnswer: "wouldn't", explanation: "'Would not' contrai-se como 'wouldn't'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a contração afirmativa: 'I _____ (I + would) love to visit New York.'", correctAnswer: "I'd", explanation: "I + would = I'd.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Como oferecer algo com educação: 'Você gostaria de um café?'", options: ["Would you like a coffee?", "Do you will like a coffee?", "Would you to like a coffee?", "Are you like a coffee?"], correctAnswer: "Would you like a coffee?", explanation: "Fórmula polida para ofertas: 'Would you like...?'", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a lacuna: 'It _____ (seria) amazing to live in London.'", correctAnswer: "would be", explanation: "Seria = would be.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Complete: 'He _____ (estudaria) more if he had more time.'", options: ["would study", "would to study", "will study", "studied would"], correctAnswer: "would study", explanation: "Would study.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["We would help you anytime.", "We would to help you anytime.", "We would helped you anytime.", "We would helping you anytime."], correctAnswer: "We would help you anytime.", explanation: "Sem 'to', verbo no infinitivo puro.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete a pergunta: 'What _____ you do in this situation?' (faria)", correctAnswer: "would", explanation: "What would you do?", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Complete com a negação: 'She _____ (não aceitaria) that offer.'", options: ["wouldn't accept", "would not to accept", "won't accept", "doesn't would accept"], correctAnswer: "wouldn't accept", explanation: "Wouldn't accept.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder educadamente 'Sim, eu adoraria' para 'Would you like to come?'", options: ["Yes, I would love to.", "Yes, I will love.", "Yes, I would to.", "Yes, I like."], correctAnswer: "Yes, I would love to.", explanation: "Resposta educada: 'Yes, I would love to.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "If you had one million dollars and six months of free vacation, what would you buy, where would you travel, and who would you take with you?",
      contextPt: "Responda à situação hipotética usando 'I would buy...', 'I would travel to...', 'I'd take...'.",
      exampleAnswer: "If I had one million dollars, I would travel around Europe and Asia with my family. I would stay in historic hotels, try gourmet food, and invest in a new business.",
      hints: ["Use 'I would buy [coisas]'", "Use 'I would visit [países]'", "Use 'I wouldn't worry about...'"]
    },
    plannerExerciseSuggestion: "Escreva 5 frases com situações hipotéticas dos seus sonhos usando 'I would...': 2 sobre viagens, 2 sobre compras e 1 pergunta para um amigo ('What would you do...?')."
  },
  {
    id: 14,
    number: 14,
    title: "Modal Verb Can",
    subtitle: "Habilidades, Possibilidades e Pedidos no Presente",
    category: "Modais",
    estimatedHours: 2,
    explanation: "CAN é um dos verbos mais práticos do inglês. Ele possui 3 usos principais: 1) HABILIDADE/CAPACIDADE (saber ou conseguir fazer algo: 'I can speak English', 'She can play the drums'); 2) POSSIBILIDADE geral baseada em fatos ('A dog can understand humans', 'Jenny can be here any minute'); 3) PEDIDOS e permissões informais ('Can I speak to you now, please?', 'Can I see that?'). Como todo modal, nunca usa 'to' após ele (diga 'I can drive', nunca 'I can to drive') e na negativa vira 'CAN'T' (ou 'cannot').",
    keyRules: [
      "3 Usos: Habilidade (saber fazer), Possibilidade (pode acontecer), Pedidos (permissão)",
      "Afirmativa: Sujeito + can + Verbo base (ex: I can speak English; She can play drums)",
      "Negativa: Sujeito + can't (cannot) + Verbo (ex: You can't drive a car; Why can't you eat peanuts?)",
      "Interrogativa: Can + Sujeito + Verbo? (ex: Can you understand German? Can I help you?)"
    ],
    videoUrl: "https://drive.google.com/file/d/1WUMUALgbXbbfsEcHho1Gq93niyxWmFfh/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I can speak English.", pt: "Eu posso falar inglês.", highlightWord: "can speak" },
        { en: "She can play the drums.", pt: "Ela pode tocar bateria.", highlightWord: "can play" },
        { en: "A dog can understand humans.", pt: "Um cachorro pode compreender humanos.", highlightWord: "can understand" },
        { en: "Jenny can be here at any minute.", pt: "Jenny pode estar aqui a qualquer minuto.", highlightWord: "can be" }
      ],
      negatives: [
        { en: "You can't drive a car.", pt: "Você não pode dirigir um carro.", highlightWord: "can't drive" },
        { en: "Why can't you eat peanuts?", pt: "Por que você não pode comer amendoim?", highlightWord: "can't eat" },
        { en: "We can't finish this today.", pt: "Nós não conseguimos terminar isso hoje.", highlightWord: "can't finish" }
      ],
      interrogatives: [
        { en: "Can you understand German?", pt: "Você pode entender alemão?", highlightWord: "Can you understand" },
        { en: "Can I speak to you now, please?", pt: "Posso falar com você agora, por favor?", highlightWord: "Can I speak" },
        { en: "Can I see that, please?", pt: "Posso ver aquilo, por favor?", highlightWord: "Can I see" },
        { en: "Can I go home now?", pt: "Posso ir para casa agora?", highlightWord: "Can I go" }
      ]
    },
    illustratedStory: {
      title: "A Audição da Banda",
      storyEn: "Matheus wants to join a rock band. In the audition, the singer asks: 'Can you play electric guitar?' Matheus smiles: 'Yes, I can play guitar, and I can also compose songs!' The band is thrilled.",
      storyPt: "Matheus quer entrar em uma banda de rock. Na audição, o cantor pergunta: 'Você sabe tocar guitarra elétrica?' Matheus sorri: 'Sim, eu sei tocar guitarra e também consigo compor músicas!' A banda fica empolgada.",
      highlightSentence: "I can play guitar and I can also compose songs!",
      visualTheme: "music",
      tags: ["Abilities", "Music", "Talents"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como se diz 'Eu sei falar inglês' (habilidade)?", options: ["I can speak English.", "I can to speak English.", "I know speak English.", "I am speak English."], correctAnswer: "I can speak English.", explanation: "Can expressa habilidade sem a partícula 'to'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual é a forma negativa correta de 'can'?", options: ["can't", "cann't", "don't can", "can not to"], correctAnswer: "can't", explanation: "Contração negativa: can't (ou cannot).", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete o pedido informal: '_____ I use your pen, please?'", correctAnswer: "Can", explanation: "Pedidos informais de permissão começam com 'Can I...?'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'She _____ (consegue tocar) the piano very well.'", options: ["can play", "can plays", "can to play", "is can play"], correctAnswer: "can play", explanation: "Mesmo com 'she', o verbo após modal não leva 's': can play.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'I _____ (não consigo) hear you clearly.'", correctAnswer: "can't", explanation: "I can't hear you.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'Você sabe nadar?'", options: ["Can you swim?", "Do you can swim?", "Are you swim?", "Can you to swim?"], correctAnswer: "Can you swim?", explanation: "Can you swim?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase expressa uma possibilidade geral?", options: ["A penguin can live in cold climates.", "A penguin is can live in cold climates.", "A penguin can to live in cold climates.", "A penguin cans live in cold climates."], correctAnswer: "A penguin can live in cold climates.", explanation: "Can live.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete: 'Can you _____ (me ajudar) with this heavy box?' (help me)", correctAnswer: "help me", explanation: "Can you help me...", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual frase está gramaticalmente incorreta?", options: ["He cans speak three languages.", "He can speak three languages.", "He can't speak Italian.", "Can he speak English?"], correctAnswer: "He cans speak three languages.", explanation: "Modal verbs nunca recebem 's' na 3ª pessoa ('cans' não existe).", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente 'Sim, eu consigo' para 'Can you drive?'", options: ["Yes, I can.", "Yes, I do.", "Yes, I can drive it to.", "Yes, I am."], correctAnswer: "Yes, I can.", explanation: "Resposta curta afirmativa: 'Yes, I can.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What are 3 special talents or skills you have (e.g. languages, sports, cooking, coding), and 1 thing you can't do yet?",
      contextPt: "Fale sobre suas habilidades usando 'I can...' e 'I can't...'.",
      exampleAnswer: "I can speak Portuguese and English, and I can cook delicious Italian food. I can also play chess well, but I can't play any musical instrument yet.",
      hints: ["Use 'I can [verbo] well'", "Use 'I can't [verbo] yet, but I want to learn'"]
    },
    plannerExerciseSuggestion: "Escreva uma lista de habilidades: 3 coisas que você sabe fazer ('I can...'), 2 coisas que você não consegue fazer ('I can't...') e 2 pedidos gentis com 'Can I...?'."
  },
  {
    id: 15,
    number: 15,
    title: "Modal Verb Could",
    subtitle: "Habilidades no Passado, Possibilidades e Pedidos Formais",
    category: "Modais",
    estimatedHours: 2,
    explanation: "COULD é o passado e a versão mais polida de CAN! Possui 3 funções cruciais: 1) HABILIDADE NO PASSADO ('podia' ou 'conseguia': 'When I was young, I could run very fast, but today I can't'); 2) POSSIBILIDADE REMOTA ou hipótese ('poderia': 'Visiting the USA could be a good way to practice English'); 3) PEDIDOS EXTREMAMENTE EDUCADOS e polidos ('Could you tell me where the bathroom is?', 'Could I ask you a question?'). Na negativa usamos 'COULDN'T' (could not).",
    keyRules: [
      "Habilidade no passado: 'I could speak English in the past' (Eu conseguia)",
      "Possibilidade remota/hipótese: 'That volcano could destroy the world' (Poderia)",
      "Pedidos educados e formais: 'Could you help me, please?' / 'Could I go to the bathroom?'",
      "Negativa no passado: couldn't + Verbo base (ex: She couldn't play drums)"
    ],
    videoUrl: "https://drive.google.com/file/d/1ERiqo5QEf7DOjyP8XmT1r-wWYRYkHGja/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I could speak English, but today I need more practice.", pt: "Eu podia falar inglês, mas hoje preciso de mais prática.", highlightWord: "could speak" },
        { en: "Visiting the USA could be a good way to practice.", pt: "Visitar os EUA poderia ser uma boa maneira de praticar.", highlightWord: "could be" },
        { en: "I think we could get rich in the future.", pt: "Eu acho que nós poderíamos ficar ricos no futuro.", highlightWord: "could get" }
      ],
      negatives: [
        { en: "You couldn't drive a car in the past.", pt: "Você não podia dirigir um carro no passado.", highlightWord: "couldn't drive" },
        { en: "She couldn't play the drums.", pt: "Ela não podia tocar bateria.", highlightWord: "couldn't play" },
        { en: "Why couldn't you go to work yesterday?", pt: "Por que você não pôde ir ao trabalho ontem?", highlightWord: "couldn't you go" }
      ],
      interrogatives: [
        { en: "Could you tell me where the bathroom is?", pt: "Poderia me dizer onde está o banheiro?", highlightWord: "Could you tell" },
        { en: "Could you tell me where I can find a good restaurant?", pt: "Poderia me dizer onde posso encontrar um bom restaurante?", highlightWord: "Could you tell" },
        { en: "Could I ask you a question?", pt: "Eu poderia lhe fazer uma pergunta?", highlightWord: "Could I ask" },
        { en: "Could I go to the bathroom?", pt: "Eu poderia ir ao banheiro?", highlightWord: "Could I go" }
      ]
    },
    illustratedStory: {
      title: "Pedindo Informações em Londres",
      storyEn: "Amanda arrived in London for the first time. At the tube station, she politely asked an officer: 'Excuse me, could you tell me where the British Museum is?' The officer smiled and said: 'Certainly! You could take the central line or walk five minutes down this street.'",
      storyPt: "Amanda chegou a Londres pela primeira vez. Na estação de metrô, ela perguntou educadamente a um oficial: 'Com licença, o senhor poderia me dizer onde fica o Museu Britânico?' O oficial sorriu e disse: 'Certamente! Você poderia pegar a linha central ou caminhar cinco minutos por esta rua.'",
      highlightSentence: "Could you tell me where the museum is? You could take the central line.",
      visualTheme: "london",
      tags: ["Polite Requests", "Directions", "Past Abilities"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como pedir informação educadamente: 'Você poderia me dizer as horas?'", options: ["Could you tell me the time, please?", "Can you to tell me the time?", "Did you could tell me the time?", "Would to tell me the time?"], correctAnswer: "Could you tell me the time, please?", explanation: "Could you tell me... é a forma clássica de pedido polido.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete sobre habilidade no passado: 'When I was five, I _____ (não conseguia) swim.'", options: ["couldn't", "can't", "didn't could", "wasn't can"], correctAnswer: "couldn't", explanation: "Passado negativo de habilidade: couldn't.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha para fazer um pedido polido: '_____ I ask you a question?'", correctAnswer: "Could", explanation: "Could I ask you...?", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'Studying abroad _____ (poderia ser) a life-changing experience.'", options: ["could be", "could to be", "was could", "could been"], correctAnswer: "could be", explanation: "Poderia ser: could be.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'Why _____ (você não pôde) come to the meeting yesterday?' (couldn't you)", correctAnswer: "couldn't you", explanation: "Why couldn't you come...", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual frase expressa uma habilidade passada correta?", options: ["My grandfather could speak five languages.", "My grandfather could to speak five languages.", "My grandfather could speaks five languages.", "My grandfather was could speak five languages."], correctAnswer: "My grandfather could speak five languages.", explanation: "Could speak.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Como se pergunta polidamente em um restaurante: 'Você poderia nos trazer o cardápio?'", options: ["Could you bring us the menu, please?", "Did you bring us menu?", "Can you to bring us menu?", "Were you bring us menu?"], correctAnswer: "Could you bring us the menu, please?", explanation: "Could you bring us the menu...", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete: 'Where _____ I find a pharmacy near here?' (poderia eu)", correctAnswer: "could", explanation: "Where could I find...", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual a diferença entre 'Can I...?' e 'Could I...?'", options: ["'Could I' é mais formal, educado e polido do que 'Can I'.", "'Can I' só é usado para o passado.", "Ambos são exatamente idênticos em qualquer situação.", "'Could I' é rude."], correctAnswer: "'Could I' é mais formal, educado e polido do que 'Can I'.", explanation: "'Could' acrescenta um tom de maior polidez e respeito ao pedido.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente 'Sim, você pode/poderia' a 'Could I sit here?'", options: ["Of course you can / Yes, certainly.", "Yes, you could to.", "Yes, you did.", "Yes, I could."], correctAnswer: "Of course you can / Yes, certainly.", explanation: "Respostas naturais aceitando pedidos de permissão.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Imagine you are at a luxury hotel in New York: Make 3 polite requests to the concierge using 'Could you...?' and 'Could I...?'",
      contextPt: "Pratique pedidos formais e polidos em inglês em um ambiente de hotel ou restaurante com 'Could'.",
      exampleAnswer: "Good evening! Could you recommend a great rooftop restaurant nearby? Also, could I request a late check-out tomorrow at 2 PM? Thank you so much for your help.",
      hints: ["Could you recommend...", "Could I have a wake-up call at 7 AM?", "Could you help me with my luggage?"]
    },
    plannerExerciseSuggestion: "Escreva 5 pedidos super polidos com 'Could you / Could I': pedir informações, pedir ajuda com bagagem, pedir a conta em um restaurante e pedir permissão."
  },
  {
    id: 16,
    number: 16,
    title: "Modal Verb May",
    subtitle: "Possibilidades Especulativas e Pedidos Formais de Permissão",
    category: "Modais",
    estimatedHours: 1,
    explanation: "O modal verb MAY tem dois papéis primordiais: 1) POSSIBILIDADE OU ESPECULAÇÃO: diferente de 'can' que expressa habilidade ou capacidade, 'MAY' expressa que algo 'pode ser que aconteça' (uma chance ou probabilidade: 'Susan may go to work only on Monday. She is still sick', 'They may be French'); 2) PEDIDOS MUITO FORMAIS DE PERMISSÃO: 'May I come in?', 'May I speak to you now, please?'. Curiosidade essencial: MAY NÃO possui forma contraída (usa-se 'may not')!",
    keyRules: [
      "Expressa POSSIBILIDADE/ESPECULAÇÃO (não significa habilidade física!)",
      "Afirmativa: Sujeito + may + Verbo base (ex: They may be French; I may be busy tomorrow)",
      "Negativa: Sujeito + may not + Verbo (NÃO há contração: 'may not')",
      "Interrogativa Formal: May I speak to you? / May I see that, please?"
    ],
    videoUrl: "https://drive.google.com/file/d/13JeqalSPYu0DruoqVhQz27GQuyECbMOi/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "Susan may go to work only on Monday. She is still sick.", pt: "Susan pode ir ao trabalho só na segunda. Ela ainda está doente.", highlightWord: "may go" },
        { en: "They may be French. I heard them speaking French.", pt: "Eles podem ser franceses. Eu escutei eles falando francês.", highlightWord: "may be" },
        { en: "I may be busy tomorrow.", pt: "Eu posso estar ocupado amanhã.", highlightWord: "may be" }
      ],
      negatives: [
        { en: "I may not call you. I will be very busy.", pt: "Eu posso não ligar para você. Estarei muito ocupado.", highlightWord: "may not call" },
        { en: "This trip may not be exactly what you expect.", pt: "Esta viagem pode não ser exatamente o que você espera.", highlightWord: "may not be" },
        { en: "We may not have time to finish.", pt: "Nós podemos não ter tempo para terminar.", highlightWord: "may not have" }
      ],
      interrogatives: [
        { en: "May I speak to you now, please?", pt: "Posso falar com você agora, por favor?", highlightWord: "May I speak" },
        { en: "May I say something?", pt: "Posso dizer uma coisa?", highlightWord: "May I say" },
        { en: "May I see that, please?", pt: "Posso ver isso, por favor?", highlightWord: "May I see" },
        { en: "May I go home now?", pt: "Posso ir para casa agora?", highlightWord: "May I go" }
      ]
    },
    illustratedStory: {
      title: "A Entrevista com o Diretor",
      storyEn: "Leonardo knocked on the director's door. 'May I come in, Mr. Davis?', he asked with respect. The director replied, 'Of course, Leonardo! Please sit down. We may have an exciting promotion for you.'",
      storyPt: "Leonardo bateu na porta do diretor. 'Posso entrar, Sr. Davis?', ele perguntou com respeito. O diretor respondeu: 'Claro, Leonardo! Por favor, sente-se. Pode ser que tenhamos uma promoção empolgante para você.'",
      highlightSentence: "May I come in? We may have an exciting promotion for you.",
      visualTheme: "office",
      tags: ["Formal Permission", "Speculation", "Career"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual o significado de 'She may arrive late'?", options: ["Pode ser que ela chegue atrasada (possibilidade).", "Ela sabe chegar atrasada (habilidade).", "Ela deve chegar atrasada (obrigação).", "Ela costumava chegar atrasada (hábito)."], correctAnswer: "Pode ser que ela chegue atrasada (possibilidade).", explanation: "'May' expressa probabilidade ou especulação.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual a forma negativa de 'may'?", options: ["may not", "mayn't", "don't may", "cannot may"], correctAnswer: "may not", explanation: "O modal 'may' não se contrai, usa-se 'may not'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha para fazer um pedido formal em uma reunião: '_____ I ask a question, sir?'", correctAnswer: "May", explanation: "May I ask... é o padrão formal de cortesia.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'Take an umbrella, it _____ (pode ser que chova) later.'", options: ["may rain", "may rains", "may to rain", "is may rain"], correctAnswer: "may rain", explanation: "May rain.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'I _____ (posso não ir) to the party tonight.' (may not go)", correctAnswer: "may not go", explanation: "I may not go...", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pede permissão formalmente para entrar na sala?", options: ["May I come in?", "Do I may come in?", "May I to come in?", "Can I to come in?"], correctAnswer: "May I come in?", explanation: "May I come in?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual das seguintes frases expressa uma dedução baseada em evidência?", options: ["They may be French; they are speaking French.", "They must can speak French.", "They may to be French.", "They are may French."], correctAnswer: "They may be French; they are speaking French.", explanation: "They may be French.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete: 'May I _____ (ver) your passport, please?'", correctAnswer: "see", explanation: "May I see your passport, please?", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Podemos usar 'may' para dizer que sabemos nadar (habilidade física)?", options: ["Não, para habilidades físicas usamos 'can'.", "Sim, são 100% intercambiáveis.", "Apenas com pronomes no plural.", "Sim, em linguagem formal."], correctAnswer: "Não, para habilidades físicas usamos 'can'.", explanation: "Habilidade motora/física é com 'can', 'may' é para possibilidade.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["We may travel to Italy next summer.", "We may to travel to Italy next summer.", "We mays travel to Italy next summer.", "We may traveling to Italy next summer."], correctAnswer: "We may travel to Italy next summer.", explanation: "We may travel...", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What are some possible plans or events that may happen in your life or career in the next 6 months?",
      contextPt: "Fale sobre possibilidades futuras usando 'I may...', 'My company may...', 'We may not...'.",
      exampleAnswer: "In the next six months, I may change my job position or receive a promotion. My company may open a new international branch, so I may need to travel abroad.",
      hints: ["Use 'I may [verbo]'", "Use 'It may happen soon'", "Use 'I may not have time for...'"]
    },
    plannerExerciseSuggestion: "Escreva 4 frases com 'May': 2 sobre incertezas e possibilidades futuras ('I may buy...', 'It may snow...'), e 2 pedidos formais ('May I leave early?', 'May I offer a suggestion?')."
  },
  {
    id: 17,
    number: 17,
    title: "Modal Verb Might",
    subtitle: "Possibilidades Remotas e Incertezas Acentuadas",
    category: "Modais",
    estimatedHours: 1,
    explanation: "MIGHT é a versão ainda mais cautelosa e incerta de MAY! Quando você usa 'might', você está dizendo que algo é apenas uma possibilidade remota — você não tem certeza alguma, mas não descarta o cenário (ex: 'A meteor explosion might destroy our planet', 'Playing with a bear might not be the best idea', 'Winning this game might be impossible for them'). Em pedidos, 'Might I...' soa aristocrático, ultra-polido e extremamente formal.",
    keyRules: [
      "Possibilidade remota/incerta: probabilidade menor do que 'may' ou 'will'",
      "Afirmativa: Sujeito + might + Verbo base (ex: Janet might be arriving in Germany now)",
      "Negativa: Sujeito + might not + Verbo (ex: She might not know the answer)",
      "Pedidos ultra-formais: Might I say something? / Might I see that?"
    ],
    videoUrl: "https://drive.google.com/file/d/1ZipQ9KwPYDi_lhtSo3qIPpvV4nneCiza/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "A meteor explosion might destroy our planet.", pt: "Uma explosão de um meteoro pode destruir nosso planeta.", highlightWord: "might destroy" },
        { en: "Janet might be arriving in Germany now.", pt: "Janet pode estar chegando na Alemanha agora.", highlightWord: "might be arriving" },
        { en: "Winning this game might be impossible for them.", pt: "Ganhar esse jogo pode ser impossível para eles.", highlightWord: "might be" }
      ],
      negatives: [
        { en: "Playing with a bear might not be the best idea.", pt: "Brincar com um urso pode não ser a melhor ideia.", highlightWord: "might not be" },
        { en: "She might do the wrong thing, but we can't stop her.", pt: "Ela pode fazer a coisa errada, mas não podemos pará-la.", highlightWord: "might do" },
        { en: "They might not come because of the heavy traffic.", pt: "Pode ser que eles não venham devido ao trânsito pesado.", highlightWord: "might not come" }
      ],
      interrogatives: [
        { en: "Might I speak to you now, please?", pt: "Posso falar com você agora, por favor?", highlightWord: "Might I speak" },
        { en: "Might I say something?", pt: "Posso dizer uma coisa?", highlightWord: "Might I say" },
        { en: "Might I go home now?", pt: "Posso ir para casa agora?", highlightWord: "Might I go" }
      ]
    },
    illustratedStory: {
      title: "A Tempestade no Horizonte",
      storyEn: "Dark clouds are gathering over the mountains. The guide looked up and said: 'It might rain heavily tonight, or the storm might pass around us. Let's set up camp right here just in case.'",
      storyPt: "Nuvens escuras estão se formando sobre as montanhas. O guia olhou para cima e disse: 'Pode ser que chova forte esta noite, ou a tempestade pode passar ao nosso redor. Vamos montar o acampamento bem aqui por precaução.'",
      highlightSentence: "It might rain heavily tonight, but the storm might pass around us.",
      visualTheme: "nature",
      tags: ["Possibility", "Weather", "Cautious Decisions"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual frase expressa uma incerteza ou possibilidade remota?", options: ["It might snow tomorrow, but nobody is sure.", "It will snow tomorrow for sure.", "It must snow tomorrow.", "It snows every day."], correctAnswer: "It might snow tomorrow, but nobody is sure.", explanation: "'Might' expressa possibilidade com alto grau de incerteza.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'Don't touch that wire! It _____ be dangerous.'", options: ["might", "might to", "mights", "is might"], correctAnswer: "might", explanation: "It might be dangerous.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha a negação: 'We _____ (pode ser que não consigamos) arrive on time.' (might not)", correctAnswer: "might not", explanation: "Might not arrive on time.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'She is not answering her phone. She _____ be in a meeting.'", options: ["might", "must to", "can to", "will to"], correctAnswer: "might", explanation: "She might be in a meeting (hipótese provável).", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Complete o pedido ultra-educado: '_____ I make a brief comment?'", correctAnswer: "Might", explanation: "Might I make...", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual frase está gramaticalmente correta?", options: ["He might join us later.", "He might to join us later.", "He mights join us later.", "He is might join us later."], correctAnswer: "He might join us later.", explanation: "He might join us later.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'They _____ come to our party if they finish work early.'", options: ["might", "might to", "are might", "will to"], correctAnswer: "might", explanation: "They might come.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete com o verbo base: 'The flight might _____ (atrasar) due to fog.' (be delayed)", correctAnswer: "be delayed", explanation: "The flight might be delayed.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual a escala de certeza do mais provável para o menos provável?", options: ["Will (certeza) -> May (provável) -> Might (remoto/incerto)", "Might -> May -> Will", "May -> Will -> Might", "Todos têm a mesma certeza."], correctAnswer: "Will (certeza) -> May (provável) -> Might (remoto/incerto)", explanation: "Will indica certeza, May indica probabilidade razoável, Might indica possibilidade remota.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'Be careful with that dog, it _____ bite.'", options: ["might", "mights", "might to", "can to"], correctAnswer: "might", explanation: "It might bite.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Think about tomorrow's weather, your schedule, and news: What are 3 things that might happen, but you are not 100% sure about?",
      contextPt: "Fale sobre incertezas e possibilidades remotas para o seu dia de amanhã usando 'might'.",
      exampleAnswer: "Tomorrow, it might rain in the afternoon, so I might take my umbrella. Also, my boss might schedule an unexpected meeting, so I might need to stay an hour longer at work.",
      hints: ["Use 'It might [verbo]'", "Use 'I might go to...'", "Use 'We might not see...'"]
    },
    plannerExerciseSuggestion: "Escreva 4 frases sobre previsões incertas: 'It might rain tomorrow', 'I might buy a new book this weekend', 'My friend might visit me', 'We might go out'."
  },
  {
    id: 18,
    number: 18,
    title: "Modal Verb Should",
    subtitle: "Conselhos, Recomendações e Expectativas Lógicas",
    category: "Modais",
    estimatedHours: 1,
    explanation: "SHOULD é o modal do conselho amigo e da expectativa! Ele traduz-se como 'deveria' ou 'deve' (no sentido de recomendação, nunca de obrigação pesada). Dois usos fundamentais: 1) DAR OU PEDIR CONSELHOS: 'I think you should talk to your sister', 'You should never talk to strangers!', 'What should I do?'; 2) EXPRESSAR EXPECTATIVAS LÓGICAS (o que é provável que aconteça): 'The keys should be in the drawer', 'Anderson should be here any minute', 'All the pain should go away after you take this medicine'. Na negativa vira 'SHOULDN'T' (should not).",
    keyRules: [
      "Conselhos e opiniões: 'You should study more' / 'She should rest'" ,
      "Expectativas lógicas: 'The flight should land at 3 PM' (espera-se que pouse)",
      "Afirmativa: Sujeito + should + Verbo base (ex: You should see a doctor)",
      "Negativa: Sujeito + shouldn't (should not) + Verbo (ex: You shouldn't eat so much sugar)",
      "Interrogativa: Should + Sujeito + Verbo? (ex: What should we wear for the party?)"
    ],
    videoUrl: "https://drive.google.com/file/d/1zA0BG_3rnNztJkpS3E6aM9tZ31f0wH1j/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "The keys should be in the drawer.", pt: "As chaves devem estar na gaveta.", highlightWord: "should be" },
        { en: "Anderson should be here at any minute.", pt: "Anderson deve estar aqui a qualquer minuto.", highlightWord: "should be" },
        { en: "All passengers should be ready for boarding at noon.", pt: "Todos os passageiros devem estar prontos para o embarque ao meio-dia.", highlightWord: "should be ready" },
        { en: "I think you should talk to your sister.", pt: "Eu acho que você deveria falar com a sua irmã.", highlightWord: "should talk" }
      ],
      negatives: [
        { en: "The meeting shouldn't start before seven.", pt: "A reunião não deve começar antes das sete.", highlightWord: "shouldn't start" },
        { en: "You should never talk to strangers!", pt: "Você nunca deveria falar com estranhos!", highlightWord: "should never talk" },
        { en: "Barbara shouldn't be alone right now.", pt: "Barbara não deveria ficar sozinha agora.", highlightWord: "shouldn't be" }
      ],
      interrogatives: [
        { en: "What do you think I should do in this situation?", pt: "O que você acha que eu deveria fazer nesta situação?", highlightWord: "I should do" },
        { en: "What should we wear for the party tomorrow?", pt: "O que nós deveríamos vestir para a festa amanhã?", highlightWord: "Should we wear" },
        { en: "Should I call him or send a message?", pt: "Eu deveria ligar para ele ou mandar uma mensagem?", highlightWord: "Should I call" }
      ]
    },
    illustratedStory: {
      title: "O Conselho do Médico",
      storyEn: "Rodrigo had a bad headache after working all day. Doctor Helen said: 'You should drink at least two liters of water, and you shouldn't stare at computer screens late at night. The pain should go away soon!'",
      storyPt: "Rodrigo estava com uma forte dor de cabeça depois de trabalhar o dia todo. A Dra. Helen disse: 'Você deveria beber pelo menos dois litros de água e não deveria encarar telas de computador tarde da noite. A dor deve passar em breve!'",
      highlightSentence: "You should drink more water and the pain should go away soon.",
      visualTheme: "health",
      tags: ["Advice", "Health", "Expectations"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como aconselhar alguém: 'Você deveria descansar'?", options: ["You should rest.", "You should to rest.", "You must to rest.", "You are should rest."], correctAnswer: "You should rest.", explanation: "Should + verbo base sem 'to'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual a forma negativa de 'should'?", options: ["shouldn't", "should'nt", "don't should", "should not to"], correctAnswer: "shouldn't", explanation: "Shouldn't (should not).", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete o conselho: 'You _____ (não deveria comer) so much junk food.' (shouldn't eat)", correctAnswer: "shouldn't eat", explanation: "You shouldn't eat...", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Como se pede um conselho: 'O que eu deveria fazer?'", options: ["What should I do?", "What do I should do?", "What should I to do?", "What I should do?"], correctAnswer: "What should I do?", explanation: "Estrutura interrogativa: What + should + sujeito + verbo base.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Complete com a expectativa lógica: 'The train _____ (deve chegar) at 4 PM.' (should arrive)", correctAnswer: "should arrive", explanation: "The train should arrive at 4 PM.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Complete: 'I think students _____ practice speaking every day.'", options: ["should", "should to", "ought", "are should"], correctAnswer: "should", explanation: "Students should practice.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase expressa uma recomendação adequada?", options: ["You should wear a warm coat today, it's freezing.", "You should to wear a warm coat today.", "You shouldn't wear nothing warm.", "You are should wear coat."], correctAnswer: "You should wear a warm coat today, it's freezing.", explanation: "You should wear...", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Preencha a pergunta: '_____ I call the hotel to confirm our reservation?'", correctAnswer: "Should", explanation: "Should I call...", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual o sentido de 'Anderson should be here any minute'?", options: ["Expressa uma forte expectativa de que ele chegará logo.", "Significa que ele foi obrigado por lei a vir.", "Significa que ele nunca virá.", "Significa que ele veio ontem."], correctAnswer: "Expressa uma forte expectativa de que ele chegará logo.", explanation: "'Should' aqui expressa expectativa lógica.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'We _____ (deveríamos sair) early to avoid traffic.'", options: ["should leave", "should to leave", "should leaving", "shall to leave"], correctAnswer: "should leave", explanation: "We should leave.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Imagine a foreign friend is visiting Brazil for the very first time: What should he/she visit, what food should he/she try, and what shouldn't he/she do?",
      contextPt: "Dê conselhos para um turista estrangeiro no Brasil usando 'You should visit...', 'You should try...', 'You shouldn't...'.",
      exampleAnswer: "When visiting Brazil, you should definitely try pão de queijo and feijoada. You should visit Rio de Janeiro and the Iguazu Falls. However, you shouldn't walk with your phone in your hand in crowded places.",
      hints: ["You should try [comida]", "You should visit [lugares]", "You shouldn't forget your sunscreen."]
    },
    plannerExerciseSuggestion: "Escreva 5 conselhos práticos para um estudante de inglês que quer acelerar a fluência usando 'You should...' e 'You shouldn't...'."
  },
  {
    id: 19,
    number: 19,
    title: "Modal Verb Must",
    subtitle: "Obrigação, Necessidade Crítica e Dedução Lógica Inevitável",
    category: "Modais",
    estimatedHours: 1,
    explanation: "MUST é o modal verb da autoridade, necessidade absoluta e dedução lógica irrefutável! Usos essenciais: 1) OBRIGAÇÃO / DEVER MORAL E REGRAS: 'All employees must wear uniforms', 'We must go now. The atmosphere is getting dangerous', 'Everything must be ready for tomorrow'; 2) PROIBIÇÃO ABSOLUTA na negativa ('MUSTN'T'): 'We mustn't say bad things about other people', 'You mustn't park here'; 3) DEDUÇÃO LÓGICA ('só pode ser'): 'I don't remember where I put my wallet, but it must be in my bedroom' (não tem outro lugar possível!).",
    keyRules: [
      "Obrigação / Necessidade: 'You must study' (é crucial, imprescindível)",
      "Proibição absoluta: 'mustn't' = é estritamente proibido!",
      "Dedução lógica inevitável: 'She has a huge house, she must be rich'",
      "Afirmativa: Sujeito + must + Verbo base (ex: All employees must wear uniforms)",
      "Negativa: Sujeito + mustn't (must not) + Verbo (ex: You mustn't smoke here)"
    ],
    videoUrl: "https://drive.google.com/file/d/1mbmRAUC-BmvvDw2cvrZer7I_p9MWABcI/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "We must go now. The atmosphere is getting dangerous.", pt: "Nós devemos ir agora. O clima está ficando perigoso.", highlightWord: "must go" },
        { en: "All employees must wear uniforms.", pt: "Todos os funcionários devem usar uniformes.", highlightWord: "must wear" },
        { en: "I must call my brother today.", pt: "Eu tenho que ligar para o meu irmão hoje.", highlightWord: "must call" },
        { en: "I don't remember where I put my wallet, but it must be in my bedroom.", pt: "Não lembro onde pus minha carteira, mas deve estar no meu quarto.", highlightWord: "must be" },
        { en: "The show must go on.", pt: "O show deve continuar.", highlightWord: "must go on" }
      ],
      negatives: [
        { en: "We mustn't say bad things about other people.", pt: "Nós não devemos dizer coisas ruins sobre outras pessoas.", highlightWord: "mustn't say" },
        { en: "You mustn't touch that button.", pt: "Você não deve tocar naquele botão.", highlightWord: "mustn't touch" },
        { en: "Passengers mustn't cross the yellow line.", pt: "Passageiros não devem cruzar a linha amarela.", highlightWord: "mustn't cross" }
      ],
      interrogatives: [
        { en: "Must we finish this before leaving?", pt: "Nós devemos terminar isso antes de sair?", highlightWord: "Must we finish" },
        { en: "Must I show my passport at the gate?", pt: "Eu devo mostrar meu passaporte no portão?", highlightWord: "Must I show" }
      ]
    },
    illustratedStory: {
      title: "Regras do Laboratório",
      storyEn: "Inside the chemical laboratory, safety rules are strict. All scientists must wear protective goggles and gloves. They mustn't eat or drink near the test tubes. Everything must be sterile!",
      storyPt: "Dentro do laboratório de química, as regras de segurança são rigorosas. Todos os cientistas devem usar óculos de proteção e luvas. Eles não devem comer ou beber perto dos tubos de ensaio. Tudo deve estar estéril!",
      highlightSentence: "All scientists must wear goggles and they mustn't drink inside.",
      visualTheme: "science",
      tags: ["Rules", "Safety", "Obligation"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete a regra de trânsito: 'Drivers _____ stop at the red light.'", options: ["must", "must to", "should to", "are must"], correctAnswer: "must", explanation: "Obrigação legal / regra: must.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual o significado de 'You mustn't smoke here'?", options: ["É proibido fumar aqui.", "Você deveria fumar aqui se quiser.", "Você pode fumar aqui.", "Você costumava fumar aqui."], correctAnswer: "É proibido fumar aqui.", explanation: "'Mustn't' expressa proibição categórica.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha a dedução lógica: 'He worked for 14 hours today. He _____ be exhausted.' (só pode estar)", correctAnswer: "must", explanation: "He must be exhausted.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'All visitors _____ register at the front desk.'", options: ["must", "musts", "must to", "is must"], correctAnswer: "must", explanation: "All visitors must register.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a contração negativa: 'You _____ (não deve) disclose this confidential password.' (mustn't)", correctAnswer: "mustn't", explanation: "You mustn't disclose...", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual a diferença entre 'should' e 'must'?", options: ["'Should' é um conselho/recomendação; 'Must' é uma obrigação essencial ou dedução forte.", "'Should' é proibição; 'Must' é sugestão.", "Ambos são sinônimos perfeitos.", "'Must' só é usado no passado."], correctAnswer: "'Should' é um conselho/recomendação; 'Must' é uma obrigação essencial ou dedução forte.", explanation: "'Should' = recomendação; 'Must' = obrigação imperativa.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'I haven't eaten all day. I _____ eat something right now.'", options: ["must", "must to", "ought", "mights"], correctAnswer: "must", explanation: "I must eat something.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Preencha: 'The show _____ (deve) go on!'", correctAnswer: "must", explanation: "The show must go on!", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual frase expressa dedução lógica?", options: ["Look at the snow outside, it must be freezing!", "You must clean your room.", "I must leave now.", "She must call her mom."], correctAnswer: "Look at the snow outside, it must be freezing!", explanation: "Dedução baseada em evidência visual (neve lá fora).", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Qual frase está gramaticalmente incorreta?", options: ["You must to wear a seatbelt.", "You must wear a seatbelt.", "You mustn't drive fast.", "Must we go now?"], correctAnswer: "You must to wear a seatbelt.", explanation: "Nunca se usa 'to' após o modal verb must.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What are 3 essential rules in your profession or workplace that everyone MUST follow, and 1 thing people MUSTN'T do?",
      contextPt: "Descreva normas e regras importantes da sua profissão em inglês usando 'must' e 'mustn't'.",
      exampleAnswer: "In software engineering, developers must write clean and tested code. We must document new features, and we mustn't share client passwords or sensitive security keys.",
      hints: ["In my job, we must...", "Employees must always...", "People mustn't..."]
    },
    plannerExerciseSuggestion: "Escreva 5 regras essenciais para a sua vida pessoal e de estudos usando 'I must...' e 'I mustn't...'."
  },
  {
    id: 20,
    number: 20,
    title: "Present Perfect",
    subtitle: "A Conexão Entre o Passado e o Presente (Experiências de Vida)",
    category: "Tempos Perfeitos",
    estimatedHours: 5,
    explanation: "O Present Perfect é um dos tempos mais importantes do inglês. A grande virada de chave para entendê-lo é: ELE FOCA NO QUE ACONTECEU (a experiência de vida ou o resultado no presente) E IGNORA COMPLETAMENTE 'QUANDO' ACONTECEU! Fórmula: Sujeito + HAVE / HAS + Verbo no Particípio (3ª coluna). I have eaten the cake (Eu comi o bolo - o bolo sumiu!), She has written a book (Ela escreveu um livro - isso faz parte da história dela!). Se dissermos a data exata (yesterday, in 2018, last week), mudamos obrigatoriamente para o Simple Past (I wrote it yesterday)!",
    keyRules: [
      "Fórmula: Sujeito + have / has + Verbo no Particípio (Past Participle)",
      "I / You / We / They -> HAVE / haven't | He / She / It -> HAS / hasn't",
      "Foco no RESULTADO ou EXPERIÊNCIA, NUNCA no tempo específico!",
      "Comparação: 'I have written my name' (sem data) vs 'I wrote it yesterday' (com data exata)"
    ],
    videoUrl: "https://drive.google.com/file/d/1StM16SL6TV-E22KIUxsFLBEjYNwd9TPA/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I have eaten the cake.", pt: "Eu comi o bolo.", highlightWord: "have eaten" },
        { en: "She has written her name in the notebook.", pt: "Ela escreveu o nome dela no caderno.", highlightWord: "has written" },
        { en: "We have visited many beautiful countries.", pt: "Nós visitamos muitos países lindos.", highlightWord: "have visited" },
        { en: "He has finished his university degree.", pt: "Ele concluiu o diploma universitário dele.", highlightWord: "has finished" }
      ],
      negatives: [
        { en: "I haven't eaten the cake.", pt: "Eu não comi o bolo.", highlightWord: "haven't eaten" },
        { en: "She hasn't received the email.", pt: "Ela não recebeu o e-mail.", highlightWord: "hasn't received" },
        { en: "They haven't seen the new movie.", pt: "Eles não viram o filme novo.", highlightWord: "haven't seen" }
      ],
      interrogatives: [
        { en: "Have you eaten the cake?", pt: "Você comeu o bolo?", highlightWord: "Have you eaten" },
        { en: "What have you written in your notebook?", pt: "O que você escreveu no seu caderno?", highlightWord: "have you written" },
        { en: "Where have you bought this car?", pt: "Onde você comprou este carro?", highlightWord: "have you bought" },
        { en: "Has she finished her work?", pt: "Ela terminou o trabalho dela?", highlightWord: "Has she finished" }
      ]
    },
    illustratedStory: {
      title: "As Viagens Internacionais da Mariana",
      storyEn: "Mariana is an avid traveler. She has visited twelve countries and has tried exotic cuisines around the world. Has she seen the pyramids in Egypt? Yes, she has! When did she go? She went there two years ago.",
      storyPt: "Mariana é uma viajante dedicada. Ela já visitou doze países e experimentou culinárias exóticas pelo mundo. Ela viu as pirâmides no Egito? Sim, viu! Quando ela foi? Ela foi lá dois anos atrás.",
      highlightSentence: "She has visited twelve countries, but she went to Egypt two years ago.",
      visualTheme: "travel",
      tags: ["Experiences", "Present Perfect", "Life Story"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é a fórmula do Present Perfect?", options: ["Sujeito + have/has + Particípio do verbo", "Sujeito + did + Verbo no infinitivo", "Sujeito + was/were + Verbo com -ing", "Sujeito + have + Verbo com -ed apenas"], correctAnswer: "Sujeito + have/has + Particípio do verbo", explanation: "Have/has + particípio passado (3ª coluna).", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete com o particípio de 'eat' (comer): 'I have _____ the delicious pizza.'", options: ["eaten", "ate", "eating", "eated"], correctAnswer: "eaten", explanation: "Eat -> Ate (passado) -> Eaten (particípio).", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete com o auxiliar para 'He': 'He _____ (has / have) lived in Canada.'", correctAnswer: "has", explanation: "Com 'He/She/It' usamos 'has'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Quando mencionamos uma data exata no passado (ex: 'yesterday'), qual tempo verbal devemos usar?", options: ["Simple Past (ex: I wrote it yesterday)", "Present Perfect (ex: I have written it yesterday)", "Past Continuous", "Present Continuous"], correctAnswer: "Simple Past (ex: I wrote it yesterday)", explanation: "Tempo específico no passado exige Simple Past.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'We _____ (não vimos) that movie.' (haven't seen)", correctAnswer: "haven't seen", explanation: "We haven't seen that movie.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'Você viu meu cachorro?'", options: ["Have you seen my dog?", "Did you seen my dog?", "Are you seen my dog?", "Have you saw my dog?"], correctAnswer: "Have you seen my dog?", explanation: "Have you seen my dog?", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'She _____ (perdeu) her keys.' (particípio de lose: lost)", options: ["has lost", "have lost", "is lost", "lost has"], correctAnswer: "has lost", explanation: "She has lost her keys.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete o particípio de 'write': 'I have _____ three emails today.'", correctAnswer: "written", explanation: "Write -> wrote -> written.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Qual frase está gramaticalmente correta?", options: ["They have visited Rome.", "They has visited Rome.", "They have visit Rome.", "They have visiting Rome."], correctAnswer: "They have visited Rome.", explanation: "They have visited...", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente 'Sim, eu vi' para 'Have you seen it?'", options: ["Yes, I have.", "Yes, I did.", "Yes, I have seen it to.", "Yes, I am."], correctAnswer: "Yes, I have.", explanation: "Resposta curta no Present Perfect: 'Yes, I have.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What are 3 interesting experiences you have had in your life (places you have visited, foods you have tried, or milestones you have achieved)?",
      contextPt: "Conte sobre experiências marcantes da sua vida em inglês usando o Present Perfect ('I have visited...', 'I have tried...').",
      exampleAnswer: "In my life, I have traveled to five Brazilian states and I have swum in the ocean at sunrise. I have also learned how to program computers and I have made lifelong friends.",
      hints: ["Use 'I have visited [lugar]'", "Use 'I have tried [comida]'", "Use 'I have achieved [conquista]'"]
    },
    plannerExerciseSuggestion: "Crie uma lista de 5 conquistas da sua vida usando 'I have + Particípio' (ex: 'I have graduated from college', 'I have learned to drive', 'I have read 20 books')."
  }
];
