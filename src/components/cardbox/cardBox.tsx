import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface cardBoxProps {
  wheater: string
  temperatura: string
  hora: string
}

const cardBox: React.FC<cardBoxProps> = ({ wheater, temperatura, hora }) => {
  return (
    <View style={styles.container}>
      <Text>{wheater}</Text>
      <Text>{temperatura}</Text>
      <Text>{hora}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'black',
  },
})

export default cardBox
