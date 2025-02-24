import './App.css';
import React, { useState } from 'react';
import { styled } from '@mui/system'
import { Container } from '@mui/material'
import { TodayContainer, WeekContainer } from './weather/weatherContainer.js'
import { SearchBox } from './search/searchBox.js'
import logo from "./weather-icon.svg"

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")

  const StyledContainer = styled(Container)`
    background-color: lightblue;
    padding: 16px;
    display: flex;
    flex-direction: row;
  `;

  const LandingContainer = styled(Container)`
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
  `;

  const WeatherIcon = styled('img')`
    width: 200px;
    height: 200px;
  `;

  const weatherApp = () => {
    return (
      <>
      <TodayContainer>
        Today's Weather!
      </TodayContainer>
      <WeekContainer>
        This week's Weather!
      </WeekContainer>
      </>
    )
  }

  const getCity = () => {
    return (
      <>
        <LandingContainer>
          <WeatherIcon src={logo} alt="icon" />
          <SearchBox>
            <p>Search for a city!</p>
            <div>
            <input />
            </div>
          </SearchBox>
        </LandingContainer>
      </>
    )
  }
  
  return (
    <>
      <StyledContainer>
        {city && weather ? weatherApp() : getCity()}
      </StyledContainer>
    </>
  );
}

export default App;