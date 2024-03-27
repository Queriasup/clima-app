import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CardBoxProps {
  rise: string
  dawn: string
}

const CardBoxdayNight: React.FC<CardBoxProps> = ({ dawn, sunset}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerIconeTexto}>
        <Feather name="sun" size={16} color="white" />
        <Text style={styles.text}>{dawn}</Text>
      </View>
      <View style={styles.containerIconeTexto}>
        <MaterialCommunityIcons name="weather-sunset" size={24} color="white" />
        <Text style={styles.text}>{sunset}</Text>
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

export default CardBoxdayNight
