function GoodbyeWorld(props) {

    // A deconstructor that allows us to circumvent having to type props.key
    // does the same thing as 'const weather = props.weather' for ex.
    const { weather } = props

    if(weather === 'cloudy') {
        return(
            <h1 className="my-class">Goodbye World! 🙃🔫</h1>
        )
    } else {
        return(
                <h1 className="my-class">Yay!</h1>
        )
    }
}

export default GoodbyeWorld