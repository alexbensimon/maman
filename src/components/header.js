import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Header = () => {
  return (
    <Container>
      <Top>
        <Link to="/">
          <Title>L'envol du souffle</Title>
        </Link>
        <h2>Marielle Tuil-Bensimon</h2>
      </Top>
      <Menu>
        <Link to="/">
          <h3>Accueil</h3>
        </Link>
        <Link to="/shiatsu/">
          <h3>Shiatsu</h3>
        </Link>
        <Link to="/qigong/">
          <h3>Qi Gong</h3>
        </Link>
        <Link to="/contact/">
          <h3>Contact</h3>
        </Link>
      </Menu>
    </Container>
  );
};

const Container = styled.div({
  textAlign: 'center',
  borderBottom: '1px solid',
});

const Top = styled.div({});

const Title = styled.h1({});

const Menu = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
});
