import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Helmet from 'react-helmet';
import { BaseHead } from '../components/basehead';
import { Underline } from '../components/commonstyles';
import { Content } from '../components/content';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout';

export default ({ data }) => {
  return (
    <Layout>
      <BaseHead />
      <Helmet>
        <title>
          Shiatsu | Marielle Tuil-Bensimon - Practicienne de Shiatsu
        </title>
        <meta
          name="description"
          content="Le Shiatsu est une pratique manuelle énergétique japonaise qui prend ses racines dans la médecine traditionnelle chinoise."
        />
      </Helmet>
      <Header />
      <Content>
        <h1>Shiatsu</h1>
        <h2>
          “L’âme du Shiatsu est semblable à l’affection maternelle; la pression
          des mains fait jaillir la vie” — Tokujiro Namikoshi
        </h2>
        <p>En japonais, Shiatsu signifie “pression avec les doigts”.</p>
        <p>
          Le Shiatsu est une pratique manuelle énergétique japonaise qui prend
          ses racines dans la médecine traditionnelle chinoise. Cet art du
          toucher apporte relaxation et mieux-être et s’inscrit dans le domaine
          de la prévention. Le Shiatsu procure un bien-être physique, psychique
          et émotionnel et permet une reconnexion avec soi, plusieurs séances
          sont parfois nécessaires pour agir en profondeur et stabiliser les
          effets. Ensuite, des séances à un rythme plus espacé (une fois par
          mois ou lors des changements de saisons) permettent d’entretenir
          l’équilibre. le Shiatsu se reçoit habillé, il se pratique au sol sur
          un futon ou en position assise (Shiatsu Amma) sur une chaise
          ergonomique. Le Shiatsu est facile à mettre en oeuvre; on peut
          s’installer partout et changer de place rapidement. Il s’intègre dans
          tous les types de structures.
        </p>
        <p>
          En début de séance, je vous demanderai les raisons de votre présence
          (stress, digestif, fatigue, sommeil ou autres…), vos antécédents
          médicaux et de me préciser votre environnement de travail, familial ou
          autres. Puis, dans un second temps, je vous inviterai à vous allonger
          sur le ventre les bras le long du corps puis, j’exercerai des
          pressions verticales précises, douces et profondes le plus souvent
          avec la pulpe de mes pouces mais aussi avec les doigts, les paumes des
          mains, les coudes, les avant-bras et les pieds sur l’ensemble de votre
          corps le long des canaux par lesquels l’énergie circule appelés
          méridiens et sur les points d’acupuncture; au cours des séances
          j’utiliserai des pressions, des techniques vibratoires, des étirements
          progressifs, des réchauffements et des percussions.
        </p>
        <Img
          fluid={data.shiatsuMain.childImageSharp.fluid}
          alt="Une main d'enfant est massée par deux mains"
        />
        <p>
          Le Shiatsu est une pratique du lâcher-prise, il permet de relâcher à
          la fois les tensions musculaires et les ressassements du mental; il
          procure une détente et un bien-être profond et permet au corps de
          stimuler ses capacités naturelles d’auto-régulation; s’accorder une
          séance de Shiatsu est un véritable allié contre le stress, la fatigue,
          et permet d’améliorer le sommeil. il est source d’apaisement et de
          vitalité, et il vous aidera à prendre conscience de votre corps lors
          des dissolutions des zones bloquées. Le Shiatsu est un toucher subtil
          qui permet de libérer les tensions et d’équilibrer les émotions; il
          peut soulager aussi les douleurs du dos, des épaules ou des jambes.
        </p>
        <p>
          Le Shiatsu offre également une technique qui s’adresse à une zone
          fondamentale de notre corps, le ventre, il s’agit de l’Ampuku. Il
          permet une détente profonde de l’organisme et une libération des
          tensions telles que le stress, les troubles du sommeil et les maux de
          dos. J’inviterai la personne à s’allonger sur le dos, j’effectuerai
          une prise de contact en posant délicatement mes mains sur la zone du
          ventre, puis en exerçant des pressions progressives, des rotations,
          des vibrations je vais détendre profondément toute cette zone, ce qui
          aura pour effet de rééquilibrer cette région sensible qui est souvent
          le lieu de nos émotions enfouies dont certaines sont cristallisées
          depuis longtemps provoquant des désagréments physiques.
        </p>
        <Img
          fluid={data.ampuku.childImageSharp.fluid}
          alt="Un homme assis a la main posée sur un homme allongé"
        />
        <p>
          Mes pratiques du Qi Gong et du Do In depuis cinq ans, mise en éveil du
          corps me permettent d’entretenir ma forme physique et psychique afin
          de bien me préparer avant de donner une séance de Shiatsu; grâce à ces
          exercices de respiration profonde, mon corps se détend et le flots de
          mes pensées diminue permettant une meilleure concentration avec une
          présence ici et maintenant et un calme intérieur, atouts qui
          enrichissent ma pratique du Shiatsu; un travail centré sur l’attention
          et l’intention bienveillante permet d’équilibrer les énergies dans le
          corps et d’aider la personne qui reçoit le Shiatsu à entreprendre le
          retour vers elle-même afin qu’elle trouve ses propres solutions.
        </p>
        <p>
          Les séances n’ont en aucun cas de prétention médicale ou paramédicale.
        </p>
        <p>
          <a
            href="https://www.bioalaune.com/fr/actualite-bio/37367/shiatsu-soulager-acouphene"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Underline>Le shiatsu pour soulager les acouphènes</Underline>
          </a>
        </p>
        <p>
          <a
            href="http://www.leparisien.fr/seine-saint-denis-93/montreuil-le-shiatsu-au-chevet-des-malades-du-cancer-28-03-2019-8041485.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Underline>
              Le shiatsu contre les effets secondaires du cancer
            </Underline>
          </a>
        </p>
      </Content>
    </Layout>
  );
};

export const query = graphql`
  {
    shiatsuMain: file(relativePath: { eq: "shiatsu-main.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ampuku: file(relativePath: { eq: "ampuku.png" }) {
      childImageSharp {
        fluid(maxWidth: 680) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
