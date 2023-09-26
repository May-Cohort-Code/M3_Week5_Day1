 
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/Theme.context";
 
function Navbar() {
    const {theme,setTheme} = useContext(ThemeContext)

    function changeTheme(){
        if(theme==="light"){
            setTheme('dark')
        }
        else{
            setTheme("light")
        }
    }
  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
      </div>
      <button onClick={()=>{changeTheme()}}>
        {theme==="light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
}
 
export default Navbar;



//exerecise:

// in our theme context add an additional value for studentName: "Your Name"

// in our homepage display your name from the context after "My Name is Bob"