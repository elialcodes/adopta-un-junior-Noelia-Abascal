import { useCallback, useState } from 'react';
import { MOTIVES } from '../assets/data';

export function useLikes() {
  const [likes, setLikes] = useState<boolean[]>(MOTIVES.map(() => false));

  const totalLikes = likes.filter((v) => v).length;

  const handleLikedReason = useCallback((index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? !like : like)),
    );
  }, []);

  console.log(totalLikes);
  return { handleLikedReason, likes, totalLikes };
}
