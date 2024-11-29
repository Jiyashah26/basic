import logo from './logo.svg';
import './App.css';

function App() {

  /** Algorithm
   * Define a variable
   * Use a variable
   */
  const heading = "Profile";
  const Age = "Age: 20";
  const verified = false;


  /**Algorithm
   * Return name (to use Same business logic)
   */

  //type 1

  function printName(){
    console.log("Tehseen");
  }
  printName()

 //type 2 
  function getname(){
    const name="Tehseen";
    return name;

  }

  //type 3 
  function printPassName(name){
    console.log (name);
  }

  //printpassname ("Tehseen")
  //type 4 


  // function add(a,b){
  //   const result = a + b;
  //   return result;
  // }

  function add(a,b){
    const result = a + b;
    return result;
  }
  function subtract(a,b){
    const result = a - b;
    return result;
  }
  function multi(a,b){
    const result = a * b;
    return result;
  }
  function division(a,b){
    const result = a /b;
    return result;
  }
  




  

  return (
    <div className="App">
      <h1>{heading}</h1>
      <p>{getname()}</p>
      <p>{Age}</p>
      <p>result add: {add (10,8)}</p>
      <p>result subtract: {subtract (20,8)}</p>
      <p>result multiplication: {multi(2,5)}</p>
      <p>result division: {division (10,2)}</p>
      <p>verified: {(verified == true) ? "Yes" : "No"}</p>
      
    </div>
  )
}

export default App;
