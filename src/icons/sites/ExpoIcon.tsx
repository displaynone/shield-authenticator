import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import colors from '../../constants/colors';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const ExpoIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height || width}>
      <Path
        d="m11.622 10.284c0.1197-0.1764 0.252-0.1953 0.3528-0.1953 0.1071 0 0.2835 0.0189 0.4032 0.189 0.94501 1.2852 2.4885 3.8304 3.6351 5.7142 0.74341 1.2222 1.3167 2.1672 1.4364 2.2869 0.44101 0.4473 1.0458 0.1701 1.3923-0.3402 0.3465-0.50401 0.44101-0.85681 0.44101-1.2348 0-0.252-5.0086-9.5005-5.5126-10.269-0.48511-0.74971-0.64891-0.93871-1.4742-0.93871h-0.63001c-0.81901 0-0.94501 0.189-1.4301 0.93241-0.49771 0.77491-5.5189 10.017-5.5189 10.275 0 0.378 0.1008 0.73081 0.44101 1.2348 0.3528 0.50401 0.95761 0.78751 1.3986 0.3402 0.1197-0.126 0.69301-1.0647 1.4364-2.2869 1.1466-1.8837 2.6901-4.429 3.6288-5.7079z"
        fill={color || colors.dark}
      />
    </Svg>
  );
};
