import React, { FC, useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Container, ImageIndexex, ImageIndex, CarImageWrapper, CarImage } from './styles';

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export const ImageSlider: FC<Props> = (props) => {
  const [imageIndex, setImageIndex] = useState(0);
  const indexChange = useRef((info: ChangeImageProps) => {
    const { viewableItems } = info;
    const index = viewableItems[0].index;
    setImageIndex(index);
  });
  return (
    <Container>
      <ImageIndexex>
        {props.imagesUrl.map((image, index) => (
          <ImageIndex active={index === imageIndex} key={image} />
        ))}
      </ImageIndexex>

      <FlatList
        data={props.imagesUrl}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="contain" />
          </CarImageWrapper>
        )}
      />
    </Container>
  );
};
