import React from 'react';
import Helmet from 'react-helmet';
import { BaseHead } from '../components/basehead';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';

export default ({ location }) => (
  <Layout>
    <BaseHead />
    <Helmet>
      <title>Mesures contre le COVID-19 | Marielle Tuil-Bensimon</title>
      <meta
        name="description"
        content="Précautions et garanties sanitaires du cabinet de Marielle Tuil-Bensimon
        - L’envol du souffle"
      />
    </Helmet>
    <Header pathname={location.pathname} />
    <Content>
      <h2>Précautions et garanties sanitaires contre le COVID-19</h2>
      <p>
        Prendre toutes les mesures de nature à garantir la santé et la sécurité
        de tous, clientèle et praticienne.
      </p>
      <p>
        En cas de symptômes (toux, fièvre ou difficultés respiratoires) ou perte
        d’odorat/goût, le rendez-vous est refusé.
      </p>
      <h3>
        Mesures préventives des risques de contamination par le COVID-19 :
      </h3>
      <ul>
        <li>Ne pas serrer la main.</li>
        <li>
          Solution hydroalcoolique ou savon mis à la disposition avant et après
          chaque séance pour se laver les mains.
        </li>
        <li>
          Dans les toilettes et la salle de bain seront disponibles du savon
          liquide et du papier toilette.
        </li>
        <li>
          Le futon sera recouvert de grandes serviettes et de deux tissus en
          coton qui sont changés entre chaque séance et lavés à la fin de la
          journée à 60°.
        </li>
        <li>Le receveur de la séance enlève ses chaussures à l’extérieur.</li>
        <li>
          Le receveur viendra avec une tenue propre : pantalon souple, tee-shirt
          manches longues, chaussettes et masque couvrant le nez, la bouche, le
          menton et une petite serviette de toilette pour s’essuyer les mains
          après chaque lavage. Il se change dans la salle de bain prévue à cet
          effet. Un tissu en coton type fouta couvre tout le corps du receveur
          lors de la séance, lequel est changé pour chaque client et lavé à la
          fin de la journée à 60°.
        </li>
        <li>Il se change dans la salle de bain prévue à cet effet. </li>
        <li>
          le receveur conserve son masque pendant toute la durée de la séance.
        </li>
        <li>
          A l’issue de la séance, il se change à nouveau et se lave les mains ;
          il devra laver les vêtements utilisés lors de la séance.
        </li>
        <li>
          Suppression des supports papier non nécessaires (magazines, cartes de
          visite etc).
        </li>
        <li>
          La praticienne porte une tenue de pratique réservée au cabinet, qui ne
          transite pas par l’extérieur, elle porte également un masque à usage
          unique à partir de l’accueil jusqu’au départ du client. Elle se lave
          les mains au minimum avant et après la séance avec une solution
          hydroalcoolique.
        </li>
        <li>La praticienne ne touche pas le visage du receveur.</li>
      </ul>
      <ul>
        <li>
          Il est prévu une heure entre chaque séance afin d’éviter que des
          personnes ne se croisent.
        </li>
      </ul>
      <ul>
        <li>
          Après chaque séance, les lieux sont aérés. Un nettoyage avec une
          solution désinfectante et antibactérienne sur toutes les surfaces
          utilisées, chasse d’eau, cuvette, robinetterie, les poignées de
          portes, les interrupteurs, la sonnette, téléphone portable, etc.
        </li>
      </ul>
    </Content>
  </Layout>
);
