function CurrentTime(props) { 
  const { time, setTime } = props

  const updateTime = () => {
    let now = new Date().toLocaleTimeString()
    setTime(now)  //Must use setTime to change the value of the useState. NEVER CHANGE THE VALUE MANUALLY
  }

  // Every second, setInterval will update the useState, 
  // rendering the new information since the state has changed
  setInterval(updateTime, 1000)

  return (
    <h1>Current time is {time}</h1>
  )
}

export default CurrentTime