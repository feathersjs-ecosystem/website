import React from 'react';
import tw from 'tailwind-styled-components';
import Link from '@docusaurus/Link';

import styles from './create-first-app.module.css';

const Container = tw.div`
  text-center
  py-36
`;

const Title = tw.h1`
  mb-8
`;

const CreateFirstApp = () => {
  return (
    <section className={styles.section}>
      <Container className="container">
        <Title>Create your first Feathers app today!</Title>
        <Link className="button button--primary button--lg" to="/docs/intro">Get started</Link>
      </Container>
    </section>
  );
};

export default CreateFirstApp;
