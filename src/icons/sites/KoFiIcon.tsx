import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const KoFiIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 32 32" width={width} height={height || width}>
      <Path
        d="m16.279 6.0649a10.215 10.215 0 0 0-10.214 10.214 10.215 10.215 0 0 0 10.214 10.216 10.215 10.215 0 0 0 10.216-10.216 10.215 10.215 0 0 0-10.216-10.214zm-6.3652 5.5221h11.125c1.9451 0 3.5233 1.577 3.5233 3.5221v0.20711a3.5231 3.5231 0 0 1-3.5233 3.5233h-1.0086v1.06a1.6257 1.6257 0 0 1-1.625 1.6262h-7.6789a1.6257 1.6257 0 0 1-1.625-1.6262v-7.5c0-0.44925 0.36325-0.8125 0.8125-0.8125zm10.116 1.8799v3.4914h0.92034a1.7462 1.7462 0 1 0 0-3.4914z"
        fill={color || '#29abe0'}
      />
      <Path
        d="m14.347 14.898c0.25098-0.73474 0.84643-1.1024 1.7857-1.1024 1.4086 0 1.9313 1.7531 1.1922 2.8988-0.49192 0.76424-1.4845 1.7305-2.9779 2.8988-1.4933-1.1683-2.486-2.1346-2.9785-2.8988-0.73851-1.1457-0.21584-2.8988 1.1928-2.8988 0.93929 0 1.5347 0.36769 1.7857 1.1024z"
        fill={color || '#ff5e5b'}
      />
    </Svg>
  );
};
