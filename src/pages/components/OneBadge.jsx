import Badge from 'react-bootstrap/Badge';

function PillExample() {
  return (
    <div><img className="icon" src='img/star.png' alt="수정"></img>&nbsp;유서 제목&nbsp;&nbsp;
      <Badge pill bg="warning" text="dark">
        대표
      </Badge>{' '}
    </div>
  );
}

export default PillExample;