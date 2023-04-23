import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const FacebookIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg height={height || width} width={width} viewBox="0 0 1365 1365">
      <Path
        d="m1061.3 684.97c0-209.11-169.52-378.63-378.63-378.63-209.11 0-378.63 169.52-378.63 378.63 0 188.99 138.46 345.63 319.47 374.03v-264.58h-96.137v-109.45h96.137v-83.418c0-94.895 56.527-147.31 143.02-147.31 41.426 0 84.756 7.395 84.756 7.395v93.179h-47.745c-47.036 0-61.703 29.187-61.703 59.13v71.025h105.01l-16.787 109.45h-88.225v264.58c181.01-28.405 319.47-185.05 319.47-374.03"
        fill={color || '#1877f2'}
      />
    </Svg>
  );
};
