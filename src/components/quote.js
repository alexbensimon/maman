import styled from '@emotion/styled';
import React from 'react';
import { colors } from '../utils/colors';

export const Quote = ({ children }) => <Text>{children}</Text>;

const Text = styled.h2`
  color: ${colors.alert};
`;
