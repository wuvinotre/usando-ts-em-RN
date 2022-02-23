import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useTheme } from '../../contexts/theme';
import * as S from './styles';

export function Home() {
  const { handleChangeTheme } = useTheme();

  return (
    <S.Container>
      <S.Title>Olá amigo!</S.Title>
      <S.Button onPress={handleChangeTheme}>
        <S.TextButton>Trocar de tema</S.TextButton>
      </S.Button>
    </S.Container>
  );
}
