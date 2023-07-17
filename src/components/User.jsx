import React, { useState } from "react";
const User = () => {
  const [loginStatus, setLoginStatus] = useState(true);


// if(loginStatus) {
//   return <h1>Welcome John</h1>;
// } else {
//   return <h1>Welcome paul</h1>;
// }

/* let response;
if(loginStatus){
response = <h1>Welcome Sandy</h1>
}
else
{
  response = <h1>Welcome Rosy</h1>
}
return response; */

// return loginStatus ? <h1>Welcome Sandhya</h1> : <h1>Welcome Rosy</h1>;

//return loginStatus && <h1>Welcome johncena</h1>

//return !loginStatus && <h1>Welcome Trisha</h1>

return loginStatus ? (
  <button className="btn btn-danger">Logout</button>
)
: (
<button className="btn btn-primary">Login</button>
)
}
export default User;


