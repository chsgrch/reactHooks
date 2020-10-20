import React from 'react'
import ReactDOM from 'react-dom'
import { UseContext, ContextWithoutUseContext } from './components/context'
import UseStateHook from './components/use-state'
import UseEffect from './components/use-effect'

const MyContext = React.createContext();
export { MyContext }

const mt = ({ marginTop: '1em' })

const App = () => {
  return (
    <MyContext.Provider value={'Data from Provider in parent component'}>
      <UseStateHook />
      <fieldset style={mt}>
        <legend>Context</legend>
        <UseContext />
        <ContextWithoutUseContext />
      </fieldset>
      <UseEffect style={mt} />
    </MyContext.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))