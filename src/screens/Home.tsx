import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, CaretDown, BellRinging } from 'phosphor-react-native';

export function Home(){
    return(
        <LinearGradient colors= {["#0B316D", "#0F47AF"]} style = {styles.container}>
            <View style = {styles.content}>
                <View style = {styles.header}>
                    <View style = {styles.headerLeft}>
                        <MapPin color = "#fff" size={25}/>
                        <Text style = {styles.headerLeftText}>Recife</Text>
                        <CaretDown color="#fff" size={25}/>
                    </View>
                    <BellRinging color="#fff" size={25}/>
                </View>

                <View style = {styles.principal}>
                    <Image source={{uri: 'https://assets.hgbrasil.com/weather/icons/conditions/clear_day.svg'}}/>
                </View>
            </View>

        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }, 
    content: {
        paddingTop: 40,
        paddingHorizontal: 35
    },
    header:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerLeft:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    headerLeftText:{
        color: "#fff",
    },


    principal:{

    }
})