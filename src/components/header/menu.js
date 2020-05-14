import styled from '@emotion/styled';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { colors } from '../../utils/colors';
import { Sections } from './sections';

export const Menu = ({ pathname }) => {
  const [showFullHeader, setShowFullHeader] = useState(false);
  return (
    <Container>
      <MenuMobile
        onClick={() => setShowFullHeader(showFullHeader => !showFullHeader)}
      >
        <Title>Menu</Title>
        {showFullHeader ? (
          <MdKeyboardArrowUp size={30} />
        ) : (
          <MdKeyboardArrowDown size={30} />
        )}
        {showFullHeader && <Sections pathname={pathname} />}
      </MenuMobile>
      <MenuDesktop>
        <Sections pathname={pathname} />
      </MenuDesktop>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${colors.beige};
`;

const MenuMobile = styled.div`
  @media (max-width: 600px) {
    display: inline-block;
  }
  @media (min-width: 600px) {
    display: none;
  }
`;

const Title = styled.h3`
  text-decoration: underline;
`;

const MenuDesktop = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
