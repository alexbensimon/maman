import styled from '@emotion/styled';
import React from 'react';
import Helmet from 'react-helmet';
import { BaseLink } from '../components/base-link';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';

export default ({ location }) => (
  <Layout>
    <BaseHead />
    <Helmet>
      <title>Infos pratiques | Marielle Tuil-Bensimon</title>
      <meta
        name="description"
        content="Contact, durée, prix et formules des séances de Shiatsu en cabinet, à domicile et en entreprise."
      />
    </Helmet>
    <Header pathname={location.pathname} />
    <Content>
      <h2>Infos pratiques</h2>
      <BigSection>
        <h3>Contact</h3>
        <div>
          Prendre rendez-vous :{' '}
          <BaseLink href="tel:0623148896">06 23 14 88 96</BaseLink>
        </div>
        <div>
          Email :{' '}
          <BaseLink href="mailto:mariellebensimon@gmail.com">
            mariellebensimon@gmail.com
          </BaseLink>
        </div>
      </BigSection>
      <BigSection>
        <h3>Tarifs Shiatsu</h3>
        <SmallSection>
          <SmallTitle>En cabinet</SmallTitle>
          <LinkContainer>
            Situé au{' '}
            <BaseLink href="https://goo.gl/maps/54CwiUKxRw6q5LDN6">
              1 Résidence Beausoleil, 92210 Saint-Cloud
            </BaseLink>
          </LinkContainer>
          <div>Durée de la séance : ~ 1 heure</div>
          <List>
            <li>1 séance : 70 €</li>
            <li>3 séances : 180 €</li>
          </List>
          <div>Enfant : 30 min - 50 €</div>
        </SmallSection>

        <SmallSection>
          <SmallTitle>À domicile</SmallTitle>
          <div>1 séance : 90 €</div>
        </SmallSection>

        <SmallSection>
          <SmallTitle>En entreprise</SmallTitle>
          <div>100 € / heure</div>
        </SmallSection>
      </BigSection>
    </Content>
  </Layout>
);

const BigSection = styled.div`
  margin-bottom: 50px;
`;

const SmallSection = styled.div`
  margin-bottom: 35px;
`;

const SmallTitle = styled.h4`
  margin-bottom: 10px;
`;

const LinkContainer = styled.div`
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 10px;
`;
