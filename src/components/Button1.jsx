
/* Notice that <MyButton /> starts with a capital letter. 
That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase. */


/*
Without hooks
*/

const MyButton = () => {

    let value = 0;

    const incrementValue = () => {
         value = value +1;
         console.log("Inside the function incrementValue",value)
         return value;
    }

    return (
        <div>
         <h1>this is first button</h1>
         <button onClick = {incrementValue} >value is {value}</button>
        </div>
    )

};
export default MyButton;