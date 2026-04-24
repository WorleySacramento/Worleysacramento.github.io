import React from 'react'
import Head from 'next/head'
import PokedexComponent from '../../components/pockedexComponent/pokedexComponent'
import Header from '../../components/header';
import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonicalUrl } from '@/lib/seo';

function PokedexPage() {
  return <div>
    <Head>
      <title>Pokedex App | {SITE_NAME}</title>
      <meta
        name="description"
        content="Aplicacao Pokedex consumindo API publica para buscar e visualizar informacoes de Pokemon com interface interativa."
      />
      <link rel="canonical" href={buildCanonicalUrl('/pokedex')} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Pokedex App | ${SITE_NAME}`} />
      <meta
        property="og:description"
        content="Projeto Pokedex com React e Next.js para consulta de dados de Pokemon."
      />
      <meta property="og:url" content={buildCanonicalUrl('/pokedex')} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`Pokedex App | ${SITE_NAME}`} />
      <meta
        name="twitter:description"
        content="Busque Pokemon por nome ou numero e veja detalhes tecnicos do projeto."
      />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    </Head>
    <Header/>
    <PokedexComponent/>
    </div>;
}

export default PokedexPage