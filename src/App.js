import logo from './logo.svg';
import './App.css';
import Btn from './components/Btn';
import Profile from './components/profile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

 const profile = [
  {
   name: 'Tehseen',
   img:"https://avatars.githubusercontent.com/u/182941013?s=48&v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/',
   Btn :'Github Profile',

  },
  {
   name: 'Nawaf',
   img:"https://avatars.githubusercontent.com/u/182943003?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/Sknawaf05',
   Btn :'Github Profile',

  },
  {
   name: 'Rumana',
   img:"https://avatars.githubusercontent.com/u/185526264?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/Rumanamotiwala',
   Btn :'Github Profile',

  },
  {
   name: 'Mohammad',
   img:"https://avatars.githubusercontent.com/u/185525438?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/gaghamohammad',
   Btn :'Github Profile',

  },
  {
   name: 'Bashir',
   img:"https://avatars.githubusercontent.com/u/182937907?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/Basheer107',
   Btn :'Github Profile',

  },
  {
   name: 'saad',
   img:"https://avatars.githubusercontent.com/u/182938196?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/shk-sam',
   Btn :'Github Profile',

  },
  {
   name: 'prince',
   img:"https://avatars.githubusercontent.com/u/111479652?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/pri810',
   Btn :'Github Profile',

  },
  {
   name: 'Moinuddin',
   img:"https://avatars.githubusercontent.com/u/186063909?v=4",
   desc: 'Student at Vocab',
   link: 'https://github.com/moinuddin-4678',
   Btn :'Github Profile',

  },
]
 

  return (
    <div className= "container">
      <div className='row'>
      <h1>Profile</h1>
      
      

      {
        profile.map((profile)=>{
          return <Profile profile={profile} />
        })
      }
  
      
    

      
    </div>
      {/* <p><Btn name= "SHOP NOW "/></p>
      <Btn name= "HELLO "/> */}
    </div>

  );
  
}



export default App;

