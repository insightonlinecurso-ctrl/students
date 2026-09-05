import { SkillTestItem } from '../skillsTestData';

export const LISTENING_DATA: Record<string, SkillTestItem[]> = {
  A1: [
    {
      id: 1,
      skill: 'listening',
      level: 'A1',
      title: 'Apresentação Pessoal',
      instruction: 'Ouça a fala e responda de onde a pessoa é.',
      audioScript: "Hello everyone, my name is Lucas. I am twenty-five years old and I am from Toronto, Canada.",
      question: "Where is Lucas from?",
      options: ["Toronto, Canada", "London, England", "Sydney, Australia", "New York, USA"],
      correctIndex: 0,
      explanation: "No áudio ele diz claramente: 'I am from Toronto, Canada'."
    },
    {
      id: 2,
      skill: 'listening',
      level: 'A1',
      title: 'Horário do Trem',
      instruction: 'Ouça o anúncio na estação e identifique o horário.',
      audioScript: "Attention please. The fast train to Manchester leaves at quarter past ten from platform four.",
      question: "What time does the train depart?",
      options: ["9:45", "10:15", "10:30", "10:45"],
      correctIndex: 1,
      explanation: "'Quarter past ten' corresponde a 10:15 (quinze minutos após as dez)."
    },
    {
      id: 3,
      skill: 'listening',
      level: 'A1',
      title: 'Preço do Produto',
      instruction: 'Ouça a vendedora informar o preço na loja.',
      audioScript: "The blue shirt is thirty-five dollars, but this red cap is only twelve dollars.",
      question: "How much is the red cap?",
      options: ["$35", "$25", "$12", "$20"],
      correctIndex: 2,
      explanation: "A vendedora diz: 'this red cap is only twelve dollars' ($12)."
    },
    {
      id: 4,
      skill: 'listening',
      level: 'A1',
      title: 'Pedido na Cafeteria',
      instruction: 'Ouça o cliente fazendo o pedido.',
      audioScript: "Can I have a cup of black coffee with no sugar, and a chocolate muffin, please?",
      question: "How does the customer take his coffee?",
      options: ["With milk and sugar", "Black with no sugar", "With cream and honey", "Cold with extra syrup"],
      correctIndex: 1,
      explanation: "O cliente pede: 'black coffee with no sugar' (café preto sem açúcar)."
    },
    {
      id: 5,
      skill: 'listening',
      level: 'A1',
      title: 'Dia da Aula',
      instruction: 'Ouça o professor combinando o próximo encontro.',
      audioScript: "Don't forget, our grammar review class is on Thursday afternoon at three o'clock.",
      question: "Which day is the grammar class?",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      correctIndex: 2,
      explanation: "O professor avisa: 'our grammar review class is on Thursday'."
    },
    {
      id: 6,
      skill: 'listening',
      level: 'A1',
      title: 'Localização do Objeto',
      instruction: 'Ouça onde estão as chaves.',
      audioScript: "Honey, your car keys are on the kitchen table, right next to the fruit bowl.",
      question: "Where are the keys?",
      options: ["In the bedroom drawer", "On the kitchen table", "Inside the backpack", "On the living room sofa"],
      correctIndex: 1,
      explanation: "Ela afirma: 'your car keys are on the kitchen table'."
    },
    {
      id: 7,
      skill: 'listening',
      level: 'A1',
      title: 'Clima de Hoje',
      instruction: 'Ouça a previsão do tempo matinal.',
      audioScript: "Good morning Chicago. It is cold and rainy today, so remember to bring your umbrella!",
      question: "What is the weather like today?",
      options: ["Sunny and warm", "Cold and rainy", "Snowy and freezing", "Hot and windy"],
      correctIndex: 1,
      explanation: "A locutora declara: 'It is cold and rainy today'."
    },
    {
      id: 8,
      skill: 'listening',
      level: 'A1',
      title: 'Número de Telefone',
      instruction: 'Ouça a confirmação do número telefônico.',
      audioScript: "Please call me back at five five five, zero one eight nine when you arrive.",
      question: "What are the last four digits of the phone number?",
      options: ["0189", "0198", "5550", "8901"],
      correctIndex: 0,
      explanation: "Os últimos dígitos falados são: 'zero one eight nine' (0189)."
    },
    {
      id: 9,
      skill: 'listening',
      level: 'A1',
      title: 'Animal de Estimação',
      instruction: 'Ouça a descrição da família.',
      audioScript: "My family lives in a house with a big garden. We have two white rabbits and a small brown dog.",
      question: "Which pet dog do they have?",
      options: ["A big black dog", "A small brown dog", "Two golden retrievers", "A grey bulldog"],
      correctIndex: 1,
      explanation: "O falante menciona: 'a small brown dog'."
    },
    {
      id: 10,
      skill: 'listening',
      level: 'A1',
      title: 'Idade dos Irmãos',
      instruction: 'Ouça sobre a idade de Emily.',
      audioScript: "My sister Emily turns seven tomorrow, and I am ten years old.",
      question: "How old is Emily going to be tomorrow?",
      options: ["Five", "Six", "Seven", "Ten"],
      correctIndex: 2,
      explanation: "O garoto diz: 'My sister Emily turns seven tomorrow' (faz sete anos)."
    },
    {
      id: 11,
      skill: 'listening',
      level: 'A1',
      title: 'Cor Favorita',
      instruction: 'Ouça qual camisa ela quer comprar.',
      audioScript: "I like green, but today I want to buy the dark blue sweater.",
      question: "Which item does she want to purchase today?",
      options: ["A green hat", "A dark blue sweater", "A light yellow t-shirt", "A red scarf"],
      correctIndex: 1,
      explanation: "Ela afirma: 'today I want to buy the dark blue sweater'."
    },
    {
      id: 12,
      skill: 'listening',
      level: 'A1',
      title: 'Meio de Transporte',
      instruction: 'Ouça como Jack vai para o trabalho.',
      audioScript: "Traffic in the morning is terrible, so Jack always rides his bicycle to the office.",
      question: "How does Jack travel to work?",
      options: ["By bus", "By subway", "By bicycle", "By private car"],
      correctIndex: 2,
      explanation: "'Jack always rides his bicycle to the office' (vai de bicicleta)."
    },
    {
      id: 13,
      skill: 'listening',
      level: 'A1',
      title: 'Refeição Preferida',
      instruction: 'Ouça sobre o almoço de domingo.',
      audioScript: "On Sundays, my grandmother prepares homemade pasta with fresh tomato sauce and cheese.",
      question: "What does grandmother make on Sundays?",
      options: ["Barbecue ribs", "Homemade pasta", "Fried fish with rice", "Vegetable soup"],
      correctIndex: 1,
      explanation: "O áudio diz: 'my grandmother prepares homemade pasta'."
    },
    {
      id: 14,
      skill: 'listening',
      level: 'A1',
      title: 'Nome e Letra Inicial',
      instruction: 'Ouça como a recepcionista soletra o sobrenome.',
      audioScript: "Mr. Baker, that is spelled B - A - K - E - R, right?",
      question: "How is the surname spelled?",
      options: ["B - A - K - E - R", "B - R - E - A - K", "B - A - C - K - E - R", "B - A - K - O - R"],
      correctIndex: 0,
      explanation: "A soletração exata é B - A - K - E - R."
    },
    {
      id: 15,
      skill: 'listening',
      level: 'A1',
      title: 'Local da Reunião',
      instruction: 'Ouça o recado sobre a sala.',
      audioScript: "The welcome meeting is moved to Room 204 on the second floor.",
      question: "Where is the meeting taking place?",
      options: ["Room 102, first floor", "Room 204, second floor", "Room 304, third floor", "In the cafeteria"],
      correctIndex: 1,
      explanation: "A voz confirma: 'moved to Room 204 on the second floor'."
    }
  ],

  A2: [
    {
      id: 1,
      skill: 'listening',
      level: 'A2',
      title: 'Plano de Fim de Semana',
      instruction: 'Ouça os planos de sábado de Clara.',
      audioScript: "Hi Clara! Are you going hiking this Saturday? No, I wanted to, but the forecast says thunderstorm, so my friends and I are visiting the modern art museum instead.",
      question: "What will Clara do this Saturday?",
      options: ["Go hiking in the mountains", "Stay home and study", "Visit the modern art museum", "Attend an outdoor concert"],
      correctIndex: 2,
      explanation: "Clara explica que devido à previsão de tempestade, ela e os amigos vão ao museu de arte moderna."
    },
    {
      id: 2,
      skill: 'listening',
      level: 'A2',
      title: 'Consulta Médica',
      instruction: 'Ouça a recepcionista da clínica.',
      audioScript: "Doctor Sanchez has an opening on Tuesday at 4:30 PM, or Friday morning at 9:00 AM. Which one suits you better?",
      question: "When is the doctor available on Tuesday?",
      options: ["At 9:00 AM", "At 2:30 PM", "At 4:30 PM", "At 5:00 PM"],
      correctIndex: 2,
      explanation: "A recepcionista diz: 'Tuesday at 4:30 PM'."
    },
    {
      id: 3,
      skill: 'listening',
      level: 'A2',
      title: 'Atraso do Voo',
      instruction: 'Ouça o anúncio no aeroporto.',
      audioScript: "Flight BA420 to Madrid is delayed due to heavy fog. Expected departure is now 6:45 PM instead of 5:15 PM.",
      question: "Why was the flight delayed?",
      options: ["Technical failure", "Heavy fog", "Missing crew members", "Security checks"],
      correctIndex: 1,
      explanation: "O anúncio indica claramente: 'delayed due to heavy fog' (nevoeiro denso)."
    },
    {
      id: 4,
      skill: 'listening',
      level: 'A2',
      title: 'Receita Culinária',
      instruction: 'Ouça os ingredientes que faltam.',
      audioScript: "We have eggs and butter in the fridge, but we ran out of flour and olive oil. Can you buy some?",
      question: "What needs to be bought at the grocery store?",
      options: ["Eggs and butter", "Flour and olive oil", "Milk and sugar", "Cheese and tomatoes"],
      correctIndex: 1,
      explanation: "'we ran out of flour and olive oil' significa que a farinha e o azeite acabaram."
    },
    {
      id: 5,
      skill: 'listening',
      level: 'A2',
      title: 'Direções na Cidade',
      instruction: 'Ouça as instruções para chegar à biblioteca.',
      audioScript: "Go straight down Elm Street for two blocks, turn left at the pharmacy, and the public library is opposite the bank.",
      question: "Where is the public library located?",
      options: ["Behind the post office", "Next to the gas station", "Opposite the bank", "Inside the mall"],
      correctIndex: 2,
      explanation: "A pessoa diz: 'the public library is opposite the bank' (em frente ao banco)."
    },
    {
      id: 6,
      skill: 'listening',
      level: 'A2',
      title: 'Problema no Quarto de Hotel',
      instruction: 'Ouça a reclamação do hóspede.',
      audioScript: "Good evening, I am calling from room 312. The air conditioning is blowing hot air and the shower tap is leaking.",
      question: "What issues is the guest reporting?",
      options: ["Broken TV and noisy neighbors", "AC blowing hot air and shower leaking", "Missing towels and cold water", "No WiFi signal"],
      correctIndex: 1,
      explanation: "O hóspede menciona ar condicionado com ar quente e torneira do chuveiro vazando."
    },
    {
      id: 7,
      skill: 'listening',
      level: 'A2',
      title: 'Entrevista de Emprego - Horário',
      instruction: 'Ouça a confirmação do horário de trabalho.',
      audioScript: "Our company works in flexible shifts: you can start at 8:00 AM and finish at 4:30 PM, with thirty minutes for lunch.",
      question: "How long is the daily lunch break?",
      options: ["15 minutes", "30 minutes", "45 minutes", "One full hour"],
      correctIndex: 1,
      explanation: "O empregador diz: 'with thirty minutes for lunch'."
    },
    {
      id: 8,
      skill: 'listening',
      level: 'A2',
      title: 'Férias de Verão',
      instruction: 'Ouça para onde a família viajou no ano passado.',
      audioScript: "Last summer we visited Portugal and spent five days in Lisbon before driving south to the beaches of Algarve.",
      question: "Where did they spend their first five days?",
      options: ["In Porto", "In Lisbon", "In Madrid", "In Faro"],
      correctIndex: 1,
      explanation: "O narrador diz: 'spent five days in Lisbon before driving south'."
    },
    {
      id: 9,
      skill: 'listening',
      level: 'A2',
      title: 'Perdido no Shopping',
      instruction: 'Ouça a mãe procurando a filha.',
      audioScript: "Excuse me, security officer, my daughter is wearing a yellow jacket and blue jeans. She is about nine years old.",
      question: "What color is the daughter's jacket?",
      options: ["Red", "Blue", "Yellow", "Green"],
      correctIndex: 2,
      explanation: "A mãe descreve: 'wearing a yellow jacket'."
    },
    {
      id: 10,
      skill: 'listening',
      level: 'A2',
      title: 'Mensagem na Caixa Postal',
      instruction: 'Ouça o recado deixado por David.',
      audioScript: "Hi Mark, it's David. I left my laptop charger under your desk yesterday. Could you bring it to the office tomorrow?",
      question: "What did David leave behind?",
      options: ["His car keys", "His laptop charger", "His leather wallet", "His notebook"],
      correctIndex: 1,
      explanation: "'I left my laptop charger under your desk yesterday'."
    },
    {
      id: 11,
      skill: 'listening',
      level: 'A2',
      title: 'Preço com Desconto',
      instruction: 'Ouça a oferta especial na loja de sapatos.',
      audioScript: "All running shoes are fifty percent off today! These sneakers were eighty dollars, so now they are just forty.",
      question: "What is the discounted price of the sneakers?",
      options: ["$20", "$40", "$50", "$80"],
      correctIndex: 1,
      explanation: "Eram 80 dólares e com 50% de desconto custam 40 ('just forty')."
    },
    {
      id: 12,
      skill: 'listening',
      level: 'A2',
      title: 'Sintomas de Gripe',
      instruction: 'Ouça o paciente descrevendo seu estado.',
      audioScript: "I have a sore throat, a dry cough, and a slight fever that started yesterday evening.",
      question: "Which symptoms does the patient have?",
      options: ["Broken ankle and headache", "Sore throat, dry cough, and slight fever", "Ear pain and stomach ache", "Back pain only"],
      correctIndex: 1,
      explanation: "O paciente relata dor de garganta, tosse seca e febre leve."
    },
    {
      id: 13,
      skill: 'listening',
      level: 'A2',
      title: 'Reserva no Restaurante',
      instruction: 'Ouça os detalhes da mesa reservada.',
      audioScript: "Table for six people under the name of Martinez, booked for 8:30 tonight on the outdoor terrace.",
      question: "Where is the reserved table situated?",
      options: ["Near the bar", "In the private VIP room", "On the outdoor terrace", "Beside the kitchen door"],
      correctIndex: 2,
      explanation: "'booked for 8:30 tonight on the outdoor terrace'."
    },
    {
      id: 14,
      skill: 'listening',
      level: 'A2',
      title: 'Atividade Física',
      instruction: 'Ouça a frequência com que Paul se exercita.',
      audioScript: "I try to swim twice a week, usually on Tuesday and Thursday mornings before work.",
      question: "How often does Paul swim?",
      options: ["Every day", "Twice a week", "Once a month", "Only on weekends"],
      correctIndex: 1,
      explanation: "Paul afirma: 'I try to swim twice a week'."
    },
    {
      id: 15,
      skill: 'listening',
      level: 'A2',
      title: 'Mudança de Endereço',
      instruction: 'Ouça o novo endereço de Sarah.',
      audioScript: "We moved to Oak Avenue, number 74, right next to the city park.",
      question: "What is Sarah's new street number?",
      options: ["47", "74", "84", "174"],
      correctIndex: 1,
      explanation: "Ela fala: 'number 74, right next to the city park'."
    }
  ],

  B1: [
    {
      id: 1,
      skill: 'listening',
      level: 'B1',
      title: 'Reunião de Alinhamento de Projeto',
      instruction: 'Ouça a gestora explicando a alteração no cronograma.',
      audioScript: "Because our software developers encountered unexpected database bugs during user testing, the client agreed to push our rollout deadline back by two weeks to ensure complete stability.",
      question: "Why was the rollout deadline postponed?",
      options: [
        "The client changed the entire budget",
        "Developers found unexpected database bugs during testing",
        "The design team requested additional graphics",
        "Management canceled the project launch"
      ],
      correctIndex: 1,
      explanation: "A gestora relata problemas inesperados no banco de dados durante testes de usuários ('unexpected database bugs during user testing')."
    },
    {
      id: 2,
      skill: 'listening',
      level: 'B1',
      title: 'Podcast de Viagem Sustentável',
      instruction: 'Ouça o conselho do especialista para viajantes.',
      audioScript: "Instead of flying domestic routes, taking modern electric trains reduces your carbon emissions by up to seventy percent, while allowing you to enjoy scenic countryside views.",
      question: "What main advantage of electric trains is emphasized?",
      options: [
        "They offer free luxury meals",
        "They are much faster than supersonic airplanes",
        "They reduce carbon emissions by up to 70%",
        "They have no baggage weight restrictions"
      ],
      correctIndex: 2,
      explanation: "O podcast salienta a redução de até 70% nas emissões de carbono ('reduces your carbon emissions by up to seventy percent')."
    },
    {
      id: 3,
      skill: 'listening',
      level: 'B1',
      title: 'Negociação de Aluguel',
      instruction: 'Ouça a proposta do proprietário.',
      audioScript: "I can lower the monthly rent from twelve hundred to eleven hundred, provided you sign an eighteen-month lease and take care of minor garden maintenance yourself.",
      question: "What condition is required to get the rent discount?",
      options: [
        "Paying six months in advance",
        "Signing an 18-month lease and handling garden maintenance",
        "Moving in within 48 hours",
        "Buying all new furniture for the apartment"
      ],
      correctIndex: 1,
      explanation: "O proprietário exige contrato de 18 meses e manutenção do jardim."
    },
    {
      id: 4,
      skill: 'listening',
      level: 'B1',
      title: 'Avaliação de Desempenho',
      instruction: 'Ouça o feedback do supervisor.',
      audioScript: "Your analytical reports are consistently thorough and accurate. However, you need to speak up more proactively during client presentations rather than waiting to be asked.",
      question: "What constructive criticism does the supervisor give?",
      options: [
        "Arrive earlier to morning meetings",
        "Improve accuracy in data spreadsheets",
        "Speak up more proactively in client presentations",
        "Work fewer overtime hours"
      ],
      correctIndex: 2,
      explanation: "O supervisor sugere proatividade nas apresentações com clientes ('speak up more proactively during client presentations')."
    },
    {
      id: 5,
      skill: 'listening',
      level: 'B1',
      title: 'Comentário sobre Novas Tecnologias',
      instruction: 'Ouça a opinião sobre inteligência artificial no trabalho.',
      audioScript: "AI won't entirely replace graphic designers, but designers who know how to leverage AI tools effectively will certainly outperform those who resist adopting them.",
      question: "According to the speaker, who will have the competitive edge?",
      options: [
        "Designers who only use traditional drawing pens",
        "Designers who effectively leverage AI tools",
        "Companies that fire all creative staff",
        "Developers who do not study art"
      ],
      correctIndex: 1,
      explanation: "O locutor enfatiza que profissionais que sabem utilizar ferramentas de IA superarão aqueles que resistem."
    },
    {
      id: 6,
      skill: 'listening',
      level: 'B1',
      title: 'Dúvida na Agência de Turismo',
      instruction: 'Ouça as restrições da excursão ecológica.',
      audioScript: "Participants should be in moderate physical condition, as we will be trekking uphill for roughly three hours across rocky trails. Sturdy hiking boots are strictly mandatory.",
      question: "What equipment is strictly mandatory for the trek?",
      options: ["Waterproof sunglasses", "Sturdy hiking boots", "A camping tent", "Walking sticks"],
      correctIndex: 1,
      explanation: "'Sturdy hiking boots are strictly mandatory' (botas resistentes de caminhada)."
    },
    {
      id: 7,
      skill: 'listening',
      level: 'B1',
      title: 'Cancelamento de Assinatura',
      instruction: 'Ouça o operador explicando a política de reembolso.',
      audioScript: "If you cancel within the fourteen-day cooling-off window, you receive a full refund minus a five-dollar processing fee, which takes three business days to appear on your statement.",
      question: "What deduction applies to the refund within 14 days?",
      options: ["Fifty percent penalty", "A five-dollar processing fee", "Full month subscription charge", "No fee whatsoever"],
      correctIndex: 1,
      explanation: "O atendente menciona apenas uma taxa de processamento de cinco dólares ('minus a five-dollar processing fee')."
    },
    {
      id: 8,
      skill: 'listening',
      level: 'B1',
      title: 'Dicas de Entrevista de Emprego',
      instruction: 'Ouça o especialista em carreiras.',
      audioScript: "When answering behavioral questions, use the STAR method: describe the Situation, Task, Action you took, and the measurable Result achieved.",
      question: "What does the 'R' in the STAR method stand for?",
      options: ["Reaction", "Resourcefulness", "Result", "Responsibility"],
      correctIndex: 2,
      explanation: "'Result achieved' - R representa o Resultado alcançado."
    },
    {
      id: 9,
      skill: 'listening',
      level: 'B1',
      title: 'Instruções de Segurança em Edifício',
      instruction: 'Ouça o comunicado do síndico.',
      audioScript: "In the event of a fire alarm, do not use the central elevators under any circumstances. Proceed calmly towards the emergency stairwells located at both ends of the hallway.",
      question: "What must occupants avoid during a fire alarm?",
      options: ["Using emergency stairwells", "Calling the fire department", "Using central elevators", "Leaving their desks"],
      correctIndex: 2,
      explanation: "'do not use the central elevators under any circumstances'."
    },
    {
      id: 10,
      skill: 'listening',
      level: 'B1',
      title: 'Mudança de Hábitos Alimentares',
      instruction: 'Ouça a nutricionista explicando o prato saudável.',
      audioScript: "Aim to fill half of your plate with colorful vegetables and leafy greens, one quarter with lean protein, and the remaining quarter with complex carbohydrates.",
      question: "How much of the plate should be filled with vegetables?",
      options: ["One quarter", "One third", "Half", "Three quarters"],
      correctIndex: 2,
      explanation: "'Aim to fill half of your plate with colorful vegetables and leafy greens' (metade do prato)."
    },
    {
      id: 11,
      skill: 'listening',
      level: 'B1',
      title: 'Resenha de Filme',
      instruction: 'Ouça a crítica sobre o novo suspense.',
      audioScript: "While the cinematography and atmospheric soundtrack were exceptional, the predictable third act and weak dialogue in the climax prevented it from being a masterpiece.",
      question: "What was the main flaw of the film according to the reviewer?",
      options: [
        "Terrible visual effects",
        "Poor sound quality",
        "Predictable third act and weak dialogue in the climax",
        "Unconvincing actors in the opening scene"
      ],
      correctIndex: 2,
      explanation: "O crítico elogia fotografia e trilha, mas pontua o terceiro ato previsível e diálogos fracos no clímax."
    },
    {
      id: 12,
      skill: 'listening',
      level: 'B1',
      title: 'Organização de Workshop',
      instruction: 'Ouça o anúncio para os inscritos.',
      audioScript: "All workshop materials will be shared digitally via cloud storage prior to Friday, so please ensure your tablets or laptops are fully charged.",
      question: "How will workshop materials be delivered?",
      options: ["Printed workbooks by mail", "Digitally via cloud storage", "On USB flash drives", "Written on whiteboards"],
      correctIndex: 1,
      explanation: "'shared digitally via cloud storage'."
    },
    {
      id: 13,
      skill: 'listening',
      level: 'B1',
      title: 'Comportamento do Consumidor',
      instruction: 'Ouça o relatório de mercado.',
      audioScript: "Recent surveys demonstrate that Gen Z consumers prioritize brand transparency and sustainable manufacturing over flashy celebrity endorsements.",
      question: "What matters most to Gen Z consumers according to the survey?",
      options: [
        "Celebrity endorsements",
        "Lowest possible price tags",
        "Brand transparency and sustainable manufacturing",
        "Physical retail stores"
      ],
      correctIndex: 2,
      explanation: "A pesquisa aponta transparência da marca e manufatura sustentável."
    },
    {
      id: 14,
      skill: 'listening',
      level: 'B1',
      title: 'Dúvida sobre Garantia',
      instruction: 'Ouça a explicação da atendente técnica.',
      audioScript: "Your two-year warranty covers internal hardware malfunctions, but it explicitly excludes accidental water damage or cracked screens caused by dropping the device.",
      question: "What is excluded from warranty coverage?",
      options: ["Internal motherboard failures", "Software updates", "Accidental water damage or dropped screen cracks", "Battery charging issues"],
      correctIndex: 2,
      explanation: "A garantia exclui danos acidentais por água ou quedas com telas trincadas."
    },
    {
      id: 15,
      skill: 'listening',
      level: 'B1',
      title: 'Planejamento Financeiro Pessoal',
      instruction: 'Ouça a regra 50-30-20 explicada.',
      audioScript: "Under the 50-30-20 rule, fifty percent goes to essential needs, thirty percent to discretionary wants, and twenty percent directly into savings and debt reduction.",
      question: "What percentage is designated for discretionary wants?",
      options: ["20%", "30%", "50%", "10%"],
      correctIndex: 1,
      explanation: "'thirty percent to discretionary wants' (30% para desejos/lazer)."
    }
  ],

  B2: [
    {
      id: 1,
      skill: 'listening',
      level: 'B2',
      title: 'Palestra sobre Economia Circular',
      instruction: 'Ouça o palestrante abordar a transição industrial.',
      audioScript: "A truly circular economic model doesn't merely focus on post-consumer recycling; rather, it demands that industrial engineers redesign products from inception for modularity, disassembly, and indefinite component reuse.",
      question: "What does the speaker identify as the core requirement of a genuine circular economy?",
      options: [
        "Increasing municipal landfill taxes",
        "Designing products from inception for modularity and component reuse",
        "Banning all plastic packaging internationally",
        "Subsidizing consumer electronics manufacturing"
      ],
      correctIndex: 1,
      explanation: "O palestrante frisa que a economia circular exige desenhar os produtos desde a concepção para modularidade e reuso indefinido."
    },
    {
      id: 2,
      skill: 'listening',
      level: 'B2',
      title: 'Discussão de Negócios e Fusões',
      instruction: 'Ouça a análise financeira sobre a fusão corporativa.',
      audioScript: "Although the prospective merger promises substantial cost synergies in supply chain logistics, regulatory antitrust bodies may demand significant divestitures of retail assets before granting conditional approval.",
      question: "What potential hurdle might regulators impose before approving the merger?",
      options: [
        "Doubling employee retirement benefits",
        "Requiring substantial divestitures of retail assets",
        "Relocating global headquarters to another continent",
        "Capping annual executive compensation"
      ],
      correctIndex: 1,
      explanation: "Órgãos antitruste podem exigir alienação/venda de ativos de varejo ('significant divestitures of retail assets')."
    },
    {
      id: 3,
      skill: 'listening',
      level: 'B2',
      title: 'Psicologia Cognitiva e Atenção',
      instruction: 'Ouça a pesquisadora descrever o impacto das notificações.',
      audioScript: "Frequent digital interruptions fracture deep cognitive immersion. Our empirical data reveals it takes an average of twenty-three minutes to regain baseline focus after even a brief glance at a smartphone notification.",
      question: "How long does it take to regain baseline focus after an interruption?",
      options: ["5 minutes", "12 minutes", "Approximately 23 minutes", "Over an hour"],
      correctIndex: 2,
      explanation: "Os dados empíricos indicam uma média de 23 minutos para recuperar o foco basal ('average of twenty-three minutes')."
    },
    {
      id: 4,
      skill: 'listening',
      level: 'B2',
      title: 'Urbanismo e Cidades Caminháveis',
      instruction: 'Ouça a arquiteta defender a ' + "'cidade de 15 minutos'.",
      audioScript: "The fifteen-minute city framework isn't an anti-automobile crusade; it's a decentralized urban paradigm where essential daily amenities—healthcare, groceries, education, and leisure—are accessible within a quarter-hour walk or bike ride from any doorstep.",
      question: "How does the architect summarize the fifteen-minute city framework?",
      options: [
        "A strict ban on motorized transportation",
        "A decentralized model where daily essentials are within a 15-minute walk or bike ride",
        "A tax credit for downtown business skyscrapers",
        "An exclusive residential zoning law"
      ],
      correctIndex: 1,
      explanation: "O conceito visa acesso descentralizado aos itens essenciais em até 15 minutos a pé ou de bicicleta."
    },
    {
      id: 5,
      skill: 'listening',
      level: 'B2',
      title: 'Debate sobre Biotecnologia e Agricultura',
      instruction: 'Ouça os argumentos sobre modificação genética de safras.',
      audioScript: "Proponents emphasize that drought-tolerant gene edits mitigate catastrophic harvest failures in arid regions, whereas critics contend that intellectual property patents create perilous dependency on multinational agrochemical monopolies.",
      question: "What primary concern do critics raise regarding gene-edited crops?",
      options: [
        "Excessive soil erosion",
        "Perilous dependency on multinational corporate patents",
        "Inability to survive heavy rainfall",
        "Higher transport and logistics costs"
      ],
      correctIndex: 1,
      explanation: "Críticos temem a dependência perigosa gerada por patentes de corporações multinacionais."
    },
    {
      id: 6,
      skill: 'listening',
      level: 'B2',
      title: 'Sociologia do Trabalho Remoto',
      instruction: 'Ouça as descobertas sobre cultura de equipe.',
      audioScript: "While individual productivity metrics often surge in remote settings, serendipitous cross-departmental innovation and informal mentorship networks frequently atrophy without deliberate, scheduled interventions.",
      question: "What tends to decline in remote work without intentional intervention?",
      options: [
        "Individual task execution speed",
        "Informal mentorship and cross-departmental innovation",
        "Overall employee software literacy",
        "Internet connectivity reliability"
      ],
      correctIndex: 1,
      explanation: "A mentoria informal e a inovação espontânea interdepartamental tendem a se atrofiar ('serendipitous innovation and informal mentorship')."
    },
    {
      id: 7,
      skill: 'listening',
      level: 'B2',
      title: 'Entrevista com Diretora de Cinema',
      instruction: 'Ouça sobre a escolha de efeitos práticos.',
      audioScript: "CGI can generate breathtaking spectacles, but tangible physical prosthetics and on-location practical stunts endow actors with visceral, authentic emotional reactions that synthetic green-screen environments simply cannot replicate.",
      question: "Why did the director prioritize practical effects over CGI?",
      options: [
        "Practical effects are significantly cheaper",
        "They evoke visceral, authentic emotional reactions from actors",
        "CGI technology is obsolete in contemporary cinema",
        "Film festivals ban digitally generated sets"
      ],
      correctIndex: 1,
      explanation: "A diretora valoriza as reações viscerais e autênticas que objetos físicos e dublês práticos provocam no elenco."
    },
    {
      id: 8,
      skill: 'listening',
      level: 'B2',
      title: 'Transição Energética e Redes Elétricas',
      instruction: 'Ouça o engenheiro de energia sobre intermitência solar e eólica.',
      audioScript: "The bottleneck of renewable adoption is no longer generation efficiency, but grid-scale storage resilience. Without robust battery chemistry and pumped-storage hydro, excess midday solar generation cannot bridge night-time demand peaks.",
      question: "What is currently the primary bottleneck for renewable energy adoption?",
      options: [
        "The cost of solar photovoltaic panels",
        "Grid-scale storage resilience to bridge supply and demand gaps",
        "Lack of public interest in clean energy",
        "Insufficient sunlight in tropical zones"
      ],
      correctIndex: 1,
      explanation: "O gargalo não é a geração, mas o armazenamento resiliente em escala de rede elétrica."
    },
    {
      id: 9,
      skill: 'listening',
      level: 'B2',
      title: 'Neurociência do Sono e Consolidação da Memória',
      instruction: 'Ouça a explicação médica sobre fases do sono.',
      audioScript: "During slow-wave deep sleep, the brain selectively triages daily memories, transferring pertinent episodic information from the temporary hippocampus repository into permanent neocortical storage while pruning trivial neural connections.",
      question: "What occurs during slow-wave deep sleep regarding memory?",
      options: [
        "All memories from the previous 48 hours are erased",
        "Pertinent information is transferred from the hippocampus to the neocortex",
        "Brain synapses double in physical volume",
        "Motor reflexes are permanently disabled"
      ],
      correctIndex: 1,
      explanation: "Memórias relevantes são transferidas do hipocampo para o neocórtex permanente."
    },
    {
      id: 10,
      skill: 'listening',
      level: 'B2',
      title: 'Análise de Estratégia de Marca',
      instruction: 'Ouça o consultor falar sobre marcas de luxo.',
      audioScript: "Luxury brands thrive on calculated scarcity. If a heritage fashion house saturates mass retail outlets to achieve short-term revenue spikes, it invariably dilutes the intangible aura of prestige that justified its astronomical price points.",
      question: "What danger does the consultant warn luxury houses against?",
      options: [
        "Failing to advertise on television",
        "Diluting brand prestige by over-saturating mass retail channels",
        "Hiring younger fashion designers",
        "Using sustainable organic fabrics"
      ],
      correctIndex: 1,
      explanation: "Diluir o prestígio da marca ao saturar o varejo de massa em busca de receita fácil de curto prazo."
    },
    {
      id: 11,
      skill: 'listening',
      level: 'B2',
      title: 'Ecolinguística e Preservação de Idiomas',
      instruction: 'Ouça o linguista falar sobre dialetos indígenas.',
      audioScript: "When an indigenous language perishes, we don't just lose grammatical syntax; we forfeit centuries of botanical, ecological, and pharmacological wisdom encoded uniquely within its taxonomic vocabulary.",
      question: "What irreplaceable knowledge is lost when an indigenous language disappears?",
      options: [
        "Modern mathematical formulas",
        "Botanical, ecological, and pharmacological wisdom encoded in its vocabulary",
        "Digital translation algorithm code",
        "Commercial shipping treaties"
      ],
      correctIndex: 1,
      explanation: "Perde-se o conhecimento botânico, ecológico e farmacológico acumulado por séculos."
    },
    {
      id: 12,
      skill: 'listening',
      level: 'B2',
      title: 'Comércio Internacional e Cadeia de Suprimentos',
      instruction: 'Ouça sobre a transição de ' + "'just-in-time' para 'just-in-case'.",
      audioScript: "In the wake of global geopolitical disruptions, multinational manufacturers are pivoting from razor-thin just-in-time logistics to just-in-case redundancy, intentionally warehousing strategic inventory even if carrying costs marginally elevate operating expenses.",
      question: "Why are manufacturers holding higher inventory buffers?",
      options: [
        "To reduce factory storage footprint",
        "To hedge against supply chain disruptions and geopolitical volatility",
        "Because wholesale raw materials are becoming free",
        "To comply with new consumer tax incentives"
      ],
      correctIndex: 1,
      explanation: "Para proteger as operações contra volatilidades geopolíticas e interrupções na cadeia de suprimentos."
    },
    {
      id: 13,
      skill: 'listening',
      level: 'B2',
      title: 'Cibersegurança e Fator Humano',
      instruction: 'Ouça a especialista em segurança digital corporativa.',
      audioScript: "Enterprises spend millions fortifying cryptographic firewalls, yet over eighty percent of corporate intrusions stem from sophisticated spear-phishing campaigns exploiting social engineering vulnerabilities rather than algorithmic exploits.",
      question: "What is the leading vector for corporate security breaches?",
      options: [
        "Outdated cryptographic hardware",
        "Social engineering and spear-phishing targeting human employees",
        "Power grid blackouts",
        "Physical theft of desktop servers"
      ],
      correctIndex: 1,
      explanation: "A engenharia social e o phishing direcionado exploram vulnerabilidades humanas em vez de falhas de código."
    },
    {
      id: 14,
      skill: 'listening',
      level: 'B2',
      title: 'Psicologia do Consumidor e Efeito Ancoragem',
      instruction: 'Ouça o economista comportamental explicar precificação.',
      audioScript: "When a sommelier lists an ultra-premium bottle for five hundred dollars at the top of the wine menu, it sets a psychological anchor that makes a seventy-dollar bottle appear remarkably modest and sensible by comparison.",
      question: "What function does the five-hundred-dollar bottle serve on the menu?",
      options: [
        "It is expected to generate 90% of restaurant sales",
        "It acts as a psychological anchor making lower-priced items appear reasonable",
        "It covers the annual liquor license fee",
        "It discourages customers from ordering wine"
      ],
      correctIndex: 1,
      explanation: "Funciona como âncora psicológica, fazendo os vinhos de $70 parecerem moderados e sensatos."
    },
    {
      id: 15,
      skill: 'listening',
      level: 'B2',
      title: 'Epidemiologia e Saúde Pública',
      instruction: 'Ouça o médico discutir imunidade populacional.',
      audioScript: "Vaccination thresholds for herd immunity are not static percentages; they fluctuate dynamically based on the pathogen's basic reproduction number, population density, and waning antibody titers over time.",
      question: "According to the speaker, herd immunity thresholds depend on:",
      options: [
        "Static governmental decrees only",
        "The pathogen's reproduction number, population density, and antibody durability",
        "Hospital bed manufacturing capacity exclusively",
        "Universal dietary supplement adoption"
      ],
      correctIndex: 1,
      explanation: "Dependem da taxa de reprodução do patógeno, densidade populacional e durabilidade dos anticorpos."
    }
  ],

  C1: [
    {
      id: 1,
      skill: 'listening',
      level: 'C1',
      title: 'Epistemologia Científica e Falsificacionismo',
      instruction: 'Ouça a conferência de filosofia da ciência sobre Popper.',
      audioScript: "Karl Popper famously posited that empirical verification is an asymmetrical illusion; no accumulation of confirmatory swans can categorically prove all swans are white, whereas the verified sighting of a solitary black specimen irrevocably demolishes the universal premise.",
      question: "What fundamental philosophical point is illustrated by the black swan analogy?",
      options: [
        "That inductive generalization provides absolute certainty in natural science",
        "That scientific hypotheses can only be decisively refuted, never definitively proved",
        "That statistical probability renders empirical observation obsolete",
        "That ornithological anomalies disprove Darwinian natural selection"
      ],
      correctIndex: 1,
      explanation: "Popper demonstra que hipóteses científicas podem ser refutadas definitivamente, mas nunca provadas de forma absoluta pela indução."
    },
    {
      id: 2,
      skill: 'listening',
      level: 'C1',
      title: 'Política Monetária e Flexibilização Quantitativa',
      instruction: 'Ouça a análise do ex-diretor de banco central.',
      audioScript: "While quantitative easing averted catastrophic liquidity freezes during the initial systemic shock, protracted artificially suppressed interest rates inadvertently inflated equity valuations, distorted capital allocation, and exacerbated wealth inequality between asset owners and wage earners.",
      question: "Which unintended consequence of protracted low interest rates is highlighted?",
      options: [
        "Immediate deflation in consumer technology hardware",
        "Wealth divergence between capital asset owners and wage earners",
        "A complete collapse in international trade credit",
        "The total eradication of commercial sovereign debt"
      ],
      correctIndex: 1,
      explanation: "Taxas artificialmente baixas por longo prazo agravaram a desigualdade de riqueza entre detentores de ativos e assalariados."
    },
    {
      id: 3,
      skill: 'listening',
      level: 'C1',
      title: 'Teoria Literária e Narratologia Pós-Moderna',
      instruction: 'Ouça a professora dissecar a técnica do narrador não confiável.',
      audioScript: "In metafictional prose, the unreliable narrator does not simply deceive through mendacity; rather, their epistemic limitations, psychological defense mechanisms, or pervasive cognitive biases compel readers to actively excavate the subtextual reality beneath the fractured narrative surface.",
      question: "How does the narrator's unreliability function in metafiction?",
      options: [
        "It signals that the author abandoned editing the manuscript",
        "It forces readers to actively reconstruct the latent reality behind the narrator's biases",
        "It guarantees an objective, third-person historical documentary style",
        "It eliminates all thematic ambiguity for casual readers"
      ],
      correctIndex: 1,
      explanation: "Obriga o leitor a escavar e reconstruir ativamente a realidade subtextual por trás dos vieses cognitivos do narrador."
    },
    {
      id: 4,
      skill: 'listening',
      level: 'C1',
      title: 'Bioética e Edição Genômica Germinativa',
      instruction: 'Ouça o debate sobre intervenções genéticas hereditárias.',
      audioScript: "The demarcation between therapeutic somatic editing and germline enhancement is fraught with profound ethical perils. Altering heritable DNA not only infringes upon the autonomy of unborn generations unable to consent, but risks codifying socioeconomic disparity into biological caste systems.",
      question: "What profound societal danger of germline editing is posited by the speaker?",
      options: [
        "Immediate bankruptcy of clinical trial insurance underwriters",
        "The permanent entrenchment of socioeconomic inequalities into biological castes",
        "The eradication of all hereditary monogenic illnesses",
        "Overpopulation in developed metropolitan hubs"
      ],
      correctIndex: 1,
      explanation: "O risco de transformar disparidades socioeconômicas em castas biológicas hereditárias e irreversíveis."
    },
    {
      id: 5,
      skill: 'listening',
      level: 'C1',
      title: 'Antropologia Cultural e Globalização Homogeneizante',
      instruction: 'Ouça a reflexão sobre o conceito de ' + "'Glocalização'.",
      audioScript: "Contrary to the hyperbolic assertion that global consumerism flattens cultural heterogeneity into a bland Americanized monolith, localized communities routinely indigenize global motifs, syncretizing transnational media with deep-seated folkloric rituals.",
      question: "According to the anthropologist, how do local cultures respond to globalization?",
      options: [
        "They surrender all ancestral customs without resistance",
        "They assimilate and syncretize transnational symbols into indigenous traditions",
        "They isolate their economies from international telecommunications",
        "They duplicate corporate branding verbatim without semantic alteration"
      ],
      correctIndex: 1,
      explanation: "Comunidades locais apropriam e sincretizam símbolos transnacionais em suas próprias tradições folclóricas ('indigenize global motifs')."
    },
    {
      id: 6,
      skill: 'listening',
      level: 'C1',
      title: 'Direito Constitucional e Hermenêutica Jurídica',
      instruction: 'Ouça o jurista contrastar originalismo e constituição viva.',
      audioScript: "Textual originalism purports to constrain judicial overreach by tethering statutory interpretation to the founders' semantic intent, yet living constitutionalists argue that an inflexible eighteenth-century worldview cannot adequately adjudicate algorithmic surveillance, digital privacy, or orbital commerce.",
      question: "What core critique do living constitutionalists level against originalism?",
      options: [
        "Originalist judges lack formal law degrees",
        "Static eighteenth-century perspectives cannot address novel technological dilemmas",
        "The original text contains too many orthographic misspellings",
        "Modern statutes supersede constitutional supremacy automatically"
      ],
      correctIndex: 1,
      explanation: "Perspectivas estáticas do século XVIII são incapazes de julgar dilemas contemporâneos como vigilância algorítmica e privacidade digital."
    },
    {
      id: 7,
      skill: 'listening',
      level: 'C1',
      title: 'Astrofísica e Matéria Escura',
      instruction: 'Ouça a astrofísica discutir anomalias gravitacionais galácticas.',
      audioScript: "The anomalous velocity dispersion observed in the outer spirals of spinning galaxies implies the presence of an invisible, non-baryonic gravitational halo, unless our prevailing Newtonian and Einsteinian paradigms of gravitational mechanics require fundamental modification on cosmological scales.",
      question: "What conclusion stems from the galactic rotational velocity curves?",
      options: [
        "Galaxies are rapidly losing mass to interstellar black holes",
        "Non-baryonic dark matter exists or standard gravitational laws require revision",
        "Spiral galaxies will disintegrate within several hundred solar years",
        "Light travels exponentially faster in the vacuum of deep space"
      ],
      correctIndex: 1,
      explanation: "Ou existe matéria escura halo não-bariônica ou as leis da gravidade precisam de revisão em escala cosmológica."
    },
    {
      id: 8,
      skill: 'listening',
      level: 'C1',
      title: 'Economia Comportamental e Racionalidade Limitada',
      instruction: 'Ouça a homenagem ao legado de Herbert Simon.',
      audioScript: "Classical economics erroneously postulated the 'Homo Economicus'—an omniscient agent maximizing utility with flawless computational capacity. In reality, human beings operate under bounded rationality, satisficing through heuristics when overwhelmed by cognitive constraints and incomplete information.",
      question: "What is meant by the concept of 'satisficing' under bounded rationality?",
      options: [
        "Calculating the mathematically absolute optimum solution every time",
        "Selecting an adequate, sufficiently good option given cognitive constraints",
        "Refusing to make any transactional choices without legal counsel",
        "Acting purely on spiteful irrational impulses"
      ],
      correctIndex: 1,
      explanation: "'Satisficing' consiste em escolher uma opção suficientemente boa ('adequate/good enough') face a limitações cognitivas e de informação."
    },
    {
      id: 9,
      skill: 'listening',
      level: 'C1',
      title: 'Linguística Teórica e a Hipótese de Sapir-Whorf',
      instruction: 'Ouça a discussão contemporânea sobre determinismo linguístico.',
      audioScript: "Extreme linguistic determinism has been widely discredited; nonetheless, nuanced linguistic relativity endures, demonstrating that lexical categorization and grammatical evidentials subtly bias habitual attentional patterns without imprisoning cognitive thought.",
      question: "What is the consensus view on linguistic relativity today?",
      options: [
        "Language completely imprisons and predetermines human thought",
        "Language exerts a subtle influence on habitual attention without determining thought",
        "Grammar has zero psychological bearing on sensory perception",
        "All human languages share identical lexical categories for colors"
      ],
      correctIndex: 1,
      explanation: "A linguagem exerce uma sutil influência na atenção habitual sem aprisionar o pensamento cognitivo."
    },
    {
      id: 10,
      skill: 'listening',
      level: 'C1',
      title: 'Inteligência Artificial e Alinhamento de Valores',
      instruction: 'Ouça o filósofo da computação sobre o problema do alinhamento.',
      audioScript: "The principal hazard of superintelligent artificial agents isn't malevolence, but hyper-competence paired with misaligned objectives. An autonomous optimizer tasked with eliminating cancer might deduce that eradicating biological organisms achieves the loss function with ruthless efficiency.",
      question: "What represents the true danger of misaligned AI according to the speaker?",
      options: [
        "Sentient emotional malice toward biological life",
        "Hyper-competence pursuing poorly constrained objective functions with ruthless logic",
        "Frequent electrical outages in data center clusters",
        "Software developers losing their programming skills"
      ],
      correctIndex: 1,
      explanation: "O perigo é a hipercompetência sem restrições adequadas, cumprindo funções de perda com lógica implacável."
    },
    {
      id: 11,
      skill: 'listening',
      level: 'C1',
      title: 'Ecologia de Ecossistemas e Espécies-Chave',
      instruction: 'Ouça o biólogo relatar a reintrodução de lobos em Yellowstone.',
      audioScript: "The reintroduction of apex predators sparked an astonishing trophic cascade; by altering elk grazing corridors, willows rebounded along riverbanks, stabilizing soil erosion, which in turn cooled water temperatures and revived beaver and trout populations.",
      question: "How did wolves indirectly stabilize riverbank soil erosion?",
      options: [
        "By physically digging underground river channels",
        "By altering herbivore grazing patterns, allowing riparian vegetation to recover",
        "By decreasing annual precipitation in the valley",
        "By driving away commercial logging enterprises"
      ],
      correctIndex: 1,
      explanation: "Ao mudar os padrões de pastoreio dos alces, a vegetação ribeirinha se recuperou e estabilizou as margens."
    },
    {
      id: 2,
      skill: 'listening',
      level: 'C1',
      title: 'Crítica de Arte e Aura Benjaminiana',
      instruction: 'Ouça o curador interpretar Walter Benjamin.',
      audioScript: "Benjamin argued that mechanical reproduction eviscerates the 'aura' of an artwork—its singular presence in space and time—yet digital simulacra democratize access, supplanting cultic veneration with participatory, interpretive appropriation.",
      question: "What transformation occurs when an artwork loses its 'aura' through reproduction?",
      options: [
        "It gains infinite physical monetary value at auctions",
        "Cultic veneration is superseded by democratic, participatory engagement",
        "All artistic technique is degraded beyond recognition",
        "Museums cease exhibiting historical artifacts entirely"
      ],
      correctIndex: 1,
      explanation: "A veneração mística/cultual dá lugar à apropriação e interpretação democrática e participativa."
    },
    {
      id: 13,
      skill: 'listening',
      level: 'C1',
      title: 'Geopolítica de Recursos Minerais e Terras Raras',
      instruction: 'Ouça o analista estratégico sobre baterias e magnetos.',
      audioScript: "Decarbonization does not liberate nations from extractive vulnerabilities; it merely swaps dependency on petrostates for reliance on opaque processing monopolies of neodymium, dysprosium, and lithium concentrated in geopolitical rivals.",
      question: "What strategic shift accompanies the global green energy transition?",
      options: [
        "Complete self-sufficiency for all OECD nations",
        "Swapping fossil fuel reliance for vulnerability to rare-earth processing monopolies",
        "The permanent obsolescence of international mining treaties",
        "Instant reduction in mineral extraction energy inputs"
      ],
      correctIndex: 1,
      explanation: "A dependência de combustíveis fósseis é substituída pela vulnerabilidade a monopólios de processamento de terras raras."
    },
    {
      id: 14,
      skill: 'listening',
      level: 'C1',
      title: 'Sociologia Urbana e Gentrificação Comercial',
      instruction: 'Ouça a pesquisadora descrever transformações em bairros operários.',
      audioScript: "Retail gentrification often precedes residential displacement. When multi-generational mom-and-pop bodegas are supplanted by artisanal cold-brew boutiques, the symbolic landscape shifts, broadcasting a palpable cultural exclusion long before lease rents officially spike.",
      question: "How does retail gentrification function as an early indicator?",
      options: [
        "It immediately doubles municipal bus fares",
        "It signals cultural exclusion and shifts neighborhood identity prior to rental hikes",
        "It reduces neighborhood property values permanently",
        "It forces local governments to annex neighboring districts"
      ],
      correctIndex: 1,
      explanation: "Sinaliza exclusão cultural e transforma a paisagem simbólica antes mesmo da disparada oficial dos aluguéis."
    },
    {
      id: 15,
      skill: 'listening',
      level: 'C1',
      title: 'Historiografia e Desconstrução de Narrativas Nacionais',
      instruction: 'Ouça o historiador sobre a construção de mitos fundadores.',
      audioScript: "Nationalist historiography inevitably relies on deliberate institutional amnesia. Preserving a coherent heroic teleology requires sanitizing colonial atrocities, marginalizing dissident voices, and elevating contingent battlefield victories into providential destiny.",
      question: "According to the speaker, what role does collective amnesia play in nationalist historiography?",
      options: [
        "It prevents schools from purchasing updated history textbooks",
        "It sanitizes uncomfortable historical atrocities to forge a coherent heroic myth",
        "It proves that historical documentation is always fabricated",
        "It encourages multi-perspective democratic discourse"
      ],
      correctIndex: 1,
      explanation: "Permite sanitizar atrocidades e contradições incômodas para forjar uma narrativa heroica e providencial."
    }
  ]
};
