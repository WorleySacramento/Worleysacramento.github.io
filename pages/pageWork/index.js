import React from 'react'
import Head from 'next/head'
import Work from '../../components/work'
import Header from '../../components/header'
import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonicalUrl } from '@/lib/seo'



function WorkPage() {
  return (
    <div>
      <Head>
        <title>Projetos | {SITE_NAME}</title>
        <meta
          name="description"
          content="Projetos de portfolio com Pokedex, Rick and Morty e Todo App, destacando praticas de front-end com React e Next.js."
        />
        <link rel="canonical" href={buildCanonicalUrl('/pageWork')} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Projetos | ${SITE_NAME}`} />
        <meta
          property="og:description"
          content="Explore os projetos desenvolvidos por Worley Sacramento com foco em experiencia do usuario e qualidade de codigo."
        />
        <meta property="og:url" content={buildCanonicalUrl('/pageWork')} />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Projetos | ${SITE_NAME}`} />
        <meta
          name="twitter:description"
          content="Galeria de projetos com demonstracoes e desafios tecnicos."
        />
        <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      </Head>
      <Header/>
        <Work/>
    </div>
  )
}

export default WorkPage