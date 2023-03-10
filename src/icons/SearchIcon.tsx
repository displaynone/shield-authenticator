import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { ComponentWithSize } from '../types';
import { FC } from 'react';

export const SearchIcon: FC<ComponentWithSize> = ({
  width = 48,
  height = 48,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height}>
      <Path
        d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
};
