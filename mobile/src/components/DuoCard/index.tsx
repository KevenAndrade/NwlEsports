import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardPops {
  createdAt: string,
  hourEnd: string, 
  hourStart: string, 
  id: string, 
  name: string, 
  useVoiceChannel: boolean, 
  weekDays: string[], 
  yearPlaying: number
}

interface Props {
  data: DuoCardPops;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label='Nome'
        value={data.name}
      />
      <DuoInfo
        label='Tempo de jogo'
        value={`${data.yearPlaying} anos`}
      />
      <DuoInfo
        label='Disponibilidade'
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart}-${data.hourEnd}`}
      />
      <DuoInfo
        label='Chamada de audio'
        value={data.useVoiceChannel ? "Sim" : "Não" }
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={onConnect}
      >
        {/* <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        /> */}
        <Text style={styles.buttonText}>
          Conectar
        </Text>

      </TouchableOpacity>
    </View>
  );
}