export interface CityResult {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}

interface ConsolidatedWeather {
    id: any;
    weather_state_name: string;
    weather_state_abbr: string;
    wind_direction_compass: string;
    created: string;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    wind_direction: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
    predictability: number;
}

interface Parent {
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
}

interface Source {
    title: string;
    slug: string;
    url: string;
    crawl_rate: number;
}

export interface ForecastResult {
    consolidated_weather: ConsolidatedWeather[];
    time: string;
    sun_rise: string;
    sun_set: string;
    timezone_name: string;
    parent: Parent;
    sources: Source[];
    title: string;
    location_type: string;
    woeid: number;
    latt_long: string;
    timezone: string;
}