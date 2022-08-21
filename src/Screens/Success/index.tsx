import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Content, Title, Message, Footer } from './styles';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmeButton } from '../../components/ConfirmeButton';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

export interface SuccessProps {
  data: {
    title: string;
    message?: string;
    navigateTo: string;
  };
}

export function Success() {
  const dimensions = useWindowDimensions();

  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  const handleNavigateToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LogoSvg width={dimensions.width} />
      <Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária {'\n'}e retirar o carro.
        </Message>
      </Content>
      <Footer>
        <ConfirmeButton title="Ok" onPress={handleNavigateToHome} />
      </Footer>
    </Container>
  );
}
