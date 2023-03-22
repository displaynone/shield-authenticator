import { FC } from 'react';
import Svg, { Path, RadialGradient, Stop } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const MxToolboxIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 512 512" width={width} height={height || width}>
      <RadialGradient
        id="a"
        cx="253.38"
        cy="251.11"
        r="236.93"
        gradientTransform="matrix(.62476 0 0 .62476 97.686 99.123)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor={color || '#fff'} offset="0" />
        <Stop stopColor={color || '#f90'} offset="1" />
      </RadialGradient>
      <Path
        d="m256 107.99a148.01 148.01 0 0 0-148.01 148.01 148.01 148.01 0 0 0 148.01 148.01 148.01 148.01 0 0 0 148.01-148.01 148.01 148.01 0 0 0-148.01-148.01zm-98.087 50.231h58.227l40.672 60.852 41.797-60.852h55.854l-68.223 94.963 69.285 100.59h-58.352l-42.047-64.162-42.92 64.162h-55.729l69.348-98.524z"
        fill="url(#a)"
      />
    </Svg>
  );
};
