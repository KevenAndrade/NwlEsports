import { ImageBackground } from 'react-native';
import { styles } from './styles';

import backgroundImg from '../../assets/background-galaxy.png';

interface Porps {
    children: React.ReactNode;
}

export function Background({ children }: Porps) {
  return (
    <ImageBackground 
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      { children }
    </ImageBackground>
  );
}