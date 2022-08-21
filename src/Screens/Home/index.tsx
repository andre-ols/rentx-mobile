import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../componets/Car';

export const Home: FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car
            data={{
              brand: 'Audi',
              name: 'A4',
              rent: {
                price: 300,
                preiod: 'diária',
              },
              thumbnail: 'https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png',
            }}
          />
        )}
      />
    </Container>
  );
};
