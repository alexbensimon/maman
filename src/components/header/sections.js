import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

export const Sections = () => (
  <Container>
    <Link to="/">
      <h3>Présentation</h3>
    </Link>
    <Link to="/shiatsu">
      <h3>Shiatsu</h3>
    </Link>
    <Link to="/entreprise">
      <h3>En entreprise</h3>
    </Link>
    <Link to="/ateliers">
      <h3>Ateliers</h3>
    </Link>
    <Link to="/infos">
      <h3>Infos pratiques</h3>
    </Link>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
