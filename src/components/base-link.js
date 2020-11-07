import styled from '@emotion/styled';
import React from 'react';

export const BaseLink = ({ children, href }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

const Link = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: underline;
  margin-bottom: 15px;
`;
