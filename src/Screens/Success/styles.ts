import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};
  padding-top: ${RFValue(96)}px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(80)}px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.shape};
  margin-top: ${RFValue(40)}px;
`;
export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text_detail};
  margin-top: ${RFValue(16)}px;
  text-align: center;
`;
export const Footer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: ${RFValue(80)}px 0;
`;
