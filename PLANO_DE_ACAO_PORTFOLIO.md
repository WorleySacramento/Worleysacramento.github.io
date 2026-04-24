# Plano de Acao para Profissionalizar o Portfolio

## Objetivo
Elevar o portfolio para um padrao profissional, com foco em seguranca, qualidade tecnica, experiencia do usuario e apresentacao para recrutadores/clientes.

## Prioridades Gerais
- Prioridade 1: Seguranca e credenciais
- Prioridade 2: Acessibilidade e padrao de codigo front-end
- Prioridade 3: SEO e descoberta
- Prioridade 4: Conteudo e apresentacao dos projetos
- Prioridade 5: Robustez tecnica e manutencao

## Checklist de Acao (7 dias)

### Dia 1 - Seguranca (critico)
- Rotacionar todos os tokens/chaves que ja estiveram versionados.
- Remover segredos hardcoded de `pages/api/*`.
- Garantir que somente variaveis de ambiente sejam usadas no runtime.
- Revisar `.gitignore` para bloquear arquivos sensiveis.
- Validar que nenhuma credencial ativa ficou exposta.

**Criterio de aceite**
- Nenhum segredo sensivel em arquivos versionados e tokens antigos invalidados.

### Dia 2 - Acessibilidade e padrao React
- Corrigir `class` para `className` em componentes React.
- Garantir `alt` descritivo em todas as imagens.
- Remover `eslint-disable` de acessibilidade e resolver os avisos reais.
- Padronizar navegacao interna com `next/link`.
- Corrigir links quebrados ou vazios (`href=""`).

**Criterio de aceite**
- Projeto sem erros basicos de acessibilidade e navegacao consistente.

### Dia 3 - SEO tecnico
- Atualizar `title` e `meta description` com proposta de valor real.
- Adicionar tags Open Graph e Twitter Card.
- Definir URL canonica por pagina principal.
- Criar `robots.txt`.
- Gerar e publicar `sitemap.xml`.

**Criterio de aceite**
- Metadados completos e indexacao pronta para mecanismos de busca.

### Dia 4 - Conteudo profissional dos projetos
- Reescrever descricao de cada projeto com:
  - problema resolvido
  - stack utilizada
  - decisao tecnica relevante
  - resultado/impacto
- Incluir botoes claros de `Demo` e `Codigo`.
- Garantir texto objetivo, sem linguagem vaga.

**Criterio de aceite**
- Cada projeto comunica valor tecnico e impacto em ate 30 segundos de leitura.

### Dia 5 - UI/UX e consistencia visual
- Padronizar tipografia, espacamentos e paleta.
- Revisar hierarquia visual da home e secoes internas.
- Melhorar estados de hover/foco/ativo em botoes e links.
- Validar responsividade em mobile, tablet e desktop.

**Criterio de aceite**
- Interface consistente e com boa leitura em diferentes tamanhos de tela.

### Dia 6 - Qualidade tecnica e robustez
- Remover `console.log` e codigo morto.
- Corrigir imports indevidos entre client e API routes.
- Tratar estados de loading, erro e vazio (Pokedex, Rick and Morty, Todo).
- Revisar nomes e organizacao de componentes para padronizacao.

**Criterio de aceite**
- Fluxos principais sem quebra silenciosa e com tratamento de estados.

### Dia 7 - Revisao final e publicacao
- Rodar lint/build e corrigir pendencias finais.
- Executar checklist manual de navegacao.
- Medir performance e acessibilidade (Lighthouse).
- Registrar melhorias no README.
- Publicar versao final e validar deploy.

**Criterio de aceite**
- Build estavel, deploy ok e portfolio pronto para compartilhamento profissional.

## Backlog (apos a primeira versao profissional)
- Atualizar workflow para Node LTS mais recente.
- Revisar estrategia de hospedagem para rotas dinamicas/API.
- Adicionar sessao de depoimentos/resultados (se houver).
- Incluir analytics para medir visitas e cliques nos projetos.

## Definicao de pronto (DoD)
- Sem segredos expostos.
- Sem erros criticos de lint/acessibilidade.
- SEO essencial configurado.
- Projetos com narrativa tecnica clara.
- Deploy estavel e portfolio navegavel em dispositivos principais.
