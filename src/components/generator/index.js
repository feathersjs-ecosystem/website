import React from 'react';
import tw from 'tailwind-styled-components';

import Illustration from '../../../static/img/cli-bird.svg';
import styles from './generator.module.css';

const Paragraph = tw.p`
  max-w-3xl
  text-xl
  m-auto
`;

const Generator = () => {
  return (
    <section className={styles.generator}>
      <div className="container">
        <h2>Create your first real-time app in minutes</h2>
        <div className={styles.illustrationContainer}>
          <Illustration className={styles.illustration} />
          <div className={styles.code}>
            <pre>
              $ npm install -g @feathersjs/cli<br />
              $ mkdir my-app<br />
              $ cd my-app<br />
              $ feathers generate app<br />
              $ npm start
            </pre>
          </div>
        </div>
        <Paragraph>Check out the docs to learn more about Feathers, feel free say hello in the Slack group, or show us some love on Twitter.</Paragraph>
      </div>
    </section>
  );
};

export default Generator;
