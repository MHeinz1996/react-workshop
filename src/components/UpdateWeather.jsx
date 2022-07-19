function UpdateWeather(props) { 

    const { weather, setWeather } = props

    const updateWeather = () => {
        if (weather == 'sunny') {
        setWeather('cloudy')
        } else {
        setWeather('sunny')
        }
    }

    return (
        <button onClick={updateWeather}>Update Weather</button>
    )
}
  
export default UpdateWeather