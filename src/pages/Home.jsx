import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import Logo from '../assets/Logo';

export default function Home() {
  return (
    <View style={styles.bgHome}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{uri: 'https://github.com/matheuscostadesign.png'}}
          style={{
            width: 160,
            height: 160,
            borderRadius: 160 / 2,
            marginBottom: 16,
          }}
        />
        <Text variant="headlineMedium">Olá, Matheus Costa!</Text>
        <Text variant="bodyMedium" style={{marginTop: 8, marginBottom: 24}}>
          Morador da unidade FOX-01
        </Text>
        <View style={styles.cards}>
          <View style={styles.card}>
            <Text variant="titleMedium" style={styles.cardText}>
              Acessos
            </Text>
          </View>
          <View style={styles.card}>
            <Text variant="titleMedium" style={styles.cardText}>
              Reservas
            </Text>
          </View>
          <View style={styles.card}>
            <Text variant="titleMedium" style={styles.cardText}>
              Circulações
            </Text>
          </View>
          <View style={styles.card}>
            <Text variant="titleMedium" style={styles.cardText}>
              Anúncios
            </Text>
          </View>
        </View>
        <View style={{marginTop: 48}}>
          <Logo />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgHome: {
    flex: 1,
    padding: 24,
  },
  cards: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#002538',
    width: 120,
    height: 120,
    borderRadius: 24 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: '#fff',
  },
});
