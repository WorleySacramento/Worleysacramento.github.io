import React from 'react'
import Head from 'next/head'
import Header from '../../components/header';
import RickMortComponent from '../../components/rickMortyComponent/rickMortComponent';
import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonicalUrl } from '@/lib/seo';

function RickMortyPage() {
  return <div>
    <Head>
      <title>Rick and Morty App | {SITE_NAME}</title>
      <meta
        name="description"
        content="Aplicacao para buscar personagens de Rick and Morty com dados detalhados da API oficial."
      />
      <link rel="canonical" href={buildCanonicalUrl('/rickMorty')} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Rick and Morty App | ${SITE_NAME}`} />
      <meta
        property="og:description"
        content="Projeto front-end para pesquisa de personagens com interface simples e responsiva."
      />
      <meta property="og:url" content={buildCanonicalUrl('/rickMorty')} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Rick and Morty App | ${SITE_NAME}`} />
      <meta
        name="twitter:description"
        content="Consulte personagens da serie Rick and Morty com dados em tempo real."
      />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Head>
    <Header/>
   <RickMortComponent/>
    </div>
}

export default RickMortyPage