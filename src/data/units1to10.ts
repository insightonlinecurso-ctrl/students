import { GrammarUnit } from '../types';

export const UNITS_1_TO_10: GrammarUnit[] = [
  {
    id: 1,
    number: 1,
    title: "Auxiliary: Do",
    subtitle: "Estruturas no Presente com I, You, We, They",
    category: "Auxiliares",
    estimatedHours: 1,
    explanation: "O auxiliar 'DO' é a chave para fazer perguntas e formar frases negativas no presente simples para os pronomes I (eu), You (você/vocês), We (nós) e They (eles/elas). Lembre-se: em frases afirmativas, usamos a ordem básica 'Sujeito + Verbo + Objeto' sem precisar do 'do'. Quando juntamos dois verbos na mesma frase afirmativa, usamos a partícula 'to' entre eles (ex: I like to eat waffles). Para negar, usamos 'do not' ou a contração coloquial 'don't'. Para perguntar, o 'Do' pula para o comecinho da frase!",
    keyRules: [
      "Afirmativa: Sujeito + Verbo + Objeto (ex: You cook eggs)",
      "Negativa: Sujeito + don't (do not) + Verbo + Complemento (ex: You don't cook eggs)",
      "Interrogativa: Do + Sujeito + Verbo + Complemento? (ex: Do you cook eggs?)",
      "Dois verbos juntos na frase afirmativa levam 'to' no meio (ex: I like to study English)"
    ],
    videoUrl: "https://drive.google.com/file/d/1_vKGsGqnO4xrp8s1s6xWjG87X39Y4x3t/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I love cats.", pt: "Eu amo gatos.", highlightWord: "love" },
        { en: "You need help.", pt: "Você precisa de ajuda.", highlightWord: "need" },
        { en: "We study English.", pt: "Nós estudamos inglês.", highlightWord: "study" },
        { en: "They like lasagna.", pt: "Eles gostam de lasanha.", highlightWord: "like" },
        { en: "I like to eat waffles.", pt: "Eu gosto de comer waffles.", highlightWord: "to eat" }
      ],
      negatives: [
        { en: "We don't like sushi.", pt: "Não gostamos de sushi.", highlightWord: "don't" },
        { en: "You don't speak Spanish.", pt: "Você não fala espanhol.", highlightWord: "don't" },
        { en: "They don't watch Netflix.", pt: "Elas não assistem Netflix.", highlightWord: "don't" },
        { en: "I don't play soccer.", pt: "Eu não jogo futebol.", highlightWord: "don't" }
      ],
      interrogatives: [
        { en: "Do I look nice?", pt: "Eu pareço legal?", highlightWord: "Do" },
        { en: "Do you need help?", pt: "Você precisa de ajuda?", highlightWord: "Do" },
        { en: "Do they know Andrew?", pt: "Eles conhecem Andrew?", highlightWord: "Do" },
        { en: "Do we have time?", pt: "Nós temos tempo?", highlightWord: "Do" }
      ]
    },
    illustratedStory: {
      title: "Café da manhã de Domingo",
      storyEn: "Every Sunday morning, my friends and I meet at the diner. I like to eat waffles with honey, but they don't like sweet food. Do you know what they order? They always order eggs and bacon!",
      storyPt: "Todo domingo de manhã, meus amigos e eu nos encontramos na lanchonete. Eu gosto de comer waffles com mel, mas eles não gostam de comida doce. Você sabe o que eles pedem? Eles sempre pedem ovos e bacon!",
      highlightSentence: "I like to eat waffles, but they don't like sweet food.",
      visualTheme: "cafe",
      tags: ["Breakfast", "Preferences", "Daily Routine"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como fica a pergunta: 'Você estuda inglês?'", options: ["Do you study English?", "Are you study English?", "Does you study English?", "You study English?"], correctAnswer: "Do you study English?", explanation: "Com o pronome 'you' no presente simples, usamos o auxiliar 'Do' no início da pergunta.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'We _____ play soccer on Mondays.' (Nós não jogamos...)", options: ["don't", "doesn't", "not", "isn't"], correctAnswer: "don't", explanation: "Para o pronome 'We', a negação é 'don't' (do not).", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha com o auxiliar correto para pergunta: '____ they work at the hospital?'", correctAnswer: "Do", explanation: "Com o pronome 'they', usa-se o auxiliar 'Do'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Escolha a frase gramaticalmente correta:", options: ["I like eat pizza.", "I like to eat pizza.", "I liking eat pizza.", "I to like eat pizza."], correctAnswer: "I like to eat pizza.", explanation: "Dois verbos juntos levam 'to' no meio: 'like to eat'.", points: 10 },
      { id: 5, type: "multiple-choice", prompt: "Qual a forma negativa de 'They speak German'?", options: ["They don't speak German.", "They doesn't speak German.", "They no speak German.", "They not speak German."], correctAnswer: "They don't speak German.", explanation: "'They' requer o auxiliar negativo 'don't'.", points: 10 },
      { id: 6, type: "fill-blank", prompt: "Preencha a lacuna: 'I _____ know the answer to this question.' (não sei)", correctAnswer: "don't", explanation: "A negação de 'I know' é 'I don't know'.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Transforme em pergunta: 'You have a car.'", options: ["Do you have a car?", "Have you do a car?", "Does you have a car?", "Are you have a car?"], correctAnswer: "Do you have a car?", explanation: "Inicia-se a pergunta de rotina/posse com 'Do you have...?'", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["We don't need help.", "We doesn't needs help.", "We no need help.", "We aren't need help."], correctAnswer: "We don't need help.", explanation: "'We don't need help' está na estrutura correta.", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Complete: 'Do you want ____ go to the cinema tonight?' (ir)", correctAnswer: "to", explanation: "Entre os verbos 'want' e 'go' colocamos 'to'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como se diz: 'Eles gostam de pizza?'", options: ["Do they like pizza?", "Does they like pizza?", "Are they like pizza?", "They like pizza?"], correctAnswer: "Do they like pizza?", explanation: "Para 'they', a pergunta é 'Do they like...?'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "What do you like to do on weekends? Do you prefer to stay at home or go out with friends?",
      contextPt: "Responda em inglês falando sobre o que você gosta de fazer nos finais de semana, usando 'I like to...' e frases com 'don't'.",
      exampleAnswer: "On weekends, I like to watch movies at home. I don't go to crowded places because I prefer to relax with my family.",
      hints: ["Use 'I like to [verbo]'", "Use 'I don't [verbo]' para dizer o que não faz", "Ex: I like to cook, I don't wake up early."]
    },
    plannerExerciseSuggestion: "Escreva 5 frases sobre seus hábitos de fim de semana: 2 afirmativas usando 'like to', 2 negativas com 'don't' e 1 pergunta para um colega usando 'Do you...?'."
  },
  {
    id: 2,
    number: 2,
    title: "Auxiliary: Does",
    subtitle: "Terceira Pessoa do Singular: He, She, It",
    category: "Auxiliares",
    estimatedHours: 1,
    explanation: "Na terceira pessoa do singular (He = ele, She = ela, It = coisas/animais), o verbo sofre alterações na frase afirmativa! Adicionamos -S ou -ES ao final do verbo. Regra de ouro: se o verbo terminar em S, SS, SH, CH, X, Z, O, adicione -ES (pass -> passes, watch -> watches, go -> goes, do -> does). Se terminar em consoante + Y, troque por -IES (cry -> cries, fry -> fries). Mas atenção: na NEGATIVA (doesn't) e na INTERROGATIVA (Does...?), o verbo volta à sua forma base normal, sem 'S'!",
    keyRules: [
      "Afirmativa: He / She / It + Verbo com terminação -S / -ES / -IES (ex: She likes apples; He watches TV)",
      "Regra do -ES: verbos com final S, SS, SH, CH, X, Z, O (ex: fix -> fixes, go -> goes)",
      "Regra do -IES: consoante + Y (ex: fly -> flies, study -> studies)",
      "Negativa: He / She / It + doesn't + Verbo NORMAL (ex: She doesn't like apples)",
      "Interrogativa: Does + He / She / It + Verbo NORMAL? (ex: Does she like apples?)"
    ],
    videoUrl: "https://drive.google.com/file/d/1xD4CCndpAJgDsWlC57LYO4O6MDtL-yv-/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "She watches the news.", pt: "Ela assiste ao noticiário.", highlightWord: "watches" },
        { en: "He plays the piano.", pt: "Ele toca o piano.", highlightWord: "plays" },
        { en: "It likes to play.", pt: "Ele gosta de brincar.", highlightWord: "likes" },
        { en: "He goes to work early.", pt: "Ele vai para o trabalho cedo.", highlightWord: "goes" },
        { en: "She fries eggs in the morning.", pt: "Ela frita ovos de manhã.", highlightWord: "fries" }
      ],
      negatives: [
        { en: "He doesn't like rice.", pt: "Ele não gosta de arroz.", highlightWord: "doesn't" },
        { en: "She doesn't hate broccoli.", pt: "Ela não odeia brócolis.", highlightWord: "doesn't" },
        { en: "It doesn't taste good.", pt: "Ele não tem um gosto bom.", highlightWord: "doesn't" },
        { en: "He doesn't watch TV.", pt: "Ele não assiste TV.", highlightWord: "doesn't" }
      ],
      interrogatives: [
        { en: "Does she eat soup?", pt: "Ela come sopa?", highlightWord: "Does" },
        { en: "Does he read books?", pt: "Ele lê livros?", highlightWord: "Does" },
        { en: "Does it come with a case?", pt: "Ele vem com uma capinha?", highlightWord: "Does" },
        { en: "Does she have a sister?", pt: "Ela tem uma irmã?", highlightWord: "Does" }
      ]
    },
    illustratedStory: {
      title: "A rotina da Clara",
      storyEn: "Clara is an architect. Every morning, she watches the news while she drinks her coffee. She doesn't take the bus because she goes to work by car. Does she work late? Yes, she works until 7 PM!",
      storyPt: "Clara é uma arquiteta. Toda manhã, ela assiste ao noticiário enquanto toma seu café. Ela não pega ônibus porque vai trabalhar de carro. Ela trabalha até tarde? Sim, ela trabalha até às 19h!",
      highlightSentence: "She watches the news and goes to work by car.",
      visualTheme: "office",
      tags: ["Daily Routine", "He/She/It", "Work"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual a forma correta do verbo 'watch' com 'She' na afirmativa?", options: ["She watches", "She watchs", "She watchies", "She watch"], correctAnswer: "She watches", explanation: "Verbos terminados em -ch recebem -es na terceira pessoa: watches.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'He _____ speak French.' (Ele não fala...)", options: ["doesn't", "don't", "isn't", "not"], correctAnswer: "doesn't", explanation: "Para 'He', a negação no presente simples é 'doesn't'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a pergunta: '_____ your brother live in Toronto?'", correctAnswer: "Does", explanation: "'Your brother' equivale a 'He', portanto usamos 'Does'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["She doesn't likes apples.", "She doesn't like apples.", "She not like apples.", "She don't likes apples."], correctAnswer: "She doesn't like apples.", explanation: "Após o auxiliar 'doesn't', o verbo principal fica na forma base (like).", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Passe o verbo 'study' para a 3ª pessoa afirmativa: 'He _____ every night.'", correctAnswer: "studies", explanation: "Consoante + Y vira -ies: study -> studies.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'Ela tem um carro preto?'", options: ["Does she have a black car?", "Does she has a black car?", "Do she have a black car?", "Has she a black car?"], correctAnswer: "Does she have a black car?", explanation: "Com 'Does', o verbo 'have' fica na forma base.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual a 3ª pessoa correta do verbo 'go'?", options: ["goes", "gos", "goies", "go's"], correctAnswer: "goes", explanation: "Verbos terminados em -o recebem -es: goes.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Complete: 'My computer _____ work properly.' (não funciona)", options: ["doesn't", "don't", "isn't", "not"], correctAnswer: "doesn't", explanation: "'My computer' é 'It', portanto usamos 'doesn't'.", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Complete: 'She _____ (fly) to Miami every month.'", correctAnswer: "flies", explanation: "Fly termina em consoante + y, tornando-se flies.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Qual frase está com a pontuação e gramática perfeitas?", options: ["Does he goes to school early?", "Does he go to school early?", "Do he goes to school early?", "He does goes to school early?"], correctAnswer: "Does he go to school early?", explanation: "Pergunta correta com 'Does he go...?'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Describe a member of your family (mother, father, brother, sister). What does he or she do every day? What doesn't he/she like?",
      contextPt: "Descreva uma pessoa da sua família em inglês usando a terceira pessoa (He/She) com verbos terminados em -s e negações com 'doesn't'.",
      exampleAnswer: "My sister Maria is a doctor. She wakes up at 6 AM, drinks green tea, and drives to the hospital. She doesn't like fast food, but she loves Italian pasta.",
      hints: ["Ex: My mother works as a teacher.", "Ex: She doesn't like cold weather.", "Ex: He plays soccer on Sundays."]
    },
    plannerExerciseSuggestion: "Descreva membros de sua família dizendo algo que eles têm e que não têm. Ex.: Sara is my mother. She does not have black hair, but she has blue eyes. She works in an office and loves to read."
  },
  {
    id: 3,
    number: 3,
    title: "To be (Am - Are - Is)",
    subtitle: "O verbo fundamental para ser e estar",
    category: "To Be",
    estimatedHours: 3,
    explanation: "O verbo 'To Be' significa tanto SER quanto ESTAR. Ao contrário de outros verbos, ele não precisa de 'do/does' para negações ou perguntas, ele mesmo se modifica e se move! Memorize o trio: I am, You are, He is, She is, It is, We are, They are. Para negar, basta colocar 'not' logo depois (I am not, isn't, aren't). Para perguntar, o To Be vai para a frente do sujeito (Are you...? Is she...?).",
    keyRules: [
      "I -> am | I'm not | Am I...?",
      "You / We / They -> are | aren't (are not) | Are you / we / they...?",
      "He / She / It -> is | isn't (is not) | Is he / she / it...?",
      "Nunca use 'do/does' junto com o verbo To Be no presente!"
    ],
    videoUrl: "https://drive.google.com/file/d/1EAsowflj61mjONR5PnE_F5AHdoCxX-cG/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I am a student.", pt: "Eu sou um estudante.", highlightWord: "am" },
        { en: "You are my friend.", pt: "Você é meu amigo.", highlightWord: "are" },
        { en: "She is a doctor.", pt: "Ela é médica.", highlightWord: "is" },
        { en: "It is very cold today.", pt: "Está muito frio hoje.", highlightWord: "is" },
        { en: "We are ready for the test.", pt: "Nós estamos prontos para a prova.", highlightWord: "are" }
      ],
      negatives: [
        { en: "We aren't at home.", pt: "Nós não estamos em casa.", highlightWord: "aren't" },
        { en: "She isn't Canadian.", pt: "Ela não é canadense.", highlightWord: "isn't" },
        { en: "I'm not tired.", pt: "Eu não estou cansado.", highlightWord: "I'm not" },
        { en: "They aren't happy with the result.", pt: "Eles não estão felizes com o resultado.", highlightWord: "aren't" }
      ],
      interrogatives: [
        { en: "Are you American?", pt: "Você é americano?", highlightWord: "Are" },
        { en: "Is she the manager?", pt: "Ela é a gerente?", highlightWord: "Is" },
        { en: "Is it raining outside?", pt: "Está chovendo lá fora?", highlightWord: "Is" },
        { en: "Are they at the beach?", pt: "Eles estão na praia?", highlightWord: "Are" }
      ]
    },
    illustratedStory: {
      title: "Novos amigos na empresa",
      storyEn: "Lucas is a software engineer from Brazil. He is in Chicago for a conference. Is it cold in Chicago? Yes, it is freezing! But the people are very friendly.",
      storyPt: "Lucas é um engenheiro de software do Brasil. Ele está em Chicago para uma conferência. Está frio em Chicago? Sim, está congelando! Mas as pessoas são muito amigáveis.",
      highlightSentence: "He is in Chicago and the people are very friendly.",
      visualTheme: "travel",
      tags: ["Identity", "Professions", "Emotions"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete: 'They _____ from Germany.'", options: ["are", "is", "am", "be"], correctAnswer: "are", explanation: "Para o pronome 'They', a forma correta é 'are'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'She _____ ready yet.' (não está)", options: ["isn't", "aren't", "am not", "doesn't"], correctAnswer: "isn't", explanation: "A negação de 'She is' é 'She isn't'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a pergunta: '_____ he your brother?'", correctAnswer: "Is", explanation: "Para 'he', a pergunta começa com 'Is'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual frase expressa negação correta com 'I'?", options: ["I'm not rich.", "I isn't rich.", "I aren't rich.", "I don't be rich."], correctAnswer: "I'm not rich.", explanation: "Com 'I', a forma negativa é 'I am not' ou 'I'm not'.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha: 'You and I _____ a great team!'", correctAnswer: "are", explanation: "'You and I' equivale a 'We' (nós), portanto o verbo é 'are'.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'Vocês estão com fome?'", options: ["Are you guys hungry?", "Do you guys hungry?", "Is you guys hungry?", "Are you have hungry?"], correctAnswer: "Are you guys hungry?", explanation: "Em inglês, 'estar com fome' usa o verbo to be: 'Are you hungry?'.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: 'The weather _____ amazing today.'", options: ["is", "are", "am", "be"], correctAnswer: "is", explanation: "'The weather' é singular (it), logo usamos 'is'.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Qual opção está incorreta?", options: ["Do you be a teacher?", "Are you a teacher?", "Is she at home?", "We aren't late."], correctAnswer: "Do you be a teacher?", explanation: "Nunca se usa o auxiliar 'do' com 'to be'. O correto é 'Are you a teacher?'.", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Preencha a lacuna com a contração: 'We _____ (are not) late.'", correctAnswer: "aren't", explanation: "'Are not' contraído é 'aren't'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder afirmativamente a 'Are you ready?'", options: ["Yes, I am.", "Yes, I do.", "Yes, I have.", "Yes, I are."], correctAnswer: "Yes, I am.", explanation: "A resposta curta afirmativa para 'Are you...?' é 'Yes, I am.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Tell me about yourself! What is your profession, where are you right now, and how are you feeling today?",
      contextPt: "Apresente-se em inglês usando o verbo To Be (I am / I'm not). Diga quem você é, onde está e como se sente.",
      exampleAnswer: "I am a Brazilian student and I am excited to learn English. Right now, I am in my home office and I am very happy with my progress.",
      hints: ["I am a/an [profissão]", "I am in [lugar]", "I am [sentimento: happy, ready, focused]"]
    },
    plannerExerciseSuggestion: "Escreva um perfil pessoal de 6 frases usando 'To be': 2 frases dizendo quem você é e sua profissão, 2 frases sobre onde você e sua família estão, e 2 perguntas usando 'Are you...?' e 'Is it...?'."
  },
  {
    id: 4,
    number: 4,
    title: "Auxiliary: Did",
    subtitle: "O Passado Simples (Simple Past) em Ação",
    category: "Auxiliares",
    estimatedHours: 2,
    explanation: "O auxiliar 'DID' é o mestre do passado simples em inglês para TODOS os pronomes (I, you, he, she, it, we, they). Em frases afirmativas no passado, verbos regulares recebem -ED (cook -> cooked, watch -> watched), enquanto verbos irregulares mudam totalmente (drink -> drank, see -> saw, buy -> bought). Porém, a regra mais libertadora do inglês é: na NEGATIVA ('didn't') e na INTERROGATIVA ('Did...?'), o verbo principal VOLTA para a forma normal do presente!",
    keyRules: [
      "Afirmativa: Sujeito + Verbo no Passado (Regular com -ED ou Irregular) (ex: You cooked eggs; You saw the movie)",
      "Negativa: Sujeito + didn't + Verbo NORMAL no infinitivo (ex: You didn't drink the coffee; She didn't watch the show)",
      "Interrogativa: Did + Sujeito + Verbo NORMAL? (ex: Did you have a good weekend? Did she call you?)"
    ],
    videoUrl: "https://drive.google.com/file/d/1c9r5anqwTwCGhjltP3UIZI37lYIR193B/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "She watched the show.", pt: "Ela assistiu ao programa.", highlightWord: "watched" },
        { en: "You saw the movie.", pt: "Você viu o filme.", highlightWord: "saw" },
        { en: "We visited our grandparents.", pt: "Nós visitamos nossos avós.", highlightWord: "visited" },
        { en: "He bought a new car yesterday.", pt: "Ele comprou um carro novo ontem.", highlightWord: "bought" }
      ],
      negatives: [
        { en: "You didn't drink all the beer.", pt: "Você não bebeu toda a cerveja.", highlightWord: "didn't drink" },
        { en: "She didn't watch the show.", pt: "Ela não assistiu ao programa.", highlightWord: "didn't watch" },
        { en: "They didn't come to the party.", pt: "Eles não vieram para a festa.", highlightWord: "didn't come" },
        { en: "I didn't eat fast food yesterday.", pt: "Eu não comi fast food ontem.", highlightWord: "didn't eat" }
      ],
      interrogatives: [
        { en: "Did you have a good weekend?", pt: "Você teve um bom final de semana?", highlightWord: "Did you have" },
        { en: "Did you watch any movies recently?", pt: "Você assistiu a algum filme recentemente?", highlightWord: "Did you watch" },
        { en: "Did you eat out at a restaurant this week?", pt: "Você comeu fora em um restaurante nesta semana?", highlightWord: "Did you eat" },
        { en: "Did you visit any interesting places lately?", pt: "Você visitou algum lugar interessante ultimamente?", highlightWord: "Did you visit" }
      ]
    },
    illustratedStory: {
      title: "O Fim de Semana do Pedro",
      storyEn: "Last Saturday, Pedro traveled to the mountains. He hiked with his friends and cooked a delicious barbecue. He didn't check his work emails all weekend. Did he take photos? Yes, he took hundreds of amazing pictures!",
      storyPt: "No sábado passado, Pedro viajou para as montanhas. Ele fez trilha com os amigos e cozinhou um churrasco delicioso. Ele não checou os e-mails de trabalho o fim de semana todo. Ele tirou fotos? Sim, tirou centenas de fotos incríveis!",
      highlightSentence: "He cooked a delicious meal and he didn't check his work emails.",
      visualTheme: "adventure",
      tags: ["Past Memories", "Weekend", "Travel"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Qual é o passado afirmativo do verbo irregular 'to see' (ver)?", options: ["saw", "seed", "seen", "sawed"], correctAnswer: "saw", explanation: "O passado simples de 'see' é 'saw'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Qual frase negativa está correta?", options: ["I didn't saw the accident.", "I didn't see the accident.", "I not saw the accident.", "I did not seen the accident."], correctAnswer: "I didn't see the accident.", explanation: "Após o auxiliar 'didn't', o verbo volta para a forma base 'see'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a pergunta no passado: '_____ you call your parents yesterday?'", correctAnswer: "Did", explanation: "Perguntas no passado simples começam com 'Did'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual a forma afirmativa no passado de 'cook'?", options: ["cooked", "cookt", "cooking", "did cook"], correctAnswer: "cooked", explanation: "'Cook' é um verbo regular, recebe -ed.", points: 10 },
      { id: 5, type: "multiple-choice", prompt: "Como se pergunta: 'Você comeu fora ontem?'", options: ["Did you eat out yesterday?", "Did you ate out yesterday?", "Do you ate out yesterday?", "Were you eat out yesterday?"], correctAnswer: "Did you eat out yesterday?", explanation: "Estrutura: Did + sujeito + verbo base (eat).", points: 10 },
      { id: 6, type: "fill-blank", prompt: "Preencha a negação: 'We _____ (não fomos) to the beach because it rained.'", correctAnswer: "didn't go", explanation: "Negação no passado com 'go': 'didn't go'.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual é o passado de 'buy' (comprar)?", options: ["bought", "buyed", "boughted", "buyn"], correctAnswer: "bought", explanation: "'Buy' é irregular e seu passado é 'bought'.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Qual frase está incorreta?", options: ["Did she studied for the test?", "Did she study for the test?", "She studied for the test.", "She didn't study for the test."], correctAnswer: "Did she studied for the test?", explanation: "Em perguntas com 'Did', o verbo não pode ter -ed ('Did she study?').", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Complete: 'They _____ (chegaram) in London last night.' (regular: arrive)", correctAnswer: "arrived", explanation: "Verbos terminados em 'e' recebem apenas 'd': arrived.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder 'Sim, eu tive' para 'Did you have a good time?'", options: ["Yes, I did.", "Yes, I had.", "Yes, I have.", "Yes, I was."], correctAnswer: "Yes, I did.", explanation: "Resposta curta no passado simples usa o auxiliar 'did'.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Did you do anything exciting last weekend? Where did you go, who did you meet, and what did you eat?",
      contextPt: "Conte o que você fez no último fim de semana em inglês, usando verbos no passado e a negação 'didn't'.",
      exampleAnswer: "Last weekend, I visited an Italian restaurant with my best friends. We ate delicious pizza and talked for hours. I didn't stay up late because I was tired.",
      hints: ["Use 'I went to...', 'I ate...', 'I met...'", "Use 'I didn't [verbo]' para o que não fez"]
    },
    plannerExerciseSuggestion: "Escreva um diário de 5 frases sobre seu dia de ontem: 3 coisas que você fez (verbos no passado com -ed e irregulares) e 2 coisas que você não fez ('didn't + verbo')."
  },
  {
    id: 5,
    number: 5,
    title: "Auxiliary: Was - Were",
    subtitle: "O Verbo To Be no Passado (Era / Estava / Fui)",
    category: "To Be",
    estimatedHours: 3,
    explanation: "Quando queremos dizer 'era', 'estava' ou 'fui' (no sentido de estado ou localização), usamos 'WAS' e 'WERE'. A divisão é direta: I was, He was, She was, It was. Para os plurais e You: You were, We were, They were. Para negar: wasn't (was not) e weren't (were not). Para perguntar, eles vão para a frente da frase: 'Were you here yesterday?' ou 'Was she happy?'.",
    keyRules: [
      "I / He / She / It -> WAS | wasn't | Was I / he / she / it...?",
      "You / We / They -> WERE | weren't | Were you / we / they...?",
      "Nunca use 'did' junto com was/were!",
      "Expressa estados, características, emoções e locais no passado."
    ],
    videoUrl: "https://drive.google.com/file/d/1mwnFwTjSgXuF9EWZ7Rfwg1VS07_uJv5L/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "You were here last night.", pt: "Você estava aqui ontem à noite.", highlightWord: "were" },
        { en: "She was sad because of the movie.", pt: "Ela estava triste por causa do filme.", highlightWord: "was" },
        { en: "We were the best in that game.", pt: "Nós fomos os melhores naquele jogo.", highlightWord: "were" },
        { en: "I was a fan of Popeye as a child.", pt: "Eu era fã do Popeye quando criança.", highlightWord: "was" }
      ],
      negatives: [
        { en: "You were not here last night.", pt: "Você não estava aqui ontem à noite.", highlightWord: "were not" },
        { en: "She wasn't sad.", pt: "Ela não estava triste.", highlightWord: "wasn't" },
        { en: "We weren't tired after the trip.", pt: "Nós não estávamos cansados após a viagem.", highlightWord: "weren't" },
        { en: "It wasn't expensive.", pt: "Não foi caro.", highlightWord: "wasn't" }
      ],
      interrogatives: [
        { en: "Were you a morning person when you were a child?", pt: "Você era uma pessoa matutina quando era criança?", highlightWord: "Were you" },
        { en: "Was she at the meeting yesterday?", pt: "Ela estava na reunião ontem?", highlightWord: "Was she" },
        { en: "Were they happy with the news?", pt: "Eles estavam felizes com a notícia?", highlightWord: "Were they" },
        { en: "Were you interested in any sports during school days?", pt: "Você estava interessado em esportes na escola?", highlightWord: "Were you" }
      ]
    },
    illustratedStory: {
      title: "Lembranças de Infância",
      storyEn: "When Arthur was ten years old, he was very curious about outer space. He was in the science club at school. His parents were very proud of his grades. Were you curious about science as a kid?",
      storyPt: "Quando Arthur tinha dez anos, ele era muito curioso sobre o espaço sideral. Ele estava no clube de ciências da escola. Seus pais estavam muito orgulhosos das notas dele. Você era curioso sobre ciência quando criança?",
      highlightSentence: "He was very curious about space and his parents were proud.",
      visualTheme: "memories",
      tags: ["Childhood", "Emotions", "Past States"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete: 'I _____ very busy yesterday afternoon.'", options: ["was", "were", "did be", "been"], correctAnswer: "was", explanation: "Com o pronome 'I', usamos 'was'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'They _____ at school this morning.' (não estavam)", options: ["weren't", "wasn't", "didn't", "not were"], correctAnswer: "weren't", explanation: "Com 'They', a negação é 'weren't'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete a pergunta: '_____ you at home yesterday evening?'", correctAnswer: "Were", explanation: "Com 'you', a pergunta no passado de to be começa com 'Were'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'The test _____ very difficult.'", options: ["was", "were", "did", "are"], correctAnswer: "was", explanation: "'The test' é singular (it), logo usamos 'was'.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'She _____ (was not) ready for the interview.'", correctAnswer: "wasn't", explanation: "Contração de 'was not' é 'wasn't'.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Como se pergunta: 'O filme foi bom?'", options: ["Was the movie good?", "Did the movie good?", "Were the movie good?", "Is the movie good?"], correctAnswer: "Was the movie good?", explanation: "'The movie' é singular, pergunta no passado: 'Was the movie...?'", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["We were in Paris last year.", "We was in Paris last year.", "We did were in Paris last year.", "We been in Paris last year."], correctAnswer: "We were in Paris last year.", explanation: "'We' concorda com 'were'.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Complete: '_____ they surprised with the party?'", options: ["Were", "Was", "Did", "Have"], correctAnswer: "Were", explanation: "Com 'they', usamos 'Were'.", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Preencha: 'My brother and I _____ (estávamos) excited.'", correctAnswer: "were", explanation: "'My brother and I' = We, portanto 'were'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder 'Sim, eu estava' a 'Were you tired?'", options: ["Yes, I was.", "Yes, I were.", "Yes, I did.", "Yes, I am."], correctAnswer: "Yes, I was.", explanation: "Resposta com 'I' usa 'was': 'Yes, I was.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Were you a good student in high school? What was your favorite subject and who was your favorite teacher?",
      contextPt: "Conte sobre seus anos de escola em inglês usando 'I was...', 'My favorite subject was...' e 'We were...'.",
      exampleAnswer: "In high school, I was an energetic and dedicated student. My favorite subject was History because the teacher was incredible. My friends and I were always together in the library.",
      hints: ["Use 'I was...', 'I wasn't...'", "Use 'My favorite teacher was Mr./Ms. ...'", "Use 'The classes were interesting.'"]
    },
    plannerExerciseSuggestion: "Escreva 5 perguntas e respostas sobre sua infância: 'Were you a fan of cartoons?', 'Where were you born?', 'Who was your best friend as a kid?'."
  },
  {
    id: 6,
    number: 6,
    title: "Continuous",
    subtitle: "Present & Past Continuous (Ações em Andamento)",
    category: "To Be",
    estimatedHours: 2,
    explanation: "O tempo contínuo (Continuous) expressa ações que estão ou estavam acontecendo em tempo real. A fórmula mágica é simples: Sujeito + Verbo To Be (am/is/are no presente ou was/were no passado) + Verbo Principal com -ING + Complemento. Para negar, adicione 'not' após o To Be (I am not working / She wasn't sleeping). Para perguntar, o To Be vem na frente: 'Are you studying?' ou 'Were you listening?'.",
    keyRules: [
      "Presente Contínuo: Sujeito + am/is/are + Verbo-ING (ex: I am studying; She is working)",
      "Passado Contínuo: Sujeito + was/were + Verbo-ING (ex: We were learning English; He was sleeping)",
      "Negativa: Sujeito + To Be + not + Verbo-ING (ex: I am not sleeping; They weren't playing)",
      "Interrogativa: To Be + Sujeito + Verbo-ING? (ex: Are you studying? Were they waiting?)"
    ],
    videoUrl: "https://drive.google.com/file/d/1qGFqc7jSp3G3_BvLOuwlUuxNBAOvHl6p/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I am studying English now.", pt: "Eu estou estudando inglês agora.", highlightWord: "am studying" },
        { en: "He is sleeping peacefully.", pt: "Ele está dormindo tranquilamente.", highlightWord: "is sleeping" },
        { en: "She is working on a new project.", pt: "Ela está trabalhando em um novo projeto.", highlightWord: "is working" },
        { en: "We were learning grammar yesterday.", pt: "Nós estávamos aprendendo gramática ontem.", highlightWord: "were learning" }
      ],
      negatives: [
        { en: "I am not sleeping.", pt: "Eu não estou dormindo.", highlightWord: "am not sleeping" },
        { en: "She is not working today.", pt: "Ela não está trabalhando hoje.", highlightWord: "is not working" },
        { en: "It is not raining right now.", pt: "Não está chovendo agora.", highlightWord: "is not raining" },
        { en: "We were not wasting time.", pt: "Nós não estávamos perdendo tempo.", highlightWord: "were not wasting" }
      ],
      interrogatives: [
        { en: "Are you studying for the test?", pt: "Você está estudando para a prova?", highlightWord: "Are you studying" },
        { en: "Is he working right now?", pt: "Ele está trabalhando agora?", highlightWord: "Is he working" },
        { en: "Is it raining outside?", pt: "Está chovendo lá fora?", highlightWord: "Is it raining" },
        { en: "Were we learning English?", pt: "Nós estávamos aprendendo inglês?", highlightWord: "Were we learning" }
      ]
    },
    illustratedStory: {
      title: "Uma Tarde Chuvosa",
      storyEn: "Outside, it is raining heavily. Inside the cozy cafe, Sarah is drinking a hot cappuccino and reading her favorite book. Across the table, her friend is writing in a journal. They are enjoying the peaceful afternoon.",
      storyPt: "Lá fora, está chovendo forte. Dentro do café aconchegante, Sarah está tomando um cappuccino quente e lendo seu livro favorito. Do outro lado da mesa, sua amiga está escrevendo em um diário. Elas estão aproveitando a tarde tranquila.",
      highlightSentence: "Sarah is drinking cappuccino and her friend is writing in a journal.",
      visualTheme: "cafe",
      tags: ["Actions Now", "Continuous", "Weather"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete com o Present Continuous: 'Look! It _____ (rain).'", options: ["is raining", "are raining", "rains", "was raining"], correctAnswer: "is raining", explanation: "Ação acontecendo no momento ('Look!'): 'is raining'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'What _____ you doing right now?'", options: ["are", "is", "do", "were"], correctAnswer: "are", explanation: "Pergunta no presente contínuo com 'you': 'What are you doing?'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Coloque o verbo 'study' no formato correto: 'She is _____ for her exam.'", correctAnswer: "studying", explanation: "O verbo recebe terminação -ing: studying.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete o Past Continuous: 'Yesterday at 8 PM, we _____ (have) dinner.'", options: ["were having", "was having", "are having", "had been"], correctAnswer: "were having", explanation: "Ação contínua no passado com 'we': 'were having'.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a negação: 'He _____ (não está assistindo) TV.'", correctAnswer: "is not watching", explanation: "Present Continuous negativo: is not watching (ou isn't watching).", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual frase está gramaticalmente correta?", options: ["They are play video games.", "They are playing video games.", "They playing video games.", "They is playing video games."], correctAnswer: "They are playing video games.", explanation: "Estrutura completa: Sujeito + are + verbo-ing.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Como se pergunta: 'Ela estava dormindo quando você chegou?'", options: ["Was she sleeping when you arrived?", "Did she sleeping when you arrived?", "Is she sleeping when you arrived?", "Were she sleeping when you arrived?"], correctAnswer: "Was she sleeping when you arrived?", explanation: "Past Continuous interrogativo com 'she': 'Was she sleeping...?'", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Adicione -ing ao verbo 'run': 'He is _____ very fast.'", correctAnswer: "running", explanation: "Verbos CVC (consoante-vogal-consoante) dobram a última consoante: running.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Complete: 'I _____ (work) on this computer right now.'", options: ["am working", "is working", "are working", "working"], correctAnswer: "am working", explanation: "Com 'I', usamos 'am working'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Qual a resposta correta para 'Are you listening to music?'", options: ["Yes, I am.", "Yes, I do.", "Yes, I listening.", "Yes, I'm listen."], correctAnswer: "Yes, I am.", explanation: "Resposta curta no presente contínuo: 'Yes, I am.'", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Look around your room or imagine your city right now: What are people doing? What is happening around you at this exact moment?",
      contextPt: "Descreva o que está acontecendo agora ao seu redor usando frases no Present Continuous (ex: 'The sun is shining', 'I am typing on my laptop').",
      exampleAnswer: "Right now, I am sitting in my room and studying English. My dog is sleeping on the floor and outside the birds are singing in the trees.",
      hints: ["Use 'I am [verb]-ing'", "Use 'People are [verb]-ing'", "Use 'The sun is shining / It is raining'"]
    },
    plannerExerciseSuggestion: "Observe ao seu redor e anote 6 ações contínuas: 3 coisas que estão acontecendo agora ('is/are -ing') e 3 coisas que estavam acontecendo ontem no mesmo horário ('was/were -ing')."
  },
  {
    id: 7,
    number: 7,
    title: "Pronouns: Subject and Object Pronouns",
    subtitle: "A Dinâmica do Sujeito e do Objeto (Quem comete e quem recebe a ação)",
    category: "Pronomes",
    estimatedHours: 3,
    explanation: "Para dominar os pronomes em inglês, use a metáfora da cena do crime: temos o 'criminoso' (o Sujeito que faz a ação) e a 'vítima' (o Objeto que recebe a ação)! Na frase 'I buy bread', 'I' é o Subject Pronoun. Mas quando o pronome vai para depois do verbo, ele se transforma em Object Pronoun! Veja a tabela comparativa: I -> ME, You -> YOU, He -> HIM, She -> HER, It -> IT, We -> US, They -> THEM. Regra de ouro de etiqueta: quando falar de você e outra pessoa, sempre coloque a outra pessoa primeiro: 'My father and I' (como sujeito) ou 'for my father and me' (como objeto)!",
    keyRules: [
      "Subject Pronouns (antes do verbo): I, You, He, She, It, We, They (ex: She loves ice cream)",
      "Object Pronouns (depois do verbo/preposição): Me, You, Him, Her, It, Us, Them (ex: She loves me; I know her)",
      "Regra de cortesia: Outra pessoa + and I (sujeito): 'My brother and I like music'",
      "Regra de cortesia no objeto: Outra pessoa + and me (objeto): 'He invited my brother and me'",
      "Nunca comece frase com 'Me' como sujeito!"
    ],
    videoUrl: "https://drive.google.com/file/d/1qmtsmo-9cjM93g_PpU_qs1GVKmXbZ1mD/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "I like him, he is my best friend.", pt: "Eu gosto dele, ele é o meu melhor amigo.", highlightWord: "him" },
        { en: "She loves ice cream, but I hate it.", pt: "Ela ama sorvete, mas eu odeio ele.", highlightWord: "it" },
        { en: "I know her very well.", pt: "Eu conheço ela muito bem.", highlightWord: "her" },
        { en: "They want to meet us tomorrow.", pt: "Eles querem se encontrar conosco amanhã.", highlightWord: "us" },
        { en: "My father and I like to go fishing.", pt: "Meu pai e eu gostamos de pescar.", highlightWord: "and I" }
      ],
      negatives: [
        { en: "He doesn't like me.", pt: "Ele não gosta de mim.", highlightWord: "me" },
        { en: "We don't know them.", pt: "Nós não conhecemos eles.", highlightWord: "them" },
        { en: "She doesn't invite him to parties.", pt: "Ela não convida ele para festas.", highlightWord: "him" },
        { en: "They didn't call us yesterday.", pt: "Eles não ligaram para nós ontem.", highlightWord: "us" }
      ],
      interrogatives: [
        { en: "Can you help me, please?", pt: "Você pode me ajudar, por favor?", highlightWord: "me" },
        { en: "Do you know him?", pt: "Você conhece ele?", highlightWord: "him" },
        { en: "Did she tell you the truth?", pt: "Ela te contou a verdade?", highlightWord: "you" },
        { en: "Will they invite us?", pt: "Eles vão nos convidar?", highlightWord: "us" }
      ]
    },
    illustratedStory: {
      title: "Apresentando um Novo Colega",
      storyEn: "This is David. I met him at the university last semester. My colleagues and I invited him for lunch today. David thanked us and said he loves our team!",
      storyPt: "Este é o David. Eu o conheci na universidade no semestre passado. Meus colegas e eu o convidamos para o almoço hoje. David nos agradeceu e disse que adora a nossa equipe!",
      highlightSentence: "My colleagues and I invited him and David thanked us.",
      visualTheme: "social",
      tags: ["Pronouns", "Relationships", "Workplace"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete com o pronome objeto: 'I love Maria. I think about _____ every day.'", options: ["her", "she", "him", "them"], correctAnswer: "her", explanation: "Para substituir 'Maria' após preposição/verbo, usamos 'her'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete com cortesia como sujeito: '_____ (Meu irmão e eu) love to play tennis.'", options: ["My brother and I", "Me and my brother", "I and my brother", "My brother and me"], correctAnswer: "My brother and I", explanation: "Como sujeito, a outra pessoa vem primeiro seguida de 'and I'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Complete: 'Can you hear _____? (eu)'", correctAnswer: "me", explanation: "O pronome objeto para a 1ª pessoa do singular é 'me'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual pronome substitui 'the boys' na frase 'The teacher called _____.'?", options: ["them", "they", "their", "him"], correctAnswer: "them", explanation: "'The boys' como objeto da ação se torna 'them'.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Complete: 'John is my friend. I saw _____ at the mall.' (ele)", correctAnswer: "him", explanation: "Objeto masculino de 3ª pessoa é 'him'.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Complete: 'The manager spoke to my colleague and _____.' (mim)", options: ["me", "I", "my", "mine"], correctAnswer: "me", explanation: "Após a preposição 'to', usamos o pronome objeto 'me'.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["Me and him went to the beach.", "He and I went to the beach.", "Him and me went to the beach.", "I and he went to the beach."], correctAnswer: "He and I went to the beach.", explanation: "Na posição de sujeito, usamos Subject Pronouns ('He and I').", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete com o pronome para 'nós' como objeto: 'They gave _____ a big discount.'", correctAnswer: "us", explanation: "Objeto de 'we' é 'us'.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Na frase 'I bought a new car and I love _____', qual pronome preenche a lacuna?", options: ["it", "he", "him", "its"], correctAnswer: "it", explanation: "Objetos inanimados e coisas no singular usam 'it'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Complete: 'Please don't tell _____ the secret.' (eles)", options: ["them", "they", "theirs", "their"], correctAnswer: "them", explanation: "Após o verbo 'tell', usamos 'them'.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Who is your best friend? How did you meet him/her, and what do you and him/her like to do together?",
      contextPt: "Fale sobre seu melhor amigo ou amiga usando pronomes sujeitos (He/She/We) e objetos (him/her/us).",
      exampleAnswer: "My best friend is Gabriel. I met him five years ago at work. He and I love technology and he always helps me with coding projects. Everyone likes him!",
      hints: ["Use 'I met him/her...'", "Use '[Name] and I like to...'", "Use 'He/She helps me...'"]
    },
    plannerExerciseSuggestion: "Crie uma tabela mental e escreva 6 frases conectando pessoas que você conhece: 3 frases usando 'Subject + Verb + Object' (ex: 'I know her', 'She called me', 'We visited them')."
  },
  {
    id: 8,
    number: 8,
    title: "Possessive Adjectives",
    subtitle: "My, Your, His, Her, Its, Our, Their (Qualidades de Posse)",
    category: "Pronomes",
    estimatedHours: 1,
    explanation: "Os Possessive Adjectives (Adjetivos Possessivos) funcionam como uma característica de um objeto: eles indicam a QUEM aquele objeto pertence e NUNCA podem ficar sozinhos no final de uma frase! Eles sempre precisam estar colados antes do substantivo que acompanham. Lista essencial: My (meu/minha), Your (seu/sua/de vocês), His (dele), Her (dela), Its (dele/dela para coisas/animais), Our (nosso/nossa), Their (deles/delas). Lembre-se também da ordem natural dos adjetivos em inglês: Opinião, Tamanho, Idade, Formato, Cor, Origem, Material e Propósito (ex: A beautiful small old wooden box).",
    keyRules: [
      "Sempre vêm ANTES do substantivo: My car, Your dog, His house, Her family, Our teacher, Their books",
      "His = dele (homem) | Her = dela (mulher) | Its = de coisa/animal (sem apóstrofo!)",
      "Não variam no plural: 'Our book' e 'Our books' (não existe 'ours books')",
      "Ordem dos adjetivos: Opinião -> Tamanho -> Idade -> Formato -> Cor -> Origem -> Material -> Propósito"
    ],
    videoUrl: "https://drive.google.com/file/d/1fqXzKtvRY87JY2yie3zMHgogsWEF9kLS/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "My father is an engineer.", pt: "Meu pai é um engenheiro.", highlightWord: "My" },
        { en: "Your dog is very smart.", pt: "Seu cachorro é muito esperto.", highlightWord: "Your" },
        { en: "His house has a big garden.", pt: "A casa dele tem um grande jardim.", highlightWord: "His" },
        { en: "Her family lives in Portugal.", pt: "A família dela mora em Portugal.", highlightWord: "Her" },
        { en: "Our teacher explains very clearly.", pt: "Nosso professor explica muito claramente.", highlightWord: "Our" },
        { en: "Their brother arrived yesterday.", pt: "O irmão deles chegou ontem.", highlightWord: "Their" }
      ],
      negatives: [
        { en: "My car isn't expensive.", pt: "Meu carro não é caro.", highlightWord: "My" },
        { en: "His phone doesn't work.", pt: "O telefone dele não funciona.", highlightWord: "His" },
        { en: "Her mother isn't at home.", pt: "A mãe dela não está em casa.", highlightWord: "Her" },
        { en: "Our flight isn't delayed.", pt: "Nosso voo não está atrasado.", highlightWord: "Our" }
      ],
      interrogatives: [
        { en: "Is this your bag?", pt: "Esta é sua bolsa?", highlightWord: "your" },
        { en: "What is his name?", pt: "Qual é o nome dele?", highlightWord: "his" },
        { en: "Where is her office located?", pt: "Onde fica o escritório dela?", highlightWord: "her" },
        { en: "Did you meet our new manager?", pt: "Você conheceu nosso novo gerente?", highlightWord: "our" }
      ]
    },
    illustratedStory: {
      title: "A Casa Nova da Família Silva",
      storyEn: "The Silva family just moved into their new house. Their living room has a lovely antique wooden table. Their dog wagged its tail happily in the yard. Our neighborhood is excited to welcome them!",
      storyPt: "A família Silva acabou de se mudar para a casa nova deles. A sala de estar deles tem uma adorável mesa antiga de madeira. O cachorro deles abanou seu rabo alegremente no quintal. Nossa vizinhança está animada para recebê-los!",
      highlightSentence: "Their dog wagged its tail and our neighborhood welcomed them.",
      visualTheme: "neighborhood",
      tags: ["Possession", "Family", "Home"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete com o adjetivo possessivo (dele): 'John forgot _____ keys on the kitchen table.'", options: ["his", "her", "your", "him"], correctAnswer: "his", explanation: "'Dele' (masculino) é 'his'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete (dela): 'Maria loves _____ new job in London.'", options: ["her", "she", "his", "hers"], correctAnswer: "her", explanation: "'Dela' é 'her' antes de substantivo.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha com 'nosso/nossa': 'We are proud of _____ company.'", correctAnswer: "our", explanation: "O possessivo de 'we' é 'our'.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete com o possessivo para animais/coisas: 'The cat licked _____ paws.'", options: ["its", "it's", "his", "their"], correctAnswer: "its", explanation: "O adjetivo possessivo para 'it' é 'its' (sem apóstrofo!).", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Complete com o possessivo de 'they': 'They sold _____ old car.'", correctAnswer: "their", explanation: "O possessivo de 'they' é 'their'.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Qual é a ordem correta dos adjetivos na frase?", options: ["A lovely small antique wooden box.", "A wooden lovely antique small box.", "A small wooden antique lovely box.", "A antique lovely small wooden box."], correctAnswer: "A lovely small antique wooden box.", explanation: "Ordem: Opinião (lovely) -> Tamanho (small) -> Idade (antique) -> Material (wooden).", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["This is my book.", "This is mine book.", "This is me book.", "This is I book."], correctAnswer: "This is my book.", explanation: "Antes de substantivo usamos o adjetivo possessivo 'my'.", points: 10 },
      { id: 8, type: "fill-blank", prompt: "Complete: 'What is _____ (seu) favorite food?'", correctAnswer: "your", explanation: "'Seu/sua' em inglês é 'your'.", points: 10 },
      { id: 9, type: "multiple-choice", prompt: "Complete: 'Lucas and Julia are traveling with _____ children.'", options: ["their", "there", "they're", "theirs"], correctAnswer: "their", explanation: "'Dele e dela' (deles) é 'their'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Possessive adjectives podem terminar frases sozinhos (ex: 'The car is my')?", options: ["Não, eles sempre exigem um substantivo após eles.", "Sim, é comum em conversas informais.", "Apenas com 'his' e 'its'.", "Sim, sempre."], correctAnswer: "Não, eles sempre exigem um substantivo após eles.", explanation: "Possessive adjectives nunca ficam sozinhos no final de frases sem o substantivo.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Describe your favorite object in your house (its color, material, origin, and why it is special to you).",
      contextPt: "Descreva um objeto importante da sua casa em inglês, usando possessivos (my, our) e adjetivos na ordem correta.",
      exampleAnswer: "My favorite object is a beautiful old wooden guitar. My father gave it to me on my eighteenth birthday. Its sound is warm and inspiring.",
      hints: ["My favorite object is my...", "Its color is...", "Our family loves it because..."]
    },
    plannerExerciseSuggestion: "Liste 5 pertences de pessoas que você conhece usando cada um dos possessivos: 'This is his phone', 'That is her car', 'Our house has...', 'Their office is...'."
  },
  {
    id: 9,
    number: 9,
    title: "Possessive Pronouns",
    subtitle: "Mine, Yours, His, Hers, Ours, Theirs & WHOSE (De quem?)",
    category: "Pronomes",
    estimatedHours: 1,
    explanation: "Diferente dos Possessive Adjectives que vêm antes de um substantivo, os POSSESSIVE PRONOUNS substituem o substantivo para evitar repetições desnecessárias! Em português dizemos: 'Eu gosto do seu livro, mas prefiro o meu [livro]'. Em inglês, trocamos 'my book' por 'MINE': 'I like your book, but I prefer MINE.' Lista completa: Mine (o meu/a minha), Yours (o seu/os seus), His (o dele), Hers (o dela), Ours (o nosso/os nossos), Theirs (o deles/os deles). Para perguntar de quem é algo, usamos 'WHOSE': 'Whose car is this? - It's mine!'",
    keyRules: [
      "Possessive Pronouns substituem substantivo + possessivo: My book -> Mine | Your car -> Yours | Her bag -> Hers | Our house -> Ours | Their shoes -> Theirs",
      "Ficam no final da oração ou sozinhos: 'This car is his' / 'Those shoes are yours' / 'The choice is ours'",
      "Whose = 'De quem?': 'Whose phone is this?' -> 'It is hers.' ou 'Whose bags are those?' -> 'Those are theirs.'"
    ],
    videoUrl: "https://drive.google.com/file/d/1TD4mpg4wqufw1jFkEIBRKB6O9I-hjNqR/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "This car is mine.", pt: "Este carro é meu.", highlightWord: "mine" },
        { en: "Those shoes are yours.", pt: "Aqueles sapatos são seus.", highlightWord: "yours" },
        { en: "Is this bag his?", pt: "Esta bolsa é dele?", highlightWord: "his" },
        { en: "This money is ours.", pt: "Este dinheiro é nosso.", highlightWord: "ours" },
        { en: "I think the cat is theirs.", pt: "Eu acho que o gato é deles.", highlightWord: "theirs" },
        { en: "I like your book, but I prefer mine.", pt: "Eu gosto do seu livro, mas prefiro o meu.", highlightWord: "mine" }
      ],
      negatives: [
        { en: "This jacket isn't mine.", pt: "Esta jaqueta não é minha.", highlightWord: "mine" },
        { en: "That victory wasn't only hers.", pt: "Aquela vitória não foi apenas dela.", highlightWord: "hers" },
        { en: "These keys aren't ours.", pt: "Estas chaves não são nossas.", highlightWord: "ours" }
      ],
      interrogatives: [
        { en: "Whose car is this?", pt: "De quem é esse carro?", highlightWord: "Whose" },
        { en: "Whose bags are those? - Those are theirs.", pt: "De quem são aquelas bolsas? - Aquelas são deles.", highlightWord: "theirs" },
        { en: "Whose jacket was stolen? - His was.", pt: "A jaqueta de quem foi roubada? - A dele foi.", highlightWord: "His was" },
        { en: "Is this cup yours or mine?", pt: "Esta xícara é sua ou minha?", highlightWord: "yours or mine" }
      ]
    },
    illustratedStory: {
      title: "Achados e Perdidos no Aeroporto",
      storyEn: "At the airport luggage claim, Julia saw a black suitcase. 'Whose suitcase is this?', she asked. A businessman stepped forward and said, 'It is mine! Thank you so much.' Another lady smiled and said, 'And those red bags over there are ours!'",
      storyPt: "Na esteira de bagagens do aeroporto, Julia viu uma mala preta. 'De quem é essa mala?', ela perguntou. Um empresário se aproximou e disse: 'É minha! Muito obrigado.' Outra senhora sorriu e disse: 'E aquelas bolsas vermelhas ali são nossas!'",
      highlightSentence: "Whose suitcase is this? It is mine and those red bags are ours!",
      visualTheme: "airport",
      tags: ["Airport", "Whose", "Possessive Pronouns"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Complete: 'My computer is fast, but _____ is faster.' (o seu)", options: ["yours", "your", "you're", "you"], correctAnswer: "yours", explanation: "Substituindo 'your computer' sem substantivo após, usamos 'yours'.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Complete: 'This umbrella belongs to Sarah. It is _____.'", options: ["hers", "her", "she", "herself"], correctAnswer: "hers", explanation: "O pronome possessivo para ela é 'hers'.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Como se pergunta 'De quem' em inglês? '_____ jacket is this?'", correctAnswer: "Whose", explanation: "'Whose' é a palavra interrogativa para posse ('de quem').", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Complete: 'We bought this house together, so it is _____.'", options: ["ours", "our", "us", "we's"], correctAnswer: "ours", explanation: "O pronome possessivo para nós é 'ours'.", points: 10 },
      { id: 5, type: "fill-blank", prompt: "Preencha a lacuna: 'Don't touch that coffee, it is _____ (meu).' ", correctAnswer: "mine", explanation: "No final da frase sem substantivo, 'meu' é 'mine'.", points: 10 },
      { id: 6, type: "multiple-choice", prompt: "Complete: 'Whose notebooks are those? - Those are _____ (da minha irmã).' ", options: ["my sister's", "my sister", "of my sister", "to my sister"], correctAnswer: "my sister's", explanation: "Expressão de posse com apóstrofo s: my sister's.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Qual frase está correta?", options: ["This phone is mine.", "This phone is my.", "This phone is me.", "This phone is I."], correctAnswer: "This phone is mine.", explanation: "'This phone is mine' usa o pronome possessivo corretamente.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Complete: 'Their apartment is bigger than _____ (o nosso).' ", options: ["ours", "our", "us", "our's"], correctAnswer: "ours", explanation: "O comparativo com pronome possessivo usa 'ours'.", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Complete: 'That car is not _____ (deles).' ", correctAnswer: "theirs", explanation: "O pronome possessivo de 'they' é 'theirs'.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como responder 'É dele' para 'Whose watch is this?'", options: ["It is his.", "It is him.", "It is he.", "It is of him."], correctAnswer: "It is his.", explanation: "Para o masculino, o pronome possessivo é 'his'.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Compare something you own with something your friend or family member owns (e.g. 'My smartphone is great, but his/hers is newer', 'My car is blue, but theirs is black').",
      contextPt: "Faça comparações de posses em inglês usando 'mine', 'yours', 'his', 'hers', 'ours' ou 'theirs'.",
      exampleAnswer: "My laptop is very fast, but my colleague's is lighter. Her workspace is organized, whereas mine has papers everywhere. In the end, both are useful!",
      hints: ["Use 'My [item] is..., but yours is...'", "Use 'This is mine, that is theirs.'"]
    },
    plannerExerciseSuggestion: "Pratique o diálogo de 'Whose': escreva 4 pares de pergunta e resposta usando 'Whose [objeto] is this/are these?' respondendo com 'mine', 'his', 'hers', 'ours' ou 'theirs'."
  },
  {
    id: 10,
    number: 10,
    title: "Genitive Case 1: Indicando posse",
    subtitle: "O Famoso Apóstrofo 'S ('s) para Pessoas e Posses",
    category: "Caso Genitivo",
    estimatedHours: 2,
    explanation: "Em inglês, quando uma coisa é feita de um material ou tipo, colocamos o substantivo na frente como qualidade (ex: 'chocolate cake', 'orange juice', 'chicken soup'). Porém, quando uma PESSOA possui algo, NÃO dizemos 'the car of Peter', pois Peter não é o material do carro! Para encurtar e soar 100% natural, usamos o GENITIVE CASE: colocamos o possuidor primeiro + apóstrofo 'S ('s) + a coisa possuída! Exemplo: 'Peter's car' (o carro de Peter), 'Mary's house' (a casa da Mary), 'John's brother' (o irmão do John).",
    keyRules: [
      "Fórmula do Genitive Case: Possuidor + 's + Objeto possuído (ex: Mary's car is expensive)",
      "Evite usar 'of' para posse de pessoas: use 'John's brother' em vez de 'the brother of John'",
      "Material/Tipo vem direto na frente: chocolate cake, coffee cup, apple juice",
      "O 's se pronuncia junto ao nome do possuidor (ex: Peter's, Mary's, Clair's)"
    ],
    videoUrl: "https://drive.google.com/file/d/1XFOrGh9RnGgZYHSP3wadrfEqHzwPEJoh/view?usp=sharing",
    examples: {
      affirmatives: [
        { en: "Mary's car is expensive.", pt: "O carro da Mary é caro.", highlightWord: "Mary's" },
        { en: "John's brother is a lawyer.", pt: "O irmão de John é um advogado.", highlightWord: "John's" },
        { en: "Jenny's cat is lost.", pt: "O gato da Jenny está perdido.", highlightWord: "Jenny's" },
        { en: "Clair's dinner is ready.", pt: "O jantar de Clair está pronto.", highlightWord: "Clair's" },
        { en: "Robert's family is in Europe.", pt: "A família de Robert está na Europa.", highlightWord: "Robert's" },
        { en: "Larry's test was good.", pt: "A prova do Larry foi boa.", highlightWord: "Larry's" }
      ],
      negatives: [
        { en: "Bryan's bike is not here.", pt: "A bicicleta do Bryan não está aqui.", highlightWord: "Bryan's" },
        { en: "Harry's boot is not clean.", pt: "A bota de Harry não está limpa.", highlightWord: "Harry's" },
        { en: "Nelly's mother is not at work.", pt: "A mãe de Nelly não está no trabalho.", highlightWord: "Nelly's" }
      ],
      interrogatives: [
        { en: "Is Gordon's TV on?", pt: "A televisão do Gordon está ligada?", highlightWord: "Gordon's" },
        { en: "Where is Peter's car parked?", pt: "Onde o carro de Peter está estacionado?", highlightWord: "Peter's" },
        { en: "Did you taste Mary's delicious cake?", pt: "Você provou o bolo delicioso da Mary?", highlightWord: "Mary's" }
      ]
    },
    illustratedStory: {
      title: "A Oficina Mecânica do John",
      storyEn: "John is a talented mechanic. Today, Mary's car is in John's garage. Mary's brother called John to ask when the car will be ready. John said: 'Mary's car will be ready by 5 PM!'",
      storyPt: "John é um mecânico talentoso. Hoje, o carro da Mary está na oficina do John. O irmão da Mary ligou para o John para perguntar quando o carro ficará pronto. John disse: 'O carro da Mary estará pronto até as 17h!'",
      highlightSentence: "Mary's car is in John's garage and Mary's brother called.",
      visualTheme: "garage",
      tags: ["Possession", "Genitive Case", "Work"]
    },
    fixationExercises: [
      { id: 1, type: "multiple-choice", prompt: "Como se diz 'O carro do Peter' em inglês?", options: ["Peter's car", "The car of Peter", "Peter car", "Peter's of car"], correctAnswer: "Peter's car", explanation: "Usamos o Genitive Case com 's após o nome do possuidor.", points: 10 },
      { id: 2, type: "multiple-choice", prompt: "Como se traduz 'O irmão do John é advogado'?", options: ["John's brother is a lawyer.", "The brother of John is a lawyer.", "John brother is lawyer.", "John is brother lawyer."], correctAnswer: "John's brother is a lawyer.", explanation: "Genitive case natural: John's brother.", points: 10 },
      { id: 3, type: "fill-blank", prompt: "Preencha a posse: '_____ (O gato da Jenny) is sleeping on the sofa.'", correctAnswer: "Jenny's cat", explanation: "Jenny + 's + cat = Jenny's cat.", points: 10 },
      { id: 4, type: "multiple-choice", prompt: "Qual a forma correta para 'suco de laranja' (material/tipo)?", options: ["Orange juice", "Juice of orange", "Orange's juice", "Orange of juice"], correctAnswer: "Orange juice", explanation: "Para coisas e materiais, colocamos o ingrediente na frente sem apóstrofo.", points: 10 },
      { id: 5, type: "multiple-choice", prompt: "Complete: '_____ dinner is delicious.' (O jantar da Clair)", options: ["Clair's", "Of Clair", "Clair", "Clairs's"], correctAnswer: "Clair's", explanation: "Nome + 's = Clair's.", points: 10 },
      { id: 6, type: "fill-blank", prompt: "Complete: 'I drove my _____ (o carro do meu pai) to university.'", correctAnswer: "father's car", explanation: "Father + 's + car = father's car.", points: 10 },
      { id: 7, type: "multiple-choice", prompt: "Complete: '_____ mother is a doctor.' (A mãe do Robert)", options: ["Robert's", "Roberts", "Of Robert", "Robert's of"], correctAnswer: "Robert's", explanation: "Robert's mother.", points: 10 },
      { id: 8, type: "multiple-choice", prompt: "Qual frase soa mais natural em inglês?", options: ["Larry's test was excellent.", "The test of Larry was excellent.", "The Larry's test was excellent.", "Larry test was excellent."], correctAnswer: "Larry's test was excellent.", explanation: "Nativos de inglês usam o caso genitivo para pessoas.", points: 10 },
      { id: 9, type: "fill-blank", prompt: "Preencha: 'This is _____ (o computador da minha esposa).' (my wife)", correctAnswer: "my wife's computer", explanation: "My wife + 's + computer.", points: 10 },
      { id: 10, type: "multiple-choice", prompt: "Como fica 'O cachorro do vizinho é amigável'?", options: ["The neighbor's dog is friendly.", "The dog of neighbor is friendly.", "The neighbor dog is friendly.", "The neighbors's dog is friendly."], correctAnswer: "The neighbor's dog is friendly.", explanation: "Neighbor + 's + dog = The neighbor's dog.", points: 10 }
    ],
    conversationExercise: {
      questionPrompt: "Tell me about 3 possessions or characteristics of your friends and family (e.g., 'My father's car is black', 'My sister's husband is an engineer', 'My friend's house is near the beach').",
      contextPt: "Pratique o Genitive Case falando sobre posses ou relações de 3 pessoas próximas a você usando 's.",
      exampleAnswer: "My mother's garden is full of beautiful roses. My brother's dog is huge and energetic. Also, my best friend's office is located downtown in São Paulo.",
      hints: ["Use '[Name]'s [object/relative] is...'", "Ex: My teacher's advice was helpful.", "Ex: My friend's birthday is tomorrow."]
    },
    plannerExerciseSuggestion: "Escreva 5 frases descrevendo itens de amigos e familiares usando o Genitive Case ('s): pai, mãe, irmão, amigo e colega de trabalho."
  }
];
