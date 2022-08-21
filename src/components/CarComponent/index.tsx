import React, { FC } from 'react';
import { Name } from './styles';
import { Rent } from './styles';
import { Price } from './styles';
import { CardImage } from './styles';
import { Type } from './styles';
import { Period } from './styles';
import { About } from './styles';
import { Brand } from './styles';
import { Details } from './styles';
import { Container } from './styles';

import { RectButtonProps } from 'react-native-gesture-handler';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Car } from '../../Models/Car.Model';
import { formatMoney } from '../../utils/formatMoney';

interface Props extends RectButtonProps {
  data: Car;
}

export const CarComponent: FC<Props> = ({ data, ...rest }) => {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{formatMoney(data.rent.price, 'pt-BR', 'BRL')}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>

      <CardImage
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
};
