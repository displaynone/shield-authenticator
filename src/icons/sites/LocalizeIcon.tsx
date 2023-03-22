import { FC } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const LocalizeIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 5 5" width={width} height={height || width}>
      <Circle
        cx="2.5"
        cy="2.5"
        r="1.2606"
        fill="none"
        stroke={color || '#3997bd'}
        strokeWidth=".6303"
      />
    </Svg>
  );
};
