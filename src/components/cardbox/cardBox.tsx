import { Feather, FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardBoxProps {
  wheater: string
  temperatura: string
  hora: string
}

const CardBox: React.FC<CardBoxProps> = ({ wheater, temperatura, hora }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIconeTexto}>
        <Feather name="cloud-rain" size={16} color="white" />
        <Text style={styles.text}>{wheater}</Text>
      </View>
      <View style={styles.containerIconeTexto}>
        <FontAwesome6 name="temperature-half" size={16} color="white" />
        <Text style={styles.text}>{temperatura}</Text>
      </View>
      <View style={styles.containerIconeTexto}>
        <Feather name="wind" size={16} color="white" />
        <Text style={styles.text}>{hora}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B316D',
    width: '90%',
    padding: 20,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderRadius: 50,
    color: 'white',
  },
  containerIconeTexto:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  text:{
    color: 'white',
  }
})

export default CardBox
