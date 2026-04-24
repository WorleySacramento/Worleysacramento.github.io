# Portfolio - Worley Sacramento

Portfolio profissional desenvolvido com Next.js, com foco em qualidade tecnica, acessibilidade, SEO e experiencia do usuario.

## Stack

- Next.js 13
- React 18
- CSS Modules
- API Routes (Next.js)
- FaunaDB

## Melhorias implementadas

### Dia 1 - Seguranca

- Segredos hardcoded removidos de rotas de API.
- Leitura de credencial centralizada em variavel de ambiente (`FAUNADB_SECRET`).
- `.gitignore` reforcado para bloquear arquivos sensiveis.
- `.env.example` criado para padronizar setup local.

### Dia 2 - Acessibilidade e padrao React

- Correcao de `class` para `className`.
- `alt` descritivo em imagens relevantes.
- Correcao de links internos quebrados.
- Navegacao interna padronizada com `next/link`.

### Dia 3 - SEO tecnico

- `title` e `meta description` atualizados por pagina principal.
- Open Graph e Twitter Card adicionados.
- Canonical URL configurada por rota principal.
- `robots.txt` e `sitemap.xml` publicados.

### Dia 4 - Conteudo profissional dos projetos

- Secao de projetos reescrita com narrativa tecnica objetiva:
  - problema
  - stack
  - decisao tecnica
  - impacto
- CTAs claros de `Demo` e `Codigo`.

### Dia 5 - UI/UX e consistencia visual

- Padronizacao de tipografia e espacamentos.
- Estados de `hover`, `focus` e `active` aprimorados.
- Melhorias de responsividade em home, menu e secoes internas.

### Dia 6 - Qualidade tecnica e robustez

- Remocao de `console.log` e codigo morto.
- Refatoracao dos fluxos de dados do Todo para chamadas corretas em `/api/*`.
- Tratamento de estados de `loading`, `erro` e `vazio` em:
  - Pokedex
  - Rick and Morty
  - Todo

### Dia 7 - Revisao final

- Revisao geral de rotas principais, metadados e experiencia de navegacao.
- Diagnostico de lint no workspace sem erros via ferramenta do editor.
- Este README atualizado com o historico de melhorias.

## Configuracao local

1. Crie o arquivo `.env` a partir do `.env.example`.
2. Configure:

```env
FAUNADB_SECRET=sua_chave_faunadb
```

3. Instale as dependencias e rode o projeto:

```bash
npm install
npm run dev
```

## Rotas principais

- `/`
- `/pageWork`
- `/sobreMim`
- `/pokedex`
- `/rickMorty`
- `/todo`

## Proximos passos recomendados

- Rotacionar definitivamente qualquer token historicamente exposto.
- Executar `npm run lint` e `npm run build` no terminal com Node/NPM ativo no PATH.
- Rodar Lighthouse (Performance, Acessibilidade, SEO e Best Practices) na home e nas rotas de projetos.
