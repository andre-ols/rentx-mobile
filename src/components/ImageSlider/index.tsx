import React, { FC } from 'react';
import { Container, ImageIndexex, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface Props {
  imagesUrl: string[];
}

export const ImageSlider: FC<Props> = (props) => {
  return (
    <Container>
      <ImageIndexex>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexex>

      <CarImageWrapper>
        <CarImage source={{ uri: props.imagesUrl[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
};
