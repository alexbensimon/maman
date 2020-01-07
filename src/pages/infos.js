import styled from '@emotion/styled';
import React from 'react';
import { Content } from '../components/content';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Infos pratiques</h1>
        <p>
          <UnderlineBold>Sur rendez-vous</UnderlineBold> : 06 23 14 88 96
        </p>
        <p>
          <Underline>Tarifs</Underline> : Durée de la séance : 1 heure 30
        </p>
        <p>En cabinet 1 séance : 60 euros - 3 séances : 150 euros</p>
        <p>A domicile : 1 séance : 70 euros</p>
        <p>En entreprise : 70 euros de l’heure</p>
        <p>Pas de TVA, statut de micro-entreprise</p>
      </Content>
    </Layout>
  );
};

const Underline = styled.span`
  text-decoration: underline;
`;

const UnderlineBold = styled.span`
  text-decoration: underline;
  font-weight: bold;
`;
