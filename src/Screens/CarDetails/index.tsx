import React, { FC } from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
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
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { StatusBar, StyleSheet } from 'react-native';

interface Params {
  car: Car;
}

export const CarDetails: FC = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const theme = useTheme();
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

  const scrollY = useSharedValue(0);
  const sizes = {
    initial: RFValue(70),
    finally: RFValue(200),
  };

  const scrollHandle = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  const HeaderStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, sizes.finally],
        [sizes.finally, sizes.initial],
        Extrapolate.CLAMP,
      ),
    };
  });
  const slidercarStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    };
  });

  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Animated.View
        style={[
          HeaderStyleAnimation,
          styles.header,
          { backgroundColor: theme.colors.background_secondary },
        ]}
      >
        <Header>
          <BackButton onPress={handleNavigateToHome} />
        </Header>
        <Animated.View style={[slidercarStyleAnimation]}>
          <CarImages>
            <ImageSlider imagesUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + RFValue(160),
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandle}
        scrollEventThrottle={16}
      >
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

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button onPress={handleNavigateToSchedule} title="Confirmar" />
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
});
