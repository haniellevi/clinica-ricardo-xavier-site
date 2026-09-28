# Clínica Dr. Ricardo Xavier — site

Site estático em Astro. Dados em `src/data/`, páginas em `src/pages/`.

```bash
npm install
npm run dev
npm run build
```

- Indexação: o site sai com `noindex` até definir `PUBLIC_INDEXAR=true` na Vercel (produção) no dia do lançamento do domínio.
- Todo CTA abre o WhatsApp com mensagem pronta e tem `data-evento="click_whatsapp"`.
- `middleware.js` responde 410 nas URLs de spam do site antigo (`/details/*`, `/service/*`) e restos do WordPress.
- `vercel.json`: `cleanUrls` e 301 das URLs antigas.
- Documentos de pesquisa em `docs/`.
