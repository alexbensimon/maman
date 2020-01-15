import styled from '@emotion/styled';
import React from 'react';
import { MdOpenInNew } from 'react-icons/md';

export const Article = ({ url, title }) => (
  <Container href={url} target="_blank" rel="noopener noreferrer">
    <Title>{title}</Title>
    <MdOpenInNew size={20} />
  </Container>
);

const Container = styled.a`
  min-height: 60px;
  border: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px 0;
`;

const Title = styled.span`
  margin-right: 10px;
  width: 90%;
`;
