import { Button, ButtonIcon, SafeAreaView } from "@/components";
import { RepeatState } from "@/types/routine";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Clock3, Calendar } from "lucide-react-native";
import React, { useState } from "react";
import { Platform, Text } from "react-native";

interface ChooseTimeProps {
  showDateButton?: boolean;
  showTimeButton?: boolean;
  value: RepeatState;
  setValue: (value: RepeatState) => void;
}

const ChooseTime: React.FC<ChooseTimeProps> = ({ showDateButton = true, showTimeButton = true, value, setValue }) => {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event: any, selectedDate: Date) => {
    const currentDate = selectedDate || value.dateMY ;
    setShowTimePicker(Platform.OS === 'ios');
    setShowDatePicker(Platform.OS === 'ios');
    const prev = value;
    setValue({
      ...prev,
      dateMY: currentDate,
    });
  };

  const formattedDate = `${value.dateMY.getDate().toString().padStart(2, '0')}.${(value.dateMY.getMonth() + 1).toString().padStart(2, '0')}.${value.dateMY.getFullYear()}`;
  const formattedTime = `${value.dateMY.getHours().toString().padStart(2, '0')}:${value.dateMY.getMinutes().toString().padStart(2, '0')}`;
  
  let formattedDateTime = '';
  if (showDateButton) formattedDateTime += formattedDate;
  if (showDateButton && showTimeButton) formattedDateTime += ', ';
  if (showTimeButton) formattedDateTime += formattedTime;

  return (
    <>
      <SafeAreaView marginBottom="$2" flexDirection="row">
        {showTimeButton && (
          <Button width="5%" marginRight="$2" onPress={() => setShowTimePicker(true)}>
            <ButtonIcon as={Clock3} color="white" />
          </Button>
        )}
        {showDateButton && (
          <Button width="5%" marginRight="$2" onPress={() => setShowDatePicker(true)}>
            <ButtonIcon as={Calendar} color="white" />
          </Button>
        )}
        {showDatePicker && (
          <DateTimePicker
            testID="datePicker"
            value={value.dateMY}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
             if (selectedDate) onChange(event, selectedDate);
              setShowDatePicker(false);
            }}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            testID="timePicker"
            value={value.dateMY}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              if (selectedDate) onChange(event, selectedDate);
              setShowTimePicker(false);
            }}
          />
        )}
      </SafeAreaView>
      <SafeAreaView marginBottom="$2" flexDirection="row">
        <Text>{formattedDateTime}</Text>
      </SafeAreaView>
    </>
  );
};

export default ChooseTime;
