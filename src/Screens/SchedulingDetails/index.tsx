import React, { FC } from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  Accessories,
  Brand,
  CalendarIcon,
  CarImages,
  Container,
  Content,
  DateInfo,
  DateTitle,
  DateValue,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
  RentalPeriod,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import { Feather } from '@expo/vector-icons';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, NavigationProp, ParamListBase, useRoute } from '@react-navigation/native';
import { Car } from '../../Models/Car.Model';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/getPlatformDate';
interface Params {
  car: Car;
  dates: string[];
}

export const SchedulingDetails: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute();

  const { car, dates } = params as Params;

  const startDate = format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy');
  const endDate = format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy');

  const handleNavigateToSuccess = () => {
    navigation.navigate('Success');
  };

  const handleNavigateToScheduling = () => {
    navigation.goBack();
  };
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={handleNavigateToScheduling} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R${car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{startDate}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{endDate}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} X {dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {car.rent.price * dates.length}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button onPress={handleNavigateToSuccess} title="Confirmar" />
      </Footer>
    </Container>
  );
};
