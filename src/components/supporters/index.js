import React from 'react';
import Link from '@docusaurus/Link';

import styles from './supporters.module.css';

const Supporters = () => {
  return (
    <section className={styles.supporters}>
      <div className="container">
        <h2 className={styles.title}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</h2>
        <Link className="button button--primary button--lg">
          Become a Supporter
        </Link>
      </div>
    </section>
  );
};

export default Supporters;
