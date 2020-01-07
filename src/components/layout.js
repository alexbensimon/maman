import { css, Global } from '@emotion/core';
import React from 'react';
import { colors } from '../utils/colors';

export const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Merienda&display=swap');
        body {
          margin: 0px;
          height: 100vh;
          color: ${colors.black};
          background-color: ${colors.white};
          font-family: 'Merienda', cursive;
          h1 {
            font-size: 40px;
            line-height: 48px;
            @media (max-width: 500px) {
              font-size: 30px;
              line-height: 40px;
            }
          }
          a {
            text-decoration: none;
            color: ${colors.black};
          }
          p {
            font-size: 21px;
            line-height: 33px;
            @media (max-width: 500px) {
              font-size: 18px;
              line-height: 28px;
            }
          }
          img {
            width: 100%;
          }
        }
      `}
    />
    {children}
  </>
);
