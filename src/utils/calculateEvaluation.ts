import confetti from 'canvas-confetti';

export const calculateEvaluation = (likedMotives: number) => {
  if (likedMotives === 1) {
    return 'Típica frase para quedar bien, ya lo he oído muchas veces...';
  }

  if (likedMotives === 2) {
    return 'Bueno, pensar así es importante, dice mucho de ella.';
  }

  if (likedMotives === 3) {
    return 'Esta chica me va gustando, ¿la damos una oportunidad?';
  }

  if (likedMotives === 4) {
    confetti({ particleCount: 100, spread: 70, origin: { x: 0.5, y: 0.6 } });
    return '¡Definitivamente tiene que formar parte de los grupos de "Adopta Un Junior"!';
  }

  return '¿No te han gustado mis motivos? Venga, que con alguno te sentirás identificad@...';
};
