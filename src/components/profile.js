import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Btn ({profile}) {
    return (
      <Card className='col-md-04' style={{ width :'288px'}}>
        <Card.Img src={profile.Img} />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>
          {profile.desc}
          </Card.Text>
          <a href={link}target='-b' variant="primary"><Button> {profile.Btn} </Button></a>
        </Card.Body>
      </Card> 
    );
  }
export default Btn;