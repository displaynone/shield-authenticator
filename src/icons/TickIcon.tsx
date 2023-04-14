import { FC } from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../types';
import colors from '../constants/colors';

export const TickIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height = 48,
  color = colors.dark,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
        stroke={color}
      />
    </Svg>
  );
};
