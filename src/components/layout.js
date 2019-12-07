import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';

export const Layout = ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Merienda&display=swap');
      `}
    />
    <Global
      styles={css({
        body: {
          margin: 0,
        },
        h1: {
          margin: 0,
        },
        a: {
          textDecoration: 'none',
          color: colors.black,
        },
      })}
    />
    {children}
  </Wrapper>
);

const Wrapper = styled.div({
  height: '100vh',
  color: colors.black,
  backgroundColor: colors.white,
  fontFamily: 'Merienda, cursive',
});
