import type { Faq } from './especialidades';

export type Exame = {
  slug: string;
  nome: string;
  titulo: string; // H1
  pedido: string;
  resumo: string;
  paraQue: string[];
  passos: string[];
  preparo: string[];
  especialidades: string[];
  faqs: Faq[];
  foto?: string;
};

export const exames: Exame[] = [
  {
    slug: 'ressonancia-magnetica',
    nome: 'Ressonância magnética',
    titulo: 'Ressonância magnética em Bom Jesus-PI',
    pedido: 'uma ressonância magnética',
    foto: '/img/ressonancia.webp',
    resumo:
      'A Clínica Dr. Ricardo Xavier tem sala de ressonância magnética na sede, na Praça 7 de Setembro, em Bom Jesus. Para marcar, mande a foto do pedido médico pelo WhatsApp. A recepção responde com data, horário e preparo.',
    paraQue: [
      'Coluna, joelho, ombro e outras articulações',
      'Crânio e cérebro',
      'Abdome e pelve',
      'Outras regiões, conforme o pedido do seu médico',
    ],
    passos: [
      'Mande a foto do pedido médico pelo WhatsApp.',
      'A recepção confirma data, horário e se há preparo.',
      'No dia, você responde a um questionário de segurança e tira objetos de metal.',
      'Você fica deitado, parado, dentro do aparelho. O barulho é normal e você recebe proteção para os ouvidos.',
      'O laudo sai no portal de resultados de imagem.',
    ],
    preparo: [
      'Leve o pedido médico, documento com foto e exames anteriores da mesma região.',
      'Avise se tem marca-passo, clipe de aneurisma, implante no ouvido, estilhaço de metal ou se está grávida.',
      'Alguns exames pedem jejum ou contraste. A recepção informa quando for o caso.',
      'Tem medo de lugar fechado? Avise ao marcar.',
    ],
    especialidades: ['ortopedia-traumatologia', 'neurologia', 'clinica-medica'],
    faqs: [
      { p: 'Precisa de pedido médico?', r: 'Sim. A ressonância só é feita com pedido de um médico ou dentista.' },
      { p: 'Quanto tempo dura?', r: 'Depende da região examinada. A recepção informa o tempo previsto ao marcar.' },
      { p: 'Quem tem prótese de metal pode fazer?', r: 'Depende do tipo de material. Informe ao marcar e leve o documento da prótese, se tiver.' },
      { p: 'A clínica atende convênio na ressonância?', r: 'Mande o nome do plano pelo WhatsApp. A recepção confirma cobertura e autorização.' },
    ],
  },
  {
    slug: 'exames-de-imagem',
    nome: 'Exames de imagem',
    titulo: 'Exames de imagem em Bom Jesus-PI',
    pedido: 'um exame de imagem',
    resumo:
      'Além da ressonância magnética, a clínica faz outros exames de imagem na sede, em Bom Jesus. Mande a foto do pedido médico pelo WhatsApp para confirmar se o seu exame é feito aqui e qual o preparo.',
    paraQue: [
      'Investigar dor ou alteração apontada pelo médico',
      'Acompanhar a gestação',
      'Check-up e acompanhamento de doenças',
    ],
    passos: [
      'Mande a foto do pedido médico pelo WhatsApp.',
      'A recepção confirma se o exame é feito na clínica, a data e o preparo.',
      'Faça o exame no dia marcado.',
      'O laudo fica disponível no portal de resultados de imagem.',
    ],
    preparo: [
      'Cada exame tem um preparo. Alguns pedem jejum, outros bexiga cheia.',
      'Siga a orientação que a recepção envia ao marcar.',
      'Leve pedido médico, documento e exames anteriores.',
    ],
    especialidades: ['ginecologia', 'obstetricia', 'clinica-medica'],
    faqs: [
      { p: 'Quais exames de imagem vocês fazem?', r: 'Mande o pedido pelo WhatsApp. A recepção confirma na hora se o exame é feito na clínica.' },
      { p: 'Onde pego o laudo?', r: 'No portal de resultados de imagem, com o login do protocolo que você recebe no dia.' },
    ],
  },
  {
    slug: 'exames-laboratoriais',
    nome: 'Exames de sangue e laboratório',
    titulo: 'Exames de sangue e laboratório em Bom Jesus-PI',
    pedido: 'exames de laboratório (sangue/urina)',
    resumo:
      'O laboratório da Clínica Dr. Ricardo Xavier faz exames de sangue, urina e fezes. Você pode colher na sede, no Centro de Bom Jesus, ou em um dos postos de coleta em Bom Jesus, Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins.',
    paraQue: [
      'Check-up: hemograma, glicose, colesterol',
      'Exames do pré-natal',
      'Acompanhamento de diabetes, rins, tireoide',
      'Exames pedidos por qualquer especialidade',
    ],
    passos: [
      'Mande a foto do pedido pelo WhatsApp para saber o preparo.',
      'Vá à sede ou ao posto de coleta mais perto.',
      'A coleta é rápida.',
      'O resultado sai no portal do laboratório.',
    ],
    preparo: [
      'Alguns exames pedem jejum. Outros, não. Confirme para o seu pedido.',
      'Beba água normalmente, a menos que a orientação diga o contrário.',
      'Leve pedido médico e documento com foto.',
    ],
    especialidades: ['clinica-medica', 'obstetricia', 'nefrologia'],
    faqs: [
      { p: 'Todo exame de sangue precisa de jejum?', r: 'Não. Hemograma, em geral, não pede. Glicose costuma pedir. Confirme o preparo para o seu pedido pelo WhatsApp.' },
      { p: 'Posso colher perto de casa?', r: 'Sim. Veja os postos de coleta em Bom Jesus, Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins.' },
      { p: 'Quem é a responsável técnica do laboratório?', r: 'Drª Malba Xavier, farmacêutica, CRF-PI 0458.' },
    ],
  },
  {
    slug: 'exames-cardiologicos',
    nome: 'Exames cardiológicos',
    titulo: 'Exames do coração em Bom Jesus-PI',
    pedido: 'um exame cardiológico',
    resumo:
      'A clínica faz exames cardiológicos na sede, em Bom Jesus, e tem atendimento em cardiologia no mesmo endereço. Mande o pedido pelo WhatsApp para confirmar o exame e o preparo.',
    paraQue: [
      'Avaliar pressão alta e ritmo do coração',
      'Liberação para atividade física ou cirurgia',
      'Acompanhar quem já tem doença cardíaca',
    ],
    passos: [
      'Mande a foto do pedido médico pelo WhatsApp.',
      'A recepção confirma o exame, a data e o preparo.',
      'Faça o exame e retorne com o resultado ao seu médico.',
    ],
    preparo: [
      'Use roupa confortável.',
      'Leve a lista de remédios que usa.',
      'Siga o preparo que a recepção enviar.',
    ],
    especialidades: ['cardiologia', 'clinica-medica'],
    faqs: [
      { p: 'Quais exames do coração vocês fazem?', r: 'Mande o pedido pelo WhatsApp e a recepção confirma se o exame é feito na clínica.' },
      { p: 'Dor no peito agora?', r: 'Não espere exame. Vá à urgência 24h ou ligue 192.' },
    ],
  },
  {
    slug: 'exames-ginecologicos',
    nome: 'Exames ginecológicos',
    titulo: 'Exames ginecológicos em Bom Jesus-PI',
    pedido: 'um exame ginecológico',
    resumo:
      'A clínica faz exames ginecológicos na sede, em Bom Jesus, junto com a consulta de ginecologia e obstetrícia. Mande o pedido pelo WhatsApp para confirmar data e preparo.',
    paraQue: [
      'Prevenção do câncer do colo do útero (preventivo)',
      'Investigar corrimento, dor ou sangramento',
      'Acompanhar a gestação',
    ],
    passos: [
      'Mande a foto do pedido médico pelo WhatsApp.',
      'A recepção indica o melhor dia do ciclo, quando for o caso.',
      'O exame é feito com privacidade.',
    ],
    preparo: [
      'Para o preventivo, o ideal é estar fora do período menstrual.',
      'Evite relação sexual, duchas e cremes vaginais nos dias anteriores, conforme a orientação recebida.',
    ],
    especialidades: ['ginecologia', 'obstetricia'],
    faqs: [
      { p: 'De quanto em quanto tempo fazer o preventivo?', r: 'Quem define é o seu médico, conforme idade e resultados anteriores.' },
      { p: 'Posso fazer o preventivo grávida?', r: 'Pode, com orientação do obstetra.' },
    ],
  },
  {
    slug: 'exames-endoscopicos',
    nome: 'Exames endoscópicos',
    titulo: 'Endoscopia e exames endoscópicos em Bom Jesus-PI',
    pedido: 'um exame endoscópico',
    resumo:
      'A clínica faz exames endoscópicos em Bom Jesus. Esses exames pedem preparo específico: mande o pedido pelo WhatsApp e a recepção envia as orientações.',
    paraQue: [
      'Investigar azia, dor no estômago ou dificuldade para engolir',
      'Investigar sangramento ou mudança do hábito intestinal',
      'Prevenção, conforme indicação médica',
    ],
    passos: [
      'Mande a foto do pedido médico pelo WhatsApp.',
      'Receba o preparo por escrito.',
      'No dia, venha com acompanhante: pode haver sedação.',
    ],
    preparo: [
      'Jejum e outras orientações variam conforme o exame.',
      'Informe remédios que usa, principalmente para afinar o sangue e para diabetes.',
      'Traga um acompanhante maior de idade.',
    ],
    especialidades: ['coloproctologia', 'clinica-medica'],
    faqs: [
      { p: 'Preciso de acompanhante?', r: 'Se houver sedação, sim. Você não poderá dirigir no dia.' },
      { p: 'Quais exames endoscópicos vocês fazem?', r: 'Mande o pedido pelo WhatsApp e a recepção confirma.' },
    ],
  },
];

export const outrosExames = [
  'neurológicos',
  'pulmonares',
  'oftalmológicos',
  'fonoaudiológicos',
  'ortopédicos',
  'urológicos',
  'de medicina do trabalho',
];

export const exameBySlug = (s: string) => exames.find((e) => e.slug === s);
