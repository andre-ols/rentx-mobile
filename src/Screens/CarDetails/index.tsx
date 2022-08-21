import React, { FC } from 'react';
import { BackButton } from '../../componets/BackButton';
import { ImageSlider } from '../../componets/ImageSlider';
import {
  About,
  Accessories,
  Brand,
  CarImages,
  Container,
  Content,
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
import { Accessory } from '../../componets/Accessory';
import { Button } from '../../componets/Button';

export const CarDetails: FC = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider imagesUrl={['https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png']} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>Audi A4</Name>
          </Description>

          <Rent>
            <Period>Diário</Period>
            <Price>R$ 340,00</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory icon={speedSvg} name="380Km/h" />
          <Accessory icon={accelerationSvg} name="3.2s" />
          <Accessory icon={forceSvg} name="800 HP" />
          <Accessory icon={gasolineSvg} name="Gasolina" />
          <Accessory icon={exchangeSvg} name="Auto" />
          <Accessory icon={peopleSvg} name="2 pessoas" />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi.
          Vulputate odio ut enim blandit volutpat maecenas. Ut pharetra sit amet aliquam id diam
          maecenas ultricies mi. Consectetur purus ut faucibus pulvinar elementum.
        </About>
      </Content>

      <Footer>
        <Button onPress={() => {}} title="Confirmar" />
      </Footer>
    </Container>
  );
};
