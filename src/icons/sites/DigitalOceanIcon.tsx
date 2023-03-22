import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const DigitalOceanIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg
      viewBox="65.2 173.5 176.48 176.48"
      width={width}
      height={height || width}
    >
      <G id="XMLID_229_" transform="matrix(.56569 0 0 .56569 65.648 112.7)">
        <Path
          id="XMLID_49_"
          fill={color || '#0080ff'}
          d="m155.2 351.7v-34.2c36.2 0 64.3-35.9 50.4-74-5.1-14.1-16.4-25.4-30.5-30.5-38.1-13.8-74 14.2-74 50.4h-34.1c0-57.7 55.8-102.7 116.3-83.8 26.4 8.3 47.5 29.3 55.7 55.7 18.9 60.6-26 116.4-83.8 116.4z"
        />
        <Path
          id="XMLID_47_"
          fill={color || '#0080ff'}
          d="m121.3 283.6h34v34h-34z"
        />
        <Path
          id="XMLID_46_"
          fill={color || '#0080ff'}
          d="m121.3 317.6v26.2h-26.2v-26.2z"
        />
        <Path fill={color || '#0080ff'} d="m95.1 317.6h-21.9v-21.9h21.9z" />
      </G>
    </Svg>
  );
};
