import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';
import colors from '../../constants/colors';

export const UnityIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 32 32" width={width} height={height || width}>
      <Path
        d="m23.473 6.418-7.8234 2.0386-1.1573 1.9865-2.3493-0.01736-5.7255 5.5686 5.7261 5.568 2.3481-0.01796 1.1603 1.9859 7.821 2.0386 2.0955-7.6048-1.1908-1.9698 1.1908-1.9698zm-8.7921 4.3448 5.9841-1.4956-3.4348 5.7865h-6.8708zm0 10.462-4.3215-4.2904h6.8708l3.4348 5.7859zm7.6587 0.555-3.4366-5.7853 3.4366-5.7877 1.659 5.7877z"
        fillRule="evenodd"
        fill={color || colors.dark}
      />
    </Svg>
  );
};
