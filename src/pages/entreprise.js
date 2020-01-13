import React from 'react';
import Helmet from 'react-helmet';
import shiatsuEntrepriseImage from '../assets/img/shiatsu-chaise.jpg';
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
          Shiatsu en entreprise | Marielle Tuil-Bensimon - Practicienne de
          Shiatsu
        </title>
        <meta
          name="description"
          content="Les effets seront à la fois de relaxer et de dynamiser le salarié, ce qui lui permettra de reprendre son travail efficacement."
        />
      </Helmet>
      <Header />
      <Content>
        <h1>En entreprise</h1>
        <p>
          Instaurer des espaces de détente corporelle afin d’apporter le
          bien-être au travail en réduisant les tensions, le stress et la
          fatigue. Le stress épuise nos ressources physiques et émotionnelles,
          lorsque l’on est stressé on ne respire plus, des crispations
          s’installent dans les zones du dos et entraînent des tensions et des
          douleurs.
        </p>
        <p>
          Le Shiatsu assis ou Amma est donc une pause de relaxation et de
          revitalisation plus efficace qu’une pause café. Il se déroule en 15
          minutes minimum principalement sur le haut du corps, à savoir le dos,
          les trapèzes, la nuque, les bras, et les mains. Le Shiatsu assis est
          un outil formidable de lâcher-prise, il renforce nos capacités de
          concentration, de mémoire et notre confiance en soi.
        </p>
        <p>
          Il procure de la joie et on sait que la joie est un grand
          décontractant.
        </p>
        <p>
          Il se pratique habillé, le receveur est confortablement installé sur
          une chaise ergonomique qui propose un appui thoracique confortable, la
          position assise avec les genoux pliés permet également de bien
          positionner le dos dans une détente immédiate.
        </p>
        <img
          src={shiatsuEntrepriseImage}
          alt="Une femme a les mains posées sur le dos d'un homme assis sur une chaise"
        ></img>
        <p>
          J’exercerai des pressions rythmées à l’aide de mes pouces, doigts,
          paumes de mains, avant-bras et coudes sur les points d’acupuncture,
          qui apporteront une détente profonde en libérant les tensions et les
          blocages qui sont accumulés notamment dans le dos, ainsi que dans les
          régions des épaules et de la nuque. Les effets seront à la fois de
          relaxer et de dynamiser le salarié, ce qui lui permettra de reprendre
          son travail efficacement.
        </p>
        <h2>
          “Beaucoup pensent à vivre longtemps, peu à bien vivre” — Socrate
        </h2>
      </Content>
    </Layout>
  );
};
