# Auditoria SEO + GEO — Clínica Dr. Ricardo Xavier (Bom Jesus-PI)

Site: https://clinicadrricardoxavier.com.br/ · Data: 2026-09-28
Base: raspagem em `scrape/ricardo-xavier/` (27 páginas, `map.txt` com 112 URLs) + checagens ao vivo (curl com UA de Chrome e de bots, `firecrawl search site:`).
Stack atual: WordPress 6.9.9 + Elementor 3.29 + Yoast SEO 27.2, atrás do Cloudflare.
Escopo: só achados que mudam decisões do redesign.

---

## Resumo

1. **Spam no Google (gravidade ALTA):** 78 URLs `/details/...` (produtos alemães, com estrelinhas de avaliação no resultado) + `/service/datenschutz` **ainda aparecem no índice** — na busca `site:` elas são a maioria dos 20 primeiros resultados. No servidor, hoje respondem 404 (inclusive com UA de Googlebot), mas o índice não foi limpo.
2. **Nenhuma página interna tem meta description**, **nenhuma tem H1** (a home também não; "Segurança." é H2), e nenhum title cita "Bom Jesus" ou "PI".
3. **Schema atual é só o genérico do Yoast** (WebSite/Organization/WebPage/BreadcrumbList vazio). Não há MedicalClinic, endereço, telefone, geo, Physician nem sameAs.
4. **Crawlers de IA:** o robots.txt libera tudo, mas o **Cloudflare devolve 403 para GPTBot, ClaudeBot e CCBot**. Bots de busca/usuário (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-SearchBot, Claude-User, Googlebot, Bingbot) recebem 200. Não há llms.txt (404).
5. **Citabilidade baixa:** as páginas de especialidade têm de 1 a 3 frases genéricas de dicionário, sem nome de médico, sem cidade, sem forma de agendar e sem exames. O único post do blog foi copiado do Einstein.
6. **Links errados:** botão "Resultados Exames" aponta para `www.resultados.com.br/Home` (domínio de terceiros); o card "Ortopedia" leva para /cardiologia; o card "Cirurgia Vascular" usa o texto da ortopedia; o rodapé tem `/coloproctologia/` (404); Nefrologia e Neurologia são páginas órfãs (só estão no sitemap).
7. **Cuidado no DNS:** `resultados.clinicadrricardoxavier.com.br` (portal de laudos) e o e-mail `atendimento@` **não podem cair** na troca de hospedagem.

---

## 1. Spam injetado (`/details/*`, `/service/datenschutz`)

**O que existe**
- 78 URLs `/details/<Produto-Em-Alemao>/<id>` + `/service/datenschutz` (a lista completa está no Apêndice A).
- `firecrawl search "site:clinicadrricardoxavier.com.br"`: das 20 primeiras posições, **12 são spam** (Melitta Kaffeevollautomat, Boxspringbett, pôster Jennifer Lawrence…), com rich snippet de avaliação ("Rating 4.8 (90)"). Isso indica que o hacker injetou schema Product/AggregateRating.
- Estado atual no servidor: `/details/...` e `/service/datenschutz` respondem **404** para Chrome, para UA de Googlebot (desktop e mobile), com referer do Google e para Bingbot. **Não dá para descartar cloaking por IP do Google.** Só o teste ao vivo da Inspeção de URL no Search Console mostra o que o Google recebe de fato.
- O sitemap do Yoast está limpo (26 URLs, nenhuma `/details`). O spam entrou por fora do WordPress (arquivo PHP/.htaccess injetado ou rota falsa) ou já foi removido.
- Outros sinais de exposição: `/wp-json/wp/v2/users` lista usuários (`clin`, `ravel`) e `/author/ravel/` está indexada. O xmlrpc já está bloqueado (403).

**Gravidade:** alta para reputação e CTR, porque a SERP da marca está poluída e pode vir o aviso "Este site pode ter sido invadido" ou uma ação manual por "conteúdo invadido". Para ranking local, a gravidade é média: as 404 já tiram o conteúdo do ar, mas a limpeza do índice é lenta sem ação.

