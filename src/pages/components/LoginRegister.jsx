import Badge from 'react-bootstrap/Badge';
import './LoginRegister.css';
import { Link } from 'react-router-dom';

function PillExample() {
  return (
    <div className="Buttons">
      <Link to = "/login">
      <Badge pill bg="light" text="dark" className="lightbutton">
      &nbsp;&nbsp;Log in&nbsp;&nbsp;
      </Badge></Link>
      {' '}
      <Badge pill bg="dark" className="darkbutton">
      &nbsp;&nbsp;Register&nbsp;&nbsp;
      </Badge>
    </div>
  );
}

export default PillExample;