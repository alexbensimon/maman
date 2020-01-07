import React from 'react';
import { Content } from '../components/content';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Ateliers</h1>
        <h2>Do In et Qi Gong : Un esprit calme dans un corps détendu</h2>
        <p>
          Place aux techniques énergétiques avec un atelier par mois afin de
          partir à la découverte de ces pratiques de revitalisation et
          d’harmonisation pour libérer ses tensions et ressentir son corps; nous
          aborderons les méridiens d’acupuncture selon les saisons, en apprenant
          à les étirer pour faire circuler le Qi (l’énergie vitale ou le
          souffle); s’offrir un moment de ressourcement pour prendre soin de soi
          et acquérir des méthodes simples et efficaces de préservation de la
          santé et du bien-être.
        </p>
      </Content>
    </Layout>
  );
};
