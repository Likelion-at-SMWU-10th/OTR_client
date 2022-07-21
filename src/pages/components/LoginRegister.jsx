import Badge from 'react-bootstrap/Badge';
import './LoginRegister.css';
import { Link } from 'react-router-dom';

function PillExample() {
  return (
    <div className="Buttons">
      <Link to = "/login">
      <Badge pill bg="light" text="dark" className="lightbutton">
      ㅤLog inㅤ
      </Badge></Link>
      {' '}
      <Badge pill bg="dark" className="darkbutton">
      ㅤRegisterㅤ
      </Badge>
    </div>
  );
}

export default PillExample;