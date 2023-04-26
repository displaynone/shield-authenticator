import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../constants/colors';
import { ComponentWithColor, ComponentWithSize } from '../types';

export const BackIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height = 48,
  color = colors.dark,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
};
