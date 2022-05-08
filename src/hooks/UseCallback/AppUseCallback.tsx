import React, { FunctionComponent  } from 'react'; // importing FunctionComponent


/**
 * useCallback returns a memoized callback.
 * Call signature: const memoizedCallback = useCallback(function, arrayDependency)
 * @returns 
 */
const AppUseCallback: FunctionComponent<any> = () => {
  
  const [age, setAge] = React.useState(99)
  const handleClick = () => setAge(age + 1)
  const someValue = "someValue"
  const doSomething = () => {
    return someValue
  }
  React.useEffect(() => console.info("Re-render AppUseCallback component"))
  return (
    <React.Fragment>
       
        <Age age={age} handleClick={handleClick}/>
        <Instructions doSomething={doSomething} />
      
    </React.Fragment>
  );
}

const Age: FunctionComponent<any> = ({ age, handleClick }) => {
  React.useEffect(() => console.info("Re-render  Age component"))
 
  return (
    <div>
      <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}

/**
 * NB: Even though the Instructions child component uses React.memo to optimize performace,
 *  it is still re-rendered.
 */
const Instructions: FunctionComponent<any>  = React.memo(() => {
 
  React.useEffect(() => console.info("Re-render  Instructions component"))

  return (
    <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
      <p>Click to print hook logs </p>
    </div>
  )
})

export default AppUseCallback;
