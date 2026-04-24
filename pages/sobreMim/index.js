import React from 'react';
import Head from 'next/head';
import About from '../../components/about';
import Header from '../../components/header';
import { DEFAULT_OG_IMAGE, SITE_NAME, buildCanonicalUrl } from '@/lib/seo';

function SobreMim() {
  return (
    <div>
        <Head>
          <title>Sobre Mim | {SITE_NAME}</title>
          <meta
            name="description"
            content="Conheca a trajetoria de Worley Sacramento, habilidades tecnicas e foco em desenvolvimento front-end moderno."
          />
          <link rel="canonical" href={buildCanonicalUrl('/sobreMim')} />

          <meta property="og:type" content="profile" />
          <meta property="og:title" content={`Sobre Mim | ${SITE_NAME}`} />
          <meta
            property="og:description"
            content="Perfil profissional com experiencia, tecnologias e objetivos de carreira."
          />
          <meta property="og:url" content={buildCanonicalUrl('/sobreMim')} />
          <meta property="og:image" content={DEFAULT_OG_IMAGE} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`Sobre Mim | ${SITE_NAME}`} />
          <meta
            name="twitter:description"
            content="Informacoes profissionais e experiencia de Worley Sacramento."
          />
          <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        </Head>
        <Header/>
       <About/>
    </div>
  )
}

export default SobreMim