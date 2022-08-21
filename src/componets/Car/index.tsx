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

import GasolineSvg from '../../assets/gasoline.svg';

interface CarData {
  brand: string;
  name: string;
  rent: {
    price: number;
    preiod: string;
  };
  thumbnail: string;
}

export const Car: FC<{
  data: CarData;
}> = ({ data }) => {
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.preiod}</Period>
            <Price>{data.rent.price}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
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
