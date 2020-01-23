import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../../utils/colors';

export const Sections = ({ pathname }) => (
  <Container>
    <Link to={urls.index}>
      <Section pathname={pathname} section={urls.index}>
        Présentation
      </Section>
    </Link>
    <Link to={urls.shiatsu}>
      <Section pathname={pathname} section={urls.shiatsu}>
        Shiatsu
      </Section>
    </Link>
    <Link to={urls.entreprise}>
      <Section pathname={pathname} section={urls.entreprise}>
        En entreprise
      </Section>
    </Link>
    <Link to={urls.ateliers}>
      <Section pathname={pathname} section={urls.ateliers}>
        Ateliers
      </Section>
    </Link>
    <Link to={urls.infos}>
      <Section pathname={pathname} section={urls.infos}>
        Infos pratiques
      </Section>
    </Link>
  </Container>
);

const urls = {
  index: '/',
  shiatsu: '/shiatsu',
  entreprise: '/entreprise',
  ateliers: '/ateliers',
  infos: '/infos',
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Section = styled.h3`
  color: ${props =>
    props.pathname === props.section ? colors.alert : colors.black};
`;
