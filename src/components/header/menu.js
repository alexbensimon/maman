import styled from '@emotion/styled';
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { Sections } from './sections';

export const Menu = () => {
  const [showFullHeader, setShowFullHeader] = useState(false);
  return (
    <>
      <MenuMobile>
        <div>
          <button
            onClick={() => setShowFullHeader(showFullHeader => !showFullHeader)}
          >
            <h3>Menu</h3>
            {showFullHeader ? (
              <MdKeyboardArrowUp size={20} />
            ) : (
              <MdKeyboardArrowDown size={20} />
            )}
          </button>
        </div>
        {showFullHeader && <Sections />}
      </MenuMobile>
      <MenuDesktop>
        <Sections />
      </MenuDesktop>
    </>
  );
};

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
