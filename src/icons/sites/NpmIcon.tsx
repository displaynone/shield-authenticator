import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const NpmIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 27 27" width={width} height={height || width}>
      <Path
        d="m7.1963 6.1201c-0.61229 0-1.1052 0.49103-1.1052 1.101v12.788c0 0.60993 0.49293 1.101 1.1052 1.101h12.837c0.61229 0 1.1052-0.49103 1.1052-1.101v-12.788c0-0.60993-0.49293-1.101-1.1052-1.101zm2.1111 3.3244 8.6755 0.01183-0.0054 8.6421h-2.1716l0.0054-6.4843h-2.1662l-0.0054 6.4789h-4.3431z"
        fill={color || '#cb0000'}
      />
    </Svg>
  );
};