**Como tratar no novo site (decisões)**
1. **410 Gone** (e não 301) para `/details/*` e `/service/*`. O 301 para a home transferiria sinais de spam e o Google trataria como soft-404. Em Vercel/Astro, faça isso com middleware:
   ```js
   // middleware (Edge) — trecho
   if (/^\/(details|service)(\/|$)/i.test(pathname)) return new Response('Gone', { status: 410, headers: { 'X-Robots-Tag': 'noindex' } });
   ```
   Use o mesmo 410 para restos do WordPress sem equivalente: `/elementor-938`, `/wp-json/*`, `/wp-admin/*`, `/xmlrpc.php`, `/wp-login.php` (autor/categoria/feed levam 301, veja a tabela da seção 6).
2. **Não bloqueie `/details/` no robots.txt.** Se bloquear, o Google não enxerga o 410 e as URLs continuam indexadas por mais tempo.
3. **Search Console (propriedade de Domínio, via DNS):**
   - Em **Usuários e permissões**, remova qualquer proprietário desconhecido. É comum o invasor se cadastrar para enviar sitemaps próprios.
   - Em **Sitemaps**, apague qualquer sitemap que não seja o novo `/sitemap-index.xml`.
   - Confira **Segurança e ações manuais**. Se houver ação manual, peça revisão depois do deploy.
   - Em **Remoções → Remoção temporária → "Remover todos os URLs com este prefixo"**, informe `https://clinicadrricardoxavier.com.br/details/` e `/service/`. Isso esconde as URLs da SERP por cerca de 6 meses, enquanto o 410 remove de vez.
   - Na **Inspeção de URL**, faça o teste ao vivo de 2 ou 3 URLs `/details` depois do deploy para confirmar o 410.
4. **Não migre nenhum arquivo do WordPress** (uploads, temas, .htaccess). Baixe só as imagens aprovadas. Se a hospedagem antiga continuar ativa (por exemplo, se o portal `resultados` estiver no mesmo servidor), peça ao cliente ou à hospedagem um scan de malware e a troca de todas as senhas (WP, FTP, painel).
5. Avise o cliente por escrito: o site foi comprometido, você está corrigindo, e o prazo de limpeza da SERP é de semanas.

---

## 2. Títulos, H1, meta description, canonical

| Item | Estado atual | Decisão para o novo site |
|---|---|---|
| Title | "`<Página> - DR RICARDO XAVIER`" (caixa alta, sem cidade) | `Cardiologista em Bom Jesus-PI \| Clínica Dr. Ricardo Xavier` (especialidades); home: `Clínica Dr. Ricardo Xavier — Consultas e exames em Bom Jesus-PI` |
| H1 | **Nenhuma página tem H1** (home: "Nós cuidamos… / Segurança." em H2); o blog tem 2 H1 | Um H1 por página, com o termo e a cidade: "Cardiologia em Bom Jesus-PI" |
| Meta description | Só a home tem: "A maior Clínica médica do Sul do Piauí" | Uma por página, com 140-155 caracteres, citando o serviço, Bom Jesus-PI e o CTA do WhatsApp. **Tire "a maior do Sul do Piauí"**: é superlativo sem prova, e a publicidade médica (Res. CFM 2.336/2023) pede cautela |
| Canonical | Autorreferente, com barra final, OK | Autorreferente absoluto, sem barra final (padrão Astro) e só com `https://` sem www. Os redirects cuidam das URLs com barra |
| Robots meta | `index, follow, max-snippet:-1` | Manter. Usar `noindex` só em /obrigado e em páginas utilitárias |
| Nome da entidade | "DR RICARDO XAVIER" (Yoast), "Clínica Dr. Ricardo Xavier LTDA", fachada "Hospital Maternidade Dr. Ricardo Xavier" | **Escolher um nome canônico igual ao do Perfil da Empresa no Google** e repetir exatamente igual em title, schema, rodapé e llms.txt. Perguntar ao cliente qual é o nome no GBP |
| OG image | `bgquadromeio.png` 442×479 | 1200×630 com a marca e a fachada |

---

## 3. Schema: o que existe e o que é preciso

**Existe:** grafo padrão do Yoast (WebSite com SearchAction, Organization com o nome "DR RICARDO XAVIER" e o logo, WebPage, BreadcrumbList só com "Início"). Não há endereço, telefone, geo, horário, sameAs nem nenhum tipo médico.

**Necessário (JSON-LD, com um `@id` estável por entidade):**

