import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

interface DayListProps {
    maxTemp: string;
    minTemp: string;
    weekDay: string;
}

const DayList: React.FC<DayListProps> = ({maxTemp, minTemp, weekDay}) => {

    return(
        <View style={styles.listContainer}> 
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Próximas Previsões</Text>
                <Entypo name="calendar" size={24} color="white" />
            </View>
            <View style={styles.daysContainer}>
                <Text style={styles.text}>{weekDay}</Text>
                <View style={styles.temp}>
                        <Text style={styles.text}>{maxTemp}º</Text>
                        <Text style={styles.text}>{minTemp}º</Text>
                </View>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer:{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        gap: 20
    },
    containerTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textTitle:{
        color: 'white',
        fontSize: 18,
        fontWeight: '600'
    },
    text:{
        color: 'white'
    },
    daysContainer:{
        flexDirection: 'row',
        gap: 140
    },
    temp:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 5
    },
})

export default DayList