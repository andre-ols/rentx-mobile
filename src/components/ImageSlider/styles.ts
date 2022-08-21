import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexex = styled.View`
  flex-direction: row;
  align-self: flex-end;
  padding-right: ${RFValue(24)}px;
`;
export const ImageIndex = styled.View<ImageIndexProps>`
  width: ${RFValue(6)}px;
  height: ${RFValue(6)}px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.title : props.theme.colors.shape};
  margin-left: ${RFValue(8)}px;
  border-radius: ${RFValue(3)}px;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(130)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: ${RFValue(280)}px;
  height: ${RFValue(130)}px;
`;
