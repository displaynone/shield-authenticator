import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const InvisionIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 250 250" width={width} height={height || width}>
      <Path
        d="m54.908 55.323v139.35h140.18v-139.35zm44.471 29.049a8.0366 8.0366 0 1 1 3.1949 15.433 8.0366 8.0366 0 0 0 0.0436 8e-3h-0.0556a8.0366 8.0366 0 0 0 0.012-8e-3 8.0366 8.0366 0 0 1-8.1044-7.9736 8.0366 8.0366 0 0 1 4.9095-7.4591zm50.732 21.858c7.5343 0 13.73 5.3575 13.73 15.682a30.416 30.416 0 0 1-1.2841 8.7061l-3.9067 13.729a15.906 15.906 0 0 0-0.5581 3.7399c0 2.3998 0.94877 3.572 2.7905 3.572 1.7859 0 4.0183-1.3396 6.6972-8.5949l5.2463 2.0089c-3.1253 10.883-8.7626 15.459-15.795 15.459-8.2598 0-12.223-4.9106-12.223-11.608a21.096 21.096 0 0 1 0.89382-5.9723l3.9067-14.119a14.287 14.287 0 0 0 0.61368-4.3536c0-4.5206-2.7349-7.2552-7.1997-7.2552-5.6368 0-9.32 4.0181-11.218 11.776l-7.7022 30.695h-13.394l2.4558-9.6544c-3.9625 6.4739-9.4876 10.492-16.185 10.492-8.0924 0-11.999-4.688-11.999-11.72a27.403 27.403 0 0 1 0.72596-6.0268l6.1391-24.948h-9.432l2.8461-10.604h22.714l-8.9851 35.607a22.324 22.324 0 0 0-0.83714 5.4698c0 2.2882 1.1168 2.9579 2.9028 3.3486 1.0604 0.22324 9.5426 0.0554 14.175-10.214l5.9167-23.551h-9.5999l2.9028-10.604h20.426l-2.6237 11.999c3.5718-6.6972 10.771-13.06 17.859-13.06z"
        fill={color || '#ff0066'}
      />
    </Svg>
  );
};
