
// ==> Components (useState value and function)
export type CustomComponentProps<T> = {
  value: T;
  setValue: (value: T) => void;
};

// ==> Routine Parts
//chooseDays.tsx
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
  id: string
  routineData: Routine
}


// ---
const initialRoutineDbCalls: RoutineDbCall[] = [
  {
    id: "1",
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
    id: "2",
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