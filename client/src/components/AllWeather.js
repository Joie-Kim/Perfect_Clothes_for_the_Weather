import React from "react";
import styled from 'styled-components';
import WeatherIconSwitch from "../lib/WeatherIconSwitch";

const ContainerBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;

const TitleBlock = styled.div`
    background: white;
    border-radius: 4px;
    border: none;
    width: 500px;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.125rem;
    color: #373a40;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const AllWeatherBlock = styled.div`
    background: white;
    border-radius: 4px;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: start;
    width: 800px;
    height: 250px;
    margin-bottom: 60px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    overflow: auto;
`;

const WeatherInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #373a40;
    height: 200px;
    margin: 5px;
    padding: 20px 20px;
`;

const TimeBlock = styled.div`
    //border: 1px solid black;
    display: flex;
    height: 30px;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
`;

const IconBlock = styled.div`
    //border: 1px solid black;
    display: flex;
    height: 100px;
    font-size: 80px;
`;

const TempBlock = styled.div`
    //border: 1px solid black;
    display: flex;
    height: 25px;
    font-size: 1.5rem;
    margin-bottom: 5px;
`;

const HumidBlock = styled.div`
    //border: 1px solid black;
    display: flex;
    height: 25px;
    width: 80px;
    font-size: 1.5rem;
`;

//임시 데이터
const allWeatherData = [
    {
        time: "15:00:00",
        weather: "Clear",
        temp: 15,
        humid: 60
    },
    {
        time: "18:00:00",
        weather: "Clouds",
        temp: 15,
        humid: 50
    },
    {
        time: "21:00:00",
        weather: "Fog",
        temp: 14,
        humid: 50
    },
    {
        time: "24:00:00",
        weather: "Fog",
        temp: 13,
        humid: 50
    },
    {
        time: "03:00:00",
        weather: "Tornado",
        temp: 13,
        humid: 50
    },
    {
        time: "06:00:00",
        weather: "Tornado",
        temp: 12,
        humid: 40
    },
    {
        time: "09:00:00",
        weather: "Clear",
        temp: 14,
        humid: 40
    },
    {
        time: "12:00:00",
        weather: "Clear",
        temp: 15,
        humid: 40
    }
]

const AllWeather = (/*{allWeatherData, error}*/) => {
    //에러 구현해야함

    return (
        <ContainerBlock>
            <TitleBlock>
                <h2>Today's weather</h2>
            </TitleBlock>
            <AllWeatherBlock>
                {allWeatherData.map(data => (
                    <WeatherInfoBlock>
                        <TimeBlock>{data.time.slice(0, 5)}</TimeBlock>
                        <IconBlock>
                            {WeatherIconSwitch(data.weather)}
                        </IconBlock>
                        <TempBlock>{data.temp}°</TempBlock>
                        <HumidBlock>
                            <i className='wi wi-raindrop'> {data.humid}%</i>
                        </HumidBlock>
                    </WeatherInfoBlock>
                ))}
            </AllWeatherBlock>
        </ContainerBlock>
    );
};

export default AllWeather;