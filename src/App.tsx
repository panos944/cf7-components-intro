import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent"
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType"
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps"
import ClassComponent from "./components/ClassComponent"
import FunctionalComponent from "./components/FunctionalComponent"

function App() {
  

  return (
    <>
    <ClassComponent/>
      <FunctionalComponent/>
        <ArrowFunctionalComponent/>
        <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props"/>
        <ArrowFunctionalComponentWithPropsType 
        title="Is a Arrow Functional Component with Props"
        description="this is a description"
         />
    </>
  )
}

export default App
