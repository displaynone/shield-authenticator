import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const FigmaIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 57 57" width={width} height={height || width}>
      <Path
        d="m28.499 28.5a5.5221 5.5221 0 1 1 11.044 0 5.5221 5.5221 0 0 1-11.044 0z"
        fill={color || '#1abcfe'}
      />
      <Path
        d="m17.455 39.544a5.5221 5.5221 0 0 1 5.5221-5.5221h5.5221v5.5221a5.5221 5.5221 0 1 1-11.044 0z"
        fill={color || '#0acf83'}
      />
      <Path
        d="m28.499 11.934v11.044h5.5221a5.5221 5.5221 0 1 0 0-11.044z"
        fill={color || '#ff7262'}
      />
      <Path
        d="m17.455 17.456a5.5221 5.5221 0 0 0 5.5221 5.5221h5.5221v-11.044h-5.5221a5.5221 5.5221 0 0 0-5.5221 5.5221z"
        fill={color || '#f24e1e'}
      />
      <Path
        d="m17.455 28.5a5.5221 5.5221 0 0 0 5.5221 5.5221h5.5221v-11.044h-5.5221a5.5221 5.5221 0 0 0-5.5221 5.5221z"
        fill={color || '#a259ff'}
      />
    </Svg>
  );
};
