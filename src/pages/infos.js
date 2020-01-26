import styled from '@emotion/styled';
import React from 'react';
import Helmet from 'react-helmet';
import { IoLogoGoogle } from 'react-icons/io';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';

export default ({ location }) => {
  return (
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
        <p>
          <UnderlineBold>Sur rendez-vous</UnderlineBold> : 06 23 14 88 96
        </p>
        <p>Email : mariellebensimon@gmail.com</p>
        <GoogleReviewsLink
          href="https://www.google.fr/search?q=Shiatsu+Saint-Cloud+-+Marielle+Tuil-Bensimon&ludocid=7073596803530957015&lsig=AB86z5UpmC0wtz1NGu_elXq0Msxu#fpstate=lie&lrd=0x47e67b81390e309f:0x622a76d0b6cd20d7,1,,,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGoogle size={30} />
          <GoogleReviewsLinkText>Voir les avis Google</GoogleReviewsLinkText>
        </GoogleReviewsLink>
        <h3>Tarifs</h3>
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

const GoogleReviewsLink = styled.a`
  font-family: 'Roboto', sans-serif;
  :hover {
    text-decoration: underline;
  }
  display: flex;
`;

const GoogleReviewsLinkText = styled.span`
  margin-left: 5px;
`;

const List = styled.ul`
  margin-top: 0;
`;
