export interface Reason {
  id: number;
  motive: string;
  description: string;
}

export type Reasons = Reason[];

export const reasons: Reasons = [
  {
    id: 1,
    motive: 'Me gusta aprender',
    description: 'Me queda mucho camino, pero ya lo he empezado!',
  },
  {
    id: 2,
    motive: 'Me siento a gusto trabajando en grupo',
    description:
      'Compartir conocimientos, logros y por qué no, tambien frustraciones cuando las cosas no salen como quieres.',
  },
  {
    id: 3,
    motive: 'Quiero ser developer',
    description:
      'Se que me voy a dedicar a ello algún día, igual que tú. Pero mientras a programar se aprende programando',
  },
  {
    id: 4,
    motive: 'Nunca es tarde',
    description:
      'He reconducido mi carrera profesional con 46 años, pero nunca es tarde si lo desea con ganas',
  },
];
