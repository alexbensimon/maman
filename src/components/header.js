import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

export const Header = () => {
  return (
    <Container>
      <div>
        <Link to="/">
          <h1>L'envol du souffle</h1>
        </Link>
        <h2>Marielle Tuil-Bensimon</h2>
      </div>
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
        <Link to="/infos/">
          <h3>Infos pratiques</h3>
        </Link>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  border-bottom: 1px solid;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
