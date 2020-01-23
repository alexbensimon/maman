import styled from '@emotion/styled';
import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { colors } from '../utils/colors';

export const Article = ({ url, title }) => (
  <Container href={url} target="_blank" rel="noopener noreferrer">
    <Title>{title}</Title>
    <MdOpenInNew size={20} />
  </Container>
);

const Container = styled.a`
  min-height: 60px;
  border-radius: 2px;
  color: ${colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding: 10px 0;
  background-color: ${colors.beige};
`;

const Title = styled.span`
  margin-right: 10px;
  width: 90%;
`;
