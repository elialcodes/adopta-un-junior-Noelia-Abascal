import Card from './Card';
import { reasons } from '../assets/data';

function CardList(): JSX.Element {
  return (
    <div>
      <ul className="list">
        {reasons.map((reason) => {
          return <Card key={reason.id} reason={reason} />;
        })}
      </ul>
    </div>
  );
}

export default CardList;
