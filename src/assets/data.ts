export interface Motive {
  id: number;
  title: string;
  description: string;
}

export const MOTIVES: Motive[] = [
  {
    id: 1,
    title: 'Me gusta aprender',
    description: 'Me queda mucho camino, pero ya lo he empezado!',
  },
  {
    id: 2,
    title: 'Me siento a gusto trabajando en grupo',
    description:
      'Compartir conocimientos, logros y por qué no, tambien frustraciones cuando las cosas no salen como quieres.',
  },
  {
    id: 3,
    title: 'Quiero ser developer',
    description:
      'Se que me voy a dedicar a ello algún día, pero mientras, a programar se aprende programando.',
  },
  {
    id: 4,
    title: 'Nunca es tarde',
    description:
      'He reconducido mi carrera profesional con 46 años, pero nunca es tarde si lo desea con ganas.',
  },
];
