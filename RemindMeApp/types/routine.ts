import {
  CalendarDaysIcon,
  DownloadIcon,
  LucideIcon,
  MessageCircleIcon,
} from "lucide-react-native";

// ==> Components (useState value and function)
export type CustomComponentProps<T> = {
  value: T;
  setValue: (value: T) => void;
};

// ==> Routine Parts
//chooseDays.tsx
// todo: austauschen!
export type ActiveDays = {
  Mo: boolean;
  Tu: boolean;
  We: boolean;
  Th: boolean;
  Fr: boolean;
  Sa: boolean;
  Su: boolean;
};

// chooseRepeat.tsx
export type RepeatState = {
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  date: Date;
  days: ActiveDays;
};

// chooseTemperature.tsx
// temperature: number <= todo
export type ActiveMinMaxTemp = {
  min: boolean;
  max: boolean;
};
export type TempState = {
  temp: number;
  activeButtons: ActiveMinMaxTemp;
};


// chooseWeather.tsx
export type WeatherState = {
  location: string
  activeWeather: ActiveWeather
};

export type ActiveWeather = {
  sun: boolean;
  hail: boolean;
  lightning: boolean;
  snow: boolean;
};


export type Routine = {
  isActive: boolean
  message: string;
  //---
  repeat: RepeatState
  weather: WeatherState
  temperature: TempState
};

export type RoutineDbCall ={
  id: number
  routineData: Routine
}