| Tipo | Onde | Campos que importam |
|---|---|---|
| `MedicalClinic` (+ `MedicalBusiness`) | todas as páginas (layout) | `name` canônico, `legalName` "Clínica Dr. Ricardo Xavier LTDA", `taxID` 05.041.208/0001-72, `address` (Praça 7 de Setembro, 165, Centro, 64900-000), `geo` (pegar do GBP), `telephone` +55 89 3562-2897, `contactPoint` WhatsApp, `email`, `sameAs` [Instagram, Facebook, URL do GBP], `medicalSpecialty` (a lista enum que existir: Obstetric, Gynecologic, Cardiovascular, Dermatology, Pediatric, Psychiatric, Urologic, Neurologic, Renal, Otolaryngologic, Optometric…), `availableService` → `MedicalTest`/`MedicalProcedure`, `openingHoursSpecification` **(não temos o horário; pedir ao cliente)**, `areaServed` com Bom Jesus, Alvorada do Gurguéia, Colônia do Gurguéia e Eliseu Martins |
| `DiagnosticLab` | /postos-de-coleta, /resultados | o laboratório + os 4 postos como `department`/`location`, cada um com `address` próprio. Isso ajuda nas buscas locais das cidades vizinhas |
| `Physician` | /sobre e a especialidade dele | Dr. Ricardo Xavier: `identifier` CRM-PI 2421, RQE 901, `hasCredential` TEGO, `medicalSpecialty` Obstetric/Gynecologic, `worksFor` → @id da clínica. **Só profissionais com CRM/RQE confirmados** |
| `Person` (farmacêutica RT) | /sobre, /exames | Drª Malba Xavier, `hasCredential` CRF-PI 0458, `jobTitle` "Responsável técnica do laboratório" |
| `MedicalWebPage` | especialidades, exames, blog | `about` (MedicalSpecialty/MedicalTest), `lastReviewed`, `reviewedBy` → Physician. Sinal de E-E-A-T para conteúdo YMYL |
| `BreadcrumbList` | todas as internas | Início › Especialidades › Cardiologia |
| `FAQPage` | especialidades, exames, postos, agendar | **Só com as perguntas visíveis na página.** O Google limitou o rich result de FAQ a sites de governo e saúde de alta autoridade desde 2023, então não espere o snippet. Mesmo assim, ChatGPT, Perplexity e AI Overviews extraem bem pares de pergunta e resposta |
| `Article`/`BlogPosting` | /blog/<slug> | `author` e `reviewedBy` médico, `datePublished` |

**Não usar:** `AggregateRating`/`Review` autodeclarados (o Google ignora ou pune, e o spam já usou esse recurso) nem `Hospital` (o site não confirma internação).

---

## 4. robots.txt, crawlers de IA e llms.txt

- **robots.txt atual (Yoast):** `User-agent: *` com `Disallow:` vazio e o Sitemap apontando para `sitemap_index.xml`. Está OK, mas o problema está na borda.
- **Teste por user-agent (home):**

| Bot | Status | Função |
|---|---|---|
| Googlebot, Bingbot, Google-Extended | 200 | busca / Gemini |
| OAI-SearchBot, ChatGPT-User | 200 | busca do ChatGPT |
| PerplexityBot | 200 | Perplexity |
| Claude-SearchBot, Claude-User | 200 | busca do Claude |
| **GPTBot** | **403** | treino OpenAI |
| **ClaudeBot** | **403** | treino Anthropic |
| **CCBot** | **403** | Common Crawl (base de muitos LLMs) |

  Provável causa: a opção "Block AI bots / AI Scrapers" do Cloudflare ou o Mod_Security (que também dá 406 de forma intermitente para clientes simples). O teste saiu de um IP que não é o dos bots, mas o bloqueio por UA indica a mesma regra para os bots reais.
