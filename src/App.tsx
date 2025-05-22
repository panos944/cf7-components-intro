// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent"
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType"
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps"
// import ClassComponent from "./components/ClassComponent"
// import FunctionalComponent from "./components/FunctionalComponent"
import Layout from "./components/Layout"
// import Header from "./components/header"
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState"
import Counter from "./components/Counter"

// import CodingFactoryLogo from "./components/CodingFactoryLogo"

function App() {
  

  return (
    <>
         <Layout>

        {/* <ClassComponent/> */}
        {/* <FunctionalComponent/> */}
        {/* <ArrowFunctionalComponent/> */}
        {/* <ArrowFunctionalComponentWithProps title="Is a Arrow Functional Component with Props"/> */}
        {/* <ArrowFunctionalComponentWithPropsType 
        title="Is a Arrow Functional Component with Props"
        description="this is a description" /> */}
         {/* <FunctionalComponentWithState/> */}
         <Counter/>
        
         </Layout>
    </>
  )
}

export default App
