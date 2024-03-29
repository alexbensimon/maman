import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import { MdWarning } from 'react-icons/md';
import { BaseLink } from '../components/base-link';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';
import { Quote } from '../components/quote';
import { colors } from '../utils/colors';

export default ({ data, location }) => (
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
      <Link to="/covid/">
        <CovidBlock>
          <MdWarning size="2em" />
          <span>
            Voir les mesures que je mets en place contre le&nbsp;COVID-19
          </span>
        </CovidBlock>
      </Link>
      <h2>Présentation</h2>
      <Quote>
        “A force de sacrifier l’essentiel pour l’urgence, on finit par oublier
        l’urgence de l’essentiel” — Edgar Morin
      </Quote>
      <ImgPortraitContainer>
        <Img
          fluid={data.mariellePortrait.childImageSharp.fluid}
          alt="Portrait de Marielle"
        />
      </ImgPortraitContainer>
      <p>
        Dans mon parcours, rien ne me destinait à pratiquer le Shiatsu et le Qi
        Gong. Juriste de formation, j’ai évolué dans le milieu juridique pendant
        26 ans dont près de 20 ans en statut libéral. Le stress faisait partie
        de mon quotidien, nourri par l’exigence de l’immédiateté et l’urgence de
        chaque instant. En 2011, j'ai été touchée par la maladie. Après avoir
        suivi un lourd traitement, des effets secondaires difficiles à gérer
        sont apparus petit à petit; je me sentais chuter, j’avais perdu ma joie
        de vivre et je ne me reconnaissais plus. Sur les conseils d’une amie,
        j’ai rencontré les pratiques de Qi Gong et de Do In (automassages ou
        auto-shiatsu) qui m’ont permis rapidement de retrouver un second souffle
        et mon énergie vitale. Plusieurs effets secondaires ont disparu. Je me
        suis réconciliée avec mon corps et cela a boosté ma combativité face à
        la maladie. Ces pratiques m’ont offert des résultats immédiats et
        durables.
      </p>
      <p>
        Pratiquer au quotidien le Qi Gong et le Do in m’ont permis de prendre
        conscience que c’est d’abord la détente du corps qui permet l’apaisement
        du mental. Ces disciplines ont été des aides précieuses : j’ai atteint
        un état de paix intérieure et de quiétude et j’ai retrouvé confiance en
        moi.
      </p>
      <p>
        Le Qi Gong et le Do In sont des techniques de revitalisation qui
        associent des mouvements corporels souples et lents issus de la culture
        traditionnelle chinoise le long des points d’acupuncture, une
        respiration consciente profonde et une concentration dans l’instant
        présent.
      </p>
      <p>
        Ces pratiques permettent de stimuler en nous la circulation de l’énergie
        vitale et de détendre le corps. Ce rééquilibrage des énergies procure
        détente et bien-être et harmonise aussi bien le corps que l’esprit.
      </p>
      <p>
        Ces épreuves ont rebattu les cartes et m’ont donné envie d’une part,
        d’approfondir ces pratiques et d’autre part, de les compléter en suivant
        une formation de praticienne en Shiatsu afin de partager ce que j’avais
        reçu.
      </p>
      <p>
        Le Shiatsu et le Do In sont deux méthodes de bien-être destinées à
        prévenir la maladie, à maintenir et renforcer santé et équilibre. Do In
        ou auto-shiatsu est une technique d’harmonisation et de revitalisation
        qui se pratique par soi-même sur soi-même. Le Shiatsu se réalise sur les
        autres et représente un extraordinaire moyen de contact et de
        communication avec autrui.
      </p>
      <ImgPortraitContainer>
        <Img
          fluid={data.marielleShiatsuDos.childImageSharp.fluid}
          alt="Marielle appuie ses mains sur le dos d'un homme allongé"
        />
      </ImgPortraitContainer>
      <h3>Partenariats</h3>
      <h4>Shiatsu et cours de Qi Gong</h4>
      <ul>
        <li>
          <BaseLink href="https://institut-rafael.fr/">
            Institut Rafaël
          </BaseLink>{' '}
          - Maison de l'après cancer
        </li>
        <li>
          <BaseLink href="https://youtu.be/SyPV9vWDWVg?si=mpBu6Eg5VW-Km54h&t=179">
            Étincelle
          </BaseLink>{' '}
          - Rebondir avec un cancer
        </li>
      </ul>
      <h3>Formations</h3>
      <ul>
        <li>
          Certifiée praticienne en Shiatsu traditionnel de l’école{' '}
          <BaseLink href="http://zen-plus.fr/">ZEN PLUS</BaseLink> de Gilles
          Valentin.
        </li>
        <li>Stage d’été Shiatsu assis avec Bernard BOUHERET.</li>
        <li>
          Certifiée formation professionnelle de Qi Gong de{' '}
          <BaseLink href="https://www.quimetao.fr/">
            l’institut QUIMETAO
          </BaseLink>
          , Dr Jian Liujun, école agréée par la fédération Union Pro Qi Gong
          FEQGAE (2 ans).
        </li>
        <li>
          Ecole{' '}
          <BaseLink href="http://www.zhiroujia.com/">ZHI ROU JIA</BaseLink>,
          “l’école du développement de la douceur”, agréée par la fédération
          Union Pro Qi Gong FEQGAE (3 ans).
        </li>
        <li>
          Certificat de qualification professionnelle (CQP),{' '}
          <BaseLink href="https://www.sportspourtous.org/">
            Fédération Sport Pour Tous
          </BaseLink>
          .
        </li>
        <li>
          Ana PEROCCO, tutrice et enseignante Qi Gong et Do In formée par
          l'école{' '}
          <BaseLink href="https://www.tempsducorps.org/">
            Temps du Corps
          </BaseLink>
          .
        </li>
        <li>
          Stages et cours hebdomadaires avec Véronique Viloing, enseignante Qi
          Gong de la verticalité, médecine traditionnelle chinoise et
          méditation.
        </li>
        <li>Stage méditation MBSR avec Véronique Viloing (1er cycle).</li>
      </ul>
    </Content>
  </Layout>
);

const CovidBlock = styled.div`
  border-radius: 20px;
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 15px 30px;
  text-align: center;
  span {
    display: block;
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const ImgPortraitContainer = styled.div`
  width: 70%;
  margin: auto;
`;

export const query = graphql`
  {
    mariellePortrait: file(relativePath: { eq: "marielle-portrait.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marielleShiatsuDos: file(relativePath: { eq: "marielle-shiatsu-dos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
