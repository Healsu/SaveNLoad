import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import {useState} from "react";
import {ScreenType} from "./constants/constants";
import AddNote from "./screens/AddNote";
import AllNoteScreen from "./screens/AllNoteScreen";
import BackButton from "./constants/BackButton";

export default function App() {
    const [screen, setScreen] = useState(ScreenType.home);
    const [notes, setNotes] = useState([]);
    let content;

    if (screen === ScreenType.addNote) {
        content = <AddNote onSave={(data)=>setNotes([...notes,{id:Date.now(),note: data }])}/>
    } else if (screen === ScreenType.allNotes) {
        content = <AllNoteScreen notes={notes}/>
    } else if (screen === ScreenType.home) {
        content = <HomeScreen onExit={(data) => {
            setScreen(data);
        }}/>
    };


console.log(notes);
  return (
    <View style={styles.container}>
      <Header />
        <BackButton onButtonClick={(data) => setScreen(data)}/>
      <StatusBar style="auto" />
        {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    marginTop: 80,
  },
});
