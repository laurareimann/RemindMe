import { StyleSheet } from "react-native";
import { Box, View, Text, Button, VStack, HStack, Card, Divider, Center, Spinner, ScrollView, Icon, CalendarDaysIcon} from "../../components";
import FontAwesome from '@expo/vector-icons/FontAwesome';

// ------ Firebase -------

import { initializeApp  } from 'firebase/app';
import { DocumentData, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnht2-k29OLuuADU_H5i5mEorwIOFNX5Y",
  authDomain: "remind-me-76b5b.firebaseapp.com",
  projectId: "remind-me-76b5b",
  storageBucket: "remind-me-76b5b.appspot.com",
  messagingSenderId: "450967273921",
  appId: "1:450967273921:web:da2e889b8fba03a43bef40"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// ------ Firebase -------

import { addDoc, collection, getDocs } from "firebase/firestore"; 
import { useState } from "react";

export default function TabOneScreen() {
  const [documents, setDocuments] = useState<DocumentData[]>([ { first: "Alan", middle: "Mathison", last: "Turing", born: 1912 } ]); 
  const [loading, setLoading] = useState(false);

  const getAllDocs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const entrys: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        entrys.push(doc.data());
      });
      setDocuments(entrys);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  const createDoc = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const deleteDoc = async () => {
    
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VStack space="2xl">
        <Card p="$5" m="$5" width="90%" >
          {documents.map((doc, index) => (
            <View key={index}>
              <HStack key={doc.id} space="xl" py="$2">
                <Text>{doc.first} {doc.middle} {doc.last}</Text>
                <FontAwesome size={20} color="black" name="remove" style={styles.icon}/>
              </HStack>
            </View>
          ))}
          {loading &&
            <Center rounded="$xl" style={styles.loadAnimation}>
              <Spinner size="large" ></Spinner>
            </Center>
          }
        </Card>
        <Button action="primary" size="lg" rounded="$full" hardShadow="1" onPress={() => createDoc().then(() => getAllDocs()) }>
          <Text color="$light100" >Add Document</Text>
        </Button>
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginBottom: -3,
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
