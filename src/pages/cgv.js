import styled from '@emotion/styled';
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
      <title>Conditions générales de vente | Marielle Tuil-Bensimon</title>
      <meta
        name="description"
        content="Conditions générales de vente des prestations de Shiatsu, Qi Gong et ateliers."
      />
    </Helmet>
    <Header pathname={location.pathname} />
    <Content>
      <h2>Conditions générales de vente</h2>

      <Section>
        <h3>Article 1 – Champ d'application</h3>
        <p>
          Les présentes Conditions Générales de Vente (dites « CGV »)
          s'appliquent, sans restriction ni réserve à tout achat de séances de
          shiatsu, méthode de relaxation d'origine japonaise, qui se pratique
          par pression des doigts sur les points d'acupuncture pour mettre en
          œuvre le processus d'auto guérison naturel du corps telles que
          proposées par Marielle Tuil-Bensimon EI, Spécialiste en shiatsu et
          professionnelle de Qi Gong, demeurant au 1 Résidence Beausoleil, 92210
          Saint-Cloud, n° SIRET 439 005 513 00031 aux clients non professionnels
          (« Les Clients ou le Client »).
        </p>
        <p>
          Les caractéristiques principales des Services sont présentées sur le
          site internet personnel. Le Client est tenu de prendre connaissance
          des principales caractéristiques des Services avant toute passation de
          commande. Le choix et l'achat du service proposé est de la seule
          responsabilité du Client.
        </p>
        <p>
          Ces CGV sont accessibles à tout moment sur le site personnel et
          prévaudront sur tout autre document. Le Client déclare avoir pris
          connaissance des présentes CGV et les avoir acceptées avant la mise en
          œuvre de la prestation.
        </p>
      </Section>

      <Section>
        <h3>Article 2 – Prix</h3>
        <p>
          Les Services sont fournis aux tarifs en vigueur figurant sur la fiche
          tarifaire, lors de l'enregistrement de la commande. Les prix sont
          exprimés en Euros TTC. TVA non applicable, art. 293 B du CGI. Ces
          tarifs sont fermes et non révisables pendant leur période de validité
          mais le Prestataire se réserve le droit, hors période de validité,
          d'en modifier les prix à tout moment.
        </p>
        <p>
          Le paiement demandé au Client correspond au montant total de la
          prestation. Une facture est établie et remise au Client lors de la
          fourniture des prestations commandées.
        </p>
      </Section>

      <Section>
        <h3>Article 3 – Commandes</h3>
        <p>
          Il appartient au Client de sélectionner le service qu'il désire
          commander, selon les modalités figurant sur le site ou la fiche
          tarifaire, et de vérifier l'exactitude de la commande. Il appartient
          au Client de signaler immédiatement toute erreur ou empêchement pour
          le rendez-vous.
        </p>
        <p>
          Le Client recevra une confirmation du rendez-vous comprenant la date,
          l'heure et le lieu de rendez-vous. Le Client a la possibilité
          d'annuler sans délai sa commande de rendez-vous et peut changer le
          lieu de fourniture de la prestation avant que celle-ci ne soit
          réalisée.
        </p>
      </Section>

      <Section>
        <h3>Article 4 – Conditions de paiement</h3>
        <p>
          Le prix est payé par chèque, en espèces ou par virement bancaire. Le
          prix est payable en totalité et en un seul versement à la fin de la
          prestation. Aucun acompte n'est exigé lors de la passation de la
          commande par le Client.
        </p>
      </Section>

      <Section>
        <h3>Article 5 – Fourniture des Prestations</h3>
        <p>
          La prestation commandée par le Client sera fournie selon les modalités
          suivantes : consistant en une séance de shiatsu d'une durée d'environ
          une heure, la prestation sera effectuée au cabinet du professionnel.
          La date et l'horaire de la réalisation de la prestation seront
          confirmés au Client, par téléphone ou par mail.
        </p>
        <p>
          Le Prestataire s'engage à effectuer sa prestation avec sérieux et
          professionnalisme pour fournir les Services commandés par le Client,
          dans le cadre d'une obligation de moyen et dans les délais convenus
          entre eux.
        </p>
        <p>
          Le Client disposera d'un délai de 30 jours à compter de la fourniture
          des Services pour émettre des réclamations par courrier recommandé
          avec accusé de réception.
        </p>
      </Section>

      <Section>
        <h3>Article 6 – Droit de rétractation</h3>
        <p>
          Selon les modalités de l'article L221-18 du Code de la Consommation,
          le consommateur dispose d'un délai de quatorze jours pour exercer son
          droit de rétractation d'un contrat conclu à distance, sans avoir à
          motiver sa décision ni à supporter d'autres coûts que ceux prévus aux
          articles L. 221-23 à L. 221-25.
        </p>
        <p>
          Le droit de rétractation peut être exercé en ligne ou par courrier
          postal adressé au Prestataire aux coordonnées indiquées à l'Article 1.
        </p>
      </Section>

      <Section>
        <h3>Article 7 – Responsabilité du Prestataire – Garanties</h3>
        <p>
          Le Professionnel s'engage envers le Client, conformément aux
          dispositions légales et sans paiement complémentaire, à apporter tous
          les moyens et toutes ses capacités pour exécuter sa prestation et
          l'ensemble de ses obligations.
        </p>
        <p>
          Afin de faire valoir ses droits, le Client devra informer le
          Prestataire, par courrier avec accusé de réception, de l'existence des
          vices ou défauts de conformité. Le Professionnel remboursera ou
          rectifiera les services jugés défectueux dans les meilleurs délais et
          au plus tard dans les 30 jours suivant la constatation du défaut.
        </p>
      </Section>

      <Section>
        <h3>Article 8 – Données personnelles</h3>
        <p>
          Le Client est informé que la collecte de ses données à caractère
          personnel est nécessaire à la vente des Services et leur réalisation.
          Ces données à caractère personnel sont récoltées uniquement pour
          l'exécution du contrat de prestations de services.
        </p>
        <h4>8.1 Collecte des données</h4>
        <p>
          Les données collectées sont : nom, prénom, adresse postale, adresse
          mail, coordonnées téléphoniques. Lors de la réalisation de la
          Prestation : antécédents médicaux, nature des interventions ou
          accidents, prises médicamenteuses, contre-indications médicales.
        </p>
        <h4>8.2 Destinataires des données</h4>
        <p>
          Les données à caractère personnel sont réservées à l'usage unique du
          Professionnel. Le responsable de traitement des données est le
          Professionnel, au sens de la loi Informatique et libertés et du
          Règlement 2016/679 sur la protection des données à caractère personnel
          (RGPD).
        </p>
        <h4>8.3 Limitation du traitement</h4>
        <p>
          Les données à caractère personnelles ne sont pas utilisées à des fins
          publicitaires ou marketing. Les données médicales sont couvertes par
          le secret professionnel.
        </p>
        <h4>8.4 Durée de conservation</h4>
        <p>
          Le Prestataire conservera les données ainsi recueillies pendant un
          délai de 5 ans, couvrant le temps de la prescription de la
          responsabilité civile contractuelle applicable.
        </p>
        <h4>8.5 Droits des Clients</h4>
        <p>
          En application de la règlementation applicable aux données à caractère
          personnel, les Clients disposent des droits suivants : mise à jour,
          suppression, accès, rectification, portabilité et opposition au
          traitement de leurs données. Ces droits peuvent être exercés en
          adressant une demande par courrier ou par e-mail à l'adresse indiquée
          à l'Article 1.
        </p>
        <p>
          En cas de refus, le Client peut introduire une réclamation auprès de
          la CNIL (3 place de Fontenoy, 75007 PARIS) ou saisir une autorité
          judiciaire.
        </p>
      </Section>

      <Section>
        <h3>Article 9 – Propriété intellectuelle</h3>
        <p>
          Le contenu du site personnel est la propriété du Prestataire et est
          protégé par les lois françaises et internationales relatives à la
          propriété intellectuelle. Toute reproduction totale ou partielle de ce
          contenu est strictement interdite et est susceptible de constituer un
          délit de contrefaçon.
        </p>
      </Section>

      <Section>
        <h3>Article 10 – Droit applicable – Langue</h3>
        <p>
          Les présentes CGV et les opérations qui en découlent sont régies et
          soumises au droit français. Elles sont rédigées en langue française.
        </p>
      </Section>

      <Section>
        <h3>Article 11 – Litiges</h3>
        <p>
          Le Client est informé qu'il peut en tout état de cause recourir à une
          médiation conventionnelle, auprès des instances de médiation
          sectorielles existantes ou à tout mode alternatif de règlement des
          différends en cas de contestation.
        </p>
        <p>
          En l'espèce, le médiateur désigné est l'Association Nationale des
          Médiateurs – ANM Conso – 62, rue Tiquetonne 75002 PARIS –
          http://www.anm-conso.com
        </p>
        <p>
          Le Client est également informé qu'il peut recourir à la plateforme de
          Règlement en Ligne des Litiges (RLL) :
          https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show
        </p>
        <p>
          Tous les litiges auxquels les opérations d'achat et de vente conclues
          en application des présentes CGV et qui n'auraient pas fait l'objet
          d'un règlement amiable entre le vendeur ou par médiation, seront
          soumis aux tribunaux compétents dans les conditions de droit commun.
        </p>
      </Section>
    </Content>
  </Layout>
);

const Section = styled.div`
  margin-bottom: 30px;

  h3 {
    margin-bottom: 15px;
  }

  h4 {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;