- **Decisão:** para uma clínica local, estar no conhecimento dos modelos é vantagem. **Liberar GPTBot, ClaudeBot e CCBot.** Se o domínio continuar no Cloudflare depois de migrar para a Vercel, desligue "Block AI bots" em Security → Bots e revise as regras WAF. Novo robots.txt:
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://clinicadrricardoxavier.com.br/sitemap-index.xml
  ```
  (sem regras por bot: tudo liberado; e **sem** Disallow para /details).
- **llms.txt:** hoje dá 404. Crie `/llms.txt` com o nome canônico, uma linha de descrição ("clínica com consultas e exames em Bom Jesus-PI; laboratório com 4 postos de coleta"), endereço, telefone e WhatsApp, e depois links com uma frase cada para /especialidades/*, /exames, /postos-de-coleta, /resultados, /agendar e /sobre. O custo é baixo e o ganho marginal. A prioridade maior é o conteúdo do item 5.

---

## 5. Citabilidade: o conteúdo responde perguntas?

**Não.** As perguntas que um paciente faz ao ChatGPT ou ao Google e que o site deveria responder, com o estado atual de cada uma:

| Pergunta provável | Resposta no site hoje |
|---|---|
| "Tem cardiologista/dermatologista em Bom Jesus-PI?" | Página com uma definição genérica ("A cardiologia é a especialidade que cuida…"), sem cidade e sem médico |
| "Onde fazer ressonância magnética em Bom Jesus / no sul do Piauí?" | "Ressonância" aparece só como categoria em /exames. Não há página própria |
| "Onde coletar exame de sangue em Alvorada do Gurguéia / Colônia do Gurguéia / Eliseu Martins?" | Os postos estão só na home, sem página nem horário |
| "Como vejo o resultado do meu exame?" | Há dois botões, e um deles leva a um domínio errado |
| "Qual o horário? Aceita convênio? Precisa de preparo?" | Não existe no site (confirmar com o cliente) |
| "Quem é o Dr. Ricardo Xavier?" | Não há página. O CRM e o RQE aparecem só em legenda embutida do Instagram |

**Decisões de conteúdo (formato que a IA consegue citar):**
- Cada especialidade abre com um **parágrafo "resposta primeiro" de 40 a 60 palavras**, com entidade, serviço e cidade. Exemplo: "A Clínica Dr. Ricardo Xavier, na Praça 7 de Setembro, 165, em Bom Jesus-PI, oferece consultas de cardiologia e exames cardiológicos… Agendamento pelo WhatsApp (89) 99987-0009." Depois vêm: o que trata (em lista), exames relacionados (com link para /exames/<slug>), quem atende (só com registro confirmado), como agendar e 3 a 5 perguntas frequentes visíveis.
- **Páginas `/exames/<slug>` com prioridade para o diferencial regional:** ressonância magnética (há foto real da sala), exames de imagem, laboratório/sangue, endoscópicos e cardiológicos. O preparo só entra se o cliente fornecer.
- **`/postos-de-coleta`** com uma seção por cidade (H2 "Posto de coleta em Alvorada do Gurguéia"), endereço e horário. É a maior oportunidade local de baixo esforço.
- **`/sobre`** com o histórico ("desde 2005" só se o cliente confirmar), os responsáveis técnicos com registro, o CNPJ e fotos reais. Isso sustenta o E-E-A-T.
- Números e fatos verificáveis (quantidade de especialidades, cidades atendidas) em texto, não em imagem.
- **O blog começa vazio ou com um post original.** O post "ola-mundo" é cópia do Einstein (conteúdo duplicado e texto de terceiros). Não migrar.
- Corrigir inconsistências que confundem as IAs: o card "Cirurgia Vascular" com texto de ortopedia; "agendamento online" na Clínica Médica, que não existe; "urgência 24h" na Ortopedia (confirmar); o slug "coloprocotologia".

---

## 6. Links quebrados e mapa de 301

**Quebrados ou errados no site atual**

| Onde | Link | Problema |
|---|---|---|
| Home, botão "Resultados Exames — Clique aqui" | `https://www.resultados.com.br/Home` | Domínio de terceiros. Os portais corretos são `resultados.clinicadrricardoxavier.com.br/laboratorio/` e `/imagem/` |
| Home, card "Ortopedia" (título) | `/cardiologia/` | Leva à especialidade errada |
| Rodapé de todas as páginas (27×) | `/ortopedia/` | Faz 301 para /ortopedia-traumatologia/ (funciona, mas com um salto extra) |
| Rodapé de todas as páginas (27×) | `/coloproctologia/` | **404** (a página real é `/coloprocotologia/`) |
| Home, card "Cirurgia Vascular" | — | Texto é o da ortopedia |
| `/nefrologia/`, `/neurologia/` | — | Órfãs: fora do menu e do rodapé, só no sitemap |
| `/elementor-938/` | — | Rascunho publicado e indexável, dentro do sitemap |

