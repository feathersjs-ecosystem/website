import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';
import Link from '@docusaurus/Link';

import styles from './hero.module.css';

const Header = () => {
  const { isDarkTheme } = useThemeContext();

  return (
    <section className={styles.illustration}>
      <img alt="Header Illustration" src={isDarkTheme ? '/img/illustration/combined-night.jpg' : '/img/illustration/combined.jpg'} />
      <h1>A framework for real-time applications and REST APIs</h1>
      <Link className="button button--primary button--lg" to="/docs/guides">Get Started</Link>
    </section>
  );
};

export default Header;
