import { SkillTestItem } from '../skillsTestData';

export const WRITING_DATA: Record<string, SkillTestItem[]> = {
  A1: [
    {
      id: 1,
      skill: 'writing',
      level: 'A1',
      title: 'Apresentação Pessoal em Fórum',
      instruction: 'Escreva uma mensagem curta de apresentação pessoal para o fórum de alunos.',
      writingContext: 'Você acabou de se inscrever no curso online e precisa postar uma breve apresentação no fórum.',
      writingTask: 'Escreva um parágrafo (20 a 40 palavras) informando seu nome, país/cidade, idade e uma comida ou hobby favorito.',
      writingGuidelines: [
        'Comece com uma saudação (Hello/Hi).',
        'Informe seu nome e onde mora.',
        'Mencione sua idade ou ocupação.',
        'Finalize com seu prato ou passatempo favorito.'
      ],
      sampleResponse: "Hello everyone! My name is Bruno and I live in São Paulo, Brazil. I am 26 years old and I work as an accountant. In my free time, I love playing video games and eating pizza. Nice to meet you all!",
      minWords: 20,
      keyPhrases: ["My name is", "I live in", "I am ... years old", "I like / love"]
    },
    {
      id: 2,
      skill: 'writing',
      level: 'A1',
      title: 'Bilhete para Colega de Quarto',
      instruction: 'Deixe um bilhete na porta da geladeira avisando onde você foi.',
      writingContext: 'Você vai ao supermercado e seu colega ainda está dormindo.',
      writingTask: 'Escreva um bilhete curto (15 a 30 palavras) dizendo onde você foi, o que vai comprar e a que horas volta.',
      writingGuidelines: [
        'Saudação informal (Hi/Hey [Name]).',
        'Diga onde você está indo.',
        'Mencione 2 itens que vai comprar.',
        'Indique o horário de retorno.'
      ],
      sampleResponse: "Hi Lucas, I am at the supermarket buying bread and milk. I will be back at 11:00 AM. See you soon! - Ana",
      minWords: 15,
      keyPhrases: ["I am at the...", "Buying...", "Back at...", "See you"]
    },
    {
      id: 3,
      skill: 'writing',
      level: 'A1',
      title: 'Cartão Postal de Férias',
      instruction: 'Escreva um cartão postal curto para um amigo falando da sua viagem.',
      writingContext: 'Você está passando férias em uma praia ensolarada.',
      writingTask: 'Escreva um texto (20 a 35 palavras) descrevendo o tempo e o que você fez hoje.',
      writingGuidelines: [
        'Cumprimente seu amigo (Dear [Name]).',
        'Descreva o clima (sunny/warm).',
        'Conte uma atividade do dia.',
        'Assine no final.'
      ],
      sampleResponse: "Dear Pedro, Greetings from Salvador! The weather is sunny and hot every day. Today I swam in the ocean and ate fresh seafood. Wish you were here! Best, Carlos.",
      minWords: 20,
      keyPhrases: ["Greetings from", "The weather is", "Today I...", "Best"]
    },
    {
      id: 4,
      skill: 'writing',
      level: 'A1',
      title: 'Email Pedindo Informações de Preço',
      instruction: 'Envie um email para uma escola de natação perguntando horários e mensalidade.',
      writingContext: 'Você quer começar aulas de natação perto de casa.',
      writingTask: 'Escreva um email simples (20 a 35 palavras) perguntando se há turmas à noite e o valor mensal.',
      writingGuidelines: [
        'Abra com saudação formal (Dear Sir or Madam / Hello).',
        'Pergunte sobre aulas no período noturno.',
        'Pergunte o preço da mensalidade.',
        'Agradeça pela atenção.'
      ],
      sampleResponse: "Hello, I would like information about adult swimming classes. Do you have classes in the evening? How much is the monthly fee? Thank you, Juliana.",
      minWords: 20,
      keyPhrases: ["I would like information", "Do you have classes", "How much is", "Thank you"]
    },
    {
      id: 5,
      skill: 'writing',
      level: 'A1',
      title: 'Convite Simples de Aniversário',
      instruction: 'Envie uma mensagem convidando amigos para sua festa de aniversário.',
      writingContext: 'Você vai comemorar seu aniversário no próximo sábado.',
      writingTask: 'Escreva um convite (20 a 35 palavras) com data, horário, local e pedindo confirmação.',
      writingGuidelines: [
        'Anuncie a comemoração de aniversário.',
        'Informe o dia da semana e horário.',
        'Informe o endereço/local.',
        'Peça confirmação de presença (RSVP).'
      ],
      sampleResponse: "Hey friends! It's my birthday this Saturday! Please come to my house at 7:00 PM for pizza and music. Address: 45 Green Street. Let me know if you can come! Cheers, Rafa.",
      minWords: 20,
      keyPhrases: ["It's my birthday", "Please come to", "At 7:00 PM", "Let me know"]
    },
    {
      id: 6,
      skill: 'writing',
      level: 'A1',
      title: 'Descrevendo seu Quarto',
      instruction: 'Descreva a mobília e disposição do seu quarto.',
      writingContext: 'Exercício de descrição de espaços físicos.',
      writingTask: 'Escreva 3 ou 4 frases (20 a 35 palavras) mencionando cama, mesa, janela e cores.',
      writingGuidelines: [
        'Use ' + "'There is' ou 'There are'.",
        'Mencione a posição da cama e da mesa.',
        'Cite uma cor ou detalhe decorativo.'
      ],
      sampleResponse: "My bedroom is small and cozy. There is a big bed next to the window. On the right, there is a wooden desk with my computer and books. The walls are light blue.",
      minWords: 20,
      keyPhrases: ["There is a...", "Next to the window", "On the right", "The walls are"]
    },
    {
      id: 7,
      skill: 'writing',
      level: 'A1',
      title: 'Mensagem de Agradecimento por Presente',
      instruction: 'Agradeça a um parente pelo presente de aniversário recebido.',
      writingContext: 'Sua tia enviou um livro de presente pelo correio.',
      writingTask: 'Escreva uma mensagem carinhosa (15 a 30 palavras) agradecendo o presente.',
      writingGuidelines: [
        'Agradeça especificamente pelo presente.',
        'Diga por que gostou.',
        'Envie abraços.'
      ],
      sampleResponse: "Dear Aunt Mary, Thank you so much for the wonderful English book! I love reading it every evening before bed. Sending you lots of love, Gabriel.",
      minWords: 15,
      keyPhrases: ["Thank you so much for", "I love reading it", "Sending you love"]
    },
    {
      id: 8,
      skill: 'writing',
      level: 'A1',
      title: 'Lista de Compras com Descrição',
      instruction: 'Faça uma lista detalhada de compras para a feira com quantidades.',
      writingContext: 'Planejando as compras da semana.',
      writingTask: 'Escreva frases curtas (20 a 30 palavras) listando frutas, vegetais e laticínios necessários.',
      writingGuidelines: [
        'Mencione pelo menos 4 itens alimentícios.',
        'Use expressões de quantidade (six eggs, two apples, one bottle of milk).',
        'Adicione um lembrete final.'
      ],
      sampleResponse: "Today I need to buy: six red apples, one bottle of fresh milk, two loaves of bread, and five tomatoes for the salad. Don't forget coffee!",
      minWords: 18,
      keyPhrases: ["I need to buy", "Bottle of", "Loaves of bread", "Don't forget"]
    },
    {
      id: 9,
      skill: 'writing',
      level: 'A1',
      title: 'Email Avisando sobre Falta na Aula',
      instruction: 'Avise seu professor de inglês que não poderá comparecer hoje.',
      writingContext: 'Você pegou uma gripe e precisa descansar em casa.',
      writingTask: 'Escreva uma mensagem respeitosa (20 a 35 palavras) explicando a ausência por motivo de saúde.',
      writingGuidelines: [
        'Dirija-se ao professor (Dear Teacher [Name]).',
        'Explique que está doente hoje.',
        'Peça o material ou lição de casa.',
        'Despeça-se cordialmente.'
      ],
      sampleResponse: "Dear Teacher Sarah, I cannot attend class today because I have a bad cold and fever. Could you please send me today's homework exercises? Best regards, Mariana.",
      minWords: 20,
      keyPhrases: ["I cannot attend class", "Because I have a cold", "Send me today's homework", "Best regards"]
    },
    {
      id: 10,
      skill: 'writing',
      level: 'A1',
      title: 'Descrevendo seu Pet Favorito',
      instruction: 'Escreva sobre um animal de estimação que você tem ou gostaria de ter.',
      writingContext: 'Atividade de escrita sobre animais e adjetivos simples.',
      writingTask: 'Escreva um parágrafo (20 a 35 palavras) mencionando nome, espécie, cor e o que ele gosta de fazer.',
      writingGuidelines: [
        'Diga o nome e o animal (dog, cat, rabbit).',
        'Descreva o pelo ou tamanho.',
        'Mencione uma brincadeira que ele gosta.'
      ],
      sampleResponse: "I have a golden dog named Toby. He is three years old and has soft brown fur. Toby loves running in the grass and playing with tennis balls all afternoon.",
      minWords: 20,
      keyPhrases: ["I have a...", "Named...", "He is ... years old", "He loves running"]
    },
    {
      id: 11,
      skill: 'writing',
      level: 'A1',
      title: 'Mensagem de Felicitações de Fim de Ano',
      instruction: 'Deseje boas festas e feliz ano novo a um colega de trabalho.',
      writingContext: 'Último dia de trabalho antes das férias coletivas.',
      writingTask: 'Escreva uma mensagem curta e simpática (15 a 30 palavras).',
      writingGuidelines: [
        'Deseje Feliz Natal e Próspero Ano Novo.',
        'Deseje descanso com a família.',
        'Feche com votos cordiais.'
      ],
      sampleResponse: "Merry Christmas and Happy New Year, Daniel! I hope you have a relaxing holiday with your family. See you in January! Warm wishes, Paula.",
      minWords: 15,
      keyPhrases: ["Merry Christmas", "Happy New Year", "Have a relaxing holiday", "Warm wishes"]
    },
    {
      id: 12,
      skill: 'writing',
      level: 'A1',
      title: 'Descrevendo sua Comida Favorita',
      instruction: 'Conte qual é o seu prato preferido e por que você gosta tanto dele.',
      writingContext: 'Compartilhando gostos gastronômicos.',
      writingTask: 'Escreva 3 frases (20 a 35 palavras) sobre o prato, os ingredientes e quando costuma comer.',
      writingGuidelines: [
        'Nomeie o prato (pasta, feijoada, sushi).',
        'Mencione os principais ingredientes.',
        'Diga em que momento da semana você costuma saborear.'
      ],
      sampleResponse: "My favorite food is Italian lasagna. It has layers of pasta, rich meat sauce, and melted cheese. My mother cooks it every Sunday for our family lunch.",
      minWords: 20,
      keyPhrases: ["My favorite food is", "It has layers of", "Melted cheese", "Every Sunday"]
    },
    {
      id: 13,
      skill: 'writing',
      level: 'A1',
      title: 'Aviso de Objeto Perdido',
      instruction: 'Escreva um cartaz simples sobre um objeto que você esqueceu na escola.',
      writingContext: 'Você esqueceu seu casaco preto na biblioteca da escola.',
      writingTask: 'Escreva o aviso (20 a 30 palavras) descrevendo o objeto e como devolver.',
      writingGuidelines: [
        'Título claro: Lost Jacket.',
        'Descreva cor e marca/detalhe.',
        'Onde foi visto pela última vez.',
        'Deixe seu contato.'
      ],
      sampleResponse: "LOST: Black winter jacket left in the library on Tuesday afternoon. Size medium with silver zippers. If found, please call Felipe at 555-0143. Thank you!",
      minWords: 18,
      keyPhrases: ["LOST: Black jacket", "Left in the library", "If found please call", "Thank you"]
    },
    {
      id: 14,
      skill: 'writing',
      level: 'A1',
      title: 'Preenchendo Formulário de Hotel',
      instruction: 'Escreva uma mensagem de pedido especial na reserva do quarto de hotel.',
      writingContext: 'Você reservou um quarto duplo e quer andar alto e cama extra.',
      writingTask: 'Escreva a solicitação (20 a 35 palavras) no campo de comentários.',
      writingGuidelines: [
        'Indique que é uma solicitação de hóspede.',
        'Peça um quarto em andar alto e silencioso.',
        'Peça duas toalhas extras.',
        'Agradeça.'
      ],
      sampleResponse: "Hello, if possible, we would prefer a quiet room on a high floor with a double bed. Please also provide two extra bath towels. Thank you for your assistance.",
      minWords: 20,
      keyPhrases: ["If possible we prefer", "A quiet room on a high floor", "Extra bath towels", "Thank you"]
    },
    {
      id: 15,
      skill: 'writing',
      level: 'A1',
      title: 'Diário Simples: Meu Dia Favorito',
      instruction: 'Escreva uma entrada de diário sobre um dia feliz que você teve.',
      writingContext: 'Registro pessoal de memórias.',
      writingTask: 'Escreva de 20 a 35 palavras sobre onde foi, com quem estava e por que foi divertido.',
      writingGuidelines: [
        'Comece com ' + "'Today was a great day!'.",
        'Diga onde foi (praia, parque, cinema).',
        'Conclua dizendo como se sentiu.'
      ],
      sampleResponse: "Today was a great day! I went to the zoo with my best friend. We saw elephants, monkeys, and colorful birds. We ate ice cream and laughed a lot. I felt very happy!",
      minWords: 20,
      keyPhrases: ["Today was a great day", "I went to the... with...", "We saw...", "I felt very happy"]
    }
  ],

  A2: [
    {
      id: 1,
      skill: 'writing',
      level: 'A2',
      title: 'Email Solicitando Reagendamento de Consulta',
      instruction: 'Escreva um email para a clínica médica pedindo para mudar o dia da sua consulta.',
      writingContext: 'Você tem uma consulta médica agendada para quinta-feira às 14h, mas terá uma reunião de trabalho inadiável.',
      writingTask: 'Escreva um email educado (40 a 60 palavras) explicando o imprevisto e sugerindo duas novas datas.',
      writingGuidelines: [
        'Abra com saudação formal.',
        'Explique a razão pela qual não poderá comparecer.',
        'Sugira datas/horários alternativos.',
        'Peça confirmação da nova data e assine.'
      ],
      sampleResponse: "Dear Dr. Miller's Clinic, I have an appointment scheduled for this Thursday at 2:00 PM. Unfortunately, I have an urgent work meeting and need to reschedule. Would it be possible to move my appointment to Friday morning or next Monday afternoon? Please let me know which date works. Sincerely, Camila Ribeiro.",
      minWords: 40,
      keyPhrases: ["Appointment scheduled for", "Unfortunately I need to reschedule", "Would it be possible to move", "Sincerely"]
    },
    {
      id: 2,
      skill: 'writing',
      level: 'A2',
      title: 'Avaliação de Restaurante na Internet',
      instruction: 'Escreva uma avaliação sobre uma refeição recente em um restaurante.',
      writingContext: 'Você almoçou em um restaurante italiano e quer deixar um review online.',
      writingTask: 'Escreva um texto (40 a 60 palavras) elogiando a comida, o ambiente e comentando o atendimento.',
      writingGuidelines: [
        'Mencione o prato que você pediu.',
        'Elogie o sabor e a apresentação.',
        'Faça um comentário sincero sobre o tempo de espera ou serviço.',
        'Dê sua recomendação final.'
      ],
      sampleResponse: "I visited Bella Pasta last night with friends. The homemade lasagna was rich, hot, and delicious, and the garlic bread was fresh. Although the waiter took twenty minutes to bring our drinks, the cozy atmosphere made up for it. I definitely recommend this place for Italian food lovers!",
      minWords: 40,
      keyPhrases: ["Homemade lasagna was delicious", "Although the waiter took...", "Cozy atmosphere", "I definitely recommend"]
    },
    {
      id: 3,
      skill: 'writing',
      level: 'A2',
      title: 'Email Reclamando de Produto com Defeito',
      instruction: 'Escreva para o suporte de uma loja online reclamando de um fone que parou de funcionar.',
      writingContext: 'Você comprou fones de ouvido sem fio há duas semanas e o lado esquerdo não emite som.',
      writingTask: 'Escreva um email formal (40 a 60 palavras) com o número do pedido e solicitando troca ou reembolso.',
      writingGuidelines: [
        'Informe o número do pedido e a data da compra.',
        'Descreva com clareza o defeito apresentado.',
        'Diga se prefere um item novo ou o reembolso integral.',
        'Encerre solicitando instruções para devolução.'
      ],
      sampleResponse: "Dear Customer Support, I purchased wireless headphones on May 10th (Order #84920). After two weeks of normal use, the left earpiece completely stopped producing sound. Since the product is covered by warranty, I would like to request a replacement unit or a full refund. Please advise on how to proceed. Regards, Thiago Santos.",
      minWords: 40,
      keyPhrases: ["Order number", "Stopped producing sound", "Covered by warranty", "Replacement unit or refund"]
    },
    {
      id: 4,
      skill: 'writing',
      level: 'A2',
      title: 'Relato de Férias Inesquecíveis',
      instruction: 'Escreva um pequeno parágrafo sobre a melhor viagem que você já fez.',
      writingContext: 'Postagem em blog de turismo ou redação escolar.',
      writingTask: 'Escreva de 40 a 60 palavras no passado simples descrevendo o destino, com quem viajou e o ponto alto.',
      writingGuidelines: [
        'Diga quando e para onde viajou.',
        'Mencione as atividades mais marcantes que realizou.',
        'Explique por que aquela viagem foi tão especial para você.'
      ],
      sampleResponse: "Two years ago, I traveled to Bariloche in Argentina with my family. It was my first time seeing real snow. We took ski lessons on the mountain and drank rich hot chocolate in the evenings. The panoramic mountain views were breathtaking, making it the most memorable trip of my life.",
      minWords: 40,
      keyPhrases: ["I traveled to... with...", "It was my first time", "We took ski lessons", "Most memorable trip"]
    },
    {
      id: 5,
      skill: 'writing',
      level: 'A2',
      title: 'Dando Recomendações para um Turista na sua Cidade',
      instruction: 'Escreva um email recomendando lugares para um amigo gringo que vai visitar sua cidade.',
      writingContext: 'Seu amigo John vem ao Brasil pela primeira vez e pediu sugestões de passeios.',
      writingTask: 'Escreva um email (40 a 60 palavras) indicando 2 atrações, um prato típico e dicas de transporte.',
      writingGuidelines: [
        'Dê as boas-vindas com entusiasmo.',
        'Recomende dois pontos turísticos imperdíveis.',
        'Sugira um prato típico tradicional.',
        'Aconselhe sobre deslocamento seguro.'
      ],
      sampleResponse: "Hi John! I am thrilled you are visiting Rio! You must take the cable car to Sugarloaf Mountain for the sunset and stroll around Ipanema Beach. Make sure to try a traditional feijoada on Saturday. For transportation, using the subway or official ride apps is the safest option. Can't wait to see you! - Marcos.",
      minWords: 40,
      keyPhrases: ["I am thrilled you are visiting", "You must take the cable car", "Make sure to try", "Safest option"]
    },
    {
      id: 6,
      skill: 'writing',
      level: 'A2',
      title: 'Carta de Apresentação Simples para Vaga de Estágio',
      instruction: 'Escreva uma mensagem se candidatando a uma vaga de estágio em atendimento.',
      writingContext: 'Você viu um anúncio para estágio em uma livraria ou recepção bilíngue.',
      writingTask: 'Escreva um email (40 a 60 palavras) destacando suas habilidades de comunicação e interesse na vaga.',
      writingGuidelines: [
        'Mencione a vaga a que está se candidatando.',
        'Fale do seu curso ou habilidades interpessoais.',
        'Diga por que gostaria de trabalhar na empresa.',
        'Anexe seu currículo e assine.'
      ],
      sampleResponse: "Dear Hiring Manager, I am writing to apply for the Customer Service Intern position advertised on LinkedIn. I am an undergraduate student in Business with strong communication skills and basic conversational English. I am hardworking, organized, and eager to assist customers. My resume is attached for your review. Sincerely, Larissa Gomes.",
      minWords: 40,
      keyPhrases: ["I am writing to apply for", "Undergraduate student in", "Strong communication skills", "Resume is attached"]
    },
    {
      id: 7,
      skill: 'writing',
      level: 'A2',
      title: 'Descrevendo sua Rotina de Estudos',
      instruction: 'Explique como você organiza seus horários para aprender inglês durante a semana.',
      writingContext: 'Compartilhando dicas de estudo no grupo de alunos.',
      writingTask: 'Escreva de 40 a 60 palavras usando advérbios de frequência (always, usually, every day).',
      writingGuidelines: [
        'Mencione em que momento do dia você estuda.',
        'Cite os recursos que utiliza (apps, flashcards, áudios).',
        'Descreva o que faz no fim de semana para praticar.'
      ],
      sampleResponse: "I always dedicate thirty minutes every morning to English practice before going to work. I usually review vocabulary flashcards and listen to short podcasts during my commute. On weekends, I try to watch movies in English with subtitles to practice listening. Consistency really makes a huge difference!",
      minWords: 40,
      keyPhrases: ["I always dedicate thirty minutes", "Review vocabulary flashcards", "Listen to podcasts", "Consistency makes a difference"]
    },
    {
      id: 8,
      skill: 'writing',
      level: 'A2',
      title: 'Instruções para Cuidar do seu Animal de Estimação',
      instruction: 'Escreva orientações para seu vizinho que cuidará do seu gato durante o fim de semana.',
      writingContext: 'Você vai viajar e seu vizinho se ofereceu para alimentar seu gato.',
      writingTask: 'Escreva um bilhete explicativo (40 a 60 palavras) com horários de comida e água.',
      writingGuidelines: [
        'Agradeça pela ajuda.',
        'Explique a quantidade e o horário da comida.',
        'Lembre de trocar a água e limpar a caixa de areia.',
        'Deixe seu número para emergências.'
      ],
      sampleResponse: "Hi Patricia, thank you so much for watching my cat Felix this weekend! Please give him one can of wet food at 8:00 AM and a bowl of dry biscuits in the evening. Also, make sure to change his water bowl daily. Call me if anything happens! Best, Amanda.",
      minWords: 40,
      keyPhrases: ["Thank you for watching my cat", "Give him one can of wet food", "Change his water bowl daily", "Call me if anything happens"]
    },
    {
      id: 9,
      skill: 'writing',
      level: 'A2',
      title: 'Proposta de Atividade para o Fim de Semana',
      instruction: 'Escreva uma mensagem no grupo de amigos propondo um piquenique no parque.',
      writingContext: 'A previsão do tempo está ensolarada e você quer reunir a galera.',
      writingTask: 'Escreva uma mensagem (40 a 60 palavras) sugerindo local, horário e o que cada um deve levar.',
      writingGuidelines: [
        'Cumprimente o grupo e mencione o clima favorável.',
        'Sugira fazer um piquenique no parque no domingo às 15h.',
        'Peça para cada amigo levar um lanche ou bebida.',
        'Pergunte quem confirma presença.'
      ],
      sampleResponse: "Hey everyone! The weather this Sunday is going to be sunny and warm. How about having a picnic at the City Park around 3:00 PM? Everyone can bring some fruit, sandwiches, or juice to share, plus a blanket. Let me know in the chat if you are in! Hope to see you there!",
      minWords: 40,
      keyPhrases: ["The weather is going to be sunny", "How about having a picnic", "Bring some fruit or juice to share", "Let me know if you are in"]
    },
    {
      id: 10,
      skill: 'writing',
      level: 'A2',
      title: 'Email para Professor Pedindo Esclarecimento de Dúvida',
      instruction: 'Escreva para seu professor perguntando sobre o prazo e formato de um trabalho.',
      writingContext: 'Você faltou à última aula e não entendeu o formato exigido para a entrega.',
      writingTask: 'Escreva um email formal (40 a 60 palavras) tirando a dúvida.',
      writingGuidelines: [
        'Abra com saudação apropriada.',
        'Pergunte qual é o limite de páginas e o prazo final.',
        'Pergunte se o envio deve ser feito por email ou portal.',
        'Agradeça pela orientação.'
      ],
      sampleResponse: "Dear Professor Johnson, I hope you are having a productive week. I am currently finishing the grammar assignment from Unit 4, but I have a quick question. What is the deadline for submission, and should we upload it to the online portal or email it directly? Thank you for your guidance. Sincerely, Rafael Costa.",
      minWords: 40,
      keyPhrases: ["I hope you are having a productive week", "I have a quick question", "What is the deadline for submission", "Thank you for your guidance"]
    },
    {
      id: 11,
      skill: 'writing',
      level: 'A2',
      title: 'Descrevendo um Trabalho Voluntário',
      instruction: 'Conte sobre uma ação solidária ou evento comunitário em que participou.',
      writingContext: 'Redação sobre cidadania e engajamento social.',
      writingTask: 'Escreva de 40 a 60 palavras no passado simples relatando o que fez e como se sentiu.',
      writingGuidelines: [
        'Diga onde e quando realizou o voluntariado.',
        'Descreva as tarefas que desempenhou (coletar alimentos, plantar árvores).',
        'Conclua compartilhando o sentimento de ter ajudado.'
      ],
      sampleResponse: "Last month, I volunteered at a local community center with my colleagues. We collected warm blankets and prepared over a hundred hot meals for homeless families during a cold weekend. Working alongside kind volunteers and seeing the gratitude on people's faces was an incredibly rewarding experience that inspired me to help more.",
      minWords: 40,
      keyPhrases: ["I volunteered at a local community center", "Collected warm blankets", "Prepared hot meals", "Incredibly rewarding experience"]
    },
    {
      id: 12,
      skill: 'writing',
      level: 'A2',
      title: 'Mensagem Avisando Vizinho sobre Pequena Reforma',
      instruction: 'Avise seus vizinhos de prédio que você fará barulho de obra no apartamento.',
      writingContext: 'Você vai pintar e trocar o piso do apartamento na próxima terça-feira.',
      writingTask: 'Escreva um bilhete educado (40 a 60 palavras) pedindo desculpas antecipadas pelo ruído.',
      writingGuidelines: [
        'Identifique seu número de apartamento.',
        'Informe a data e o horário do trabalho ruidoso (das 9h às 17h).',
        'Peça desculpas por qualquer inconveniente.',
        'Deixe seu contato para eventuais emergências.'
      ],
      sampleResponse: "Dear Neighbors, I am writing to inform you that apartment 42 will be undergoing minor renovations next Tuesday between 9:00 AM and 5:00 PM. We will replace tile flooring, which will generate some noise. I apologize sincerely in advance for any inconvenience caused. Please call me at 555-0812 if needed. Thank you, Leonardo.",
      minWords: 40,
      keyPhrases: ["Undergoing minor renovations", "Between 9:00 AM and 5:00 PM", "Apologize sincerely in advance", "For any inconvenience caused"]
    },
    {
      id: 13,
      skill: 'writing',
      level: 'A2',
      title: 'Descrevendo seu Filme Favorito e por que Recomenda',
      instruction: 'Escreva uma mini-resenha recomendando um filme para seus colegas.',
      writingContext: 'Post no fórum de entretenimento em inglês.',
      writingTask: 'Escreva de 40 a 60 palavras sobre o gênero, enredo principal e atuação.',
      writingGuidelines: [
        'Mencione o nome do filme e o gênero.',
        'Dê um resumo sem spoilers do conflito principal.',
        'Elogie os atores ou a trilha sonora.',
        'Conclua com sua recomendação.'
      ],
      sampleResponse: "My favorite movie is The Truman Show, a classic comedy-drama starring Jim Carrey. It tells the fascinating story of a man whose entire life is secretly filmed as a 24-hour reality television show. Carrey's emotional acting is remarkable, and the ending is truly inspiring. If you enjoy thought-provoking stories, you will love it!",
      minWords: 40,
      keyPhrases: ["A classic comedy-drama", "Fascinating story of a man", "Remarkable emotional acting", "Thought-provoking story"]
    },
    {
      id: 14,
      skill: 'writing',
      level: 'A2',
      title: 'Relatando um Acidente Menor para o Seguro',
      instruction: 'Escreva uma breve declaração descrevendo como seu carro foi arranhado no estacionamento.',
      writingContext: 'Formulário de sinistro de seguradora.',
      writingTask: 'Escreva um relato objetivo (40 a 60 palavras) com data, local e danos visíveis.',
      writingGuidelines: [
        'Mencione data, hora e endereço do incidente.',
        'Explique que o carro estava estacionado.',
        'Descreva o dano (porta do motorista amassada/arranhada).',
        'Afirme que anexou fotos do veículo.'
      ],
      sampleResponse: "On Friday, June 14th around 6:30 PM, my silver sedan was parked in the supermarket parking lot on Main Avenue. When I returned from shopping, I discovered a long scratch and a dent along the driver's side door. The other driver did not leave a note. I have attached photographs of the damage.",
      minWords: 40,
      keyPhrases: ["My car was parked in...", "I discovered a long scratch and dent", "Driver's side door", "Attached photographs of the damage"]
    },
    {
      id: 15,
      skill: 'writing',
      level: 'A2',
      title: 'Planejando uma Festa Surpresa',
      instruction: 'Escreva um email coordenando uma festa surpresa para um colega de trabalho que foi promovido.',
      writingContext: 'Seu colega Lucas foi promovido a gerente e a equipe quer comemorar.',
      writingTask: 'Escreva um email para a equipe (40 a 60 palavras) com instruções e pedindo segredo absoluto.',
      writingGuidelines: [
        'Avise sobre a promoção de Lucas.',
        'Diga onde e quando será a surpresa (sala de conferência, 16h30).',
        'Peça contribuição de $5 para o bolo.',
        'Enfatize que deve ser segredo absoluto.'
      ],
      sampleResponse: "Hi Team! As you know, Lucas was promoted to senior manager this week! To celebrate, we are organizing a surprise party in Conference Room B this Thursday at 4:30 PM. We are collecting five dollars per person for cake and balloons. Please keep this completely secret from him until Thursday afternoon! Thanks, Beatriz.",
      minWords: 40,
      keyPhrases: ["Promoted to senior manager", "Organizing a surprise party", "Collecting five dollars for cake", "Keep this completely secret"]
    }
  ],

  B1: [
    {
      id: 1,
      skill: 'writing',
      level: 'B1',
      title: 'Email Formal de Solicitação de Reembolso',
      instruction: 'Escreva um email formal para uma companhia aérea solicitando reembolso integral por cancelamento de voo.',
      writingContext: 'Seu voo internacional de negócios foi cancelado unilateralmente com menos de 24 horas de antecedência.',
      writingTask: 'Redija um email profissional (70 a 100 palavras) expondo o código da reserva, os transtornos gerados e exigindo o reembolso nos termos legais.',
      writingGuidelines: [
        'Use registro formal e polido de correspondência corporativa.',
        'Forneça número de voo, data original e código de bilhete.',
        'Mencione que despesas adicionais de hospedagem foram incorridas.',
        'Estabeleça prazo razoável para resposta antes de acionar órgãos de defesa do consumidor.'
      ],
      sampleResponse: "Dear Customer Relations Team, I am writing to formally request a full refund for Flight LA8020 from São Paulo to Miami, booked under reservation code #XK7892 for September 4th. The flight was abruptly canceled with fewer than twelve hours of notice, causing substantial professional disruption and forcing me to incur unexpected overnight lodging expenses. Under passenger rights regulations, I am entitled to a prompt reimbursement of the ticket fare. I have attached all relevant receipts and look forward to your confirmation within seven business days. Sincerely, Eduardo Fontes.",
      minWords: 70,
      keyPhrases: ["Formally request a full refund", "Abruptly canceled", "Incur unexpected overnight lodging expenses", "Entitled to a prompt reimbursement"]
    },
    {
      id: 2,
      skill: 'writing',
      level: 'B1',
      title: 'Ensaio de Opinião: Proibir Celulares em Escolas',
      instruction: 'Escreva um texto argumentativo sobre se escolas devem proibir smartphones em sala de aula.',
      writingContext: 'Debate no conselho pedagógico sobre foco e bem-estar dos alunos.',
      writingTask: 'Escreva um parágrafo argumentativo bem estruturado (70 a 100 palavras) ponderando benefícios pedagógicos e pontos de atenção.',
      writingGuidelines: [
        'Apresente sua tese central com clareza.',
        'Argumente sobre distração, cyberbullying e atenção sustentada.',
        'Reconheça a utilidade didática controlada de ferramentas digitais.',
        'Conclua propondo uma política equilibrada.'
      ],
      sampleResponse: "Restricting smartphones during instructional hours has become an urgent imperative for academic focus. Unregulated device access inevitably fragments student attention, fostering chronic digital distractions and social media anxiety during formative learning phases. While mobile technology certainly offers pedagogical value when supervised by educators for specific research tasks, blanket unrestricted access undermines classroom engagement. Therefore, implementing a policy where phones are securely deposited in lockers during lectures fosters deeper peer collaboration and significantly elevates cognitive concentration.",
      minWords: 70,
      keyPhrases: ["Academic focus", "Fragments student attention", "Chronic digital distractions", "Pedagogical value", "Significantly elevates cognitive concentration"]
    },
    {
      id: 3,
      skill: 'writing',
      level: 'B1',
      title: 'Proposta de Projeto para Melhoria no Trabalho',
      instruction: 'Escreva um memorando para seu diretor propondo a adoção de reuniões assíncronas.',
      writingContext: 'Sua equipe passa tempo excessivo em chamadas de Zoom que poderiam ser resolvidas por texto.',
      writingTask: 'Escreva uma proposta executiva (70 a 100 palavras) destacando ganho de produtividade e redução de fadiga.',
      writingGuidelines: [
        'Identifique o problema: sobrecarga de reuniões virtuais sincronizadas.',
        'Apresente a solução: documentação escrita assíncrona para status semanais.',
        'Mencione métricas esperadas: horas economizadas e maior tempo de foco.',
        'Proponha um período de teste piloto de quatro semanas.'
      ],
      sampleResponse: "To: Management Committee. Re: Implementation of Asynchronous Status Updates. Our team currently spends over twelve hours per week participating in routine video conferences, significantly impairing deep technical focus. I propose establishing a four-week pilot program where daily standup meetings are replaced with brief written updates via our project management platform. This initiative will provide flexible autonomy for remote employees, reduce cognitive meeting fatigue, and reclaim valuable development hours without compromising transparency. I welcome the opportunity to pilot this framework within our department next sprint. Best regards, Tatiana Mello.",
      minWords: 70,
      keyPhrases: ["Significantly impairing deep focus", "Propose establishing a pilot program", "Replaced with brief written updates", "Reduce cognitive meeting fatigue"]
    },
    {
      id: 4,
      skill: 'writing',
      level: 'B1',
      title: 'Carta de Motivação para Bolsa de Estudos Internacional',
      instruction: 'Escreva uma carta de motivação para um programa de intercâmbio acadêmico.',
      writingContext: 'Candidatura para um semestre de intercâmbio em sustentabilidade ambiental na Europa.',
      writingTask: 'Escreva de 70 a 100 palavras explicando sua trajetória, motivação e impacto futuro no seu país.',
      writingGuidelines: [
        'Apresente seu curso de graduação atual e interesses de pesquisa.',
        'Explique por que a instituição de acolhimento é essencial para suas metas.',
        'Demonstre como pretende aplicar o conhecimento adquirido ao retornar ao Brasil.'
      ],
      sampleResponse: "Dear Selection Committee, As a third-year Environmental Engineering student at the University of São Paulo, I am writing to express my enthusiastic candidacy for the Global Ecology Exchange Fellowship. My undergraduate research focuses on sustainable urban drainage systems in metropolitan basins. Studying alongside your renowned faculty will allow me to master cutting-edge flood modeling methodologies that are critically needed in Brazilian coastal cities. I am eager to contribute my field insights to your international cohorts and return home equipped to develop resilient municipal water infrastructure. Thank you for considering my application. Sincerely, Mariana Duarte.",
      minWords: 70,
      keyPhrases: ["Enthusiastic candidacy for", "Undergraduate research focuses on", "Master cutting-edge methodologies", "Critically needed in coastal cities"]
    },
    {
      id: 5,
      skill: 'writing',
      level: 'B1',
      title: 'Artigo de Blog: Dicas para Vencer a Procrastinação',
      instruction: 'Escreva um post informativo sobre como a regra dos 2 minutos e a técnica Pomodoro ajudam no foco.',
      writingContext: 'Publicação em blog de desenvolvimento pessoal e produtividade.',
      writingTask: 'Escreva um texto engajador e prático (70 a 100 palavras) oferecendo dois passos acionáveis para o leitor.',
      writingGuidelines: [
        'Inicie com um gancho relatable sobre procrastinação.',
        'Explique a ' + "'Regra dos 2 Minutos' para pequenas pendências.",
        'Apresente os blocos de 25 minutos do Pomodoro para tarefas complexas.',
        'Encerre encorajando o leitor a começar imediatamente.'
      ],
      sampleResponse: "Procrastination is rarely caused by laziness; rather, it is an emotional coping mechanism when confronting daunting tasks. To overcome this mental barrier, try combining two actionable strategies. First, apply the 'Two-Minute Rule': if an email or errand takes under two minutes, execute it immediately without postponing. For larger projects, utilize the Pomodoro technique—commit to twenty-five minutes of singular, uninterrupted focus followed by a five-minute break. Lowering the initial friction makes starting feel effortless. Turn off your notifications and take the first step today!",
      minWords: 70,
      keyPhrases: ["Emotional coping mechanism", "Daunting tasks", "Two-Minute Rule", "Singular uninterrupted focus", "Lowering the initial friction"]
    },
    {
      id: 6,
      skill: 'writing',
      level: 'B1',
      title: 'Email de Resolução de Incidente com Cliente Chave',
      instruction: 'Responda a um cliente insatisfeito com atraso em uma remessa de software corporativo.',
      writingContext: 'Você é coordenador de contas e a entrega atrasou três dias por bug no servidor.',
      writingTask: 'Escreva um email profissional (70 a 100 palavras) assumindo o problema, explicando a correção e oferecendo compensação.',
      writingGuidelines: [
        'Assuma a responsabilidade sem desculpas evasivas.',
        'Explique com clareza a medida corretiva implementada.',
        'Ofereça um crédito de serviço ou benefício adicional.',
        'Reafirme o compromisso de longo prazo com a parceria.'
      ],
      sampleResponse: "Dear Mr. Davies, I am reaching out to provide a transparent update regarding the delay in deploying your software update. Our deployment team encountered an unforeseen server configuration issue during security patching. We have fully stabilized the architecture and the update is now live across your enterprise accounts. We deeply regret the disruption this caused to your workflow. To demonstrate our appreciation for your patience, we have credited twenty percent toward your next billing invoice. We value our ongoing partnership and remain at your disposal for any queries. Warm regards, Roberto Lima.",
      minWords: 70,
      keyPhrases: ["Transparent update", "Unforeseen server configuration issue", "Deeply regret the disruption", "Credited toward your next invoice"]
    },
    {
      id: 7,
      skill: 'writing',
      level: 'B1',
      title: 'Ensaio Crítico: O Impacto das Mídias Sociais na Autoestima',
      instruction: 'Analise criticamente como fotos filtradas e feeds perfeitos afetam a saúde mental de adolescentes.',
      writingContext: 'Redação de psicologia para concurso acadêmico juvenil.',
      writingTask: 'Escreva um texto analítico (70 a 100 palavras) relacionando comparação social a transtornos de ansiedade.',
      writingGuidelines: [
        'Discuta a curadoria artificial de vidas perfeitas no Instagram/TikTok.',
        'Mencione a síndrome de FOMO (Fear of Missing Out).',
        'Sugira a importância da literacia digital e detox de redes.'
      ],
      sampleResponse: "Social media feeds frequently operate as curated highlight reels rather than accurate mirrors of everyday life. By constantly consuming digitally retouched imagery and stylized lifestyles, young individuals unconsciously engage in upward social comparison, fueling persistent feelings of inadequacy and body dissatisfaction. The psychological pressure to project flawless personal branding exacerbates loneliness and sleep deprivation. Developing critical media literacy—learning to deconstruct algorithmic incentives and curating intentional offline boundaries—is crucial to shielding mental wellbeing from the pervasive toxicity of digital perfectionism.",
      minWords: 70,
      keyPhrases: ["Curated highlight reels", "Upward social comparison", "Feelings of inadequacy", "Critical media literacy", "Intentional offline boundaries"]
    },
    {
      id: 8,
      skill: 'writing',
      level: 'B1',
      title: 'Recomendação de Livro em Newsletter Corporativa',
      instruction: 'Escreva uma resenha recomendando o livro ' + "'Atomic Habits' (Hábitos Atômicos) de James Clear.",
      writingContext: 'Coluna mensal de desenvolvimento na newsletter interna da empresa.',
      writingTask: 'Escreva de 70 a 100 palavras explicando a tese de melhorias de 1% e design de ambiente.',
      writingGuidelines: [
        'Apresente o autor e o conceito central da obra.',
        'Explique como pequenas melhorias incrementais se multiplicam com o tempo.',
        'Destaque a ideia de mudar o ambiente para facilitar bons hábitos.',
        'Conclua recomendando a leitura a todos os colaboradores.'
      ],
      sampleResponse: "In 'Atomic Habits', James Clear brilliantly demystifies personal transformation by demonstrating that monumental achievements stem not from radical overhauls, but from tiny one percent daily adjustments. By compounding microscopic positive behaviors and strategically redesigning our physical and digital environments, habits become frictionless and automatic. Clear shifts focus away from willpower toward intentional system design: make good habits obvious and attractive while making distractions invisible. This pragmatic guide is an essential read for anyone striving to elevate professional consistency and personal mastery.",
      minWords: 70,
      keyPhrases: ["Demystifies personal transformation", "Tiny one percent daily adjustments", "Compounding microscopic behaviors", "System design rather than willpower"]
    },
    {
      id: 9,
      skill: 'writing',
      level: 'B1',
      title: 'Email para Coordenador Pedindo Extensão de Prazo de TCC',
      instruction: 'Solicite formalmente uma extensão de 10 dias para entrega da versão final do TCC.',
      writingContext: 'Problemas de coleta de dados de campo atrasaram a análise estatística.',
      writingTask: 'Redija uma carta de solicitação formal (70 a 100 palavras) anexando o cronograma revisado.',
      writingGuidelines: [
        'Dirija-se ao coordenador com formalidade acadêmica.',
        'Explique o motivo técnico do atraso na coleta de dados.',
        'Garanta que seu orientador já revisou e aprovou o novo cronograma.',
        'Agradeça pela compreensão.'
      ],
      sampleResponse: "Dear Professor Almeida, I am writing to formally request a ten-day extension for submitting the final draft of my undergraduate dissertation, originally due on November 15th. Due to unforeseen supply delays in receiving laboratory testing reagents, our experimental data collection was delayed by two weeks. My faculty advisor, Dr. Pereira, has reviewed my comprehensive progress and endorsed the revised timeline attached hereto. This brief extension will ensure the statistical rigor and academic excellence of the research findings. Thank you very much for your kind consideration. Respectfully yours, Camila Nogueira.",
      minWords: 70,
      keyPhrases: ["Formally request an extension", "Unforeseen laboratory delays", "Faculty advisor has endorsed", "Statistical rigor and academic excellence"]
    },
    {
      id: 10,
      skill: 'writing',
      level: 'B1',
      title: 'Manifesto Comunitário por Ciclovias no Bairro',
      instruction: 'Escreva uma carta aberta ao secretário de transportes solicitando ciclovias segregadas.',
      writingContext: 'Iniciativa da associação de moradores por segurança viária.',
      writingTask: 'Escreva uma carta pública persuasiva (70 a 100 palavras) com argumentos ambientais e de segurança.',
      writingGuidelines: [
        'Apresente o perigo enfrentado por ciclistas nas avenidas locais.',
        'Destaque os benefícios de redução de tráfego e poluição sonora/atmosférica.',
        'Proponha a instalação de divisores físicos (ciclovia segregada).',
        'Solicite uma audiência com os delegados da comunidade.'
      ],
      sampleResponse: "Dear Secretary of Urban Mobility, On behalf of the Vila Esperança Neighborhood Association, we urge the municipal administration to implement physically separated bicycle lanes along Central Boulevard. Currently, daily commuters on bicycles risk their lives navigating high-speed vehicular traffic, resulting in avoidable accidents. Investing in protected cycling infrastructure will not only protect vulnerable citizens, but also incentivize clean active transit, easing traffic gridlock and curbing urban carbon emissions. We respectfully request a public consultation meeting to present our community blueprint. Sincerely, Citizens for Sustainable Transit.",
      minWords: 70,
      keyPhrases: ["On behalf of the association", "Physically separated bicycle lanes", "Incentivize clean active transit", "Public consultation meeting"]
    },
    {
      id: 11,
      skill: 'writing',
      level: 'B1',
      title: 'Ensaio Descritivo: Um Ponto Histórico do Brasil',
      instruction: 'Apresente a cidade histórica de Ouro Preto para um público estrangeiro.',
      writingContext: 'Artigo para revista cultural de viagens internacionais.',
      writingTask: 'Escreva um parágrafo evocativo e culturalmente rico (70 a 100 palavras) destacando arquitetura barroca e Aleijadinho.',
      writingGuidelines: [
        'Descreva a topografia montanhosa e ruas de pedra sabão.',
        'Mencione a era do ciclo do ouro no século XVIII.',
        'Destaque as esculturas de Aleijadinho e igrejas douradas.',
        'Conclua com o status de Patrimônio da Humanidade da UNESCO.'
      ],
      sampleResponse: "Nestled among the dramatic misty mountains of Minas Gerais, the colonial town of Ouro Preto stands as an open-air sanctuary of eighteenth-century Baroque splendor. Walking its steep cobblestone streets transports visitors directly into the historical heart of the Brazilian gold rush. The town is famous for magnificent churches adorned with intricate golden woodwork and expressive soapstone sculptures masterfully carved by Antônio Francisco Lisboa, known as Aleijadinho. Recognized as a UNESCO World Heritage site, Ouro Preto offers an unforgettable journey through Latin American art, preservation, and historical memory.",
      minWords: 70,
      keyPhrases: ["Nestled among misty mountains", "Eighteenth-century Baroque splendor", "Intricate golden woodwork", "UNESCO World Heritage site"]
    },
    {
      id: 12,
      skill: 'writing',
      level: 'B1',
      title: 'Email de Boas-Vindas a Novo Membro da Equipe',
      instruction: 'Dê as boas-vindas ao novo desenvolvedor de software da equipe.',
      writingContext: 'Você é o líder técnico e o novo colega começa na próxima segunda-feira.',
      writingTask: 'Escreva uma mensagem calorosa e informativa (70 a 100 palavras) com informações de primeiro dia.',
      writingGuidelines: [
        'Exponha o entusiasmo da equipe em recebê-lo.',
        'Informe o horário e o link da reunião inicial de boas-vindas.',
        'Mencione quem será o colega mentor (buddy) responsável pela integração.',
        'Incentive-o a trazer dúvidas e curiosidade.'
      ],
      sampleResponse: "Dear Marcelo, On behalf of the entire engineering department, welcome to TechVision! We are thrilled to have your expertise joining our backend architecture team. Your onboarding begins this Monday at 9:30 AM with a virtual orientation, accessible via the calendar link already in your inbox. Sofia has been designated as your official onboarding buddy; she will guide you through repository access, environment configuration, and our codebase standards. Please don't hesitate to ask any questions—our culture thrives on curiosity and mutual support. We look forward to meeting you on Monday! Warm regards, Paula Torres.",
      minWords: 70,
      keyPhrases: ["On behalf of the entire department", "Thrilled to have your expertise", "Designated as your onboarding buddy", "Culture thrives on curiosity"]
    },
    {
      id: 13,
      skill: 'writing',
      level: 'B1',
      title: 'Análise de Prós e Contras: Criptomoedas',
      instruction: 'Escreva uma análise balanceada sobre o papel do Bitcoin e criptomoedas na economia moderna.',
      writingContext: 'Boletim financeiro para investidores iniciantes.',
      writingTask: 'Escreva um texto equilibrado (70 a 100 palavras) apontando inovação descentralizada versus volatilidade.',
      writingGuidelines: [
        'Apresente a descentralização e resistência à censura como forças.',
        'Aponte a volatilidade de preços e consumo energético como vulnerabilidades.',
        'Conclua recomendando alocação cautelosa e diversificada.'
      ],
      sampleResponse: "Cryptocurrencies represent a contentious frontier in financial engineering. Proponents celebrate decentralized blockchain networks for facilitating peer-to-peer transactions free from central bank censorship and foreign exchange restrictions, particularly in hyperinflationary economies. Conversely, extreme market volatility, speculative bubbles, and vulnerabilities to regulatory bans pose significant capital risks for unsophisticated retail investors. While underlying distributed ledger technology holds immense potential to modernize global settlement rails, prudent investors should approach digital assets cautiously, allocating only risk capital they can afford to lose within a diversified portfolio.",
      minWords: 70,
      keyPhrases: ["Decentralized blockchain networks", "Free from central bank censorship", "Extreme market volatility", "Prudent investors should approach cautiously"]
    },
    {
      id: 14,
      skill: 'writing',
      level: 'B1',
      title: 'Instruções para Resolução de Problemas Técnicos (FAQ)',
      instruction: 'Escreva um passo a passo para usuários cujo aplicativo mobile está travando na tela de login.',
      writingContext: 'Guia de suporte ao cliente no site de atendimento da empresa.',
      writingTask: 'Escreva um guia claro e numerado (70 a 100 palavras) com 4 passos fáceis de seguir.',
      writingGuidelines: [
        'Use linguagem direta, amigável e imperativa.',
        'Instrua a limpar cache e reiniciar o dispositivo.',
        'Oriente a verificar atualizações na Google Play ou App Store.',
        'Indique como entrar em contato com o suporte se o erro persistir.'
      ],
      sampleResponse: "If your mobile application crashes upon login, please follow these four troubleshooting steps: First, force-close the application and reboot your mobile device to clear temporary memory buffers. Second, open your device settings, navigate to Applications, select Insight App, and tap 'Clear Cache'. Third, visit the App Store or Google Play Store to verify that you have downloaded the latest application version containing essential bug patches. If the malfunction continues, submit an error ticket alongside a screenshot to support@insight.com. Our support engineers will respond within 24 hours.",
      minWords: 70,
      keyPhrases: ["Troubleshooting steps", "Clear temporary memory buffers", "Tap Clear Cache", "Downloaded the latest version"]
    },
    {
      id: 15,
      skill: 'writing',
      level: 'B1',
      title: 'Ensaio Reflexivo: O Poder da Empatia nas Relações Humanas',
      instruction: 'Escreva uma reflexão sobre como a empatia ativa transforma conflitos cotidianos.',
      writingContext: 'Crônica para coluna de comportamento humano.',
      writingTask: 'Escreva um texto reflexivo e sensível (70 a 100 palavras) diferenciando empatia de simpatia passiva.',
      writingGuidelines: [
        'Defina empatia como a disposição de enxergar pela perspectiva do outro.',
        'Contraste ouvir para entender versus ouvir apenas para responder.',
        'Explique como a empatia desfaz tensões em momentos de estresse.',
        'Encerre com uma frase de impacto.'
      ],
      sampleResponse: "True empathy goes far beyond passive sympathy; it demands the intellectual courage to step inside someone else's emotional framework without premature judgment. In moments of workplace or domestic disagreement, most people listen solely with the intent to reply and defend their ego. When we consciously suspend reactive defensiveness and genuinely seek to understand the unexpressed fears driving another person's frustration, emotional hostility dissipates. Practicing active empathy does not mean conceding truth; it means acknowledging that human dignity must always precede the fleeting satisfaction of winning an argument.",
      minWords: 70,
      keyPhrases: ["Far beyond passive sympathy", "Intellectual courage to step inside", "Listen solely to reply", "Suspend reactive defensiveness", "Human dignity must precede"]
    }
  ],

  B2: [
    {
      id: 1,
      skill: 'writing',
      level: 'B2',
      title: 'Ensaio Argumentativo: Regulação de Inteligência Artificial',
      instruction: 'Analise a necessidade de criar tratados internacionais obrigatórios para o desenvolvimento de modelos de IA.',
      writingContext: 'Submissão de artigo para think tank de políticas públicas globais.',
      writingTask: 'Escreva um ensaio analítico e persuasivo (100 a 140 palavras) avaliando inovação tecnológica versus mitigação de riscos existenciais e desinformação.',
      writingGuidelines: [
        'Estruture com tese clara, argumentação dialética e conclusão resoluta.',
        'Aborde os perigos da proliferação desregulada (deepfakes, armas autônomas, viés algorítmico).',
        'Reconheça a preocupação do setor com excesso de burocracia que asfixie startups.',
        'Defenda uma agência global de governança similar à Agência Internacional de Energia Atômica.'
      ],
      sampleResponse: "The exponential escalation of generative artificial intelligence presents humanity with a profound governance paradox. While overly rigid national mandates threaten to stifle competitive startup innovation and hinder biomedical breakthroughs, the risks of completely unconstrained algorithmic proliferation—ranging from weaponized deepfake disinformation to lethal autonomous targeting systems—pose unprecedented systemic hazards. Unilateral domestic regulations remain inherently porous in an interconnected global digital economy. Therefore, establishing an international regulatory architecture, analogous to the International Atomic Energy Agency, is imperative. Such an institution must institute mandatory safety benchmarks, pre-deployment compute audits, and strict red-teaming protocols for frontier foundational models. Unchecked technological capability devoid of unified ethical oversight invites civilizational vulnerability.",
      minWords: 100,
      keyPhrases: ["Exponential escalation", "Governance paradox", "Unconstrained algorithmic proliferation", "Pre-deployment compute audits", "Devoid of unified ethical oversight"]
    },
    {
      id: 2,
      skill: 'writing',
      level: 'B2',
      title: 'Relatório Executivo: Análise de Risco de Cadeia de Suprimentos',
      instruction: 'Redija um briefing estratégico para a diretoria avaliando a dependência excessiva de um único fornecedor internacional.',
      writingContext: 'Comitê de Operações e Gestão de Riscos.',
      writingTask: 'Escreva um memorando executivo de alta densidade (100 a 140 palavras) recomendando ' + "'nearshoring' e dupla homologação.",
      writingGuidelines: [
        'Contextualize a volatilidade geopolítica e gargalos marítimos recentes.',
        'Quantifique o impacto de paralisações operacionais na margem bruta.',
        'Apresente duas soluções estratégicas: nearshoring regional e redundância de fornecedores.',
        'Estabeleça um cronograma de execução com marcos trimestrais.'
      ],
      sampleResponse: "Memorandum to Executive Board: Strategic Decoupling and Supply Chain Diversification. Recent geopolitical instability and acute maritime freight bottlenecks have exposed critical vulnerabilities in our single-source procurement model. Relying on an exclusive East Asian manufacturer for seventy percent of our semiconductor assemblies creates an intolerable operational choke point. To mitigate catastrophic assembly stoppages, the Operations Division recommends a phased transition toward nearshoring and dual-vendor redundancy. Over the next two quarters, we will establish audited secondary partnerships in Mexico and Brazil, reallocating thirty-five percent of procurement volumes. While initial tooling capital expenditures will marginally depress near-term operating margins by 1.2%, this strategic hedge permanently inoculates our global fulfillment against tariff escalations, shipping disruptions, and catastrophic localized plant shutdowns.",
      minWords: 100,
      keyPhrases: ["Single-source procurement model", "Intolerable operational choke point", "Nearshoring and dual-vendor redundancy", "Permanently inoculates global fulfillment"]
    },
    {
      id: 3,
      skill: 'writing',
      level: 'B2',
      title: 'Ensaio Crítico: A Ilusão da Meritocracia em Sociedades Contemporâneas',
      instruction: 'Analise criticamente as teses do filósofo Michael Sandel sobre como a tirania do mérito alimenta o ressentimento social.',
      writingContext: 'Publicação na revista de sociologia aplicada.',
      writingTask: 'Redija um ensaio reflexivo e analítico (100 a 140 palavras) sobre capital cultural, desigualdade estrutural e coesão democrática.',
      writingGuidelines: [
        'Desconstrua a premissa de que o sucesso financeiro reflete exclusivamente esforço individual.',
        'Aborde o papel do capital familiar, herança social e contingências fortuitas.',
        'Explique como a arrogância meritocrática dos vencedores humilha as classes trabalhadoras.',
        'Proponha valorizar a dignidade de todas as formas essenciais de trabalho.'
      ],
      sampleResponse: "The pervasive cultural doctrine of meritocracy asserts a deceptively seductive promise: that in an open society, individual talent and diligent effort alone determine economic ascension. However, as political philosopher Michael Sandel compellingly argues, this rhetoric conceals the profound influence of inherited socioeconomic capital, geographic contingency, and systemic privilege. Worse still, meritocratic dogma inflicts psychological injury across society: it crowns winners with smug moral self-congratulation—convincing them their wealth is entirely earned—while branding those left behind as intellectually deficient and personally culpable for their hardship. This toxic hubris fuels justifiable populist resentment against credentialed elites. True democratic renewal requires dismantling this meritocratic illusion and restoring societal respect for the fundamental dignity of essential, uncredentialed labor.",
      minWords: 100,
      keyPhrases: ["Pervasive cultural doctrine", "Deceptively seductive promise", "Inherited socioeconomic capital", "Toxic hubris fuels populist resentment", "Fundamental dignity of essential labor"]
    },
    {
      id: 4,
      skill: 'writing',
      level: 'B2',
      title: 'Proposta Comercial para Captação de Investimento (Pitch Deck Summary)',
      instruction: 'Escreva o sumário executivo de um pitch deck para investidores de Venture Capital.',
      writingContext: 'Startup de inteligência artificial voltada para diagnóstico precoce em oncologia.',
      writingTask: 'Escreva um sumário persuasivo e técnico (100 a 140 palavras) destacando TAM (mercado endereçável), diferenciais proprietários e tração clínica.',
      writingGuidelines: [
        'Apresente o problema: diagnósticos tardios e taxas elevadas de falso-positivo.',
        'Exponha a solução tecnológica: visão computacional treinada em 500k biópsias validadas.',
        'Destaque a tração: 14 hospitais parceiros e aprovação preliminar da agência sanitária.',
        'Faça o pedido de capital (Series A de $5M) e uso dos recursos.'
      ],
      sampleResponse: "Executive Summary: OncoVision Technologies Series A Financing. Late-stage cancer detection remains the leading cause of preventable oncological mortality, costing healthcare systems billions in palliative interventions while clinical pathology departments face severe specialist shortages. OncoVision has pioneered proprietary computer vision architectures capable of analyzing histological tissue biopsies with 98.4% diagnostic accuracy, reducing false-negative screenings by 42%. Having secured multi-center validation across fourteen research hospitals and preliminary regulatory clearance, our recurring SaaS model is already generating $1.2M in annual recurring revenue. We are raising $5 million in Series A financing to accelerate FDA clinical trials, expand commercial deployment across North American hospital networks, and integrate multimodal genomic biomarker analysis into our diagnostic engine.",
      minWords: 100,
      keyPhrases: ["Preventable oncological mortality", "Proprietary computer vision architectures", "Multi-center clinical validation", "Accelerate clinical trials and commercial deployment"]
    },
    {
      id: 5,
      skill: 'writing',
      level: 'B2',
      title: 'Artigo de Opinião: Desafios da Transição para Energia Verde',
      instruction: 'Escreva um artigo avaliando por que atingir zero emissões líquidas requer investimento nuclear e baterias de rede.',
      writingContext: 'Coluna de transição climática em jornal de economia.',
      writingTask: 'Escreva um ensaio fundamentado (100 a 140 palavras) sobre a intermitência solar/eólica e a necessidade de energia de base limpa.',
      writingGuidelines: [
        'Reconheça a queda de custo de painéis solares e turbinas eólicas.',
        'Explique o desafio da intermitência climática e estabilidade de tensão na rede.',
        'Defenda a energia nuclear de quarta geração e hidroelétricas reversíveis como carga de base (baseload).',
        'Conclua alertando que o dogmatismo ideológico atrasa a descarbonização.'
      ],
      sampleResponse: "While the dramatic precipitous price collapse of solar photovoltaics and wind turbines has accelerated global decarbonization milestones, relying exclusively on weather-dependent generation models exposes electric utilities to severe intermittency vulnerabilities. When seasonal calm periods and cloud cover coincide with winter heating spikes, electrical grids cannot maintain voltage stability without high-emission fossil peaker plants, unless supported by massive grid-scale chemical storage that remains economically prohibitive. Decarbonizing heavy industrial sectors demands continuous, high-density baseload power. Policymakers must discard outdated anti-nuclear dogma and champion advanced small modular reactors (SMRs) alongside pumped-storage hydro and geothermal infrastructure. A resilient zero-carbon future cannot rely on wishful meteorological stability; it requires diversified, technologically pragmatic clean baseload foundations.",
      minWords: 100,
      keyPhrases: ["Precipitous price collapse", "Severe intermittency vulnerabilities", "Continuous high-density baseload power", "Small modular reactors", "Technologically pragmatic clean baseload"]
    },
    {
      id: 6,
      skill: 'writing',
      level: 'B2',
      title: 'Carta Aberta aos Acionistas sobre Sustentabilidade Corporativa (ESG)',
      instruction: 'Escreva uma mensagem do CEO defendendo investimentos ESG de longo prazo contra pressões por lucros trimestrais.',
      writingContext: 'Relatório Anual Integrado de Sustentabilidade.',
      writingTask: 'Redija uma carta contundente e equilibrada (100 a 140 palavras) demonstrando que sustentabilidade é mitigação de risco de capital.',
      writingGuidelines: [
        'Enfrente diretamente as críticas de que ESG prejudica retornos imediatos.',
        'Demonstre que eficiência energética e governança ética blindam o balanço patrimonial.',
        'Cite atração de talentos jovens e custos decrescentes de capital verde.',
        'Reafirme que a criação duradoura de valor exige pensar em horizontes de décadas.'
      ],
      sampleResponse: "To Our Valued Shareholders: In an era dominated by hyper-reactive quarterly earnings pressures, leadership is frequently urged to sacrifice environmental and social investments for immediate margin expansion. We unequivocally reject this shortsighted dichotomy. Embedding rigorous ESG standards into our core operational blueprint is not corporate philanthropy; it is disciplined fiduciary risk mitigation. Transitioning our logistics to zero-emission electrification shields operating cash flows from volatile carbon taxation and fossil fuel shocks, while transparent supply chain traceability protects brand equity from regulatory penalties and consumer boycotts. Furthermore, sustainable capital allocation lowers our debt underwriting costs through green bond financing. True enduring shareholder value cannot be extracted from depleted ecological systems or disengaged workforces; it must be cultivated through resilient, multi-decade stewardship.",
      minWords: 100,
      keyPhrases: ["Shortsighted dichotomy", "Disciplined fiduciary risk mitigation", "Shields operating cash flows", "Enduring shareholder value", "Multi-decade stewardship"]
    },
    {
      id: 7,
      skill: 'writing',
      level: 'B2',
      title: 'Ensaio Sociológico: O Fenômeno da ' + "'Cultura do Cancelamento'",
      instruction: 'Analise como o policiamento moral em redes sociais transita entre responsabilização e linchamento virtual.',
      writingContext: 'Revista de estudos culturais e ética na era digital.',
      writingTask: 'Escreva um ensaio equilibrado e perspicaz (100 a 140 palavras) sobre justiça restaurativa versus tribunais da internet.',
      writingGuidelines: [
        'Reconheça que o clamor público deu voz a minorias contra abusos de figuras poderosas.',
        'Aponte a degeneração do movimento em punitivismo performativo sem presunção de inocência.',
        'Discuta a perda do espaço para redenção, aprendizado e desculpas sinceras.',
        'Defenda uma cultura de responsabilização com princípios de justiça restaurativa.'
      ],
      sampleResponse: "The emergence of digital accountability culture initially served as an egalitarian corrective, empowering historically marginalized voices to demand public reckoning from powerful institutions previously shielded by legal inertia. However, the dynamics of social media engagement algorithms have largely weaponized this impulse into performative moral vigilantism. Nuanced ethical transgressions are routinely met with scorched-earth ostracism, conflating momentary errors of judgment with irredeemable malice. In these digital tribunals, the presumption of innocence is obliterated in pursuit of virality, denying wrongdoers any pathway toward authentic atonement or constructive rehabilitative growth. To prevent public discourse from degenerating into a climate of terrified self-censorship, we must transition from retributive online shaming toward restorative justice frameworks that prioritize proportionate accountability over vindictive digital annihilation.",
      minWords: 100,
      keyPhrases: ["Egalitarian corrective", "Performative moral vigilantism", "Scorched-earth ostracism", "Authentic atonement", "Restorative justice frameworks"]
    },
    {
      id: 8,
      skill: 'writing',
      level: 'B2',
      title: 'Proposta de Política Pública de Saúde Mental para Jovens',
      instruction: 'Escreva um memorando legislativo propondo limites de design viciante em redes sociais para menores.',
      writingContext: 'Consultoria para a Comissão de Direitos da Infância e Tecnologia.',
      writingTask: 'Redija um documento propositivo e técnico (100 a 140 palavras) sugerindo a proibição de rolagem infinita e notificações noturnas.',
      writingGuidelines: [
        'Apresente dados sobre a correlação entre uso de telas e índices de depressão/ansiedade juvenil.',
        'Proponha a proibição legislativa de ' + "'infinite scroll' e reprodução automática para menores de 18 anos.",
        'Exija desativação mandatória de notificações push entre 22h e 6h.',
        'Sugira multas pecuniárias substanciais indexadas ao faturamento global das plataformas.'
      ],
      sampleResponse: "Policy Memorandum: Safeguarding Adolescent Psychological Welfare in Digital Environments. Clinical psychiatric data indicates a direct correlation between compulsive social media engagement and surging rates of adolescent clinical depression and self-harm. Much of this vulnerability is artificially engineered: platforms deploy predatory gamification algorithms—including variable reward schedules, auto-playing video streams, and infinite scrolling—explicitly designed to bypass underdeveloped prefrontal inhibitory control. We urge the Legislative Assembly to enact binding child digital safety regulations. Key provisions must mandate the default elimination of infinite scrolling architectures for registered minors, restrict algorithmic recommendation amplification, and implement an automatic nocturnal blackout of push notifications between 10:00 PM and 6:00 AM. Non-compliant technology corporations must face civil penalties of up to four percent of annual global turnover.",
      minWords: 100,
      keyPhrases: ["Adolescent psychological welfare", "Predatory gamification algorithms", "Prefrontal inhibitory control", "Infinite scrolling architectures", "Binding child safety regulations"]
    },
    {
      id: 9,
      skill: 'writing',
      level: 'B2',
      title: 'Dissecação de Estudo de Caso de Negócios: A Queda da Kodak',
      instruction: 'Analise por que a Kodak faliu apesar de seus próprios engenheiros terem inventado a câmera digital.',
      writingContext: 'Ensaio para o módulo de Gestão de Inovação Disruptiva.',
      writingTask: 'Escreva uma análise corporativa perspicaz (100 a 140 palavras) sobre o dilema do inovador e canibalização de receita.',
      writingGuidelines: [
        'Mencione a invenção da câmera digital pelo engenheiro Steven Sasson em 1975.',
        'Explique a relutância da diretoria em canibalizar a margem lucrativa dos filmes químicos.',
        'Aplique o conceito de ' + "'Dilema do Inovador' de Clayton Christensen.",
        'Conclua com a lição para empresas líderes em mercados tecnológicos maduros.'
      ],
      sampleResponse: "The tragic collapse of Eastman Kodak remains the quintessential textbook manifestation of Clayton Christensen's 'Innovator's Dilemma'. Remarkably, Kodak engineer Steven Sasson pioneered the world's first portable digital camera prototype in 1975. However, corporate executive leadership actively suppressed the commercialization of digital imaging out of paralyzing terror that it would cannibalize their astronomically lucrative chemical film and paper printing monopoly. By myopically prioritizing immediate high-margin revenue streams over long-term technological disruption, Kodak allowed agile competitors like Sony and Canon to capture the burgeoning digital photography market. The indelible lesson for contemporary incumbents is unambiguous: if an enterprise is unwilling to cannibalize its own legacy cash cows through proactive internal innovation, market forces and hungry competitors will ruthlessly execute that disruption on its behalf.",
      minWords: 100,
      keyPhrases: ["Quintessential textbook manifestation", "Innovator's Dilemma", "Paralyzing terror of cannibalizing", "Lucrative chemical monopoly", "Cannibalize its own legacy cash cows"]
    },
    {
      id: 10,
      skill: 'writing',
      level: 'B2',
      title: 'Artigo Científico de Divulgação: O Microbioma Intestinal e a Saúde Cerebral',
      instruction: 'Escreva um artigo de divulgação científica explicando o ' + "'eixo intestino-cérebro' (gut-brain axis).",
      writingContext: 'Coluna de medicina preventiva e neurociência popular.',
      writingTask: 'Redija um texto claro, rigoroso e fascinante (100 a 140 palavras) sobre o nervo vago e neurotransmissores intestinais.',
      writingGuidelines: [
        'Apresente o intestino como o ' + "'segundo cérebro' humano.",
        'Explique que cerca de 90% da serotonina corporal é sintetizada no trato gastrointestinal.',
        'Descreva a via bidirecional de comunicação do nervo vago.',
        'Conclua sugerindo como dietas ricas em fibras e probióticos sustentam o equilíbrio emocional.'
      ],
      sampleResponse: "Groundbreaking biological research has dissolved the traditional Cartesian separation between gastrointestinal physiology and neurological health, establishing the vital significance of the 'gut-brain axis'. Trillions of microbial organisms inhabiting the human intestinal tract do not merely digest dietary fiber; they synthesize essential neuroactive compounds, including roughly ninety percent of the body's serotonin. Via the vagus nerve and circulating cytokine signaling pathways, the gut microbiome maintains constant bidirectional communication with the central nervous system. Dysbiosis—an imbalance in bacterial colonization caused by ultra-processed diets and chronic antibiotic overuse—triggers systemic low-grade neuroinflammation linked to clinical mood disorders and depressive episodes. Nourishing microfloral diversity through fermented foods, polyphenol-rich botanical antioxidants, and prebiotic dietary fiber represents an essential frontier in preventative mental healthcare.",
      minWords: 100,
      keyPhrases: ["Gut-brain axis", "Synthesize essential neuroactive compounds", "Bidirectional communication via the vagus nerve", "Dysbiosis triggers neuroinflammation", "Preventative mental healthcare"]
    },
    {
      id: 11,
      skill: 'writing',
      level: 'B2',
      title: 'Manifesto Urbanístico: Cidades Centradas em Pessoas vs Carros',
      instruction: 'Defenda a transformação de avenidas centrais em calçadões arborizados e corredores de convivência.',
      writingContext: 'Contribuição para o Plano Diretor Estratégico da Cidade.',
      writingTask: 'Escreva um manifesto urbanístico vigoroso (100 a 140 palavras) comparando modelos de tráfego a cidades com escala humana.',
      writingGuidelines: [
        'Critique a expansão contínua de faixas de rodovias como indutora de tráfego (demanda induzida).',
        'Cite exemplos bem-sucedidos de pedestrianização (como Pontevedra, Paris ou Amsterdã).',
        'Destaque os ganhos em saúde pública, vitalidade comercial e descarbonização.',
        'Finalize convocando a priorizar pedestres, ciclistas e transporte coletivo elétrico.'
      ],
      sampleResponse: "For nearly a century, urban planning has fallen victim to the geometric fallacy of induced demand: widening urban expressways never alleviates congestion; it merely incentivizes more suburban vehicular sprawl, severing historic neighborhoods with noisy ribbons of asphalt. Cities flourish when designed for human bodies, not two-ton metal combustion engines. Transforming multi-lane downtown thoroughfares into pedestrianized tree-lined boulevards and protected cycling corridors revitalizes local commercial retail footfall, diminishes toxic particulate air pollution, and fosters spontaneous civic camaraderie. Pioneering global metropolitan centers—from Barcelona's innovative superblocks to Paris's ambitious urban rewilding—prove that reclaimed public space transforms asphalt wastelands into vibrant democratic living rooms. We must reclaim our streets for people, prioritizing walking, micromobility, and high-frequency electric transit over private automobile hegemony.",
      minWords: 100,
      keyPhrases: ["Geometric fallacy of induced demand", "Designed for human bodies", "Pedestrianized tree-lined boulevards", "Spontaneous civic camaraderie", "Reclaim public space"]
    },
    {
      id: 12,
      skill: 'writing',
      level: 'B2',
      title: 'Ensaio Crítico: A Ética do Turismo de Massa em Cidades Históricas',
      instruction: 'Analise os impactos predatórios do excesso de turismo (overtourism) em destinos como Veneza e Amsterdã.',
      writingContext: 'Revista de geografia humana e turismo responsável.',
      writingTask: 'Escreva um ensaio analítico (100 a 140 palavras) sobre habitação, descaracterização cultural e cotas turísticas.',
      writingGuidelines: [
        'Descreva como aluguéis de curta temporada (Airbnb) expulsam moradores locais.',
        'Aborde a transformação de centros históricos em parques temáticos artificiais.',
        'Debata a imposição de taxas de entrada e limitação de cruzeiros marítimos gigantes.',
        'Proponha um modelo de turismo regenerativo focado em permanência longa e sustentabilidade.'
      ],
      sampleResponse: "The uncontrolled surge of hyper-tourism has transformed historic European cultural centers into tragic casualties of their own picturesque fame. In destinations like Venice, Dubrovnik, and Amsterdam, the proliferation of unmonitored short-term holiday rentals has hyper-inflated residential property markets, exiling multi-generational working families and replacing authentic neighborhood bakeries with generic souvenir dispensaries. When ancient canal alleys become congested human gridlocks for cruise ship day-trippers, historic heritage is degraded into a hollow, theme-park caricature. Municipal governments must assert muscular regulatory authority: capping vacation rental permits, barring megaship maritime dockings, and introducing dynamic access tariffs during peak seasons. Tourism policy must abandon raw visitor volume as its benchmark of success, prioritizing community livability and regenerative heritage preservation over extractive commercial exploitation.",
      minWords: 100,
      keyPhrases: ["Uncontrolled surge of hyper-tourism", "Proliferation of short-term holiday rentals", "Exiling working families", "Theme-park caricature", "Regenerative heritage preservation"]
    },
    {
      id: 13,
      skill: 'writing',
      level: 'B2',
      title: 'Análise de Estratégia de Recursos Humanos: A Semana de 4 Dias',
      instruction: 'Escreva um relatório avaliando os resultados empíricos de ensaios corporativos com a semana de 4 dias (32 horas).',
      writingContext: 'Comitê de Cultura Organizacional e Gestão de Pessoas.',
      writingTask: 'Escreva um relatório bem fundamentado (100 a 140 palavras) apresentando dados sobre receita, absenteísmo e foco.',
      writingGuidelines: [
        'Apresente o modelo 100-80-100: 100% da remuneração por 80% do tempo mantendo 100% da produção.',
        'Mencione estudos globais (Reino Unido, Islândia) que demonstraram estabilidade ou crescimento de faturamento.',
        'Destaque a queda drástica em licenças médicas por burnout e rotação de funcionários (turnover).',
        'Sugira um programa piloto em um setor antes da expansão corporativa integral.'
      ],
      sampleResponse: "Executive Briefing: Organizational Feasibility of the Four-Day Workweek. Landmark global trials—most notably across dozens of British and Icelandic enterprises—have decisively debunked the industrial-era assumption that human productivity scales linearly with hours clocked behind a desk. Operating under the '100-80-100' paradigm (100% of compensation for 80% of working time, conditional on delivering 100% of baseline output), participating organizations reported an average revenue surge of 35% alongside a staggering 65% reduction in sick days and employee burnout. Condensed work schedules compel teams to eliminate superfluous meetings, streamline communications, and maximize uninterrupted focus. Transitioning to a thirty-two-hour week functions as an unmatched recruitment magnet for top-tier technical talent. We recommend authorizing a six-month experimental pilot across our digital product design division to measure output velocity and employee retention.",
      minWords: 100,
      keyPhrases: ["Productivity scales linearly with hours", "100-80-100 paradigm", "Average revenue surge", "Eliminate superfluous meetings", "Unmatched recruitment magnet"]
    },
    {
      id: 14,
      skill: 'writing',
      level: 'B2',
      title: 'Ensaio Filosófico: A Relevância do Estoicismo na Modernidade',
      instruction: 'Explique como a distinção estóica entre o que controlamos e o que não controlamos combate a ansiedade contemporânea.',
      writingContext: 'Ensaio para publicação de filosofia prática.',
      writingTask: 'Escreva um texto analítico e lúcido (100 a 140 palavras) sobre a dicotomia do controle de Epicteto e serenidade mental.',
      writingGuidelines: [
        'Apresente a ' + "'Dicotomia do Controle' estabelecida por Epicteto.",
        'Diferencie fatores internos (valores, reações, julgamentos) de externos (opiniões alheias, resultados, acasos).',
        'Analise como focar nas variáveis externas gera angústia crônica.',
        'Conclua demonstrando que a serenidade brota do domínio consciente da própria mente.'
      ],
      sampleResponse: "Amidst the ceaseless stimuli, algorithmic outrage, and systemic volatility of contemporary life, ancient Stoic philosophy offers a remarkably potent psychological sanctuary. At its philosophical core lies Epictetus's 'Dichotomy of Control'—the profound realization that existence bifurcates cleanly into factors within our direct volition and those completely beyond it. We cannot control macroeconomic fluctuations, algorithmic trends, or the fickle judgments of others; we possess sovereign mastery solely over our own reasoned judgments, moral character, and emotional reactions. Anxiety invariably metastasizes when we expend finite psychological reserves attempting to manipulate external outcomes rather than governing internal responses. By relinquishing the futile compulsion to micromanage uncontrollable circumstances and anchoring identity in intentional, ethical action, Stoicism cultivates an unshakeable inner citadel of emotional tranquility.",
      minWords: 100,
      keyPhrases: ["Ceaseless stimuli and algorithmic outrage", "Dichotomy of Control", "Sovereign mastery over our reasoned judgments", "Anxiety metastasizes", "Inner citadel of emotional tranquility"]
    },
    {
      id: 15,
      skill: 'writing',
      level: 'B2',
      title: 'Crítica de Livro Acadêmico: ' + "'Sapiens: Uma Breve História da Humanidade'",
      instruction: 'Escreva uma resenha crítica avaliando o papel da ficção e mitos compartilhados segundo Yuval Noah Harari.',
      writingContext: 'Caderno de Leituras e Teoria Antropológica.',
      writingTask: 'Escreva uma resenha acadêmica balanceada (100 a 140 palavras) sobre como narrativas ficcionais permitiram cooperação em massa.',
      writingGuidelines: [
        'Apresente a tese central da Revolução Cognitiva de Harari.',
        'Explique o conceito de mitos intersubjetivos (dinheiro, nações, corporações, leis).',
        'Elogie a prosa acessível e interdisciplinaridade da obra.',
        'Aponte ressalvas acadêmicas sobre simplificações antropológicas excessivas.'
      ],
      sampleResponse: "In 'Sapiens: A Brief History of Humankind', Yuval Noah Harari presents a mesmerizing synthesis of evolutionary biology and macro-history, asserting that humanity's ecological supremacy hinges upon our singular capacity to construct shared fictions. During the Cognitive Revolution, Homo sapiens unlocked language not merely to describe physical predators, but to fabricate intersubjective realities: legal corporations, sovereign nations, institutional religions, and fiat currencies. These imagined orders enable millions of unrelated strangers to cooperate flexibly toward monumental endeavors unattainable by any other biological organism. While professional anthropologists legitimately critique Harari for sweeping historical generalizations and speculative evolutionary psychology leaps, the book's enduring triumph resides in demonstrating that the foundational architecture of civilization is built not upon immutable biological laws, but upon collective, malleable narrative consensus.",
      minWords: 100,
      keyPhrases: ["Mesmerizing synthesis of evolutionary biology", "Singular capacity to construct shared fictions", "Fabricate intersubjective realities", "Cooperate flexibly toward monumental endeavors", "Malleable narrative consensus"]
    }
  ],

  C1: [
    {
      id: 1,
      skill: 'writing',
      level: 'C1',
      title: 'Dissertação Acadêmica: A Dialética da Iluminação e a Racionalidade Instrumental',
      instruction: 'Analise a crítica de Adorno e Horkheimer sobre como o Iluminismo reverteu em mito e dominação técnica.',
      writingContext: 'Periódico de Teoria Crítica e Filosofia Política Contemporânea.',
      writingTask: 'Redija um ensaio acadêmico denso, preciso e estilisticamente refinado (140 a 180 palavras) dissecando a razão instrumental e a reificação da natureza.',
      writingGuidelines: [
        'Demonstre domínio do vocabulário filosófico germânico e franconiano.',
        'Exponha a tese de que a racionalidade técnica se divorciou de fins emancipatórios para se tornar mera engrenagem utilitária.',
        'Discuta a subjugação da natureza interna e externa como raiz das catástrofes totalitárias do século XX.',
        'Conclua articulando as ressonâncias contemporâneas no extrativismo algorítmico e na catástrofe climática.'
      ],
      sampleResponse: "In 'Dialectic of Enlightenment', Theodor Adorno and Max Horkheimer formulated a harrowing post-mortem of Western rationalism, exposing the tragic teleology whereby the enlightenment project—originally conceived to emancipate humanity from mythological terror—inexorably transmuted into a totalitarian apparatus of technical subjugation. By reducing reason to mere formal instrumental calculation ('Zweckrationalität'), modern scientific epistemology stripped the cosmos of intrinsic meaning, reifying both non-human nature and human subjects into quantifiable raw material ripe for bureaucratic exploitation. The quest for absolute cognitive mastery did not eradicate mythical barbarism; rather, it codified barbarism into industrialized efficiency, reaching catastrophic fruition in the mechanized horrors of the twentieth century. Contemporary society perpetuates this unresolved dialectic through algorithmic surveillance capitalism and ecological extraction, demonstrating that technological sophistication absent dialectical, substantive self-critique merely refines the operational instruments of human alienation and existential peril.",
      minWords: 140,
      keyPhrases: ["Harrowing post-mortem of Western rationalism", "Tragic teleology of enlightenment", "Formal instrumental calculation", "Reifying nature into quantifiable raw material", "Industrialized efficiency and existential peril"]
    },
    {
      id: 2,
      skill: 'writing',
      level: 'C1',
      title: 'Parecer Jurídico de Direito Constitucional: A Teoria da Proteção Deficiente',
      instruction: 'Redija um parecer para o Supremo Tribunal Federal sobre o princípio da proibição da proteção deficiente (Untermassverbot) em direitos fundamentais.',
      writingContext: 'Memorial forense de amicus curiae em Ação Direta de Inconstitucionalidade de proteção ambiental.',
      writingTask: 'Elabore um texto jurídico de altíssima erudição e densidade hermenêutica (140 a 180 palavras) integrando Alexy e proporcionalidade.',
      writingGuidelines: [
        'Utilize linguagem jurídica formal irretocável em inglês com precisão dogmática.',
        'Articule a dimensão bifronte do princípio da proporcionalidade: proibição de excesso e proibição de insuficiência.',
        'Demonstre que a omissão estatal ou a desregulamentação desmedida viola deveres constitucionais de tutela ecológica.',
        'Conclua pleiteando a inconstitucionalidade material do ato normativo impugnado.'
      ],
      sampleResponse: "Amicus Curiae Jurisprudential Memorial: The Doctrine of Deficient Protection in Ecological Constitutionalism. The principle of proportionality encompasses a dual, dialectical architecture: while its negative dimension ('Übermassverbot') safeguards individual autonomy against disproportionate state intrusion, its indispensable positive counterpart—the prohibition of deficient protection ('Untermassverbot')—imposes an affirmative, non-derogable constitutional mandate upon the sovereign state to erect adequate statutory and administrative safeguards against catastrophic environmental harm. When the legislature systematically eviscerates regulatory oversight over fragile biome preservation, it abrogates its fiduciary duty of protection toward future generations, transgressing the minimum threshold of constitutional efficacy guaranteed by ecological clauses. State inaction in the face of irreversible ecological collapse constitutes a perversion of sovereignty. Because the contested statutory amendment leaves vital biological corridors defenseless against predatory mineral exploitation, it incurs flagrant material unconstitutionality, demanding decisive judicial invalidation to restore constitutional equilibrium and preserve ecological integrity.",
      minWords: 140,
      keyPhrases: ["Dual dialectical architecture of proportionality", "Prohibition of deficient protection (Untermassverbot)", "Affirmative non-derogable constitutional mandate", "Fiduciary duty of protection toward future generations", "Flagrant material unconstitutionality"]
    },
    {
      id: 3,
      skill: 'writing',
      level: 'C1',
      title: 'Tratado de Relações Internacionais: O Fim da Hegemonia Unipolar e a Ordem Polinodal',
      instruction: 'Analise a transição geopolítica da ' + "'Pax Americana' unipolar para uma arquitetura multipolar fragmentada e revisionista.",
      writingContext: 'Artigo principal na revista Foreign Affairs.',
      writingTask: 'Redija uma análise estratégica sofisticada e incisiva (140 a 180 palavras) sobre multipolaridade, alianças assimétricas e desdolarização.',
      writingGuidelines: [
        'Empregue conceitos teóricos consolidados (realismo ofensivo, dilema de segurança, hedging).',
        'Analise como potências médias no Sul Global manobram entre Washington, Pequim e Moscou.',
        'Aborde a fragmentação geoeconômica e o uso de moedas alternativas ao dólar nas trocas comerciais.',
        'Conclua refletindo sobre os riscos de confronto cinético em zonas de fricção regional.'
      ],
      sampleResponse: "The post-Cold War illusion of an immutable liberal unipolar order has irrevocably disintegrated, supplanted by a volatile, polynodal geopolitical architecture characterized by structural revisionism and great-power friction. The contemporary international system is defined not merely by bilateral Sino-American bipolar polarization, but by the assertive strategic hedging of pivotal middle powers across the Global South. Emerging economies systematically reject zero-sum alliance dichotomies, adroitly arbitrating between Western security guarantees and Eurasian infrastructure investments while institutionalizing non-dollar bilateral settlement mechanisms to insulate sovereign reserves against extraterritorial weaponized financial sanctions. In this contested interregnum, traditional multilateral institutions atrophy, replaced by ad-hoc transactional minilateral coalitions. As regional friction zones multiply along critical maritime chokepoints and resource frontiers, the absence of an overarching geopolitical consensus dramatically escalates miscalculation risks, underscoring that stability in an inherently multipolar world requires hardheaded deterrence tempered by institutionalized diplomatic channels.",
      minWords: 140,
      keyPhrases: ["Immutable liberal unipolar order", "Polynodal geopolitical architecture", "Strategic hedging of middle powers", "Non-dollar bilateral settlement mechanisms", "Ad-hoc transactional minilateral coalitions"]
    },
    {
      id: 4,
      skill: 'writing',
      level: 'C1',
      title: 'Crítica Literária Hermenêutica: A Polifonia e o Carnaval Bakhtiniano em Dostoiévski',
      instruction: 'Escreva um ensaio de teoria literária dissecando como a voz autoral dostoievskiana renuncia ao monologismo em ' + "'Os Irmãos Karamazov'.",
      writingContext: 'Coletânea de Estudos Comparados em Teoria Literária Eslava.',
      writingTask: 'Elabore uma crítica literária primorosa e profunda (140 a 180 palavras) explorando polifonia, heteroglossia e diálogo ontológico.',
      writingGuidelines: [
        'Articule os conceitos centrais de Mikhail Bakhtin: polifonia, dialogismo e voz não-finalizada.',
        'Analise a tensão inconciliável entre o ceticismo iconoclasta de Ivan e a mística compassiva de Aliócha.',
        'Demonstre que Dostoiévski não impõe uma conclusão dogmática monológica, concedendo autonomia aos personagens.',
        'Finalize refletindo sobre a natureza intrinsecamente aberta da consciência humana.'
      ],
      sampleResponse: "In his seminal narratological investigations, Mikhail Bakhtin identified Fyodor Dostoevsky as the progenitor of the authentic polyphonic novel—a radical departure from the tyrannical monologism of nineteenth-century European realism. In masterpieces like 'The Brothers Karamazov', the authorial consciousness does not function as an omniscient, moralizing magistrate dictating ideological conclusions; rather, it orchestrates a choir of fully sovereign voices engaging in unfinalizable ontological counterpoint. The philosophical collision between Ivan's agonizing metaphysical rebellion in the 'Grand Inquisitor' and Alyosha's incandescent incarnational empathy is never synthetically resolved through dialectical authorial fiat. Each character embodies an autonomous existential position endowed with profound epistemic legitimacy. By steadfastly refusing to subordinate dialogic plurality to didactic closure, Dostoevsky dramatizes the fundamental reality that human consciousness exists only in communion with the other, perpetually unfinished and open to grace.",
      minWords: 140,
      keyPhrases: ["Progenitor of the authentic polyphonic novel", "Tyrannical monologism of realism", "Unfinalizable ontological counterpoint", "Never synthetically resolved through authorial fiat", "Subordinate dialogic plurality to didactic closure"]
    },
    {
      id: 5,
      skill: 'writing',
      level: 'C1',
      title: 'Tratado de Epistemologia da Ciência: A Teoria Paradigmática de Thomas Kuhn',
      instruction: 'Analise a incomensurabilidade entre paradigmas concorrentes e por que revoluções científicas não progridem de forma cumulativa linear.',
      writingContext: 'Simpósio Internacional de História e Filosofia da Ciência.',
      writingTask: 'Redija um ensaio filosófico de rigor analítico extremo (140 a 180 palavras) dissecando ciência normal, anomalias e conversão epistemológica.',
      writingGuidelines: [
        'Desconstrua o mito positivista do progresso científico cumulativo e puramente racional.',
        'Explique o conceito kuhniano de ' + "'ciência normal' e a acumulação de anomalias que precipitam crises paradigmáticas.",
        'Articule a tese da incomensurabilidade: cientistas de paradigmas rivais operam em mundos perceptivos distintos.',
        'Conclua examinando as implicações sociológicas da conversão de comunidades científicas.'
      ],
      sampleResponse: "Thomas Kuhn's 'The Structure of Scientific Revolutions' irrevocably dismantled the triumphant positivistic orthodoxy that conceived of scientific advancement as a steady, cumulative accretion of objective empirical facts. Kuhn demonstrated that scientific disciplines operate within prevailing 'paradigms'—hegemonic conceptual matrices that prescribe legitimate ontological entities, methodology, and empirical puzzles during protracted periods of 'normal science'. Science does not evolve linearly; rather, as empirical anomalies accumulate beyond the paradigm's defensive elasticity, a systemic crisis erupts, culminating in a revolutionary epistemic rupture. Crucially, Kuhn posited that competing paradigms are fundamentally incommensurable: lacking a neutral, external observational vocabulary, proponents of rival frameworks evaluate evidentiary data through incompatible conceptual lenses. The triumphant transition to a novel paradigm is not an unadulterated triumph of deductive logic, but a sociological and gestalt conversion within the scientific community, forever altering how the universe is perceived and measured.",
      minWords: 140,
      keyPhrases: ["Dismantled the positivistic orthodoxy", "Cumulative accretion of objective facts", "Hegemonic conceptual matrices", "Systemic crisis erupts in epistemic rupture", "Fundamentally incommensurable"]
    },
    {
      id: 6,
      skill: 'writing',
      level: 'C1',
      title: 'Ensaio de Economia Política: O Trilema de Rodrik e a Desglobalização',
      instruction: "Analise o 'Trilema Político da Economia Mundial' de Dani Rodrik: hiperglobalização, soberania nacional e democracia.",
      writingContext: 'Periódico de Economia Política Internacional de Oxford.',
      writingTask: 'Elabore um ensaio analítico de alto impacto (140 a 180 palavras) avaliando por que a hiperglobalização erodiu os pactos sociais democráticos.',
      writingGuidelines: [
        'Enuncie com precisão as três pontas do trilema de Rodrik e a impossibilidade de manter as três simultaneamente.',
        'Explique como o desmonte de barreiras tarifárias e financeiras subordinou as preferências eleitorais aos imperativos do capital móvel.',
        'Analise a reação populista e nacionalista como sintoma da tensão entre soberania democrática e liberalismo desregrado.',
        'Conclua propondo uma globalização inteligente (smart globalization) que preserve o espaço de políticas públicas soberanas.'
      ],
      sampleResponse: "Dani Rodrik's macroeconomic trilemma articulates an insurmountable structural impasse in international political economy: a nation cannot concurrently sustain hyperglobalization, national sovereignty, and democratic political accountability. Any functioning society must choose any two. Throughout the zenith of neoliberal market fundamentalism, technocratic elites prioritized hyperglobalization by encasing capital mobility within supranational treaties, effectively constricting domestic fiscal policy into a 'golden straitjacket' that subordinated electoral preferences to the whims of international bond vigilantes. This systemic disenfranchisement of domestic working populations precipitated the contemporary populist backlash, as dislocated citizens mobilized to reassert democratic sovereignty against unconstrained economic cosmopolitanism. To reconstruct a durable international order, policymakers must abandon dogmatic hyper-integration and embrace Rodrik's 'smart globalization'—a decentralized multilateral framework that permits sovereign nation-states adequate policy autonomy to uphold robust domestic social contracts, labor standards, and ecological safeguards without descending into ruinous beggar-thy-neighbor protectionism.",
      minWords: 140,
      keyPhrases: ["Insurmountable structural impasse", "Golden straitjacket of fiscal policy", "Subordinated electoral preferences to bond vigilantes", "Systemic disenfranchisement of domestic populations", "Smart globalization with policy autonomy"]
    },
    {
      id: 7,
      skill: 'writing',
      level: 'C1',
      title: 'Ensaio Fenomenológico: O Tempo Vivido (Bergson) vs O Tempo Espacializado dos Relógios',
      instruction: 'Analise a crítica de Henri Bergson à homogeneização espacial do tempo na física e celebre a intuição da ' + "'dureé' interior.",
      writingContext: 'Caderno de Filosofia Contemporânea e Estética da Percepção.',
      writingTask: 'Redija um texto filosófico poético e ontologicamente denso (140 a 180 palavras) dissecando a duração pura contra o tempo métrico.',
      writingGuidelines: [
        'Diferencie o tempo quantitativo e espacializado dos relógios da duração qualitativa da consciência (durée).',
        'Demonstre que a medição mecânica justapõe momentos como pontos numa linha reta, traindo a fluidez da experiência vivida.',
        'Explore a memória bergsoniana como uma avalanche contínua do passado que se projeta no devir criativo.',
        'Conclua refletindo sobre como a recuperação da duração pura liberta o sujeito da alienação mecanicista moderna.'
      ],
      sampleResponse: "Henri Bergson's profound philosophical revolution originated in his radical demarcation between chronological, spatialized time and the authentic, qualitative reality of lived duration ('durée pure'). By projecting temporal experience onto the geometric continuum of clocks and calendars, mechanistic science commits a category error: it reduces the unceasing flow of conscious existence into discrete, homogeneous spatial coordinates, treating time as a succession of static beads on an external wire. In stark contrast, genuine inner consciousness experiences time as an indivisible, qualitative interpenetration: the past does not vanish; it compounds like a gathering avalanche, dynamically saturating the present and leaning eagerly into the creative open horizon of the future. Mechanized temporal quantification alienates human intentionality into clockwork predictability. Only through sympathetic intuitive perception do we transcend this spatialized illusion, re-anchoring human freedom within the unrepeatable, fertile flow of lived temporal creation.",
      minWords: 140,
      keyPhrases: ["Authentic qualitative reality of lived duration", "Spatialized time onto geometric continuums", "Indivisible qualitative interpenetration", "Compounds like a gathering avalanche", "Unrepeatable fertile flow of lived creation"]
    },
    {
      id: 8,
      skill: 'writing',
      level: 'C1',
      title: 'Tratado de Bioética Avançada: Edição Genômica Germinativa e Justiça Intergeracional',
      instruction: 'Discuta a moralidade de intervenções CRISPR-Cas9 hereditárias à luz da dignidade humana de Hans Jonas e Habermas.',
      writingContext: 'Comitê Global de Bioética e Biopolítica das Nações Unidas.',
      writingTask: 'Elabore um tratado ético-filosófico rigoroso e circunspecto (140 a 180 palavras) sobre a instrumentalização da vida humana futura.',
      writingGuidelines: [
        'Distinga somatic gene therapies (células não-hereditárias) de germline modifications (linhagem germinativa permanente).',
        'Mobilize a advertência de Jürgen Habermas sobre como a programação genética priva o indivíduo de sua auto-compreensão como autor moral de sua vida.',
        'Aplique o Princípio da Responsabilidade de Hans Jonas ante tecnologias de impacto civilizacional irreversível.',
        'Conclua recomendando uma moratória internacional vinculante sobre modificações genéticas reprodutivas humanas.'
      ],
      sampleResponse: "The biopolitical frontier of germline CRISPR-Cas9 genomic modification represents an irrevocable threshold in human civilization, fundamentally divorcing medicine from its historic somatic, therapeutic boundaries. While somatic gene therapies ethically rectify monogenic pathologies in consenting patients, heritable germline intervention instrumentalizes the human organism prior to existence, imposing non-consensual physiological parameters upon future generations. As philosopher Jürgen Habermas presciently warned, genetically programmed individuals are denied the foundational existential precondition of moral personhood: the unconditioned self-understanding of authoring one's own biography in symmetric reciprocity with one's forebears. Commodifying biological endowments transforms spontaneous natality into an industrial manufacturing process, threatening to codify capitalist market disparities into hereditary genetic castes. Under Hans Jonas's imperative of intergenerational responsibility, humanity must recognize that technological capability does not confer ethical legitimacy. An enforceable, comprehensive international moratorium on reproductive germline genome editing is an imperative safeguard to uphold the sacred autonomy of human dignity.",
      minWords: 140,
      keyPhrases: ["Irrevocable threshold in human civilization", "Heritable germline intervention instrumentalizes", "Unconditioned self-understanding of moral personhood", "Codify market disparities into genetic castes", "Comprehensive international moratorium"]
    },
    {
      id: 9,
      skill: 'writing',
      level: 'C1',
      title: 'Discurso de Política Monetária Internacional: O Fim do Petrodólar e a Geoeconomia da Energia',
      instruction: 'Analise as implicações estruturais da desvinculação entre contratos globais de petróleo e a moeda norte-americana.',
      writingContext: 'Alocução magistral no Fórum Financeiro de Basileia (BIS).',
      writingTask: 'Escreva um pronunciamento monetário de alto escalão (140 a 180 palavras) avaliando absorção de liquidez, déficits gêmeos e o privilégio exorbitante.',
      writingGuidelines: [
        'Utilize léxico macroeconômico avançado (exorbitant privilege, petrodollar recycling, capital account deficits).',
        'Analise a perda de demanda estrutural por títulos do tesouro americano (Treasuries) caso petromoedas concorrentes ganhem escala.',
        'Examine os riscos inflacionários para os Estados Unidos ao perder a capacidade de exportar sua inflação doméstica.',
        'Conclua delineando a transição para um sistema monetário internacional multipolar lastreado em cestas de commodities.'
      ],
      sampleResponse: "For five decades, the petrodollar recycling paradigm formed the bedrock of American monetary hegemony, underpinning Charles de Gaulle's famous critique of the 'exorbitant privilege'. By cementing global crude transactions exclusively in dollars, Washington secured structural global demand for its sovereign obligations, enabling protracted twin fiscal and trade deficits to be absorbed by international central banks. However, the weaponization of SWIFT interbank messaging and sovereign reserve asset freezes has accelerated structural geoeconomic fragmentation. Strategic energy producers are increasingly settling hydrocarbon deliveries in national currencies and gold-backed contracts, uncoupling global raw material commerce from dollar hegemony. As sovereign reserve managers diversify foreign assets to mitigate vulnerability to unilateral sanctions, the demand for United States Treasuries faces secular contraction, curbing Washington's capacity to externalize domestic inflation. The global monetary order is inexorably drifting toward a multipolar, commodity-anchored financial equilibrium wherein reserve currencies must derive legitimacy from productive economic solvency rather than coercive geopolitical leverage.",
      minWords: 140,
      keyPhrases: ["Petrodollar recycling paradigm", "Exorbitant privilege of dollar hegemony", "Twin fiscal and trade deficits", "Structural geoeconomic fragmentation", "Derived from productive economic solvency"]
    },
    {
      id: 10,
      skill: 'writing',
      level: 'C1',
      title: 'Ensaio de Teoria Psicanalítica: O Mal-Estar na Pós-Modernidade e o Imperativo do Gozo',
      instruction: 'Analise a transição do superego freudiano repressor para o superego pós-moderno que ordena o gozo compulsivo e a positividade tóxica.',
      writingContext: 'Revista Internacional de Psicanálise e Filosofia Social.',
      writingTask: 'Redija um ensaio analítico de elegância estilística e profundeza conceitual (140 a 180 palavras) integrando Freud, Lacan e Byung-Chul Han.',
      writingGuidelines: [
        'Contraste a era da repressão neurótica vitoriana descrita por Freud em ' + "'O Mal-Estar na Civilização' com o contemporâneo.",
        'Articule o conceito lacaniano do imperativo superegoico de gozar (' + "'Jouis!').",
        'Conecte com a ' + "'Sociedade do Cansaço' de Byung-Chul Han e a autoexploração sem coação externa.",
        'Conclua demonstrando que a depressão e o burnout contemporâneos são o avesso do fracasso em ser compulsivamente feliz e produtivo.'
      ],
      sampleResponse: "In 'Civilization and Its Discontents', Sigmund Freud diagnosed the neuroses of modernity as the psychological toll of instinctual renunciation: societal order demanded the psychic repression of erotic and aggressive drives beneath a castrating, punitive superego. In contemporary hyper-capitalism, however, the structure of psychological subjugation has executed a sinister inversion. As Jacques Lacan and contemporary cultural theorist Byung-Chul Han elucidate, the post-modern superego no longer commands ascetic prohibition; rather, it issues a tyrannical, inescapable injunction: 'Enjoy! Be happy! Maximize your potential!'. In the achievement society, coercion is no longer imposed by external disciplinary panopticons; the subject voluntarily auto-exploits under the intoxicating illusion of entrepreneurial self-realization. Burnout and clinical depression represent the catastrophic collateral damage of this positive tyranny—the systemic psychic collapse that occurs when the individual invariably fails to fulfill the impossible obligation of perpetual performance, unblemished wellness, and ceaseless algorithmic visibility.",
      minWords: 140,
      keyPhrases: ["Psychological toll of instinctual renunciation", "Sinister inversion of subjugation", "Inescapable injunction to enjoy", "Achievement society auto-exploits", "Collateral damage of positive tyranny"]
    },
    {
      id: 11,
      skill: 'writing',
      level: 'C1',
      title: 'Ensaio de Filosofia da Linguagem: O Segundo Wittgenstein e os Jogos de Linguagem',
      instruction: "Analise como o 'Tractatus' de Wittgenstein foi superado pelas 'Investigações Filosóficas', abandonando a teoria pictórica pela práxis contextual.",
      writingContext: 'Colóquio de Epistemologia e Filosofia Analítica da Mente.',
      writingTask: 'Escreva um ensaio filosófico com rigor léxico e conceitual (140 a 180 palavras) sobre a máxima ' + "'o significado é o uso'.",
      writingGuidelines: [
        'Explique a superação da ' + "'picture theory of language' do Tractatus Logico-Philosophicus.",
        'Apresente o conceito de ' + "'jogos de linguagem' (Sprachspiele) e formas de vida (Lebensformen).",
        'Demonstre que problemas filosóficos tradicionais são frequentemente ' + "'cãibras mentais' causadas pelo enfeitiçamento da inteligência pela linguagem.",
        'Conclua mostrando que o papel da filosofia é trazer as palavras de volta do seu uso metafísico para o cotidiano.'
      ],
      sampleResponse: "Ludwig Wittgenstein's intellectual trajectory represents one of the most radical self-subversions in philosophical history. In his early 'Tractatus Logico-Philosophicus', he posited the 'picture theory of language', asserting that propositions possess meaning solely by mapping isomorphic logical structures onto physical empirical facts. In his revolutionary 'Philosophical Investigations', however, Wittgenstein repudiated this crystalline, rigid atomism, recognizing that language does not mirror an independent metaphysical reality, but functions as a dynamic instrument embedded within social practices. Meaning is not an abstract Platonic referent; 'meaning is use' within contextual, rule-governed 'language-games' intertwined with communal 'forms of life'. Traditional metaphysical paradoxes—such as skepticism regarding external reality or the reification of the Cartesian ego—are not profound mysteries, but linguistic cramps generated when language 'goes on holiday'. The true therapeutic task of philosophy is not the erection of grand speculative systems, but bringing words back from their idle metaphysical abstractions into the messy richness of everyday human activity.",
      minWords: 140,
      keyPhrases: ["Radical self-subversion in philosophical history", "Picture theory of language", "Rule-governed language-games", "Communal forms of life", "Bringing words back from idle abstractions"]
    },
    {
      id: 12,
      skill: 'writing',
      level: 'C1',
      title: 'Tratado de Sociologia Urbana: A Espacialização da Desigualdade e o Urbanismo de Fortaleza',
      instruction: 'Analise a proliferação de condomínios fechados, enclaves fortificados e a segregação socioespacial segundo Teresa Caldeira e David Harvey.',
      writingContext: 'Revista Ibero-Americana de Estudos Urbanos e Metropolitanos.',
      writingTask: 'Elabore uma análise sociológica incisiva e teórica (140 a 180 palavras) sobre a militarização do espaço público e a erosão da cidadania.',
      writingGuidelines: [
        'Mobilize os conceitos de ' + "'cidade de muros' e 'enclaves fortificados' de Teresa Caldeira.",
        'Analise a mercantilização e privatização de espaços públicos comuns.',
        'Discuta como a paranoia securitária das elites consagra a segregação de classe e raça na paisagem urbana.',
        'Conclua defendendo o direito à cidade (Right to the City) como imperativo democrático inegociável.'
      ],
      sampleResponse: "Contemporary metropolitan development has become the spatial crystallisation of extreme socioeconomic polarization. As urban theorists Teresa Caldeira and David Harvey illuminate, the proliferation of gated residential enclaves, private surveillance perimeters, and privatized commercial malls manifests an insidious 'architecture of fear'. Wealthy elites withdraw from heterogeneous public commons into fortified, panoptic sanctuaries, using high-tech security apparatuses and exclusionary private policing to insulate themselves from structural poverty and the racialized underclasses. This urban militarization does not resolve criminality; it fundamentally destroys democratic co-existence, commodifying urban spatial mobility and converting public streets into neglected, hostile conduits. As social interaction across class divides is architecturally eliminated, civic empathy atrophies, replaced by pervasive paranoia and reactionary segregationism. To prevent cities from disintegrating into neo-feudal carceral archipelagos, we must reclaim David Harvey's radical 'Right to the City'—reasserting public stewardship over urban planning, prioritizing inclusive pedestrian realms, and dismantling spatial barriers that codify inequality into concrete.",
      minWords: 140,
      keyPhrases: ["Spatial crystallisation of socioeconomic polarization", "Insidious architecture of fear", "Fortified panoptic sanctuaries", "Commodifying urban spatial mobility", "Radical Right to the City"]
    },
    {
      id: 13,
      skill: 'writing',
      level: 'C1',
      title: 'Ensaio de Crítica de Arte Contemporânea: O Fetiche da Mercadoria no Mercado de Artes Plásticas',
      instruction: 'Discuta como as feiras internacionais de arte (Art Basel) e os leilões transformaram obras plásticas em instrumentos de elisão fiscal e ativos especulativos.',
      writingContext: 'Ensaio para a revista October de Teoria e Crítica de Arte.',
      writingTask: 'Escreva um ensaio crítico de verve cortante e densidade estética (140 a 180 palavras) sobre a financeirização da arte contemporânea.',
      writingGuidelines: [
        'Discuta a transformação de objetos artísticos em instrumentos de hedge patrimonial e ' + "'freeport storage'.",
        'Conecte com a teoria do fetichismo da mercadoria de Karl Marx.',
        'Analise como a especulação galopante privilegia marcas de artistas-celebridade em detrimento do risco conceitual e disrupção estética.',
        'Conclua refletindo sobre como a arte genuína pode resistir à captura do capital financeiro.'
      ],
      sampleResponse: "The contemporary upper-echelon art market has undergone an aggressive financialization, degenerating from an arena of aesthetic contemplation and critical discourse into an opaque asset class optimized for speculative capital preservation, tax optimization, and wealth obfuscation. At mega-fairs like Art Basel and within high-security tax-free bonded warehouses ('freeports'), artworks circulate as securitized collateral ciphers—physically unseen, vacuum-sealed in crates, yet leveraged on investment banking balance sheets. This process represents the ultimate hyper-real culmination of Marxist commodity fetishism: the artwork's tangible materiality and visceral socio-political critique are completely hollowed out, superseded entirely by its speculative auction liquidity and transactional brand prestige. Blue-chip galleries manufacture homogenized, risk-averse creative commodities tailored specifically to the speculative portfolios of billionaire collectors. If contemporary artistic praxis is to retain genuine emancipatory resistance, artists must deliberately sabotage commodification—embracing ephemeral, participatory, and non-commercial interventions that stubbornly resist fiscal capture and refuse conversion into billionaire speculative wallpaper.",
      minWords: 140,
      keyPhrases: ["Aggressive financialization of art", "Securitized collateral ciphers", "Marxist commodity fetishism", "Visceral socio-political critique hollowed out", "Sabotage commodification through ephemeral praxis"]
    },
    {
      id: 14,
      skill: 'writing',
      level: 'C1',
      title: 'Tratado de Neurobiologia da Consciência: O Problema Difícil de Chalmers (Hard Problem of Consciousness)',
      instruction: 'Analise por que o problema difícil da consciência resiste a explicações puramente mecanicistas e computacionais.',
      writingContext: 'Simpósio Internacional de Filosofia da Mente e Ciência Cognitiva de Oxford.',
      writingTask: 'Elabore um texto filosófico-científico de precisão extrema (140 a 180 palavras) contrastando funções cognitivas com a experiência fenomênica subjetiva.',
      writingGuidelines: [
        'Enuncie a distinção crucial de David Chalmers entre ' + "'easy problems' (processamento de informação) e o 'hard problem' (qualia).",
        'Desmonte a premissa fisicalista ingênua de que mapear sinapses explica por que o azul parece azul ou por que a dor dói.',
        'Mencione a experiência de pensamento de Mary a super-cientista das cores (Frank Jackson) ou zumbis filosóficos.',
        'Conclua avaliando o panpsiquismo ou dualismo de propriedades como fronteiras conceituais legítimas.'
      ],
      sampleResponse: "David Chalmers's formulation of the 'Hard Problem of Consciousness' fundamentally demarcates cognitive functionalism from phenomenological experience. The so-called 'easy problems' of neuroscience—explaining sensory signal integration, memory retrieval, attention allocation, and motor verbalization—are computational problems that standard neurobiological architectures will eventually resolve. The truly intractable enigma, however, is why these electro-chemical computational processes should be accompanied by subjective, inner qualitative experience ('qualia'). Why does the photon stimulation of retinal rhodopsin generate the qualitative, vivid experience of crimson, rather than dark, subconscious computation? As Frank Jackson's celebrated thought experiment of Mary the color scientist compellingly illustrates, complete physical and propositional knowledge of neurochemistry does not bridge the unbridgeable explanatory chasm to subjective feeling. Dismissing consciousness as an epiphenomenal illusion merely evades the crisis. Resolving the mystery of subjective awareness demands expanding scientific ontology, seriously evaluating whether consciousness represents a fundamental, irreducible property of the cosmos alongside mass, charge, and spacetime.",
      minWords: 140,
      keyPhrases: ["Hard Problem of Consciousness", "Cognitive functionalism from phenomenological experience", "Inner qualitative experience (qualia)", "Unbridgeable explanatory chasm", "Fundamental irreducible property of the cosmos"]
    },
    {
      id: 15,
      skill: 'writing',
      level: 'C1',
      title: 'Manifesto de Descolonização Epistêmica: Para Além do Eurocentrismo Universitário',
      instruction: 'Articule a necessidade de descolonizar as epistemologias acadêmicas segundo Boaventura de Sousa Santos e Walter Mignolo.',
      writingContext: 'Conferência Magna da Associação de Universidades do Hemisfério Sul.',
      writingTask: 'Redija um manifesto acadêmico vibrante, descolonizador e teórico (140 a 180 palavras) sobre as Epistemologias do Sul e ecologia de saberes.',
      writingGuidelines: [
        'Mobilize os conceitos de ' + "'epistemicídio' e 'colonialidade do saber' (Mignolo/Quijano).",
        'Critique a universalização do sujeito iluminista branco e europeu como o único produtor válido de ciência neutra.',
        "Apresente a 'ecologia de saberes' de Boaventura de Sousa Santos como alternativa pluriversal e emancipatória.",
        'Conclua convocando a academia global a abraçar saberes ancestrais, indígenas e afrodiaspóricos como epistemologias rigorosas.'
      ],
      sampleResponse: "For centuries, the Western academy has masqueraded its localized geopolitical vantage point as universal, objective rationality, systematically perpetrating what sociologist Boaventura de Sousa Santos condemns as 'epistemicide'—the violent delegitimization, erasure, and subjugation of non-Western cosmologies, indigenous sciences, and Afro-diasporic philosophies. Under the coloniality of knowledge, modern epistemic authority was organized around a fictitious Eurocentric Cartesian detachment, treating ancestral wisdom as superstitious folklore while appropriating traditional ecological pharmacology for corporate patents. True decolonization demands far more than nominal diversity tokenism; it requires dismantling the monoculture of scientific knowledge through an expansive 'ecology of knowledges'. This pluriversal paradigm recognizes that multiple, heterogeneous epistemological traditions must converse in horizontal, reciprocal dialogue. Decolonizing the contemporary university is not an anti-rationalist retreat; it is the radical democratization of human inquiry, welcoming silenced ancestral epistemologies to co-construct transformative solutions for ecological survival, communal healing, and civilizational emancipation.",
      minWords: 140,
      keyPhrases: ["Localized geopolitical vantage point as universal", "Violent delegitimization and epistemicide", "Coloniality of knowledge", "Expansive ecology of knowledges", "Radical democratization of human inquiry"]
    }
  ]
};
