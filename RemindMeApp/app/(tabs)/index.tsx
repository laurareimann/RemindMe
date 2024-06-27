import PlannedRoutineAccordion from "@/custom-components/plannedRoutineAccordion";
import PageView from "@/custom-components/templates";
import { PlannedReminderDummyData, RoutineDbCall } from "@/types/routine";
import { useState } from "react";
import { Alert } from "react-native";
import {
  Box,
  Button,
  Heading,
  ScrollView,
  Text
} from "../../components";
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  'index': undefined;
  'api-demo': undefined;
};

const initialRoutineDbCalls: RoutineDbCall[] = [
  {
    id: 1,
    routineData: {
      isActive: true,
      message: "First sample routine message",
      repeat: {
        frequency: "daily",
        date: new Date(),
        days: {
          Mo: true,
          Tu: false,
          We: true,
          Th: false,
          Fr: true,
          Sa: false,
          Su: false,
        },
      },
      weather: {
        location: "Berlin",
        activeWeather: {
          sun: true,
          hail: false,
          lightning: false,
          snow: true,
        },
      },
      temperature: {
        temp: 22,
        activeButtons: {
          min: true,
          max: false,
        },
      },
    },
  },
  {
    id: 2,
    routineData: {
      isActive: false,
      message: "Second sample routine message",
      repeat: {
        frequency: "weekly",
        date: new Date(),
        days: {
          Mo: false,
          Tu: true,
          We: false,
          Th: true,
          Fr: false,
          Sa: true,
          Su: true,
        },
      },
      weather: {
        location: "Munich",
        activeWeather: {
          sun: false,
          hail: true,
          lightning: true,
          snow: false,
        },
      },
      temperature: {
        temp: 18,
        activeButtons: {
          min: false,
          max: true,
        },
      },
    },
  },
  // Weitere Objekte können hinzugefügt werden
];

export default function TabOneScreen() {
  const [routines, setRoutines] = useState<RoutineDbCall[]>(initialRoutineDbCalls);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSwitchToggle = (index: number) => {
    // Use the map function to create a new array of routines with the updated isActive value
    const updatedRoutines = routines.map((routine, i) =>
      // Check if the current routine's index matches the index of the toggled switch
      i === index ? { ...routine, isActive: !routine.routineData.isActive } : routine
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
                routineIndex={index}
                handleSwitchToggle={() => handleSwitchToggle(index)}
                handleDeleteRoutine={() => handleDeleteRoutine(index)}
              />
            );
          })}
        </ScrollView>
      </Box>
      <Box pt="$4">
        <Button
          action="primary"
          variant="solid"
          size="md"
          onPress={() => {
            console.log('Button new Routine Pressed');
            navigation.navigate('api-demo');
          }}
        >
          <Text bg="black">Create New Routine</Text>
        </Button>
      </Box>
    </PageView>
  );
}
