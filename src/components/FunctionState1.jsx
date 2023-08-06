import React, { useState } from "react";

const Header = () => {
  //const [ firstName, setFirstName] = useState()

  /* const [firstName, setFirstName] = useState("Guest");
  const [email, setEmail] = useState("Guest@gmail.com");
 */

  const[user , setUser] = useState({
    firstName : "Guest",
    email : "guest@gmail.com"
  })

  const onClickHandler = () => {     // here we can use regular function also(events)  in functional component like onClickHandler(){--------} 
     /* setFirstName("john");
    setEmail("john@gmail.com"); 
 */
    setUser({
        ...user,   //if we used the spread operator, it keeps the firstname same and overrides the remaining properties means paul,guest@gmail.com 
        firstName: 'Paul',
        //email: 'Paul@gmail.com'
    })
  };

  return (
    <div>
      <h1>
        Hello {user.firstName}, {user.email}
      </h1>
      <button onClick={onClickHandler}> Login </button>
    </div>
  );
};
export default Header;
