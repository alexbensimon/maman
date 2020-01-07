import React from 'react';
import image from '../assets/img/oie-court-eau.jpg';
import { Content } from '../components/content';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Accueil</h1>
        <img src={image} alt="Une oie qui court sur l'eau"></img>
        <p>
          Dans mon parcours, rien ne me destinait à embrasser l’exercice de
          praticienne en Shiatsu. Juriste de formation, j’ai évolué dans le
          milieu juridique durant 26 ans dont près de 20 ans en statut libéral.
          Le stress faisait partie de mon quotidien nourrit par l’exigence de
          l’immédiateté et l’urgence de chaque instant. Il y a huit ans j’ai été
          touchée par un cancer du sein, après avoir suivi un traitement de
          chimiothérapie et de radiothérapie, des effets secondaires difficiles
          à gérer sont apparus petit à petit; je me sentais chuter, j’avais
          perdu ma joie de vivre et je ne me reconnaissais plus; Sur les
          conseils d’une amie, j’ai rencontré les pratiques de Qi Gong et de Do
          In (automassages ou auto-shiatsu) qui m’ont permis rapidement de
          retrouver un second souffle et mon énergie vitale. Plusieurs effets
          secondaires ont disparus . Je me suis réconciliée avec mon corps et
          cela a boosté ma combativité face à la maladie. Ces pratiques m’ont
          offert des résultats immédiats et durables.
        </p>
        <p>
          Pratiquer au quotidien le Qi Gong et le Do in m’ont permis de prendre
          conscience que c’est d’abord la détente physique qui permet
          l’apaisement du mental. Ces disciplines ont été des aides précieuses :
          j’ai atteint un état de paix intérieure et de quiétude et j’ai
          retrouvé confiance en moi. Le Qi Gong et le Do In sont des techniques
          de revitalisation qui associent des mouvements corporels souples et
          lents issus de la culture traditionnelle chinoise le long des points
          d’acupuncture, une respiration consciente profonde et une
          concentration dans l’instant présent. Ces pratiques permettent de
          stimuler en nous la circulation de l’énergie vitale et de détendre le
          corps. Ce rééquilibrage des énergies procure détente et bien-être et
          harmonise aussi bien le corps que l’esprit.
        </p>
        <p>
          Ces épreuves ont rebattu les cartes et m’ont donné envie d’une part,
          d’approfondir ces pratiques et d’autre part, de les compléter en
          suivant une formation de praticienne en Shiatsu afin de donner à
          l’autre ce que j’avais reçu.
        </p>
        <p>
          Le Shiatsu et le Do In sont deux méthodes de bien-être destinées à
          prévenir la maladie, à maintenir et renforcer santé et équilibre; Do
          In ou auto-shiatsu est une technique d’harmonisation et de
          revitalisation qui se pratique par soi-même sur soi-même; le Shiatsu
          se réalise sur les autres et représente un extraordinaire moyen de
          contact et de communication avec autrui.
        </p>
      </Content>
    </Layout>
  );
};
