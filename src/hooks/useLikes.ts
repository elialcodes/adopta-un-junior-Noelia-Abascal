import { useCallback, useState } from 'react';
import { MOTIVES } from '../assets/data';

export function useLikes() {
  const [likes, setLikes] = useState<boolean[]>(MOTIVES.map(() => false));
  console.log(likes);
  const totalLikes = likes.filter((v) => v).length;
  console.log(totalLikes);

  const handleLikedReason = useCallback((index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i + 1 === index ? !like : like)),
    );
  }, []);

  console.log(totalLikes);
  return { handleLikedReason, likes, totalLikes };
}
