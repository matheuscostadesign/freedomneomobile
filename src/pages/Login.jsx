import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import Logo from '../assets/Logo';

export default function Login({navigation}) {
  return (
    <View style={styles.bgLogin}>
      <Logo />
      <Text variant="headlineMedium">Seja bem-vindo!</Text>
      <Text variant="bodyMedium">Faça o login para continuar</Text>
      <View style={styles.inputs}>
        <TextInput label="Digite seu usuário" />
        <TextInput
          label="Digite sua senha"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </View>
      <Text
        variant="bodyMedium"
        style={{textDecorationLine: 'underline', marginTop: 8}}>
        Esqueceu a senha?
      </Text>
      <View style={styles.btn}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          Acessar o app
        </Button>
      </View>
      <View style={{flexDirection: 'row', gap: 4, marginTop: 8}}>
        <Text variant="bodyMedium">Ainda não tem usuário?</Text>
        <Text variant="bodyMedium" style={{textDecorationLine: 'underline'}}>
          Toque aqui
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgLogin: {
    backgroundColor: '#F3F3F9',
    flex: 1,
    gap: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  inputs: {
    gap: 16,
    width: '100%',
    marginTop: 24,
  },
  btn: {
    marginTop: 16,
    width: '100%',
  },
});
