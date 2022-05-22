import styled from '@emotion/styled';
import React from 'react';
import Helmet from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
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
          Téléphone : <BaseLink href="tel:0623148896">06 23 14 88 96</BaseLink>
        </div>
        <div>
          E-mail :{' '}
          <BaseLink href="mailto:mariellebensimon@gmail.com">
            mariellebensimon@gmail.com
          </BaseLink>
        </div>
      </BigSection>
      <BigSection>
        <h3>Prestations</h3>
        <SmallSection>
          <SmallTitle>Shiatsu</SmallTitle>
          <LinkContainer>
            Cabinet situé au{' '}
            <BaseLink href="https://goo.gl/maps/54CwiUKxRw6q5LDN6">
              1 Résidence Beausoleil, 92210 Saint-Cloud
            </BaseLink>
            .
          </LinkContainer>
          <List>
            <li>1 séance : 65 €</li>
            <li>3 séances : 180 €</li>
          </List>
          <BaseLink href="https://www.google.fr/search?ved=1t:65428&hl=fr&q=Shiatsu+Saint-Cloud+-+Marielle+Tuil-Bensimon&ludocid=7073596803530957015&lsig=AB86z5UpmC0wtz1NGu_elXq0Msxu#fpstate=lie&lrd=0x47e67b81390e309f:0x622a76d0b6cd20d7,1,,,">
            <Flex>
              <MarginRight>Voir les avis Google</MarginRight>
              <FcGoogle />
            </Flex>
          </BaseLink>
        </SmallSection>
        <SmallSection>
          <SmallTitle>Qi Gong</SmallTitle>
          <TinyTitle>En visio</TinyTitle>
          <div>Cours de 1h en visio le samedi à 10h30.</div>
          <List>
            <li>Tarif : 10 €</li>
            <li>Cours d'essai gratuit</li>
          </List>
          <TinyTitle>En physique</TinyTitle>
          <div>Cours le lundi de 19h45 à 21h00 à Boulogne-Billancourt.</div>
          <List>
            <li>30 cours : 480 €</li>
          </List>
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

const TinyTitle = styled.h5`
  margin-top: 0px;
  margin-bottom: 10px;
`;

const LinkContainer = styled.div`
  margin-bottom: 15px;
`;

const List = styled.ul`
  margin-top: 0;
  margin-bottom: 10px;
`;

const Flex = styled.span`
  display: flex;
  align-items: center;
`;

const MarginRight = styled.span`
  margin-right: 5px;
`;
