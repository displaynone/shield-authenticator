import { FC } from 'react';
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const BitbucketIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 50.531 62.442" width={width} height={height || width}>
      <Defs>
        <LinearGradient
          id="logo-gradient"
          x1="64.01"
          x2="32.99"
          y1="65.26"
          y2="89.48"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={color || '#0052cc'} offset="0.18" />
          <Stop stopColor={color || '#2684ff'} offset="1" />
        </LinearGradient>
      </Defs>
      <G
        class="header__svg-logo__icon"
        transform="matrix(.58374 0 0 .58374 7.0558 -9.2438)"
      >
        <Path
          d="m2 41.25a2 2 0 0 0-2 2.32l8.49 51.54a2.72 2.72 0 0 0 2.66 2.27h40.73a2 2 0 0 0 2-1.68l8.51-52.11a2 2 0 0 0-2-2.32zm35.75 37.25h-13l-3.52-18.38h19.67z"
          fill={color || '#2684ff'}
        />
        <Path
          d="m59.67 60.12h-18.77l-3.15 18.38h-13l-15.35 18.23a2.71 2.71 0 0 0 1.75 0.66h40.74a2 2 0 0 0 2-1.68z"
          fill="url(#logo-gradient)"
        />
      </G>
    </Svg>
  );
};
