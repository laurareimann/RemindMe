import { Button, ButtonIcon, SafeAreaView } from "@/components";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  Clock3, Calendar
} from "lucide-react-native";
import React, { useState } from "react";
import { Platform, Text } from "react-native";


// we only net Hours and Minutes
var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30

export default function ChooseTime() {
  const [date, setDate] = useState<Date>(new Date());
  const [showTime, setShowTime] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowTime(Platform.OS === 'ios');
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showTimePicker = () => {
    setShowTime(true);
  };
  const showDatePicker = () => {
    setShowDate(true);
  };

  const formattedDate = `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}`;
  const formattedTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  const formattedDateTime = `${formattedDate}, ${formattedTime}`;
  return (
    <>
      <SafeAreaView marginBottom="$2" flexDirection="row">
        <Button width="5%" marginRight={"$2"} onPress={showTimePicker}>
          <ButtonIcon as={Clock3} color="white" />
        </Button>
        <Button width="5%" marginRight={"$2"} onPress={showDatePicker}>
          <ButtonIcon as={Calendar} color="white" />
        </Button>
        {showDate && (<DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        />)}
        {showTime && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"time"}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </SafeAreaView>
      <SafeAreaView marginBottom="$2" flexDirection="row">
        <Text>{formattedDateTime}</Text>
      </SafeAreaView>

    </>
  );
}
