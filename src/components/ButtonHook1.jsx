import { useState } from "react";


const HookButton = () => {

    //let value = 0;
    const[value, setValue] = useState(0);


    const incrementValue = () => {
        setValue(value +1);
        console.log("Inside the function incrementValue",value)         
    }

    return (
        <div>
         <h1>this is first button from react hook 'useState'</h1>
         <button onClick = {incrementValue} >value is {value}</button>
        </div>
    )

};
export default HookButton;