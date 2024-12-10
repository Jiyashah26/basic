 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import App from '../App';

function profile ({profile}) {
    return (
      <Card className='col-md-4'>
        <Card.Img variant= "Top"src={profile.img} />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>
          {profile.desc}
          </Card.Text>
          <a href={profile.link}target='-'><Button variant="primary"> {profile.Btn} </Button></a>
        </Card.Body>
      </Card> 
    )
  }
export default profile;