**Infra (decisão de deploy):** mantenha o domínio e troque só os registros A/CNAME do apex e do www. **Preserve** o DNS de `resultados.` e os registros MX/SPF do e-mail. Na Vercel, `permanent: true` gera 308, que equivale a 301 para o Google. As URLs antigas têm barra final, então cada regra precisa casar com e sem barra (`/cardiologia` e `/cardiologia/`). Teste com `curl -I` depois do deploy e evite cadeias de redirects.

**Tabela de redirects (URLs antigas legítimas → nova arquitetura)**

| URL antiga (exata) | Destino | Código |
|---|---|---|
| `/` | `/` | — (mantém) |
| `/especialidades/` | `/especialidades` | 301 (só barra) |
| `/obstetricia/` | `/especialidades/obstetricia` | 301 |
| `/ginecologia/` | `/especialidades/ginecologia` | 301 |
| `/clinica-medica/` | `/especialidades/clinica-medica` | 301 |
| `/nutricao/` | `/especialidades/nutricao` | 301 |
| `/psicologia/` | `/especialidades/psicologia` | 301 |
| `/coloprocotologia/` | `/especialidades/coloproctologia` | 301 |
| `/coloproctologia/` (link quebrado do rodapé) | `/especialidades/coloproctologia` | 301 |
| `/urologia/` | `/especialidades/urologia` | 301 |
| `/fisioterapia/` | `/especialidades/fisioterapia` | 301 |
| `/cirurgia-vascular/` | `/especialidades/cirurgia-vascular` | 301 |
| `/dermatologia/` | `/especialidades/dermatologia` | 301 |
| `/cardiologia/` | `/especialidades/cardiologia` | 301 |
| `/otorrinolaringologia/` | `/especialidades/otorrinolaringologia` | 301 |
| `/odontologia/` | `/especialidades/odontologia` | 301 |
| `/oftalmologia/` | `/especialidades/oftalmologia` | 301 |
| `/pediatria/` | `/especialidades/pediatria` | 301 |
| `/psiquiatria/` | `/especialidades/psiquiatria` | 301 |
| `/fonoaudiologia/` | `/especialidades/fonoaudiologia` | 301 |
| `/ortopedia-traumatologia/` | `/especialidades/ortopedia-traumatologia` | 301 |
| `/ortopedia/` (já é 301 hoje) | `/especialidades/ortopedia-traumatologia` | 301 |
| `/nefrologia/` | `/especialidades/nefrologia` | 301 |
| `/neurologia/` | `/especialidades/neurologia` | 301 |
| `/exames/` | `/exames` | 301 (só barra) |
| `/blog/` | `/blog` | 301 (só barra) |
| `/2020/07/06/ola-mundo/` | `/blog` | 301 (post copiado não migra) |
| `/category/sem-categoria/` | `/blog` | 301 |
| `/author/ravel/` | `/sobre` | 301 |
| `/author/clin/` (exposto via wp-json) | `/sobre` | 301 |
| `/elementor-938/` | — | 410 |
| `/details/*` (78 URLs, Apêndice A) | — | **410** |
| `/service/datenschutz` (e `/service/*`) | — | **410** |
| `/sitemap_index.xml`, `/page-sitemap.xml`, `/post-sitemap.xml`, `/category-sitemap.xml`, `/author-sitemap.xml` | `/sitemap-index.xml` | 301 |
| `/feed/`, `/comments/feed/` | `/blog` | 301 (ou 410) |
| `/wp-login.php`, `/wp-admin/*`, `/xmlrpc.php`, `/wp-json/*` | — | 410 |

Páginas novas sem origem antiga: `/agendar`, `/resultados` (que aponta para os dois portais do subdomínio), `/postos-de-coleta` e `/sobre`. Elas só entram no sitemap e no menu.

**Pendências do cliente que bloqueiam SEO local:** horário de funcionamento, nome exato no Google Business Profile e coordenadas, convênios, CRM/RQE dos demais médicos, confirmação da "urgência 24h" e de "desde 2005", horário dos postos e o link correto de "Resultados".

---

## Apêndice A — URLs de spam (79) para 410 e para a remoção por prefixo no Search Console

