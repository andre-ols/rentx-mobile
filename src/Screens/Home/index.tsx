import React, { FC, useCallback, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';
import Logo from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarComponent } from '../../components/CarComponent';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { api } from '../../services/api';
import { Car } from '../../Models/Car.Model';
import { useTheme } from 'styled-components';
import { Loading } from '../../components/Loading';

export const Home: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();

  const handleCarDetail = (car: Car) => {
    navigation.navigate('CarDetails', {
      car,
    });
  };

  const fetchCars = async () => {
    setIsLoading(true);
    const { data: cars } = await api.get<Car[]>('/cars');
    setCars(cars);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchCars();
    }, []),
  );

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      {isLoading ? (
        <Loading />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CarComponent data={item} onPress={() => handleCarDetail(item)} />
          )}
        />
      )}
    </Container>
  );
};
