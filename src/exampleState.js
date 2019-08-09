// Location AutoComplete - Request API by City name (string) => Receive locationkey
// 5 Day Daily Forecast - Request API by LocationKey => Receive
// Current Weather - Request API by LocationKey =>

const examplestate = [
    locationData: {
        locationKey: '123',
        lat: '',
        lng:
    },
    foreCastData: {
        DailyForecasts:
            [
                {
                    Date: "2013-01-28T07:00:00-05:00",
                    EpochDate: 1359374400,
                    Temperature:
                    {
                        Minimum:
                        {
                            Value: 34,
                            Unit: "F",
                            UnitType: 18
                        },
                        Maximum:
                        {
                            Value: 35,
                            Unit: "F",
                            UnitType: 18
                        }
                    },
                    Day:
                    {
                        Icon: 12,
                        IconPhrase: "Showers"
                    },
                    Night:
                    {
                        Icon: 18,
                        IconPhrase: "Rain"
                    },
                    MobileLink: "http://m.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=1&lang=en-us",
                    Link: "http://www.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=1&lang=en-us"
                },
                {
                    Date: "2013-01-29T07:00:00-05:00",
                    EpochDate: 1359460800,
                    Temperature:
                    {
                        Minimum:
                        {
                            Value: 46,
                            Unit: "F",
                            UnitType: 18
                        },
                        Maximum:
                        {
                            Value: 46,
                            Unit: "F",
                            UnitType: 18
                        }
                    },
                    Day:
                    {
                        Icon: 12,
                        IconPhrase: "Showers"
                    },
                    Night:
                    {
                        Icon: 11,
                        IconPhrase: "Fog"
                    },
                    MobileLink: "http://m.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=2&lang=en-us",
                    Link: "http://www.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=2&lang=en-us"
                },
                {
                    Date: "2013-01-30T07:00:00-05:00",
                    EpochDate: 1359547200,
                    Temperature:
                    {
                        Minimum:
                        {
                            Value: 33,
                            Unit: "F",
                            UnitType: 18
                        },
                        Maximum:
                        {
                            Value: 57,
                            Unit: "F",
                            UnitType: 18
                        }
                    },
                    Day:
                    {
                        Icon: 18,
                        IconPhrase: "Rain"
                    },
                    Night:
                    {
                        Icon: 7,
                        IconPhrase: "Cloudy"
                    },
                    MobileLink: "http://m.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=3&lang=en-us",
                    Link: "http://www.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=3&lang=en-us"
                },
                {
                    Date: "2013-01-31T07:00:00-05:00",
                    EpochDate: 1359633600,
                    Temperature:
                    {
                        Minimum:
                        {
                            Value: 18,
                            Unit: "F",
                            UnitType: 18
                        },
                        Maximum:
                        {
                            Value: 36,
                            Unit: "F",
                            UnitType: 18
                        }
                    },
                    Day:
                    {
                        Icon: 6,
                        IconPhrase: "Mostly Cloudy"
                    },
                    Night:
                    {
                        Icon: 35,
                        IconPhrase: "Partly Cloudy"
                    },
                    MobileLink: "http://m.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=4&lang=en-us",
                    Link: "http://www.accuweather.com/en/us/state-college-pa/16801/daily-weather-forecast/335315?day=4&lang=en-us"
                },
                {
                    Date: "2013-02-02T07:00:00-04:00",
                    EpochDate: 1359802800,
                    Temperature:
                    {
                        Minimum:
                        {
                            Value: 41,
                            Unit: "F",
                            UnitType: 18
                        },
                        Maximum:
                        {
                            Value: 65,
                            Unit: "F",
                            UnitType: 18
                        }
                    },
                    Day:
                    {
                        Icon: 15,
                        IconPhrase: "Thunderstorms"
                    },
                    Night:
                    {
                        Icon: 15,
                        IconPhrase: "Thunderstorms"
                    },
                    MobileLink: "http://m.accuweather.com/en/bo/santiago-de-machaca/33531/daily-weather-forecast/33531?day=6&lang=en-us",
                    Link: "http://www.accuweather.com/en/bo/santiago-de-machaca/33531/daily-weather-forecast/33531?day=6&lang=en-us"
                }
            ]
    },
    currentWeather: [
        {
            "LocalObservationDateTime": "2018-11-01T14:11:00-04:00",
            "EpochTime": 1541095860,
            "WeatherText": "Partly sunny",
            "WeatherIcon": 3,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 20.6,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 69,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            Photos: [
                {
                    PortraitLink: "http://cityscapes.accuweather.com/cityscapes/USA/NewYork_146819736_P_L.jpg",
                    LandscapeLink: "http://cityscapes.accuweather.com/cityscapes/USA/NewYork_146819736_L_L.jpg"
                }
            ]
        }
    ],
    favorites: [
        {
            id: { locationKey },
            name: 'Tel Aviv',
            currentTemp: '23.4'
        }
    ]
]

[
    {
        "Version": 1,
        "Key": "210841",
        "Type": "City",
        "Rank": 20,
        "LocalizedName": "Tehran",
        "Country": {
            "ID": "IR",
            "LocalizedName": "Iran"
        },
        "AdministrativeArea": {
            "ID": "07",
            "LocalizedName": "Tehran"
        }
    },
    {
        "Version": 1,
        "Key": "60592",
        "Type": "City",
        "Rank": 23,
        "LocalizedName": "Tengzhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SD",
            "LocalizedName": "Shandong"
        }
    },
    {
        "Version": 1,
        "Key": "188046",
        "Type": "City",
        "Rank": 30,
        "LocalizedName": "Tegucigalpa",
        "Country": {
            "ID": "HN",
            "LocalizedName": "Honduras"
        },
        "AdministrativeArea": {
            "ID": "FM",
            "LocalizedName": "Francisco Morazán"
        }
    },
    {
        "Version": 1,
        "Key": "45253",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Teresina",
        "Country": {
            "ID": "BR",
            "LocalizedName": "Brazil"
        },
        "AdministrativeArea": {
            "ID": "PI",
            "LocalizedName": "Piauí"
        }
    }
]