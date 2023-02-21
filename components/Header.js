import {Platform, StyleSheet, Text, View} from "react-native";
import React from "react";

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTile}>🐒Awesome Sticky Notes🐒</Text>
        </View>
    );
};

export default Header;




const styles = StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:"13%",
        backgroundColor: Platform.OS=="android" ?"purple":"white",
       alignItems: 'center'

    },
    headerTile:{
        color: Platform.OS=="android" ?"white":"purple",
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
    }
});