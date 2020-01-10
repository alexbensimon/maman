import React from 'react';
import postureOiseauImage from '../assets/img/posture-oiseau.jpg';
import { Underline } from '../components/commonstyles';
import { Content } from '../components/content';
import { Header } from '../components/header';
import { Layout } from '../components/layout';

export default () => {
  return (
    <Layout>
      <Header />
      <Content>
        <h1>Ateliers</h1>
        <img src={postureOiseauImage} alt="Un oiseau"></img>
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
        <h2>“Le repos est le maître du mouvement” — Lao Tseu</h2>
        <p>
          <a
            href="https://www.lemonde.fr/sante/article/2016/08/31/l-hopital-experimente-le-qi-gong-pour-soulager-des-effets-secondaires-du-cancer_4990653_1651302.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Underline>
              Le Qi Gong pour soulager les effets secondaires du cancer
            </Underline>
          </a>
        </p>
      </Content>
    </Layout>
  );
};
