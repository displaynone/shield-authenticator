import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const LinkedinIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg height={height || width} width={width} viewBox="0 0 65 65">
      <G transform="matrix(.61608 0 0 .61608 12.437 12.437)">
        <Path
          d="m59.991 9.7065e-4v0.0063405h-55.21a4.728 4.728 0 0 0-4.7807 4.6698v55.438a4.731 4.731 0 0 0 4.7807 4.6761h55.21a4.741 4.741 0 0 0 4.7997-4.6761v-55.444a4.738 4.738 0 0 0-4.7997-4.6698zm-46.371 8.9781a5.571 5.571 0 0 1 6.3658 5.513 5.571 5.571 0 0 1-5.5701 5.5701 5.571 5.571 0 0 1-0.79573-11.083zm30.066 14.542c9.73 0 11.524 6.3997 11.524 14.726l-0.00634 16.961h-9.5995v-15.036c0-3.585-0.064122-8.1982-4.9931-8.1982-5 0-5.7635 3.9053-5.7635 7.9383v15.293h-9.5995v-30.916h9.2159v4.2259h0.12681a10.1 10.1 0 0 1 9.0954-4.9931zm-34.08 0.7672h9.609v30.919h-9.609v-30.919z"
          fill={color || '#0a66c2'}
        />
      </G>
    </Svg>
  );
};
