import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

import Hero from '../components/hero';
import WhatIsFeathers from '../components/what-is-feathers';
import Supporters from '../components/supporters';
import Partners from '../components/partners';

function HomepageHeader () {
  return (
    <>
      <Hero />
    </>
  );
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      <Head bodyAttributes={{ class: 'home' }} />
      <Layout
        title={`${siteConfig.title} | ${siteConfig.tagline}`}
        description="Feathers is a web-framework for creating real-time applications and REST APIs using JavaScript or TypeScript with Node.JS, React Native and the browser.">
        <HomepageHeader />
        <main>
          <WhatIsFeathers />
          <Supporters />
          <Partners />
        </main>
      </Layout>
    </>
  );
}
