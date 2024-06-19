import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { View, Text, Button, VStack, HStack, Card, Center, Spinner, ScrollView } from "../../components";
import FontAwesome from '@expo/vector-icons/FontAwesome';

// ------ Firebase -------

import { initializeApp  } from 'firebase/app';
import { DocumentData, getFirestore } from 'firebase/firestore';
import { doc, addDoc, collection, getDocs, deleteDoc } from "firebase/firestore"; 
import React from "react";

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

const exampleDocument = {
  id : "1",
  data: { 
    first: "Alan", 
    middle: "Mathison", 
    last: "Turing", 
    born: 1912 
  } 
}

export default function TabOneScreen() {
  useEffect(() => {
    getAllDocs();
  }, [])

  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState<DocumentData[]>([ exampleDocument ]); 

  const getAllDocs = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const entrys: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        entrys.push({ id: doc.id, data: doc.data() });
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

  const deleteDocById = async (id: number) => {
    setLoading(true);
    let docRef = doc(db, "users", id.toString());
    try {
      await deleteDoc(docRef);
      getAllDocs();
    } catch (e) {
      console.error("Error removing document: ", e);
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <VStack space="2xl">
        <Card p="$5" m="$5" width="90%" >
          {documents.map((doc, index) => (
            <View key={index}>
              <HStack key={doc.id} space="xl" py="$2">
                <Text>{doc.data.first} {doc.data.middle} {doc.data.last}</Text>
                <FontAwesome size={20} color="black" name="remove" style={styles.icon} onPress={() => deleteDocById(doc.id)}/>
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