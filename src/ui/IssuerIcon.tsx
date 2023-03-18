import { FC, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import colors from '../constants/colors';
import { DefaultIcon } from '../icons/DefaultIcon';
import { TwitterIcon } from '../icons/TwitterIcon';
import { DropboxIcon } from '../icons/Dropbox';

type IssuerProps = {
  issuer?: string;
  progress?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
};

const IssuerIcon: FC<IssuerProps> = ({
  issuer,
  progress = 0,
  size = 58,
  strokeWidth = 4,
  color,
}) => {
  const styles = getStyles(size);
  const getComponent = () => {
    switch (issuer?.toLowerCase()) {
      case 'twitter':
        return TwitterIcon;
      case 'dropbox':
        return DropboxIcon;
    }
    return DefaultIcon;
  };
  const Component = getComponent();
  const radius = size / 2 - strokeWidth;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progress;

  const strokeDashoffset = radius * Math.PI * 2 * (svgProgress / 100);

  return (
    <View style={styles.icon}>
      <View style={styles.progress}>
        <Svg width={size} height={size}>
          <Circle
            stroke={colors.medium}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeLinecap="butt"
            {...{ strokeWidth }}
          />
          <Circle
            stroke={colors.light}
            fill="none"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circum} ${circum}`}
            strokeDashoffset={+strokeDashoffset}
            strokeLinecap="butt"
            transform={`rotate(-90, ${size / 2}, ${size / 2})`}
            {...{ strokeWidth }}
          />
        </Svg>
      </View>
      <Component width={size - strokeWidth - 18} color={color} />
    </View>
  );
};

const getStyles = (size: number) =>
  StyleSheet.create({
    icon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      position: 'relative',
    },
    progress: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });

export default IssuerIcon;
