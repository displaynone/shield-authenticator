import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { DefaultIcon } from '../icons/DefaultIcon';
import { AlgoliaIcon } from '../icons/sites/AlgoliaIcon';
import { ArduinoIcon } from '../icons/sites/ArduinoIcon';
import { BitbucketIcon } from '../icons/sites/BitbucketIcon';
import { BoxIcon } from '../icons/sites/BoxIcon';
import { BugsnagIcon } from '../icons/sites/BugsnagIcon';
import { CloudflareIcon } from '../icons/sites/CloudflareIcon';
import { DigitalOceanIcon } from '../icons/sites/DigitalOceanIcon';
import { DiscordIcon } from '../icons/sites/DiscordIcon';
import { DockerIcon } from '../icons/sites/DockerIcon';
import { DropboxIcon } from '../icons/sites/DropboxIcon';
import { ExpoIcon } from '../icons/sites/ExpoIcon';
import { FigmaIcon } from '../icons/sites/FigmaIcon';
import { GithubIcon } from '../icons/sites/GithubIcon';
import { GitlabIcon } from '../icons/sites/GitlabIcon';
import { GoogleIcon } from '../icons/sites/GoogleIcon';
import { HerokuIcon } from '../icons/sites/HerokuIcon';
import { InvisionIcon } from '../icons/sites/InvisionIcon';
import { JetBrainsIcon } from '../icons/sites/JetBrainsIcon';
import { KoFiIcon } from '../icons/sites/KoFiIcon';
import { LocalizeIcon } from '../icons/sites/LocalizeIcon';
import { MegaIcon } from '../icons/sites/MegaIcon';
import { MicrosoftIcon } from '../icons/sites/MicrosoftIcon';
import { MongoDBIcon } from '../icons/sites/MongoDBIcon';
import { MxToolboxIcon } from '../icons/sites/MxToolboxIcon';
import { NpmIcon } from '../icons/sites/NpmIcon';
import { POEditorIcon } from '../icons/sites/POEditorIcon';
import { PackagistIcon } from '../icons/sites/PackagistIcon';
import { PatreonIcon } from '../icons/sites/PatreonIcon';
import { PostmanIcon } from '../icons/sites/PostmanIcon';
import { PyPIIcon } from '../icons/sites/PyPIIcon';
import { SketchIcon } from '../icons/sites/SketchIcon';
import { SlackIcon } from '../icons/sites/SlackIcon';
import { TwitterIcon } from '../icons/sites/TwitterIcon';
import { UdraftPlusComIcon } from '../icons/sites/UdraftPlusComIcon';
import { UnityIcon } from '../icons/sites/UnityIcon';
import { VultrIcon } from '../icons/sites/VultrIcon';
import { WetransferProdIcon } from '../icons/sites/WetransferProdIcon';
import { ZohoIcon } from '../icons/sites/ZohoIcon';
import { ZoomIcon } from '../icons/sites/ZoomIcon';

type IssuerProps = {
  issuer?: string;
  size?: number;
  color?: string;
};

const IssuerIcon: FC<IssuerProps> = ({ issuer, size = 58, color }) => {
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

  return (
    <View style={styles.icon}>
      <Component width={size} color={color} />
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
