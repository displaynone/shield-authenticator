import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithSize } from '../types';

export const DropboxIcon: FC<ComponentWithSize> = ({
  width = 48,
  height = 32,
}) => {
  return (
    <Svg height={height} width={width} viewBox="-35.3175 -50 306.085 300">
      <Path
        id="polygon116"
        fill="#0061ff"
        d="M58.86 75l58.87-37.5L58.86 0 0 37.5z"
      />
      <Path
        id="polygon118"
        fill="#0061ff"
        d="M176.59 75l58.86-37.5L176.59 0l-58.86 37.5z"
      />
      <Path
        id="polygon120"
        fill="#0061ff"
        d="M117.73 112.5L58.86 75 0 112.5 58.86 150z"
      />
      <Path
        id="polygon122"
        fill="#0061ff"
        d="M176.59 150l58.86-37.5L176.59 75l-58.86 37.5z"
      />
      <Path
        id="polygon124"
        fill="#0061ff"
        d="M176.59 162.5L117.73 125l-58.87 37.5 58.87 37.5z"
      />
    </Svg>
  );
};
