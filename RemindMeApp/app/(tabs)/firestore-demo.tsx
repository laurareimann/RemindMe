import { StyleSheet } from "react-native";
import { Box, View, Text, Button, VStack, HStack, Card, Divider, Center, Spinner } from "../../components";

// ------ Firebase -------

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-yGWjxCwDKSlxBRm97XmjjmzJhv1wDmw',
  authDomain: 'remind-me-76b5b.firebaseapp.com',
  databaseURL: 'https://remind-me-76b5b.firebaseio.com',
  projectId: 'remind-me-76b5b',
  storageBucket: 'remind-me-76b5b.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:450967273921:android:f2f4ccb1d4a2f7ef3bef40',
  measurementId: 'G-measurement-id',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// ------ Firebase -------

import { addDoc, collection } from "firebase/firestore"; 
import { useState } from "react";

export default function TabOneScreen() {
  const [response, setResponse] = useState("This is the response");
  const [loading, setLoading] = useState(false);

  const upload = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
      setResponse("Document written with ID: " + docRef.id);
      setLoading(false);
    } catch (e) {
      setResponse("Error adding document: " + e);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <VStack space="2xl">
        <Card p="$5" m="$5" width="90%" >
          <View>
              <Text color="black" fontWeight="$medium" >{response}</Text>
          </View>
          {loading &&
            <Center rounded="$xl" style={styles.loadAnimation}>
              <Spinner size="large" ></Spinner>
            </Center>
          }
        </Card>
        <Button action="primary" size="lg" rounded="$full" hardShadow="1" onPress={upload}>
          <Text color="$light100" >Create Document</Text>
        </Button>
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loadAnimation: { 
    zIndex: 1, 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: 'rgba(255, 255, 255, 0.9)' 
  }
});
