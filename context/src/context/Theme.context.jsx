import { createContext, useState } from "react";

//creates the context
const ThemeContext = createContext()


function ThemeProviderWrapper(props) {
    const [theme,setTheme] = useState('dark')
 
    return (
      <ThemeContext.Provider value={{theme,setTheme,studentName:"Bright"}}>
          {props.children}
      </ThemeContext.Provider>
    )
  }


  //when we create context we want to export 2 things
  
  // 1. the context itself (created with createContext())

  // 2. Provider Component


  export {ThemeContext, ThemeProviderWrapper}