import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

import Hero from '../components/hero';
import WhatIsFeathers from '../components/what-is-feathers';
import Supporters from '../components/supporters';
import Generator from '../components/generator';
import WhatMakesItSpecial from '../components/what-makes-it-special';
import CreateFirstApp from '../components/create-first-app';

export default function Home () {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head bodyAttributes={{ class: 'home' }} />
      <Layout
        title={`${siteConfig.title} | ${siteConfig.tagline}`}
        description="Feathers is a web-framework for creating real-time applications and REST APIs using JavaScript or TypeScript with Node.JS, React Native and the browser.">
        <Hero />
        <main>
          <WhatIsFeathers />
          <Supporters />
          <Generator />
          <WhatMakesItSpecial />
          <CreateFirstApp />
        </main>
      </Layout>
    </>
  );
}
