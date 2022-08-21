import { FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Car } from '../../Models/Car.Model';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(110)}px;
  background-color: ${(props) => props.theme.colors.header};
  justify-content: flex-end;
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(32)}px ${RFValue(24)}px;
`;

export const TotalCars = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${(props) => props.theme.colors.text};
`;

export const CarList = styled(
  // eslint-disable-next-line no-unused-vars
  FlatList as new (props: FlatListProps<Car>) => FlatList<Car>,
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;

export const MyCarsButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${(props) => props.theme.colors.main};
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(30)}px;
  position: absolute;
  bottom: ${RFValue(24)}px;
  right: ${RFValue(24)}px;
`;
