import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Entypo } from "@expo/vector-icons";
import { FlatList, Image, Text } from "react-native";

import { styles } from './styles';
import { Background } from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Title } from '../../components/Title';
import { DuoCard, DuoCardPops } from '../../components/DuoCard';
import { useEffect, useState } from 'react';



export function Game() {

  const route = useRoute();
  const navigation = useNavigation();
  const [ads, setAds] = useState<DuoCardPops[]>([]);

  const game = route.params as GameParams;
  console.log(game);

  useEffect(() =>{
    fetch(`http://192.168.1.94:3333/games/${game.id}/ads`)
    .then(res => res.json())
    .then(data => {
      setAds(data)
      console.log(ads)
    })
  },[])

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
        <FlatList
          data={ads}
          keyExtractor={item => item.id}
          renderItem={({item}) =>(
              <DuoCard 
                data={item} 
                onConnect={() =>{}}
              />
            )
          }
          showsHorizontalScrollIndicator={false}
          horizontal
          style={styles.conteinerList}
          contentContainerStyle={[ads.length > 0 ? styles.contentList : styles.emptyListContent ]}
          ListEmptyComponent={()=>(
            <Text style={styles.emptyList}>
              Nao há anúcios publicados ainda.
            </Text>
          )}
        />

      </SafeAreaView>
    </Background>
    
  );
}