import styled from '@emotion/styled';
import React from 'react';
import Helmet from 'react-helmet';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <BaseHead />
      <Helmet>
        <title>
          Infos pratiques | Marielle Tuil-Bensimon - Praticienne en Shiatsu
          traditionnel
        </title>
        <meta
          name="description"
          content="Contact, durée, prix et formules des séances de Shiatsu en cabinet, à domicile et en entreprise."
        />
      </Helmet>
      <Header />
      <Content>
        <h1>Infos pratiques</h1>
        <p>
          <UnderlineBold>Sur rendez-vous</UnderlineBold> : 06 23 14 88 96
        </p>
        <h2>Tarifs</h2>
        <p>Durée de la séance : ~ 1 heure</p>
        <span>En cabinet</span>
        <List>
          <li>1 séance : 60 €</li>
          <li>3 séances : 150 €</li>
        </List>
        <p>A domicile - 1 séance : 70 €</p>
        <p>Enfant : 30 min - 35 € (en cabinet)</p>
        <p>
          <b>En entreprise</b> : 70 € de l’heure
        </p>
      </Content>
    </Layout>
  );
};

const UnderlineBold = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;

const List = styled.ul`
  margin-top: 0;
`;
