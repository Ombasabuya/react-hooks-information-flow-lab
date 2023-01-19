
import React from "react";
function Header({onDarkModeClick,theAppTheme}){
    console.log(onDarkModeClick)
    return(
    <header>
        <h2>Shop</h2>
        <button onClick={onDarkModeClick} >{theAppTheme?"Dark Mode":"Light Mode"}</button>
    </header>
    )
}
export default Header;