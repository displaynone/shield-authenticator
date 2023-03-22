import { FC } from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const DockerIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg
      viewBox="0 0 714 714"
      width={width}
      height={height || width}
      fill={color || '#0091e2'}
    >
      <G transform="matrix(.62828 0 0 .62828 132.8 195.09)">
        <Path d="m619.3 181c-6.6-42.4-42-77.2-61.4-82.4a114.7 114.7 0 0 0-13 131.6c-17.7 9.8-46.1 12.3-51.9 12.5h-470.6c-12.4 0-22.4 10-22.4 22.2 0 166.3 73.6 247.8 249.4 247.8 182.8 0 312.7-86.5 354.8-243.8 78.8 0 104.5-48 110.3-69.8-20.8-20.8-58.5-24.3-95.2-18.1z" />
        <G id="b">
          <Rect
            id="a"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
          <Rect
            transform="translate(86)"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
          <Rect
            transform="translate(172)"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
        </G>
        <G transform="translate(86,-80)">
          <Rect x="60.5" y="162.7" width="74" height="67.4" rx="5.1" ry="5.1" />
          <Rect
            transform="translate(86)"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
          <Rect
            transform="translate(172)"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
        </G>
        <G transform="translate(172)">
          <Rect x="60.5" y="162.7" width="74" height="67.4" rx="5.1" ry="5.1" />
          <Rect
            transform="translate(86)"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
          <Rect
            transform="translate(172)"
            x="60.5"
            y="162.7"
            width="74"
            height="67.4"
            rx="5.1"
            ry="5.1"
          />
        </G>
        <Rect x="318.5" y="2.7" width="74" height="67.4" rx="5.1" ry="5.1" />
      </G>
    </Svg>
  );
};
