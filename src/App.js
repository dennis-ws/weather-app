import './App.css';
import React, { useState } from 'react';
import { styled } from '@mui/system'
import { Container } from '@mui/material'
import { TodayContainer, WeekContainer } from './weather/weatherContainer.js'

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState("")

  const StyledContainer = styled(Container)`
    background-color: lightblue;
    padding: 16px;
    display: flex;
    flex-direction: row;
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