import { useCallback, useState } from 'react';
import { MOTIVES } from '../assets/data';

export function useLikes() {
  const [likes, setLikes] = useState<boolean[]>(MOTIVES.map(() => false));

  const totalLikes = likes.filter((v) => v).length;

  const handleLikedReason = useCallback((id: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, index) => (index + 1 === id ? !like : like)),
    );
  }, []);

  return { handleLikedReason, likes, totalLikes };
}
