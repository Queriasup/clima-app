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
import DayList from '../components/cardbox/DayList'
import { useState, useEffect } from 'react'
import { WeatherData } from '../interface/WeatherTypes'

export function Home() {

    const [cityName, setCityName] = useState('Okinawa');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [conditionSlugs, setConditionSlugs] = useState(['', '', '', '', '']);
    const [hour, setHour] = useState('');

    useEffect(() => {
      getWeather('Rio de Janeiro');
  }, []);

  const getWeather = (city: string) => {
    const apiKey = 'SUA-CHAVE';
    const getCity = encodeURIComponent(city)
    fetch(`https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${getCity}`)
    .then(response => response.json())
    .then(data => {
        if (data.valid_key && data.results.temp) {
            setWeatherData(data.results);
            setCityName(data.results.city);
            const newConditionSlugs = data.results.forecast.slice(0, 5).map((item: { condition: any; }) => item.condition);
            setConditionSlugs(newConditionSlugs);
            setHour(data.results.time)
        } else {
            alert('Cidade não encontrada.');
        }
    })
    .catch(error => {
        console.error('Erro ao buscar dados do clima:', error);
    });
  }
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
            <Text style={styles.headerLeftText}>{cityName}</Text>
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
        {weatherData ? (
          <>
            <FontAwesome5
              name='cloud-sun'
              size={150}
              color='white'
            />
            <View style={styles.textBox}>
              <Text style={styles.principalGraus}>{weatherData.temp}º</Text>
              <Text style={styles.principalText}>{weatherData.description}</Text>
              <Text style={styles.principalText}>
                <Text>{weatherData.forecast[0].max}º</Text>
                <Text>{weatherData.forecast[0].min}º</Text>
              </Text>
            </View>
            <CardBox
              weather={weatherData.forecast[0].rain_probability}
              humidity={weatherData.humidity}
              windSpeed={weatherData.wind_speedy}
            />
            <CardBoxdayNight dawn={weatherData.sunrise} sunset={weatherData.sunset} />
            <View style={styles.dayListContainer}>
              <DayList weekDay='segunda' maxTemp='30' minTemp='25' />
            </View>
          </>
        ) : (
          <Text style={styles.principalText}>Carregando...</Text>
        )}
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

  dayListContainer: {
    backgroundColor: '#0B316D',
    width: '90%',
    padding: 20,
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    borderRadius: 10,
  }
})
