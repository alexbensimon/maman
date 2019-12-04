import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { colors } from '../utils/colors';

export const Layout = ({ children }) => (
  <Wrapper>
    <Global
      styles={css({
        body: {
          margin: 0,
        },
        h1: {
          margin: 0,
        },
      })}
    />
    {children}
  </Wrapper>
);

const Wrapper = styled.div({
  height: '100vh',
  backgroundColor: colors.light,
});
