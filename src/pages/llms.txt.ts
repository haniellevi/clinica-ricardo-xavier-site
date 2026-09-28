import { site } from '../data/site';
import { especialidades } from '../data/especialidades';
import { exames } from '../data/exames';
import { posts } from '../data/posts';

export function GET() {
  const u = (p: string) => `${site.url}${p}`;
  const txt = `# ${site.nome}

> Clínica em Bom Jesus-PI com consultas em 20 áreas, laboratório, exames de imagem e ressonância magnética no mesmo endereço (${site.endereco.rua}, ${site.endereco.bairro}). No mesmo prédio funciona o ${site.hospital}, com urgência 24 horas. Agendamento pelo WhatsApp ${site.whatsapp}.

- Endereço: ${site.endereco.rua}, ${site.endereco.bairro}, ${site.endereco.cidade}-${site.endereco.uf}, ${site.endereco.cep}
- WhatsApp: ${site.whatsapp} · Telefone: ${site.telefone} · E-mail: ${site.email}
- Responsáveis técnicos: ${site.responsaveis.map((r) => `${r.nome} (${r.registro})`).join('; ')}
- Postos de coleta: ${site.postos.map((p) => `${p.cidade} (${p.endereco})`).join('; ')}
- Horários e convênios: confirmar com a recepção pelo WhatsApp.

## Especialidades
${especialidades.map((e) => `- [${e.nome} em Bom Jesus-PI](${u('/especialidades/' + e.slug)}): ${e.resumo.split('. ')[0]}.`).join('\n')}

## Exames
${exames.map((x) => `- [${x.titulo}](${u('/exames/' + x.slug)}): ${x.resumo.split('. ')[0]}.`).join('\n')}

## Páginas
- [Agendar](${u('/agendar')})
- [Resultados de exames](${u('/resultados')})
- [Postos de coleta](${u('/postos-de-coleta')})
- [Sobre e urgência 24h](${u('/sobre')})

## Blog
${posts.map((p) => `- [${p.titulo}](${u('/blog/' + p.slug)}): ${p.resposta}`).join('\n')}
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
