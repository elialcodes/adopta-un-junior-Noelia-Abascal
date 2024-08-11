import { useState, useEffect } from 'react';
import { motives, Motive } from '../assets/data';

export function useLikes() {
  const [reasons, setReasons] = useState<Motive[]>(motives);
  const [rate, setRate] = useState<string>('¿Qué te parecen mis motivos?');

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

  const valoration = (totalLikes: number) => {
    if (totalLikes === 0) {
      setRate(
        '¿No te ha gustado mis motivos? Venga, que con alguno te sentirás identificad@...',
      );
    }
    if (totalLikes === 1) {
      setRate('Típica frase para quedar bien, ya lo he oído muchas veces...');
    }
    if (totalLikes === 2) {
      setRate('Bueno, pensar a así es importante, dice mucho de ella.');
    }
    if (totalLikes === 3) {
      setRate('Esta chica me va gustando, ¿la damos una oportunidad?');
    }
    if (totalLikes === 4) {
      setRate(
        '¡Definitivamente tiene que formar parte de los grupos de Adopta Un Junior!',
      );
    }
  };

  useEffect(() => {
    valoration(totalLikes);
  }, [totalLikes]);

  return { reasons, handleLikedReason, totalLikes, rate };
}
