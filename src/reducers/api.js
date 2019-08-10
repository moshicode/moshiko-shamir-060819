// let initialState = {}

const currentWeatherDemo = {
    IsDayTime: false,
    LocalObservationDateTime: '2019-08-10T03:41:00+03:00',
    Photos: 'http://cityscapes.accuweather.com/cityscapes/Israel/TelAviv_166087645_L_XXL.jpg',
    Temperature: {
        Metric: {
            Value: 24.4,
            Unit: 'C',
            UnitType: 17
        },
        Imperial: {
            Value: 76,
            Unit: 'F',
            UnitType: 18
        }
    },
    WeatherIcon: 34,
    WeatherText: 'Mostly clear'
}

const forecastsDemo = [
    {
        Date: '2019-08-09T07:00:00+03:00',
        EpochDate: 1565323200,
        Temperature: {
            Minimum: {
                Value: 76,
                Unit: 'F',
                UnitType: 18
            },
            Maximum: {
                Value: 89,
                Unit: 'F',
                UnitType: 18
            }
        },
        Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
        },
        Night: {
            Icon: 33,
            IconPhrase: 'Clear',
            HasPrecipitation: false
        },
        Sources: [
            'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us'
    },
    {
        Date: '2019-08-10T07:00:00+03:00',
        EpochDate: 1565409600,
        Temperature: {
            Minimum: {
                Value: 73,
                Unit: 'F',
                UnitType: 18
            },
            Maximum: {
                Value: 88,
                Unit: 'F',
                UnitType: 18
            }
        },
        Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
        },
        Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false
        },
        Sources: [
            'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us'
    },
    {
        Date: '2019-08-11T07:00:00+03:00',
        EpochDate: 1565496000,
        Temperature: {
            Minimum: {
                Value: 74,
                Unit: 'F',
                UnitType: 18
            },
            Maximum: {
                Value: 88,
                Unit: 'F',
                UnitType: 18
            }
        },
        Day: {
            Icon: 1,
            IconPhrase: 'Sunny',
            HasPrecipitation: false
        },
        Night: {
            Icon: 33,
            IconPhrase: 'Clear',
            HasPrecipitation: false
        },
        Sources: [
            'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us'
    },
    {
        Date: '2019-08-12T07:00:00+03:00',
        EpochDate: 1565582400,
        Temperature: {
            Minimum: {
                Value: 75,
                Unit: 'F',
                UnitType: 18
            },
            Maximum: {
                Value: 90,
                Unit: 'F',
                UnitType: 18
            }
        },
        Day: {
            Icon: 1,
            IconPhrase: 'Sunny',
            HasPrecipitation: false
        },
        Night: {
            Icon: 33,
            IconPhrase: 'Clear',
            HasPrecipitation: false
        },
        Sources: [
            'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us'
    },
    {
        Date: '2019-08-13T07:00:00+03:00',
        EpochDate: 1565668800,
        Temperature: {
            Minimum: {
                Value: 76,
                Unit: 'F',
                UnitType: 18
            },
            Maximum: {
                Value: 91,
                Unit: 'F',
                UnitType: 18
            }
        },
        Day: {
            Icon: 1,
            IconPhrase: 'Sunny',
            HasPrecipitation: false
        },
        Night: {
            Icon: 33,
            IconPhrase: 'Clear',
            HasPrecipitation: false
        },
        Sources: [
            'AccuWeather'
        ],
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us'
    }
]

const initialState = {
    location: {
        Key: '215854',
        LocalizedName: 'Tel Aviv'
    },
    // forecasts: [],
    forecasts: forecastsDemo,
    // currentWeather: {}
    currentWeather: currentWeatherDemo
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LOCATION':
            return {
                ...state,
                location: action.payload
            }
        case 'FETCH_FORECASTS':
            return {
                ...state,
                forecasts: action.payload
            }
        case 'FETCH_CURRENT_WEATHER':
            return {
                ...state,
                currentWeather: action.payload
            }
        default:
            return state
    }
}