import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../../utils/colors';
import { Menu } from './menu';

export const Header = ({ pathname }) => {
  return (
    <Container>
      <Top>
        <Link to="/">
          <Title>L'envol du souffle</Title>
        </Link>
        <h2>Marielle Tuil-Bensimon - Praticienne en Shiatsu traditionnel</h2>
        <h3>Entretenez votre énergie, votre équilibre et votre sérénité</h3>
      </Top>
      <Menu pathname={pathname} />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Top = styled.div`
  padding: 0 28px;
`;

const Title = styled.h1`
  margin-top: 0;
  padding-top: 20px;
  color: ${colors.red};
`;
