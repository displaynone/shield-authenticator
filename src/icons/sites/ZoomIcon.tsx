import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const ZoomIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 484 484" width={width} height={height || width}>
      <G transform="matrix(.58691 0 0 .58153 99.968 101.27)" fillRule="evenodd">
        <Path
          d="m242 2.424c132.31 0 239.58 107.26 239.58 239.58s-107.26 239.58-239.58 239.58-239.58-107.26-239.58-239.58 107.26-239.58 239.58-239.58z"
          stroke={color || '#e5e5e4'}
          strokeWidth="4.848"
        />
        <Path
          d="m99.6 173.7v102.4c0.1 23.2 19 41.9 42.2 41.8h149.5c4.2 0 7.6-3.4 7.7-7.6v-102.5c-0.1-23.2-19-41.9-42.2-41.8h-149.5c-4.2 0.1-7.6 3.4-7.7 7.7zm208.8 40 61.7-45.1c5.4-4.4 9.5-3.4 9.5 4.7v137.5c0 9.1-5.1 8.1-9.5 4.7l-61.7-45.1zm-66.4-189.9c120.51 0 218.2 97.691 218.2 218.2 0 120.51-97.692 218.2-218.2 218.2-120.51 0-218.2-97.692-218.2-218.2 0-120.51 97.69-218.2 218.2-218.2z"
          fill={color || '#4a8cff'}
        />
      </G>
    </Svg>
  );
};
