import React, { FC, useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
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
import { Alert, StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarketDatesProps } from '../../components/Calendar';
import { useNavigation, NavigationProp, ParamListBase, useRoute } from '@react-navigation/native';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { Car } from '../../Models/Car.Model';

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: Car;
}

export const Scheduling: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [marketDates, setMarketDates] = useState<MarketDatesProps>({} as MarketDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);
  const theme = useTheme();
  const { params } = useRoute();

  const { car } = params as Params;

  const handleConfirmRental = () => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      return Alert.alert('Selecione um período para alugar');
    }
    navigation.navigate('SchedulingDetails', {
      car,
      dates: Object.keys(marketDates),
    });
  };

  const handleNavigateToCarDetails = () => {
    navigation.goBack();
  };

  const handleChangeDate = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarketDates(interval);

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy'),
    });
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <BackButton onPress={handleNavigateToCarDetails} color={theme.colors.shape} />
        <Title>
          Escolha um {'\n'}
          data de inicio e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar onDayPress={handleChangeDate} markedDates={marketDates} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} color={theme.colors.main} />
      </Footer>
    </Container>
  );
};
