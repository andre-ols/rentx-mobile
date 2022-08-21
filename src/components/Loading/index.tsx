import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

export const Loading: FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator color={theme.colors.main} size="large" />
    </Container>
  );
};
