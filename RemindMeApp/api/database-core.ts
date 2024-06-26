import { RepeatState, Routine, RoutineDbCall } from '@/types/routine';
import { initializeApp } from 'firebase/app';
import { DocumentData, getFirestore } from 'firebase/firestore';
import { doc, addDoc, collection, getDocs, deleteDoc } from "firebase/firestore";

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

export const getAllRoutines = async () => {
    // setLoading(true);
    try {
        const querySnapshot = await getDocs(collection(db, "routines"));
        const entrys: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            entrys.push({ id: doc.id, data: doc.data() });
        });
        return entrys;
    } catch (e) {
        return false;
    }
}

export const fetchRoutines = async (): Promise<RoutineDbCall[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, "routines"));      const fetchedRoutines: RoutineDbCall[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        routineData: convertToRoutine(doc.data()), // Konvertierung der Firebase-Daten
      }));
      return fetchedRoutines;
    } catch (error) {
      console.error('Error fetching routines: ', error);
      throw error;
    }
  };

  const convertToRoutine = (data: any): Routine => {
    const repeat: RepeatState = {
      frequency: data.repeat.frequency,
      date: data.repeat.date.toDate(), //Konvertierung zurück in Date-Objekt
      days: data.repeat.days,
    };
  
    const routine: Routine = {
      isActive: data.isActive,
      message: data.message,
      repeat: repeat,
      weather: data.weather,
      temperature: data.temperature,
    };
  
    return routine;
  };

export const uploadRoutine = async (routine: Routine) => {
    // setLoading(true);
    try {
        const response = await addDoc(collection(db, "routines"), routine);
        return response;
    } catch (e) {
        return false;
    }
};

export const deleteRoutineById = async (id: number) => {
    // setLoading(true);
    let docRef = doc(db, "routines", id.toString());
    try {
        await deleteDoc(docRef);
        return getAllRoutines();
    } catch (e) {
        return false;
        // setLoading(false);
    }
}