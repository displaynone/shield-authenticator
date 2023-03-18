import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../types';
import colors from '../constants/colors';

export const CopyPasteIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height = 48,
  color = colors.primary,
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 19.579 19.844">
      <G transform="translate(-5.6788 -3.9872)">
        <Path
          d="m12.293 15.629v-8.2021h12.965v16.404h-12.965zm11.377 0v-6.6146h-9.7896v13.229h9.7896zm-17.992-3.4396v-8.2021h12.965v1.1906c0 1.1465-0.0294 1.1906-0.79375 1.1906-0.52917 0-0.79375-0.13229-0.79375-0.39688 0-0.33847-0.72026-0.39687-4.8948-0.39687h-4.8948v13.229h3.9688v1.5875h-5.5563z"
          strokeWidth=".26458"
          fill={color}
        />
      </G>
    </Svg>
  );
};
