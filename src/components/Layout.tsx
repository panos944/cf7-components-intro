import React from "react"
import Footer from "./Footer";
import Header from "./header";
import FunctionalComponent from "./FunctionalComponent";

interface LayoutProps{
  children: React.ReactNode
}


const Layout = ({children}:LayoutProps) => {
  return (
    <>  
    <Header/>
      <FunctionalComponent/>
        <div className="mx-auto min-h-[95vh] pt-24">
          {children}
        </div> 
    <Footer/>
    </>
  )
}

export default Layout;