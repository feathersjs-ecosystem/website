import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './what-is-feathers.module.css';

const FeatureList = [
  {
    Svg: require('../../../static/img/client-bird.svg').default,
    description: (
      <>
        <p>Feathers is a lightweight web-framework for creating real-time applications and REST APIs using JavaScript or TypeScript.</p>
        <p>Feathers can interact with any backend technology, supports over a dozen databases and works with any frontend technology like React, VueJS, Angular, React Native, Android or iOS. </p>
      </>
    )
  },
  {
    Svg: require('../../../static/img/server-bird.svg').default,
    description: (
      <>
        <p>Build prototypes in minutes and production-ready apps in days.</p>
        <p>Seriously.</p>
        <p>
          <Link className="button button--primary" to="/docs/guides">Learn more →</Link>
        </p>
      </>
    )
  }
];

function Feature ({ Svg, title, description, reverse }) {
  return (
    <>
      <div className={clsx('col col--6', { [styles.alignRight]: !reverse, [styles.alignLeft]: reverse })}>
        <Svg className={styles.svg} alt={title} />
      </div>
      <div className={clsx('col col--6')}>
        {description}
      </div>
    </>
  );
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, index) => (
          <div className={clsx('row row--no-gutters', { [styles.reverse]: index % 2 !== 0 }, styles.row)} key={index}>
            <Feature className={styles.feature} {...props} reverse={index % 2 !== 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
