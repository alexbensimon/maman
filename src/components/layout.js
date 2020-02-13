import { css, Global } from '@emotion/core';
import React from 'react';
import { colors } from '../utils/colors';

export const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Merienda&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
        body {
          margin: 0px;
          height: 100vh;
          color: ${colors.black};
          background-color: ${colors.white};
          font-family: 'Roboto', sans-serif;
          font-size: 21px;
          line-height: 33px;
          @media (max-width: 600px) {
            font-size: 18px;
            line-height: 28px;
          }
          h1 {
            font-family: 'Merienda', cursive;
            font-size: 40px;
            line-height: 48px;
            @media (max-width: 600px) {
              font-size: 30px;
              line-height: 40px;
            }
          }
          h2,
          h4 {
            font-family: 'Merienda', cursive;
          }
          h3 {
            font-family: 'Merienda', cursive;
            @media (max-width: 850px) {
              font-size: 20px;
              line-height: 25px;
            }
          }
          a {
            font-family: 'Merienda', cursive;
            text-decoration: none;
            color: ${colors.black};
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
