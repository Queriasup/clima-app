import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from '@rneui/themed';


export function Home(){
    return(
        <LinearGradient colors= {["#0B316D", "#0F47AF"]} style = {styles.container}>
            <View style = {styles.content}>
                <View style = {styles.header}>
                    <View style = {styles.headerLeft}>
                        <Feather name="map-pin" size={24} color="white" />
                        <Text style = {styles.headerLeftText}>Recife</Text>
                        <AntDesign name="down" size={18} color="white" />
                    </View>
                    <MaterialCommunityIcons name="bell-ring-outline" size={26} color="white" />
                </View>

                <View style = {styles.principal}>
                    
                    <View>
                        <Text>28º</Text>
                        <Text>Precipitation</Text>
                        <Text>Max.:31º Min.:28º</Text>
                    </View>
                    <View>
                        
                    </View>
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
        alignItems: 'center',
    }
})