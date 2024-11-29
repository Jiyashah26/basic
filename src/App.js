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
  function add(a,b){
    const result = a + b;
    return result;
  }
  

  return (
    <div className="App">
      <h1>{heading}</h1>
      <p>{getname()}</p>
      <p>{Age}</p>
      <p>result: {add (5,8)}</p>
      <p>verified: {(verified == true) ? "Yes" : "No"}</p>
      
    </div>
  )
}

export default App;
