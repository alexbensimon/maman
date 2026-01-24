import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { FcGoogle } from 'react-icons/fc';
import { BaseLink } from '../components/base-link';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';

export default ({ location, data }) => (
  <Layout>
    <BaseHead />
    <Helmet>
      <title>Infos pratiques | Marielle Tuil-Bensimon</title>
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
        <div>Marielle Tuil-Bensimon EI</div>
        <div>N° SIRET : 439 005 513 00031</div>
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
            <li>1 séance : 80 €</li>
            <li>3 séances : 210 €</li>
          </List>
          <BaseLink href="https://g.co/kgs/VvJW5q">
            <Flex>
              <MarginRight>Voir les avis Google</MarginRight>
              <FcGoogle />
            </Flex>
          </BaseLink>
        </SmallSection>
        <SmallSection>
          <SmallTitle>Qi Gong</SmallTitle>
          <div>Cours de 1h en visio le lundi à 19h30 et le samedi à 10h00.</div>
          <List>
            <li>Tarif : 37 € par mois, donne accès à tous les cours</li>
            <li>Cours d'essai gratuit</li>
          </List>
        </SmallSection>
        <SmallSection>
          <SmallTitle>Ateliers</SmallTitle>
          <div>Groupe de 6 personnes maximum, en présentiel.</div>
          <List>
            <li>Durée : 3 heures</li>
            <li>Tarif : 45 €</li>
          </List>
        </SmallSection>
        <SmallSection>
          <div>Modes de paiement acceptés : chèque, virement, espèces.</div>
          <div>Tous les prix sont TTC.</div>
          <div>TVA non applicable, art. 293 B du CGI.</div>
          <div>
            Conformément aux articles L.616-1 et R.616-1 du code de la
            consommation, mon entreprise individuelle a mis en place un
            dispositif de médiation de la consommation. L'entité de médiation
            retenue est : MEDIATION CONSOMMATION DÉVELOPPEMENT/MED CONSO DEV
          </div>
        </SmallSection>
      </BigSection>
      <BigSection>
        <h3>Mentions légales</h3>
        <SmallSection>
          <SmallTitle>Hébergeur</SmallTitle>
          <div>Netlify, Inc.</div>
          <div>101 2nd Street</div>
          <div>San Francisco, CA 94105, États-Unis</div>
          <div>E-mail : support@netlify.com</div>
        </SmallSection>
        <SmallSection>
          <StyledLink to="/cgv">Conditions générales de vente</StyledLink>
        </SmallSection>
      </BigSection>
    </Content>
  </Layout>
);

export const query = graphql`
  {
    shiatsuChild: file(relativePath: { eq: "shiatsu-child.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

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

const Flex = styled.span`
  display: flex;
  align-items: center;
`;

const MarginRight = styled.span`
  margin-right: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
`;
