// predefined components
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// custom components
import Btn from "./components/Btn";
import Profile from "./components/Profile";
import ProfileTable from "./components/ProfileTable";
import { useState } from "react";

function App() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")

  const [profiles, setProfiles] = useState([]);
 

  return (
    <div className= "container">
      <div className='row'>
      <h1>Profile</h1>

      <div className='col-md-8'>
      <ProfileTable profiles={profiles} />
      </div>
      <div className="col-md-4">
          <div className="card">
            {/* heading */}
            <div className="card-header">
              <h3>Create Profile</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>{setDesc(e.target.value)}}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e)=>{setLink(e.target.value)}}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e)=>{
                  e.preventDefault()
                  setProfiles((old)=>[{
                    name: name,
                    desc: desc,
                    link: link,
                  },
                    ...old
                  ])
                }}>
                  Add Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row'>
        {
          profiles.map((profile)=>{
            return <Profile profile={profile} />
          })
        }
      </div> */}
      {/* <Btn name="Sign Up"/> */}
    </div>
  );
}

export default App;



