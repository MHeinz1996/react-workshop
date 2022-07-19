function HelloWorld(props) { 
    return (
      <h1 className="my-class">Hello World! The weather is {props.description} {props.weather}.</h1>
    )
}

export default HelloWorld