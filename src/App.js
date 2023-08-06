import logo from './logo.svg';
import './App.css';
//import Header from './components/ClassState';
import Header from './components/FunctionState1';
import MyButton from './components/Button1';
import HookButton from './components/ButtonHook1';
//import User from './components/User';
//import Person from './components/Person';
//import Employees from './components/Employees';

function App() {
  return (
    <div className="container">
    
         <Header /> 
       {/*  <Person /> */}
       {/* <User /> */}
        {/* <Employees /> */}
      <MyButton/>
      <HookButton />
    </div>
  );
}

export default App;
