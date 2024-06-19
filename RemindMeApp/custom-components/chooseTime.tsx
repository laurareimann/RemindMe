import { SafeAreaView } from "@/components";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Button, Platform, Text } from "react-native";

// we only net Hours and Minutes
var d = new Date(); // for now
d.getHours(); // => 9
d.getMinutes(); // =>  30

export default function ChooseTime() {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showPicker = () => {
    setShow(true);
  };
  const hidePicker = () => {
    setShow(false);
  };


  return (
    <>
      <SafeAreaView flexDirection="row" justifyContent="space-between">
        {/* We dont need dates */}
        {/* <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          onChange={onChange}
        /> */}
        <Button onPress={showPicker} title="Select Time" />
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      </SafeAreaView>
      <Text>selected: {date.toLocaleString()}</Text>
      <Text>ToDo: only use Hours & Minutes</Text>
    </>
  );
}
