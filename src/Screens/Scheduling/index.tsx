import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../componets/BackButton';
import {
  DateTitle,
  DateValue,
  DateInfo,
  Container,
  Title,
  RentalPeriod,
  Header,
  Content,
  Footer,
} from './styles';

import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from 'react-native';
import { Button } from '../../componets/Button';
import { Calendar } from '../../componets/Calendar';

export const Scheduling: FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <BackButton onPress={() => {}} color={theme.colors.shape} />
        <Title>
          Escolha um {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected>20/08/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>20/08/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar onDayPress={() => {}} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={() => {}} color={theme.colors.main} />
      </Footer>
    </Container>
  );
};
