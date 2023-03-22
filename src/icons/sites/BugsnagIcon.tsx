import { FC } from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const BugsnagIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 336 336" width={width} height={height || width}>
      <G
        transform="matrix(.55386 0 0 .55386 100.18 72.484)"
        fill={color || '#4949e4'}
      >
        <Circle cx="122.5" cy="223.8" r="13.92" />
        <Path d="m122.5 340.52a116.85 116.85 0 0 1-116.72-116.72v-57.88a8.69 8.69 0 0 1 8.68-8.69h41.4l-0.14-134-32.58 20.05v76.3a8.68 8.68 0 0 1-17.36 0v-77.29a15.67 15.67 0 0 1 7.43-13.29l36.09-22.21a15.6 15.6 0 0 1 23.78 13.29l0.15 137.15h49.27a66.57 66.57 0 1 1-66.56 66.57l-0.06-49.2h-32.74v49.2a99.36 99.36 0 1 0 99.36-99.36h-15.06a8.68 8.68 0 0 1 0-17.36h15.06a116.72 116.72 0 0 1 0 233.44zm-49.25-165.92v49.19a49.2 49.2 0 1 0 49.2-49.19z" />
      </G>
    </Svg>
  );
};
