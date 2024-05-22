// 1. first of all
type RoutinePlanned = {
    title: string
    Repeats: {
        //todo
        day: string
        time: string // 00:00 - 23:59
    }[]
    weather: {
        location: string
        weatherConditions: "sun" | "rain" | "snow" | string //todo: or string[] ... list if we like to have more then 1 conditions enableable
    }
    temperature: {
        minC: number //or string?
        maxC: number //or string?
    }
}