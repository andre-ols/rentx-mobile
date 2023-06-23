import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { RFValue } from 'react-native-responsive-fontsize';
import { BackButton } from '../../components/BackButton';

import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterDate,
  CardFooterPeriod,
} from './styles';
import { CarComponent } from '../../components/CarComponent';
import { Car } from '../../Models/Car.Model';
import { LoadingAnimate } from '../../components/LoadingAnimate';

interface CarProps {
  id: number;
  user_id: number;
  car: Car;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/schedules_byuser?user_id=1');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);
  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <Header>
        <View
          style={{
            width: 25,
          }}
        >
          <BackButton onPress={handleBack} color={theme.colors.shape} />
        </View>
        <Title>
          Seus agendamentos {`\n`}
          estão aqui.
        </Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>
      {loading ? (
        <LoadingAnimate />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity> {cars.length} </AppointmentsQuantity>
          </Appointments>
          <FlatList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <CarComponent data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CardFooterPeriod>
                    <CarFooterDate> {item.startDate} </CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={RFValue(20)}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate> {item.endDate} </CarFooterDate>
                  </CardFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
