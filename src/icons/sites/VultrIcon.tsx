import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const VultrIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 96 96" width={width} height={height || width}>
      <G id="sygnet" transform="matrix(.68743 0 0 .68743 15.003 19.389)">
        <Path
          d="m33.45 2.24a4.78 4.78 0 0 0-4.06-2.24h-24.59a4.8 4.8 0 0 0-4.06 7.36l5 8 32.71-5.12z"
          fill={color || '#c9f4ff'}
        />
        <Path
          d="m38.49 10.24a4.78 4.78 0 0 0-4.06-2.24h-24.59a4.8 4.8 0 0 0-4.06 7.36l7.06 11.2 32.71-5.12z"
          fill={color || '#51b9ff'}
        />
        <Path
          d="m12.84 26.56a4.85 4.85 0 0 1-0.74-2.56 4.8 4.8 0 0 1 4.8-4.8h24.59a4.78 4.78 0 0 1 4.06 2.24l22 34.9a4.8 4.8 0 0 1 0 5.12l-12.29 19.54a4.8 4.8 0 0 1-8.12 0z"
          fill={color || '#007bfc'}
        />
        <Path
          d="m74.85 37a4.8 4.8 0 0 0 8.15 0l4.2-6.7 8.06-12.79a4.8 4.8 0 0 0 0-5.12l-6.4-10.15a4.78 4.78 0 0 0-4.06-2.24h-24.59a4.8 4.8 0 0 0-4.06 7.36z"
          fill={color || '#007bfc'}
        />
      </G>
    </Svg>
  );
};
