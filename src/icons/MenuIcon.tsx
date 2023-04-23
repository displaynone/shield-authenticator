import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../constants/colors';
import { ComponentWithColor, ComponentWithSize } from '../types';

export const MenuIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 24,
  height = 24,
  color = colors.medium,
}) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      strokeWidth={1.5}
      stroke={color}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
      />
    </Svg>
  );
};
