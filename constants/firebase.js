import {collection, addDoc, query, onSnapshot} from 'firebase/firestore'
import {database} from "../FirebaseService";
import {Text, View} from "react-native";
import {useState} from "react";



const [notes, setNotes] = useState([]);
const chatColl = "notes";


const sendData = function (text) {
    console.log("Text input: "+text)
    createNote(text)
}

async function createNote(userInput){
    await addDoc(collection(database,chatColl),{
        text: userInput
    })

}

export const readData = function () {
    console.log("Reading all firebase data")


    return(
        <View>
            <Text>Hello there dumbass</Text>
        </View>
    )
}




export default sendData;