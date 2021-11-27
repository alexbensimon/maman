import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import { Article } from '../components/article';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';
import { Quote } from '../components/quote';

export default ({ data, location }) => (
  <Layout>
    <BaseHead />
    <Helmet>
      <title>Ateliers | Marielle Tuil-Bensimon - Shiatsu traditionnel</title>
      <meta
        name="description"
        content="S’offrir un moment de ressourcement pour prendre soin de soi et acquérir des méthodes simples et efficaces de préservation de la santé et du bien-être."
      />
    </Helmet>
    <Header pathname={location.pathname} />
    <Content>
      <h2>Ateliers</h2>
      <Img
        fluid={data.cerclePierres.childImageSharp.fluid}
        alt="Marielle assise dans un cercle de pierres"
      />
      <h3>
        Do In, Qi Gong et relaxation sonore : Un esprit calme dans un corps
        détendu
      </h3>
      <p>
        Place aux techniques énergétiques avec un atelier par mois afin de
        partir à la découverte de ces pratiques de revitalisation et
        d’harmonisation pour libérer ses tensions et ressentir son corps. Nous
        aborderons les méridiens d’acupuncture selon les saisons, en apprenant à
        les étirer pour faire circuler le Qi (l’énergie vitale ou le souffle).
        Il s'agit de s’offrir un moment de ressourcement pour prendre soin de
        soi et acquérir des méthodes simples et efficaces de préservation de la
        santé et du bien-être. Pour poursuivre dans la détente, je vous propose
        une relaxation sonore aux bols tibétains et gong.
      </p>
      <Img
        fluid={data.bolsGong.childImageSharp.fluid}
        alt="Marielle assise dans un cercle de pierres"
      />
      <Quote>“Le repos est le maître du mouvement” — Lao Tseu</Quote>
      <Article
        url="https://www.lemonde.fr/sante/article/2016/08/31/l-hopital-experimente-le-qi-gong-pour-soulager-des-effets-secondaires-du-cancer_4990653_1651302.html"
        title="Le Qi Gong pour soulager les effets secondaires du cancer"
      />
    </Content>
  </Layout>
);

export const query = graphql`
  {
    cerclePierres: file(relativePath: { eq: "cercle-pierres.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bolsGong: file(relativePath: { eq: "bols-gong.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
