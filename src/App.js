import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';
import Profile from './components/profile';

function App() {

 const profile = [
  {
   name: 'Tehseen',
   Img:"https://avatars.githubusercontent.com/u/182941013?s=48&v=4",
   desc: 'I have completed with my Graduation from AE kalsekar college',
   link: 'https://github.com/',
   Btn :'Github Profile',

  },
  {
   name: 'Tehseen',
   Img:"https://avatars.githubusercontent.com/u/182941013?s=48&v=4",
   desc: 'I have completed with my Graduation from AE kalsekar college',
   link: 'https://github.com/',
   Btn :'Github Profile',

  },
  {
   name: 'Tehseen',
   Img:"https://avatars.githubusercontent.com/u/182941013?s=48&v=4",
   desc: 'I have completed with my Graduation from AE kalsekar college',
   link: 'https://github.com/',
   Btn :'Github Profile',

  }
]
 

  return (
    <div className= "container">
      <div className='row'>
      <h1>Basic App</h1>
      {
        profile.map ((profile)=>{
          return <profile profile={profile} />
        })
      }
  
      {/* <p><Btn name= "SHOP NOW "/></p>
      <Btn name= "HELLO "/> */}
    

      
    </div>
    </div>

  )
  
}



export default App;

