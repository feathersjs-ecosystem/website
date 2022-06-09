import React from 'react';
import Link from '@docusaurus/Link';
import tw from 'tailwind-styled-components';

import styles from './supporters.module.css';

const Title = tw.h2`
  md:max-w-4xl
  m-auto
  mb-12
`;

const Supporters = () => {
  return (
    <section className={styles.supporters}>
      <div className="container">
        <Title>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</Title>
        <Link className="button button--primary button--lg">
          Become a Supporter
        </Link>
      </div>
    </section>
  );
};

export default Supporters;
