# Arquitetura — clinica-ricardo-xavier-site (Astro estático)

```
/                         Home
/especialidades/          índice (20)
/especialidades/<slug>/   cardiologia, ginecologia, obstetricia, clinica-medica, pediatria, dermatologia,
                          ortopedia-traumatologia, urologia, cirurgia-vascular, coloproctologia, oftalmologia,
                          otorrinolaringologia, neurologia, nefrologia, psiquiatria, psicologia, nutricao,
                          fisioterapia, fonoaudiologia, odontologia
/exames/                  índice
/exames/<slug>/           ressonancia-magnetica, exames-de-imagem, exames-laboratoriais,
                          exames-cardiologicos, exames-ginecologicos, endoscopia-e-colonoscopia
/agendar/                 formulário que só monta a mensagem de WhatsApp (sem CPF, sem sintomas)
/resultados/              links para portais Laboratório e Imagem
/postos-de-coleta/        4 postos + sede
/sobre/                   história, RTs, hospital maternidade, urgência 24h, endereço/mapa
/blog/ + /blog/<slug>/    6 artigos
/privacidade/  /404
```

Dados: `src/data/site.ts`, `especialidades.ts`, `exames.ts`, `posts.ts`, `postos.ts`.
Layout: `src/layouts/Base.astro` (SEO, JSON-LD, header, footer, barra fixa mobile, FAB).
JSON-LD: MedicalClinic (sede) + Hospital? não — usar MedicalClinic com `medicalSpecialty`, Physician (Dr. Ricardo Xavier), BreadcrumbList, FAQPage, Article, MedicalTest nos exames.
`vercel.json`: cleanUrls, trailingSlash true, 301 das URLs antigas, 410 para `/details/*` e `/service/*` (via rota que devolve 410 não é possível em estático → 301 para `/` não; usar `"headers"` + página `gone`? Decisão: redirect 301 para `/` evita soft-404 ruim; preferir resposta 410 via Vercel `routes`? `vercel.json` não mistura `routes` com `redirects`. Solução: middleware Edge mínimo `middleware.js` que devolve 410 para `/details/` e `/service/`).
Indexação: `PUBLIC_INDEXAR=true` remove noindex.
