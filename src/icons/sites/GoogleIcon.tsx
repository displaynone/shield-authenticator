import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const GoogleIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 24 24" width={width} height={height || width}>
      <G transform="translate(4.041 3.8684)">
        <Path
          d="m15.919 8.3148c0-0.53537-0.04744-1.0436-0.12876-1.5383h-7.6578v3.0563h4.3846a3.7747 3.7747 0 0 1-1.6264 2.4261v2.033h2.6158c1.5316-1.4164 2.4125-3.5036 2.4125-5.9771z"
          fill={color || '#4285f4'}
        />
        <Path
          d="m8.132 16.264c2.1957 0 4.0322-0.7319 5.374-1.972l-2.6158-2.033a4.9064 4.9064 0 0 1-7.3189-2.5752h-2.6972v2.094a8.1186 8.1186 0 0 0 7.258 4.4862z"
          fill={color || '#34a853'}
        />
        <Path
          d="m3.5712 9.6837a4.7167 4.7167 0 0 1 0-3.1038v-2.094h-2.6972a8.0373 8.0373 0 0 0 0 7.2918z"
          fill={color || '#fbbc05'}
        />
        <Path
          d="m8.132 3.2187c1.1995 0 2.2702 0.41338 3.1173 1.2198l2.3177-2.3177a7.773 7.773 0 0 0-5.435-2.1211c-3.1783 0-5.9229 1.8297-7.258 4.4862l2.6972 2.094a4.859 4.859 0 0 1 4.5608-3.3613z"
          fill={color || '#ea4335'}
        />
      </G>
    </Svg>
  );
};
