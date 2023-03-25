import { FC } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { ComponentWithColor, ComponentWithSize } from '../../types';

export const PackagistIcon: FC<ComponentWithSize & ComponentWithColor> = ({
  width = 48,
  height,
  color,
}) => {
  return (
    <Svg viewBox="0 0 764 764" width={width} height={height || width}>
      <G strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.905">
        <Path
          d="m184.1 409.5v44.153a2.9667 2.9556 0 0 1-4.3593 2.5813l-41.741-22.044a2.9667 2.9556 0 0 1 0-5.2206l41.741-22.076a2.9667 2.9556 0 0 1 4.3593 2.5813z"
          fill={color || '#e1743f'}
          stroke={color || '#e1743f'}
        />
        <Path
          d="m450.57 563.8v-155.7l-3.446-0.82601-28.293 13.055v148.42h26.752a4.9682 4.9496 0 0 0 4.9876-4.9302z"
          fill={color || '#c25934'}
          stroke={color || '#c25934'}
        />
        <Path
          d="m627.41 393.03c0.17489 0.51626-21.207-39.216-21.207-39.216l-29.317 33.337z"
          fill={color || '#e1743f'}
          stroke={color || '#e1743f'}
        />
        <Path
          d="m297.44 246.49h-24.614a7.5916 7.5631 0 0 0-4.165 1.239l-85.042 55.601a7.5916 7.5631 0 0 0-3.4266 6.3177v265.96a7.5916 7.5631 0 0 0 7.5916 7.5631h50.654a7.5916 7.5631 0 0 0 5.3633-2.2134l52.61-52.413-105.48-158.45a7.5916 7.5631 0 0 1 2.1376-10.48q0.23966-0.15487 0.48581-0.29684l65.519-36.46a7.5916 7.5631 0 0 0 3.8865-6.6016v-29.059a7.5916 7.5631 0 0 1 1.9432-5.0851z"
          fill={color || '#c25934'}
          stroke={color || '#c25934'}
        />
        <Path
          d="m414.2 583.17h-73.538a4.9682 4.9496 0 0 1-4.0937-2.1489l-147.08-213.25a4.9682 4.9496 0 0 1 1.2955-6.8791q0.17489-0.11615 0.35626-0.2194l71.796-39.952v93.991a4.9682 4.9496 0 0 0 4.9488 4.9496l150.92 0.64532v158.26a4.6249 4.6076 0 0 1-4.6249 4.6076z"
          fill={color || '#e1743f'}
          stroke={color || '#e1743f'}
        />
      </G>
      <G fill={color || '#c25934'}>
        <Path
          d="m352.34 229.98a1.9432 1.936 0 0 1-1.9432-1.936v-45.385a1.9432 1.936 0 0 1 2.8825-1.7166l84.854 45.347a1.9432 1.936 0 0 1-0.92628 3.6654z"
          strokeWidth=".64653"
        />
        <Path
          d="m352.34 182.66 84.854 45.347h-84.854v-45.347m0-3.8719a3.8865 3.8719 0 0 0-3.8865 3.8719v45.372a3.8865 3.8719 0 0 0 3.8865 3.8719h84.854a3.8865 3.8719 0 0 0 1.8266-7.2986l-84.835-45.353a3.8865 3.8719 0 0 0-1.8461-0.46462z"
          strokeWidth=".64653"
        />
        <Path
          d="m543.32 345.95-32.115 30.44 1.425 8.2084 28.099 43.759 65.526-74.618z"
          stroke={color || '#c25934'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.905"
        />
      </G>
      <Path
        d="m540.21 428.58-27.587-43.978-19.432-112.01a9.1202 9.0861 0 0 0-3.3229-5.5756l-50.349-39.758h-96.857a8.3559 8.3246 0 0 0-3.3942 0.7163l-41.831 18.521 121.39 173.84 28.281-13.055z"
        fill={color || '#e1743f'}
        stroke={color || '#e1743f'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.905"
      />
      <Path
        d="m262.96 414.71v-127.19a8.4207 8.3891 0 0 1 2.1894-5.6401l32.297-35.396 121.39 173.84-150.92-0.64531a4.9682 4.9496 0 0 1-4.9488-4.969z"
        fill={color || '#e68c59'}
        stroke={color || '#e68c59'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.905"
      />
    </Svg>
  );
};