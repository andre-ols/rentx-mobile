import React, { FC } from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Footer,
  Header,
  Name,
  Period,
  Price,
  Rent,
} from './styles';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useNavigation, NavigationProp, ParamListBase, useRoute } from '@react-navigation/native';
import { Car } from '../../Models/Car.Model';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
  car: Car;
}

export const CarDetails: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute();

  const { car } = params as Params;

  const handleNavigateToSchedule = () => {
    navigation.navigate('Scheduling', {
      car,
    });
  };

  const handleNavigateToHome = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Header>
        <BackButton onPress={handleNavigateToHome} />
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
            <Price>{car.rent.price}</Price>
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

        <About>{car.about}</About>
      </Content>

      <Footer>
        <Button onPress={handleNavigateToSchedule} title="Confirmar" />
      </Footer>
    </Container>
  );
};
