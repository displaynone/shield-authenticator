import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const MongoDBIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 90 90" width={width} height={height || width}>
      <Path
        d="m49.297 25.299c-2.076-2.5245-3.8642-5.089-4.2292-5.6213a0.091266 0.091266 0 0 0-0.13465 0c-0.36507 0.53239-2.1532 3.0963-4.2292 5.6213-17.821 23.295 2.8067 39.016 2.8067 39.016l0.17296 0.11831c0.1538 2.4264 0.53802 5.9177 0.53802 5.9177h1.538s0.38478-3.4715 0.53858-5.9177l0.17296-0.13803c0.01915 0.01972 20.647-15.701 2.8259-38.997zm-4.3064 38.661s-0.9228-0.809-1.1724-1.2225v-0.04l1.1149-25.366c0-0.07887 0.11549-0.07887 0.11549 0l1.1149 25.366v0.03944c-0.25014 0.41408-1.1729 1.2225-1.1729 1.2225z"
        fill={color || '#13aa52'}
      />
    </Svg>
  );
};
