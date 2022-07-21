import Badge from 'react-bootstrap/Badge';
import './LoginRegister.css';

function PillExample() {
  return (
    <div className="Buttons">
      <Badge pill bg="light" text="dark" className="lightbutton">
      ㅤLog inㅤ
      </Badge>{' '}
      <Badge pill bg="dark" className="darkbutton">
      ㅤRegisterㅤ
      </Badge>
    </div>
  );
}

export default PillExample;