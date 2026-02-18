import { FC } from 'react';
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const BillIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  const viewBoxWidth = 25.4;
  const viewBoxHeight = 43;
  const proportionalHeight = (width * viewBoxHeight) / viewBoxWidth;
  const targetHeight = height ?? proportionalHeight;
  const shouldCapHeight = targetHeight > width;
  const finalHeight = shouldCapHeight ? width : targetHeight;
  const finalWidth = shouldCapHeight
    ? (finalHeight * viewBoxWidth) / viewBoxHeight
    : width;

  return (
    <Svg viewBox="0 0 25.4 43" width={finalWidth} height={finalHeight}>
      <G transform="matrix(.60315 0 0 .60315 5.807 11.807)">
        <Path
          d="M17.3,32.9c0,1.3-1.1,2.4-2.4,2.4H8V21.4h6.9c1.3,0,2.4,1.1,2.4,2.4V32.9z M8,13.8V0H0v43h16.8
		c4.7,0,8.6-4,8.6-9V22.8c0-5-3.8-9-8.6-9H8z"
          fill="#FF5A0A"
        ></Path>
        <Path
          d="M10.2,11.4v-11L21,8.7c3.7,2.9,4.4,7.2,4.4,7.1c-2.4-3-5.7-4.4-7.9-4.4L10.2,11.4z"
          fill="#FF9C6C"
        ></Path>
      </G>
    </Svg>
  );
};
