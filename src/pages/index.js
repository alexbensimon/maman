import React from 'react';
import Helmet from 'react-helmet';
import oieImage from '../assets/img/oie-court-eau.jpg';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <BaseHead />
      <Helmet>
        <title>
          Présentation | Marielle Tuil-Bensimon - Practicienne de Shiatsu
        </title>
        <meta
          name="description"
          content="Comment mon parcours juridique et les épreuves de la vie m'ont amené à pratiquer le Qi Gong, le Do in et le Shiatsu."
        />
      </Helmet>
      <Header />
      <Content>
        <h1>Présentation</h1>
        <h2>
          “A force de sacrifier l’essentiel pour l’urgence, on finit par oublier
          l’urgence de l’essentiel” — Edgar Morin
        </h2>
        <p>
          Dans mon parcours, rien ne me destinait à embrasser l’exercice de
          praticienne en Shiatsu traditionnel. Juriste de formation, j’ai évolué
          dans le milieu juridique durant 26 ans dont près de 20 ans en statut
          libéral. Le stress faisait partie de mon quotidien nourrit par
          l’exigence de l’immédiateté et l’urgence de chaque instant. Il y a
          huit ans j’ai été touchée par un cancer du sein, après avoir suivi un
          traitement de chimiothérapie et de radiothérapie, des effets
          secondaires difficiles à gérer sont apparus petit à petit; je me
          sentais chuter, j’avais perdu ma joie de vivre et je ne me
          reconnaissais plus; Sur les conseils d’une amie, j’ai rencontré les
          pratiques de Qi Gong et de Do In (automassages ou auto-shiatsu) qui
          m’ont permis rapidement de retrouver un second souffle et mon énergie
          vitale. Plusieurs effets secondaires ont disparus. Je me suis
          réconciliée avec mon corps et cela a boosté ma combativité face à la
          maladie. Ces pratiques m’ont offert des résultats immédiats et
          durables.
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
          prévenir la maladie, à maintenir et renforcer santé et équilibre; Do
          In ou auto-shiatsu est une technique d’harmonisation et de
          revitalisation qui se pratique par soi-même sur soi-même; le Shiatsu
          se réalise sur les autres et représente un extraordinaire moyen de
          contact et de communication avec autrui.
        </p>
        <img src={oieImage} alt="Une oie qui court sur l'eau"></img>
        <h2>Formations</h2>
        <p>
          Certifiée praticienne en Shiatsu traditionnel de l’école ZEN PLUS de
          Gilles Valentin.
          <br />
          Stage d’été Shiatsu assis avec Bernard BOUHERET.
          <br />
          Certifiée formation professionnelle de Qi Gong de l’institut QUIMETAO,
          Dr Jian Liujun.
          <br />
          Stages et cours hebdomadaires avec Véronique Viloing, enseignante Qi
          Gong de la verticalité, médecine traditionnelle chinoise et
          méditation.
          <br /> Stage méditation MBSR avec Véronique Viloing (1er cycle).
          <br /> Ecole ZHI ROU JIA, “l’école du développement de la douceur” (en
          3ème et dernière année).
          <br /> Certificat de qualification professionnelle (CQP), Fédération
          Sport Pour Tous (formation en cours) Ana PEROCCO, tutrice dans le
          cadre du CQP et enseignante Qi Gong et Do In.
        </p>
      </Content>
    </Layout>
  );
};
