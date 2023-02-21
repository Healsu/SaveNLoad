import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import React, {useEffect} from "react";
import ListItem from "../constants/ListItem";
import {readData} from "../constants/firebase";


//useEffect(() =>)
const AllNotesScreen = ({notes}) => {

    const read = () => {
        readData()
    }
    const renderItem = (itemData)=>{
      return  <ListItem note={itemData.item.note}/>
    }
    return (
        <View style={styles.container}>
            <FlatList data={notes} renderItem={renderItem} />

            <View>
                <Text>Data taken from firebase</Text>
                <Button title='ReadDB' onPress={read}/>

            </View>
        </View>


    );
};

export default AllNotesScreen;
const styles = StyleSheet.create({});