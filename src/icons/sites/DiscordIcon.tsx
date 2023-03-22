import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const DiscordIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 71 71" width={width} height={height || width}>
      <Path
        d="m50.067 22.136a34.663 34.663 0 0 0-8.556-2.6535 0.13025 0.13025 0 0 0-0.13735 0.06513 24.145 24.145 0 0 0-1.0656 2.1881c-3.2307-0.48369-6.4448-0.48369-9.6098 0-0.28654-0.68912-0.71043-1.531-1.0816-2.1881a0.13498 0.13498 0 0 0-0.13794-0.06513 34.568 34.568 0 0 0-8.556 2.6535 0.12255 0.12255 0 0 0-0.05624 0.04855c-5.449 8.1404-6.9421 16.082-6.2098 23.925a0.14445 0.14445 0 0 0 0.05505 0.09828c3.5954 2.6404 7.0783 4.2431 10.496 5.3057a0.13617 0.13617 0 0 0 0.14741-0.04855 24.912 24.912 0 0 0 2.1473-3.493 0.13321 0.13321 0 0 0-0.07282-0.18471 22.954 22.954 0 0 1-3.2792-1.563 0.13498 0.13498 0 0 1-0.01302-0.22319c0.22023-0.16577 0.44047-0.33746 0.65123-0.51033a0.13025 0.13025 0 0 1 0.13617-0.01895c6.8794 3.1413 14.326 3.1413 21.124 0a0.12965 0.12965 0 0 1 0.13735 0.01717c0.21076 0.17346 0.431 0.34693 0.65301 0.5121a0.13498 0.13498 0 0 1-0.01184 0.22319 21.54 21.54 0 0 1-3.2798 1.5612 0.13439 0.13439 0 0 0-0.07104 0.18708 27.973 27.973 0 0 0 2.1449 3.4906 0.13321 0.13321 0 0 0 0.14801 0.05032c3.4338-1.0627 6.9167-2.6653 10.512-5.3057a0.13498 0.13498 0 0 0 0.05506-0.0965c0.8762-9.0669-1.4682-16.943-6.2151-23.925a0.10656 0.10656 0 0 0-0.05506-0.05032zm-21.537 19.198c-2.0709 0-3.7771-1.9016-3.7771-4.2365 0-2.335 1.6731-4.2365 3.7771-4.2365 2.1206 0 3.8109 1.9182 3.7771 4.2365 0 2.335-1.6731 4.2365-3.7771 4.2365zm13.967 0c-2.0709 0-3.7771-1.9016-3.7771-4.2365 0-2.335 1.6731-4.2365 3.7771-4.2365 2.1206 0 3.8109 1.9182 3.7771 4.2365 0 2.335-1.6565 4.2365-3.7771 4.2365z"
        fill={color || '#5865f2'}
      />
    </Svg>
  );
};
