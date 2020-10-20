import React, { useContext } from 'react'
import { MyContext } from '../../index'

const UseContext = () => {
  const value = useContext(MyContext)
  return (
    <fieldset>
      <legend>Work <b>with</b> 'context', use 'useContext' from React </legend>
      <p>
        {value}
      </p>
    </fieldset>
  )
}

const ContextWithoutUseContext = () => {
  return (
    <MyContext.Consumer>
      {
        (value) => {
          return (
            <fieldset>
              <legend>Work with 'context', <b>without</b> use 'useContext' from React </legend>
              <p>
                {value}
              </p>
            </fieldset>
          )
        }
      }
    </MyContext.Consumer>
  )
}

export { UseContext, ContextWithoutUseContext }