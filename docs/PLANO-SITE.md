# Plano do novo site — Clínica Dr. Ricardo Xavier

## Objetivo
Transformar visita em conversa no WhatsApp (89) 99987-0009. Cada página tem um botão com mensagem já escrita para aquela especialidade ou exame. Ser a resposta do Google e das IAs para "<especialidade/exame> em Bom Jesus PI".

## Posicionamento (da própria marca)
"Consultas e exames, tudo em um só lugar." Consulta, laboratório, imagem e ressonância no mesmo endereço no Centro de Bom Jesus, com postos de coleta em Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins.

## Decisões
- Identidade mantida: logo RX, vermelho da marca, Montserrat. Open Sans sai (uma fonte só).
- Hospital Maternidade e urgência 24h: liberado pelo usuário (2026-09-28). Citar sem detalhar leitos/estrutura que não foram informados.
- Equipe: só os responsáveis técnicos (Dr. Ricardo Xavier, Drª Malba Xavier). Demais profissionais entram quando o cliente mandar nome + CRM/RQE (ou CRP/CRN/CREFITO/CRO/CRFa).
- Especialidade sem médico com RQE publicado: a página fala da área ("atendimento em cardiologia"), sem anunciar "especialista" com nome.
- Sem preço, sem promessa de resultado, sem antes/depois (CFM 2.336/2023, CFO).
- Horário e convênios: não existem no site → "Confirme horários e convênios com a recepção pelo WhatsApp".
- Spam injetado no domínio (/details/...): no novo site responde 410. Cliente precisa trocar senhas da hospedagem/WordPress e pedir remoção no Search Console.

## Páginas
Home · Especialidades (índice + 20 páginas) · Exames (índice + 6 páginas de grupo) · Agendar · Resultados · Postos de coleta · Sobre (RTs, hospital, urgência) · Blog (índice + 6 artigos) · Privacidade · 404.

## Medição
`data-evento="click_whatsapp"` em todo CTA + `data-origem` (página). Após domínio: GA4 ou Vercel Analytics, Search Console, Perfil da Empresa no Google.
