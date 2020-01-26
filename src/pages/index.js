import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';
import { Quote } from '../components/quote';

export default ({ data, location }) => {
  return (
    <Layout>
      <BaseHead />
      <Helmet>
        <title>
          Présentation | Marielle Tuil-Bensimon - Shiatsu traditionnel
        </title>
        <meta
          name="description"
          content="Comment mon parcours juridique et les épreuves de la vie m'ont amené à pratiquer le Qi Gong, le Do in et le Shiatsu."
        />
      </Helmet>
      <Header pathname={location.pathname} />
      <Content>
        <h2>Présentation</h2>
        <Quote>
          “A force de sacrifier l’essentiel pour l’urgence, on finit par oublier
          l’urgence de l’essentiel” — Edgar Morin
        </Quote>
        <Img
          fluid={data.marielle.childImageSharp.fluid}
          alt="Marielle avec les bras ouverts"
        />
        <p>
          Dans mon parcours, rien ne me destinait à pratiquer le Shiatsu
          traditionnel. Juriste de formation, j’ai évolué dans le milieu
          juridique pendant 26 ans dont près de 20 ans en statut libéral. Le
          stress faisait partie de mon quotidien, nourri par l’exigence de
          l’immédiateté et l’urgence de chaque instant. Il y a huit ans j’ai été
          touchée par un cancer du sein, après avoir suivi un traitement de
          chimiothérapie et de radiothérapie, des effets secondaires difficiles
          à gérer sont apparus petit à petit; je me sentais chuter, j’avais
          perdu ma joie de vivre et je ne me reconnaissais plus. Sur les
          conseils d’une amie, j’ai rencontré les pratiques de Qi Gong et de Do
          In (automassages ou auto-shiatsu) qui m’ont permis rapidement de
          retrouver un second souffle et mon énergie vitale. Plusieurs effets
          secondaires ont disparu. Je me suis réconciliée avec mon corps et cela
          a boosté ma combativité face à la maladie. Ces pratiques m’ont offert
          des résultats immédiats et durables.
        </p>
        <p>
          Pratiquer au quotidien le Qi Gong et le Do in m’ont permis de prendre
          conscience que c’est d’abord la détente du corps qui permet
          l’apaisement du mental. Ces disciplines ont été des aides précieuses :
          j’ai atteint un état de paix intérieure et de quiétude et j’ai
          retrouvé confiance en moi.
        </p>
        <p>
          Le Qi Gong et le Do In sont des techniques de revitalisation qui
          associent des mouvements corporels souples et lents issus de la
          culture traditionnelle chinoise le long des points d’acupuncture, une
          respiration consciente profonde et une concentration dans l’instant
          présent.
        </p>
        <p>
          Ces pratiques permettent de stimuler en nous la circulation de
          l’énergie vitale et de détendre le corps. Ce rééquilibrage des
          énergies procure détente et bien-être et harmonise aussi bien le corps
          que l’esprit.
        </p>
        <p>
          Ces épreuves ont rebattu les cartes et m’ont donné envie d’une part,
          d’approfondir ces pratiques et d’autre part, de les compléter en
          suivant une formation de praticienne en Shiatsu afin de partager ce
          que j’avais reçu.
        </p>
        <p>
          Le Shiatsu et le Do In sont deux méthodes de bien-être destinées à
          prévenir la maladie, à maintenir et renforcer santé et équilibre. Do
          In ou auto-shiatsu est une technique d’harmonisation et de
          revitalisation qui se pratique par soi-même sur soi-même. Le Shiatsu
          se réalise sur les autres et représente un extraordinaire moyen de
          contact et de communication avec autrui.
        </p>
        <Img
          fluid={data.oie.childImageSharp.fluid}
          alt="Une oie qui court sur l'eau"
        />
        <h3>Formations</h3>
        <ul>
          <li>
            Certifiée praticienne en Shiatsu traditionnel de l’école ZEN PLUS de
            Gilles Valentin.
          </li>
          <li>Stage d’été Shiatsu assis avec Bernard BOUHERET.</li>
          <li>
            Certifiée formation professionnelle de Qi Gong de l’institut
            QUIMETAO, Dr Jian Liujun.
          </li>
          <li>
            Stages et cours hebdomadaires avec Véronique Viloing, enseignante Qi
            Gong de la verticalité, médecine traditionnelle chinoise et
            méditation.
          </li>
          <li>Stage méditation MBSR avec Véronique Viloing (1er cycle).</li>
          <li>
            Ecole ZHI ROU JIA, “l’école du développement de la douceur” (en 3ème
            et dernière année).
          </li>
          <li>
            Certificat de qualification professionnelle (CQP), Fédération Sport
            Pour Tous (formation en cours).
          </li>
          <li>
            Ana PEROCCO, tutrice dans le cadre du CQP et enseignante Qi Gong et
            Do In.
          </li>
        </ul>
      </Content>
    </Layout>
  );
};

export const query = graphql`
  {
    marielle: file(relativePath: { eq: "marielle-bras-ouverts.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oie: file(relativePath: { eq: "oie-court-eau.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
