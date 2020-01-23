import styled from '@emotion/styled';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { colors } from '../../utils/colors';
import { Sections } from './sections';

export const Menu = ({ pathname }) => {
  const [showFullHeader, setShowFullHeader] = useState(false);
  return (
    <Container>
      <MenuMobile>
        <div>
          <button
            onClick={() => setShowFullHeader(showFullHeader => !showFullHeader)}
          >
            <h3>Menu</h3>
            {showFullHeader ? (
              <MdKeyboardArrowUp size={30} />
            ) : (
              <MdKeyboardArrowDown size={30} />
            )}
          </button>
        </div>
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
  @media (min-width: 600px) {
    display: none;
  }
`;

const MenuDesktop = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;
