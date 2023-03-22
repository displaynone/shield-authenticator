import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const MicrosoftIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 88.597 88.597" width={width} height={height || width}>
      <G
        transform="matrix(.58276 0 0 .58276 18.483 18.483)"
        clipRule="evenodd"
        fillRule="evenodd"
      >
        <Path
          d="m6e-3 42.116h42.108v-42.109h-42.108z"
          fill={color || '#f25022'}
        />
        <Path
          d="m46.489 42.108h42.108v-42.108h-42.107z"
          fill={color || '#7fba00'}
        />
        <Path d="m0 88.597h42.108v-42.107h-42.108z" fill={color || '#00a4ef'} />
        <Path
          d="m46.489 88.597h42.108v-42.107h-42.107z"
          fill={color || '#ffb900'}
        />
      </G>
    </Svg>
  );
};
