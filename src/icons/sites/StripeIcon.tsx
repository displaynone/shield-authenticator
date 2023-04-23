import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const StripeIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg height={height || width} width={width} viewBox="0 0 91 91">
      <Path
        d="m41.551 34.235c0-2.3877 1.9591-3.306 5.2039-3.306 4.6529 0 10.53 1.4081 15.183 3.9183v-14.387c-5.0815-2.0204-10.102-2.8162-15.183-2.8162-12.428 0-20.693 6.4896-20.693 17.326 0 16.898 23.265 14.204 23.265 21.489 0 2.8162-2.4489 3.7346-5.8774 3.7346-5.0815 0-11.571-2.0816-16.714-4.8978v14.571c5.6937 2.4489 11.449 3.4897 16.714 3.4897 12.734 0 21.489-6.306 21.489-17.265-0.061222-18.244-23.387-15-23.387-21.857z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color || '#635bff'}
      />
    </Svg>
  );
};
