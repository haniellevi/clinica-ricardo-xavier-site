export const site = {
  nome: 'Clínica Dr. Ricardo Xavier',
  razaoSocial: 'Clínica Dr. Ricardo Xavier LTDA',
  cnpj: '05.041.208/0001-72',
  slogan: 'Consultas e exames, tudo em um só lugar.',
  url: 'https://clinicadrricardoxavier.com.br',
  cidade: 'Bom Jesus',
  uf: 'PI',
  endereco: {
    rua: 'Praça 7 de Setembro, 165',
    bairro: 'Centro',
    cidade: 'Bom Jesus',
    uf: 'PI',
    cep: '64900-000',
  },
  telefone: '(89) 3562-2897',
  telefoneLink: 'tel:+558935622897',
  whatsapp: '(89) 99987-0009',
  whatsappNumero: '5589999870009',
  email: 'atendimento@clinicadrricardoxavier.com.br',
  instagram: 'https://www.instagram.com/clinicadr.ricardoxavier/',
  facebook: 'https://www.facebook.com/clinicadr.ricardoxavier/',
  mapa: 'https://www.google.com/maps/search/?api=1&query=Pra%C3%A7a+7+de+Setembro%2C+165%2C+Centro%2C+Bom+Jesus+-+PI',
  resultados: {
    laboratorio: 'https://resultados.clinicadrricardoxavier.com.br/laboratorio/',
    imagem: 'https://resultados.clinicadrricardoxavier.com.br/imagem/',
  },
  hospital: 'Hospital Maternidade Dr. Ricardo Xavier',
  responsaveis: [
    {
      nome: 'Dr. Ricardo Xavier',
      funcao: 'Diretor técnico médico',
      area: 'Ginecologia e Obstetrícia',
      registro: 'CRM 2421 · RQE 901',
      tipo: 'Physician',
    },
    {
      nome: 'Drª Malba Xavier',
      funcao: 'Responsável técnica do laboratório',
      area: 'Farmácia e análises clínicas',
      registro: 'CRF-PI 0458',
      tipo: 'Person',
    },
  ],
  postos: [
    { cidade: 'Bom Jesus', nome: 'Posto Espaço Saúde Dr. Felipe Valentin', endereco: 'Rua Francisco Duarte Rocha, 353' },
    { cidade: 'Alvorada do Gurguéia', nome: 'Posto Alvorada do Gurguéia', endereco: 'Rua Sebastião Marques de Sousa, 77, Centro' },
    { cidade: 'Colônia do Gurguéia', nome: 'Posto Colônia do Gurguéia', endereco: 'Av. Juscelino Kubitschek, s/n, Centro' },
    { cidade: 'Eliseu Martins', nome: 'Núcleo Diagnóstico Dr. Hilton Júnior', endereco: 'Rua José Messias, 115, Centro' },
  ],
};

export function wa(mensagem: string) {
  return `https://wa.me/${site.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
}
