import './App.css'
import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import GoodbyeWorld from './components/GoodbyeWorld'
import CurrentTime from './components/CurrentTime'
import UpdateWeather from './components/UpdateWeather'

function App(props) {
  // You can create as many States as you want, here I have two of them
  // Any time a state changes, the page will render those changes in real time
  let now = new Date().toLocaleTimeString()
  const [time, setTime] = useState(now)
  const [weather, setWeather] = useState('sunny')

  const description = 'very'

  return (
    <div>
      {/* You can pass multiple props to a child. They are sent to the child as a JS object */}
      <HelloWorld weather={weather} description={description} />
      <GoodbyeWorld weather={weather} />
      <CurrentTime time={time} setTime={setTime} />
      <UpdateWeather weather={weather} setWeather={setWeather} />
    </div>
  )
}

export default App
