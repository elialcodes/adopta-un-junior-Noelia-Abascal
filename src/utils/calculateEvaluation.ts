export const calculateEvaluation = (likedMotives: number) => {
  if (likedMotives === 1) {
    return 'Típica frase para quedar bien, ya lo he oído muchas veces...';
  }
  if (likedMotives === 2) {
    return 'Bueno, pensar a así es importante, dice mucho de ella.';
  }
  if (likedMotives === 3) {
    return 'Esta chica me va gustando, ¿la damos una oportunidad?';
  }
  if (likedMotives === 4) {
    return '¡Definitivamente tiene que formar parte de los grupos de "Adopta Un Junior"!';
  }

  return '¿No te ha gustado mis motivos? Venga, que con alguno te sentirás identificad@...';
};
