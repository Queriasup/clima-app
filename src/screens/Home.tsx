import {
  AntDesign,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import CardBox from '../components/cardbox/CardBox'
import CardBoxdayNight from '../components/cardbox/CardBoxDayNight'

export function Home() {
  return (
    <LinearGradient
      colors={['#0B316D', '#0F47AF']}
      style={styles.container}
    >
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Feather
              name='map-pin'
              size={24}
              color='white'
            />
            <Text style={styles.headerLeftText}>Recife</Text>
            <AntDesign
              name='down'
              size={18}
              color='white'
            />
          </View>
          <MaterialCommunityIcons
            name='bell-ring-outline'
            size={26}
            color='white'
          />
        </View>

        <View style={styles.principal}>
          <FontAwesome5
            name='cloud-sun'
            size={150}
            color='white'
          />
          <View style={styles.textBox}>
            <Text style={styles.principalGraus}>29º</Text>
            <Text style={styles.principalText}>Precipitation</Text>
            <Text style={styles.principalText}>Max.: 31º Min.: 28º</Text>
          </View>
          <CardBox
            wheater={'sunny'}
            temperatura={'32'}
            hora={'01:30'}
          />
          <CardBoxdayNight dawn={'05:00'} sunset={'18:00'}/>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 40,
    paddingHorizontal: 35,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerLeftText: {
    color: '#fff',
  },

  principal: {
    marginTop: 50,
    alignItems: 'center',
    gap: 10,
  },
  textBox: {
    alignItems: 'center',
  },
  principalGraus: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff',
  },
  principalText: {
    fontWeight: '400',
    color: '#fff',
  },
})