Prefixos a remover: `https://clinicadrricardoxavier.com.br/details/` e `https://clinicadrricardoxavier.com.br/service/`.

```
/service/datenschutz
/details/Personalisierter-Initialgravur-585-Ml-Cognacschwenker/729008
/details/Mit-Holzgriffen-Glashalterung-Besteckbeh-lter-Abtropfschale/856985
/details/Sommelier-Union-Handlich-Stabil-Alltagstauglich-Made/858427
/details/Deckelbezug-Schwarz-Aus-Flanell-Polyester-Dehnbar/1140441
/details/ger-Edelstahl-Schwarz-Mit-Gummierter-Schlagstange/531272
/details/Chenille-Badezimmerteppich-Weich-40x60-Cm-Rutschfeste/1292890
/details/user-Teelichthalter-Aus-Unglasiertem-Porzellan-Mit/1307196
/details/Melitta-Latticia-OT-Kaffeevollautomat-Mit-Milchsystem/594447
/details/24-Cm-Carbonstahl-Antihaftbeschichtet-Backofenfest-Bis/767463
/details/belLand-Boxspringbett-140x200-Mit-Bettkasten-Lattenrost/368976
/details/Cm-Mikrowellen-Sp-lmaschinengeeignet-Ideal-Als/416524
/details/Elektrischer-Zwiebelschneider-USB-Wiederaufladbar-250-Ml/748657
/details/3D-Kerzen-Seifen-Backform-Flexibel-Wiederverwendbar/673818
/details/Berlinger-Haus-Moonlight-Edition-Stabmixer-200W/1251439
/details/Kinder-Zahnpastaspender-Automatisch-Mit-Zahnb-rstenhalter/1273293
/details/Aus-Feinmaschigem-Polyester-Mit-Edelstahlrahmen-Praktischer/503084
/details/teilig-180x180-Cm-Mobiler-Raumteiler-Sichtschutz/1030024
/details/Cm-Buchenholz-Graphitfarben-PEFC-zertifiziert-Mit/1027385
/details/Eierbr-tchenmaschine-Mit-304-Edelstahl-Trichter/540174
/details/UltraFlex-UltraOne-Inkl-Motorfilter-Kompatibel-Mit-AE8800/713239
/details/TABOR-PRO-1-Winkelschreibtisch-205x177-Cm-Rollcontainer/1018950
/details/Aus-Edelstahl-Doppelwandig-BPA-frei-Auslaufsicher-Kohlens/633515
/details/Teak-Antihaftbeschichteter-Schauml-ffel-Mit-Langem-Griff/1189145
/details/Anleitung-Weihnachtsbaum-Anh-nger-Garn-Bastelset-Inkl/824291
/details/Mit-Geometrischem-Design-20-Cm-Durchmesser-Klebbar/1371664
/details/Schreibtisch-Schubladen-Etagenbett-Aus-Metall-Mit-Regalen/707814
/details/Essst-bchen-Mit-Praktischem-Etui-Lasergraviert-Rutschfest/541253
/details/Canvas-Tote-Bag-Bedruckte-Einkaufstasche-Mit-Verschluss/695906
/details/teiliges-Kaffeeservice-Porzellan-Mit-Floralem-Mohnbl-ten/1075425
/details/ngender-Netz-Aufbewahrungskorb-4-Ebenen-Faltbar-Grau/586979
/details/bchenhalter-Im-Chinesischen-Boots-Design-Aus-Zinklegierung/1112852
/details/Plastikbecher-Rosa-Pastell-400-Ml-Bruchfest-Stapelbar/1093966
/details/Toasterofen-1000-W-9-Liter-Edelstahl-Schwarz/802552
/details/Diamantene-Hochzeitskarte-Edle-Gl-ckwunschkarte-Zum-60/973526
/details/Und-Ausstellungsbasis-F-r-Figuren-Vasen-Kristallkugeln/1069947
/details/30x24-Cm-Schneidematte-B-gelmatte-Anti-Rutsch/1034567
/details/Bosch-K-chenmaschine-MUM4-Ersatzteil-177498-00177498/429466
/details/Marmor-Optik-40x40x45-Cm-Robuster-Beistelltisch-Mit/1169346
/details/rostuhl-Kunststoff-Mit-Armlehnen-Stapelbar-F-r/1377725
/details/4er-Set-Garderobenhaken-F-r-Akustikpaneele-Doppelwandige/1173764
/details/Weihnachten-Scheibengardine-Mit-Schneemann-Motiv-1-55x145/1226884
/details/T-pferscheibe-T-pferbrett-Drehbare-Keramikplatte-Aus/1343741
/details/Thermometer-Hitzebest-ndig-M5-Gewinde-Sp-lmaschinenfest/1081373
/details/Verstellbar-Rostfrei-Wandmontiert-Bis-50-Kg-Belastbar/639040
/details/Kunststoff-F-r-Karton-Scrapbooking-Ergonomischer-Griff/1297743
/details/Tier-Zirkus-Schablone-30x30-Cm-Wiederverwendbare-Karnevals/598219
/details/Handarbeiten-Verstellbar-Bis-215-Cm-Umfang-Zusammenklappbar/919733
/details/Black-Metallic-Antihaftbeschichtung-F-r-Hohe-Torten/1349485
/details/Transparent-Stabil-Vielseitig-Ideal-F-r-Hydrokultur/1366103
/details/Atmungsaktiv-Gefriersicher-42x32-Cm-Wiederverwendbar-F-r/944807
/details/Diamond-Painting-Stammesfrau-Wolf-30x40-Cm-Wasserdichte/374786
/details/Weihnachten-Silikonformen-Motiv-Formen-F-r-Schneeflocke/367324
/details/F-r-Gepolsterte-Kopfteile-Kleine-Karosteppung-Staubdicht/435567
/details/BARCRAFTERS-Spirituosen-Dosierer-Set-2er-Wandhalterung-Inkl/1049671
/details/Personalisierte-Urkunde-Zur-Jugendweihe-DIN-A4-Hochwertiges/476539
/details/Wasserdicht-Schmutzabweisend-Ideal-F-r-Weltraum-Partys/803917
/details/Papa-Geschenkset-Kissenbezug-Mit-Taschen-Socken-Flaschen/1258755
/details/Gardinenbox-2er-Set-Fl-chenvorh-nge-Schiebegardinen/1312812
/details/Ca-100-Liter-Sauerstoff-Einfache-Anwendung-Schnelle/1184549
/details/Polyester-Bunte-Quastenborte-Vielseitig-F-r-Tanzbekleidung/1243718
/details/Snackteller-Aus-Papier-Dreieckig-Auslaufsicher-23x17-Cm/1187859
/details/Toilettenkunst-30x40-Cm-Lustiges-Badezimmerbild-Parodie-Mit/873690
/details/Jugendweihe-Girlande-Alles-Gute-Banner-Mit-Glitzer/1373419
/details/Digital-Thermometer-Hygrometer-Gro-es-Display-Uhr-Pr/856836
/details/Baumwolle-B-hmischer-Stil-F-r-Wohnzimmer-Schlafzimmer/1367145
/details/Zum-Aufh-ngen-28-Cm-Aus-Stoff-Kunststoff/884367
/details/Foho-Fl-gelkorkenzieher-Multifunktional-F-r-Wein-Bier/912483
/details/Hitzebest-ndig-Perfekt-F-r-Spiegeleier-Burger-Patties/1286623
/details/ckiges-Goldenes-Kosmetikregal-Aus-Metall-Vogelk-fig-Design/555434
/details/ffel-Experimentier-Set-20-G-Gallium-Form-Spritze/488727
/details/Glatte-Edelstahlklingen-Holzgriff-Verstellbar-24-120-Mm-F/952514
/details/Cm-Wasserdicht-Schimmelresistent-Mit-12-Ringen-Farbe-Gelb/694033
/details/Rutschfest-70x150-Cm-Hellgrau-Mit-Silikon-Punkten-Waschbar/504936
/details/NY-Threads-Damen-Bademantel-Aus-Fleece-Schalkragen-Lang/946883
/details/Nordischer-Gott-Des-Donners-Retro-Poster-Auf-Metall/1122568
/details/Alphabet-Bunt-Gemischt-Zum-Bemalen-Dekorieren-Perfekt-F/1201421
/details/Liter-Verstellbare-Spr-hd-se-Ergonomischer-Ausl-ser/805082
/details/Mixer-Schneebesen-Kompatibel-Mit-Philips-HR7920-NL9206AD-4/576332
```
