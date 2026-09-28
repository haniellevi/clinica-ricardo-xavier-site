export type Faq = { p: string; r: string };
export type Especialidade = {
  slug: string;
  nome: string;
  /** complemento da mensagem: "Quero agendar ___" */
  pedido: string;
  schema?: string; // schema.org MedicalSpecialty
  medica: boolean;
  resumo: string;
  quando: string[];
  comoE: string[];
  exames: string[];
  faqs: Faq[];
  responsavel?: boolean;
};

const faqConvenio: Faq = {
  p: 'A clínica atende meu convênio?',
  r: 'Mande o nome do seu plano pelo WhatsApp (89) 99987-0009. A recepção confirma se atende e como funciona a autorização.',
};

export const especialidades: Especialidade[] = [
  {
    slug: 'ginecologia',
    nome: 'Ginecologia',
    pedido: 'uma consulta de ginecologia',
    schema: 'Gynecologic',
    medica: true,
    responsavel: true,
    resumo:
      'O ginecologista cuida da saúde da mulher em todas as fases: da primeira consulta na adolescência à menopausa. Na Clínica Dr. Ricardo Xavier, em Bom Jesus, a consulta e os exames ginecológicos ficam no mesmo endereço.',
    quando: [
      'Consulta de rotina uma vez por ano, mesmo sem queixa',
      'Menstruação irregular, muito forte ou com muita cólica',
      'Corrimento, coceira ou ardor',
      'Dúvidas sobre anticoncepcional ou planejamento da gravidez',
      'Sintomas da menopausa, como calorão e insônia',
      'Hora de fazer o preventivo (papanicolau)',
    ],
    comoE: [
      'Você marca pelo WhatsApp e escolhe o melhor período.',
      'Na consulta, a médica ou o médico pergunta sobre ciclo, histórico e queixas.',
      'O exame ginecológico é feito com privacidade e você pode pedir para parar a qualquer momento.',
      'Se precisar de exames, muitos podem ser marcados aqui mesmo.',
    ],
    exames: ['exames-ginecologicos', 'exames-de-imagem', 'exames-laboratoriais'],
    faqs: [
      { p: 'Posso fazer consulta menstruada?', r: 'A conversa, sim. Para o preventivo, o ideal é estar fora do período menstrual. Se estiver menstruada no dia, avise a recepção para remarcar o exame se for o caso.' },
      { p: 'Com que idade fazer a primeira consulta?', r: 'Em geral, entre a primeira menstruação e o início da vida sexual, ou antes se houver alguma queixa.' },
      faqConvenio,
    ],
  },
  {
    slug: 'obstetricia',
    nome: 'Obstetrícia',
    pedido: 'uma consulta de pré-natal (obstetrícia)',
    schema: 'Obstetric',
    medica: true,
    responsavel: true,
    resumo:
      'O obstetra acompanha a gestação do teste positivo ao pós-parto. Em Bom Jesus, a clínica reúne consulta de pré-natal, exames e, no mesmo prédio, o Hospital Maternidade Dr. Ricardo Xavier.',
    quando: [
      'Teste de gravidez positivo: marque a primeira consulta logo',
      'Planejando engravidar e quer se preparar',
      'Consultas de pré-natal ao longo dos três trimestres',
      'Revisão depois do parto',
    ],
    comoE: [
      'Na primeira consulta, o obstetra calcula a idade da gestação e pede os exames iniciais.',
      'As consultas seguem um calendário que fica mais frequente perto do parto.',
      'Exames de sangue e de imagem são pedidos em cada fase.',
      'Sangramento, perda de líquido ou dor forte: vá direto à urgência 24h.',
    ],
    exames: ['exames-laboratoriais', 'exames-de-imagem'],
    faqs: [
      { p: 'Quando começar o pré-natal?', r: 'Assim que souber da gravidez. Quanto antes começar, mais cedo os exames da primeira fase são feitos.' },
      { p: 'O parto pode ser no mesmo lugar?', r: 'O Hospital Maternidade Dr. Ricardo Xavier funciona no mesmo prédio da clínica. Converse com a recepção e com o seu obstetra sobre o planejamento do parto.' },
      faqConvenio,
    ],
  },
  {
    slug: 'clinica-medica',
    nome: 'Clínica Médica',
    pedido: 'uma consulta de clínica médica',
    schema: 'PrimaryCare',
    medica: true,
    resumo:
      'O clínico geral é o médico da porta de entrada: faz check-up, acompanha pressão alta, diabetes e colesterol, e encaminha para o especialista quando precisa.',
    quando: [
      'Check-up anual',
      'Pressão alta, diabetes ou colesterol alto',
      'Cansaço, perda de peso sem motivo ou febre que não passa',
      'Não sabe qual especialista procurar',
      'Revisar remédios de uso contínuo',
    ],
    comoE: [
      'Leve os remédios que usa e exames antigos.',
      'O médico conversa, examina e mede pressão e peso.',
      'Se precisar, pede exames de sangue ou de imagem, feitos na própria clínica.',
      'Com os resultados, você volta para o retorno.',
    ],
    exames: ['exames-laboratoriais', 'exames-de-imagem', 'exames-cardiologicos'],
    faqs: [
      { p: 'Clínico geral pede exame de sangue?', r: 'Sim. No check-up, o clínico costuma pedir exames de sangue. Você pode colher na sede ou em um dos postos de coleta.' },
      { p: 'Preciso de clínico antes do especialista?', r: 'Não é obrigatório. Mas se você não sabe por onde começar, o clínico ajuda a escolher o caminho.' },
      faqConvenio,
    ],
  },
  {
    slug: 'cardiologia',
    nome: 'Cardiologia',
    pedido: 'uma consulta de cardiologia',
    schema: 'Cardiovascular',
    medica: true,
    resumo:
      'O cardiologista cuida do coração e dos vasos. Procure se tiver pressão alta, falta de ar ao esforço, palpitação ou dor no peito que vai e volta. A clínica faz os exames do coração no mesmo endereço, em Bom Jesus.',
    quando: [
      'Pressão alta ou difícil de controlar',
      'Cansaço ou falta de ar ao subir escada',
      'Coração acelerado ou batendo fora do ritmo',
      'Inchaço nas pernas no fim do dia',
      'Avaliação antes de começar atividade física ou de uma cirurgia',
      'Histórico de infarto ou AVC na família',
    ],
    comoE: [
      'Você marca pelo WhatsApp.',
      'Leve exames antigos e a lista de remédios.',
      'O médico conversa, examina e mede a pressão.',
      'Se precisar, pede exames cardiológicos. Muitos são feitos aqui mesmo.',
    ],
    exames: ['exames-cardiologicos', 'exames-laboratoriais', 'exames-de-imagem'],
    faqs: [
      { p: 'Preciso de encaminhamento?', r: 'Para consulta particular, não. Se for por convênio, confirme a regra do seu plano com a recepção.' },
      { p: 'Dor no peito agora: marco consulta?', r: 'Não. Dor forte no peito, falta de ar intensa ou desmaio é caso de urgência. Vá à urgência 24h ou ligue 192.' },
      faqConvenio,
    ],
  },
  {
    slug: 'pediatria',
    nome: 'Pediatria',
    pedido: 'uma consulta de pediatria',
    schema: 'Pediatric',
    medica: true,
    resumo:
      'O pediatra acompanha a saúde da criança do nascimento à adolescência: crescimento, vacinas, alimentação e as doenças comuns da infância.',
    quando: [
      'Consultas de rotina do bebê (puericultura)',
      'Febre, tosse, diarreia ou vômito que preocupam',
      'Dúvidas sobre amamentação e introdução alimentar',
      'Acompanhar peso, altura e desenvolvimento',
      'Atestado ou avaliação para escola e esporte',
    ],
    comoE: [
      'Leve a caderneta de vacinação da criança.',
      'O pediatra pesa, mede e examina.',
      'Conversa com a família sobre sono, alimentação e comportamento.',
      'Se precisar, pede exames, feitos na própria clínica.',
    ],
    exames: ['exames-laboratoriais', 'exames-de-imagem'],
    faqs: [
      { p: 'De quanto em quanto tempo levar o bebê?', r: 'No primeiro ano as consultas são mais frequentes. O pediatra passa o calendário na primeira consulta.' },
      { p: 'Febre alta de madrugada: o que fazer?', r: 'Febre com moleza intensa, dificuldade para respirar ou convulsão é urgência. Procure a urgência 24h.' },
      faqConvenio,
    ],
  },
  {
    slug: 'dermatologia',
    nome: 'Dermatologia',
    pedido: 'uma consulta de dermatologia',
    schema: 'Dermatologic',
    medica: true,
    resumo:
      'O dermatologista cuida da pele, do cabelo e das unhas. Procure para acne, manchas, queda de cabelo, micoses e para examinar pintas que mudaram.',
    quando: [
      'Pinta que cresceu, mudou de cor ou sangra',
      'Acne que não melhora',
      'Manchas, coceira ou alergia na pele',
      'Queda de cabelo',
      'Unha com micose',
      'Ferida que não cicatriza',
    ],
    comoE: [
      'O médico examina a pele, às vezes com um aparelho de lente (dermatoscópio).',
      'Explica o diagnóstico e o tratamento.',
      'Se precisar, pede exames.',
    ],
    exames: ['exames-laboratoriais'],
    faqs: [
      { p: 'Pinta precisa de consulta?', r: 'Pinta que mudou de tamanho, cor ou formato, coça ou sangra deve ser avaliada. Não espere.' },
      { p: 'Posso ir de maquiagem?', r: 'Se a queixa for no rosto, vá sem maquiagem para o médico ver a pele como ela está.' },
      faqConvenio,
    ],
  },
  {
    slug: 'ortopedia-traumatologia',
    nome: 'Ortopedia e Traumatologia',
    pedido: 'uma consulta de ortopedia',
    schema: 'Musculoskeletal',
    medica: true,
    resumo:
      'O ortopedista trata ossos, articulações, músculos e coluna. A traumatologia cuida de fraturas, torções e lesões de acidente ou esporte. Em caso de trauma agora, a urgência 24h funciona no mesmo prédio.',
    quando: [
      'Dor nas costas, no pescoço ou na lombar',
      'Dor no joelho, no ombro ou no quadril',
      'Torção ou pancada que continua doendo',
      'Formigamento no braço ou na perna',
      'Acompanhamento depois de fratura',
    ],
    comoE: [
      'Leve exames de imagem que já tiver.',
      'O médico examina o movimento e a região da dor.',
      'Se precisar, pede ressonância ou outro exame de imagem.',
    ],
    exames: ['ressonancia-magnetica', 'exames-de-imagem'],
    faqs: [
      { p: 'Caí e está inchado: marco consulta?', r: 'Se não consegue apoiar o pé, mexer o braço ou há deformidade, vá à urgência 24h.' },
      { p: 'Ressonância de joelho ou coluna é feita aí?', r: 'Sim, a clínica tem ressonância magnética. Mande a foto do pedido médico pelo WhatsApp.' },
      faqConvenio,
    ],
  },
  {
    slug: 'urologia',
    nome: 'Urologia',
    pedido: 'uma consulta de urologia',
    schema: 'Urologic',
    medica: true,
    resumo:
      'O urologista trata rins, bexiga e vias urinárias de homens e mulheres, e a saúde do sistema reprodutor masculino, incluindo a próstata.',
    quando: [
      'Pedra nos rins ou dor forte nas costas que vai para a barriga',
      'Ardor ou sangue na urina',
      'Perda de urina (incontinência)',
      'Levantar muitas vezes à noite para urinar',
      'Avaliação da próstata',
    ],
    comoE: [
      'O médico pergunta sobre os sintomas e o histórico.',
      'Faz o exame físico quando necessário.',
      'Pode pedir exames de urina, de sangue e de imagem.',
    ],
    exames: ['exames-laboratoriais', 'exames-de-imagem'],
    faqs: [
      { p: 'Mulher vai ao urologista?', r: 'Sim. Infecção urinária de repetição, perda de urina e pedra nos rins também são tratadas pelo urologista.' },
      { p: 'Cólica de pedra nos rins agora?', r: 'Dor muito forte, febre ou vômito é caso de urgência. Procure a urgência 24h.' },
      faqConvenio,
    ],
  },
  {
    slug: 'cirurgia-vascular',
    nome: 'Cirurgia Vascular',
    pedido: 'uma consulta de cirurgia vascular',
    schema: 'Surgical',
    medica: true,
    resumo:
      'O cirurgião vascular cuida das artérias, veias e vasos linfáticos: varizes, vasinhos, trombose e problemas de circulação nas pernas.',
    quando: [
      'Varizes ou vasinhos nas pernas',
      'Pernas pesadas, inchadas ou doloridas no fim do dia',
      'Ferida na perna que não cicatriza',
      'Dor na panturrilha ao caminhar',
      'Histórico de trombose',
    ],
    comoE: [
      'O médico examina as pernas em pé e deitado.',
      'Pode pedir exame de imagem dos vasos.',
      'Explica as opções de tratamento para o seu caso.',
    ],
    exames: ['exames-de-imagem'],
    faqs: [
      { p: 'Perna inchada e vermelha de repente?', r: 'Inchaço súbito, quente e dolorido em uma perna pode ser trombose. Procure a urgência 24h.' },
      { p: 'Vasinho é só estética?', r: 'Muitas vezes sim, mas o médico avalia se há varizes por baixo que precisam de cuidado.' },
      faqConvenio,
    ],
  },
  {
    slug: 'coloproctologia',
    nome: 'Coloproctologia',
    pedido: 'uma consulta de coloproctologia',
    schema: 'Gastroenterologic',
    medica: true,
    resumo:
      'O coloproctologista trata o intestino grosso, o reto e o ânus: hemorroida, fissura, sangue nas fezes, intestino preso e prevenção do câncer colorretal.',
    quando: [
      'Sangue nas fezes ou no papel',
      'Dor ou caroço na região anal',
      'Intestino preso ou diarreia que não passa',
      'Mudança no hábito intestinal depois dos 45 anos',
      'Histórico de câncer de intestino na família',
    ],
    comoE: [
      'O médico conversa sobre sintomas e hábitos.',
      'O exame é rápido e feito com privacidade.',
      'Se precisar, pede exames endoscópicos ou de laboratório.',
    ],
    exames: ['exames-endoscopicos', 'exames-laboratoriais'],
    faqs: [
      { p: 'Sangue nas fezes é sempre hemorroida?', r: 'Nem sempre. Por isso vale consultar em vez de tratar por conta própria.' },
      { p: 'A consulta é constrangedora?', r: 'O médico está acostumado e o exame é rápido. Você pode tirar todas as dúvidas antes.' },
      faqConvenio,
    ],
  },
  {
    slug: 'oftalmologia',
    nome: 'Oftalmologia',
    pedido: 'uma consulta de oftalmologia',
    schema: 'Optometric',
    medica: true,
    resumo:
      'O oftalmologista cuida da visão e dos olhos: grau de óculos, catarata, glaucoma, olho seco e conjuntivite.',
    quando: [
      'Visão embaçada, de perto ou de longe',
      'Dor de cabeça ao ler ou usar o celular',
      'Olho vermelho, coçando ou lacrimejando',
      'Acima dos 40 anos, para medir a pressão do olho',
      'Diabetes: exame de fundo de olho',
    ],
    comoE: [
      'Leve os óculos que usa.',
      'O médico mede a visão e examina os olhos.',
      'Às vezes usa colírio para dilatar a pupila. Nesse caso, a visão fica embaçada por algumas horas: evite dirigir.',
    ],
    exames: [],
    faqs: [
      { p: 'Preciso de acompanhante?', r: 'Se houver dilatação da pupila, é bom ter alguém para voltar com você.' },
      { p: 'A clínica faz exames de vista?', r: 'A clínica faz exames oftalmológicos. Pergunte pelo WhatsApp quais estão disponíveis.' },
      faqConvenio,
    ],
  },
  {
    slug: 'otorrinolaringologia',
    nome: 'Otorrinolaringologia',
    pedido: 'uma consulta de otorrinolaringologia',
    schema: 'Otolaryngologic',
    medica: true,
    resumo:
      'O otorrino trata ouvido, nariz, seios da face e garganta: sinusite, rinite, dor de ouvido, rouquidão, ronco e perda de audição.',
    quando: [
      'Sinusite ou rinite que volta sempre',
      'Dor ou zumbido no ouvido',
      'Dificuldade para ouvir',
      'Rouquidão por mais de duas semanas',
      'Ronco ou nariz entupido para dormir',
      'Amigdalite de repetição',
    ],
    comoE: [
      'O médico examina ouvido, nariz e garganta.',
      'Pode usar uma câmera fina para ver por dentro do nariz ou da garganta.',
      'Se precisar, pede exame de audição ou de imagem.',
    ],
    exames: ['exames-de-imagem'],
    faqs: [
      { p: 'Criança pode consultar com otorrino?', r: 'Sim. Dor de ouvido, adenoide e amígdalas são queixas comuns na infância.' },
      { p: 'Faz exame de audição?', r: 'A clínica faz exames fonoaudiológicos. Pergunte pelo WhatsApp qual exame o seu pedido indica.' },
      faqConvenio,
    ],
  },
  {
    slug: 'neurologia',
    nome: 'Neurologia',
    pedido: 'uma consulta de neurologia',
    schema: 'Neurologic',
    medica: true,
    resumo:
      'O neurologista trata o cérebro, a medula e os nervos: dor de cabeça frequente, tontura, formigamento, convulsão, esquecimento e sequelas de AVC.',
    quando: [
      'Dor de cabeça forte ou muito frequente',
      'Tontura que se repete',
      'Formigamento ou fraqueza em braço ou perna',
      'Esquecimento que atrapalha o dia a dia',
      'Tremor nas mãos',
      'Acompanhamento de epilepsia ou depois de AVC',
    ],
    comoE: [
      'O médico pergunta sobre os sintomas em detalhe.',
      'Faz o exame neurológico: força, reflexos, equilíbrio.',
      'Se precisar, pede ressonância ou exames neurológicos.',
    ],
    exames: ['ressonancia-magnetica', 'exames-de-imagem'],
    faqs: [
      { p: 'Boca torta ou braço fraco de repente?', r: 'Pode ser AVC. Ligue 192 ou vá à urgência 24h na hora. Cada minuto conta.' },
      { p: 'Ressonância de crânio é feita aí?', r: 'Sim, a clínica tem ressonância magnética. Mande a foto do pedido pelo WhatsApp.' },
      faqConvenio,
    ],
  },
  {
    slug: 'nefrologia',
    nome: 'Nefrologia',
    pedido: 'uma consulta de nefrologia',
    schema: 'Renal',
    medica: true,
    resumo:
      'O nefrologista cuida dos rins: doença renal crônica, alteração da creatinina, proteína na urina e pressão alta ligada aos rins.',
    quando: [
      'Creatinina ou ureia alterada no exame de sangue',
      'Proteína ou sangue na urina',
      'Diabetes ou pressão alta de longa data',
      'Inchaço no corpo sem explicação',
      'Pedra nos rins de repetição',
    ],
    comoE: [
      'Leve seus exames de sangue e de urina.',
      'O médico avalia a função dos rins e os remédios que você usa.',
      'Pede exames de acompanhamento, colhidos na clínica ou nos postos.',
    ],
    exames: ['exames-laboratoriais', 'exames-de-imagem'],
    faqs: [
      { p: 'Qual a diferença entre nefrologista e urologista?', r: 'O nefrologista trata a função dos rins, sem cirurgia. O urologista trata as vias urinárias e faz procedimentos, como a retirada de pedras.' },
      { p: 'Quem tem diabetes precisa ir?', r: 'O diabetes pode afetar os rins com o tempo. Seu médico indica quando é hora de avaliar.' },
      faqConvenio,
    ],
  },
  {
    slug: 'psiquiatria',
    nome: 'Psiquiatria',
    pedido: 'uma consulta de psiquiatria',
    schema: 'Psychiatric',
    medica: true,
    resumo:
      'O psiquiatra é o médico que trata a saúde mental: ansiedade, depressão, insônia, transtorno bipolar, dependência de álcool e outras drogas.',
    quando: [
      'Tristeza ou desânimo que dura semanas',
      'Ansiedade que atrapalha trabalho, sono ou relações',
      'Insônia frequente',
      'Crises de pânico',
      'Uso de álcool ou drogas fora de controle',
    ],
    comoE: [
      'A consulta é uma conversa, em sala reservada.',
      'O médico entende a sua história e os sintomas.',
      'Quando indicado, prescreve remédio e combina o acompanhamento.',
      'Pode trabalhar junto com a psicologia.',
    ],
    exames: ['exames-laboratoriais'],
    faqs: [
      { p: 'Psiquiatra ou psicólogo?', r: 'O psiquiatra é médico e pode receitar remédios. O psicólogo faz a psicoterapia. Muitas vezes os dois trabalham juntos.' },
      { p: 'Pensamentos de se machucar?', r: 'Procure ajuda agora: urgência 24h, ligue 192 ou o CVV no 188 (24 horas, gratuito).' },
      faqConvenio,
    ],
  },
  {
    slug: 'psicologia',
    nome: 'Psicologia',
    pedido: 'um atendimento de psicologia',
    schema: 'Psychiatric',
    medica: false,
    resumo:
      'O psicólogo ajuda você a lidar com ansiedade, estresse, luto, problemas de relacionamento e momentos difíceis, por meio da psicoterapia.',
    quando: [
      'Ansiedade ou estresse constante',
      'Luto ou separação',
      'Conflitos na família ou no trabalho',
      'Dificuldade de lidar com as emoções',
      'Acompanhamento junto com o tratamento psiquiátrico',
    ],
    comoE: [
      'O primeiro encontro serve para conhecer a sua demanda.',
      'As sessões são combinadas com o psicólogo, em geral semanais.',
      'Tudo o que é dito fica em sigilo.',
    ],
    exames: [],
    faqs: [
      { p: 'Criança pode fazer terapia?', r: 'Sim. Pergunte à recepção pelo WhatsApp sobre atendimento infantil.' },
      { p: 'Quantas sessões vou precisar?', r: 'Depende de cada pessoa. Isso é conversado com o psicólogo ao longo do acompanhamento.' },
      faqConvenio,
    ],
  },
  {
    slug: 'nutricao',
    nome: 'Nutrição',
    pedido: 'uma consulta de nutrição',
    medica: false,
    resumo:
      'O nutricionista monta um plano alimentar para o seu objetivo e a sua rotina: controle de peso, diabetes, colesterol, gestação ou alimentação das crianças.',
    quando: [
      'Quer perder ou ganhar peso com orientação',
      'Diabetes, pressão alta ou colesterol alto',
      'Gestação e amamentação',
      'Intestino preso ou desconforto depois de comer',
      'Criança que come mal',
    ],
    comoE: [
      'Leve exames de sangue recentes, se tiver.',
      'O nutricionista pergunta sobre rotina e hábitos, e mede peso e medidas.',
      'Você sai com um plano alimentar e o retorno marcado.',
    ],
    exames: ['exames-laboratoriais'],
    faqs: [
      { p: 'Preciso levar exames?', r: 'Ajuda, mas não é obrigatório. Se precisar, o nutricionista orienta quais fazer.' },
      { p: 'Nutricionista passa remédio para emagrecer?', r: 'Não. Remédio é com o médico. O nutricionista cuida da alimentação.' },
      faqConvenio,
    ],
  },
  {
    slug: 'fisioterapia',
    nome: 'Fisioterapia',
    pedido: 'um atendimento de fisioterapia',
    schema: 'PhysicalTherapy',
    medica: false,
    resumo:
      'A fisioterapia ajuda a recuperar movimento, reduzir dor e corrigir postura. Na clínica há também RPG (Reeducação Postural Global).',
    quando: [
      'Recuperação depois de fratura, cirurgia ou lesão',
      'Dor nas costas ou no pescoço',
      'Postura ruim ou dor por ficar muito tempo sentado',
      'Reabilitação de movimentos na terceira idade',
      'Indicação médica de sessões de fisioterapia ou RPG',
    ],
    comoE: [
      'Leve o pedido médico e exames de imagem, se tiver.',
      'O fisioterapeuta avalia movimento, força e postura.',
      'Monta um plano de sessões com exercícios e técnicas para o seu caso.',
    ],
    exames: ['exames-de-imagem'],
    faqs: [
      { p: 'O que é RPG?', r: 'Reeducação Postural Global: um método de fisioterapia com posturas de alongamento e ativação muscular para corrigir a postura e tratar dores.' },
      { p: 'Preciso de pedido médico?', r: 'Para convênio, geralmente sim. Pergunte à recepção como funciona no seu caso.' },
      faqConvenio,
    ],
  },
  {
    slug: 'fonoaudiologia',
    nome: 'Fonoaudiologia',
    pedido: 'um atendimento de fonoaudiologia',
    schema: 'SpeechPathology',
    medica: false,
    resumo:
      'O fonoaudiólogo cuida da fala, da voz, da audição e da deglutição: gagueira, troca de letras, rouquidão, dificuldade de engolir e problemas de leitura e escrita.',
    quando: [
      'Criança que troca letras ou demora a falar',
      'Gagueira',
      'Rouquidão frequente, principalmente em quem usa a voz no trabalho',
      'Engasgo ou dificuldade para engolir',
      'Exame de audição pedido pelo médico',
    ],
    comoE: [
      'A primeira sessão é uma avaliação.',
      'O fonoaudiólogo explica o que encontrou e monta o plano de terapia.',
      'Exames de audição são marcados conforme o pedido.',
    ],
    exames: [],
    faqs: [
      { p: 'Com que idade levar a criança?', r: 'Se aos 2 anos a criança fala poucas palavras, ou aos 4 ainda é difícil de entender, vale uma avaliação.' },
      { p: 'Faz audiometria?', r: 'A clínica faz exames fonoaudiológicos. Mande o pedido pelo WhatsApp para confirmar.' },
      faqConvenio,
    ],
  },
  {
    slug: 'odontologia',
    nome: 'Odontologia',
    pedido: 'uma consulta de odontologia',
    schema: 'Dentistry',
    medica: false,
    resumo:
      'O dentista cuida de dentes, gengiva e boca. Na clínica há também ortodontia, que corrige dentes e arcadas fora de posição.',
    quando: [
      'Revisão e limpeza a cada seis meses',
      'Dor de dente ou sensibilidade',
      'Gengiva que sangra',
      'Dentes tortos ou mordida fora do lugar',
      'Dor na mandíbula ou estalo ao abrir a boca',
    ],
    comoE: [
      'O dentista examina dentes e gengiva.',
      'Explica o que precisa ser feito e em quantas sessões.',
      'Na ortodontia, a primeira consulta avalia se o aparelho é indicado.',
    ],
    exames: [],
    faqs: [
      { p: 'Dente torto só atrapalha a estética?', r: 'Não. Dentes mal posicionados dificultam a limpeza e podem sobrecarregar a mastigação.' },
      { p: 'Criança pode ir ao dentista?', r: 'Sim. A primeira visita é recomendada logo que os primeiros dentes aparecem.' },
      faqConvenio,
    ],
  },
];

export const bySlug = (s: string) => especialidades.find((e) => e.slug === s);
