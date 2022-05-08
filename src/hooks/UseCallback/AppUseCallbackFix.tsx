import React, { FunctionComponent  } from 'react'; // importing FunctionComponent

const AppUseCallbackFix: FunctionComponent<any> = () => {
  console.info("reader AppUseCallbackFix component [FIX]");
  const [age, setAge] = React.useState(99)
  const handleClick = () => setAge(age + 1)
  const someValue = "someValue"
  const doSomething = React.useCallback(() => {
    return someValue
  }, [someValue])

  return (
    <React.Fragment>
       
        <Age age={age} handleClick={handleClick}/>
        <Instructions doSomething={doSomething} />
      
    </React.Fragment>
  );
}

const Age: FunctionComponent<any> = ({ age, handleClick }) => {
  console.info("reader Age component [FIX]");
  return (
    <div>
      <div style={{ border: '2px', background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age [FIX]
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  )
}
 
const Instructions: FunctionComponent<any>  = React.memo(() => {
  console.info("reader Instructions component [FIX]");
  return (
    <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
     <p>Click to print hook logs [FIX]</p>
    </div>
  )
})

export default AppUseCallbackFix;
