import { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const PatreonIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 200 200" width={width} height={height || width}>
      <Circle cx="116.73" cy="83.265" r="44.119" fill={color || '#ff424d'} />
      <Path
        d="m39.146 39.146h21.299v121.71h-21.299z"
        fill={color || '#ff424d'}
      />
    </Svg>
  );
};
