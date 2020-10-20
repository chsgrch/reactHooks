import React, { useEffect, useState, Component } from 'react'
import PlanetInfo from '../planet-info'

const UseEffect = () => {
  const [visible, setVisible] = useState(true);
  const [counter, incrementCounter] = useState(1);

  const buttonStyle = ({ padding: '10px', backgroundColor: 'white' })

  const onIncrementCounter = () =>
    incrementCounter(counter => counter + 1)

  const onDecrementCounter = () =>
    incrementCounter(counter => counter - 1)

  const onChangeVisible = (value) =>
    setVisible(value)
  const mt = ({ marginTop: '1em' })
  if (visible) {
    return (
      <fieldset style={mt}>
        <legend>useEffect</legend>
        <button style={buttonStyle}
          onClick={() => onIncrementCounter()}>+</button>
        <button style={buttonStyle}
          onClick={() => onDecrementCounter()}>-</button>
        <button style={buttonStyle}
          onClick={() => onChangeVisible(false)}>Hide</button>
        <HookCounter count={counter} />
        <ClassCounter count={counter} />
        <Notification />
        <PlanetInfo id={counter} />
      </fieldset>
    )
  } else {
    return (
      <button style={buttonStyle} onClick={() => onChangeVisible(true)}>Show</button>
    )
  }
}

const HookCounter = ({ count }) => {

  useEffect(() => {
    console.log('IN FUNCTION => componentDidMount');
    return () => console.log('IN FUNCTION => componentWillUnmount');
  }, []);

  useEffect(() => {
    console.log('IN FUNCTION => componentDidUpdate')
  })

  return <p>HookCounter counter value is: {count}</p>
}

const Notification = () => {
  const [visible, changeVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => { changeVisible(false) }, 2500)
    return () => {
      console.log('Clear timeout');
      clearTimeout(timeout)
    }
  }, [])

  return (<div>
    {visible && <p>Hello World!</p>}
  </div>)
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('IN CLASS | class : mount')
  }
  componentDidUpdate() {
    console.log('IN CLASS | class: update')
  }
  componentWillUnmount() {
    console.log('IN CLASS | class: unmount')
  }
  render() {
    return (
      <p>ClassCounter counter value is: {this.props.count}</p>
    )
  }
}



export default UseEffect;