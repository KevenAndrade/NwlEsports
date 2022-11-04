import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";

import { styles } from './styles';
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Title } from '../../components/Title';

export function Game() {

  const route = useRoute();
  const navigation = useNavigation();

  const game = route.params as GameParams;
  console.log(game);

  function handleGoBack(){
     navigation.goBack();
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right}/>
        </View>

        <Image
          source={{uri: game.bannerUrl}}
          style={styles.cover}
          resizeMode="cover"

        />

        <Title 
          title={game.title}
          subtitle="Connect-se e comece a jogar !"
        />

      </SafeAreaView>
    </Background>
    
  );
}