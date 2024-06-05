import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { Button } from '@/components'


export default function ChooseTime() {
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <View>
      <Button onPress={() => setOpen(true)}>Date</Button>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View>
  )
}