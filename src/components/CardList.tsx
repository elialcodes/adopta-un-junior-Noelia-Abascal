import Card from './Card';
import { useLikes } from '../hooks/useLikes';

function CardList(): JSX.Element {
  const { reasons, handleLikedReason, totalLikes } = useLikes();
  return (
    <div>
      <ul className="list">
        {reasons.map((reason) => {
          return (
            <Card
              key={reason.id}
              reason={reason}
              handleClick={handleLikedReason}
            />
          );
        })}
      </ul>
      <p>Valoraciones: {totalLikes} Me gusta</p>
    </div>
  );
}

export default CardList;
