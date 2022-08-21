import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';

export const Routes: FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
