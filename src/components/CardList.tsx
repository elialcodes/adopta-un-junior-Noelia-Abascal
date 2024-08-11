import Card from './Card';
import { useState } from 'react';
import { motives, Motive } from '../assets/data';

function CardList(): JSX.Element {
  const [reasons, setReasons] = useState(motives);

  const handleLikedReason = (id: number) => {
    setReasons((prevReasons) =>
      prevReasons.map((reason) =>
        reason.id === id
          ? { ...reason, like: !reason.like } // Alterna el valor de `like`
          : reason,
      ),
    );
  };

  const likedReasons = (reasons: Motive[]): Motive[] => {
    return reasons.filter((reason) => reason.like === true);
  };

  const totalLikes = likedReasons(reasons).length;

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
    </div>
  );
}

export default CardList;
