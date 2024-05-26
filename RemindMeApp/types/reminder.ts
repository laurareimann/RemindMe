// 1. first of all
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
    latitude: number
    longitude: number
}
export type RoutinePlanned = {
  message: string;
  isActive: boolean;
  Repeats: {
    time: string; 
    // maybe more than one time to remind more than one time per day 
    // maybe random time which is invisible to create random reminder
    days: week;
  };
  weather: {
    location: gpsCoords;
    weatherConditions: "Clear"|"sun" | "rain" | "snow" | string; //todo: or string[] ... list if we like to have more then 1 conditions enableable
  };
  temperature: {
    celisus: number; //or string?
    isMin: boolean; //else true isMin ... false isMay
  };
};
