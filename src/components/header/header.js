import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { Menu } from './menu';

export const Header = () => {
  return (
    <Container>
      <Link to="/">
        <h1>L'envol du souffle</h1>
      </Link>
      <h2>Marielle Tuil-Bensimon - Praticienne en Shiatsu traditionnel</h2>
      <h3>Entretenez votre énergie, votre équilibre et votre sérénité</h3>
      <Menu />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid;
  padding: 0 28px;
`;
