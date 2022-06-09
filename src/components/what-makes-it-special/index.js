import React from 'react';
import tw from 'tailwind-styled-components';

import './what-makes-it-special.css';

const Title = tw.h1`
  text-center
`;

const Grid = tw.div`
  grid
  grid-cols-1
  lg:grid-cols-3
  gap-8
  md:max-w-5xl
  m-auto
  mt-24
`;

const Column = tw.div`
  bg-white
  p-8
  shadow-md
  rounded-sm
`;

const Paragraph = tw.p`
  text-lg
  text-center
`;

const Icon = tw.img`
  block
  m-auto
  my-8
  w-28
  h-28
`;

const WhatMakesItSpecial = () => {
  return (
    <section className="relative min-h-[30rem]">
      <div className="decor" />
      <div className="container py-12">
        <Title>See what makes Feathers special</Title>
        <Grid>
          <Column>
            <Icon src="/img/fast.svg" />
            <Title>Fast</Title>
            <Paragraph>Leveraging a unique architecture, Feathers lets you focus on building your APIs and real-time applications quickly. You automatically get scalable REST, GraphQL and real-time APIs and stay prepared for whatever else the future might bring.</Paragraph>
          </Column>
          <Column>
            <Icon src="/img/universal.svg" />
            <Title>Universal</Title>
            <Paragraph>Feathers can be used with NodeJS, Deno, in the browser, with React Native or with any other API client. You can use any database with many supported out of the box and connect your API seamlessly to any frontend framework.</Paragraph>
          </Column>
          <Column>
            <Icon src="/img/flexible.svg" />
            <Title>Flexible</Title>
            <Paragraph>Built for TypeScript and JavaScript, Feathers provides the structure to create complex applications but is flexible enough to not be in the way. With a large ecosystem of plugins you can include exactly what you need. No more, no less.</Paragraph>
          </Column>
        </Grid>
      </div>
    </section>
  );
};

export default WhatMakesItSpecial;
