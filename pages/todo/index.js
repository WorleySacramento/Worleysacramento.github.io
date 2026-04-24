import React from 'react'
import Head from 'next/head'
import Header from '../../components/header';
import TodoComponent from '../../components/todoComponent/todoComponent';
import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonicalUrl } from '@/lib/seo';

function TodoPage() {
  return <div>
    <Head>
      <title>Todo App | {SITE_NAME}</title>
      <meta
        name="description"
        content="Aplicacao de lista de tarefas com operacoes de cadastro, atualizacao e remocao para demonstrar integracao fullstack."
      />
      <link rel="canonical" href={buildCanonicalUrl('/todo')} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Todo App | ${SITE_NAME}`} />
      <meta
        property="og:description"
        content="Projeto de produtividade com CRUD de tarefas e foco em fluxo de usuario."
      />
      <meta property="og:url" content={buildCanonicalUrl('/todo')} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Todo App | ${SITE_NAME}`} />
      <meta
        name="twitter:description"
        content="Experimente uma lista de tarefas com interface objetiva e fluxo completo."
      />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Head>
    <Header/>
   <TodoComponent/>
    </div>
}

export default TodoPage