import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

export const Layout = ({ children }) => (
  <Wrapper>
    <Global
      styles={css`
        div {
          background: white;
          color: black;
        }
      `}
    />
    {children}
  </Wrapper>
);

const Wrapper = styled('div')``;
