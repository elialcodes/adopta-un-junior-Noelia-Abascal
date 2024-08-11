import { useState } from 'react';
import { motives, Motive } from '../assets/data';

export function useLikes() {
  const [reasons, setReasons] = useState<Motive[]>(motives);

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

  return { reasons, handleLikedReason, totalLikes };
}
