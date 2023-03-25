import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const SlackIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 53 53" width={width} height={height || width}>
      <G transform="matrix(.66861 0 0 .66861 8.9253 8.9256)" fillRule="evenodd">
        <Path
          d="m19.766 0a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376v-5.386a5.381 5.381 0 0 0-5.376-5.387m0 14.365h-14.336a5.381 5.381 0 0 0-5.376 5.386 5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386"
          fill={color || '#36c5f0'}
        />
        <Path
          d="m53.814 19.751a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0v-14.364a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387"
          fill={color || '#2eb67d'}
        />
        <Path
          d="m34.102 53.867a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386a5.381 5.381 0 0 0 5.376 5.387m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387h-14.336a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386"
          fill={color || '#ecb22e'}
        />
        <Path
          d="m0.054 34.116a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387h-5.376a5.381 5.381 0 0 0-5.376 5.388m14.336-1e-3v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387v-14.363a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387"
          fill={color || '#e01e5a'}
        />
      </G>
    </Svg>
  );
};