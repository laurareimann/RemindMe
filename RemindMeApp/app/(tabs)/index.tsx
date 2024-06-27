import { fetchRoutines, getAllRoutines } from "@/api/database-core";
import PlannedRoutineAccordion from "@/custom-components/plannedRoutineAccordion";
import PageView from "@/custom-components/templates";
import { Routine, RoutineDbCall } from "@/types/routine";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { DocumentData, collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Box, Button, Heading, ScrollView, Text } from "../../components";

type RootStackParamList = {
  index: undefined;
  "api-demo": undefined;
};

export default function TabOneScreen() {
  const [routines, setRoutines] = useState<RoutineDbCall[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [newRoutines, setNewRoutines] = useState<DocumentData[]>();

  useEffect(() => {
    const loadRoutines = async () => {
      try {
        const fetchedRoutines = await fetchRoutines();
        setRoutines(fetchedRoutines);
      } catch (error) {
        console.error('Error loading routines: ', error);
      }
    };

    loadRoutines();
  }, []);

  const handleSwitchToggle = (index: number) => {
    // Use the map function to create a new array of routines with the updated isActive value
    const updatedRoutines = routines.map((routine, i) =>
      // Check if the current routine's index matches the index of the toggled switch
      i === index
        ? { ...routine, isActive: !routine.routineData.isActive }
        : routine
    );
    // Update the state with the new array of routines
    setRoutines(updatedRoutines);
  };
  const handleDeleteRoutine = (index: number) => {
    Alert.alert(
      "Delete Routine",
      "Are you sure you want to delete this routine?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            const updatedRoutines = routines.filter((_, i) => i !== index);
            setRoutines(updatedRoutines);
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <PageView>
      <Box pt="$5" flex={1}>
        <Heading size={"lg"}>My Routines</Heading>
        <ScrollView style={{ flexGrow: 1 }}>
          {routines?.map((routine, index) => {
            return (
              <PlannedRoutineAccordion
                key={routine.id}
                routine={routine}
                handleSwitchToggle={() => handleSwitchToggle(index)}
                handleDeleteRoutine={() => handleDeleteRoutine(index)}
              />
            );
          })}
        </ScrollView>
      </Box>
      <Box pt="$4" gap="$2" flexDirection="row">
        <Button
          action="primary"
          variant="solid"
          size="md"
          onPress={() => {
            console.log("Button new Routine Pressed");
            navigation.navigate("api-demo");
          }}
        >
          <Text bg="black">Create New Routine</Text>
        </Button>
        <Button
          action="primary"
          variant="solid"
          size="md"
          onPress={() => {
            fetchRoutines().then((routines) => {
              setRoutines(routines);
              console.log("routines", routines);
            });
          }}
        >
          <Text bg="black">Refresh</Text>
        </Button>
      </Box>
    </PageView>
  );
}
