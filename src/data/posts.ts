import type { Faq } from './especialidades';

export type Post = {
  slug: string;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  resposta: string;
  corpo: string; // HTML
  tabela?: { cab: [string, string]; linhas: [string, string][] };
  faqs: Faq[];
  relacionados: { href: string; nome: string }[];
  pedido: string;
};

const data = '2026-09-28';

export const posts: Post[] = [
  {
    slug: 'ressonancia-magnetica-em-bom-jesus-como-marcar',
    titulo: 'Ressonância magnética em Bom Jesus: como marcar e o que levar',
    descricao: 'Passo a passo para marcar ressonância magnética em Bom Jesus-PI: pedido médico, preparo, metal no corpo e onde ver o laudo.',
    categoria: 'Exames',
    data,
    resposta:
      'Em Bom Jesus-PI, a ressonância magnética é feita na Clínica Dr. Ricardo Xavier, na Praça 7 de Setembro, 165. Para marcar, mande a foto do pedido médico pelo WhatsApp (89) 99987-0009. A recepção responde com data, horário e preparo.',
    corpo: `
<h2>O que você precisa para marcar</h2>
<p>Só o pedido médico. A ressonância não é feita sem ele. Tire uma foto nítida do pedido inteiro, com o nome do exame e a região do corpo, e mande pelo WhatsApp.</p>
<p>Se o exame for por convênio, mande também o nome do plano. A recepção confirma se precisa de autorização.</p>
<h2>O que levar no dia</h2>
<ul><li>Pedido médico original</li><li>Documento com foto</li><li>Exames anteriores da mesma região (ressonância, tomografia, ultrassom)</li><li>Carteirinha do convênio, se for o caso</li></ul>
<h2>Metal no corpo: avise antes</h2>
<p>O aparelho de ressonância usa um ímã forte. Por isso a equipe pergunta sobre metal no corpo antes do exame. Avise ao marcar se você tem marca-passo, clipe de aneurisma, implante no ouvido, estilhaço de metal, prótese ou se está grávida. Em muitos casos o exame pode ser feito, mas a equipe precisa saber antes.</p>
<h2>Como é o exame</h2>
<p>Você fica deitado e parado dentro do aparelho. Ele faz barulho alto, e você recebe proteção para os ouvidos. Se tem medo de lugar fechado, avise ao marcar.</p>
<h2>Onde sai o laudo</h2>
<p>No <a href="/resultados">portal de resultados de imagem</a>, com o login do protocolo que você recebe no dia.</p>`,
    faqs: [
      { p: 'Preciso de jejum para ressonância?', r: 'Depende do exame. Alguns pedem jejum, principalmente quando há contraste. A recepção informa ao marcar.' },
      { p: 'Moro em outra cidade. Consigo fazer no mesmo dia da consulta?', r: 'Converse com a recepção pelo WhatsApp. Ela tenta encaixar consulta e exame no mesmo dia quando possível.' },
    ],
    relacionados: [
      { href: '/exames/ressonancia-magnetica', nome: 'Ressonância magnética' },
      { href: '/especialidades/ortopedia-traumatologia', nome: 'Ortopedia e Traumatologia' },
      { href: '/especialidades/neurologia', nome: 'Neurologia' },
    ],
    pedido: 'uma ressonância magnética',
  },
  {
    slug: 'exame-de-sangue-precisa-de-jejum',
    titulo: 'Exame de sangue precisa de jejum? Veja quais pedem',
    descricao: 'Quais exames de sangue pedem jejum, quanto tempo e o que pode beber. Coleta em Bom Jesus, Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins.',
    categoria: 'Laboratório',
    data,
    resposta:
      'Nem todo exame de sangue pede jejum. O hemograma, em geral, não pede. A glicose costuma pedir 8 horas. Para colesterol e triglicerídeos, depende do pedido e do laboratório. Confirme o preparo do seu pedido pelo WhatsApp antes de ir.',
    tabela: {
      cab: ['Exame', 'Jejum (em geral)'],
      linhas: [
        ['Hemograma', 'Não precisa'],
        ['Glicose', '8 horas'],
        ['Colesterol e triglicerídeos', 'Depende do pedido. Confirme com o laboratório'],
        ['Urina (EAS)', 'Não precisa. Colha a primeira urina da manhã, se orientado'],
        ['Vários exames no mesmo pedido', 'Vale o maior jejum pedido'],
      ],
    },
    corpo: `
<h2>Durante o jejum, pode beber água?</h2>
<p>Sim, água pode, a menos que a orientação diga o contrário. Café, suco, chá, leite, chiclete e bala quebram o jejum.</p>
<h2>E os remédios de uso contínuo?</h2>
<p>Na maioria dos casos você toma normalmente. Mas pergunte ao seu médico, principalmente sobre remédios para diabetes e para a tireoide.</p>
<h2>Jejum demais também atrapalha</h2>
<p>Ficar muitas horas sem comer além do pedido pode alterar alguns resultados. Siga o tempo indicado.</p>
<h2>Onde colher</h2>
<p>Na sede, na Praça 7 de Setembro, em Bom Jesus, ou em um dos <a href="/postos-de-coleta">postos de coleta</a>: Bom Jesus, Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins. O resultado sai no <a href="/resultados">portal do laboratório</a>.</p>`,
    faqs: [
      { p: 'Posso tomar café antes do exame de sangue?', r: 'Se o exame pede jejum, não. Café quebra o jejum. Só água.' },
      { p: 'Criança também precisa de jejum?', r: 'Depende do exame e da idade. Pergunte o preparo pelo WhatsApp antes.' },
    ],
    relacionados: [
      { href: '/exames/exames-laboratoriais', nome: 'Exames de laboratório' },
      { href: '/postos-de-coleta', nome: 'Postos de coleta' },
      { href: '/especialidades/clinica-medica', nome: 'Clínica Médica' },
    ],
    pedido: 'exames de laboratório (sangue/urina)',
  },
  {
    slug: 'pre-natal-em-bom-jesus-quando-comecar',
    titulo: 'Pré-natal em Bom Jesus: quando começar e o que esperar',
    descricao: 'Quando começar o pré-natal, o que acontece na primeira consulta e quais exames costumam ser pedidos. Consulta e exames em Bom Jesus-PI.',
    categoria: 'Gestação',
    data,
    resposta:
      'Comece o pré-natal assim que o teste der positivo. O Ministério da Saúde recomenda a primeira consulta até a 12ª semana. Em Bom Jesus, a Clínica Dr. Ricardo Xavier faz consulta de obstetrícia, exames de sangue e de imagem no mesmo endereço.',
    corpo: `
<h2>Na primeira consulta</h2>
<ul><li>O obstetra calcula a idade da gestação pela data da última menstruação.</li><li>Pergunta sobre saúde, gestações anteriores e remédios.</li><li>Mede pressão e peso.</li><li>Pede os exames da primeira fase.</li></ul>
<h2>Exames ao longo da gestação</h2>
<p>Em cada trimestre o médico pede exames de sangue, urina e de imagem. Você colhe o sangue na sede ou em um dos <a href="/postos-de-coleta">postos de coleta</a>.</p>
<h2>Leve para a consulta</h2>
<ul><li>Teste de gravidez ou exame de sangue positivo</li><li>Cartão da gestante, se já tiver</li><li>Lista de remédios e vitaminas</li></ul>
<h2>Quando ir direto à urgência</h2>
<p>Sangramento, perda de líquido, dor forte na barriga, febre, dor de cabeça forte com visão embaçada ou bebê mexendo menos: vá à urgência 24h do Hospital Maternidade Dr. Ricardo Xavier, no mesmo prédio da clínica.</p>`,
    faqs: [
      { p: 'Quantas consultas de pré-natal são feitas?', r: 'O obstetra monta o calendário. As consultas ficam mais frequentes perto do parto.' },
      { p: 'Posso fazer o pré-natal e o parto no mesmo lugar?', r: 'O Hospital Maternidade funciona no mesmo prédio. Converse com seu obstetra e com a recepção.' },
    ],
    relacionados: [
      { href: '/especialidades/obstetricia', nome: 'Obstetrícia' },
      { href: '/exames/exames-laboratoriais', nome: 'Exames de laboratório' },
      { href: '/exames/exames-de-imagem', nome: 'Exames de imagem' },
    ],
    pedido: 'uma consulta de pré-natal (obstetrícia)',
  },
  {
    slug: 'pressao-alta-quando-procurar-cardiologista',
    titulo: 'Pressão alta: quando procurar um cardiologista',
    descricao: 'Sinais de que é hora de consultar um cardiologista por pressão alta, o que levar e quais exames costumam ser pedidos. Cardiologia em Bom Jesus-PI.',
    categoria: 'Coração',
    data,
    resposta:
      'Procure o cardiologista se a pressão fica em 14 por 9 ou mais em medidas repetidas, se não controla com o remédio atual, ou se vem junto com falta de ar, palpitação ou inchaço. Dor forte no peito é urgência: ligue 192.',
    corpo: `
<h2>Pressão alta costuma não dar sintoma</h2>
<p>Muita gente descobre por acaso, numa medida na farmácia ou num check-up. Por isso vale medir de vez em quando, mesmo se sentindo bem.</p>
<h2>Sinais para marcar consulta</h2>
<ul><li>Pressão 14 por 9 ou mais em dias diferentes</li><li>Já toma remédio e a pressão continua alta</li><li>Falta de ar ao esforço, cansaço fora do comum</li><li>Coração acelerado ou falhando</li><li>Inchaço nas pernas</li><li>Diabetes, colesterol alto ou histórico de infarto na família</li></ul>
<h2>O que levar</h2>
<p>Anote as medidas de pressão dos últimos dias, com data e hora. Leve os remédios que usa e exames antigos.</p>
<h2>Exames que podem ser pedidos</h2>
<p>O cardiologista pode pedir exames de sangue e <a href="/exames/exames-cardiologicos">exames do coração</a>. Muitos são feitos na própria clínica, em Bom Jesus.</p>`,
    faqs: [
      { p: 'Posso parar o remédio quando a pressão normaliza?', r: 'Não pare por conta própria. Fale com o seu médico.' },
      { p: 'Clínico geral pode tratar pressão alta?', r: 'Pode. O cardiologista entra quando a pressão é difícil de controlar ou há outros problemas do coração.' },
    ],
    relacionados: [
      { href: '/especialidades/cardiologia', nome: 'Cardiologia' },
      { href: '/exames/exames-cardiologicos', nome: 'Exames cardiológicos' },
      { href: '/especialidades/clinica-medica', nome: 'Clínica Médica' },
    ],
    pedido: 'uma consulta de cardiologia',
  },
  {
    slug: 'consulta-e-exames-em-bom-jesus-vindo-de-outra-cidade',
    titulo: 'Vem de outra cidade? Como fazer consulta e exames em Bom Jesus no mesmo dia',
    descricao: 'Guia para quem vem de Alvorada do Gurguéia, Colônia do Gurguéia, Eliseu Martins e região fazer consulta e exames na Clínica Dr. Ricardo Xavier.',
    categoria: 'Atendimento',
    data,
    resposta:
      'Avise pelo WhatsApp (89) 99987-0009 que você vem de outra cidade e mande a foto dos pedidos. A recepção tenta encaixar consulta e exames no mesmo dia. Exame de sangue você pode colher no posto da sua cidade.',
    corpo: `
<h2>Antes de sair de casa</h2>
<ul><li>Mande pelo WhatsApp a especialidade que quer e a foto de todos os pedidos de exame.</li><li>Diga de qual cidade vem e o horário que chega.</li><li>Pergunte o preparo de cada exame (jejum, bexiga cheia).</li></ul>
<h2>Colete perto de casa</h2>
<p>A clínica tem <a href="/postos-de-coleta">postos de coleta</a> em Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins. Você colhe o sangue lá e vê o resultado no <a href="/resultados">portal</a>, sem viajar.</p>
<h2>No dia</h2>
<ul><li>Documento com foto, pedidos originais e exames antigos</li><li>Carteirinha do convênio, se tiver</li><li>Lanche para depois dos exames em jejum</li><li>Acompanhante, se houver sedação</li></ul>
<h2>Onde fica</h2>
<p>Praça 7 de Setembro, 165, Centro, Bom Jesus-PI. No mesmo prédio funciona o Hospital Maternidade Dr. Ricardo Xavier.</p>`,
    faqs: [
      { p: 'Resultado de exame chega na minha cidade?', r: 'Não precisa: o resultado sai no portal online. Você acessa pelo celular.' },
      { p: 'Posso marcar para outra pessoa?', r: 'Pode. Mande o nome do paciente e os pedidos dele.' },
    ],
    relacionados: [
      { href: '/postos-de-coleta', nome: 'Postos de coleta' },
      { href: '/agendar', nome: 'Agendar' },
      { href: '/exames', nome: 'Exames' },
    ],
    pedido: 'consulta e exames no mesmo dia (venho de outra cidade)',
  },
  {
    slug: 'pinta-que-mudou-quando-procurar-dermatologista',
    titulo: 'Pinta que mudou: quando procurar o dermatologista',
    descricao: 'A regra do ABCDE para observar pintas e quando marcar consulta com dermatologista em Bom Jesus-PI.',
    categoria: 'Pele',
    data,
    resposta:
      'Procure o dermatologista se uma pinta mudou de tamanho, cor ou formato, coça, sangra ou apareceu depois dos 30 anos e é diferente das outras. A regra do ABCDE ajuda a observar.',
    tabela: {
      cab: ['Letra', 'O que observar'],
      linhas: [
        ['A · Assimetria', 'Uma metade diferente da outra'],
        ['B · Bordas', 'Bordas irregulares ou borradas'],
        ['C · Cor', 'Mais de uma cor na mesma pinta'],
        ['D · Diâmetro', 'Maior que 6 mm (a borracha do lápis)'],
        ['E · Evolução', 'Mudou de tamanho, cor ou formato'],
      ],
    },
    corpo: `
<h2>Olhe a pele uma vez por mês</h2>
<p>Use um espelho grande e um pequeno para ver costas e couro cabeludo. Tire fotos das pintas para comparar depois.</p>
<h2>Proteja a pele do sol</h2>
<p>No sertão do Piauí o sol é forte o ano todo. Use protetor, chapéu e roupa de manga, principalmente quem trabalha na roça.</p>
<h2>Na consulta</h2>
<p>O dermatologista examina as pintas, muitas vezes com um aparelho de lente, e diz se precisa acompanhar ou retirar.</p>`,
    faqs: [
      { p: 'Toda pinta precisa ser retirada?', r: 'Não. A maioria é benigna. O médico decide o que acompanhar e o que retirar.' },
      { p: 'Ferida que não cicatriza no rosto é preocupante?', r: 'Ferida que não fecha em quatro semanas deve ser avaliada por um dermatologista.' },
    ],
    relacionados: [
      { href: '/especialidades/dermatologia', nome: 'Dermatologia' },
      { href: '/agendar', nome: 'Agendar' },
    ],
    pedido: 'uma consulta de dermatologia',
  },
];
