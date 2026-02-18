import { FC } from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const CourseraIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  const viewBoxWidth = 25.4;
  const viewBoxHeight = 43;
  const proportionalHeight = (width * viewBoxHeight) / viewBoxWidth;
  const targetHeight = height ?? proportionalHeight;
  const shouldCapHeight = targetHeight > width;
  const finalHeight = shouldCapHeight ? width : targetHeight;
  const finalWidth = shouldCapHeight
    ? (finalHeight * viewBoxWidth) / viewBoxHeight
    : width;

  return (
    <Svg viewBox="0 0 337 337" width={finalWidth} height={finalHeight}>
      <Circle cx="168.5" cy="168.5" r="168.5" fill="#0056d2" />
      <Path
        fill="#fff"
        d="M68 168c0-58 48-105 108-105a109 109 0 0 1 92 48l-45 26a56 56 0 0 0-47-24c-30 0-56 26-56 55s26 56 56 56a56 56 0 0 0 48-26l44 26a109 109 0 0 1-92 50c-60 0-108-48-108-106z"
      />
    </Svg>
  );
};
