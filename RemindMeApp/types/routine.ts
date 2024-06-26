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
  dateMY: Date;
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

// chooseTime.tsx
// todo:

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
  message: string;
  repeat: ""; //todo
  time: ""; //todo
  days: ActiveDays;
  weather: { location: string; activeWeather: WeatherState };
  temperature: TempState
};


//! old types ... 

type week = {
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thursday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
};

type gpsCoords = {
  latitude: number;
  longitude: number;
};
export type RoutinePlanned = {
  icon: LucideIcon;
  message: string;
  isActive: boolean;
  Repeats: {
    time: string | string[];
    // Allows for one or more times per day
    // maybe more than one time to remind more than one time per day
    // maybe random time which is invisible to create random reminder
    days: week;
  };
  weather: {
    location: gpsCoords;
    weatherConditions: "Clear" | "sun" | "rain" | "snow" | string[]; // Allows for multiple conditions
  };
  temperature: {
    celsius: number; //or string?
    isMin: boolean; //else true isMin ... false isMay
  };
};

// Example data
export const PlannedReminderDummyData: RoutinePlanned[] = [
  {
    icon: MessageCircleIcon,
    message: "Morning Jog",
    isActive: true,
    Repeats: {
      time: ["06:00", "18:00"], // Reminders twice a day
      days: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: false,
        Sunday: false,
      },
    },
    weather: {
      location: { latitude: 40.7128, longitude: -74.006 }, // New York City coords
      weatherConditions: ["Clear", "sun"], // Either Clear or sunny weather
    },
    temperature: {
      celsius: 10, // Minimum temperature 10°C
      isMin: true,
    },
  },
  {
    icon: CalendarDaysIcon,
    message: "Carry an Umbrella",
    isActive: true,
    Repeats: {
      time: "07:00",
      days: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: true,
      },
    },
    weather: {
      location: { latitude: 51.5074, longitude: -0.1278 }, // London coords
      weatherConditions: ["rain"],
    },
    temperature: {
      celsius: 0, // Minimum temperature 0°C
      isMin: true,
    },
  },
  {
    icon: DownloadIcon,
    message: "Dress Warmly",
    isActive: false,
    Repeats: {
      time: "08:00",
      days: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: true,
        Sunday: true,
      },
    },
    weather: {
      location: { latitude: 60.1695, longitude: 24.9354 }, // Helsinki coords
      weatherConditions: ["snow"],
    },
    temperature: {
      celsius: -5, // Maximum temperature -5°C
      isMin: false,
    },
  },
  {
    icon: DownloadIcon,
    message: "Dress Warmly2",
    isActive: false,
    Repeats: {
      time: "08:00",
      days: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: true,
        Sunday: true,
      },
    },
    weather: {
      location: { latitude: 60.1695, longitude: 24.9354 }, // Helsinki coords
      weatherConditions: ["snow"],
    },
    temperature: {
      celsius: -5, // Maximum temperature -5°C
      isMin: false,
    },
  },
  {
    icon: DownloadIcon,
    message: "Dress Warmly3",
    isActive: false,
    Repeats: {
      time: "08:00",
      days: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: true,
        Sunday: true,
      },
    },
    weather: {
      location: { latitude: 60.1695, longitude: 24.9354 }, // Helsinki coords
      weatherConditions: ["snow"],
    },
    temperature: {
      celsius: -5, // Maximum temperature -5°C
      isMin: false,
    },
  },
];
