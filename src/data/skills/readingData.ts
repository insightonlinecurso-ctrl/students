import { SkillTestItem } from '../skillsTestData';

export const READING_DATA: Record<string, SkillTestItem[]> = {
  A1: [
    {
      id: 1,
      skill: 'reading',
      level: 'A1',
      title: 'Aviso de Café',
      instruction: 'Leia a placa na porta da padaria e responda.',
      passageTitle: 'Bakery Opening Hours',
      passageText: "Welcome to Sunshine Bakery! We are open Monday to Friday from 7:00 AM to 6:00 PM. On Saturday, we open from 8:00 AM to 2:00 PM. We are closed on Sunday.",
      question: "When is Sunshine Bakery closed?",
      options: ["Monday", "Friday", "Saturday", "Sunday"],
      correctIndex: 3,
      explanation: "O texto afirma no final: 'We are closed on Sunday' (fechado aos domingos)."
    },
    {
      id: 2,
      skill: 'reading',
      level: 'A1',
      title: 'Bilhete de Amigo',
      instruction: 'Leia o bilhete deixado na geladeira.',
      passageTitle: 'Message from Tom',
      passageText: "Hi Anna, I went to the park with my dog Bruno. There is fresh milk in the fridge and sandwiches on the counter. See you at 5 PM! - Tom",
      question: "Where are the sandwiches?",
      options: ["In the park", "In the fridge", "On the kitchen counter", "In Tom's backpack"],
      correctIndex: 2,
      explanation: "Tom escreveu: 'sandwiches on the counter' (no balcão)."
    },
    {
      id: 3,
      skill: 'reading',
      level: 'A1',
      title: 'Menu de Almoço',
      instruction: 'Analise o cardápio econômico.',
      passageTitle: 'Daily Lunch Special',
      passageText: "Lunch Combo ($10): Grilled chicken salad, a warm bread roll, and a bottle of mineral water. Dessert: Apple or chocolate cake for $3 extra.",
      question: "What drink is included in the $10 lunch combo?",
      options: ["Orange juice", "Mineral water", "Hot coffee", "Soda"],
      correctIndex: 1,
      explanation: "O combo inclui 'a bottle of mineral water' (água mineral)."
    },
    {
      id: 4,
      skill: 'reading',
      level: 'A1',
      title: 'Crachá de Biblioteca',
      instruction: 'Leia os dados do cartão de membro.',
      passageTitle: 'City Library Card',
      passageText: "Name: Maria Silva. Member ID: 4092. Books allowed: 3 books for 14 days. Lost books fee: $15 each.",
      question: "How many books can Maria borrow at one time?",
      options: ["1 book", "2 books", "3 books", "14 books"],
      correctIndex: 2,
      explanation: "O cartão estipula: 'Books allowed: 3 books for 14 days'."
    },
    {
      id: 5,
      skill: 'reading',
      level: 'A1',
      title: 'Anúncio de Venda',
      instruction: 'Leia a oferta no mural comunitário.',
      passageTitle: 'Bicycle for Sale',
      passageText: "Red mountain bike in very good condition. New tires and comfortable seat. Price: $80 (cash only). Contact Peter at 555-0192.",
      question: "What color is the bicycle?",
      options: ["Blue", "Red", "Black", "Silver"],
      correctIndex: 1,
      explanation: "A descrição inicia com: 'Red mountain bike'."
    },
    {
      id: 6,
      skill: 'reading',
      level: 'A1',
      title: 'Convite de Aniversário',
      instruction: 'Leia o convite de festa infantil.',
      passageTitle: 'Emma is Turning 8!',
      passageText: "Please join us for games and birthday cake! Saturday, October 14th at 3:00 PM. Address: 12 Maple Street. Wear your favorite superhero costume!",
      question: "What should guests wear to the party?",
      options: ["Formal black suit", "Swimming clothes", "Superhero costume", "School uniform"],
      correctIndex: 2,
      explanation: "O convite pede: 'Wear your favorite superhero costume!'."
    },
    {
      id: 7,
      skill: 'reading',
      level: 'A1',
      title: 'Regras da Piscina',
      instruction: 'Leia o cartaz de aviso no clube.',
      passageTitle: 'Pool Safety Rules',
      passageText: "1. Shower before entering the water. 2. No running near the pool. 3. Children under 10 must be accompanied by an adult. 4. No glass bottles allowed.",
      question: "What must children under 10 do?",
      options: ["Wear red hats", "Be accompanied by an adult", "Swim only in the deep end", "Pay a double fee"],
      correctIndex: 1,
      explanation: "Regra 3: 'Children under 10 must be accompanied by an adult'."
    },
    {
      id: 8,
      skill: 'reading',
      level: 'A1',
      title: 'Horário de Remédio',
      instruction: 'Leia a receita médica simplificada.',
      passageTitle: 'Prescription Instructions',
      passageText: "Take one tablet every morning after breakfast with a full glass of water. Do not take on an empty stomach.",
      question: "When should the medicine be taken?",
      options: ["Before going to bed", "Every morning after breakfast", "Before lunch", "Only when feeling dizzy"],
      correctIndex: 1,
      explanation: "'Take one tablet every morning after breakfast'."
    },
    {
      id: 9,
      skill: 'reading',
      level: 'A1',
      title: 'Cartão Postal de Londres',
      instruction: 'Leia o postal enviado para a família.',
      passageTitle: 'Greetings from London',
      passageText: "Dear Mom, London is wonderful! Yesterday we saw the Big Ben and rode a red double-decker bus. Today we are visiting the British Museum. Love, Daniel.",
      question: "What did Daniel do yesterday?",
      options: ["Flew back home", "Saw Big Ben and rode a double-decker bus", "Went shopping in Paris", "Stayed at the hotel all day"],
      correctIndex: 1,
      explanation: "Daniel escreveu: 'Yesterday we saw the Big Ben and rode a red double-decker bus'."
    },
    {
      id: 10,
      skill: 'reading',
      level: 'A1',
      title: 'Guia do Quarto de Hotel',
      instruction: 'Leia as informações sobre internet do hotel.',
      passageTitle: 'Guest Wi-Fi Information',
      passageText: "Network Name: HotelGuest_Free. Password: welcome2026. For technical assistance, dial 0 from your room telephone.",
      question: "What is the Wi-Fi password?",
      options: ["hotel123", "welcome2026", "guest_free", "password0"],
      correctIndex: 1,
      explanation: "O papel informa: 'Password: welcome2026'."
    },
    {
      id: 11,
      skill: 'reading',
      level: 'A1',
      title: 'Etiqueta de Roupa',
      instruction: 'Leia as instruções de lavagem.',
      passageTitle: 'Care Instructions',
      passageText: "100% Cotton. Machine wash cold with similar colors. Do not bleach. Tumble dry low. Warm iron if needed.",
      question: "What is the material of this clothing item?",
      options: ["100% Wool", "100% Silk", "100% Cotton", "Polyester blend"],
      correctIndex: 2,
      explanation: "A etiqueta destaca: '100% Cotton' (100% algodão)."
    },
    {
      id: 12,
      skill: 'reading',
      level: 'A1',
      title: 'Ticket de Cinema',
      instruction: 'Leia os dados do bilhete de cinema.',
      passageTitle: 'Cinema City - Screen 4',
      passageText: "Movie: Space Adventure 3D. Date: Friday, Nov 10. Time: 7:30 PM. Seat: Row F, Seat 12. Hall: Screen 4.",
      question: "Which row and seat is reserved?",
      options: ["Row A, Seat 4", "Row D, Seat 7", "Row F, Seat 12", "Row G, Seat 10"],
      correctIndex: 2,
      explanation: "O bilhete traz impresso: 'Seat: Row F, Seat 12'."
    },
    {
      id: 13,
      skill: 'reading',
      level: 'A1',
      title: 'Placa no Supermercado',
      instruction: 'Leia o aviso no caixa express.',
      passageTitle: 'Express Checkout Lane',
      passageText: "This register is for customers with 10 items or fewer. Credit cards and debit cards only. No cash accepted here.",
      question: "How can customers pay at this express register?",
      options: ["Cash only", "Credit or debit cards only", "Checks only", "Store vouchers only"],
      correctIndex: 1,
      explanation: "'Credit cards and debit cards only. No cash accepted here'."
    },
    {
      id: 14,
      skill: 'reading',
      level: 'A1',
      title: 'Email de Boas-Vindas',
      instruction: 'Leia o email da professora de inglês.',
      passageTitle: 'Welcome to Level 1!',
      passageText: "Dear Student, Welcome to Insight English. Your online textbook is available in the student portal. Please bring a notebook and pencil to our first class on Monday.",
      question: "What should the student bring to Monday's class?",
      options: ["A dictionary only", "A laptop and headphones", "A notebook and pencil", "Their passport"],
      correctIndex: 2,
      explanation: "A professora solicita: 'Please bring a notebook and pencil'."
    },
    {
      id: 15,
      skill: 'reading',
      level: 'A1',
      title: 'Horário de Ônibus Escolar',
      instruction: 'Leia os pontos de parada do ônibus.',
      passageTitle: 'Route 12 - Morning Schedule',
      passageText: "Stop 1: Central Square (7:10 AM). Stop 2: Green Park (7:25 AM). Stop 3: High School Gate (7:45 AM). Please arrive 5 minutes early.",
      question: "What time does the bus arrive at Green Park?",
      options: ["7:10 AM", "7:25 AM", "7:45 AM", "8:00 AM"],
      correctIndex: 1,
      explanation: "'Stop 2: Green Park (7:25 AM)'."
    }
  ],

  A2: [
    {
      id: 1,
      skill: 'reading',
      level: 'A2',
      title: 'Email de Confirmação de Hotel',
      instruction: 'Leia o email de reserva do hotel.',
      passageTitle: 'Grand Bay Hotel Confirmation',
      passageText: "Dear Ms. Carter, We are pleased to confirm your reservation for a Deluxe Twin Room for 3 nights, arriving July 15th. Check-in starts at 3:00 PM and check-out is before 11:00 AM. Breakfast is included each morning from 7:00 to 10:00 AM in the Sunrise Garden.",
      question: "What is the latest time Ms. Carter can check out without extra charge?",
      options: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"],
      correctIndex: 2,
      explanation: "O email especifica: 'check-out is before 11:00 AM'."
    },
    {
      id: 2,
      skill: 'reading',
      level: 'A2',
      title: 'Perfil de Voluntário no Abrigo',
      instruction: 'Leia a descrição do abrigo de animais.',
      passageTitle: 'Paws & Care Animal Shelter',
      passageText: "We are seeking friendly volunteers to walk rescue dogs and help clean the cat adoption rooms on Saturday mornings. No prior veterinary experience is required, but volunteers must be at least 16 years old and love animals.",
      question: "What is a mandatory requirement for volunteers?",
      options: ["A university degree in biology", "Being at least 16 years old", "Owning three pets", "Living within 1 mile"],
      correctIndex: 1,
      explanation: "O texto estabelece: 'volunteers must be at least 16 years old'."
    },
    {
      id: 3,
      skill: 'reading',
      level: 'A2',
      title: 'Artigo sobre Hábitos Matinais',
      instruction: 'Leia a dica de saúde.',
      passageTitle: 'Start Your Day with Water',
      passageText: "Many people reach immediately for coffee as soon as their alarm rings. However, medical experts recommend drinking a large glass of warm water first. During eight hours of sleep, our body loses water through breathing and sweating, so hydration boosts your metabolism and energy immediately.",
      question: "Why should you drink water before coffee in the morning?",
      options: [
        "Because water is cheaper than coffee beans",
        "Because your body loses water during sleep and needs hydration",
        "Because coffee makes everyone fall asleep",
        "Because doctors ban caffeine completely"
      ],
      correctIndex: 1,
      explanation: "O artigo explica que o corpo perde água durante a noite e a hidratação acelera o metabolismo."
    },
    {
      id: 4,
      skill: 'reading',
      level: 'A2',
      title: 'Instruções de Devolução de Mercadoria',
      instruction: 'Leia a política da loja de roupas.',
      passageTitle: 'Returns & Exchange Policy',
      passageText: "Items may be returned within 30 days of purchase for a full refund. All returned garments must have original tags attached and be unworn. Items purchased on clearance sale can only be exchanged for store credit, not cash.",
      question: "What can a customer get when returning clearance items?",
      options: ["A full cash refund", "Store credit only", "A free gift box", "No return allowed"],
      correctIndex: 1,
      explanation: "'Items purchased on clearance sale can only be exchanged for store credit, not cash'."
    },
    {
      id: 5,
      skill: 'reading',
      level: 'A2',
      title: 'Convite para Clube de Leitura',
      instruction: 'Leia o anúncio do clube da biblioteca.',
      passageTitle: 'Mystery Book Club',
      passageText: "Join us every last Tuesday of the month at 6:30 PM. This month, we are reading Agatha Christie's famous novel, 'Murder on the Orient Express'. Tea and biscuits will be served. Free admission for all library card holders.",
      question: "Which author's novel is the club reading this month?",
      options: ["Arthur Conan Doyle", "Agatha Christie", "Stephen King", "J.K. Rowling"],
      correctIndex: 1,
      explanation: "O texto cita: 'Agatha Christie's famous novel, Murder on the Orient Express'."
    },
    {
      id: 6,
      skill: 'reading',
      level: 'A2',
      title: 'Previsão do Tempo para a Semana',
      instruction: 'Leia o boletim meteorológico.',
      passageTitle: 'Midweek Weather Update',
      passageText: "Wednesday will remain bright and sunny with temperatures reaching 24°C. However, a cold front arriving Thursday night will bring heavy downpours and strong winds, causing temperatures to drop sharply to 12°C by Friday afternoon.",
      question: "What will cause the temperature drop on Friday?",
      options: ["A heatwave", "A cold front with heavy downpours", "Snowstorms", "A desert wind"],
      correctIndex: 1,
      explanation: "O texto atribui a queda de temperatura a uma frente fria ('cold front arriving Thursday night')."
    },
    {
      id: 7,
      skill: 'reading',
      level: 'A2',
      title: 'Descrição de Apartamento para Alugar',
      instruction: 'Leia o anúncio imobiliário.',
      passageTitle: 'Sunny One-Bedroom Flat',
      passageText: "Cozy one-bedroom apartment in quiet neighborhood. Features wooden floors, newly renovated bathroom, and a sunny private balcony. Water and heating bills are included in the $850 monthly rent. Electricity and internet must be paid separately by the tenant.",
      question: "Which utilities are included in the rent?",
      options: ["Electricity and internet", "Water and heating", "Internet and gas", "Cleaning service only"],
      correctIndex: 1,
      explanation: "'Water and heating bills are included in the $850 monthly rent'."
    },
    {
      id: 8,
      skill: 'reading',
      level: 'A2',
      title: 'História Curta: O Primeiro Emprego de Leo',
      instruction: 'Leia o relato de Leo sobre seu novo trabalho.',
      passageTitle: "Leo's First Day as Barista",
      passageText: "Leo was nervous on Monday morning. He had never used a commercial espresso machine before. Fortunately, his supervisor Marco was patient and demonstrated how to steam milk and grind beans properly. By lunchtime, Leo had prepared fifty cappuccinos with a smile.",
      question: "How did Marco help Leo on his first day?",
      options: [
        "He did all the cleaning for him",
        "He patiently showed him how to steam milk and grind beans",
        "He sent Leo home early",
        "He hired another barista"
      ],
      correctIndex: 1,
      explanation: "Marco foi paciente e demonstrou como vaporizar o leite e moer os grãos."
    },
    {
      id: 9,
      skill: 'reading',
      level: 'A2',
      title: 'Aviso de Manutenção no Metrô',
      instruction: 'Leia o informativo da empresa de transporte.',
      passageTitle: 'Blue Line Weekend Closure',
      passageText: "Due to essential track replacement between Oak Station and Riverbank, trains on the Blue Line will not operate this Saturday and Sunday. Free replacement shuttle buses will depart every 10 minutes outside each closed station.",
      question: "How can passengers travel along the Blue Line route this weekend?",
      options: ["By private taxis only", "On free replacement shuttle buses", "By walking on the tracks", "On high-speed boats"],
      correctIndex: 1,
      explanation: "'Free replacement shuttle buses will depart every 10 minutes'."
    },
    {
      id: 10,
      skill: 'reading',
      level: 'A2',
      title: 'Dica Ecológica: Sacolas Reutilizáveis',
      instruction: 'Leia o panfleto da prefeitura.',
      passageTitle: 'Say No to Single-Use Plastic',
      passageText: "Did you know that an average plastic bag takes over 400 years to break down in nature? By keeping two durable canvas tote bags inside your car or backpack, you can prevent hundreds of plastic bags from polluting local rivers each year.",
      question: "How long does a plastic bag take to break down in nature?",
      options: ["40 years", "100 years", "Over 400 years", "Just 10 years"],
      correctIndex: 2,
      explanation: "O folheto afirma: 'takes over 400 years to break down in nature'."
    },
    {
      id: 11,
      skill: 'reading',
      level: 'A2',
      title: 'Receita Fácil de Panqueca',
      instruction: 'Leia o método de preparo.',
      passageTitle: 'Fluffy Sunday Pancakes',
      passageText: "Whisk flour, baking powder, and a pinch of salt in a large bowl. In another bowl, beat milk, melted butter, and an egg. Combine both mixtures gently until just mixed—do not over-stir, or your pancakes will become tough and rubbery.",
      question: "Why should you avoid over-stirring the pancake batter?",
      options: [
        "It makes the mixture too sweet",
        "It causes the pancakes to turn tough and rubbery",
        "It changes the color to blue",
        "It burns the frying pan"
      ],
      correctIndex: 1,
      explanation: "O texto alerta: 'do not over-stir, or your pancakes will become tough and rubbery'."
    },
    {
      id: 12,
      skill: 'reading',
      level: 'A2',
      title: 'Museu de Ciência: Exposição de Robótica',
      instruction: 'Leia a sinopse do evento.',
      passageTitle: 'Robots of Tomorrow Exhibition',
      passageText: "Discover how artificial intelligence and robotic arms assist surgeons in hospital operating rooms and explore underwater deep-sea trenches. Interactive workshops allow children to assemble and code their own mini-rover cars.",
      question: "What hands-on activity can children do at the exhibition?",
      options: [
        "Perform surgery on patients",
        "Assemble and code mini-rover cars",
        "Fly real aircraft",
        "Paint classical portraits"
      ],
      correctIndex: 1,
      explanation: "'Interactive workshops allow children to assemble and code their own mini-rover cars'."
    },
    {
      id: 13,
      skill: 'reading',
      level: 'A2',
      title: 'Guia de Bagagem Aérea',
      instruction: 'Leia as regras da companhia aérea.',
      passageTitle: 'SkyWings Baggage Allowance',
      passageText: "Each passenger is permitted one carry-on bag weighing up to 8 kg, plus one personal item such as a small handbag or laptop case that fits beneath the seat in front. Checked bags over 23 kg incur an overweight fee of $50.",
      question: "What is the maximum allowed weight for carry-on luggage?",
      options: ["5 kg", "8 kg", "15 kg", "23 kg"],
      correctIndex: 1,
      explanation: "O limite de mão é 'weighing up to 8 kg'."
    },
    {
      id: 14,
      skill: 'reading',
      level: 'A2',
      title: 'Anúncio de Academia',
      instruction: 'Leia os benefícios do plano semestral.',
      passageTitle: 'FitLife Gym Summer Offer',
      passageText: "Sign up for a 6-month membership before June 30th and receive your first month completely free, alongside two complimentary 1-on-1 personal training sessions and unlimited access to the sauna and indoor lap pool.",
      question: "What bonus is offered for signing up before June 30th?",
      options: [
        "A free bicycle",
        "First month free and two personal training sessions",
        "A lifetime discount on protein shakes",
        "Free shoes"
      ],
      correctIndex: 1,
      explanation: "'receive your first month completely free, alongside two complimentary personal training sessions'."
    },
    {
      id: 15,
      skill: 'reading',
      level: 'A2',
      title: 'História de Sucesso: Padaria de Sophia',
      instruction: 'Leia sobre o empreendimento de Sophia.',
      passageTitle: 'From Hobby to Flourishing Bakery',
      passageText: "Sophia began baking sourdough bread in her small kitchen during the lockdown. Friends loved her crispy baguettes and urged her to open an online shop. Two years later, Sophia's Bakery employs five bakers and supplies fresh loaves to twelve local cafes daily.",
      question: "How many bakers does Sophia's bakery employ today?",
      options: ["Two", "Five", "Twelve", "Twenty"],
      correctIndex: 1,
      explanation: "O parágrafo conclui: 'Sophia's Bakery employs five bakers'."
    }
  ],

  B1: [
    {
      id: 1,
      skill: 'reading',
      level: 'B1',
      title: 'Trabalho Híbrido e Produtividade',
      instruction: 'Leia a análise sobre modelos de trabalho pós-pandemia.',
      passageTitle: 'The Hybrid Workplace Equation',
      passageText: "A comprehensive study across 1,200 enterprises revealed that employees working under hybrid models—two to three days in the office and the remainder remotely—report higher job satisfaction and reduced burnout compared to both full-time remote and full-time in-office cohorts. The key factor is agency: when workers possess autonomy over their schedule, productivity rises by up to 14%.",
      question: "What is highlighted as the key driver of the 14% productivity increase in hybrid work?",
      options: [
        "Longer working hours on weekends",
        "Autonomous control over one's own schedule",
        "Free catering at the corporate headquarters",
        "Frequent surveillance software checks"
      ],
      correctIndex: 1,
      explanation: "O estudo cita que a autonomia sobre a própria agenda ('autonomy over their schedule') eleva a produtividade em até 14%."
    },
    {
      id: 2,
      skill: 'reading',
      level: 'B1',
      title: 'Preservação de Abelhas e Polinização Global',
      instruction: 'Leia o artigo científico sobre abelhas e agricultura.',
      passageTitle: 'The Silent Labor of Native Pollinators',
      passageText: "While honeybees receive the majority of public attention, wild solitary bees and bumblebees are often far more efficient pollinators for fruits, nuts, and vegetables. Unfortunately, pesticide overuse, habitat fragmentation, and monoculture farming have decimated native pollinator populations, posing a direct threat to the resilience of global food supplies.",
      question: "According to the article, why are wild solitary bees crucial?",
      options: [
        "They produce more commercial honey than hive bees",
        "They are often more efficient pollinators for crops than honeybees",
        "They can survive without any flowering plants",
        "They sting agricultural pests"
      ],
      correctIndex: 1,
      explanation: "O texto afirma que abelhas solitárias nativas são frequentemente polinizadoras muito mais eficientes para frutas e vegetais."
    },
    {
      id: 3,
      skill: 'reading',
      level: 'B1',
      title: 'O Fenômeno do Fast Fashion e o Meio Ambiente',
      instruction: 'Leia a crítica sobre a indústria de roupas descartáveis.',
      passageTitle: 'The Hidden Cost of Trendy Apparel',
      passageText: "Fast fashion brands release up to 52 micro-seasons per year, encouraging consumers to treat garments as disposable commodities. Less than one percent of used clothing is currently recycled into new garments. The remainder ends up in landfills or incineration furnaces, releasing synthetic microfibers into marine food chains.",
      question: "What percentage of discarded clothing is recycled into new garments?",
      options: ["Over 50%", "Roughly 25%", "Less than 1%", "Zero percent"],
      correctIndex: 2,
      explanation: "O texto pontua alarmado: 'Less than one percent of used clothing is currently recycled into new garments'."
    },
    {
      id: 4,
      skill: 'reading',
      level: 'B1',
      title: 'A História da Penicilina e Acidentes Científicos',
      instruction: 'Leia sobre a descoberta de Alexander Fleming.',
      passageTitle: 'Serendipity in the Laboratory',
      passageText: "In 1928, Scottish bacteriologist Alexander Fleming returned from vacation to discover that a petri dish of Staphylococcus bacteria had been contaminated by mold. Remarkably, the bacteria immediately surrounding the mold colonies were dead. This accidental observation led to the isolation of penicillin, revolutionizing antibiotic treatment and saving millions of lives.",
      question: "What led Alexander Fleming to discover penicillin?",
      options: [
        "A deliberate genetic experiment on molds",
        "An accidental mold contamination in an uncleaned petri dish",
        "A mathematical formula written by his students",
        "An animal breeding trial"
      ],
      correctIndex: 1,
      explanation: "Foi uma contaminação acidental por mofo em uma placa de Petri durante suas férias ('accidental observation')."
    },
    {
      id: 5,
      skill: 'reading',
      level: 'B1',
      title: 'Psicologia do Consumidor: Assinaturas Digitais',
      instruction: 'Leia sobre o modelo de receita recorrente.',
      passageTitle: 'The Subscription Economy Trap',
      passageText: "Auto-renewing monthly subscriptions exploit the psychological bias known as 'status quo inertia'. Because charges appear as modest individual micro-transactions, consumers tend to underestimate their cumulative annual expenditures, frequently paying for streaming platforms, software tools, and gym passes they rarely utilize.",
      question: "Why do consumers often underestimate subscription spending?",
      options: [
        "Because banks hide all transaction statements",
        "Because small monthly micro-transactions trigger status quo inertia",
        "Because subscription services are free for life",
        "Because apps cancel themselves automatically"
      ],
      correctIndex: 1,
      explanation: "Microtransações mensais pequenas ativam a inércia do status quo, fazendo as pessoas subestimarem os gastos cumulativos anuais."
    },
    {
      id: 6,
      skill: 'reading',
      level: 'B1',
      title: 'Arquitetura Bioclimática e Ventilação Natural',
      instruction: 'Leia sobre edifícios inteligentes e sustentáveis.',
      passageTitle: 'Cooling Buildings Without Air Conditioners',
      passageText: "Bioclimatic architecture draws inspiration from ancient Persian windcatchers and termite mounds. By aligning building orientations with prevailing seasonal breezes and utilizing high thermal mass materials like thick stone, modern architects can maintain stable indoor temperatures without heavy dependence on power-hungry air conditioning units.",
      question: "How do bioclimatic buildings reduce air conditioning usage?",
      options: [
        "By painting all walls pitch black",
        "By using high thermal mass materials and natural breeze alignment",
        "By sealing all windows permanently",
        "By building only underground tunnels"
      ],
      correctIndex: 1,
      explanation: "Utilizam materiais de alta massa térmica e orientação com as brisas naturais para manter temperaturas estáveis."
    },
    {
      id: 7,
      skill: 'reading',
      level: 'B1',
      title: 'O Efeito da Luz Azul no Ritmo Circadiano',
      instruction: 'Leia sobre telas e melatonina.',
      passageTitle: 'Screen Time and Sleep Architecture',
      passageText: "The blue wavelength light emitted by smartphones and computer monitors mimics morning sunlight, signaling the pineal gland to suppress melatonin production. This delays sleep onset by an average of 45 minutes and significantly impairs the duration of restorative deep sleep phases.",
      question: "How does blue light affect the pineal gland?",
      options: [
        "It stimulates excessive melatonin secretion",
        "It signals it to suppress melatonin production",
        "It causes physical headaches in the eye muscles",
        "It improves night vision immediately"
      ],
      correctIndex: 1,
      explanation: "A luz azul envia sinal para suprimir a produção de melatonina ('suppress melatonin production')."
    },
    {
      id: 8,
      skill: 'reading',
      level: 'B1',
      title: 'Economia Comportamental: A Falácia do Custo Irrecuperável',
      instruction: 'Leia sobre tomadas de decisão financeiras.',
      passageTitle: 'The Sunk Cost Dilemma',
      passageText: "People frequently remain in failing investments, bad careers, or unhappy relationships simply because of the resources already expended. Economists call this the 'sunk cost fallacy'. Rational decision-making mandates evaluating only future prospective costs and benefits, ignoring past unrecoverable outlays.",
      question: "What characterizes rational decision-making according to economists?",
      options: [
        "Focusing exclusively on recovering past expenses",
        "Evaluating only prospective future costs and benefits while ignoring unrecoverable past outlays",
        "Relying on emotional intuition over numbers",
        "Never investing in high-risk projects"
      ],
      correctIndex: 1,
      explanation: "A decisão racional avalia apenas os custos e benefícios futuros, ignorando investimentos passados irrecuperáveis."
    },
    {
      id: 9,
      skill: 'reading',
      level: 'B1',
      title: 'A Ascensão dos Veículos Elétricos',
      instruction: 'Leia sobre a transição no setor automotivo.',
      passageTitle: 'Electric Mobility: Beyond the Tailpipe',
      passageText: "While electric vehicles eliminate direct tailpipe emissions in congested city centers, their overall lifecycle environmental benefit depends heavily on two factors: the carbon intensity of the electrical grid used for charging and the environmental standards applied during lithium and cobalt battery manufacturing.",
      question: "What two factors determine the true lifecycle impact of electric cars?",
      options: [
        "Tire size and vehicle paint color",
        "Grid carbon intensity and battery mineral extraction standards",
        "Highway speed limits and insurance rates",
        "Driver age and gasoline prices"
      ],
      correctIndex: 1,
      explanation: "Depende da matriz energética usada para carregar e dos padrões ambientais na extração e manufatura de lítio e cobalto."
    },
    {
      id: 10,
      skill: 'reading',
      level: 'B1',
      title: 'Cidades Inteligentes e Gestão de Resíduos',
      instruction: 'Leia sobre sensores IoT em lixeiras urbanas.',
      passageTitle: 'Smart Waste Logistics',
      passageText: "Cities like Barcelona and Seoul have embedded ultrasonic sensors inside public waste bins. When containers reach 80% capacity, automated alerts recalculate garbage truck collection routes in real time. This dynamic routing reduces fuel consumption and municipal carbon emissions by nearly 30%.",
      question: "How does the smart bin system reduce garbage truck fuel consumption?",
      options: [
        "By burning waste inside the bins",
        "By dynamically recalculating truck routes only to bins at 80% capacity",
        "By charging citizens every time they throw away trash",
        "By replacing trucks with delivery drones"
      ],
      correctIndex: 1,
      explanation: "Recalcula rotas de coleta em tempo real apenas para lixeiras que atingem 80% de capacidade."
    },
    {
      id: 11,
      skill: 'reading',
      level: 'B1',
      title: 'O Declínio do Uso de Dinheiro em Espécie',
      instruction: 'Leia sobre a transição para sociedades ' + "'cashless'.",
      passageTitle: 'The Cashless Society Divide',
      passageText: "In countries like Sweden, digital transactions represent over 95% of retail purchases. However, central bankers caution that completely eradicating physical cash threatens financial inclusion for the elderly, homeless, and unbanked populations who lack digital literacy or smartphone access.",
      question: "What primary risk of an entirely cashless society is noted?",
      options: [
        "Higher inflation on food products",
        "Exclusion of vulnerable populations like the elderly and unbanked",
        "Loss of paper printing jobs in banks",
        "Decrease in tax collection transparency"
      ],
      correctIndex: 1,
      explanation: "O risco de exclusão financeira de idosos e populações desbancarizadas que não possuem acesso a smartphones ou alfabetização digital."
    },
    {
      id: 12,
      skill: 'reading',
      level: 'B1',
      title: 'Microplásticos e a Cadeia Alimentar Marinha',
      instruction: 'Leia a pesquisa sobre oceanos.',
      passageTitle: 'Invisible Particles in Marine Life',
      passageText: "Microplastics—synthetic fragments under five millimeters in diameter—are now documented in plankton, shellfish, and commercial deep-sea fish. Because these particles adsorb toxic chemical pollutants from seawater, bioaccumulation up the food chain presents emerging endocrine disruption risks for human seafood consumers.",
      question: "Why does the presence of microplastics in seafood concern health scientists?",
      options: [
        "Because they make fish taste sour",
        "Because particles adsorb toxic pollutants that bioaccumulate and pose endocrine risks",
        "Because microplastics cause fish scales to fall off",
        "Because they dissolve salt in the oceans"
      ],
      correctIndex: 1,
      explanation: "As partículas absorvem poluentes tóxicos que se bioacumulam e apresentam riscos de desregulação endócrina para humanos."
    },
    {
      id: 13,
      skill: 'reading',
      level: 'B1',
      title: 'Inteligência Artificial e Tradução Automática',
      instruction: 'Leia sobre redes neurais e nuances culturais.',
      passageTitle: 'The Limits of Neural Machine Translation',
      passageText: "Neural machine translation has made tremendous strides with factual and technical prose. Yet algorithms consistently struggle with cultural idiom, sarcasm, and literary nuance, where meaning resides not in literal dictionary definitions, but in shared socio-historical context.",
      question: "Where do automated translation algorithms still struggle the most?",
      options: [
        "Factual software manuals",
        "Cultural idioms, sarcasm, and literary nuances",
        "Simple greeting cards",
        "Financial balance sheets"
      ],
      correctIndex: 1,
      explanation: "Algoritmos ainda têm dificuldade com expressões idiomáticas culturais, sarcasmo e nuances literárias."
    },
    {
      id: 14,
      skill: 'reading',
      level: 'B1',
      title: 'Turismo Sustentável no Arquipélago de Galápagos',
      instruction: 'Leia sobre as cotas ambientais no Equador.',
      passageTitle: 'Preserving Fragile Endemism',
      passageText: "To protect unique species found nowhere else on Earth, the Galapagos National Park limits daily visitor entries and mandates that all tourist groups be accompanied by licensed naturalist guides. Revenues from park admission fees are reinvested into invasive species eradication programs.",
      question: "How are Galapagos park admission fees utilized?",
      options: [
        "To build luxury high-rise hotels",
        "To fund invasive species eradication programs",
        "To subsidize cruise ship fuel costs",
        "To pay tourists who collect plastic"
      ],
      correctIndex: 1,
      explanation: "As taxas financiam programas de erradicação de espécies invasoras ('invasive species eradication programs')."
    },
    {
      id: 15,
      skill: 'reading',
      level: 'B1',
      title: 'A Dieta Mediterrânea e Longevidade',
      instruction: 'Leia sobre o estudo das Zonas Azuis.',
      passageTitle: 'Lessons from the Blue Zones',
      passageText: "Epidemiologists examining longevity in Ikaria, Greece and Sardinia, Italy observe that their dietary patterns—rich in extra virgin olive oil, legumes, seasonal vegetables, and wild greens—are paired with daily purposeful physical movement and robust communal ties, resulting in remarkably low rates of cardiovascular illness.",
      question: "What combination contributes to low cardiovascular illness in Blue Zones?",
      options: [
        "Heavy gym weightlifting and synthetic vitamin pills",
        "A plant-rich diet with olive oil, daily movement, and strong communal ties",
        "Zero fat intake and 12 hours of sleep",
        "Exclusive consumption of red meat and wine"
      ],
      correctIndex: 1,
      explanation: "Combinação de dieta rica em vegetais e azeite com movimentação diária funcional e laços comunitários sólidos."
    }
  ],

  B2: [
    {
      id: 1,
      skill: 'reading',
      level: 'B2',
      title: 'Arquitetura Algorítmica e Bolhas de Filtro',
      instruction: 'Leia a análise sociotécnica sobre redes sociais.',
      passageTitle: 'The Polarization Mechanics of Engagement Algorithms',
      passageText: "Social media engagement algorithms are mathematically optimized to maximize time on platform, which invariably rewards emotionally provocative content over nuanced factual discourse. By curating personalized feeds based on prior confirmations, these recommendation engines forge epistemic echo chambers, calcifying ideological polarization and degrading public deliberative consensus.",
      question: "How do platform algorithms inadvertently degrade public deliberative consensus?",
      options: [
        "By charging users for posting opinion articles",
        "By amplifying emotionally provocative content and curating echo chambers",
        "By enforcing strict peer-reviewed citation standards",
        "By banning all political discussions completely"
      ],
      correctIndex: 1,
      explanation: "Algoritmos priorizam conteúdos emocionalmente provocativos e criam câmaras de eco que calcificam a polarização ideológica."
    },
    {
      id: 2,
      skill: 'reading',
      level: 'B2',
      title: 'Economia Comportamental: O Efeito Dunning-Kruger',
      instruction: 'Leia o ensaio psicológico sobre metacognição.',
      passageTitle: 'The Paradox of Incompetence and Confidence',
      passageText: "The Dunning-Kruger effect illustrates an asymmetric cognitive blind spot: novices possessing minimal domain expertise grossly overestimate their competence because they lack the very metacognitive skill required to recognize their deficiency. Conversely, seasoned experts often undervalue their mastery, erroneously presuming that concepts intuitive to them must be equally apparent to others.",
      question: "According to the passage, why do novices overestimate their competence?",
      options: [
        "They are intentionally deceitful to win debates",
        "They lack the metacognitive ability to recognize their own deficiencies",
        "Experts continually praise them falsely",
        "Standardized tests are designed to be too simple"
      ],
      correctIndex: 1,
      explanation: "Iniciantes superestimam sua competência porque não possuem a própria capacidade metacognitiva para reconhecer suas falhas."
    },
    {
      id: 3,
      skill: 'reading',
      level: 'B2',
      title: 'Geoengenharia Solar e Risco Moral',
      instruction: 'Leia sobre propostas de injeção de aerossóis estratosféricos.',
      passageTitle: 'Dimming the Sun: Technofix or Perilous Gamble?',
      passageText: "Stratospheric aerosol injection could theoretically depress global average temperatures within months by mimicking the sulfur plume of massive volcanic eruptions. Yet climate scientists caution that solar geoengineering introduces grave moral hazard: the prospect of a cheap atmospheric technofix could weaken political resolve for urgent industrial decarbonization while unpredictably disrupting monsoon rain belts across the Global South.",
      question: "What moral hazard is associated with solar geoengineering?",
      options: [
        "It would make airplane travel impossible",
        "It might sap political motivation for industrial decarbonization",
        "It permanently freezes all northern oceans",
        "It costs more than total global GDP"
      ],
      correctIndex: 1,
      explanation: "O risco moral reside na possibilidade de essa solução técnica enfraquecer o ímpeto político de descarbonizar a indústria."
    },
    {
      id: 4,
      skill: 'reading',
      level: 'B2',
      title: 'Sociologia do Consumo: Obsolescência Programada',
      instruction: 'Leia sobre o ciclo de vida dos eletrônicos.',
      passageTitle: 'Engineered Transience in Consumer Electronics',
      passageText: "Planned obsolescence has evolved from crude hardware failure to sophisticated software throttling and glued chassis designs that prevent battery replacement. By withholding security patches from older models and pairing components with proprietary serialization chips, manufacturers deliberately shorten operational lifespans, funneling consumers into continuous upgrade cycles.",
      question: "How do modern manufacturers engineer obsolescence beyond physical hardware failure?",
      options: [
        "By issuing free replacement parts to all customers",
        "Through software throttling, glued chassis, and withholding security patches",
        "By lowering prices of new devices to below manufacturing costs",
        "By publishing open-source repair blueprints"
      ],
      correctIndex: 1,
      explanation: "Por meio de estrangulamento de software ('software throttling'), chassis colados e negação de atualizações de segurança para modelos antigos."
    },
    {
      id: 5,
      skill: 'reading',
      level: 'B2',
      title: 'Neuroplasticidade e Aprendizado ao Longo da Vida',
      instruction: 'Leia sobre a capacidade adaptativa do cérebro adulto.',
      passageTitle: 'The Malleable Adult Brain',
      passageText: "For decades, classical neuroscience asserted that neural architecture solidified irrevocably after early adolescence. Modern neuroimaging refutes this dogma, revealing that adult synaptic networks retain profound neuroplasticity. Intensive linguistic immersion or deliberate instrumental practice physically reorganizes cortical thickness, demonstrating that cognitive rewiring persists throughout the human lifespan.",
      question: "What does modern neuroimaging prove regarding adult brains?",
      options: [
        "Synaptic networks stop growing at age 18 completely",
        "Cortical structures can reorganize through deliberate practice across adulthood",
        "Adult brains cannot learn second languages under any circumstance",
        "Memory capacity decreases by half every decade"
      ],
      correctIndex: 1,
      explanation: "Comprova que o cérebro adulto retém neuroplasticidade profunda e pode reorganizar estruturas corticais por meio da prática intencional."
    },
    {
      id: 6,
      skill: 'reading',
      level: 'B2',
      title: 'Direito Digital e o Princípio da Privacidade por Padrão',
      instruction: 'Leia sobre regulações de dados (como GDPR).',
      passageTitle: 'Data Minimization in the Surveillance Age',
      passageText: "The principle of 'privacy by design' mandates that digital platforms collect only the absolute minimum telemetry required to deliver their core service. Crucially, default settings must be configured to maximum privacy, shifting the burden of affirmative consent onto users rather than burying predatory opt-out checkboxes within dense, multi-page terms of service.",
      question: "What does 'privacy by design' require regarding default application settings?",
      options: [
        "Defaults must automatically share browsing history with advertisers",
        "Defaults must be configured to maximum privacy without requiring user opt-outs",
        "Users must pay monthly fees to keep their data private",
        "Companies must delete all user accounts annually"
      ],
      correctIndex: 1,
      explanation: "Exige que as configurações padrão sejam programadas na privacidade máxima ('maximum privacy'), sem obrigar o usuário a caçar caixas de desmarcação."
    },
    {
      id: 7,
      skill: 'reading',
      level: 'B2',
      title: 'Urbanismo e Transporte Coletivo com Tarifa Zero',
      instruction: 'Leia o estudo de caso da cidade de Tallinn.',
      passageTitle: 'The Fare-Free Transit Experiment',
      passageText: "When Tallinn, Estonia abolished public transit fares for registered residents, proponents anticipated a massive modal shift from private automobiles to electric trams. While lower-income mobility surged and municipal tax registration climbed, vehicular traffic dropped by merely 3%, revealing that convenience and route frequency influence driving habits far more than monetary fares alone.",
      question: "Why did car traffic only decrease by 3% despite free public transit?",
      options: [
        "Because trams were banned in city centers",
        "Because route frequency and convenience influence drivers more than cost alone",
        "Because gasoline prices fell to zero",
        "Because parking spaces doubled in size"
      ],
      correctIndex: 1,
      explanation: "A conveniência e a frequência de linhas pesam mais na decisão do motorista do que apenas a gratuidade da tarifa."
    },
    {
      id: 8,
      skill: 'reading',
      level: 'B2',
      title: 'Biotecnologia e Carne Cultivada em Laboratório',
      instruction: 'Leia sobre agricultura celular.',
      passageTitle: 'Cultivated Protein: Promises and Energetic Realities',
      passageText: "Cultivated meat promises slaughter-free protein with drastically reduced land footprint and antibiotic usage. However, life-cycle assessments caution that industrial bioreactors require immense inputs of purified pharmaceutical-grade nutrients and continuous energy to maintain sterile cultivation conditions, meaning decarbonization benefits depend entirely on transitioning bioreactor power grids to renewables.",
      question: "What factor determines whether lab-grown meat provides net climate benefits?",
      options: [
        "The species of animal cells utilized",
        "Powering bioreactors with zero-carbon renewable energy grids",
        "Packaging meat only in glass containers",
        "Banning traditional butcher shops"
      ],
      correctIndex: 1,
      explanation: "O benefício climático depende de alimentar os biorreatores com fontes de energia renováveis e limpas."
    },
    {
      id: 9,
      skill: 'reading',
      level: 'B2',
      title: 'Psicologia Organizacional: A Armadilha da Produtividade Tóxica',
      instruction: 'Leia sobre o esgotamento profissional contemporâneo.',
      passageTitle: 'Hustle Culture and Performative Exhaustion',
      passageText: "In hyper-competitive corporate environments, chronic exhaustion is often perverse, worn as a badge of honor. This performative busyness conflates presence with output, breeding widespread cognitive fatigue and anxiety. Progressive organizations are shifting metrics toward asynchronous outcomes, penalizing after-hours email communication to safeguard employee psychological detachment.",
      question: "How are progressive companies counteracting toxic productivity?",
      options: [
        "Mandating 80-hour workweeks for all interns",
        "Shifting evaluation to asynchronous outcomes and curbing after-hours communication",
        "Installing webcams in employees' living rooms",
        "Abolishing all annual leave"
      ],
      correctIndex: 1,
      explanation: "Avaliando resultados assíncronos e desestimulando mensagens fora do expediente para permitir descompressão mental."
    },
    {
      id: 10,
      skill: 'reading',
      level: 'B2',
      title: 'Paleoclimatologia e Testemunhos de Gelo da Antártida',
      instruction: 'Leia como bolhas de ar ancestrais revelam a história do clima.',
      passageTitle: 'Time Capsules in Glacial Ice',
      passageText: "By drilling cylindrical ice cores exceeding three kilometers into Antarctic ice sheets, scientists extract microscopic atmospheric bubbles trapped hundreds of thousands of years ago. These pristine chemical samples provide empirical proof that atmospheric carbon dioxide and global temperatures have moved in tight synchronization across interglacial epochs.",
      question: "What do ancient atmospheric bubbles in ice cores conclusively demonstrate?",
      options: [
        "That ice caps formed only 2,000 years ago",
        "A strong historical synchronization between carbon dioxide levels and temperature",
        "That the earth had no atmosphere in prehistory",
        "That glaciers melt in cold weather"
      ],
      correctIndex: 1,
      explanation: "Comprovam empiricamente a correlação sincronizada direta entre concentrações de CO2 e as oscilações de temperatura do planeta."
    },
    {
      id: 11,
      skill: 'reading',
      level: 'B2',
      title: 'Economia Circular e a Responsabilidade Estendida do Produtor',
      instruction: 'Leia sobre legislação ambiental para manufatura.',
      passageTitle: 'Holding Manufacturers Accountable for Waste',
      passageText: "Extended Producer Responsibility (EPR) laws shift the post-consumer disposal burden from municipal taxpayers onto manufacturing corporations. By levying tiered eco-fees that punish non-recyclable composite packaging and reward modular reparability, EPR creates immediate financial incentives for companies to eliminate ecological liabilities at the blueprint phase.",
      question: "How does Extended Producer Responsibility motivate greener product designs?",
      options: [
        "By fining consumers who throw away boxes",
        "By imposing tiered fees on non-recyclable materials directly on manufacturers",
        "By making all packaging out of pure lead",
        "By closing all municipal recycling plants"
      ],
      correctIndex: 1,
      explanation: "Ao cobrar taxas ambientais escalonadas diretamente dos fabricantes, cria-se incentivo financeiro para eliminar passivos ecológicos no projeto."
    },
    {
      id: 12,
      skill: 'reading',
      level: 'B2',
      title: 'Inteligência Artificial e Viés em Modelos de Linguagem',
      instruction: 'Leia sobre representatividade em conjuntos de treinamento.',
      passageTitle: 'Algorithmic Mirror: Reflecting Societal Biases',
      passageText: "Large language models do not generate prejudice autonomously; they ingest historical training corpora scraped from the internet, reflecting systemic historical imbalances and cultural stereotypes. Neutralizing these biases requires rigorous RLHF (Reinforcement Learning from Human Feedback) and adversarial red-teaming to avoid codifying discrimination into automated hiring, lending, and policing pipelines.",
      question: "Why do AI language models exhibit societal biases?",
      options: [
        "They intentionally invent malicious falsehoods",
        "They mirror systemic prejudices embedded within their web-scraped training corpora",
        "Hardware chips are designed to discriminate",
        "Users are forced to enter offensive prompts"
      ],
      correctIndex: 1,
      explanation: "Os modelos refletem preconceitos históricos e estereótipos já presentes nos dados de texto da internet com os quais foram treinados."
    },
    {
      id: 13,
      skill: 'reading',
      level: 'B2',
      title: 'A História da Moeda Fiduciária e Padrão-Ouro',
      instruction: 'Leia sobre o Acordo de Bretton Woods e o ' + "'Nixon Shock'.",
      passageTitle: 'The Demise of Gold-Backed Currency',
      passageText: "In August 1971, President Richard Nixon unilaterally severed the US dollar's convertibility into gold at $35 per ounce, inaugurating the contemporary era of unbacked fiat money. This decoupled monetary policy from physical gold reserves, empowering central banks with flexible counter-cyclical interest rate management, but exposing economies to persistent inflationary currency debasement.",
      question: "What consequence followed the decoupling of the dollar from gold in 1971?",
      options: [
        "Immediate prohibition of all paper banknotes",
        "Central banks gained counter-cyclical flexibility alongside risks of currency debasement",
        "The complete collapse of global international trade",
        "A return to silver coinage exclusively"
      ],
      correctIndex: 1,
      explanation: "Os bancos centrais ganharam flexibilidade contracíclica, mas as economias ficaram expostas à desvalorização inflacionária da moeda fiduciária."
    },
    {
      id: 14,
      skill: 'reading',
      level: 'B2',
      title: 'Linguística: O Surgimento de Línguas Crioulas',
      instruction: 'Leia sobre pidgins e crioulização.',
      passageTitle: 'From Contact Jargon to Full-Fledged Grammars',
      passageText: "When diverse linguistic communities interact for trade without a common tongue, they formulate a pidgin—a simplified contact vernacular devoid of complex morphology. When children of these communities acquire the pidgin as their first native language, they instinctively innovate intricate syntactic rules, tense systems, and rich lexicons, crystallizing a true creole language within a single generation.",
      question: "How does a pidgin transform into a true creole language?",
      options: [
        "When scholars write formal dictionaries for it",
        "When children acquire it natively and spontaneously construct complex syntax",
        "When government decrees mandate its use in schools",
        "After 500 years of gradual academic translation"
      ],
      correctIndex: 1,
      explanation: "Quando crianças o adquirem como língua materna e instintivamente desenvolvem sintaxe complexa e sistemas de tempo verbal."
    },
    {
      id: 15,
      skill: 'reading',
      level: 'B2',
      title: 'Cibersegurança: A Filosofia ' + "'Zero Trust'",
      instruction: 'Leia sobre arquitetura moderna de defesa em TI.',
      passageTitle: 'Never Trust, Always Verify',
      passageText: "Traditional perimeter security operated on the 'castle-and-moat' fallacy: once an entity crossed the firewall, it enjoyed unfettered access across internal servers. In contrast, Zero Trust assumes the internal network is already compromised, enforcing micro-segmentation, continuous multi-factor authentication, and just-in-time privilege access for every single packet and request.",
      question: "What fundamental premise underpins the Zero Trust security model?",
      options: [
        "Internal corporate networks are 100% immune to malware",
        "The assumption that internal networks are compromised, requiring perpetual verification",
        "Firewalls should be completely disassembled",
        "Passwords should only be changed every five years"
      ],
      correctIndex: 1,
      explanation: "Assume que a rede interna já está comprometida, exigindo verificação e privilégios mínimos contínuos para cada requisição."
    }
  ],

  C1: [
    {
      id: 1,
      skill: 'reading',
      level: 'C1',
      title: 'Fenomenologia e a Percepção Merleau-Pontyana',
      instruction: 'Leia o tratado filosófico sobre corporeidade e cognição.',
      passageTitle: 'The Embodied Mind and the Rejection of Cartesian Dualism',
      passageText: "Maurice Merleau-Ponty's phenomenology launches a devastating critique against Cartesian mind-body dualism. For Merleau-Ponty, consciousness is not a disembodied cogito surveying the external world from a detached vantage point; rather, the living body ('corps propre') is the primary medium through which perception, spatial orientation, and intentionality are primordially enacted prior to abstract thematic reflection.",
      question: "How does Merleau-Ponty characterize human consciousness relative to the body?",
      options: [
        "As an immaterial spirit purely separate from biological tissue",
        "As an embodied intentionality primordially rooted within the lived physical organism",
        "As a mechanical set of electrical algorithms reducible to clockwork",
        "As an illusory hallucination devoid of objective reality"
      ],
      correctIndex: 1,
      explanation: "Merleau-Ponty define a consciência como intencionalidade corporificada enraizada no organismo vivido, refutando o dualismo cartesiano."
    },
    {
      id: 2,
      skill: 'reading',
      level: 'C1',
      title: 'Hermenêutica Crítica e a Morte do Autor',
      instruction: 'Leia o ensaio de teoria literária pós-estruturalista.',
      passageTitle: 'Barthes and the Liberation of Readerly Plurality',
      passageText: "Roland Barthes' provocative proclamation of the 'death of the author' was not a literal eulogy, but an ontological emancipation of the text. By overthrowing the authorial intent as the tyrannical, singular arbiter of textual signification, post-structuralist hermeneutics relocates the locus of meaning into the reader—a site where disparate cultural citations, intertextual echoes, and ideological tensions converge and contest endlessly.",
      question: "What is the primary hermeneutic consequence of Barthes' 'death of the author'?",
      options: [
        "Publishers stop paying royalties to living novelists",
        "Textual meaning shifts from authorial intent to the plural, interpretive agency of the reader",
        "Literature is reduced to grammatical error correction",
        "Historical context is declared illegal in university curricula"
      ],
      correctIndex: 1,
      explanation: "O significado textual deixa de ser ditado pela intenção autoral tirânica e passa para a agência plural e interpretativa do leitor."
    },
    {
      id: 3,
      skill: 'reading',
      level: 'C1',
      title: 'Mecânica Quântica: O Paradoxo EPR e Não-Localidade',
      instruction: 'Leia sobre o emaranhamento quântico e o Teorema de Bell.',
      passageTitle: 'Spooky Action: Demolishing Local Realism',
      passageText: "Einstein, Podolsky, and Rosen famously argued that quantum mechanics was incomplete because entangled particles exhibiting instantaneous state correlation across vast cosmic gulfs seemed to violate the speed-of-light limit, derisively termed 'spooky action at a distance'. Decades later, John Bell's mathematical inequality and subsequent experimental validations proved that the universe is fundamentally non-local: physical systems can be indivisibly entangled without relying on classical hidden variables.",
      question: "What did experimental validations of Bell's Theorem conclusively establish?",
      options: [
        "That Einstein was right about classical deterministic hidden variables",
        "That physical reality is non-local and entangled systems operate beyond local realism",
        "That light travels infinitely fast in outer space",
        "That quantum mechanics is an outdated pseudo-science"
      ],
      correctIndex: 1,
      explanation: "Confirmou a não-localidade fundamental do universo, invalidando a premissa de variáveis ocultas locais de Einstein."
    },
    {
      id: 4,
      skill: 'reading',
      level: 'C1',
      title: 'Sociologia do Poder: Panoptismo Foucaultiano e Algoritmos',
      instruction: 'Leia a extensão contemporânea das teses de Michel Foucault.',
      passageTitle: 'From the Benthamite Panopticon to Digital Surveillance Capitalism',
      passageText: "While Jeremy Bentham's Panopticon induced disciplinary self-regulation through the architectural threat of an unseen central gaze, surveillance capitalism achieves a more insidious subjugation. By harvesting behavioral surplus from quotidian clicks, modern predictive architectures do not merely discipline overt disobedience; they subtly modulate consumer desire and political affect beneath conscious awareness, commodifying future human behavior for speculative asset exchange.",
      question: "How does surveillance capitalism surpass the classic Benthamite Panopticon in control?",
      options: [
        "By incarcerating citizens in physical circular prisons",
        "By anticipating and subtly modifying subconscious behavioral affect and desire for profit",
        "By replacing digital smartphones with manual typewriters",
        "By limiting internet access exclusively to military officers"
      ],
      correctIndex: 1,
      explanation: "Vai além da disciplina física: modula desejos e afetos inconscientes monetizando e antecipando comportamentos futuros."
    },
    {
      id: 5,
      skill: 'reading',
      level: 'C1',
      title: 'Economia Política: A Teoria da Financerização',
      instruction: 'Leia sobre a transição do capitalismo produtivo para o rentismo.',
      passageTitle: 'The Predatory Ascendancy of Shareholder Value Maximization',
      passageText: "Since the 1980s, financialization has severed corporate profitability from real capital investment and research innovation. Pressured by quarterly shareholder value maximization, executives divert operating surpluses toward debt-leveraged stock buybacks rather than infrastructural upgrades or wage growth, hollowing out industrial resilience to orchestrate short-term equity appreciation.",
      question: "What corporate trend exemplifies the financialization of modern enterprises?",
      options: [
        "Pouring 100% of profits into blue-collar worker pensions",
        "Diverting operating cash into leveraged share buybacks over long-term research and infrastructure",
        "Refusing all commercial bank credit lines",
        "Relocating all corporate operations to rural agricultural cooperatives"
      ],
      correctIndex: 1,
      explanation: "Desviar lucros para recompras de ações alavancadas em busca de apreciação imediata de papéis em vez de pesquisa ou infraestrutura."
    },
    {
      id: 6,
      skill: 'reading',
      level: 'C1',
      title: 'Teoria Pós-Colonial: O Mimetismo e a Hibridez de Bhabha',
      instruction: 'Leia a análise do teórico Homi Bhabha sobre o discurso colonial.',
      passageTitle: 'Mimicry: The Ambivalence of Colonial Authority',
      passageText: "Homi Bhabha deconstructs colonial discourse by exposing the latent instability of 'mimicry'—the colonizer's desire for an indigenous subject that is 'almost the same, but not quite'. Because mimicry requires the colonized to adopt metropolitan language and dress while preserving racial alterity to justify subjugation, it inadvertently produces a subversive mockery that ironizes and destabilizes the colonizer's claim to civilizational supremacy.",
      question: "Why does colonial mimicry constitute an intrinsic threat to colonial authority?",
      options: [
        "Because it triggers immediate military warfare",
        "Because its imperfect imitation destabilizes the colonizer's illusion of unique civilizational supremacy",
        "Because indigenous subjects refuse to wear European clothing",
        "Because it makes the legal colonial system too expensive to run"
      ],
      correctIndex: 1,
      explanation: "Sua imitação ambivalente subverte e ironiza a autoridade colonial, revelando que a supremacia civilizatória é uma farsa encenada."
    },
    {
      id: 7,
      skill: 'reading',
      level: 'C1',
      title: 'Ecologia Deep e Antropocentrismo Ontológico',
      instruction: 'Leia o manifesto eco-filosófico.',
      passageTitle: 'Beyond the Hubris of Anthropocentric Instrumentalism',
      passageText: "Shallow environmentalism conceives of nature merely as a resource bank requiring conservation solely to sustain continued human industrial consumption. Deep ecology, by contrast, rejects this anthropocentric chauvinism, positing an ontological egalitarianism wherein all biotic and abiotic entities possess intrinsic existential value independent of their economic utility to Homo sapiens.",
      question: "What core philosophical tenet distinguishes deep ecology from shallow environmentalism?",
      options: [
        "Deep ecology advocates building larger nuclear submarines",
        "Deep ecology recognizes intrinsic value in nature independent of human utility",
        "Deep ecology promotes commercial trophy hunting",
        "Deep ecology focuses exclusively on reducing household electricity bills"
      ],
      correctIndex: 1,
      explanation: "Reconhece o valor intrínseco de toda a biosfera, independente de sua utilidade ou valor de mercado para os seres humanos."
    },
    {
      id: 8,
      skill: 'reading',
      level: 'C1',
      title: 'Neuroética e a Dissolução da Vontade Livre',
      instruction: 'Leia o debate sobre os experimentos de Benjamin Libet.',
      passageTitle: 'The Readiness Potential: Questioning Conscious Volition',
      passageText: "Benjamin Libet's electroencephalographic experiments demonstrated that the brain's motor cortex initiates a 'readiness potential' roughly 350 milliseconds before an individual consciously registers the subjective intention to flex a wrist. While compatibilist philosophers vigorously contest determinist overreach by emphasizing higher-order conscious veto power, neurobiological data challenges simplistic criminal jurisprudence rooted in unconstrained libertarian free will.",
      question: "What provocative question arises from Libet's discovery of the readiness potential?",
      options: [
        "Whether human motor reflexes are completely nonexistent",
        "Whether conscious intentionality initiates action or merely rationalizes unconscious neural impulses",
        "Whether wrists are physically capable of movement",
        "Whether EEG electrodes produce toxic electrical shocks"
      ],
      correctIndex: 1,
      explanation: "Questiona se a intenção consciente realmente inicia a ação ou se apenas racionaliza um impulso neural já disparado inconscientemente."
    },
    {
      id: 9,
      skill: 'reading',
      level: 'C1',
      title: 'Historiografia: A Escola dos Annales e a ' + "'Longue Durée'",
      instruction: 'Leia a revolução historiográfica de Fernand Braudel.',
      passageTitle: 'Subterranean Currents of History',
      passageText: "Fernand Braudel repudiated traditional historiography's obsessive fixation on diplomatic summits, battlefield kings, and ephemeral political dramas ('l'histoire événementielle'). Instead, the Annales School prioritized the 'longue durée'—the glacial, quasi-immobile structural rhythms of geography, oceanic currents, agricultural cycles, and trade routes that silently channel and constrain the superficial tides of human politics.",
      question: "What constitutes the focus of Braudel's 'longue durée'?",
      options: [
        "The daily transcripts of monarchic court intrigues",
        "Glacial geographical, climatic, and trade structures that govern history over centuries",
        "Biographies of individual military generals",
        "One-week political campaign speeches"
      ],
      correctIndex: 1,
      explanation: "As estruturas geográficas, climáticas e econômicas lentas ('longue durée') que moldam a história humana ao longo de séculos."
    },
    {
      id: 10,
      skill: 'reading',
      level: 'C1',
      title: 'Bioética: O Paradoxo dos Transplantes e a Tragédia dos Comuns',
      instruction: 'Leia o dilema alocativo em saúde pública.',
      passageTitle: 'Allocative Justice in Scarcity Medicine',
      passageText: "In the rationing of scarce donor organs, utilitarianism and egalitarianism collide irreconcilably. Should a liver be allocated to maximize Quality-Adjusted Life Years (QALYs)—favoring younger patients with pristine clinical prognoses—or must strict lottery queues prevail to uphold deontological equality, irrespective of anticipated biological survival longevity?",
      question: "What ethical collision is described in the allocation of donor organs?",
      options: [
        "Between doctor salaries and patient insurance copays",
        "Between utilitarian maximization of life years (QALYs) and deontological equality of access",
        "Between plastic surgery and cardiology budgets",
        "Between private hospitals and pharmaceutical patents"
      ],
      correctIndex: 1,
      explanation: "A colisão entre a maximização utilitarista de anos de vida qualificados (QALY) e o dever deontológico de igualdade de acesso."
    },
    {
      id: 11,
      skill: 'reading',
      level: 'C1',
      title: 'Sociologia Urbana: O Conceito de ' + "'Não-Lugar' de Marc Augé",
      instruction: 'Leia a antropologia da supermodernidade.',
      passageTitle: 'The Anonymity of Transit Spaces',
      passageText: "Anthropologist Marc Augé introduced the concept of the 'non-place' to characterize spaces of supermodernity—airport departure lounges, freeway interchanges, supermarket aisles, and hotel chains—that do not integrate historical heritage or relational identity. In a non-place, individuals exist as transient contractual ciphers defined solely by passports, boarding passes, or payment cards rather than communal belonging.",
      question: "What defines a 'non-place' in Augé's anthropological theory?",
      options: [
        "An abandoned ghost town in the desert",
        "A transient, anonymous transit infrastructure devoid of organic history or relational identity",
        "A strictly guarded historical museum vault",
        "A crowded family dining room during the holidays"
      ],
      correctIndex: 1,
      explanation: "Espaços transitórios e anônimos (aeroportos, rodovias, hotéis padronizados) desprovidos de identidade relacional e história orgânica."
    },
    {
      id: 12,
      skill: 'reading',
      level: 'C1',
      title: 'Crítica Cultural: O Conceito de Simulacro de Baudrillard',
      instruction: 'Leia sobre hiper-realidade na era midiática.',
      passageTitle: 'The Precession of Simulacra',
      passageText: "Jean Baudrillard argued that postmodern culture has passed through progressive orders of representation until arriving at the 'hyper-real': a condition where the distinction between real and sign collapses entirely. Media representations no longer reflect, disguise, or simulate a pre-existing physical reality; rather, they generate an autonomous simulacrum that precedes and substitutes for the real, rendering the original obsolete.",
      question: "What characterizes the state of 'hyper-reality' according to Baudrillard?",
      options: [
        "A scientific machine that repairs human eyes",
        "A condition where self-referential signs replace and precede physical reality entirely",
        "A complete rejection of all television screens",
        "A return to Stone Age cave painting rituals"
      ],
      correctIndex: 1,
      explanation: "Uma condição em que os signos e simulações midiáticas precedem e substituem a própria realidade física."
    },
    {
      id: 13,
      skill: 'reading',
      level: 'C1',
      title: 'Direito Internacional: A Doutrina R2P (Responsabilidade de Proteger)',
      instruction: 'Leia sobre soberania nacional e intervenção humanitária.',
      passageTitle: 'Sovereignty as Responsibility vs Westphalian Non-Interference',
      passageText: "The United Nations' adoption of the 'Responsibility to Protect' (R2P) framework fundamentally reinterprets sovereignty from an absolute Westphalian shield into a conditional covenant. When a sovereign state is either unwilling or unable to shield its own civilian population from genocide, war crimes, or ethnic cleansing, the international community's moral duty to intervene supersedes the sacred norm of non-interference.",
      question: "How does the R2P doctrine redefine national sovereignty?",
      options: [
        "It abolishes all national borders immediately",
        "It transforms sovereignty from an absolute shield into a conditional responsibility tied to civilian protection",
        "It mandates that all sovereign armies be commanded by a single general",
        "It bans economic sanctions between competing superpowers"
      ],
      correctIndex: 1,
      explanation: "Redefine a soberania de escudo absoluto para responsabilidade condicional ligada à proteção dos civis contra crimes hediondos."
    },
    {
      id: 14,
      skill: 'reading',
      level: 'C1',
      title: 'Linguística Cognitiva: Metáforas pelas Quais Vivemos (Lakoff & Johnson)',
      instruction: 'Leia como o pensamento abstrato é constituído por metáforas corpóreas.',
      passageTitle: 'Metaphor as the Foundation of Conceptual Architecture',
      passageText: "George Lakoff and Mark Johnson revolutionized cognitive linguistics by demonstrating that metaphor is not a decorative rhetorical flourish, but the foundational architecture of human conceptual thought. Metaphors like 'ARGUMENT IS WAR' structure how we perceive debates: we attack positions, defend premises, shoot down claims, and declare victory, demonstrating that linguistic expressions mirror physical bodily schemas.",
      question: "What did Lakoff and Johnson demonstrate regarding conceptual metaphors?",
      options: [
        "Metaphors are merely decorative poetry tricks with no mental impact",
        "Metaphors structure the very cognitive architecture through which humans experience and conceptualize reality",
        "Arguments can never be described using physical language",
        "All world languages share identical lexical idioms"
      ],
      correctIndex: 1,
      explanation: "Demonstraram que a metáfora é a própria arquitetura cognitiva estruturante com a qual os seres humanos pensam e agem."
    },
    {
      id: 15,
      skill: 'reading',
      level: 'C1',
      title: 'Psicanálise Lacaniana: O Estágio do Espelho e o Sujeito Fraturado',
      instruction: 'Leia a formação do Eu no registro do Imaginário.',
      passageTitle: 'The Alienating Mirage of the Ego',
      passageText: "Jacques Lacan posited that between six and eighteen months, the infant recognizes its specular reflection in the mirror, jubilantly anticipating a bodily mastery and holistic coherence that its immature motor physiology does not yet possess. This mirror stage inaugurates the Ego, but does so through an irremediable alienation: the subject identifies not with its lived fragmented experience, but with an idealized external image—a phantom double that forever estranges the subject from itself.",
      question: "According to Lacan, why is the mirror stage fundamentally alienating?",
      options: [
        "Because mirrors shatter when infants touch them",
        "Because the subject's identity is constituted through an external, idealized specular illusion",
        "Because infants forget their mothers upon seeing reflections",
        "Because human motor skills decline after eighteen months"
      ],
      correctIndex: 1,
      explanation: "Porque a identidade do sujeito é constituída a partir de uma ilusão especular externa e idealizada, cindindo o sujeito de sua vivência real."
    }
  ]
};
