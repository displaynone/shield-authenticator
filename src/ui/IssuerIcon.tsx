import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle, Svg } from 'react-native-svg';
import colors from '../constants/colors';
import { BoxIcon } from '../icons/sites/BoxIcon';
import { TwitterIcon } from '../icons/sites/TwitterIcon';
import { DropboxIcon } from '../icons/sites/DropboxIcon';
import { GoogleIcon } from '../icons/sites/GoogleIcon';
import { DefaultIcon } from '../icons/DefaultIcon';
import { MegaIcon } from '../icons/sites/MegaIcon';
import { MicrosoftIcon } from '../icons/sites/MicrosoftIcon';
import { UdraftPlusComIcon } from '../icons/sites/UdraftPlusComIcon';
import { WetransferProdIcon } from '../icons/sites/WetransferProdIcon';
import { DigitalOceanIcon } from '../icons/sites/DigitalOceanIcon';
import { HerokuIcon } from '../icons/sites/HerokuIcon';
import { VultrIcon } from '../icons/sites/VultrIcon';
import { DiscordIcon } from '../icons/sites/DiscordIcon';
import { SlackIcon } from '../icons/sites/SlackIcon';
import { ZohoIcon } from '../icons/sites/ZohoIcon';
import { ZoomIcon } from '../icons/sites/ZoomIcon';
import { FigmaIcon } from '../icons/sites/FigmaIcon';
import { SketchIcon } from '../icons/sites/SketchIcon';
import { KoFiIcon } from '../icons/sites/KoFiIcon';
import { PatreonIcon } from '../icons/sites/PatreonIcon';
import { AlgoliaIcon } from '../icons/sites/AlgoliaIcon';
import { ArduinoIcon } from '../icons/sites/ArduinoIcon';
import { BitbucketIcon } from '../icons/sites/BitbucketIcon';
import { BugsnagIcon } from '../icons/sites/BugsnagIcon';
import { CloudflareIcon } from '../icons/sites/CloudflareIcon';
import { DockerIcon } from '../icons/sites/DockerIcon';
import { ExpoIcon } from '../icons/sites/ExpoIcon';
import { GithubIcon } from '../icons/sites/GithubIcon';
import { GitlabIcon } from '../icons/sites/GitlabIcon';
import { InvisionIcon } from '../icons/sites/InvisionIcon';
import { JetBrainsIcon } from '../icons/sites/JetBrainsIcon';
import { LocalizeIcon } from '../icons/sites/LocalizeIcon';
import { MongoDBIcon } from '../icons/sites/MongoDBIcon';
import { MxToolboxIcon } from '../icons/sites/MxToolboxIcon';
import { NpmIcon } from '../icons/sites/NpmIcon';
import { PackagistIcon } from '../icons/sites/PackagistIcon';
import { POEditorIcon } from '../icons/sites/POEditorIcon';
import { PostmanIcon } from '../icons/sites/PostmanIcon';
import { PyPIIcon } from '../icons/sites/PyPIIcon';
import { UnityIcon } from '../icons/sites/UnityIcon';

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
      case 'box':
        return BoxIcon;
      case 'google':
        return GoogleIcon;
      case 'mega':
        return MegaIcon;
      case 'microsoft':
        return MicrosoftIcon;
      case 'updraftplus.com':
        return UdraftPlusComIcon;
      case 'wetransfer-prod':
        return WetransferProdIcon;
      case 'digitalocean':
        return DigitalOceanIcon;
      case 'heroku':
        return HerokuIcon;
      case 'vultr':
        return VultrIcon;
      case 'discord':
        return DiscordIcon;
      case 'slack':
        return SlackIcon;
      case 'zoho':
        return ZohoIcon;
      case 'zoom':
        return ZoomIcon;
      case 'figma':
        return FigmaIcon;
      case 'sketch':
        return SketchIcon;
      case 'ko-fi':
        return KoFiIcon;
      case 'patreon':
        return PatreonIcon;
      case 'algolia':
        return AlgoliaIcon;
      case 'arduino':
        return ArduinoIcon;
      case 'bitbucket':
        return BitbucketIcon;
      case 'bugsnag':
        return BugsnagIcon;
      case 'bugsnag':
        return BugsnagIcon;
      case 'cloudflare':
        return CloudflareIcon;
      case 'hub.docker.com':
        return DockerIcon;
      case 'expo':
        return ExpoIcon;
      case 'github':
        return GithubIcon;
      case 'gitlab.com':
        return GitlabIcon;
      case 'invisionapp':
        return InvisionIcon;
      case 'jetbrains account':
        return JetBrainsIcon;
      case 'localize':
        return LocalizeIcon;
      case 'auth.mongodb.com':
        return MongoDBIcon;
      case 'mxtoolbox':
        return MxToolboxIcon;
      case 'npm':
        return NpmIcon;
      case 'packagist':
        return PackagistIcon;
      case 'poeditor':
        return POEditorIcon;
      case 'postman':
        return PostmanIcon;
      case 'pypi':
        return PyPIIcon;
      case 'id.unity.com':
        return UnityIcon;
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
