import styled from '@emotion/styled';
import React from 'react';
import Helmet from 'react-helmet';
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
          <Link href="tel:0623148896">06 23 14 88 96</Link>
        </div>
        <div>
          Email :{' '}
          <Link href="mailto:mariellebensimon@gmail.com">
            mariellebensimon@gmail.com
          </Link>
        </div>
      </BigSection>
      <BigSection>
        <h3>Tarifs</h3>
        <SmallSection>
          <SmallTitle>Au cabinet</SmallTitle>
          <LinkContainer>
            Situé au{' '}
            <Link
              href="https://goo.gl/maps/54CwiUKxRw6q5LDN6"
              target="_blank"
              rel="noopener noreferrer"
            >
              1 Résidence Beausoleil, 92210 Saint-Cloud
            </Link>
          </LinkContainer>
          <div>Durée de la séance : ~ 1 heure</div>
          <List>
            <li>1 séance : 60 €</li>
            <li>3 séances : 150 €</li>
          </List>
          <div>Enfant : 30 min - 35 €</div>
        </SmallSection>

        <SmallSection>
          <SmallTitle>À domicile</SmallTitle>
          <div>1 séance : 70 €</div>
        </SmallSection>

        <SmallSection>
          <SmallTitle>En entreprise</SmallTitle>
          <div>Durée de la séance : ~ 20 minutes</div>
          <div>70 € / heure</div>
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

const Link = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: underline;
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 10px;
`;
