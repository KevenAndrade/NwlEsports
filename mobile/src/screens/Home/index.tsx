import React, { useEffect, useState} from 'react';
import { View, Image, FlatList } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Background } from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Title } from '../../components/Title';
import { GameCard, GameCardProps } from '../../components/GameCard';

export function Home() {
    const [Games, setGames] = useState<GameCardProps[]>([])
    useEffect(() =>{
        fetch('http://192.168.1.94:3333/games')
        .then(res => res.json())
        .then(data => {
            setGames(data)
        })
    },[])

    const navigation = useNavigation();

    function handleOnpenGame({ id, title, bannerUrl}: GameCardProps){
        navigation.navigate('game', { id, title, bannerUrl});
    }

  return (
    <Background>
         <SafeAreaView style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />
            <Title title='Encontre o seu Duo' subtitle='Selecione o game que deseja jogar'/>
            
            <FlatList
                contentContainerStyle={styles.contentList}
                data={Games}
                keyExtractor={item => item.title}
                renderItem={({item}) => (
                    <GameCard 
                        data={item}
                        onPress={() => handleOnpenGame(item)}
                    />
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </SafeAreaView>
    </Background>
  );
}